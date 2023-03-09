import React, { useContext } from 'react';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutesPath as route } from '../../core/constants';
import TabButtons from '../common/TabButtons';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Chat } from '../chat';
import { DefaulPrimarytColor, FontFamily, FontColor } from '../../core';
import { CommonContext, CommonContextType } from '../../core/context';
import assessmentsGreenIcon from '../../assets/images/navigations/assessments-green.svg';
import activityLoggerGreenIcon from '../../assets/images/navigations/activity-logger-green.svg';
import bloodworkGreenIcon from '../../assets/images/navigations/bloodwork-green.svg';








export const useStyles = makeStyles({
  heading: {
    fontSize: '30px',
    fontWeight: '600'
  },
  subHeading: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#33B7B8 !important'
  },
  clientActions: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '15px',
    rowGap: '15px',
    marginTop: '35px',
    justifyContent: 'center',
    // maxWidth: '260px',
    // margin: 'auto',
    flexDirection: 'column',
    padding: '0 37px',
    cursor: 'pointer',
  },
  clientActionTile: {
    border: '1px solid #33B7B8',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '120px',
    height: '120px',
    cursor: 'pointer',
    transition: '.3s ease all',
    '&:hover': {
      boxShadow: '0px 4px 20px 3px rgb(143 155 179 / 25%)'
    }
  },
  icon: {
    // height: '60px',
    // width: '60px',
    height: '44px',
    width: '44px',
    color: 'rgb(70, 215, 203)',
    // opacity: '0.8'
  },
  label: {
    fontSize: '14px',
    width: 'max-content',
    marginTop: '5px',
    fontWeight: '400',
    // opacity: 0.7,
    color: FontColor,
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.3s',
    '&:hover': {
      color: '#33B7B8',
    }
  },

  tabIndicator: {
    backgroundColor: DefaulPrimarytColor.primary500green
  },

  clientActionsRow: {
    display: 'flex',
    columnGap: '20px',
    alignItems: 'center',
    '&:not(:first-child)': {
      borderTop: '1px solid #E4E9F2',
      paddingTop: '20px',

    }
  }
});

const tabStyles: any = {
  flexDirection: 'row',
  background: '#fff',
  fontSize: 16,
  borderRadius: 5,
  padding: '4px 8px',
  fontWeight: '500',
  fontFamily: FontFamily,
  textTransform: 'capitalize',
  minHeight: '35px',
  color: FontColor,

  '&.Mui-selected': {
    color: DefaulPrimarytColor.primary500green
  },

  margin: '10px 5px'
};

type DashboardClientActionsProps = {
  toggleDrawer?: any;
  drawerType?: string;
  userList?: any;
  clientCognitoId: string;
  clientUsername?: any;
  demoMode?: boolean;
};

