import React from 'react';
import { Typography, Box } from '@mui/material';
import { useIntelligenceClientListStyles } from './IntelligenceClientListStyles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledEngineProvider } from '@mui/material/styles';
import SmallCurverdLineChart from '../charts/line/SmallCurverdLineChart';
import PillarIcon from '../common/PillarIcon';

type IIntelligenceIndvidualTrendListProps = {
  individualTrendList?: any;
};

const IntelligenceIndividualTrendList = ({ individualTrendList }: IIntelligenceIndvidualTrendListProps) => {
  const classes = useIntelligenceClientListStyles();

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
      <Typography className={classes.IAD_heading}>Activity Dashboard - Individual Trend</Typography>
        {individualTrendList.map((itltable: any) => {
          return (
            <TableContainer component={Paper} className={classes.mui_tableContainer} key={itltable.id} sx={{ mb: 3 }}>
              <Table stickyHeader sx={{ minWidth: 650 }} aria-label="client table" className={classes.mui_table}>
                <TableHead>
                  <TableRow>
                    {/* Nourish */}
                    <TableCell
                      style={{
                        minWidth: 250
                      }}
                      className={`${classes.tableHeadCell} tableHeadCell_individualTrend`}
                    >
                      <Box className={` ${classes.tableHeadFirstCellBox} ${classes.tableHeadCellBox} `}>
                        <PillarIcon pillarName={itltable.pillarCategory} />
                        <Box className={`${classes.pillarName} pillarName`}>{itltable.pillarCategory}</Box>
                      </Box>
                    </TableCell>
                    {/* Daily */}
                    <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>Daily</Typography>
                      </Box>
                    </TableCell>

                    {/* 1W Avg */}
                    <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>1W Avg</Typography>
                      </Box>
                    </TableCell>

                    {/* 1M Avg */}
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>1M Avg</Typography>
                      </Box>
                    </TableCell>
                    {/* 3M Avg */}
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>3M Avg</Typography>
                      </Box>
                    </TableCell>
                    {/* 12M Avg */}
                    <TableCell align="right" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>12M Avg</Typography>
                      </Box>
                    </TableCell>

                    {/* Trend */}
                    <TableCell align="center" style={{ minWidth: 91 }} className={classes.tableHeadCell}>
                      <Box className={classes.tableHeadCellBox}>
                        <Typography className={classes.column_header_text}>Trend</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itltable.trends.map((trend: any, index: any) => (
                    <React.Fragment key={index}>
                      <TableRow className={classes.tableBodyRow} key={index}>
                        {/* Nourish */}
                        <TableCell className={classes.tableBodyCell} sx={{ textAlign: 'left !importnant' }}>
                          <Typography className={classes.pillarSubcategory}>{trend.pillarSubCategory}</Typography>
                        </TableCell>
                        {/* Daily */}
                        <TableCell align="center">
                          <React.Fragment>
                            <Typography
                              sx={{
                                textAlign: 'center',
                                color:
                                  trend.daily.status === 'great'
                                    ? '#00D68F'
                                    : trend.daily.status === 'good'
                                    ? '#DB8B00'
                                    : '#DB2C66'
                              }}
                            >
                              <span
                                style={{
                                  width: '20px',
                                  padding: '8px',
                                  borderRadius: '5px',
                                  background:
                                    trend.daily.status === 'great'
                                      ? '#F0FFF5'
                                      : trend.daily.status === 'good'
                                      ? '#FFF1C2'
                                      : '#FFF2F2'
                                }}
                              >
                                {trend.daily.value}
                              </span>
                            </Typography>
                          </React.Fragment>
                        </TableCell>
                        {/* 1W Avg */}
                        <TableCell align="center">
                          <React.Fragment>
                            <Typography
                              sx={{
                                textAlign: 'center',
                                color:
                                  trend.score1WAvg.status === 'great'
                                    ? '#00D68F'
                                    : trend.score1WAvg.status === 'good'
                                    ? '#DB8B00'
                                    : '#DB2C66'
                              }}
                            >
                              <span
                                style={{
                                  width: '20px',
                                  padding: '8px',
                                  borderRadius: '5px',
                                  background:
                                    trend.score1WAvg.status === 'great'
                                      ? '#F0FFF5'
                                      : trend.score1WAvg.status === 'good'
                                      ? '#FFF1C2'
                                      : '#FFF2F2'
                                }}
                              >
                                {trend.score1WAvg.value}
                              </span>
                            </Typography>
                          </React.Fragment>
                        </TableCell>
                        {/* 1M Avg */}
                        <TableCell align="center">
                          <React.Fragment>
                            <Typography
                              sx={{
                                textAlign: 'center',
                                color:
                                  trend.score1MAvg.status === 'great'
                                    ? '#00D68F'
                                    : trend.score1MAvg.status === 'good'
                                    ? '#DB8B00'
                                    : '#DB2C66'
                              }}
                            >
                              <span
                                style={{
                                  width: '20px',
                                  padding: '8px',
                                  borderRadius: '5px',
                                  background:
                                    trend.score1MAvg.status === 'great'
                                      ? '#F0FFF5'
                                      : trend.score1MAvg.status === 'good'
                                      ? '#FFF1C2'
                                      : '#FFF2F2'
                                }}
                              >
                                {trend.score1MAvg.value}
                              </span>
                            </Typography>
                          </React.Fragment>
                        </TableCell>
                        {/* 3M Avg */}
                        <TableCell align="center">
                          <React.Fragment>
                            <Typography
                              sx={{
                                textAlign: 'center',
                                color:
                                  trend.score3MAvg.status === 'great'
                                    ? '#00D68F'
                                    : trend.score3MAvg.status === 'good'
                                    ? '#DB8B00'
                                    : '#DB2C66'
                              }}
                            >
                              <span
                                style={{
                                  width: '20px',
                                  padding: '8px',
                                  borderRadius: '5px',
                                  background:
                                    trend.score3MAvg.status === 'great'
                                      ? '#F0FFF5'
                                      : trend.score3MAvg.status === 'good'
                                      ? '#FFF1C2'
                                      : '#FFF2F2'
                                }}
                              >
                                {trend.score3MAvg.value}
                              </span>
                            </Typography>
                          </React.Fragment>
                        </TableCell>
                        {/* 12M Avg*/}
                        <TableCell align="center">
                          <React.Fragment>
                            <Typography
                              sx={{
                                textAlign: 'center',
                                color:
                                  trend.score12MAvg.status === 'great'
                                    ? '#00D68F'
                                    : trend.score12MAvg.status === 'good'
                                    ? '#DB8B00'
                                    : '#DB2C66'
                              }}
                            >
                              <span
                                style={{
                                  width: '20px',
                                  padding: '8px',
                                  borderRadius: '5px',
                                  background:
                                    trend.score12MAvg.status === 'great'
                                      ? '#F0FFF5'
                                      : trend.score12MAvg.status === 'good'
                                      ? '#FFF1C2'
                                      : '#FFF2F2'
                                }}
                              >
                                {trend.score12MAvg.value}
                              </span>
                            </Typography>
                          </React.Fragment>
                        </TableCell>
                        {/* Trend */}
                        <TableCell align="center">
                          <Box sx={{ width: 70, margin: 'auto' }}>
                            <SmallCurverdLineChart
                              lineChartTitle={'lineChartTitle'}
                              lineChartColor={trend.chartColor}
                              lineChartData={trend.trend}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        })}
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default IntelligenceIndividualTrendList;
