import { ApiUrl } from '../../../core';
import BackendApi from '../../../api/shared/BackendApi';


const getActivityLoggerDropdownValues = async () => {
  const res = await BackendApi.get(ApiUrl.ActivityLoggerDropdownValuesUrl);
  return res?.data;
};

const getActivityLoggerActivities = async (userId, fromDate, toDate) => {
  const res = await BackendApi.get(
    `${ApiUrl.ActivityLoggerActivitiesUrl}/${userId}?fromDate=${fromDate}&toDate=${toDate}`
  );
  return res?.data;
};

const addActivityLoggerActivities = async (data) => {
  const res = await BackendApi.post(ApiUrl.ActivityLoggerActivitiesUrl, data);
  return res?.data;
};

const getActivityLoggerDates = async (userId) => {
  const res = await BackendApi.get(
    `${ApiUrl.ActivityLoggerDatesUrl}/${userId}`
  );
  return res?.data;
};

const deleteActivityLoggerSet = async (params, body) => {
  const res = await BackendApi.delete(ApiUrl.ActivityLogSetUrl + params, {
    data: body,
  });
  return res?.data;
};

const deleteActivityLogs = async (params, body) => {
  const res = await BackendApi.delete(
    ApiUrl.ActivityLoggerActivitiesDeleteUrl + params,
    { data: body }
  );
  return res?.data;
};

const WorkoutService = {
  getActivityLoggerDropdownValues,
  getActivityLoggerActivities,
  addActivityLoggerActivities,
  getActivityLoggerDates,
  deleteActivityLoggerSet,
  deleteActivityLogs,
};

export default WorkoutService;
