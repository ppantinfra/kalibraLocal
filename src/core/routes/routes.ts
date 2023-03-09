import { FC } from 'react';
import SignInScreen from '../../pages/auth/SignInScreen';
import EditProfileScreen from '../../pages/admin/EditProfileScreen';
import ConfirmationTenantListScreen from '../../pages/tenants/ConfirmationTenantListScreen';
// import NewClientScreen from '../../pages/clients/NewClientScreen';
import ViewAssessmentDetailsScreen from '../../pages/interactionSystems/assessments/ViewAssessmentDetailsScreen';
import ClientDetailsScreen from '../../pages/clients/ClientDetailsScreen';
import ClientOverviewScreen from '../../pages/clients/ClientOverviewScreen';
import ActivityLoggerScreen from '../../pages/interactionSystems/activityLogger/ActivityLoggerScreen';
import { BodyComposition, Genomics, Nuitritions, BiomeScreen, Wearables } from '../../components/pillars';
import { RoutesPath as route } from '../constants';
import IntelligenceClientOverviewScreen from '../../pages/analytics/Intelligence/IntelligenceClientOverviewScreen';
import ConsultationsScreen from '../../pages/products/ConsultationsScreen';
import SupplementsScreen from '../../pages/products/SupplementsScreen';
import LabTestsScreen from '../../pages/products/LabTestsScreen';
import BloodworkScreen from '../../pages/interactionSystems/bloodwork/BloodworkScreen';
import ConversationsScreen from '../../pages/interactionSystems/conversations/ConversationsScreen';
// import IntelligenceClientDetailsScreen from '../../pages/analytics/Intelligence/IntelligenceClientDetailsScreen';
import ProductsScreen from '../../pages/products/ProductsScreen';
import RegistrationScreen from '../../pages/auth/RegistrationScreen';
import ResetPasswordScreen from '../../pages/auth/ResetPasswordScreen';
import NewPasswordScreen from '../../pages/auth/NewPasswordScreen';
import ManageClientsScreen from '../../pages/clients/ManageClientsScreen';
import ClientAssessmentsScreen from '../../pages/clients/ClientAssessmentsScreen';
import AddClientScreen from '../../pages/clients/AddClientScreen';
import IntelligenceClientList from '../../components/intelligence/IntelligenceClientList';
import IntelligenceClientDetails from '../../components/intelligence/IntelligenceClientDetails';
import AssessmentLandingScreen from '../../pages/interactionSystems/assessments/AssessmentLandingScreen';
import AssessmentConductScreen from '../../pages/interactionSystems/assessments/AssessmentConductScreen';
import AddMeasurementaScreen from '../../pages/interactionSystems/bodyComposition/AddMeasurementScreen';
import CompareMeasurementScreen from '../../pages/interactionSystems/bodyComposition/CompareMeasurementScreen';
import AddPictureScreen from '../../pages/interactionSystems/bodyComposition/AddPictureScreen';
import ComparePictureScreen from '../../pages/interactionSystems/bodyComposition/ComparePictureScreen';
import UploadBloodworkScreen from '../../pages/interactionSystems/bloodwork/UploadBloodworkScreen';
import ResultSummaryScreen from '../../pages/interactionSystems/bloodwork/ResultSummaryScreen';
import BloodworkDetailedReportScreen from '../../pages/interactionSystems/bloodwork/BloodworkDetailedReportScreen';
import ManageOrganizationScreen from '../../pages/organization/ManageOrganizationScreen';
import AddPractionerScreen from '../../pages/organization/AddPractionerScreen';
import DeletePractionerScreen from '../../pages/organization/DeletePractionerScreen';
import HelpScreen from '../../pages/help/HelpScreen';
interface Route {
  key: string;
  title: string;
  path: string;
  component: FC<Record<string, string>>;
  naviagtePath?: string;
}

