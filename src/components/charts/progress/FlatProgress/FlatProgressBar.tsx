import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useFlatProgressBarStyles } from './FlatProgressBarStyles';
import Typography from '@mui/material/Typography';
import { GraphType, FontFamily } from '../../../../core';
import PillarIcon from '../../../common/PillarIcon';
import { Skeleton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AssessmentMediaContent } from '../../../assessments';
import { minutesToHours } from '../../../../core/helper/TimeHelper';
import DateFormatterHelper from '../../../../core/helper/DateFormatterHelper';


const FlatProgressBar = ({
  label,
  // expected format for visual parts
  visualParts,
  total,
  point,
  popSize,
  unit,
  pointColor,
  data,
  category,
  willHideTitle,
  infoWhat,
  infoHow,
  infoWhy,
  lastUpdated
}: any) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths

  const classes = useFlatProgressBarStyles();
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  const integerValuesPillar = ['Resting HR', 'kCal In'];

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

  // const lastVisualParts =
  //   visualParts[Object.keys(visualParts)[Object.keys(visualParts).length - 1]];

  // if (lastVisualParts && Number(lastVisualParts.maxValue) < point) {
  //   point = lastVisualParts.maxValue;
  // }

  // if (visualParts[0] && Number(visualParts[0].minValue) > point) {
  //   point = visualParts[0].minValue;
  // }

  let leftCal = (point * 100) / total;

  if (visualParts[0]) {
    leftCal = ((point - visualParts[0].minValue) * 100) / total;
  }

  if (leftCal < 0) {
    leftCal = 0;
  }

  if (leftCal > 100) {
    leftCal = 100;
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

  let isShowInfoIcon = false;
  if ((infoHow && infoHow.length > 0) || (infoWhat && infoWhat.length > 0) || (infoWhy && infoWhy.length > 0)) {
    isShowInfoIcon = true;
  }

  return (
    <React.Fragment>
      {data.graphType === GraphType.HorizontalStackedBarChartUngrouped && (
        <Box className={visualParts === undefined || visualParts.length === 0 ? classes.emptyProgressBarBox : classes.progressBarBox}>
          {willHideTitle === undefined &&
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography
                component="div"
                className={`${classes.apg_SubText} apg_SubText_keyStats apg_SubText`}
                title={label}
              >
                {label} <PillarIcon pillarName={category} />
                {(visualParts === undefined || visualParts.length === 0) && (
                  < Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginLeft: '6px', marginTop: '10px', width: '3vmax' }}
                  />
                )}
              </Typography>

              <Typography className={`${classes.apg_SubText} apg_SubText_keyStats apg_SubText`} component="div">

                {lastUpdated && <label style={{ marginLeft: '10px' }}>Last Updated: {DateFormatterHelper.formatDate(lastUpdated)}</label>}

              </Typography>

              {isShowInfoIcon === true && <InfoOutlinedIcon
                style={{ width: '16px', height: '16px', marginTop: '2px', cursor: 'pointer' }}
                onClick={() => {
                  setOpenMediaModal(true);
                }}
              />
              }
            </Box>
          }
          {point !== undefined && unit !== undefined && category !== undefined &&
            <Typography
              className={`${classes.apg_pointText} apg_ponitText_keyStats`}
            >
              {unit && unit === 'min' ? `${minutesToHours(point)}` : integerValuesPillar.includes(label) ? Math.round(point) : point}
              {unit && unit !== 'min' && <span style={{ fontSize: '16px', fontFamily: FontFamily, fontWeight: 400 }}>&nbsp;{unit}</span>}{' '}
            </Typography>
          }
        </Box>
      )}
      {visualParts !== undefined && visualParts.length > 0 ? (
        <Box className={`${classes.graphWrapper} graphWrapper_clientView`}>
          <Box style={divStyle} className={willHideTitle === true ? classes.smallMainBox : classes.mainBox}>
            <Box className={classes.pop} sx={{ width: popSize ? popSize : 18, height: popSize ? popSize : 18, background: pointColor }}></Box>
          </Box>
          <Box className={classes.progressVisualFull}>
            {(data.graphType === GraphType.HorizontalStackedBarChartGrouped && willHideTitle === undefined) && (
              <Box className={classes.unGroupedLabel}>
                <Typography
                  //paragraph
                  component="div"
                  className={classes.apg_SubText}
                  title={label}
                >
                  {label}
                  <PillarIcon pillarName={category} />
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
                    className={willHideTitle === true ? classes.smallProgressVisualPart : classes.progressVisualPart}
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
      ) : <></>
      }
      {
        openMediaModal === true &&
        <AssessmentMediaContent mediaContentData={undefined} handleClose={() => { setOpenMediaModal(false); }} name={label} whatText={infoWhat} howText={infoHow} whyText={infoWhy} />
      }
    </React.Fragment >
  );
};

export default FlatProgressBar;
