import React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import johnPic from '../../assets/images/avatar.png';
import { useIntelligenceClientListStyles } from './IntelligenceClientListStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import upArrowIconIg from '../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../assets/images/downArrowIcon.svg';
import { RoutesPath as route, screenTitle } from '../../core/constants';
import TablePagination from '@mui/material/TablePagination';
import SmallCurverdLineChart from '../charts/line/SmallCurverdLineChart';
import Back from '../common/Back';

const clientList = [
  {
    userCognitoId: 1,
    name: 'Aaron Buckley',
    scoreChg1W: 0.3,
    scoreChg4W: 0,
    scoreChg3M: -0.6,
    scoreChg6M: -0.3,
    scoreChg12M: 0.7,
    chartColor: '#FF3D71',
    trend: [3.1, 2.8, 3, 2.9, 3.2]
  },
  {
    userCognitoId: 2,
    name: 'Alexandra McLauren',
    scoreChg1W: 1.9,
    scoreChg4W: -0.6,
    scoreChg3M: -1.3,
    scoreChg6M: 2.7,
    scoreChg12M: 0.2,
    chartColor: '#00D68F',
    trend: [2.8, 3, 2.9, 2.7, 2.8]
  },
  {
    userCognitoId: 3,
    name: 'Fred Robbinson',
    scoreChg1W: -2.2,
    scoreChg4W: 0.1,
    scoreChg3M: -0.7,
    scoreChg6M: 0,
    scoreChg12M: 0.8,
    chartColor: '#00D68F',
    trend: [2.8, 3.1, 2.9, 3, 3.2]
  },
  {
    userCognitoId: 4,
    name: 'Jesse Pinkman',
    scoreChg1W: -0.9,
    scoreChg4W: 0.8,
    scoreChg3M: -2.1,
    scoreChg6M: 1.7,
    scoreChg12M: 1.4,
    chartColor: '#FF3D71',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 5,
    name: 'Lucas Sinclair',
    scoreChg1W: -1.4,
    scoreChg4W: -0.2,
    scoreChg3M: 1.9,
    scoreChg6M: 0.5,
    scoreChg12M: 2.3,
    chartColor: '#FF3D71',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 6,
    name: 'Natalie Roberts',
    scoreChg1W: 0.7,
    scoreChg4W: -0.4,
    scoreChg3M: 0,
    scoreChg6M: -1.4,
    scoreChg12M: -0.8,
    chartColor: '#00D68F',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 7,
    name: 'Patrick Brewer',
    scoreChg1W: 1.6,
    scoreChg4W: -0.4,
    scoreChg3M: 0,
    scoreChg6M: -1.4,
    scoreChg12M: 0,
    chartColor: '#FF3D71',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 8,
    name: 'Phoebe Williams',
    scoreChg1W: -0.7,
    scoreChg4W: -0.4,
    scoreChg3M: 0,
    scoreChg6M: -1.4,
    scoreChg12M: 1.6,
    chartColor: '#FF3D71',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 9,
    name: 'Ryan Brannock',
    scoreChg1W: -0.2,
    scoreChg4W: 0,
    scoreChg3M: -1.1,
    scoreChg6M: -1.4,
    scoreChg12M: 1.6,
    chartColor: '#00D68F',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 10,
    name: 'Steve Harrington',
    scoreChg1W: 0,
    scoreChg4W: 0.6,
    scoreChg3M: -1.5,
    scoreChg6M: 2.9,
    scoreChg12M: -1.0,
    chartColor: '#00D68F',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 11,
    name: 'Steve Jobs',
    scoreChg1W: 0,
    scoreChg4W: 0.6,
    scoreChg3M: -1.5,
    scoreChg6M: 2.9,
    scoreChg12M: -1.0,
    chartColor: '#00D68F',
    trend: [3, 3.1, 2.9, 2.7, 3]
  },
  {
    userCognitoId: 12,
    name: 'John Doe',
    scoreChg1W: 0,
    scoreChg4W: 0.6,
    scoreChg3M: -1.5,
    scoreChg6M: 2.9,
    scoreChg12M: -1.0,
    chartColor: '#00D68F',
    trend: [3, 3.1, 2.9, 2.7, 3]
  }
];