//All Components which have header,footer,sidebar will use that routes
export const sideBarLayoutRoutes: Array<Route> = [
  //Clients Routes

  {
    //client List route
    key: 'dashboard-screen-route',
    title: 'Dashboard Screen',
    path: `/${route.CONFIRMATIONTENANT}`,
    component: ClientOverviewScreen,
    naviagtePath: `/${route.CLIENTSLISTROUTE}`
  },

  {
    //client List route
    key: 'dashboard-screen-route',
    title: 'Dashboard Screen',
    path: '/',
    component: ClientOverviewScreen,
    naviagtePath: `/${route.CLIENTSLISTROUTE}`
  },

  {
    //client List route
    key: 'dashboard-screen-route',
    title: 'Dashboard Screen',
    path: `/${route.CLIENTSLISTROUTE}`,
    component: ClientOverviewScreen
  },

  // {
  //   //Add client
  //   key: 'newClient-route',
  //   title: 'New Client Screen ',
  //   path: `/${route.NEWCLIENTROUTE}`,
  //   component: NewClientScreen
  // },
  {
    //Add client
    key: 'addClient-route',
    title: 'Add Client Screen ',
    path: `/${route.NEWCLIENTROUTE}`,
    component: AddClientScreen
  },

  {
    //edit profile
    key: 'home-route',
    title: 'Edit Profile ',
    path: `/${route.PROFILEROUTE}`,
    component: EditProfileScreen
  },
  {
    key: 'organization-route',
    title: 'Manage Organisation',
    path: `/${route.MANAGEORGANIZATION}`,
    component: ManageOrganizationScreen
  },
  {
    key: 'add-practioner-route',
    title: 'Add Practitioner',
    path: `/${route.ADDPRACTIONER}`,
    component: AddPractionerScreen
  },
  {
    key: 'delete-practioner-route',
    title: 'Delete Practitioner',
    path: `/${route.DELETEPRACTIONER}`,
    component: DeletePractionerScreen
  },

  {
    key: 'client overview-route',
    title: 'Client Overview Screen ',
    path: `/${route.CLIENTSOVERVIEWROUTE}`,
    component: ClientDetailsScreen
  },
  {
    key: 'manage-clients-route',
    title: 'Manage Clients Screen ',
    path: `/${route.MANAGECLIENTSROUTE}`,
    component: ManageClientsScreen
  },
  {
    key: 'client-assessments-route',
    title: 'Client Assessment Screen ',
    path: `/${route.CLIENTASSESSMENTSROUTE}/:inactiveClientId`,
    component: ClientAssessmentsScreen
  },
  {
    key: 'help-route',
    title: 'Help & Support',
    path: `/${route.HELP}`,
    component: HelpScreen
  },

  // Clients Module End


  {
    key: 'Assessments-landing',
    title: 'Assessments',
    path: `/${route.ASSESSMENT}`,
    component: AssessmentLandingScreen
  },

  {
    key: 'New-Assessments-route',
    title: 'New Assessment Screen',
    path: `/${route.ASSESSMENT}/${route.NEWASSESSMENT}`,
    component: AssessmentConductScreen
  },

  {
    key: 'Edit-Assessments-route',
    title: 'Edit Assessment Screen',
    path: `/${route.ASSESSMENT}/${route.EDITASSESSMENT}`,
    component: AssessmentConductScreen
  },


  {
    key: 'View-Assessments-route',
    title: 'View Assessment  Screen',
    path: `/${route.ASSESSMENT}/${route.VIEWASSESSMENT}`,
    component: ViewAssessmentDetailsScreen
  },
  {
    key: 'activityLogger-route',
    title: 'Activity Logger Screen ',
    path: `/${route.ACTIVITYLOGGER}`,
    component: ActivityLoggerScreen
  },
  {
    key: 'nutrition-route',
    title: 'Nutrition screen',
    path: `/${route.NUTRITION}`,
    component: Nuitritions
  },
  {
    key: 'genomics-route',
    title: 'Genomics screen',
    path: `/${route.GENOMICS}`,
    component: Genomics
  },
  {
    key: 'wearables-route',
    title: 'Wearables screen',
    path: `/${route.WEARABLES}`,
    component: Wearables
  },
  {
    key: 'biome-route',
    title: 'Biome screen',
    path: `/${route.BIOME}`,
    component: BiomeScreen
  },
  {
    key: 'conversations-dashboard-route',
    title: 'Conversations Dashboard Screen',
    path: `/${route.CONVERSATIONS}`,
    component: ConversationsScreen
  },
  {
    key: 'intelligence-dashboard-route',
    title: 'Intelligence Dashboard Screen',
    path: `/${route.INTELLIGENCE}`,
    component: IntelligenceClientOverviewScreen
  },
  {
    key: 'intelligence-clients-route',
    title: 'Intelligence clients Screen',
    path: `/${route.INTELLIGENCECLIENTLISTROUTE}`,
    component: IntelligenceClientList
  },
  {
    key: 'intelligence-clients-Details-route',
    title: 'Intelligence clients Details Screen',
    path: `/${route.INTELLIGENCECLIENTDETAILSROUTE}`,
    component: IntelligenceClientDetails
  },
  {
    key: 'products-route',
    title: 'Products Screen',
    path: `/${route.PRODUCTMODULE}`,
    component: ProductsScreen
  },

  {
    key: 'consultations-route',
    title: 'Consultations Screen',
    path: `/${route.CONSULTATIONS}`,
    component: ConsultationsScreen
  },

  {
    key: 'supplements-route',
    title: 'Supplements Screen',
    path: `/${route.SUPLEMENTS}`,
    component: SupplementsScreen
  },
  {
    key: 'labTests-route',
    title: 'Lab Tests Screen',
    path: `/${route.LABSTESTS}`,
    component: LabTestsScreen
  },
  {
    key: 'bodyComposition-route',
    title: 'Body Composition screen',
    path: `/${route.BODYCOMPOSITION}`,
    component: BodyComposition
  },

  {
    key: 'bodyComposition-addmeasurement-route',
    title: 'Add Measurement Screen',
    path: `/${route.ADDMEASUREMENT}`,
    component: AddMeasurementaScreen
  },

  {
    key: 'bodyComposition-comparemeasurement-route',
    title: 'Compare Measurement Screen',
    path: `/${route.COMPAREMEASUREMENT}`,
    component: CompareMeasurementScreen
  },


  {
    key: 'bodyComposition-addpicture-route',
    title: 'Add Picture Screen',
    path: `/${route.ADDPICTURE}`,
    component: AddPictureScreen
  },

  {
    key: 'bodyComposition-comparepicture-route',
    title: 'Compare Picture Screen',
    path: `/${route.COMPAREPICTURE}`,
    component: ComparePictureScreen
  },


  {
    key: 'bloodwork-route',
    title: 'Bloodwork screen',
    path: `/${route.BLOODWORK}`,
    component: BloodworkScreen
  },

  {
    key: 'upload-bloodwork-route',
    title: 'Upload Bloodwork screen',
    path: `/${route.UPLOADBLOODWORK}`,
    component: UploadBloodworkScreen
  },

  {
    key: 'review-bloodwork-route',
    title: 'Review Bloodwork screen',
    path: `/${route.REVIEWBLOODWORK}`,
    component: UploadBloodworkScreen
  },
  {
    key: 'result-summary-bloodwork-route',
    title: 'Result Summary Bloodwork screen',
    path: `/${route.RESULTSUMMARYBLOODWORK}`,
    component: ResultSummaryScreen
  },
  {
    key: 'bloodwork-detailedReport-route',
    title: 'Bloodwork Detailed Report',
    path: `/${route.BLOODWORKDETAILEDREPORT}`,
    component: BloodworkDetailedReportScreen
  }


];

