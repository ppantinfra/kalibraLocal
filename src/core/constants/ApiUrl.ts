const TenantListUrl = '/pro/tenants/list';
const UsersListUrl = '/pro/dashboard?healthMarkerExternalKeys=Steps,WaterIntake,SleepHours,Bodyweight,CaloriesIn,CaloriesOut,BodyFat';
const MyUsersListUrl = '/pro/dashboard/my-clients?healthMarkerExternalKeys=Steps,WaterIntake,SleepHours,Bodyweight,CaloriesIn,CaloriesOut,BodyFat';
const UserUrl = 'pro/user';
const MetricReportUrl = '/health-markers/report/inputs/DailyMetricsReport';
const CreateMetricReportUrl = '/pro/health-markers/report/create';
const ActivityLoggerActivitiesUrl = '/activity-loggers/user_activity_log';
const ActivityLoggerDropdownValuesUrl = '/activity-loggers/activity_log_types';
const ActivityLoggerDatesUrl = '/activity-loggers/user_activity_log_uploaded_dates';
const ActivityLogSetUrl = '/activity-loggers/user_activity_log_set';
const ActivityLoggerActivitiesDeleteUrl = '/activity-loggers/user_activity_logs';
const AssessmentUserDetailsUrl = '/pro/health-markers/reports/user';
const AssessementListUrl = '/health-markers/reports/types';
const AssessmentHealthMarkerUrl = '/health-markers/report/inputs';
const AddAssessmentUrl = '/pro/health-markers/report';
const AssessmentDetailsViewUrl = '/pro/health-markers/report-new/id';
const UserDashboardUrl = '/pro/dashboard';
const ScoreUrl = '/pro/scores';
const ScoreHistoryUrl = '/pro/scores/history';
const HealthMarkerScoreHistoryUrl = 'pro/health-markers/user';
const AssessmentListing = '/pro/health-markers/data/user-assessments';
// const CompareMeasurement = '/pro/health-markers/user';
const CompareMeasurement = '/pro/health-markers/report/history';
const AddUserUrl = '/pro/pro-user';
const ManageClientListUrl = '/pro/user-data-sharing-list';
const CheckEmailExistUrl = '/pro/add-user-verify';
const InviteUserUrl = '/pro/invite-user';
const InviteDataSharingUrl = '/pro/send-data-sharing-invitation';
const UpdateClientStatusUrl = '/pro/set-user-data-sharing-status';
const InactiveClientListUrl = '/pro/inactive-user-data-sharing-assessment-list';
const ManageOrganizationListUrl = '/pro/tenant-pro-users';
const UpdateRoleUrl = '/pro/update-pro-user-role-cognito-tenant';
const DeleteUserFromOrganizationUrl = '/pro/pro-user-cognito-tenant';
const AddRemoveUserToOrganizaionUrl = '/pro/user-pro-user-association';
const CheckOrganizationEmailExistUrl = '/pro/add-pro-user-verify';
const AddNewUserToOrganizationUrl = '/pro/pro-user-cognito-tenant';
const ResendOTPCode = '/pro/resend-confirmation-code';

export const ApiUrl = {
    TenantListUrl, UsersListUrl, UserUrl, MetricReportUrl, CreateMetricReportUrl, ActivityLoggerActivitiesUrl, ActivityLoggerDropdownValuesUrl, ActivityLoggerDatesUrl,
    ActivityLogSetUrl, ActivityLoggerActivitiesDeleteUrl, AssessmentUserDetailsUrl, AssessementListUrl, AssessmentHealthMarkerUrl,
    AddAssessmentUrl, AssessmentDetailsViewUrl, UserDashboardUrl, ScoreHistoryUrl, AssessmentListing, ScoreUrl, HealthMarkerScoreHistoryUrl,
    CompareMeasurement, AddUserUrl, ManageClientListUrl, CheckEmailExistUrl, InviteUserUrl, InviteDataSharingUrl, UpdateClientStatusUrl,
    InactiveClientListUrl, ManageOrganizationListUrl, UpdateRoleUrl, DeleteUserFromOrganizationUrl, AddRemoveUserToOrganizaionUrl,
    CheckOrganizationEmailExistUrl, AddNewUserToOrganizationUrl, MyUsersListUrl, ResendOTPCode
};
