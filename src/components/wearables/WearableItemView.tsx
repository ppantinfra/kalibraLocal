import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useWearableItemViewStyles } from './WearableItemViewStyles';
import { ColorHelper } from '../../core/helper/ColorHelper';
import { FontColor, FontFamily } from '../../core';
import PillarIcon from '../common/PillarIcon';
import { SpecialCircularProgressBar } from '../charts';
import { moveActivityKeyMap, restActivityKeyMap, showValueAndUnit } from './ActivityMapKey';
import moment from 'moment';
import { Tooltip } from '@mui/material';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import BarChart from '../charts/bar/BartChart';

type Props = {
  data: any,
  category?: string;
  handleDrawerOpen?: any;
};

const WearableItemView = ({
  data,
  category,
  handleDrawerOpen
}: Props) => {
  const classes = useWearableItemViewStyles();

  if (category === 'Rest') {
    data.activityTypeName = 'Sleep';
  }

  const converToNumber = (str: string) => {
    const pieces = str.split(',');
    const resultingString = pieces.join('');
    return Number(resultingString);
  };

  const calculateReadiness = () => {
    const eightHours = 8 * 3600;
    const percent = data.sleepDurationPlanned === null ? converToNumber(data.sleepDurationInBed) * 100.0 / eightHours : converToNumber(data.sleepDurationInBed) * 100.0 / converToNumber(data.sleepDurationPlanned);
    return percent > 100 ? 100 : Number(percent).toFixed(0);
  };

  const moveActvityKeys = ['movementAvgSpeedMetresPerSecond', 'distanceElevationGainActualMeters', 'powerAvgWatts', 'caloriesNetActivityCalories', 'heartRateAvgHrBpm', 'heartRateMaxHrBpm'];
  // commented 'sleepEfficiency' from restActivityKeys  
  const restActvityKeys = ['sleepAsleepDurationAsleepState', 'sleepAsleepDurationDeepSleepState', 'sleepAsleepDurationRemSleepState', 'sleepAsleepDurationLightSleepState', 'heartRateAvgHrBpm'];
  const actvityKeys = category === 'Move' ? moveActvityKeys : restActvityKeys;
  const keyMap = category === 'Move' ? moveActivityKeyMap : restActivityKeyMap;

  // if (data.heartRateHrSamples.length > 0) {
  //   console.log('data.heartRateHrSamples==', data.heartRateHrSamples);
  //   console.log(JSON.parse(data.heartRateHrSamples));
  // }


  return (
    <Box
      className={`${classes.tilesViewCardBox}`}
      style={{
        borderRadius: '10px',
        cursor: 'pointer'
      }}
      onClick={handleDrawerOpen}
      sx={{
        height: '100%',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        }
      }}
    >
      <Box className={classes.cardBox}>
        <Box className={classes.headerBox}>
          {data.activityTypeName && (
            <Box className={classes.titleBox} style={{ backgroundColor: ColorHelper.getBarColor('orange', String(category)) }}>
              <Typography
                paragraph
                className={classes.title}
                style={{ color: ColorHelper.getTextColor(String(category), FontColor) }}
              >
                {data.activityTypeName}
              </Typography>
            </Box>
          )}
        </Box>
        <Box className={classes.pillarBox}>
          <PillarIcon pillarName={String(category)} isCircle={true} ></PillarIcon>
        </Box>
        <Box className={classes.providerIconBox}>
          <Tooltip title={data.providerName}>
            <img style={{ marginLeft: 16 }} width={20} height={20} src={data.logo} alt={''} />
          </Tooltip>
        </Box>

        <Box className={classes.time}>
          <Typography
            paragraph
            className={classes.date}
          >
            {DateFormatterHelper.formatDateTime(data.startTime)}
          </Typography>
        </Box>
        {category === 'Move' ?
          (data.distanceMeters !== null && data.distanceMeters !== '0') && (<Box className={classes.lengthBox}>
            <Typography
              paragraph
              className={classes.length}
              style={{ color: ColorHelper.getBarColor('teal', String('Move')) }}
            >
              {(converToNumber(data.distanceMeters) / 1000.0).toFixed(2)}
              <span style={{ fontSize: '16px', fontFamily: FontFamily, fontWeight: '400' }}>km</span>
            </Typography>

            <Typography
              paragraph
              className={classes.spentTime}
            >
              {moment.utc(converToNumber(data.activeDurationsActivitySeconds) * 1000).format('HH:mm:ss')}
            </Typography>
          </Box>
          )
          :
          <Box className={classes.lengthBox}></Box>
        }
        <Box>
          {category === 'Move' ?
            <BarChart chartData={JSON.parse(data.heartRateHrSamples)} />
            :
            <SpecialCircularProgressBar
              progressValue={calculateReadiness()}
              width={304}
              strkWidth={32}
              borderColor='#5F93F9'
              scoreText='Durarion'
            />
          }
        </Box>
        <Box style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          {actvityKeys.map((item) => {
            if (data[item] === null || data[item] === '0') {
              return <></>;
            }
            return (<Box key={item} style={{ flexBasis: '50%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', columnGap: '0px', marginTop: '16px' }}>
              <Typography
                className={classes.marker}
              >
                {keyMap[item].name}
              </Typography>
              <Typography

                className={classes.markerValue}
              >
                {showValueAndUnit(data[item], keyMap[item].unit)}
              </Typography>
            </Box>);
          })}
        </Box>

      </Box>
    </Box >
  );
};

export default WearableItemView;
