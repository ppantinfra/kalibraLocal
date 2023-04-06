import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import johnPic from '../../../assets/images/avatar.png';
import { useIntelligenceClientListStyles } from './IntelligenceClientListStyle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import upArrowIconIg from '../../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../../assets/images/downArrowIcon.svg';
import TablePagination from '@mui/material/TablePagination';
import { NumberConversion } from '../../../core/helper/NumberConversionHelper';
import DateFormatterHelper from '../../../core/helper/DateFormatterHelper';
import TooltipHelper from '../../../core/helper/TooltipHelper';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../../core/constants';

const IntelligenceClientLists = ({ userList, sortHandler }) => {
  //Need to add sort functionality of  kalibra scores cols values
  const classes = useIntelligenceClientListStyles();
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);
  const navigate = useNavigate();
  const today = new Date();
  const lastThreeDaysDate = new Date();
  lastThreeDaysDate.setDate(today.getDate() - 3);
  const lastSevenDaysDate = new Date();
  lastSevenDaysDate.setDate(today.getDate() - 7);
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

  const gotoClientDetails = (cognitoId: any) => {
    navigate(`/${route.INTELLIGENCECLIENTDETAILSROUTE}/${cognitoId}`);
  };


  React.useEffect(() => {
    setPage(0);
  }, [userList]);

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <TableContainer component={Paper} className={`${classes.mui_tableContainer} ${classes.mui_tableContainer_custom}`}>
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
                  <Box
                    // className={
                    //   demoMode === true
                    //     ? `${classes.tableHeadCellBox} `
                    //     : `${classes.tableHeadCellBox} ${classes.tableHeadFirstCellBox} `
                    // }

                    className={`${classes.tableHeadCellBox} ${classes.tableHeadFirstCellBox} `}
                  >
                    <Box
                      // className={
                      //   demoMode === true ? `${classes.clientName} clientNameCenter` : `${classes.clientName} `
                      // }
                      className={`${classes.clientName} `}
                    >
                      Client Name
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('nameUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('name', 'asc')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('nameDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('name', 'desc')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Weight */}
                <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Weight </Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('BodyweightUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'Bodyweight')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('BodyweightDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'Bodyweight')}
                      />
                    </Box>
                  </Box>
                </TableCell>

                {/* Body Fat */}
                <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Body Fat</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('BodyFatUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'BodyFat')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('BodyFatDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'BodyFat')}
                      />
                    </Box>
                  </Box>
                </TableCell>

                {/* Steps */}
                <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Steps</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('StepsUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'Steps')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('StepsDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'Steps')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Active Cal */}
                <TableCell align="right" style={{ minWidth: 20 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Active Cal</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('CaloriesInUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'CaloriesIn')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('CaloriesInDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'CaloriesIn')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Sleep */}
                <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Sleep</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('SleepHoursUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'SleepHours')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('SleepHoursDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'SleepHours')}
                      />
                    </Box>
                  </Box>
                </TableCell>

                <TableCell style={{
                  minWidth: 1
                }}
                  className={`${classes.tableHeadCell} ${classes.clientNameTableHeadCell} ${classes.tableCellNoBorder}`}>
                  <Typography className={classes.lightFontWeight}>Kalibra Scores</Typography>
                  <TableRow>
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Box>
                          <Typography className={classes.column_header_text}>Total</Typography>
                        </Box>
                        <Box className={classes.sortIcons}>
                          <img
                            src={upArrowIconIg}
                            alt="upArrow"
                            className={sortClickedArray.includes('TotalUp') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'asc', 'Total')}
                          />
                          <img
                            src={downArrowIconIg}
                            alt="downArrow"
                            className={sortClickedArray.includes('TotalDown') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'desc', 'Total')}
                          />
                        </Box></Box>
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Box>
                          <Typography className={classes.column_header_text}>Move</Typography>
                        </Box>
                        <Box className={classes.sortIcons}>
                          <img
                            src={upArrowIconIg}
                            alt="upArrow"
                            className={sortClickedArray.includes('MoveUp') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'asc', 'Move')}
                          />
                          <img
                            src={downArrowIconIg}
                            alt="downArrow"
                            className={sortClickedArray.includes('MoveDown') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'desc', 'Move')}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Box>
                          <Typography className={classes.column_header_text}>Rest</Typography>
                        </Box>
                        <Box className={classes.sortIcons}>
                          <img
                            src={upArrowIconIg}
                            alt="upArrow"
                            className={sortClickedArray.includes('RestUp') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'asc', 'Rest')}
                          />
                          <img
                            src={downArrowIconIg}
                            alt="downArrow"
                            className={sortClickedArray.includes('RestDown') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'desc', 'Rest')}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Box>
                          <Typography className={classes.column_header_text}>Nourish</Typography>
                        </Box>
                        <Box className={classes.sortIcons}>
                          <img
                            src={upArrowIconIg}
                            alt="upArrow"
                            className={sortClickedArray.includes('NourishUp') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'asc', 'Nourish')}
                          />
                          <img
                            src={downArrowIconIg}
                            alt="downArrow"
                            className={sortClickedArray.includes('NourishDown') ? 'greenIcon' : 'greyIcon'}
                            onClick={() => sortClick('', 'desc', 'Nourish')}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBodyCustom}>
              {(rowsPerPage > 0 ? userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : userList).map(
                (user: any, index: any) => (
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
                            <TooltipHelper
                              title="Go To Intelligence Details"
                              placement="top"
                            >
                              <span className={classes.userInfo} onClick={() => gotoClientDetails(user?.userCognitoId)}>
                                <Typography className={classes.userName}>{user?.name}</Typography>
                              </span></TooltipHelper>
                          </Box>
                        </Link>
                      </TableCell>
                      {/* Body Weight */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'Bodyweight' ? (
                            <React.Fragment key={obj}>
                              <TooltipHelper
                                title={DateFormatterHelper.formatDate(obj?.lastUpdated)}
                                placement="top"
                              >
                                <Typography
                                  className='blackValue'
                                // className={
                                //   obj?.goal ? (obj?.value >= obj?.goal ? 'redValue' : 'greenValue') : 'redValue'
                                // }
                                >
                                  {obj?.value.toFixed(2)}
                                </Typography>
                              </TooltipHelper>

                              <TooltipHelper
                                title={obj?.goal ? `Variance ${NumberConversion(obj?.value - obj?.goal)}` : ''}
                                placement="top"
                              >
                                <Typography className={'goalValue'}> {obj?.goal ? obj?.goal.toLocaleString('en-US') : '-'}</Typography>
                              </TooltipHelper>
                            </React.Fragment>
                          ) : null
                        )}
                      </TableCell>
                      {/* Body Fat */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'BodyFat' ? (
                            <React.Fragment key={obj}>
                              <TooltipHelper
                                title={DateFormatterHelper.formatDate(obj?.lastUpdated)}
                                placement="top"
                              >
                                <Typography
                                  className='blackValue'
                                // className={
                                //   obj?.goal ? (obj?.value >= obj?.goal ? 'redValue' : 'greenValue') : 'redValue'
                                // }
                                >
                                  {obj?.value.toFixed(2)}
                                </Typography>
                              </TooltipHelper>
                              <TooltipHelper
                                title={obj?.goal ? `Variance ${NumberConversion(obj?.value - obj?.goal)}` : ''}
                                placement="top"
                              >

                                <Typography className={'goalValue'}> {obj?.goal ? obj?.goal.toLocaleString('en-US') : '-'}</Typography>
                              </TooltipHelper>
                            </React.Fragment>
                          ) : null
                        )}
                      </TableCell>

                      {/* Steps */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'Steps' ? (
                            <React.Fragment key={obj}>
                              <TooltipHelper
                                title={DateFormatterHelper.formatDate(obj?.lastUpdated)}
                                placement="top"
                              >
                                <Typography
                                  className='blackValue'
                                // className={
                                //   obj?.goal ? (obj?.value >= obj?.goal ? 'greenValue' : 'redValue') : 'greenValue'
                                // }
                                >
                                  {obj?.value.toLocaleString('en-US')}
                                </Typography>
                              </TooltipHelper>
                              <TooltipHelper
                                title={obj?.goal ? `Variance ${NumberConversion(obj?.value - obj?.goal)}` : ''}
                                placement="top"
                              >

                                <Typography className={'goalValue'}> {obj?.goal ? obj?.goal.toLocaleString('en-US') : '-'}</Typography>
                              </TooltipHelper>
                            </React.Fragment>
                          ) : null
                        )}
                      </TableCell>

                      {/* CaloriesIn */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'CaloriesIn' ? (
                            <React.Fragment key={obj}>
                              <TooltipHelper
                                title={DateFormatterHelper.formatDate(obj?.lastUpdated)}
                                placement="top"
                              >
                                <Typography
                                  className='blackValue'
                                // className={
                                //   obj?.goal ? (obj?.value >= obj?.goal ? 'redValue' : 'greenValue') : 'redValue'
                                // }
                                >
                                  {obj?.value.toLocaleString('en-US')}
                                </Typography>
                              </TooltipHelper>
                              <TooltipHelper
                                title={obj?.goal ? `Variance ${NumberConversion(obj?.value - obj?.goal)}` : ''}
                                placement="top"
                              >

                                <Typography className={'goalValue'}> {obj?.goal ? obj?.goal.toLocaleString('en-US') : '-'}</Typography>
                              </TooltipHelper>
                            </React.Fragment>
                          ) : null
                        )}
                      </TableCell>
                      {/* SleepHours */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'SleepHours' ? (
                            <React.Fragment key={obj}>
                              <TooltipHelper
                                title={DateFormatterHelper.formatDate(obj?.lastUpdated)}
                                placement="top"
                              >
                                <Typography
                                  className='blackValue'
                                // className={
                                //   obj?.goal ? (obj?.value >= obj?.goal ? 'greenValue' : 'redValue') : 'greenValue'
                                // }
                                >
                                  {obj?.value.toFixed(2)}
                                </Typography>
                              </TooltipHelper>
                              <TooltipHelper
                                title={obj?.goal ? `Variance ${NumberConversion(obj?.value - obj?.goal)}` : ''}
                                placement="top"
                              >

                                <Typography className={'goalValue'}> {obj?.goal ? obj?.goal.toLocaleString('en-US') : '-'}</Typography>
                              </TooltipHelper>
                            </React.Fragment>
                          ) : null
                        )}
                      </TableCell>

                      <TableCell className={classes.lastColumnData}>
                        <TableRow>
                          <TableCell align="center">
                            <Typography > 12 </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography> 20 </Typography>
                          </TableCell>

                          <TableCell align="center">
                            <Typography> 10 </Typography>
                          </TableCell>

                          <TableCell align="center">
                            <Typography> 12 </Typography>
                          </TableCell>

                        </TableRow>

                      </TableCell>

                    </TableRow>
                  </React.Fragment>
                )
              )}
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
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default IntelligenceClientLists;