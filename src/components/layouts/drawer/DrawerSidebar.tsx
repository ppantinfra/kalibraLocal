import React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
// import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { styled, useTheme } from '@mui/material/styles'; //useTheme
import Drawer from '@mui/material/Drawer';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DrawerLayoutStyles } from './DrawerLayoutStyles';
import kalibraLogo from '../../../assets/images/navigations/kalibraLogo.svg';
import { RoutesPath as route } from '../../../core/constants';
import { CommonContext, CommonContextType } from '../../../core/context';
// import { useNavigate } from 'react-router-dom';
// import { logoutUser, showLoader, hideLoader } from '../../../api/AuthApi';
// import LogoutIcon from '@mui/icons-material/Logout';
import activityLoggerIcon from '../../../assets/images/navigations/activity-logger.svg';
import activityLoggerGreenIcon from '../../../assets/images/navigations/activity-logger-green.svg';
import wearablesIcon from '../../../assets/images/navigations/wearables.svg';
import wearablesGreenIcon from '../../../assets/images/navigations/wearables-green.svg';
import assessmentsIcon from '../../../assets/images/navigations/assessments.svg';
import assessmentsGreenIcon from '../../../assets/images/navigations/assessments-green.svg';
import bloodworkIcon from '../../../assets/images/navigations/bloodwork.svg';
import bloodworkGreenIcon from '../../../assets/images/navigations/bloodwork-green.svg';
import bodyCompIcon from '../../../assets/images/navigations/bodyComp.svg';
import bodyCompGreenIcon from '../../../assets/images/navigations/bodyComp-green.svg';
import clientsIcon from '../../../assets/images/navigations/Clients.svg';
import clientsGreenIcon from '../../../assets/images/navigations/Clients-green.svg';
// import profileIcon from '../../../assets/images/navigations/Profile.svg';
// import profileGreenIcon from '../../../assets/images/navigations/Profile-green.svg';
import analyticsIcon from '../../../assets/images/navigations/Analytics.svg';
import analyticsGreenIcon from '../../../assets/images/navigations/Analytics-green.svg';
import productsIcon from '../../../assets/images/navigations/products.svg';
import productsGreenIcon from '../../../assets/images/navigations/products-green.svg';
import genomicsIcon from '../../../assets/images/navigations/genomics.svg';
import genomicsGreenIcon from '../../../assets/images/navigations/genomics-green.svg';
import biomeIcon from '../../../assets/images/navigations/biome.svg';
import biomeGreenIcon from '../../../assets/images/navigations/biome-green.svg';
import nutritionPlanIcon from '../../../assets/images/navigations/nutrition-plan.svg';
import nutritionPlanGreenIcon from '../../../assets/images/navigations/nutrition-plan-green.svg';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';


const drawerWidth = 260;

const DrawerHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open'
})<DrawerHeaderProps>(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  ...(!open && {
    // background: '#fff',
    '& .hamburger-menu': {
      marginLeft: '-5px'
    }
  })
}));

