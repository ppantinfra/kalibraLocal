import React from 'react';
import Box from '@mui/material/Box';
import BodyCompositionProgressBar from './BodyCompositionProgressBar';
import { useBodyCompositionScreenStyles } from '../../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';

type Props = {
  progressBarData: any;
};

const BodyCopositionHorizontalProgressBarChart = ({
  progressBarData,
}: Props) => {
  const classes = useBodyCompositionScreenStyles();

  return (
    <React.Fragment>
      <Box className={classes.BodyCompositionhorizontalProgressBarChart}>
        {progressBarData?.map((proData: any, index: any) => (
          <Box key={index}>
            <BodyCompositionProgressBar
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

export default BodyCopositionHorizontalProgressBarChart;
