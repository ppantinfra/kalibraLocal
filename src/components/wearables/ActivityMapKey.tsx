import moment from 'moment';
export const moveActivityKeyMap = {
  'distanceMeters': { name: 'Distance', unit: 'km' }, // DISTANCE convert to kilometres and show as [value] (km)
  'activeDurationsActivitySeconds': { name: 'Time Elapsed', unit: 'hh:mm' }, // DURATION convert to hh:mm
  'movementAvgSpeedMetresPerSecond': { name: 'Avg Speed', unit: 'mtrs/s' }, // Avg Speed [value] (m/s)
  'movementAvgCadenceRpm': { name: 'Avg Cadence', unit: 'rpm' }, // Avg Cadence [value] (rpm)
  'movementNormalizedSpeedMetersPerSecond': { name: 'Normalised Speed', unit: 'km/h' }, //Normalised Speed [value] (m/s)
  'movementMaxVelocityMetresPerSecond': { name: 'Max Velocity', unit: 'km/h' }, // Max Velocity [value] (m/s)
  'movementAvgPaceMinutesPerKilometre': { name: 'Avg Pace', unit: 'min/km' }, //Avg Pace [value] (m/km)
  'distanceElevationAvgMeters': { name: 'Avg Elevation', unit: 'm' }, // Avg Elevation [value] (m)
  'distanceElevationGainActualMeters': { name: 'Total Elevation', unit: 'm' }, // Elevation Gain [value] (m)
  'distanceElevationMaxMeters': { name: 'Max Elevation', unit: 'm' }, // Max Elevation [value] (m)
  'distanceElevationMinMeters': { name: 'Min Elevation', unit: 'm' }, // Min Elevation [value] (m)
  'powerMaxWatts': { name: 'Max Power', unut: 'watts' }, // Max Power [value] (watts)
  'powerAvgWatts': { name: 'Avg Power', unit: 'watts' }, // Avg Power [value] (watts)
  'caloriesNetActivityCalories': { name: 'Active Calories', unit: '' }, // Net Activity Calories [value]
  'caloriesTotalBurnedCalories': { name: 'Total Burned Calories', unit: '' }, // Total Burned Calories [value]
  'heartRateMinHrBpm': { name: 'Min HR', unit: 'bpm' }, // Min HR [value] (bpm)
  'heartRateAvgHrBpm': { name: 'Avg HR', unit: 'bpm' }, // Avg HR [value] (bpm)
  'heartRateMaxHrBpm': { name: 'Max HR', unit: 'bpm' }, // Max HR [value] (bpm)
  'distanceSwimmingNumLaps': { name: 'Swim Laps', unit: '' }, // Swim Laps [value]
  'distanceSwimmingNumStrokes': { name: 'Swim Strokes', unit: '' }, // Swim Strokes [value]
  'activeDurationsModerateIntensitySeconds': { name: 'Moderate Intensity', unit: 'hh:mm' }, // Moderate Intensity [value] converted to hh:mm
  'activeDurationsInactivitySeconds': { name: 'Inactivity Intensity', unit: 'hh:mm' }, // Inactivity Intensity [value] converted to hh:mm
  'activeDurationsRestSeconds': { name: 'Rest Intensity', unit: 'hh:mm' }, // Rest Intensity [value] converted to hh:mm
  'activeDurationsVigorousIntensitySeconds': { name: 'Vig. Intensity', unit: 'hh:mm' }, // Rest Intensity [value] converted to hh:mm
  'activeDurationsLowIntensitySeconds': { name: 'Low Intensity', unit: 'hh:mm' }, // Low Intensity [value] converted to hh:mm
  'oxygenMaxVolumeMlPerMinPerKgDay': { name: 'Max Oxygen Volume', unit: 'ml/m/kg/day' }, // Max Oxygen Volume [value] (ml/m/kg/day)
  'startTime': { name: 'Start Time', unit: 'time' }, // Start
  'endTime': { name: 'End Time', unit: 'time' }, // End
};

