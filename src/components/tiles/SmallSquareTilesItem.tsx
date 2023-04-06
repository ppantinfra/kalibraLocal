import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSmallSquareTilesItemStyles } from './SmallSquareTilesItemStyles';
// import Link from '@mui/material/Link';
// import ShareIcon from '@mui/icons-material/Share';
// import PolygonImgIcon from '../../assets/images/bodyComp/Polygon3.svg';
import { GradientHorizontalProgressBarChart } from '../charts/';
import SmallCurverdLineChart from '../charts/line/SmallCurverdLineChart';
import { CommonContext, CommonContextType } from '../../core/context';
import Skeleton from '@mui/material/Skeleton';
import { ColorHelper } from '../../core/helper/ColorHelper';
import PillarIcon from '../common/PillarIcon';
import { FontColor } from '../../core';
import TooltipHelper from '../../core/helper/TooltipHelper';
import { NumberConversion } from '../../core/helper/NumberConversionHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AssessmentMediaContent } from '../assessments';

type IProps = {
  tileHandleShare?: () => void;
  handleDrawerOpen?: any;
  data?: any;
};



const SmallSquareTilesItem = ({ handleDrawerOpen, data }: IProps) => {
  const classes = useSmallSquareTilesItemStyles();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  const [openMediaModal, setOpenMediaModal] = React.useState(false);

  const integerValuesPillar = ['Carbs', 'Protein', 'Fat', 'BMR', 'TDEE'];

  if (data.value === undefined
    || data.categories === null
    || data.categories?.length === 0
    || data?.latestHealthMarkerValues == null
    || data?.latestHealthMarkerValues?.length === 0) {
    return (
      <React.Fragment>
        <Box className={`${classes.bclmbtgtsg_tileItem} ${classes.noCursor} `}>
          <Box className={classes.bclmbtgtsgtI_headerBox}>
            <Box className={classes.bclmbtgtsgti_heading}>
              <Typography> {data?.name}</Typography>
            </Box>
            {/* {demoMode === true && (
              <Box className={classes.bclmbtgtsgti_shareBox}>
                <Link className={classes.shareIcon} onClick={tileHandleShare}>
                  <ShareIcon />
                </Link>
              </Box>
            )} */}
          </Box>
          <Box mt={1} className={classes.bclmbtgtsgtI_emptyBox}>
            <Skeleton animation="wave" height={10} style={{ marginTop: '7px', width: '4vmax' }} />
          </Box>
        </Box>
      </React.Fragment>
    );
  }

  let isShowInfoIcon = false;
  if ((data.infoHow && data.infoHow.length > 0) || (data.infoWhat && data.infoWhat.length > 0) || (data.infoWhy && data.infoWhy.length > 0)) {
    isShowInfoIcon = true;
  }

  let pointChartData: Array<any> = [];
  if (data?.latestHealthMarkerValues.length > 0) {
    data?.latestHealthMarkerValues.forEach((item) => {
      pointChartData.push(item.value);
    });
    pointChartData = pointChartData.reverse();
    const length = pointChartData.length;
    for (let i = 0; i < 4 - length; i++) {
      pointChartData = [pointChartData[0]].concat(pointChartData);
    }
  }

  let total = Number(data.rangeMax) - Number(data.rangeMin);
  // let midPoint = Number(data.rangeMin) + total / 2;
  let midPoint = data?.goal;
  const maxValue = data?.categories[data?.categories.length - 1].maximum;
  const minValue = data?.categories[0].minimum;
  let pointColor = '';
  if (data?.categories.length > 0) {
    total = maxValue - minValue;
    //replaced mid point logic to goal.
    // midPoint = data?.categories[0].minimum + total / 2;
    midPoint = data?.goal;
    if (data.value < minValue) {
      pointColor = ColorHelper.getBarColor(data?.categories[0].color, data.category);
    } else if (data.value > maxValue) {
      pointColor = ColorHelper.getBarColor(data?.categories[data?.categories.length - 1].color, data.category);
    }
  }

  const value = data.value;
  // if (data.unit === 'h' && data.externalKey === 'SleepHours') {
  //   value = data.value / 60.0;
  // }

  const progressBarData = {
    label: '',
    total: total,
    point: value > maxValue ? maxValue : value,
    unit: data.unit,
    pointColor: pointColor,
    visualParts: Array<any>()
  };

  data?.categories.forEach((element) => {
    if (data.value >= element.minimum && data.value <= element.maximum) {
      progressBarData.pointColor = ColorHelper.getBarColor(element.color, data.category);
    }
    progressBarData.visualParts.push({
      maxValue: element.maximum,
      minValue: element.minimum,
      range: element.maximum - element.minimum,
      label: element.rangeLabel,
      color: ColorHelper.getBarColor(element.color, data.category)
    });
  });

  return (
    <React.Fragment>
      <Box
        className={classes.bclmbtgtsg_tileItem}
        onClick={handleDrawerOpen}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
          }
        }}
      >
        <Box className={classes.bclmbtgtsgtI_headerBox}>
          <Box className={classes.bclmbtgtsgti_pillar} >
            <PillarIcon pillarName={data.category} isCircle={true} />
          </Box>
          <Box className={classes.bclmbtgtsgti_heading} >
            <Typography style={{ height: 15 }} >
              {data?.name}
            </Typography>
          </Box>
          <Box className={classes.bclmbtgtsgti_shareBox}>
            {demoMode === true && (
              <> </>
              // <Link className={classes.shareIcon} onClick={tileHandleShare}>
              //   <ShareIcon />
              // </Link>
            )}
            {isShowInfoIcon === true && <InfoOutlinedIcon
              style={{ width: '16px', height: '16px', marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => {
                setOpenMediaModal(true);
              }}
            />
            }
          </Box>
        </Box>
        <Box mt={1} className={classes.bclmbtgtsgtI_lineChartBox}>
          <SmallCurverdLineChart
            lineChartTitle={data?.name}
            lineChartColor={FontColor}
            lineChartData={pointChartData}
          />
        </Box>
        <Box className={classes.bclmbtgtsgtI_percentageScoreBox} >
          <Box mt={1}>
            <Typography className={`${classes.finalScore}`}>
              {integerValuesPillar.includes(data?.name) ? Math.round(data?.value) : `${Number(data?.value).toFixed(1)}`}
              <span>&nbsp;{data?.unit}</span>
            </Typography>
          </Box>
          {data?.value !== undefined && (
            <Box style={{ marginTop: '4px' }}>

              {/* `Variance ${NumberConversion(data?.value - midPoint)}` */}

              <TooltipHelper
                title={midPoint ? `${`Variance ${NumberConversion(data?.value - midPoint)}`}` : ''}
                placement="top"
              >
                <Typography className={classes.fromScore}>
                  {midPoint ?
                    (<>
                      Goal: {midPoint}
                      <span>&nbsp;{data?.unit}</span>
                    </>)
                    : '-'}
                </Typography>
              </TooltipHelper>
            </Box>
          )}
        </Box>

        <Box style={{ marginBottom: 0 }}>
          <GradientHorizontalProgressBarChart progressBarData={[progressBarData]} />
        </Box>
      </Box>
      {openMediaModal === true &&
        <AssessmentMediaContent mediaContentData={undefined} handleClose={() => { setOpenMediaModal(false); }} name={data.name} whatText={data.infoWhat} howText={data.infoHow} whyText={data.infoWhy} />
      }
    </React.Fragment>
  );
};

export default SmallSquareTilesItem;