const DrawerSidebar = ({ open, toggleDrawerHandler, goToPage }) => {
  const classes = DrawerLayoutStyles();
  const greaterThan500 = useMediaQuery('(min-width:500px)');
  const theme = useTheme();
  const greaterThan768 = useMediaQuery(theme.breakpoints.up(768));
  // const { clearContextAndLogout } = useContext(CommonContext) as CommonContextType;
  // const navigate = useNavigate();

  const handleNewDashboard = () => {
    goToPage(`/${route.CLIENTSLISTROUTE}`);
  };
  const goToNewAssessments = () => {
    goToPage(`/${route.ASSESSMENT}`);
  };
  const goToActivityLogger = () => {
    goToPage(`/${route.ACTIVITYLOGGER}`);
  };
  const goToWearables = () => {
    goToPage(`/${route.WEARABLES}`);
  };
  const goToComposition = () => {
    goToPage(`/${route.BODYCOMPOSITION}`);
  };
  const goToBloodwork = () => {
    goToPage(`/${route.BLOODWORK}`);
  };
  const goToIntelligenceDashboard = () => {
    goToPage(`/${route.INTELLIGENCE}`);
  };
  const goToProductsDashboard = () => {
    goToPage(`/${route.PRODUCTMODULE}`);
  };
  const goToGenomics = () => {
    goToPage(`/${route.GENOMICS}`);
  };
  const goToBiome = () => {
    goToPage(`/${route.BIOME}`);
  };
  const goToNutrition = () => {
    goToPage(`/${route.NUTRITION}`);
  };

  // Bottom menu
  // const handleLogout = () => {
  //   showLoader();
  //   clearContextAndLogout();
  //   logoutUser().then(() => {
  //     navigate('/');
  //     setTimeout(function () {
  //       hideLoader();
  //     }, 2000);
  //   });
  // };

  // const handleProfile = () => {
  //   goToPage(`/${route.PROFILEROUTE}`);
  // };

  let mainMenuList = [
    // Clients
    {
      listText: 'Clients',
      type: 'Standard',
      listIcon: window.location.pathname.includes(route.CLIENTSMODULE) ? (
        <Tooltip title={'Clients'}>
          <img src={clientsGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Clients'}>
          <img src={clientsIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: handleNewDashboard,
      ListButtonClass: window.location.pathname.includes(route.CLIENTSMODULE) ? 'selectedNavigationItem' : ''
    },

    //Wearables
    {
      listText: 'Wearables',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.WEARABLES) ? (
        <Tooltip title={'Wearables'}>
          <img src={wearablesGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Wearables'}>
          <img src={wearablesIcon} className={classes.icon} />
        </Tooltip>

      ),
      listAction: goToWearables,
      ListButtonClass: window.location.pathname.includes(route.WEARABLES) ? 'selectedNavigationItem' : ''
    },

    // Assessment
    {
      listText: 'Assessments',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.ASSESSMENT) ? (
        <Tooltip title={'Assessments'}>
          <img src={assessmentsGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Assessments'}>
          <img src={assessmentsIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToNewAssessments,
      ListButtonClass: window.location.pathname.includes(route.ASSESSMENT) ? 'selectedNavigationItem' : ''
    },

    //Body Comp
    {
      listText: 'Body Composition',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.BODYCOMPOSITION) ? (
        <Tooltip title={'Body Composition'}>
          <img src={bodyCompGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Body Composition'}>
          <img src={bodyCompIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToComposition,
      ListButtonClass: window.location.pathname.includes(route.BODYCOMPOSITION) ? 'selectedNavigationItem' : ''
    },


    //Bloodwork
    {
      listText: 'Bloodwork',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.BLOODWORK) ? (
        <Tooltip title={'Bloodwork'}>
          <img src={bloodworkGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Bloodwork'}>
          <img src={bloodworkIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToBloodwork,
      ListButtonClass: window.location.pathname.includes(route.BLOODWORK) ? 'selectedNavigationItem' : ''
    },

    //Activity Log
    {
      listText: 'Activity Dashboard',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.ACTIVITYLOGGER) ? (
        <Tooltip title={'Activity Dashboard'}>
          <img src={activityLoggerGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Activity Dashboard'}>
          <img src={activityLoggerIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToActivityLogger,
      ListButtonClass: window.location.pathname.includes(route.ACTIVITYLOGGER) ? 'selectedNavigationItem' : ''
    },

    //Genomics
    {
      listText: 'Genomics',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.GENOMICS) ? (
        <Tooltip title={'Genomics'}>
          <img src={genomicsGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Genomics'}>
          <img src={genomicsIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToGenomics,
      ListButtonClass: window.location.pathname.includes(route.GENOMICS) ? 'selectedNavigationItem' : ''
    },

    //Bio
    {
      listText: 'Biome',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.BIOME) ? (
        <Tooltip title={'Biome'}>
          <img src={biomeGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Biome'}>
          <img src={biomeIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToBiome,
      ListButtonClass: window.location.pathname.includes(route.BIOME) ? 'selectedNavigationItem' : ''
    },

    //Nutrition Plan
    {
      listText: 'Nutrition Plan',
      type: 'Interaction',
      listIcon: window.location.pathname.includes(route.NUTRITION) ? (
        <Tooltip title={'Nutrition Plan'}>
          <img src={nutritionPlanGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Nutrition Plan'}>
          <img src={nutritionPlanIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToNutrition,
      ListButtonClass: window.location.pathname.includes(route.NUTRITION) ? 'selectedNavigationItem' : ''
    },

    //Intelligence
    {
      listText: 'Intelligence',
      type: 'Standard',
      listIcon: window.location.pathname.includes(route.INTELLIGENCE) ? (
        <Tooltip title={'Intelligence'}>
          <img src={analyticsGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Intelligence'}>
          <img src={analyticsIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToIntelligenceDashboard,
      ListButtonClass: window.location.pathname.includes(route.INTELLIGENCE) ? 'selectedNavigationItem' : ''
    },

    //Products
    {
      listText: 'Products',
      type: 'Standard',
      listIcon: window.location.pathname.includes(route.PRODUCTMODULE) ? (
        <Tooltip title={'Products'}>
          <img src={productsGreenIcon} className={classes.icon} />
        </Tooltip>
      ) : (
        <Tooltip title={'Products'}>
          <img src={productsIcon} className={classes.icon} />
        </Tooltip>
      ),
      listAction: goToProductsDashboard,
      ListButtonClass: window.location.pathname.includes(route.PRODUCTMODULE) ? 'selectedNavigationItem' : ''
    }
  ];

  // const bottomMenuList = [
  //   // Profile
  //   {
  //     listText: 'Profile',
  //     listIcon: window.location.pathname.includes(route.PROFILEROUTE) ? (
  //       <img src={profileGreenIcon} className={classes.icon} />
  //     ) : (
  //       <img src={profileIcon} className={classes.icon} />
  //     ),
  //     listAction: handleProfile,
  //     ListButtonClass: window.location.pathname.includes(route.PROFILEROUTE) ? 'selectedNavigationItem' : ''
  //   },

  //   // Logout
  //   {
  //     listText: 'Logout',
  //     listIcon: <LogoutIcon className={classes.icon} />,
  //     listAction: handleLogout
  //   }
  // ];
  const { demoMode } = React.useContext(CommonContext) as CommonContextType;

  if (demoMode !== true) {
    mainMenuList = mainMenuList.filter(
      (item) =>
        !(
          item.listText === 'Biome' ||
          item.listText === 'Nutrition Plan' ||
          item.listText === 'Genomics' ||
          item.listText === 'Products' ||
          item.listText === 'Intelligence'
        )
    );
  }

  const gitCommit = localStorage.getItem('gitCommit');

  return (
    <Drawer
      transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
      variant={open ? 'temporary' : 'permanent'}
      open={open}
      onClose={toggleDrawerHandler(false)}
      className={!open ? `${classes.mui_drawer} hideSidebar` : `${classes.mui_drawer} showSidebar`}
      anchor={greaterThan500 ? 'left' : 'top'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        overflowY: 'hidden',
        overflowX: 'hidden',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#fff',
          // borderRight: '1px solid #C5CEE0',
          overflowX: 'hidden',
          overflowY: 'hidden',

          '@media (max-width: 768px)': {},
          '@media (max-width: 500px)': {
            width: '100%'
          },
          boxShadow: 'none'
        }
      }}
      SlideProps={{
        onEntering: (node) => {
          node.style.transition = theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          });
        }
      }}
    >
      <DrawerHeader open={open}>
        <Grid container columns={12} spacing={3} className={classes.mui_grid} sx={{ marginLeft: 0 }}>
          <Grid item xs={9}>
            <Typography display="flex" columnGap="1vmax" whiteSpace="break-spaces">
              {open && <img src={kalibraLogo} alt="kalibraLogo" onClick={toggleDrawerHandler(false)} />}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: 'end' }}>
            {open && (
              // <IconButton onClick={toggleDrawerHandler(false)}>
              //   {greaterThan768 ? <KeyboardDoubleArrowLeftIcon /> : <CloseIcon />}
              // </IconButton>

              <IconButton
                onClick={toggleDrawerHandler(false)}
                sx={{ transform: 'rotate(180deg)' }}
                className={classes.openIcon}
              >
                {greaterThan768 ? (
                  <svg width="10" height="10" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.61047 8C1.82006 8 2.02886 7.9184 2.18565 7.75601L5.27597 4.55609C5.57837 4.24169 5.57437 3.74331 5.26557 3.43451L2.06565 0.234594C1.75366 -0.0781981 1.24727 -0.0781981 0.934483 0.234594C0.62249 0.547386 0.62249 1.05297 0.934483 1.36577L3.57842 4.0097L1.03528 6.64403C0.728087 6.96243 0.736887 7.46881 1.05448 7.77521C1.21048 7.9256 1.41047 8 1.61047 8Z"
                      fill="#8F9BB3"
                    />
                  </svg>
                ) : (
                  <CloseIcon />
                )}
              </IconButton>
            )}
          </Grid>
        </Grid>
      </DrawerHeader>
      {/* {open && <Divider />} */}
      {/* Nested menuitem */}
      <Box className="navigation-scrollbar">
        {mainMenuList.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <List
              className={
                mainMenuList.length - 1 !== index &&
                  item.type === 'Interaction' &&
                  mainMenuList[index + 1].type === 'Standard'
                  ? 'parentListLast'
                  : 'parentList'
              }
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: 2
                }}
                onClick={() => item.listAction()}
                className={item.ListButtonClass}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText primary={item.listText} sx={{ display: open ? 'block' : 'none' }} />
              </ListItemButton>
            </List>
            {/* <Divider /> */}

          </React.Fragment>

        ))}
      </Box>
      {/* Bottom Menu */}
      {/* <div className="bottomMenu">
        {bottomMenuList.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <List className={'parentList'}>
              <ListItemButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: 2
                }}
                onClick={() => item.listAction()}
                className={item?.ListButtonClass}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'
                  }}
                  className={item.listText === 'Logout' ? 'logOutIcon' : undefined}
                >
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText
                  primary={item.listText === 'Profile' ? userName : item.listText}
                  sx={{ display: open ? 'block' : 'none' }}
                />
              </ListItemButton>
            </List>
          </React.Fragment>
        ))}
      </div> */}
      {open === true &&
        <Typography className={classes.version} >Version: {gitCommit}</Typography>
      }
    </Drawer>
  );
};

export default DrawerSidebar;

interface DrawerHeaderProps extends MuiAppBarProps {
  open?: boolean;
}
