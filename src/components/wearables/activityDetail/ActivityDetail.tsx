import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ActivityDetailStyle } from './ActivityDetailStyles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Stack } from '@mui/system';
// import shareIcon from '../../../assets/images/bloodwork/share-icon.png';
import PillarIcon from '../../common/PillarIcon';
import { moveActivityKeyMap, restActivityKeyMap, showValueAndUnit, isNullGroup } from '../ActivityMapKey';
import Tooltip from '@mui/material/Tooltip';
import DateFormatterHelper from '../../../core/helper/DateFormatterHelper';

type IProps = {
  open: boolean;
  toggleDrawer?: any;
  category?: string;
  data: any;
  drawerType?: string;
  anchor: 'left' | 'top' | 'right' | 'bottom';
};

const ActivityDetail = ({
  open,
  toggleDrawer,
  category,
  data,
  anchor,
}: IProps) => {
  const classes = ActivityDetailStyle();

  const keyMap = category === 'Move' ? moveActivityKeyMap : restActivityKeyMap;

  // move activities group
  const distanceGroup = {
    firstKey: undefined,
    name: 'Distance',
    'distanceSwimmingNumLaps': { name: 'Swim Laps', unit: '' }, // Swim Laps [value]
    keys: ['distanceMeters', 'activeDurationsActivitySeconds', 'distanceSwimmingNumLaps', 'distanceSwimmingNumStrokes']
  };

  const movementGroup = {
    firstKey: undefined, // 'movementAvgSpeedMetresPerSecond',
    name: 'Movement',
    keys: ['movementAvgSpeedMetresPerSecond', 'movementNormalizedSpeedMetersPerSecond', 'movementAvgPaceMinutesPerKilometre', 'movementAvgCadenceRpm', 'movementMaxVelocityMetresPerSecond']
  };

  const elevationGroup = {
    firstKey: 'distanceElevationAvgMeters',
    name: 'Elevation',
    keys: ['distanceElevationGainActualMeters', 'distanceElevationMaxMeters', 'distanceElevationMinMeters']
  };

  const powerGroup = {
    firstKey: undefined,
    name: 'Power',
    keys: ['powerAvgWatts', 'powerMaxWatts']
  };


  const caloriesGroup = {
    firstKey: undefined,
    name: 'Calories',
    keys: ['caloriesNetActivityCalories', 'caloriesTotalBurnedCalories']
  };

  const heartRateGroup = {
    firstKey: undefined,
    name: 'Heart Rate',
    keys: ['heartRateAvgHrBpm', 'heartRateMaxHrBpm', 'heartRateMinHrBpm']
  };

  const timeGroup = {
    firstKey: undefined,
    name: 'Time',
    keys: ['startTime', 'endTime', 'activeDurationsActivitySeconds', 'activeDurationsModerateIntensitySeconds', 'activeDurationsVigorousIntensitySeconds', 'activeDurationsLowIntensitySeconds', 'activeDurationsRestSeconds', 'activeDurationsInactivitySeconds']
  };

  // rest activities group
  const readinessGroup = {
    firstKey: undefined,
    name: 'Readiness',
    keys: ['readiness', 'readinessRecoveryLevel']
  };
  const BreathGroup = {
    firstKey: undefined,
    name: 'Breath',
    keys: ['breathsAvgBreathsPerMin', 'breathsMaxBreathsPerMin', 'breathsMinBreathsPerMin', 'breathsOnDemandReading', 'oxygenSaturationOnDemandReading', 'oxygenSaturationStartTime', 'oxygenSaturationEndTime', 'breathsStartTime', 'breathsEndTime']
  };
  const sleepDurationGroup = {
    firstKey: undefined,
    name: 'Sleep Duration',
    keys: ['sleepAsleepDurationAsleepState', 'sleepAsleepDurationDeepSleepState', 'sleepAsleepDurationRemSleepState', 'sleepAsleepDurationLightSleepState', 'temperatureDelta']
  };
  const restHeartRateGroup = {
    firstKey: undefined,
    name: 'Heart Rate',
    keys: ['heartRateMaxHrBpm', 'heartRateAvgHrBpm', 'heartRateMinHrBpm', 'heartRateAvgHrVariabilityRmssd', 'heartRateAvgHrVariabilitySsdn', 'heartRateUserHrMaxBpm']
  };
  const snoringGroup = {
    firstKey: undefined,
    name: 'Snoring',
    keys: ['snoringDataNumSnoringEvents', 'snoringDataTotalSnoringDuration', 'snoringDataStartTime', 'snoringDataEndTime']
  };
  const sleepEfficiencyGroup = {
    firstKey: undefined,
    name: 'Sleep Efficiency',
    showGraph: true,
    keys: ['sleepAwakeWaso', 'sleepDurationPlanned', 'sleepAwakeDurationAwakeState', 'sleepAwakeDurationBeforeSleeping', 'sleepAwakeDurationAfterWakeup', 'sleepDurationInBed', 'sleepDurationUnmeasurableSleep', 'sleepAwakeDurationLongInterruption', 'sleepAwakeDurationShortInterruption', 'sleepAwakeNumOutOfBedEvents', 'sleepAwakeNumWakeupEvents', 'sleepAsleepNumRemEvents']
  };

  const renderGroup = (group: any) => {
    if (isNullGroup(group, data) === true) {
      return <></>;
    }
    return (
      <Stack
        direction={'row'}
        sx={{
          width: 375,
        }}
        key={group.name}
      >
        <Box style={{ marginTop: '24px', width: '100%' }}>
          <Typography
            style={{ color: category === 'Move' ? '#0BAECA' : '#4571D6', fontSize: '11px', fontWeight: '600' }}
          >
            {String(group.name).toUpperCase()}
          </Typography>

          {group.firstKey !== undefined && data[group.firstKey] !== null && data[group.firstKey] !== '0' &&
            <Box style={{ marginTop: '8px', display: 'flex', flexDirection: 'row' }}>
              {/* <Typography
                className={classes.firstMarker}
              >
                {keyMap[group.firstKey].name}
              </Typography>
              <Typography

                className={classes.markerValue}
              >
                {showValueAndUnit(data[group.firstKey], keyMap[group.firstKey].unit)}
              </Typography> */}

              <Box style={{ flexBasis: '32%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', columnGap: '0px', marginTop: '16px' }}>
                <Typography className={classes.marker}>
                  {keyMap[group.firstKey].name}
                </Typography>
                <Typography className={classes.markerValue}>
                  {showValueAndUnit(data[group.firstKey], keyMap[group.firstKey].unit)}
                </Typography>
              </Box>
            </Box>
          }
          <Box style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row', columnGap: '4px' }}>
            {group.keys.map((item) => {
              if (data[item] === null || data[item] === '0') {
                return <></>;
              }
              return (<Box key={item} style={{ flexBasis: '32%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', columnGap: '0px', marginTop: '16px' }}>
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
      </Stack>
    );
  };

  return (
    <>
      <Box >
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={275}
          minFlingVelocity={500}
          className={'measurementSwipeableDrawer'}
        >
          <Stack sx={{ padding: 2 }}>
            <Stack sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }} direction={'row'}>
              <Box style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                <Typography fontFamily={'Poppins'} fontSize={18} fontWeight="600">
                  {data.activityTypeName}
                </Typography>
                <Typography
                  fontFamily={'Poppins'}
                  style={{ marginLeft: 16 }}
                  fontSize={26}
                  fontWeight="600"
                  color={'red'}
                >
                  <PillarIcon pillarName={String(category)} ></PillarIcon>
                </Typography>

                <Tooltip title={data.providerName}>
                  <img style={{ marginLeft: 16 }} width={22} height={22} src={data.logo} alt={''} />
                </Tooltip>
              </Box>

              <Box>
                {/* <img style={{ marginRight: 12, marginLeft: 12 }} width={12} height={12} src={shareIcon} alt={''} /> */}
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Stack>

            <Typography
              fontFamily={'Poppins'}
              style={{ color: '#8F9BB3', cursor: 'pointer', marginTop: '8px' }}
              fontSize={11}
              fontWeight="400"

            >
              {DateFormatterHelper.formatDateTime(data.startTime)}
            </Typography>
            {category === 'Move' ?
              <>
                {renderGroup(distanceGroup)}
                {renderGroup(movementGroup)}
                {renderGroup(elevationGroup)}
                {renderGroup(powerGroup)}
                {renderGroup(caloriesGroup)}
                {renderGroup(heartRateGroup)}
                {renderGroup(timeGroup)}
              </>
              :
              <>
                {renderGroup(readinessGroup)}
                {renderGroup(BreathGroup)}
                {renderGroup(sleepDurationGroup)}
                {renderGroup(restHeartRateGroup)}
                {renderGroup(snoringGroup)}
                {renderGroup(sleepEfficiencyGroup)}
              </>
            }

          </Stack>
        </SwipeableDrawer>
      </Box>
    </>
  );
};

export default ActivityDetail;
