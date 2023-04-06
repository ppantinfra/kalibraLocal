// Auth Module
const REGISTRATIONMODULE = 'registration';
const RESETPASSWORDMODULE = 'resetpassword';
const NEWPASSWORDMODULE = 'newpassword';


// Clients Module
const CLIENTSMODULE = 'clients';
const CLIENTSLISTROUTE = CLIENTSMODULE + '/myclients';
const CLIENTSOVERVIEWROUTE = CLIENTSMODULE + '/overview';
const MANAGECLIENTSROUTE = CLIENTSMODULE + '/manage';
const NEWCLIENTROUTE = CLIENTSMODULE + '/addclient';
const CLIENTASSESSMENTSROUTE = CLIENTSMODULE + '/assessments';

// Admin
const ADMINMODULE = 'admin';
const PROFILEROUTE = ADMINMODULE + '/profile';
//Coach Decision Module
const COACHDECISSIONMODULE = 'interactionsystems';
const ACTIVITYLOGGER = COACHDECISSIONMODULE + '/activitylogger';
const ASSESSMENT = COACHDECISSIONMODULE + '/assessments';
const NEWASSESSMENT = 'newassessment';
const EDITASSESSMENT = 'editassessment';
const VIEWASSESSMENT = 'report';
const NUTRITION = COACHDECISSIONMODULE + '/nutrition';
const GENOMICS = COACHDECISSIONMODULE + '/genomics';
const WEARABLES = COACHDECISSIONMODULE + '/wearables';
const BIOME = COACHDECISSIONMODULE + '/biome';
const BODYCOMPOSITION = COACHDECISSIONMODULE + '/bodycomposition';
const ADDMEASUREMENT = BODYCOMPOSITION + '/addmeasurement';
const COMPAREMEASUREMENT = BODYCOMPOSITION + '/comparemeasurement';
const ADDPICTURE = BODYCOMPOSITION + '/addpicture';
const COMPAREPICTURE = BODYCOMPOSITION + '/comparepicture';
const BLOODWORK = COACHDECISSIONMODULE + '/bloodwork';
const UPLOADBLOODWORK = BLOODWORK + '/upload';
const REVIEWBLOODWORK = BLOODWORK + '/review';
const RESULTSUMMARYBLOODWORK = BLOODWORK + '/resultsummary';
const BLOODWORKDETAILEDREPORT = BLOODWORK + '/detailedreport';
const CONVERSATIONS = COACHDECISSIONMODULE + '/conversations';
// Analytics
const ANALYTICSMODULE = 'analytics';
const INTERACTIONS = ANALYTICSMODULE + '/insights';
const INTELLIGENCE = ANALYTICSMODULE + '/intelligence';
const INTELLIGENCECLIENTLISTROUTE = INTELLIGENCE + '/intelligenceclients';
const INTELLIGENCECLIENTDETAILSROUTE = INTELLIGENCE + '/intelligenceclientdetails';
const INTELLIGENCECUSTOMISEDASHBOARD = INTELLIGENCE + '/customisedashboard';
// Product
const PRODUCTMODULE = 'products';
const CONSULTATIONS = PRODUCTMODULE + '/consultations';
const SUPLEMENTS = PRODUCTMODULE + '/supplements';
const LABSTESTS = PRODUCTMODULE + '/labtest';
const CONFIRMATIONTENANT = 'confirmation/tenant';
const ANALYTICS = 'analytics';
const MANAGEORGANIZATION = 'organization';
const ADDPRACTIONER = MANAGEORGANIZATION + '/addpractioner';
const DELETEPRACTIONER = MANAGEORGANIZATION + '/deletepractioner';
// help
const HELP = 'support';


export const RoutesPath = {
  REGISTRATIONMODULE,
  RESETPASSWORDMODULE,
  NEWPASSWORDMODULE,
  CLIENTSMODULE,
  CLIENTSLISTROUTE,
  CLIENTSOVERVIEWROUTE,
  MANAGECLIENTSROUTE,
  NEWCLIENTROUTE,
  CLIENTASSESSMENTSROUTE,
  PROFILEROUTE,
  MANAGEORGANIZATION,
  ADDPRACTIONER,
  DELETEPRACTIONER,
  COACHDECISSIONMODULE,
  GENOMICS,
  WEARABLES,
  BIOME,
  NUTRITION,
  PRODUCTMODULE,
  ANALYTICSMODULE,
  ASSESSMENT,
  NEWASSESSMENT,
  EDITASSESSMENT,
  VIEWASSESSMENT,
  ACTIVITYLOGGER,
  BODYCOMPOSITION,
  ADDMEASUREMENT,
  BLOODWORK,
  UPLOADBLOODWORK,
  REVIEWBLOODWORK,
  RESULTSUMMARYBLOODWORK,
  BLOODWORKDETAILEDREPORT,
  CONVERSATIONS,
  CONFIRMATIONTENANT,
  ANALYTICS,
  INTERACTIONS,
  INTELLIGENCE,
  INTELLIGENCECLIENTLISTROUTE,
  INTELLIGENCECLIENTDETAILSROUTE,
  CONSULTATIONS,
  SUPLEMENTS,
  LABSTESTS,
  COMPAREMEASUREMENT,
  ADDPICTURE,
  COMPAREPICTURE,
  HELP,
  INTELLIGENCECUSTOMISEDASHBOARD
};
