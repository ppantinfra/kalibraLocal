import React from 'react';
import { Typography, Box } from '@mui/material';
import { useIntelligenceStyles } from './IntelligenceStyles';
// import { ScoreLineChart } from '../charts';
import { LineChart } from './partials';

type IIntelligenceActivityItemProps = {
  activityData?: any;
};

const IntelligenceActivityItem = ({ activityData }: IIntelligenceActivityItemProps) => {
  const classes = useIntelligenceStyles();
  return (
    <React.Fragment>
      <Box className={classes.IActivityItem}>
        <Typography className={classes.totalDistanceText}>
          {activityData.totalDistanceMeasured}
          <span>{activityData.unit}</span>
        </Typography>
        <Typography className={classes.totalTimeText}>{activityData.totalTimeMeasured}</Typography>
        <LineChart chartData={activityData.lineChartData} />
        <Box className={classes.IAMeasurementBox}>
          <Box className={classes.iamb_row}>
            <Box>
              <Typography className={classes.iam_text}>Avg Speed</Typography>
              <Typography className={classes.iam_value}>{activityData.speed.Avg_Speed}</Typography>
            </Box>
            <Box>
              <Typography className={classes.iam_text}>Total Ascent</Typography>
              <Typography className={classes.iam_value}>{activityData.speed.Total_Ascent}</Typography>
            </Box>
          </Box>
          <Box className={classes.iamb_row}>
            <Box>
              <Typography className={classes.iam_text}>Avg Power</Typography>
              <Typography className={classes.iam_value}>{activityData.power.Avg_Power}</Typography>
            </Box>
            <Box>
              <Typography className={classes.iam_text}>Active Calories</Typography>
              <Typography className={classes.iam_value}>{activityData.power.Active_Calories}</Typography>
            </Box>
          </Box>
          <Box className={classes.iamb_row}>
            <Box>
              <Typography className={classes.iam_text}>Avg Heart Rate</Typography>
              <Typography className={classes.iam_value}>{activityData.heart_Rate.Avg_Heart_Rate}</Typography>
            </Box>
            <Box>
              <Typography className={classes.iam_text}>Max Heart Rate</Typography>
              <Typography className={classes.iam_value}>{activityData.heart_Rate.Avg_Heart_Rate}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default IntelligenceActivityItem;