const IntelligenceClientList = () => {
  // const { setUserId } = useContext(CommonContext) as CommonContextType;
  const classes = useIntelligenceClientListStyles();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const location = useLocation();
  const { tableHeader, unitText }: any = location.state;


  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const gotoIntelligenceClientDetails = (cognitoId: any, name: string) => {
    // Also navigate when change or select other client from search bar of Intelligence landing screen
    // setUserId(cognitoId);
    console.debug(cognitoId);
    console.debug(name);
    navigate(`/${route.INTELLIGENCECLIENTDETAILSROUTE}`);
  };

  // React.useEffect(() => {
  //   setPage(0);
  // }, [clientList]);

  return (
    <React.Fragment>
      <Box className={classes.page_Content}>
        <Typography className={classes.screenTitle}>{screenTitle.IntelligencePage}</Typography>

        <Back
          componentTitle={
            <>
              {tableHeader} <span style={{ fontWeight: 400, fontSize: '12px' }}>(All measurements in {unitText})</span>
            </>
          }
        />


        <StyledEngineProvider injectFirst>
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
                    <Box className={` ${classes.tableHeadFirstCellBox} ${classes.tableHeadCellBox}`}>
                      <Box className={`${classes.clientName} `}>Clients</Box>
                      <Box className={classes.sortIcons}>
                        <img
                          src={upArrowIconIg}
                          alt="upArrow"
                        //  onClick={() => sortClick('', 'asc', 'name')}
                        />
                        <img
                          src={downArrowIconIg}
                          alt="downArrow"
                          className={'greenIcon'}
                        // onClick={() => sortClick('', 'desc', 'name')}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  {/* Chg 1W */}
                  <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>{unitText}Chg 1W</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" className={'greyIcon'} />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Chg 4W */}
                  <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>{unitText}Chg 4W</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Chg 3M */}
                  <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>{unitText}Chg 3M</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" />
                      </Box>
                    </Box>
                  </TableCell>
                  {/* Chg 6M */}
                  <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>{unitText}Chg 6M</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" />
                      </Box>
                    </Box>
                  </TableCell>
                  {/* Chg 12M*/}
                  <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>{unitText}Chg 12M</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" />
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Trend */}
                  <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                    <Box className={classes.tableHeadCellBox}>
                      <Box>
                        <Typography className={classes.column_header_text}>Trend</Typography>
                      </Box>
                      <Box className={classes.sortIcons}>
                        <img src={upArrowIconIg} alt="upArrow" />
                        <img src={downArrowIconIg} alt="downArrow" />
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? (clientList || []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : clientList
                ).map((client: any, index: any) => (
                  <React.Fragment key={index}>
                    <TableRow className={classes.tableBodyRow} key={index}>
                      {/* name */}
                      <TableCell className={classes.tableBodyCell}>
                        <Link underline="none" className={classes.userProfileBox}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              columnGap: '0.65vmax'
                            }}
                          >
                            <Avatar alt={johnPic} src={johnPic} className={classes.UserAvatar} />
                            <span
                              className={classes.userInfo}
                              onClick={() => gotoIntelligenceClientDetails(client?.userCognitoId, client.name)}
                            >
                              <Typography className={classes.userName}>{client.name}</Typography>
                            </span>
                          </Box>
                        </Link>
                      </TableCell>
                      {/* Chg 1W */}
                      <TableCell align="center">
                        <React.Fragment>
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: client.scoreChg1W > 0 ? '#DB2C66' : client.scoreChg1W === 0 ? '#DB8B00' : '#00D68F'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                padding: '8px',
                                borderRadius: '5px',
                                background:
                                  client.scoreChg1W > 0 ? '#FFF2F2' : client.scoreChg1W === 0 ? '#FFF1C2' : '#F0FFF5'
                              }}
                            >
                              {client.scoreChg1W > 0 ? <>+{client.scoreChg1W}</> : <>{client.scoreChg1W}</>}
                            </span>
                          </Typography>
                        </React.Fragment>
                      </TableCell>
                      {/* Chg 4W */}
                      <TableCell align="center">
                        <React.Fragment>
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: client.scoreChg4W > 0 ? '#DB2C66' : client.scoreChg4W === 0 ? '#DB8B00' : '#00D68F'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                padding: '8px',
                                borderRadius: '5px',
                                background:
                                  client.scoreChg4W > 0 ? '#FFF2F2' : client.scoreChg4W === 0 ? '#FFF1C2' : '#F0FFF5'
                              }}
                            >
                              {client.scoreChg4W > 0 ? <>+{client.scoreChg4W}</> : <>{client.scoreChg4W}</>}
                            </span>
                          </Typography>
                        </React.Fragment>
                      </TableCell>
                      {/* Chg 3M */}
                      <TableCell align="center">
                        <React.Fragment>
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: client.scoreChg3M > 0 ? '#DB2C66' : client.scoreChg3M === 0 ? '#DB8B00' : '#00D68F'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                padding: '8px',
                                borderRadius: '5px',
                                background:
                                  client.scoreChg3M > 0 ? '#FFF2F2' : client.scoreChg3M === 0 ? '#FFF1C2' : '#F0FFF5'
                              }}
                            >
                              {client.scoreChg3M > 0 ? <>+{client.scoreChg3M}</> : <>{client.scoreChg3M}</>}
                            </span>
                          </Typography>
                        </React.Fragment>
                      </TableCell>
                      {/* Chg 6M */}
                      <TableCell align="center">
                        <React.Fragment>
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: client.scoreChg6M > 0 ? '#DB2C66' : client.scoreChg6M === 0 ? '#DB8B00' : '#00D68F'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                padding: '8px',
                                borderRadius: '5px',
                                background:
                                  client.scoreChg6M > 0 ? '#FFF2F2' : client.scoreChg6M === 0 ? '#FFF1C2' : '#F0FFF5'
                              }}
                            >
                              {client.scoreChg6M > 0 ? <>+{client.scoreChg6M}</> : <>{client.scoreChg6M}</>}
                            </span>
                          </Typography>
                        </React.Fragment>
                      </TableCell>
                      {/* Chg 12M */}
                      <TableCell align="center">
                        <React.Fragment>
                          <Typography
                            sx={{
                              textAlign: 'center',
                              color: client.scoreChg12M > 0 ? '#DB2C66' : client.scoreChg12M === 0 ? '#DB8B00' : '#00D68F'
                            }}
                          >
                            <span
                              style={{
                                width: '20px',
                                padding: '8px',
                                borderRadius: '5px',
                                background:
                                  client.scoreChg12M > 0 ? '#FFF2F2' : client.scoreChg12M === 0 ? '#FFF1C2' : '#F0FFF5'
                              }}
                            >
                              {client.scoreChg12M > 0 ? <>+{client.scoreChg12M}</> : <>{client.scoreChg12M}</>}
                            </span>
                          </Typography>
                        </React.Fragment>
                      </TableCell>
                      {/* Trend */}
                      <TableCell align="center">
                        <Box sx={{ width: 70, margin: 'auto' }}>
                          <SmallCurverdLineChart
                            lineChartTitle={'lineChartTitle'}
                            //   lineChartColor={status === -1 ? '#FF3D71' : status === 0 ? '#DB8B00' : '#00D68F'}
                            lineChartColor={client.chartColor}
                            lineChartData={client.trend}
                          />
                        </Box>
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
            count={clientList.length}
            rowsPerPage={rowsPerPage}
            className={classes.pagination}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledEngineProvider>
      </Box>
    </React.Fragment>
  );
};

export default IntelligenceClientList;
