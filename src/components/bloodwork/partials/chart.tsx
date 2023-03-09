import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFlatProgressBarStyles } from '../../charts';
import { GraphType } from '../../../core';

const FlatProgressBar = ({
  label,
  // expected format for visual parts
  visualParts,
  total,
  point,
  unit,
  // pointColor,
  data,
}: any) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths

  const classes = useFlatProgressBarStyles();
  // const classes = useAssessmentStyles();

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

  // if (label === 'Grip-to-Weight') {
  //   console.log(total);
  // }

  // let pointUnit = `${point} ${unit}`;
  // const lastVisualParts =
  //   visualParts[Object.keys(visualParts)[Object.keys(visualParts).length - 1]];

  // if (lastVisualParts && lastVisualParts.maxValue < point) {
  //   point = lastVisualParts.maxValue;
  // }

  // if (label === 'Grip-to-Weight') {
  //   console.log(point);
  // }

  // if (visualParts[0] && visualParts[0].minValue > point) {
  //   point = visualParts[0].minValue;
  // }

  // let leftCal = (point * 100) / total;

  // if (visualParts[0] !== undefined) {
  //   leftCal = ((point - visualParts[0].minValue) * 100) / total;
  // }

  return (
    <React.Fragment>
      {data.graphType === GraphType.HorizontalStackedBarChartUngrouped && (
        <Box
          sx={{ display: 'flex', direction: 'row', marginBottom: '1.5vmax' }}
        >
          <Typography
            paragraph
            className={`${classes.apg_SubText} apg_SubText_keyStats`}
            title={label}
          >
            {label}
          </Typography>
          <Typography
            className={`${classes.apg_pointText} apg_ponitText_keyStats`}
          >
            {point}
            {unit && <span style={{ fontSize: '16px' }}>{unit}</span>}{' '}
          </Typography>
        </Box>
      )}

      <Box className={`${classes.graphWrapper} graphWrapper_clientView`}>
        <Box className={classes.progressVisualFull}>
          {data.graphType === GraphType.HorizontalStackedBarChartGrouped && (
            <Box className={classes.unGroupedLabel}>
              <Typography
                paragraph
                className={classes.apg_SubText}
                title={label}
              >
                {label}
              </Typography>
            </Box>
          )}
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
                >
                  <span
                    className={`${classes.itemLabel} itemLabel_assessment itemLabel_clientBiew`}
                  >
                    {item.label}
                  </span>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FlatProgressBar;
