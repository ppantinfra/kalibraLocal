import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useProgressLineStyles } from './ProgressLineStyles';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import PillarIcon from '../../common/PillarIcon';
import { NumberConversion } from '../../../core/helper/NumberConversionHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AssessmentMediaContent } from '../../assessments';

const ProgressLine = ({
  label,
  visualParts,
  total,
  point,
  unit,
  pointColor,
  data,
  category,
  showLabelLeftside,
  isIntelligenceProgressBarChart,
  infoWhat,
  infoHow,
  infoWhy

}: any) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths

  const classes = useProgressLineStyles();
  const [openMediaModal, setOpenMediaModal] = useState(false);

  const [widths, setWidths] = useState(
    visualParts && visualParts.map(() => {
      return 0;
    })
  );

  let isShowInfoIcon = false;
  if ((infoHow && infoHow.length > 0) || (infoWhat && infoWhat.length > 0) || (infoWhy && infoWhy.length > 0)) {
    isShowInfoIcon = true;
  }

  useEffect(() => {
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item: { maxValue: number; minValue: number; range: number }) => {
          const persentage = (item.range * 100) / total;
          return `${persentage}%`;
        })
      );
    });
  }, [visualParts, total]);

  const pointUnit = `${NumberConversion(Number(point))} ${unit}`;
  const renderChartWithoutVisualParts = () => {
    return (
      <React.Fragment>
        <Box sx={{ marginBottom: '0.3vmax' }}>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography
              component="div"
              className={`${classes.apg_SubText} apg_SubText_keyStats`}
              title={label}
              display={isIntelligenceProgressBarChart === true ? 'none' : 'block'}
            >
              {label} <PillarIcon pillarName={category} />
            </Typography>
            {isShowInfoIcon === true &&
              <InfoOutlinedIcon
                style={{ width: '16px', height: '16px', marginRight: '18px', cursor: 'pointer' }}
                onClick={() => {
                  setOpenMediaModal(true);
                }}
              />
            }
          </Box>

          {unit.length === 0 && <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax', marginBottom: '16px' }} />}
        </Box>
        {unit.length > 0 && <Box className='graphWrapper_clientView'>
          <span
            className={` unitBoxPointText ${classes.valueText}`}
            title={pointUnit}
          >
            {/* {pointUnit} */}
            {NumberConversion(Number(point))} {unit}
          </span>
        </Box>
        }
      </React.Fragment>
    );
  };

  if (visualParts === undefined || visualParts.length == 0) {
    return renderChartWithoutVisualParts();
  }

  // clamp the value in [min, max] range
  let calculatedValue = point;
  if (calculatedValue < data.minValue) {
    calculatedValue = data.minValue;
  } else if (calculatedValue > data.maxValue) {
    calculatedValue = data.maxValue;
  }

  let leftCal = (calculatedValue * 100) / total;
  if (visualParts[0]) {
    leftCal = ((calculatedValue - visualParts[0].minValue) * 100) / total;
  }
  leftCal = leftCal < 0 ? 0 : leftCal;
  leftCal = leftCal > 100 ? 100 : leftCal;
  const sample1 = 5;
  const divStyle: any = {
    left: 'calc(' + leftCal + '% - ' + sample1 + 'px)',
    fallbacks: [
      { left: '-moz-calc(' + leftCal + '% - ' + sample1 + 'px)' },
      { left: '-webkit-calc(' + leftCal + '% - ' + sample1 + 'px)' },
      { left: '-o-calc(' + leftCal + '% - ' + sample1 + 'px)' }
    ]
  };

  return (
    <React.Fragment>
      <Box sx={{ marginBottom: '6vmax' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography
            component="div"
            className={`${classes.apg_SubText} apg_SubText_keyStats`}
            title={label}
            display={isIntelligenceProgressBarChart === true ? 'none' : 'block'}
          >
            {label} <PillarIcon pillarName={category} />
          </Typography>
          {isShowInfoIcon === true &&
            <InfoOutlinedIcon
              style={{ width: '16px', height: '16px', marginTop: '2px', marginRight: '18px', cursor: 'pointer' }}
              onClick={() => {
                setOpenMediaModal(true);
              }}
            />
          }
        </Box>
        {unit.length === 0 && <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />}
      </Box>
      {showLabelLeftside && <div className="unit">
        {NumberConversion(Number(point))}
        {' '}<span style={{ fontWeight: '400', fontSize: '13px' }}>{unit !== 'count' ? unit : label}</span>
      </div>}
      {unit.length > 0 && (
        <Box className={`${classes.graphWrapper} graphWrapper_clientView`}>
          <Box style={divStyle} className={classes.mainBox}>
            <Box
              className={`${classes.pop} pop_assessment`}
              sx={{ background: pointColor }}
              display={isIntelligenceProgressBarChart === true ? 'none' : 'block'}
            >
              <span
                className={
                  leftCal > 95
                    ? `${classes.unitbox} unitBox_assessment unitBoxPointText`
                    : `${classes.unitbox} unitBox_assessment `
                }
                title={pointUnit}
              >
                {showLabelLeftside ? '' : pointUnit}
              </span>
            </Box>
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
                  <React.Fragment key={index}>
                    <Box
                      // There won't be additional changes in the array so the index can be used
                      /* eslint-disable-next-line react/no-array-index-key */
                      key={index}
                      style={{
                        width: widths[index],
                        backgroundColor: item.color,
                        textAlign: 'center'
                      }}
                      title={item.label}
                      className={`${classes.progressVisualPart} progressVisualPart_assessment`}
                    >
                      {isIntelligenceProgressBarChart === true && (
                        <span className={`${classes.itemRange} itemLabel_assessment itemLabel_clientBiew`}>
                          {item.range}
                        </span>
                      )}
                      <span className={`${classes.itemLabel} itemLabel_assessment itemLabel_clientBiew`}>
                        {item.label}
                      </span>
                    </Box>
                  </React.Fragment>
                );
              }
            )}
          </Box>
        </Box>
      )}
      {openMediaModal === true &&
        <AssessmentMediaContent mediaContentData={undefined} handleClose={() => { setOpenMediaModal(false); }} name={data.name} whatText={infoWhat} howText={infoHow} whyText={infoWhy} />
      }
    </React.Fragment>
  );
};

export default ProgressLine;
