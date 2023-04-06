import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useIntelligenceModuleStyles, IntelligenceTilesViewChart } from '../index';


const IntelligenceClientDashboard = () => {
    const classes = useIntelligenceModuleStyles();
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    drawTicks: true,
                    display: false
                },
                ticks: { color: '#c4c4c4', beginAtZero: true },
            },
            x: {
                type:'time',
                grid: {
                    drawTicks: true,
                    drawOnChartArea: true,
                    display: false
                },
                ticks: { color: '#c4c4c4', beginAtZero: true }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: true,
                // text: 'Chart.js Line Chart',
            },
        },
    };
    const scatterChartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {

                    drawOnChartArea: false,


                },
                ticks: { color: '#c4c4c4', beginAtZero: true }
            },
            x: {
                beginAtZero: true,
                grid: {

                    drawOnChartArea: false,

                },
                ticks: { color: '#c4c4c4', beginAtZero: true }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            //   title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            //   },
        },
    };
    const radarChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {
                    circular: true,
                    drawOnChartArea: false,
                },
                ticks: { maxTicksLimit: 2, color: '#c4c4c4', beginAtZero: true, display: false },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };
    const bodyFatChartData = {
        datasets: [
            {
                label: 'patrik',
                data: [{
                    x: '2021-11-06',
                    y: 50
                }, {
                    x: '2021-11-08',
                    y: 60
                },
                {
                    x: '2021-11-17',
                    y: 60
                },
                ],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: 'white',
            },
            {
                label: 'hanish',
                data: [{
                    x: '2021-11-06',
                    y: 20
                }, {
                    x: '2021-11-07',
                    y: 30
                }, {
                    x: '2021-11-08',
                    y: 40
                }, {
                    x: '2021-11-09',
                    y: 10
                }, {
                    x: '2021-11-10',
                    y: 100
                }, {
                    x: '2021-11-11',
                    y: 40
                }
                ],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: 'white',
            },
        ],
    };
    const kalibraScoreChartLabels = ['Jan', 'Feb', 'Mar', 'april', 'may', 'june', 'july', 'aug', 'Sep', 'oct', 'nov', 'dec'];
    const kalibraScoreChartData = {
        labels: kalibraScoreChartLabels,
        datasets: [
            {
                label: 'hanish',
                data: [1, 19, 13, 15, 12, 13, 2, 1, 7, 10, 7, 2],
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 0,
                pointBorderColor: 'transparent'
            },
            {
                label: 'patrik',
                data: [9, 7, 3, 5, 18, 8, 2, 11, 7, 4, 17, 9],
                backgroundColor: 'transparent',
                borderColor: 'green',
                borderWidth: 1,
                pointBorderColor: 'transparent'
            },
            {
                label: 'sumit',
                data: [10, 17, 13, 15, 15, 18, 12, 10, 17, 14, 15, 19],
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 1,
                pointBorderColor: 'transparent'
            },
        ],
    };

    const sleepChartData = {
        datasets: [
            {
                label: 'A dataset',
                data: [{
                    x: 1,
                    y: 3
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 0.5,
                    y: 5.5
                }],
                backgroundColor: 'purple',
                pointRadius: 5,
                pointBorderWidth: 0,

            },

            {
                label: 'A dataset',
                data: [{
                    x: 1,
                    y: 2
                }, {
                    x: 0,
                    y: 9
                }, {
                    x: 9,
                    y: 4
                }, {
                    x: 0.5,
                    y: 7.5
                }],
                backgroundColor: '#ff6384',
                pointRadius: 5,
                pointBorderWidth: 0,
            },

            {
                label: 'A dataset',
                data: [{
                    x: 1,
                    y: 0
                }, {
                    x: 4,
                    y: 9
                }, {
                    x: 6,
                    y: 4
                }, {
                    x: 11,
                    y: 7.5
                }],
                backgroundColor: '#1deecd',
                pointRadius: 5,
                pointBorderWidth: 0,
            },
        ],
    };

    const candleChartData = [
        { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 5 },
        { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
        { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
        { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 5), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 6), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 7), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 8), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 9), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 10), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 11), open: 20, close: 10, high: 25, low: 7 },
        { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
    ];
    return (
        <Box className={`${classes.intelligence_Content}`}>
            <Grid
                container
                columns={12}
                columnSpacing={{ xs: 2, md: 3 }}
                rowSpacing={{ xs: 2, md: 4 }}
                // className={'gridSubContainer_bloodwork_responsive'}
                pt={3}
            >
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Line' options={lineChartOptions} data={bodyFatChartData} title='Body Fat' />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Radar' options={radarChartOptions} data={kalibraScoreChartData} title='Kalibra Score (Total)' />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Scatter' options={scatterChartOptions} data={sleepChartData} title='Sleep' />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Scatter' options={scatterChartOptions} data={sleepChartData} title='Kalibra Score (Nourish)' />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Candle' options='' data={candleChartData} title='Weight' />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <IntelligenceTilesViewChart chartType='Line' options={lineChartOptions} data={bodyFatChartData} title='Active Calories' />
                </Grid>
            </Grid>
        </Box>
    );
};

export default IntelligenceClientDashboard;