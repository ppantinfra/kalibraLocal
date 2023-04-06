import React, { useContext, useEffect } from 'react';
import DrawerHeader from './drawer/DrawerHeader';
import DrawerSidebar from './drawer/DrawerSidebar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { CommonContext, CommonContextType } from '../../core/context';
import { FormControl, InputLabel, ListItemIcon, MenuItem, Select, Stack } from '@mui/material';
import profileIcon from '../../assets/images/navigations/Profile.svg';
import profileGreenIcon from '../../assets/images/navigations/Profile-green.svg';
import settingIcon from '../../assets/images/settingIcon.svg';
import settingIconGreen from '../../assets/images/settingIconGreen.svg';
import helpIcon from '../../assets/images/helpIcon.svg';
import helpIconGreen from '../../assets/images/helpIconGreen.svg';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { RoutesPath as route } from '../../core/constants';
import { DrawerLayoutStyles } from './drawer/DrawerLayoutStyles';
import { logoutUser, showLoader, hideLoader } from '../../api/AuthApi';
import Menu from '@mui/material/Menu';
// import PersonAdd from '@mui/icons-material/PersonAdd';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import TooltipHelper from '../../core/helper/TooltipHelper';
import { UserService } from '../../core';

const DrawerLayout = ({ outlet }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loggedInUserName, clearContextAndLogout, tenantList, tenantKey, setTenantKey, setUserId, setShowManageOrg, loggedInUserData } = useContext(
    CommonContext
  ) as CommonContextType;
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const classes = DrawerLayoutStyles();
  const [selectedTenant, setSelectedTenant] = React.useState(tenantKey);
  const [showOrganisation, setShowOrganisation] = React.useState<boolean>(false);



  const getUserRolesObject = React.useCallback(async () => {
    const userData = JSON.parse(loggedInUserData);
    setShowOrganisation(false);
    // setShowManageOrg(false);
    await UserService.getUserDetails(userData?.cognitoId).then((res: any) => {
      const allRoles = res?.data?.roles;
      for (const roles of allRoles) {
        if (roles?.tenant === tenantKey)
          if (roles?.isAdmin) {
            setShowOrganisation(true);
            // setShowManageOrg(true);
          }
      }
    });
  }, [tenantKey, loggedInUserData]);


  // useEffect(() => {
  //   setShowOrganisation(false);
  //   const userData = JSON.parse(loggedInUserData);
  //   if (userData) {
  //     const userRoles = userData.roles;
  //     if (userRoles) {
  //       const allRoles = JSON.parse(userRoles);
  //       for (const roles of allRoles) {
  //         if (roles?.tenant === tenantKey)
  //           if (roles?.isAdmin) {
  //             setShowOrganisation(true);
  //           }
  //       }
  //     }
  //   }
  // }, [loggedInUserData, tenantKey]);


  useEffect(() => {
    getUserRolesObject();
  }, [getUserRolesObject]);


  useEffect(() => {
    setShowManageOrg(showOrganisation);
  }, [showOrganisation, setShowManageOrg]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenSideBar(newOpen);
  };

  const goToPage = (page: string) => {
    setOpenSideBar(false);
    navigate(page);
  };

  const handleLogout = () => {
    showLoader();
    clearContextAndLogout();
    logoutUser().then(() => {
      navigate('/');
      setTimeout(function () {
        hideLoader();
      }, 2000);
    });
  };

  const handleProfile = () => {
    goToPage(`/${route.PROFILEROUTE}`);
  };

  const handleTenantChange = (event: any) => {
    const value = event.target.value;
    setSelectedTenant(value);
    // updated context
    setTenantKey(value);
    setUserId('');
    // on change of tenant navigated to clients page
    navigate(`/${route.CLIENTSLISTROUTE}`);
  };

  return (
    <>
      <Stack
        direction={'row'}
        sx={{ marginLeft: openSideBar ? '230px' : '64px', justifyContent: 'space-between' }}
        className={classes.siteHeaderWrapper}
      >
        <Stack>
          <FormControl className={classes.OutlinedInput} sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Organisation</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={selectedTenant}
              label="Organisation"
              onChange={handleTenantChange}
            >
              {tenantList &&
                JSON.parse(tenantList).map(
                  (obj, index) => (
                    <MenuItem key={obj?.key + index} value={obj?.key}>
                      {obj?.name}
                    </MenuItem>
                  )

                  // <span key={obj?.tenant + rolesIndex}> {obj?.tenant}  {rolesIndex < user?.roles.length - 1 ? ',' : ''} </span>
                )}
            </Select>
          </FormControl>
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'25px'}>

          {showOrganisation && (
            <TooltipHelper
              title="Help & Support"
              placement="top"
            >
              <img
                src={window.location.pathname.includes(route.HELP) ? helpIconGreen : helpIcon}
                onClick={() => navigate(`/${route.HELP}`)}
                className={window.location.pathname.includes(route.HELP) ? classes.icon : classes.icon}
                width="18"
              />

            </TooltipHelper>
          )}{showOrganisation && (
            <TooltipHelper
              title="Manage Organization"
              placement="top"
            >
              <img
                src={window.location.pathname.includes(route.MANAGEORGANIZATION) ? settingIconGreen : settingIcon}
                onClick={() => navigate(`/${route.MANAGEORGANIZATION}`)}
                className={window.location.pathname.includes(route.MANAGEORGANIZATION) ? classes.icon : classes.icon}
                width="18"
              />
            </TooltipHelper>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Stack
              onClick={handleClick}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <TooltipHelper
                title="Profile"
                placement="top"
              >
                {window.location.pathname.includes(route.PROFILEROUTE) ? (
                  <img src={profileGreenIcon} className={classes.icon} width="24" />
                ) : (
                  <img src={profileIcon} className={classes.icon} width="24" />
                )}
              </TooltipHelper>
            </Stack>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                right: '10px',
                // maxWidth: '150px',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 10,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                },
                '& .MuiMenuItem-root': {
                  fontSize: '12px!important',
                  padding: '8px 5px',
                  margin: '0',
                  backgroundColor: 'transparent!important',
                  '& .MuiListItemIcon-root': {
                    minWidth: '25px'
                  }
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleProfile}>
              <ListItemIcon>
                <PersonOutlinedIcon fontSize="small" />
              </ListItemIcon>
              {loggedInUserName}
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Log out
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <DrawerHeader
        open={openSideBar}
        toggleDrawerHandler={toggleDrawer}
      // goToPage={goToPage}
      // userName={userName}
      />

      <DrawerSidebar
        // userName={loggedInUserName}
        open={openSideBar}
        toggleDrawerHandler={toggleDrawer}
        goToPage={goToPage}
      />

      {/* Main content i.e outlet called in this box */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '15px 0 50px 0px',
          zIndex: 1202,
          position: 'relative',
          marginLeft: '64px',
          backgroundColor: '#f8f9fc',

          '@media (max-width: 768px)': {
            marginLeft: '0 !important',
            padding: '15px 0 50px 0px'
          },
          '@media (min-width: 768px)': {
            marginLeft: '64px !important',
            padding: '30px 0 50px 0px'
          }
        }}
        className={openSideBar === true ? 'disabledBackground' : ''}
      >
        <Container
          component="section"
          maxWidth="xl"
          sx={{
            width: '100%',
            maxWidth: '100%'
            // maxWidth: {
            //   xl: '92vw',
            //   lg: '90vw',
            //   md: '85vw',
            //   xs: '85vw',
            // },
          }}
        >
          {outlet}
        </Container>
      </Box>
    </>
  );
};

export default DrawerLayout;
