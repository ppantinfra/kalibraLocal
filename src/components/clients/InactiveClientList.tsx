import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
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
import { UserService } from '../../core';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../core/constants';
import StringAvatarHelper from '../../core/helper/StringAvatarHelper';
import TooltipHelper from '../../core/helper/TooltipHelper';




const InactiveClientList = ({ inactiveClientList, sortHandler, demoMode }) => {
  const classes = useDashboardClientListStyles();
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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


  React.useEffect(() => {
    setPage(0);
  }, [inactiveClientList]);

  const goToAssessmentList = (userDetails: any) => {
    UserService.getInactiveClientAssessmentList(userDetails?.userId).then((res) => {
      if (res.status === 200) {
        navigate(`/${route.CLIENTASSESSMENTSROUTE}/${userDetails?.userId}`);

      }
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
                  className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell} clientNameTableHeadCell `}
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
                {/* Assessments */}
                <TableCell align="center" style={{ minWidth: 150 }} className={classes.assessments}>
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important' }}>
                    Assessments
                  </Typography>
                </TableCell>
                <TableCell style={{ minWidth: 91 }} />
                <TableCell style={{ minWidth: 91 }} />
                <TableCell style={{ minWidth: 91 }} />
                <TableCell style={{ minWidth: 91 }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? (inactiveClientList || []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : inactiveClientList
              ).map((user: any, index: any) => (
                <React.Fragment key={index}>
                  <TableRow className={classes.tableBodyRow} key={index}>
                    {/* name */}
                    <TableCell className={classes.tableBodyCell}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          columnGap: '10px'
                        }}
                      >
                        {demoMode === true && (
                          <Avatar {...StringAvatarHelper(user?.userName)} className={classes.UserAvatar} />
                        )}
                        <span className={`${classes.userInfoWithoutHover} ${classes.disableHover}`}
                        // onClick={() => gotoClientDetails(user?.userId)}
                        >
                          <Typography className={classes.userName}>{user?.userName}</Typography>
                        </span>
                      </Box>
                    </TableCell>
                    <TableCell align="center" className={classes.assessments}>
                      <TooltipHelper
                        title={`View all ${user?.userName} Assessments`}
                        placement="top"
                      >

                        <Link
                          onClick={() => goToAssessmentList(user)}
                          className={classes.assessmentLink}
                        >
                          <Typography>{user.assessmentCount} Assessment{user.assessmentCount !== '1' ? 's' : ''}</Typography>
                        </Link>
                      </TooltipHelper>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={inactiveClientList.length}
          rowsPerPage={rowsPerPage}
          className={classes.pagination}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default InactiveClientList;
