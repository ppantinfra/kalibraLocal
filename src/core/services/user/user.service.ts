
import { IClient, IReport, ApiUrl } from '../../../core';
import BackendApi from '../../../api/shared/BackendApi';
import PreAuthApi from '../../../api/shared/PreAuthApi';

interface ITenantItem {
  id: number;
  key: string;
  name: string;
}

const getTenantList = async () => {
  // Exclude kalibra payment plans from tenant list
  const kalibraPlans = [
    'KalibraFreePlan',
    'KalibraEssentialPlan',
    'KalibraEnhancedPlan',
    'KalibraElitePlan'
  ];
  const res = await BackendApi.get(ApiUrl.TenantListUrl);
  return { tenants: res?.data.tenants.filter((x: ITenantItem) => !kalibraPlans.includes(x.key)) };
};


const getUserList = async () => {
  const res = await BackendApi.get(ApiUrl.UsersListUrl);
  return res?.data;
};

const getMyUserList = async () => {
  const res = await BackendApi.get(ApiUrl.MyUsersListUrl);
  return res?.data;
};

const getClientHealthMarkers = async (clientId, externalKeys) => {
  const res = await BackendApi.get(`${ApiUrl.UserDashboardUrl}/${clientId}?healthMarkerExternalKeys=${externalKeys}`); //,Readiness,CRP,Triglycerides 
  // Height,Bodyweight,BodyFat,WaterIntake,SleepHours,RestingHeartRateScore,SystolicBloodPressure,DiastolicBloodPressure,CaloriesIn,BodyMassIndex,MeasuredBodyFatCheek,MeasuredBodyFatChin,MeasuredBodyFatPec,MeasuredBodyFatMidax,MeasuredBodyFatUmbil,MeasuredBodyFatSupra,MeasuredBodyFatBiceps,MeasuredBodyFatTriceps,MeasuredBodyFatSubscap,WaistToHipRatio,SprenHRVScanFeature,Grip,ActiveEnergyExpenditure,Steps,HRAvgDay
  return res;
};

// *****//
const getUserDetails = (id: any) => {
  return BackendApi.get(`${ApiUrl.UserUrl}/${id}`);
};


const addNewClient = async (data: IClient) => {
  const res = await BackendApi.post(ApiUrl.UserUrl, data);
  return res;
};


const getMetricReport = async () => {
  const res = await BackendApi.get(ApiUrl.MetricReportUrl);
  return res?.data;
};

const getAssessmentList = async () => {
  const res = await BackendApi.get(ApiUrl.AssessementListUrl);
  return res?.data;
  // return BackendApi.get("/health-markers/reports/types");
};


const getHealthMarkers = async (assessmentTypes: any) => {
  const res = await BackendApi.get(ApiUrl.AssessmentHealthMarkerUrl + '/' + assessmentTypes);
  return res?.data;
  // return BackendApi.get(`/health-markers/report/inputs/${assessmentTypes}`);
};

const getHealthMarkerUserDetails = async (id: any) => {
  const res = await BackendApi.get(ApiUrl.AssessmentUserDetailsUrl + '/' + id);
  return res?.data;
  // return BackendApi.get(`/pro/health-markers/reports/user/${id}`)
};

const createMetricReport = async (data: any) => {
  const res = await BackendApi.post<any>(ApiUrl.CreateMetricReportUrl, data);
  return res;
};

const addNewAssessment = async (data: IReport) => {
  const res = await BackendApi.post<IReport>(ApiUrl.AddAssessmentUrl, data);
  return res?.data;
  // return BackendApi.post<IReport>("/pro/health-markers/report", data);
};

const getAssessmentDetailsView = async (reportId: any, clientId: string) => {
  const res = await BackendApi.get(`${ApiUrl.AssessmentDetailsViewUrl}/${reportId}/${clientId}`);
  return res?.data;
  // return BackendApi.get(`/pro/health-markers/report/id/${reportId}`)
};
const getAssessmentDetailsForUpdate = (reportId: any) => {
  return BackendApi.get(`/pro/health-markers/report/for-update/${reportId}`);
};
const updateAssessmentDetails = (data: IReport) => {
  return BackendApi.put<IReport>(ApiUrl.AddAssessmentUrl, data);
};

const getProfileDetails = (cognitoUserId: any) => {
  return BackendApi.get(`/pro/health-markers/reports/user/${cognitoUserId}`);
};

const updateProfileDetails = (data: IClient) => {
  return BackendApi.patch<IClient>('/pro/user', data);
};

const getUserScoreHistory = async (clientId: string, categoryId: string) => {
  const res = await BackendApi.get(`${ApiUrl.ScoreHistoryUrl}/category/${clientId}/${categoryId}`);
  return res;
};

