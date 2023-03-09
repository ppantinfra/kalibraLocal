import React from 'react';
import Box from '@mui/material/Box';
import { WearbleStyles } from './WearbleStyles';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WearableItemView from './WearableItemView';
import BackendApi from '../../api/shared/BackendApi';
import ActivityDetail from './activityDetail/ActivityDetail';
import { isNullGroup } from './ActivityMapKey';
import Typography from '@mui/material/Typography';
import { CustomDatePicker } from '../common';
import { useForm } from 'react-hook-form';
import { Stack } from '@mui/system';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import moment from 'moment';
type IProps = {
  clientId: string;
  category: string;
  selectedActivityType: any;
};

const Wearble = ({ clientId, category, selectedActivityType }: IProps) => {
  const theme = useTheme();
  const match700 = useMediaQuery(theme.breakpoints.down(700));
  const match1300 = useMediaQuery(theme.breakpoints.down(1300));
  const classes = WearbleStyles();
  const [restActivities, setRestActivities] = React.useState<Array<any>>([]);
  const [moveActivities, setMoveActivities] = React.useState<Array<any>>([]);
  const [open, setOpen] = React.useState<any>(false);
  const [activityData, setActivityData] = React.useState<any>();
  const [startDate, setStartDate] = React.useState<any>();
  const [endDate, setEndDate] = React.useState<any>();
  const [showDateRangeMsg, setShowDateRangeMsg] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const handleDrawerOpen = (data: any) => {
    setActivityData(data);
    setOpen(true);
  };

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  const getMoveActivities = React.useCallback(async (startDateParam?: any, endDateParam?: any) => {
    setMoveActivities([]);
    let parameters: any = {};

    if (startDateParam && endDateParam) {
      parameters = {
        // startDate: startDateParam.toISOString(),
        // endDate: endDateParam.toISOString(),
        startDate: moment(new Date(startDateParam)).format('YYYY-MM-DD'),
        endDate: moment(new Date(endDateParam)).format('YYYY-MM-DD')
      };
    }


    try {
      const response = await BackendApi.get(`/pro/intelligence/dashboard/terra-activity/${clientId}`, {
        params: parameters
      });
      if (response.status >= 200 && response.status <= 399) {
        setMoveActivities(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [clientId]);

  const getRestActivities = React.useCallback(async (startDateParam?: any, endDateParam?: any) => {
    setRestActivities([]);
    let parameters: any = {};

    if (startDateParam && endDateParam) {
      parameters = {
        // startDate: startDateParam.toISOString(),
        // endDate: endDateParam.toISOString(),
        startDate: moment(new Date(startDateParam)).format('YYYY-MM-DD'),
        endDate: moment(new Date(endDateParam)).format('YYYY-MM-DD')
      };
    }

    try {
      const response = await BackendApi.get(`/pro/intelligence/dashboard/terra-sleep/${clientId}`, {
        params: parameters
      });
      if (response.status >= 200 && response.status <= 399) {
        setRestActivities(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [clientId]);

  const filterActivity = (activities: Array<any>, cat: string) => {
    if (activities.length === 0) {
      return activities;
    }

    const moveActvityKeys = ['movementAvgSpeedMetresPerSecond', 'distanceElevationGainActualMeters', 'powerAvgWatts', 'caloriesNetActivityCalories', 'heartRateAvgHrBpm', 'heartRateMaxHrBpm'];
    const restActvityKeys = ['sleepEfficiency', 'sleepAsleepDurationAsleepState', 'sleepAsleepDurationDeepSleepState', 'sleepAsleepDurationRemSleepState', 'sleepAsleepDurationLightSleepState', 'heartRateAvgHrBpm'];
    const actvityKeys = cat === 'Move' ? moveActvityKeys : restActvityKeys;



    return activities.filter(activity => {
      // remove null activity
      if (isNullGroup({ keys: actvityKeys }, activity) === true) {
        return false;
      }

      if (selectedActivityType.activityTypeName === 'All Categories' || selectedActivityType.activityTypeName === 'Sleep') {
        return true;
      } else if (activity.activityTypeName === selectedActivityType.activityTypeName) {
        return true;
      }
      return false;
    });
  };

  React.useEffect(() => {
    const todayDate = new Date();
    // const start = new Date().setDate(todayDate.getDate() - 7);

    const start = new Date(new Date().setDate(new Date().getDate() - 7));
    setStartDate(start);
    setEndDate(todayDate);
    // reset({ startDate: start, endDate: todayDate });
    // getMoveActivities(start, todayDate);
    // getRestActivities(start, todayDate);
    getMoveActivities();
    getRestActivities();

  }, [getMoveActivities, getRestActivities, reset]);

  const onStartDateChange = (date: any) => {
    reset({ startDate: date, endDate: date });
    setStartDate(date);
    setEndDate(date);
  };


  const handleDateChange = (data: any) => {
    setShowDateRangeMsg(true);
    getMoveActivities(data.startDate, data.endDate);
    getRestActivities(data.startDate, data.endDate);
  };


  const dateFilter = () => {
    return (
      <Stack className={classes.pickeraWrapper}>
        <CustomDatePicker
          controlName="startDate"
          register={register}
          errors={errors}
          rules={{ required: true }}
          control={control}
          labelName="Start Date"
          disableFutureDate={true}
          changeHanlder={(event) =>
            onStartDateChange(event)
          }
        />

        <CustomDatePicker
          controlName="endDate"
          register={register}
          errors={errors}
          rules={{ required: true }}
          control={control}
          labelName="End Date"
          disableFutureDate={true}
          minValue={startDate}
        />

        <span className={classes.filterIcon} onClick={handleSubmit((data: any) => handleDateChange(data))} >
          <FilterListOutlinedIcon />
        </span>

      </Stack>

    );
  };



  const activities = category === 'Move' ? filterActivity(moveActivities, 'Move') : filterActivity(restActivities, 'Rest');
  if (activities.length === 0) {
    return (<React.Fragment>
      {showDateRangeMsg && dateFilter()}
      <Box className={classes._container}>
        <Typography
          paragraph
          style={{ textAlign: 'center' }}
        >

          {showDateRangeMsg ? 'There is no wearable data for this user yet for the selected date range, please ask them to connect a wearable in the Kalibra App or change the date range' :
            'There is no wearable data for this user yet, please ask them to connect a wearable in the Kalibra App'}

        </Typography>
      </Box>
    </React.Fragment>);
  }

  return (
    <React.Fragment>
      {/* Date Filter */}
      {dateFilter()}

      <Box className={classes._container}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          columns={12}
          mt={'16px'}
          sx={{ marginTop: match1300 ? '-40px' : '-40px' }}
          className={match700 ? 'gridbelow700_tiles_responsive' : ''}
        >
          {activities.map((data: any, index: any) => (
            <Grid item lg={3} md={4} xs={4} key={index} style={{ alignItems: 'stretch' }}>
              <WearableItemView data={data} category={category} handleDrawerOpen={() => handleDrawerOpen(data)} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {open === true &&
        <ActivityDetail
          open={open}
          toggleDrawer={toggleDrawer}
          anchor='right'
          category={category}
          data={activityData}
        />
      }
    </React.Fragment>
  );
};

export default Wearble;
