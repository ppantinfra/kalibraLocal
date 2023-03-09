import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useIntelligenceStyles } from './IntelligenceStyles';
import IntelligenceTilesView from './IntelligenceTilesView';
import { CircularProgressBar } from '../charts';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntelligenceScoresAndBars from './IntelligenceScoresAndBars';
import { AppColor } from '../../core';

const IntelligenceDashboard = ({ tableReportClickHandler, handleDrawerOpen }) => {
    const classes = useIntelligenceStyles();


    const progressBarData = [
        {
            label: 'Body Fat',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 8,
                    range: 20 - 8,
                    label: 'Excellent',
                    color: '#2CE59B'
                },
                {
                    maxValue: 8,
                    minValue: 4,
                    range: 8 - 4,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 4,
                    minValue: 0,
                    range: 4 - 0,
                    label: 'Poor',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataActiveCalories = [
        {
            label: 'Active Calories',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 10,
                    range: 20 - 10,
                    label: 'On Track',
                    color: '#2CE59B'
                },
                {
                    maxValue: 10,
                    minValue: 4,
                    range: 10 - 4,
                    label: 'Lagging',
                    color: '#FFC94D'
                },
                {
                    maxValue: 4,
                    minValue: 0,
                    range: 4 - 0,
                    label: 'Dropping',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataREMSleep = [
        {
            label: 'REM Sleep',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 14,
                    range: 20 - 14,
                    label: 'Excellent',
                    color: '#2CE59B'
                },
                {
                    maxValue: 14,
                    minValue: 10,
                    range: 14 - 10,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 10,
                    minValue: 0,
                    range: 10 - 0,
                    label: 'Insufficient',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataDeepSleep = [
        {
            label: 'Deep Sleep',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 14,
                    range: 20 - 14,
                    label: 'Excellent',
                    color: '#2CE59B'
                },
                {
                    maxValue: 14,
                    minValue: 4,
                    range: 14 - 4,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 4,
                    minValue: 0,
                    range: 4 - 0,
                    label: 'Insufficient',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataHydration = [
        {
            label: 'Hydration',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 6,
                    range: 20 - 6,
                    label: 'Optimal',
                    color: '#2CE59B'
                },
                {
                    maxValue: 6,
                    minValue: 2,
                    range: 6 - 2,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 2,
                    minValue: 0,
                    range: 2 - 0,
                    label: 'Low',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataProteinIntake = [
        {
            label: 'Protein Intake',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 9,
                    range: 20 - 9,
                    label: 'Optimal',
                    color: '#2CE59B'
                },
                {
                    maxValue: 9,
                    minValue: 4,
                    range: 9 - 4,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 4,
                    minValue: 0,
                    range: 4 - 0,
                    label: 'Low',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];
    const progressBarDataCarbIntake = [
        {
            label: 'Carb Intakee',
            visualParts: [
                {
                    maxValue: 20,
                    minValue: 15,
                    range: 20 - 15,
                    label: 'Excellent',
                    color: '#2CE59B'
                },
                {
                    maxValue: 15,
                    minValue: 9,
                    range: 15 - 9,
                    label: 'Average',
                    color: '#FFC94D'
                },
                {
                    maxValue: 9,
                    minValue: 0,
                    range: 9 - 0,
                    label: 'Insufficient',
                    color: '#FF708D'
                }
            ],
            graphCategory: 'HorizontalStackedBarChartUngrouped',
            total: 20,
            point: 12,
            unit: 'point',
            data: {
                graphType: 'HorizontalStackedBarChartUngrouped'
            }
        }
    ];

    return (


        <Box className={`${classes.intelligence_Content}`}>
            <Typography className={classes.intelligence_desc}>
                Here’s a summary of the weekly performance of your 20 clients across different pillars. Check out our insights
                to help you focus on clients that need attention. You can also view detailed data for each client as well as
                their individual trends.
            </Typography>
            <Grid
                container
                columns={12}
                columnSpacing={{ xs: 2, md: 3 }}
                rowSpacing={{ xs: 2, md: 4 }}
                // className={'gridSubContainer_bloodwork_responsive'}
                pt={3}
            >
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Kali AI Management'}
                        pillarCategory=''
                        handleDrawerOpen={() =>
                            handleDrawerOpen(
                                'KaliAIManagement',
                                'Kali AI Management',

                                [
                                    {
                                        clientName: 'Natalie Roberts',
                                        score: 2.1,
                                        unit: '%',
                                        color: AppColor.bsDanger,
                                        lineChartData: [3.1, 2.8, 3, 2.9, 3.2]
                                    },
                                    {
                                        clientName: 'Aaron Buckley',
                                        score: 0.8,
                                        unit: '%',
                                        color: AppColor.bsDanger,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Patrick Brewer',
                                        score: -3.2,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Steve Harrington',
                                        score: -2.9,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Jesse Pinkman',
                                        score: -1.5,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Fred Robbinson',
                                        score: -0.7,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Lucas Sinclair',
                                        score: 0,
                                        unit: '%',
                                        color: AppColor.bsWarning,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    }
                                ]
                            )
                        }
                        tableReportClickHandler={() => tableReportClickHandler('Kali AI Management', '%')}
                    >
                        <CircularProgressBar
                            strokeWidth={10}
                            backgroundPadding={18}
                            progressValue={67}
                            pathColor="#FFC94D"
                            progressText="Actions Completed"
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Body Fat'}
                        pillarCategory="Move"
                        handleDrawerOpen={() =>
                            handleDrawerOpen(
                                'BodyFat',
                                'Body Fat',

                                [
                                    {
                                        clientName: 'Natalie Roberts',
                                        score: 2.1,
                                        unit: '%',
                                        color: AppColor.bsDanger,
                                        lineChartData: [3.1, 2.8, 3, 2.9, 3.2]
                                    },
                                    {
                                        clientName: 'Aaron Buckley',
                                        score: 0.8,
                                        unit: '%',
                                        color: AppColor.bsDanger,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Patrick Brewer',
                                        score: -3.2,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Steve Harrington',
                                        score: -2.9,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Jesse Pinkman',
                                        score: -1.5,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Fred Robbinson',
                                        score: -0.7,
                                        unit: '%',
                                        color: AppColor.bsSuccess,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    },
                                    {
                                        clientName: 'Lucas Sinclair',
                                        score: 0,
                                        unit: '%',
                                        color: AppColor.bsWarning,
                                        lineChartData: [3.1, 2.8, 3, 3.2, 2.9]
                                    }
                                ],
                                '-0.7',
                                '%'
                            )
                        }
                        tableReportClickHandler={() => tableReportClickHandler('Body Fat', '%')}
                    >
                        <IntelligenceScoresAndBars
                            score={-0.7}
                            scoreColor={'#00B887'}
                            trendingChartColor={'#00B887'}
                            unit="%"
                            trendingChart={<TrendingUpIcon />}
                            progressBarData={progressBarData}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Active Calories'}
                        pillarCategory="Move"
                        handleDrawerOpen={() => handleDrawerOpen('ActiveCalories', 'Active Calories')}
                        tableReportClickHandler={() => tableReportClickHandler('Active CaloriesBody Fat', '% of BMR')}
                    >
                        <IntelligenceScoresAndBars
                            score={70}
                            scoreColor={'#DB8B00'}
                            trendingChartColor={'#DB2C66'}
                            unit="% of BMR"
                            trendingChart={<TrendingDownIcon />}
                            progressBarData={progressBarDataActiveCalories}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Weekly Step Target'}
                        pillarCategory="Move"
                        handleDrawerOpen={() => handleDrawerOpen('WeeklyStepTarget', 'Weekly Step Target')}
                        tableReportClickHandler={() => tableReportClickHandler('Weekly Step Target', '%')}
                    >
                        <CircularProgressBar
                            strokeWidth={10}
                            backgroundPadding={18}
                            progressValue={85}
                            pathColor="#00D68F"
                            progressText="Step Target Completed"
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'REM Sleep'}
                        pillarCategory="Rest"
                        handleDrawerOpen={() => handleDrawerOpen('REMSleep', 'REM Sleep')}
                        tableReportClickHandler={() => tableReportClickHandler('REM Sleep', 'Mins')}
                    >
                        <IntelligenceScoresAndBars
                            score={28}
                            scoreColor={'#DB2C66'}
                            trendingChartColor={'#00B887'}
                            unit="Mins"
                            trendingChart={<TrendingUpIcon />}
                            progressBarData={progressBarDataREMSleep}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Deep Sleep'}
                        pillarCategory="Rest"
                        handleDrawerOpen={() => handleDrawerOpen('DeepSleep', 'Deep Sleep')}
                        tableReportClickHandler={() => tableReportClickHandler('Deep Sleep', 'Mins')}
                    >
                        <IntelligenceScoresAndBars
                            score={56}
                            scoreColor={'#DB8B00'}
                            trendingChartColor={'#00B887'}
                            unit="Mins"
                            trendingChart={<TrendingUpIcon />}
                            progressBarData={progressBarDataDeepSleep}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Hydration'}
                        pillarCategory="Nourish"
                        handleDrawerOpen={() => handleDrawerOpen('Hydration', 'Hydration')}
                        tableReportClickHandler={() => tableReportClickHandler('Hydration', 'Liters')}
                    >
                        <IntelligenceScoresAndBars
                            score={3.2}
                            scoreColor={'#00B887'}
                            trendingChartColor={'#00B887'}
                            unit="Liters"
                            trendingChart={<TrendingUpIcon />}
                            progressBarData={progressBarDataHydration}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Protein Intake'}
                        pillarCategory="Nourish"
                        handleDrawerOpen={() => handleDrawerOpen('ProteinIntake', 'Protein Intake')}
                        tableReportClickHandler={() => tableReportClickHandler('Protein Intake', 'Grams')}
                    >
                        <IntelligenceScoresAndBars
                            score={78}
                            scoreColor={'#00B887'}
                            trendingChartColor={'#DB2C66'}
                            unit="Grams"
                            trendingChart={<TrendingDownIcon />}
                            progressBarData={progressBarDataProteinIntake}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesView
                        title={'Carb Intake'}
                        pillarCategory="Nourish"
                        handleDrawerOpen={() => handleDrawerOpen('CarbIntake', 'Carb Intake')}
                        tableReportClickHandler={() => tableReportClickHandler('Carb Intake', 'Grams')}
                    >
                        <IntelligenceScoresAndBars
                            score={47}
                            scoreColor={'#DB2C66'}
                            trendingChartColor={'#DB2C66'}
                            unit="Grams"
                            trendingChart={<TrendingDownIcon />}
                            progressBarData={progressBarDataCarbIntake}
                            isFakeData={true}
                            isIntelligenceProgressBarChart={true}
                        />
                    </IntelligenceTilesView>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntelligenceDashboard;