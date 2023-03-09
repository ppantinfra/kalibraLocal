import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { TilesView } from '../tiles';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import IntelligenceActivityItem from './IntelligenceActivityItem';
import { useIntelligenceStyles } from './IntelligenceStyles';

type IADProps = {
  activity?: string;
  activityIcon?: React.ReactNode | React.ReactNode[];
};

const IntelligenceActivityDashboard = ({ activity, activityIcon }: IADProps) => {
  const classes = useIntelligenceStyles();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down(700));

  const gradientFun = (context: any) => {
    const ctx = context.chart.ctx;
    const gradient: any = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, '#46D7CB ');
    gradient.addColorStop(1, '#fff');
    return gradient;
  };

  const lineChartData = {
    labels: ['HR', '50', '60', '70', '80', '90', '100', '167'],
    label: 'Heart rate',
    data: [
      {
        x: 'HR',
        y: 45
      },
      {
        x: '50',
        y: 52
      },
      {
        x: '60',
        y: 50
      },
      {
        x: '70',
        y: 56
      },
      {
        x: '80',
        y: 58
      },
      {
        x: '90',
        y: 55
      },
      {
        x: '100',
        y: 50
      },
      {
        x: '167',
        y: 51
      }
    ],
    // category: 'move'
    gradient: gradientFun
  };

  const cyclingData = [
    {
      activityId: 1,
      activityName: 'Cycling',
      activityDate: '01/11/22  |  06:12 am',
      totalDistanceMeasured: '95.18',
      unit: 'km',
      totalTimeMeasured: '2:47:04',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 2,
      activityName: 'Cycling',
      activityDate: '31/10/22  |  06:03 am',
      totalDistanceMeasured: '95.18',
      unit: 'km',
      totalTimeMeasured: '2:53:37',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 3,
      activityName: 'Cycling',
      activityDate: '30/10/22  |  07:24 am',
      totalDistanceMeasured: '72.9',
      unit: 'km',
      totalTimeMeasured: '2:33:41',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 4,
      activityName: 'Cycling',
      activityDate: '29/10/22  |  06:44 am',
      totalDistanceMeasured: '79.72',
      unit: 'km',
      totalTimeMeasured: '2:38:15',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 5,
      activityName: 'Cycling',
      activityDate: '28/10/22  |  06:08 am',
      totalDistanceMeasured: '77.85',
      unit: 'km',
      totalTimeMeasured: '2:26:16',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 6,
      activityName: 'Cycling',
      activityDate: '26/10/22  |  06:07 am',
      totalDistanceMeasured: '92.78',
      unit: 'km',
      totalTimeMeasured: '2:51:59',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 7,
      activityName: 'Cycling',
      activityDate: '23/10/22  |  06:45 am',
      totalDistanceMeasured: '68.44',
      unit: 'km',
      totalTimeMeasured: '1:58:39',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    },
    {
      activityId: 8,
      activityName: 'Cycling',
      activityDate: '21/10/22  |  06:45 am',
      totalDistanceMeasured: '75.19',
      unit: 'km',
      totalTimeMeasured: '2:15:13',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    }
  ];
  const swimmingData = [
    {
      activityId: 1,
      activityName: 'Swimming',
      activityDate: '22/10/22  |  06:03 am',
      totalDistanceMeasured: '90.18',
      unit: 'km',
      totalTimeMeasured: '2:53:04',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    }
  ];
  const runningData = [
    {
      activityId: 1,
      activityName: 'Running',
      activityDate: '22/10/22  |  06:03 am',
      totalDistanceMeasured: '92.18',
      unit: 'km',
      totalTimeMeasured: '2:38:04',
      lineChartData: lineChartData,
      speed: { Avg_Speed: '8.6 km/h', Total_Ascent: '362.0m' },
      power: { Avg_Power: '179 W', Active_Calories: '1505' },
      heart_Rate: { Avg_Heart_Rate: '135 bpm', Max_Heart_Rate: '180 bpm' }
    }
  ];

  const IActivityData: any =
    activity === 'Cycling' ? cyclingData : activity === 'Swimming' ? swimmingData : runningData;

  return (
    <Box className={classes.IActivityDashboard}>
      <Typography className={classes.IAD_heading}>Activity Dashboard - {activity}</Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={12}
        mt={1}
        // className={matches ? 'gridbelow700_tiles_responsive' : ''}
      >
        {(IActivityData || []).map((data: any) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={data.activityId}>
              <TilesView
                activityIcon={activityIcon}
                activityDateTime={data.activityDate}
                isActivityDashboardTiles={true}
              >
                <IntelligenceActivityItem activityData={data} />
              </TilesView>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default IntelligenceActivityDashboard;
