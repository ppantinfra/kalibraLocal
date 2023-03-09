import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useIntelligenceStyles } from './IntelligenceStyles';
import { HorizontalProgressBarChart } from '../charts';

type IIntelligenceScoresAndBars = {
  score?: number;
  unit?: string;
  trendingChart: React.ReactElement<any, any>;
  progressBarData: Array<any>;
  isFakeData?: boolean;
  isIntelligenceProgressBarChart?: boolean;
  scoreColor?: string;
  trendingChartColor?: string;
};

const IntelligenceScoresAndBars = ({
  score,
  unit,
  trendingChart,
  progressBarData,
  isFakeData,
  isIntelligenceProgressBarChart,
  scoreColor,
  trendingChartColor
}: IIntelligenceScoresAndBars) => {
  const classes = useIntelligenceStyles();
  return (
    <React.Fragment>
      <Box>
        <Typography sx={{ color: scoreColor }} className={classes.scoreText}>
          {score}
          <span>
            {unit} <span style={{ color: trendingChartColor }}>{trendingChart}</span>
          </span>
        </Typography>
      </Box>
      <HorizontalProgressBarChart
        progressBarData={progressBarData}
        isFakeData={isFakeData}
        isIntelligenceProgressBarChart={isIntelligenceProgressBarChart}
      />
    </React.Fragment>
  );
};

export default IntelligenceScoresAndBars;