const DashboardClientActions = ({ toggleDrawer, drawerType, clientCognitoId }: DashboardClientActionsProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { setUserId, demoMode } = useContext(CommonContext) as CommonContextType;

  const actionsArrayEnum: {
    label: string;
    value: string;
    routePath: string;
    icon: any;
    selected: boolean;
    pathToCheck: string;
  }[] = [
      // {
      //   label: 'Overview',
      //   value: 'KalibraOverview',
      //   routePath: `/${route.CLIENTSOVERVIEWROUTE}`,
      //   icon: <VisibilityIcon className={classes.icon} />,
      //   selected: false,
      //   pathToCheck: route.CLIENTSOVERVIEWROUTE
      // },
      {
        label: 'Log an Activity',
        value: 'reviewActivityLogger',
        routePath: `/${route.ACTIVITYLOGGER}`,
        // icon: <FitnessCenterIcon className={classes.icon} />,
        icon: <img src={activityLoggerGreenIcon} alt="" />,
        selected: false,
        pathToCheck: route.ACTIVITYLOGGER
      },
      {
        label: 'Submit Assessment',
        value: 'submitAssessment',
        routePath: `/${route.ASSESSMENT}/${route.NEWASSESSMENT}`,
        // icon: <AssessmentIcon className={classes.icon} />,
        icon: <img src={assessmentsGreenIcon} alt="" style={{ width: '44px', height: '44px' }} />,
        selected: false,
        pathToCheck: route.ASSESSMENT
      },
      {
        label: 'Upload Bloodwork',
        value: 'UploadOrReviewBloodwork',
        routePath: `/${route.BLOODWORK}`,
        // icon: <BloodtypeIcon className={classes.icon} />,
        icon: <img src={bloodworkGreenIcon} alt="" />,
        selected: false,
        pathToCheck: route.BLOODWORK
      },

      // {
      //   label: 'Body Composition',
      //   value: 'bodyComp',
      //   routePath: `/${route.BODYCOMPOSITION}`,
      //   icon: <AccessibilityNewIcon className={classes.icon} />,
      //   selected: false,
      //   pathToCheck: route.BODYCOMPOSITION
      // }
    ];

  // if (demoMode === true) {
  //   actionsArrayEnum.push({
  //     label: 'Conversations',
  //     value: 'conversations',
  //     routePath: `/${route.CONVERSATIONS}`,
  //     icon: <ForumOutlinedIcon className={classes.icon} />,
  //     selected: false,
  //     pathToCheck: route.CONVERSATIONS
  //   });

  //   actionsArrayEnum.push({
  //     label: 'Genomics',
  //     value: 'genomics',
  //     routePath: `/${route.GENOMICS}`,
  //     icon: <SpaIcon className={classes.icon} />,
  //     selected: false,
  //     pathToCheck: route.GENOMICS
  //   });

  //   actionsArrayEnum.push({
  //     label: 'Nutrition Plan',
  //     value: 'reviewNutrition',
  //     routePath: `/${route.NUTRITION}`,
  //     icon: <FoodBankIcon className={classes.icon} />,
  //     selected: false,
  //     pathToCheck: route.NUTRITION
  //   });
  // }

  const [actions, setActions] = React.useState<any[]>([]);
  const [tabValue, setTabValue] = React.useState('Actions');
  const location = useLocation();

  const actionClick = (routePath: string) => {
    setUserId(clientCognitoId);
    toggleDrawer(false, drawerType);
    navigate(routePath);
  };

  const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  React.useEffect(() => {
    for (const action of actionsArrayEnum) {
      if (location.pathname.includes(action?.pathToCheck)) {
        action.selected = true;
      }
    }
    setActions(actionsArrayEnum);
    /* eslint-disable */
  }, []);

  const tabListItems = [{ label: 'Interactions', status: -1, value: 'Actions' }];

  if (demoMode === true) {
    tabListItems.push({ label: 'Chat', status: -1, value: 'Chat' });
  }

  return (
    <React.Fragment>
      <TabContext value={tabValue}>
        {demoMode === true && (<Box>
          <TabButtons
            tabValue={tabValue}
            tabListItems={tabListItems}
            handleTabsChange={handleTabsChange}
            tabStyles={tabStyles}
            classes={classes}
          />
        </Box>)}
        <TabPanel value={'Actions'}>
          <Box className={classes.clientActions}>
            {actions.map((field, index) => {
              return (
                <React.Fragment key={index}>
                  {/* <Box
                    bgcolor={field.selected === true ? 'rgba(71, 215, 203, 0.16)' : 'white'}
                    className={classes.clientActionTile}
                    onClick={() => actionClick(field.routePath)}
                    key={index}
                  >
                    <Box className={classes.icon}>{field.icon}</Box>
                    <Box>
                      <Typography className={classes.label}>{field.label}</Typography>
                    </Box>
                  </Box> */}

                  <Box className={classes.clientActionsRow}
                    onClick={() => actionClick(field.routePath)}
                    key={index}
                  >
                    {/* <Box className={classes.icon}>{field.icon}</Box> */}
                    <Box>
                      <Typography className={classes.label}>{field.label}</Typography>
                    </Box>
                  </Box>
                </React.Fragment>
              );
            })}
          </Box>
        </TabPanel>
        {demoMode === true && (
          <TabPanel value={'Chat'}>
            <Chat />
          </TabPanel>
        )}
      </TabContext>
    </React.Fragment>
  );
};

export default DashboardClientActions;
