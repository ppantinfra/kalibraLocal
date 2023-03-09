import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { useBodyCompositionProgressBarStyles } from './BodyCompositionProgressBarStyles';

const BodyCompositionProgressBar = ({
  // expected format for visual parts
  visualParts,
  total,
  point,
  pointColor,
}: any) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths

  const classes = useBodyCompositionProgressBarStyles();

  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map(
          (item: { maxValue: number; minValue: number; range: number }) => {
            const persentage = (item.range * 100) / total;
            return `${persentage}%`;
          }
        )
      );
    });
  }, [visualParts, total]);

  if (visualParts[0] && visualParts[0].minValue > point) {
    point = visualParts[0].minValue;
  }

  let leftCal = (point * 100) / total;

  if (visualParts[0]) {
    leftCal = ((point - visualParts[0].minValue) * 100) / total;
  }

  const sample1 = 5; //parseInt(visualParts[0].minValue) + 5;

  const divStyle: any = {
    left: 'calc(' + leftCal + '% - ' + sample1 + 'px)',
    fallbacks: [
      { left: '-moz-calc(' + leftCal + '% - ' + sample1 + 'px)' },
      { left: '-webkit-calc(' + leftCal + '% - ' + sample1 + 'px)' },
      { left: '-o-calc(' + leftCal + '% - ' + sample1 + 'px)' },
    ],
  };

  return (
    <React.Fragment>
      <Box className={`${classes.graphWrapper} graphWrapper_clientView`}>
        <Box style={divStyle} className={classes.mainBox}>
          <Box className={classes.pop} sx={{ background: pointColor }}></Box>
        </Box>
        <Box className={classes.progressVisualFull}>
          {visualParts.map(
            (
              item: {
                label: string;
                color: string;
                maxValue: number;
                minValue: number;
                range: number;
              },
              index: React.Key
            ) => {
              // map each part into separate div and each will be animated
              // because of the "transition: width 2s;" css in class "progressVisualPart"
              // and because of the new width ("widths[index]", previous one was 0)
              return (
                <Box
                  // There won't be additional changes in the array so the index can be used
                  /* eslint-disable-next-line react/no-array-index-key */
                  key={index}
                  style={{
                    width: widths[index],
                    background: item.color,
                    textAlign: 'center',
                  }}
                  title={item.label}
                  className={classes.progressVisualPart}
                ></Box>
              );
            }
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BodyCompositionProgressBar;
