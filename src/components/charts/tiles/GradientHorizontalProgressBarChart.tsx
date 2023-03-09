import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import GradientProgressBar from '../progress/gradientProgress/GradientProgressBar';

export const useGradientHorizontalProgressBarChart = makeStyles(
  {
    gradientHorizontalProgressBarChart: {},
  },
  { index: 1 }
);

type Props = {
  progressBarData: any;
};

const GradientHorizontalProgressBarChart = ({ progressBarData }: Props) => {
  const classes = useGradientHorizontalProgressBarChart();

  return (
    <React.Fragment>
      <Box className={classes.gradientHorizontalProgressBarChart}>
        {progressBarData?.map((proData: any, index: any) => (
          <Box key={index}>
            <GradientProgressBar
              label={proData.label}
              visualParts={proData.visualParts}
              total={proData.total}
              point={proData.point}
              pointColor={proData.pointColor}
            />
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default GradientHorizontalProgressBarChart;