//All components which have header & footer only will use that routes
export const headerFooterLayoutRoutes: Array<Route> = [
  {
    //client List route
    key: 'dashboard-screen-route',
    title: 'Dashboard Screen',
    path: '/',
    component: ConfirmationTenantListScreen,
    naviagtePath: `/${route.CONFIRMATIONTENANT}`
  },
  {
    key: 'confirmationTenant-route',
    title: 'Confirmation Tenant Screen',
    path: `/${route.CONFIRMATIONTENANT}`,
    component: ConfirmationTenantListScreen
  },
  {
    //edit profile
    key: 'home-route',
    title: 'Edit Profile ',
    path: `/${route.PROFILEROUTE}`,
    component: EditProfileScreen
  }
];

//All components which have header & picture only will use that routes
export const headerPictureLayoutRoutes: Array<Route> = [
  {
    key: 'signInScreen-route',
    title: 'SignInScreen',
    path: '/',
    component: SignInScreen
  },
  {
    key: 'registrationScreen-route',
    title: 'Registration Screen',
    path: `/${route.REGISTRATIONMODULE}`,
    component: RegistrationScreen
  },
  {
    key: 'resetPassowrdScreen-route',
    title: 'Reset Password Screen',
    path: `/${route.RESETPASSWORDMODULE}`,
    component: ResetPasswordScreen
  },
  {
    key: 'newPassowrdScreen-route',
    title: 'New Password Screen',
    path: `/${route.NEWPASSWORDMODULE}`,
    component: NewPasswordScreen
  }
];