const getUserHealMarkerScoreHistory = async (clientId: string, externalKey: string, parameters: any) => {
  const res = await BackendApi.get(`${ApiUrl.HealthMarkerScoreHistoryUrl}/${clientId}/health-marker/${externalKey}`, {
    params: parameters
  });
  return res;
};

const getUserScore = async (clientId: string) => {
  const res = await BackendApi.get(`${ApiUrl.ScoreUrl}/${clientId}`);
  return res;
};

const getUserAssessmentList = async (clientId: string) => {
  const res = await BackendApi.get(`${ApiUrl.AssessmentListing}/${clientId}`);
  return res;
};

const getCompareMeasurements = async (clientId: string, take: number, skip: number, assessmentName: string) => {
  const res = await BackendApi.get(`${ApiUrl.CompareMeasurement}/${clientId}/${assessmentName}?take=${take}&skip=${skip}`);
  return res;
};



const addUserAfterAuthenticate = async (data: any) => {
  const res = await BackendApi.post<any>(ApiUrl.AddUserUrl, data);
  return res;
};

// This api is used when there is no need to pass Auth token in interceptor i.e like signup case.
const addUserBeforeAuthenticate = async (data: any) => {
  const res = await PreAuthApi.post<any>(ApiUrl.AddUserUrl, data);
  return res;
};

const getManageClientList = async () => {
  const res = await BackendApi.get(ApiUrl.ManageClientListUrl);
  return res?.data;
};
const checkEmailExist = async (email: string) => {
  const res = await BackendApi.get(`${ApiUrl.CheckEmailExistUrl}/${email}`);
  return res;
};
const sendInviteToUser = async (data: any) => {
  const res = await BackendApi.post<any>(ApiUrl.InviteUserUrl, data);
  return res;
};

const sendDataSharingInviteToUser = async (data: any) => {
  const res = await BackendApi.post<any>(ApiUrl.InviteDataSharingUrl, data);
  return res;
};

const updateClientStatus = async (userId: any) => {
  const res = await BackendApi.patch<any>(`${ApiUrl.UpdateClientStatusUrl}/${userId}`, {});
  return res;
};

const getInactiveClientList = async () => {
  const res = await BackendApi.get(`${ApiUrl.InactiveClientListUrl}`);
  return res;
};
const getInactiveClientAssessmentList = async (clientId: any) => {
  const res = await BackendApi.get(`${ApiUrl.InactiveClientListUrl}/${clientId}`);
  return res;
};

const getManageOrganizationList = async () => {
  const res = await BackendApi.get(ApiUrl.ManageOrganizationListUrl);
  return res?.data;
};

const updateUserRole = async (userId: any, data: any) => {
  const res = await BackendApi.patch<any>(`${ApiUrl.UpdateRoleUrl}/${userId}`, data);
  return res;
};

const deleteUserFromOrganization = async (oldUserId: any, newUserId: any) => {
  const res = await BackendApi.delete<any>(`${ApiUrl.DeleteUserFromOrganizationUrl}/${oldUserId}/${newUserId}`);
  return res;
};

const addUserToOrganization = async (userId: any) => {
  const res = await BackendApi.post<any>(`${ApiUrl.AddRemoveUserToOrganizaionUrl}/${userId}`);
  return res;
};

const removeUserFromOrganization = async (userId: any) => {
  const res = await BackendApi.delete<any>(`${ApiUrl.AddRemoveUserToOrganizaionUrl}/${userId}`);
  return res;
};

const checkOrganizationEmailExist = async (email: string) => {
  const res = await BackendApi.get(`${ApiUrl.CheckOrganizationEmailExistUrl}/${email}`);
  return res?.data;
};

const addNewUserToOrganization = async (data: any) => {
  const res = await BackendApi.post<any>(`${ApiUrl.AddNewUserToOrganizationUrl}`, data);
  return res?.data;
};


const UserService = {
  getTenantList,
  getUserList,
  getMyUserList,
  getUserDetails,
  addNewClient,
  getMetricReport,
  createMetricReport,
  getAssessmentList,
  getHealthMarkers,
  getHealthMarkerUserDetails,
  addNewAssessment,
  getAssessmentDetailsView,
  getAssessmentDetailsForUpdate,
  updateAssessmentDetails,
  getProfileDetails,
  updateProfileDetails,
  getClientHealthMarkers,
  getUserScoreHistory,
  getUserScore,
  getUserAssessmentList,
  getUserHealMarkerScoreHistory,
  getCompareMeasurements,
  addUserAfterAuthenticate,
  addUserBeforeAuthenticate,
  getManageClientList,
  checkEmailExist,
  sendInviteToUser,
  sendDataSharingInviteToUser,
  updateClientStatus,
  getInactiveClientList,
  getInactiveClientAssessmentList,
  getManageOrganizationList,
  updateUserRole,
  deleteUserFromOrganization,
  addUserToOrganization,
  removeUserFromOrganization,
  checkOrganizationEmailExist,
  addNewUserToOrganization
};
export default UserService;
