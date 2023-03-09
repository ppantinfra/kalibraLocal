import React, { useState, useContext } from 'react';
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
import Rating from '@mui/material/Rating';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useNavigate } from 'react-router-dom';
import upArrowIconIg from '../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../assets/images/downArrowIcon.svg';
// import assessmentImgIcon from "../../assets/images/assessmentIcon.svg";
import { RoutesPath as route } from '../../core/constants';
import TablePagination from '@mui/material/TablePagination';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { CommonContext, CommonContextType } from '../../core/context';
// import plusIconGreen from '../../assets/images/plusIcon-green.svg';
// import plusIcon from '../../assets/images/plusIcon.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/plusIcon.svg';
import { NumberConversion } from '../../core/helper/NumberConversionHelper';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import TooltipHelper from '../../core/helper/TooltipHelper';



const DashboardClientList = ({ userList, sortHandler, demoMode, toggleRightDrawer }) => {
  const { setUserId } = useContext(CommonContext) as CommonContextType;
  const classes = useDashboardClientListStyles();
  const navigate = useNavigate();
  // const [starValue, setStarValue] = useState<number | null>(1);
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);

  const today = new Date();
  const todayDate = DateFormatterHelper.formatDate(new Date());
  const yesterdayDate = DateFormatterHelper.formatDate(new Date().setDate(today.getDate() - 1));
  // const isGreaterThanThreeDays = new Date();
  // isGreaterThanThreeDays.setDate(today.getDate() + 3);
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
    setUserId(cognitoId);
    navigate(`/${route.CLIENTSOVERVIEWROUTE}`);
  };
  // const gotoAssessment = (cognitoId: any) => {
  //   navigate(`/assessments/newnewAssessment/${cognitoId}`);
  // };

  // const gotoActivityLogger = (cognitoId: any) => {
  //   navigate(`/activity-logger/${cognitoId}`);
  // };

  React.useEffect(() => {
    setPage(0);
  }, [userList]);

  return (
    <React.Fragment>
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
                {/* KcalIn */}
                <TableCell align="right" style={{ minWidth: 20 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>kCal In</Typography>
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
                {/* kcal Out */}
                <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>kCal Out</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('CaloriesOutUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'CaloriesOut')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('CaloriesOutDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'CaloriesOut')}
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
                {/* water */}
                <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Water</Typography>
                      <Typography className={classes.column_header_goal}>Goal</Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('WaterIntakeUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'asc', 'WaterIntake')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('WaterIntakeDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('', 'desc', 'WaterIntake')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Last updated */}
                <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                  <Box className={classes.tableHeadCellBox}>
                    <Box>
                      <Typography className={classes.column_header_text}>Updated</Typography>
                      <Typography></Typography>
                    </Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('lastUpdatedUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('lastUpdated', 'asc')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('lastUpdatedDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('lastUpdated', 'desc')}
                      />
                    </Box>
                  </Box>
                </TableCell>

                {/* <TableCell align="right" className={classes.column_header_text}>
                  Log an Activity
                </TableCell>
                <TableCell align="right" className={classes.column_header_text}>
                  Submit Assessment
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
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
                            <Box sx={{ width: 20, height: 20 }} className={classes.plusIconBox}>
                              <TooltipHelper title='Client Actions'>
                                <PlusIcon
                                  style={{ fill: 'red' }}
                                  onClick={() =>
                                    toggleRightDrawer(true, 'clientDetails', user?.userCognitoId, user?.name)
                                  }
                                />
                              </TooltipHelper>
                            </Box>

                            <Box>
                              {demoMode === true && (
                                <Rating
                                  name="simple-controlled"
                                  //   value={starValue}
                                  // onChange={(event, newValue) => {
                                  //   setStarValue(newValue);
                                  // }}
                                  emptyIcon={<StarBorderIcon fontSize="inherit" className={classes.emptyStar} />}
                                  max={1}
                                />
                              )}
                            </Box>
                            {demoMode === true && <Avatar alt={johnPic} src={johnPic} className={classes.UserAvatar} />}
                            <TooltipHelper
                              title="Go To Client Details"
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

                      {/* CaloriesOut */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'CaloriesOut' ? (
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

                      {/* WaterIntake */}
                      <TableCell align="center">
                        {user.healthMarkers.map((obj) =>
                          obj.externalKey === 'WaterIntake' ? (
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
                      {/* Last updated */}
                      <TableCell align="center">
                        {/* Color coded as if updated in last 3 days then Green , if updated in last 7 days then yellow otherwise white */}
                        <Box
                          className={
                            new Date(user?.lastUpdated) >=
                              lastThreeDaysDate
                              ? 'greenDate tableBodyCellStatus'
                              : new Date(user?.lastUpdated) >=
                                lastSevenDaysDate ? 'yellowDate tableBodyCellStatus' :
                                'redDate tableBodyCellStatus'
                          }
                        >
                          {user?.lastUpdated ? DateFormatterHelper.formatDate(user?.lastUpdated) === todayDate
                            ? 'Today'
                            : DateFormatterHelper.formatDate(user?.lastUpdated) === yesterdayDate
                              ? 'Yesterday'
                              : DateFormatterHelper.formatDate(user?.lastUpdated) : '-'}
                        </Box>
                      </TableCell>
                      {/* Activity log */}

                      {/* <TableCell align="center">
                        <Link
                          component="button"
                          onClick={() =>
                            gotoActivityLogger(user?.userCognitoId)
                          }
                          style={{ width: 32, height: 18 }}
                        >
                          <img
                            style={{ width: 32, height: 18 }}
                            src={activityLogImgIcon}
                            alt="del"
                          />
                        </Link>
                      </TableCell> */}
                      {/* assessment */}
                      {/* <TableCell align="right">
                        <Link
                          component="button"
                          onClick={() => gotoAssessment(user?.userCognitoId)}
                        >
                          <img src={assessmentImgIcon} alt="del" />
                        </Link>
                      </TableCell> */}
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

export default DashboardClientList;
