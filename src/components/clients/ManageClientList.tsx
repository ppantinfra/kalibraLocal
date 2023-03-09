import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import johnPic from '../../assets/images/avatar.png';
import { useDashboardClientListStyles } from './DashboardClientListStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import upArrowIconIg from '../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../assets/images/downArrowIcon.svg';
import TablePagination from '@mui/material/TablePagination';
import Switch from '@mui/material/Switch';
import tickIcon from '../../assets/images/tick.svg';
import dashedIcon from '../../assets/images/dashed.svg';
import { ConfirmDialog } from './partials';
import { UserService } from '../../core';
import StringAvatarHelper from '../../core/helper/StringAvatarHelper';
import Checkbox from '@mui/material/Checkbox';


const ManageClientList = ({ manageClientList, demoMode, getClientListHandler, sortHandler, selectedTab }) => {
  const classes = useDashboardClientListStyles();
  const [showDeactivatePopup, setShowDeactivatePopup] = useState(false);
  const [showReinvitePopup, setShowReinvitePopup] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedUser, setSelecteduser] = useState<any>({});
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);
  const [showAddClientPopup, setShowAddClientPopup] = useState(false);
  const [showRemoveClientPopup, setShowRemoveClientPopup] = useState(false);
  const [updatedManageClientList, setUpdatedManageClientList] = useState<any[]>([]);

  React.useEffect(() => {
    if (manageClientList.length > 0) {
      const staticCols = ['apple', 'google', 'fitbit', 'oura', 'whoop', 'garmin'];
      const tempManageClientList: any = [];
      for (const client of manageClientList) {
        const wearables: any = [];
        // adding first 5 cols
        for (const key of staticCols) {
          const obj = client.wearables.find(o => o.provider === key);
          wearables.push(obj);
        }
        for (const wearable of client.wearables) {
          if (!staticCols.includes(wearable?.provider)) {
            wearables.push(wearable);
          }
        }
        client.wearables = wearables;
        tempManageClientList.push(client);
      }
      setUpdatedManageClientList(tempManageClientList);
    }
  }, [manageClientList]);


  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const sortClick = (property: string, type: string, objKey?: string) => {
    const array: string[] = [];
    const propertyName = property ? property : objKey;
    let sortButtonName: string;
    if (type === 'asc') {
      sortButtonName = propertyName + 'Up';
    } else {
      sortButtonName = propertyName + 'Down';
    }
    array.push(sortButtonName);
    setSortClickedArray(array);
    sortHandler(property, type, objKey);
  };



  const handleStatusChange = (user: any) => () => {
    setSelecteduser(user);
    if (user?.isActive) {
      setShowDeactivatePopup(true);
    }
  };

  const handleClickReinvite = (user: any) => {
    setSelecteduser(user);
    setShowReinvitePopup(true);
  };


  const deactivateButtonHandler = async () => {
    await UserService.updateClientStatus(selectedUser?.userId).then(() => {
      getClientListHandler();

    });
  };

  const reinviteButtonHandler = async () => {
    const body = { 'userId': selectedUser?.userId };

    await UserService.sendDataSharingInviteToUser(body).then(() => {
      getClientListHandler();
    });
  };

  const addClientHandler = async () => {
    await UserService.addUserToOrganization(selectedUser?.userId).then(() => {
      getClientListHandler();
    });
  };

  const removeClientHandler = async () => {
    await UserService.removeUserFromOrganization(selectedUser?.userId).then(() => {
      getClientListHandler();
    });
  };

  const addToMyClient = (event: React.ChangeEvent<HTMLInputElement>, user: any) => {
    setSelecteduser(user);
    if (event.target.checked) {
      setShowAddClientPopup(true);
    } else {
      setShowRemoveClientPopup(true);
    }
  };

  // const getOthersValue = (wearables: any) => {
  //   const totalLength = wearables.length;
  //   let containedLength = 0;
  //   if (totalLength > 0) {
  //     if (wearables.includes('apple')) {
  //       containedLength++;
  //     }
  //     if (wearables.includes('garmin')) {
  //       containedLength++;
  //     }
  //     if (wearables.includes('fitbit')) {
  //       containedLength++;
  //     }
  //     if (wearables.includes('oura')) {
  //       containedLength++;
  //     }
  //   }

  //   const othersLength = totalLength - containedLength;
  //   if (othersLength > 0) {
  //     return (
  //       <Link className={classes.reinviteLink}>{othersLength} more</Link>
  //     );
  //   } else {
  //     return (
  //       <img src={dashedIcon} alt="" />
  //     );
  //   }
  // };

  const renderProviderName = () => {
    if (updatedManageClientList === undefined || updatedManageClientList.length === 0) {
      return <></>;
    }
    return updatedManageClientList[0].wearables.map((item) => {
      return (
        <TableCell key={item.provider} style={{ minWidth: 91 }} className={classes.tableHeading}>
          <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important', textTransform: 'capitalize' }}>
            {String(item.provider)}
          </Typography>
        </TableCell>
      );
    });
  };

  const renderProviderStatus = (user: any) => {

    return user.wearables.map((item) => {
      return (
        <TableCell key={item.provider}>
          {item.connected === true ? <img src={tickIcon} alt="" /> : <img src={dashedIcon} alt="" />}
        </TableCell>
      );
    });
  };

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <TableContainer component={Paper} className={classes.mui_tableContainer}>
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="client table"
            className={`${classes.mui_table} ${classes.mui_table_inactiveList}`}
          >
            <TableHead>
              <TableRow>
                {/* Name */}
                <TableCell
                  style={{
                    maxWidth: 150
                  }}
                  className={`${classes.tableHeadCell} ${classes.manageClientNameTableHeadCell} clientNameTableHeadCell `}
                >
                  <Box
                    className={
                      demoMode === true
                        ? `${classes.tableHeadCellBox} `
                        : `${classes.tableHeadCellBox} ${classes.tableHeadFirstCellBox} `
                    }
                  >
                    <Box
                      className={
                        demoMode === true ? `${classes.clientName} clientNameCenter` : `${classes.clientName} `
                      }
                    >
                      Client Name
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('userNameUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('userName', 'asc')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('userNameDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('userName', 'desc')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Status */}
                <TableCell
                  align="left"
                  style={{ minWidth: 91, textAlign: 'left', paddingLeft: '10px' }}
                  className={`${classes.tableHeading}`}
                >
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important' }}>Status</Typography>
                </TableCell>

                {/* My clients */}

                {selectedTab === 'AllClients' && <TableCell
                  align="left"
                  style={{ minWidth: 120, textAlign: 'left', paddingLeft: '10px' }}
                  className={`${classes.tableHeading}`}
                >
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important' }}>My Clients</Typography>
                </TableCell>}
                {renderProviderName()}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? (updatedManageClientList || []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : updatedManageClientList
              ).map((user: any, index: any) => (
                <React.Fragment key={index}>
                  <TableRow className={classes.tableBodyRow} key={index}>
                    {/* name */}
                    <TableCell className={`${classes.tableBodyCell} ${classes.manageClientNameTableBodyCell}`}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          columnGap: '10px'
                        }}
                      >
                        {user.isActive === true ? (
                          <Avatar alt={johnPic} src={johnPic} className={classes.UserAvatar} />
                        ) : (
                          <Avatar {...StringAvatarHelper(user?.userName)} className={classes.UserAvatar} />
                        )}
                        <span className={classes.userInfo}>
                          <Typography className={`${classes.userName} ${classes.disableHover}`}>{user?.userName}</Typography>
                        </span>
                      </Box>
                    </TableCell>
                    {/* Status */}
                    <TableCell style={{ textAlign: 'left' }}>
                      <Box className={classes.activeStatus}>
                        <Switch
                          // checked={checked}
                          checked={user.isActive}
                          // disabled={user.status === false ? true : false}
                          onChange={handleStatusChange(user)}
                          // onClick={handleStatus(user.status)}
                          inputProps={{ 'aria-label': 'controlled' }}
                          name={user.userName}
                          value={user.isActive}
                          className={user.isActive ? '' : classes.disablePointer}
                        />
                        <Box>
                          {user.isActive === false && (
                            <Link
                              className={classes.reinviteLink}
                              onClick={() => handleClickReinvite(user)}
                            >
                              Reinvite
                            </Link>
                          )}
                        </Box>
                      </Box>
                    </TableCell>

                    {/* My Clients */}
                    {selectedTab === 'AllClients' && <TableCell style={{ textAlign: 'left' }}>
                      <Box className={classes.activeStatus}>

                        <Checkbox
                          checked={user.myClient}
                          disabled={user.isActive === false ? true : false}
                          onChange={(event) => addToMyClient(event, user)}
                          inputProps={{ 'aria-label': 'controlled' }}
                          name={user.userName}
                          value={user.myClient}
                        />
                      </Box>
                    </TableCell>}


                    {renderProviderStatus(user)}
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={updatedManageClientList.length}
          rowsPerPage={rowsPerPage}
          className={classes.pagination}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledEngineProvider>




      {/* Deactivate Dialog */}
      <ConfirmDialog
        setShowConfirmPopup={setShowDeactivatePopup}
        isOpen={showDeactivatePopup}
        caption="Deactivate Client?"
        description={`You will not be able to view ${selectedUser?.userName}  data once you deactivate. You can view past assessments that you have conducted for her, but nothing else. You may choose to activate again by reinviting her, with her permission. Are you sure you want to deactivate? `}
        confirmButtonLabel="Deactivate"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={deactivateButtonHandler}
        cancelButtonHandler={() => {
          setShowDeactivatePopup(false);
        }}
      />


      {/*  ReInvite Dialog */}
      <ConfirmDialog
        setShowConfirmPopup={setShowReinvitePopup}
        isOpen={showReinvitePopup}
        caption="Reinvite Client?"
        description={`You can start collaborating with ${selectedUser?.userName}  and view their data once they accepts your reinvitation request. `}
        confirmButtonLabel="Reinvite"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={reinviteButtonHandler}
        cancelButtonHandler={() => {
          setShowReinvitePopup(false);
        }}
      />


      {/*  Add Client Dialog */}
      <ConfirmDialog
        setShowConfirmPopup={setShowAddClientPopup}
        isOpen={showAddClientPopup}
        caption="Add to your clients?"
        description={` Are you sure you want to add ${selectedUser?.userName}  to your client list? You can start interacting with him once you do. `}
        confirmButtonLabel="Add"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={addClientHandler}
        cancelButtonHandler={() => {
          setShowAddClientPopup(false);
        }}
      />

      {/*  Remove Client Dialog */}
      <ConfirmDialog
        setShowConfirmPopup={setShowRemoveClientPopup}
        isOpen={showRemoveClientPopup}
        caption="Remove from your clients?"
        description={`Are you sure you want to remove ${selectedUser?.userName}  from your client list? You can add him back later. `}
        confirmButtonLabel="Remove"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={removeClientHandler}
        cancelButtonHandler={() => {
          setShowRemoveClientPopup(false);
        }}
      />


    </React.Fragment>
  );
};

export default ManageClientList;
