import React, { useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import johnPic from '../../assets/images/avatar.png';
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
import { CommonContext, CommonContextType } from '../../core/context';
import { useManageOrganizationListStyles } from './ManageOrganizationListStyles';
import { ActionDrawerEnum } from '../../core/enums';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../core/constants';

const ManageOrganizationList = ({ userList, sortHandler, toggleRightDrawer }) => {
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);
  const classes = useManageOrganizationListStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { tenantKey, loggedInUserData } = useContext(CommonContext) as CommonContextType;
  const navigate = useNavigate();

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

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getSelectedRoles = (rolesArray: any) => {
    const selectedRoles: any = [];
    if (rolesArray && rolesArray.length > 0) {
      for (const role of rolesArray) {
        if (role?.tenant === tenantKey) {
          if (role?.isOwner) {
            selectedRoles.push({ key: 'isOwner', value: 'Owner' });
          }
          if (role?.isAdmin) {
            selectedRoles.push({ key: 'isAdmin', value: 'Administrator' });
          }
          if (role?.isBillingManager) {
            selectedRoles.push({ key: 'isBillingManager', value: 'Billing Manager' });
          }
          if (role?.isUser) {
            selectedRoles.push({ key: 'isUser', value: 'Practitioner' });
          }
        }
      }
    }
    return selectedRoles;
  };

  const getRoles = (rolesArray: any) => {
    const selectedRoles = getSelectedRoles(rolesArray);
    return (
      <>
        {selectedRoles.length > 0 &&
          selectedRoles.map((obj, rolesIndex) => (
            <span key={obj?.key + rolesIndex}>
              {obj?.value}{rolesIndex < selectedRoles.length - 1 ? ', ' : ''}{' '}
            </span>
          ))}
      </>
    );
  };

  const onEditClick = (rolesArray: any, userId: string, userName: string) => {
    const selectedRoles = getSelectedRoles(rolesArray);
    toggleRightDrawer(true, ActionDrawerEnum.EditOrganizationRole, selectedRoles, userId, userName);
  };

  const onClientsClick = (clientsArray: any, userId: string, userName: string) => {
    if (clientsArray && clientsArray.length > 0)
      toggleRightDrawer(true, ActionDrawerEnum.OrganizationClientList, clientsArray, userId, userName);
  };

  const goToDeletePractioner = (selectedUserId: any, selectedUserName: string) => {
    navigate(`/${route.DELETEPRACTIONER}`, {
      state: {
        selectedUserId: selectedUserId,
        selectedUserName: selectedUserName,
        allUsers: userList
      }
    });
  };


  const checkEditModifyPermission = (userDetails: any) => {

    const rolesArray = userDetails?.roles;
    const userData = JSON.parse(loggedInUserData);
    let disableField = false;
    if (userData) {
      if (userDetails?.proUserId === userData?.cognitoId) {
        disableField = true;
      }

      const userRoles = userData.roles;
      if (userRoles && !disableField) {
        let selectedOrganizationRoles: any = {};
        const allRoles = JSON.parse(userRoles);
        for (const userRole of allRoles) {
          if (userRole?.tenant === tenantKey) {
            selectedOrganizationRoles = userRole;
            const isOwner = selectedOrganizationRoles?.isOwner;
            const isAdmin = selectedOrganizationRoles?.isAdmin;
            if (rolesArray[0]?.isOwner) { // owner user cannot be updated or deleted
              disableField = true;
              return disableField;
            }
            if (!isAdmin && !isOwner) { // if logged in user is practioner or billing manager then he will not edit or delete any of the fields
              disableField = true;
              return disableField;
            }
          }
        }
      }
    }
    return disableField;
  };



  React.useEffect(() => {
    setPage(0);
  }, [userList]);

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <Box className="cb_card pt-0">
          <TableContainer component={Paper} className={classes.mui_tableContainer}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="client table" className={classes.mui_table}>
              <TableHead>
                <TableRow>
                  {/* Name */}
                  <TableCell
                    style={{
                      minWidth: 250
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box sx={{ justifyContent: 'flex-start', marginLeft: 'calc(40px + 0.65vmax)' }} className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Practitioner Name</Box>
                      <Box className={classes.sortIcons}>
                        <img
                          src={upArrowIconIg}
                          alt="upArrow"
                          className={sortClickedArray.includes('proUserNameUp') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('proUserName', 'asc')}
                        />
                        <img
                          src={downArrowIconIg}
                          alt="downArrow"
                          className={sortClickedArray.includes('proUserNameDown') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('proUserName', 'desc')}
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Job Title */}
                  <TableCell
                    style={{
                      minWidth: 150
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Job Title</Box>
                      <Box className={classes.sortIcons}>
                        <img
                          src={upArrowIconIg}
                          alt="upArrow"
                          className={sortClickedArray.includes('jobTitleUp') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('jobTitle', 'asc')}
                        />
                        <img
                          src={downArrowIconIg}
                          alt="downArrow"
                          className={sortClickedArray.includes('jobTitleDown') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('jobTitle', 'desc')}
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Role */}
                  <TableCell
                    style={{
                      minWidth: 350
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Role</Box>
                      <Box className={classes.sortIcons}>
                        <img
                          src={upArrowIconIg}
                          alt="upArrow"
                          className={sortClickedArray.includes('rolesUp') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('roles', 'asc')}
                        />
                        <img
                          src={downArrowIconIg}
                          alt="downArrow"
                          className={sortClickedArray.includes('rolesDown') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('roles', 'desc')}
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Clients */}
                  <TableCell
                    style={{
                      minWidth: 100
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Clients</Box>
                      <Box className={classes.sortIcons}>
                        <img
                          src={upArrowIconIg}
                          alt="upArrow"
                          className={sortClickedArray.includes('associationsUp') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('associations', 'asc')}
                        />
                        <img
                          src={downArrowIconIg}
                          alt="downArrow"
                          className={sortClickedArray.includes('associationsDown') ? 'greenIcon' : 'greyIcon'}
                          onClick={() => sortClick('associations', 'desc')}
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Edit */}
                  <TableCell
                    style={{
                      minWidth: 100
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Edit</Box>
                    </Box>
                  </TableCell>

                  {/* Delete */}
                  <TableCell
                    style={{
                      minWidth: 100
                    }}
                    className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell}`}
                  >
                    <Box className={`${classes.tableHeadCellBox} `}>
                      <Box className={`${classes.clientName} clientNameCenter`}>Delete</Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : userList
                ).map((user: any, index: any) => (
                  <React.Fragment key={index}>
                    <TableRow className={classes.tableBodyRow} key={index}>
                      {/* name */}
                      <TableCell className={classes.tableBodyCell}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '0.65vmax'
                          }}
                        >
                          <Avatar alt={johnPic} src={johnPic} className={classes.UserAvatar} />
                          <span>
                            <Typography className={classes.avatarName}>{user?.proUserName}</Typography>
                          </span>
                        </Box>
                      </TableCell>
                      {/* Job Title */}
                      <TableCell align="center">
                        <Typography>{user?.jobTitle}</Typography>
                      </TableCell>
                      {/* Role */}
                      <TableCell align="center">
                        {getRoles(user?.roles)}
                        {/* {user?.roles.map((obj, rolesIndex) =>

                                                    <span key={obj?.tenant + rolesIndex}> {obj?.tenant}  {rolesIndex < user?.roles.length - 1 ? ',' : ''} </span>
                                                )} */}
                      </TableCell>

                      {/* Clients */}
                      <TableCell align="center">
                        {user?.associations.length > 0 ? (
                          <Link
                            underline="none"
                            className={classes.client}
                            onClick={() => onClientsClick(user?.associations, user?.proUserId, user?.proUserName)}
                          // className={user?.associations.length > 0 ? classes.userProfileBox : ''}
                          >
                            {user?.associations.length}
                          </Link>
                        ) : (
                          <Box>{user?.associations.length}</Box>
                        )}
                      </TableCell>
                      {/* Edit */}
                      <TableCell className='editCol'>
                        <Button disabled={checkEditModifyPermission(user)}>
                          <Box onClick={() => onEditClick(user?.roles, user?.proUserId, user?.proUserName)}>
                            <span className={classes.client}>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.0186 6.68014L9.32359 3.98514L11.2716 2.03614L13.9656 4.73014L12.0186 6.68014ZM5.07959 13.6261L2.10259 13.8971L2.36659 10.9411L7.98359 5.32414L10.6796 8.02014L5.07959 13.6261ZM15.4036 3.33914L15.4026 3.33814L12.6646 0.600139C11.9236 -0.138861 10.6506 -0.17386 9.94859 0.531139L0.952591 9.52714C0.626591 9.85214 0.424591 10.2841 0.382591 10.7411L0.00359084 14.9111C-0.0224092 15.2061 0.0825909 15.4981 0.292591 15.7081C0.481591 15.8971 0.736591 16.0011 0.999591 16.0011C1.03059 16.0011 1.06059 16.0001 1.09059 15.9971L5.26059 15.6181C5.71859 15.5761 6.14959 15.3751 6.47459 15.0501L15.4716 6.05314C16.1996 5.32314 16.1686 4.10514 15.4036 3.33914Z"
                                  fill="#46D7CB"
                                />
                              </svg>
                            </span>
                            {/* <ModeEditOutlineOutlinedIcon /> */}
                          </Box>
                        </Button>
                      </TableCell>
                      {/* Delete */}
                      <TableCell className='editCol'>
                        <Button disabled={checkEditModifyPermission(user)}>
                          <span
                            className={classes.client}
                            onClick={() => goToDeletePractioner(user?.proUserId, user?.proUserName)}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
                                fill="#FF708D"
                              />
                            </svg>
                          </span>
                        </Button>
                        {/* <DeleteOutlinedIcon onClick={() => goToDeletePractioner(user?.proUserId, user?.proUserName)} /> */}
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            className={classes.pagination}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default ManageOrganizationList;