export const restActivityKeyMap = {
  'heartRateUserHrMaxBpm': { name: 'User Max HR', unit: 'bpm' }, // User Max HR [value] (bpm)
  'heartRateAvgHrVariabilityRmssd': { name: 'HRV (rmssd)', unit: 'ms' }, // Avg HRV [value] (rmssd)
  'heartRateAvgHrVariabilitySsdn': { name: 'HRV (ssdn)', unit: 'ms' }, // Avg HRV[value] [ssdn]
  'heartRateMaxHrBpm': { name: 'Max HR', unit: 'bpm' }, //Max HR [value] (bpm)
  'heartRateMinHrBpm': { name: 'Min HR', unit: 'bpm' }, //Min HR [value] (bpm)
  'heartRateAvgHrBpm': { name: 'Avg HR', unit: 'bpm' }, //Avg HR [value] (bpm)
  'readiness': { name: 'Readiness', unit: '%' }, // Readiness [value]
  'readinessRecoveryLevel': { name: 'Recovery Level', unit: '' },  //Recovery Level [value]
  'breathsStartTime': { name: 'Breaths start', unit: 'time' }, // Breaths start [value] as hh:mm
  'breathsEndTime': { name: 'Breaths end', unit: 'time' }, // Breaths end [value] as hh:mm
  'breathsMaxBreathsPerMin': { name: 'Max Breaths', unit: 'bpm' }, // Max Breaths [value] (per/m)
  'breathsMinBreathsPerMin': { name: 'Min Breaths', unit: 'bpm' }, // Min Breaths [value] (per/m)
  'breathsAvgBreathsPerMin': { name: 'Avg Breaths', unit: 'bpm' }, // Avg Breaths [value] (per/m)
  'breathsOnDemandReading': { name: 'On Demand', unit: '' }, // Breaths [value]
  'oxygenSaturationOnDemandReading': { name: 'Oxygen Saturation', unit: '' }, // Oxygen Saturation [value]
  'oxygenSaturationStartTime': { name: 'O2 Sat Start', unit: 'time' }, // Oxygen Saturation start [value] as hh:mm
  'oxygenSaturationEndTime': { name: 'O2 Sat End', unit: 'time' }, // Oxygen Saturation start [value] as hh:mm
  'snoringDataNumSnoringEvents': { name: 'Snoring Events', unit: '' }, // Snoring Events [value]
  'snoringDataTotalSnoringDuration': { name: 'Snoring Duration', unit: '' }, // Snoring Duration [value]
  'snoringDataStartTime': { name: 'Snoring start', unit: 'hh:mm' }, // Snoring start [value] as hh:mm
  'snoringDataEndTime': { name: 'Snoring end', unit: 'hh:mm' }, // Snoring end [value] as hh:mm
  'sleepEfficiency': { name: 'Sleep efficiency', unit: '' }, // Sleep efficiency [value]
  'sleepDurationPlanned': { name: 'Planned', unit: 'hh:mm' }, // Sleep efficiency [value] (planned) as hh:mm
  'sleepAwakeNumOutOfBedEvents': { name: 'Out of Bed Events', unit: '' }, // Out of Bed Events [value]
  'sleepAwakeNumWakeupEvents': { name: 'Wake up Events', unit: '' }, // Wake up Events [value]
  'sleepAwakeDurationAwakeState': { name: 'Awake', unit: 'hh:mm' }, // Awake [value] as hh:mm
  'sleepAwakeDurationBeforeSleeping': { name: 'Before sleep', unit: 'hh:mm' }, // Before sleep [value] as hh:mm
  'sleepAwakeDurationAfterWakeup': { name: 'After wakeup', unit: 'hh:mm' }, // After wakeup [value] as hh:mm
  'sleepAwakeDurationLongInterruption': { name: 'Long interuption', unit: 'hh:mm' }, // Long interuption [value] as hh:mm
  'sleepAwakeDurationShortInterruption': { name: 'Short interuptions', unit: 'hh:mm' }, // Short interuptions [value] as hh:mm
  'sleepAwakeWaso': { name: 'WASO', unit: 'hh:mm' }, // Wakefulness After Sleep Onset [value] as hh:mm
  'sleepDurationInBed': { name: 'In bed', unit: 'hh:mm' }, // In bed [value] as hh:mm
  'sleepDurationUnmeasurableSleep': { name: 'Unmeasurable Sleep ', unit: 'hh:mm' }, // Unmeasurable Sleep [value] as hh:mm
  'sleepAsleepNumRemEvents': { name: 'REM Events', unit: '' }, // REM Events [value]
  'sleepAsleepDurationAsleepState': { name: 'Duration Asleep', unit: 'hh:mm' }, // Asleep [value] as hh:mm
  'sleepAsleepDurationDeepSleepState': { name: 'Deep Sleep', unit: 'hh:mm' }, // Deep Sleep [value] as hh:mm
  'sleepAsleepDurationRemSleepState': { name: 'REM Sleep', unit: 'hh:mm' }, // REM Sleep [value] as hh:mm
  'sleepAsleepDurationLightSleepState': { name: 'Light Sleep', unit: 'hh:mm' }, // Light Sleep [value] as hh:mm
  'temperatureDelta': { name: 'Temp delta', unit: '(c)' } //Temp delta [value] (c)
};

const converToNumber = (str: string) => {
  const pieces = str.split(',');
  const resultingString = pieces.join('');
  return Number(resultingString);
};


export const showValueAndUnit = (value: any, unit: string) => {
  if (value === null) {
    return 'N/A';
  }

  if (unit === 'hh:mm') {
    return moment.utc(converToNumber(value) * 1000).format('HH:mm');
  } else if (unit === 'time') {
    return moment(value).format('hh:mm A');
  } else if (unit === 'km') {
    return `${(converToNumber(value) / 1000.0).toFixed(2)} km`;
  } else if (unit === 'm') {
    return `${(converToNumber(value)).toFixed(0)} m`;
  }

  return `${Number(value).toFixed(0)} ${unit}`;
};

export const isNullGroup = (group: any, data: any) => {
  const response = group.keys.find(item => data[item] !== null && data[item] !== '0');
  if ((group.firstKey === undefined || data[group.firstKey] === null || data[group.firstKey] === '0') && response === undefined) {
    return true;
  }
  return false;

};

