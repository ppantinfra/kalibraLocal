import React, { useState, useEffect, useContext } from 'react';
import { useClientOverviewScreenStyles } from './ClientOverviewScreenStyles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchImgIcon from '../../assets/images/searchIcon.svg';
import { DashboardClientList, DashboardClientActions } from '../../components/pillars';
import { UserService, DefaulPrimarytColor, FontFamily, FontColor } from '../../core';
import HealthQuote from '../../components/common/HealthQuote';
import KaliQuote from '../../components/common/KaliQuote';
import DrawerActionSidebar from '../../components/layouts/drawer/DrawerActionSidebar';
import { ActionDrawerEnum } from '../../core/enums';
// import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useLocation, useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { CommonContext, CommonContextType } from '../../core/context';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import InactiveClientList from '../../components/clients/InactiveClientList';
import { RoutesPath as route } from '../../core/constants';
import { MUIButton } from '../../components/common';

const tabStyles: any = {
  flexDirection: 'row',
  // background: '#fff',
  fontSize: 14,
  // borderRadius: 5,
  padding: 0,
  fontWeight: '500',
  fontFamily: FontFamily,
  textTransform: 'capitalize',
  minHeight: '35px',
  color: FontColor,

  '&.Mui-selected': {
    color: DefaulPrimarytColor.primary600green
  }
};

const ClientOverviewScreen = () => {
  const { demoMode, loggedInUserName, tenantKey } = useContext(CommonContext) as CommonContextType;
  const location = useLocation();
  const navigate = useNavigate();
  // const [openAddClientDrawer, setOpenAddClientDrawer] = React.useState<boolean>(false);
  const [openClientDetailsDrawer, setOpenClientDetailsDrawer] = React.useState<boolean>(false);
  const classes = useClientOverviewScreenStyles();
  // const [isRenderOnActionPanel, setIsRenderOnActionPanel] = useState<boolean>(false);
  const [clientCognitoId, setClientCognitoId] = useState<string>();
  const [clientUsername, setClientUsername] = useState<any>();
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [materialAutoCompleteOptions, setMaterialAutoCompleteOptions] = useState<any[]>([]);
  const [tabValue, setTabValue] = React.useState('MyClients');
  const [inactiveUserList, setInactiveUserList] = useState<any[]>([]);
  const [filterInactiveUserList, setFilterInactiveUserList] = useState<any[]>([]);
  const [userList, setUserList] = useState<any[]>([]);
  const [filterUserList, setFilterUserList] = useState<any[]>([]);




  const handleOnMaterialAutoSelect = (searchString) => {
    if (searchString) {
      if (tabValue === 'MyClients' || tabValue === 'AllClients') {
        if (userList?.length > 0 && searchString) {
          const result = userList.filter((obj) => obj?.name?.toString().toLowerCase() === searchString.toLowerCase());
          if (result.length > 0) {
            setFilterUserList(() => {
              return [...result];
            });
          }
        }
      } else {
        if (inactiveUserList?.length > 0 && searchString) {
          const result = inactiveUserList.filter((obj) => obj?.userName?.toString().toLowerCase() === searchString.toLowerCase());
          if (result.length > 0) {
            setFilterInactiveUserList(() => {
              return [...result];
            });
          }
        }
      }
    } else {
      if (tabValue === 'MyClients' || tabValue === 'AllClients') {
        setFilterUserList(userList);
      } else {
        setFilterInactiveUserList(inactiveUserList);
      }
    }

  };

  const getUserList = async () => {
    await UserService.getUserList().then((res) => {
      if (res) {
        setUserList(res);
        setFilterUserList(res);

        // var autoCompleteUser: any[] = [];
        const materialAutoCompleteUser: any[] = [];
        for (let i = 0; i < res.length; i++) {
          if (res[i]?.name) {
            // autoCompleteUser.push({ id: i, name: res[i]?.name });
            materialAutoCompleteUser.push(res[i]?.name);
          }
        }
        // setAutoCompleteOptions(autoCompleteUser);
        setMaterialAutoCompleteOptions(materialAutoCompleteUser);
      }
    });
  };

  const getMyUserList = async () => {
    await UserService.getMyUserList().then((res) => {
      if (res) {
        setUserList(res);
        setFilterUserList(res);

        // var autoCompleteUser: any[] = [];
        const materialAutoCompleteUser: any[] = [];
        for (let i = 0; i < res.length; i++) {
          if (res[i]?.name) {
            // autoCompleteUser.push({ id: i, name: res[i]?.name });
            materialAutoCompleteUser.push(res[i]?.name);
          }
        }
        // setAutoCompleteOptions(autoCompleteUser);
        setMaterialAutoCompleteOptions(materialAutoCompleteUser);
      }
    });
  };

  const getInactiveUserList = async () => {
    await UserService.getInactiveClientList().then((res) => {
      if (res.status === 200) {
        setInactiveUserList(res.data);
        setFilterInactiveUserList(res.data);
        const materialAutoCompleteUser: any[] = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i]?.userName) {
            materialAutoCompleteUser.push(res.data[i]?.userName);
          }
        }
        setMaterialAutoCompleteOptions(materialAutoCompleteUser);
      }
    });
  };

  const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
    setValue(null);
    setInputValue('');
    setTabValue(newTabValue);
    if (newTabValue === 'Inactive') {
      getInactiveUserList();
    } else if (newTabValue === 'AllClients') {
      getUserList();
    } else {
      getMyUserList();
    }
    // used to change the state of selected tab
    navigate(location.pathname, {
      replace: true,
      state: {
        type: newTabValue,
      },
    });

  };

  useEffect(() => {
    const states: any = location?.state;
    setUserList([]);
    setFilterUserList([]);
    setInactiveUserList([]);
    setFilterInactiveUserList([]);
    if (states?.type === 'Inactive') {
      setTabValue('Inactive');
      getInactiveUserList();
    } else if (states?.type === 'AllClients') {
      setTabValue('AllClients');
      getUserList();
    } else {
      setTabValue('MyClients');
      getMyUserList();
    }
  }, [location?.state, tenantKey]);

  const toggleRightDrawer = //React.useCallback(
    (openFlag: boolean, type: string, cognitoId?: string, username?: any) => {
      if (type === ActionDrawerEnum.AddClientDrawer) {
        // if (openFlag === true) {
        //   navigate(location.pathname, {
        //     replace: true, //passing state in existing url which is helpful suppose user open drawer and then refresh the browser then by default this drawer will shown open
        //     state: {
        //       type: ActionDrawerEnum.AddClientDrawer
        //     }
        //   });
        // } else {
        //   navigate(location.pathname, { replace: true }); //removed state at the time of closing a drawer
        // }

        // setOpenAddClientDrawer(openFlag);
        // // reload client list
        // if (openFlag === false) {
        //   getUserList();
        // }
        // setIsRenderOnActionPanel(true);
      } else {
        setOpenClientDetailsDrawer(openFlag);
        setClientCognitoId(cognitoId);
        setClientUsername(username);
      }
    };

  //   ,
  //   [location.pathname, navigate]
  // );

  // useEffect(() => {
  //   const states: any = location?.state;
  //   if (states) {
  //     if (states?.type === ActionDrawerEnum.AddClientDrawer) {
  //       setOpenAddClientDrawer(true);
  //       setIsRenderOnActionPanel(true);
  //     }
  //   }
  // }, [location?.state]);

  function dynamicSort(property, type, objKey?) {
    return function (a, b) {
      let result;
      let firstValue;
      let secValue;

      if (!objKey) {
        firstValue = a[property];
        secValue = b[property];
      } else {
        const objA = a.healthMarkers.find((o) => o.externalKey === objKey);
        firstValue = objA ? objA.value : '';
        const objB = b.healthMarkers.find((o) => o.externalKey === objKey);
        secValue = objB ? objB.value : '';
      }

      if (type === 'asc') {
        result = firstValue < secValue ? -1 : firstValue > secValue ? 1 : 0;
      } else {
        result = firstValue > secValue ? -1 : firstValue < secValue ? 1 : 0;
      }
      return result;
    };
  }

  const sort = (property: string, type: string, objKey?: string) => {
    const users = userList.sort(dynamicSort(property, type, objKey));
    setFilterUserList(() => {
      return [...users];
    });
  };



  const inactiveSort = (property: string, type: string, objKey?: string) => {
    const users = inactiveUserList.sort(dynamicSort(property, type, objKey));
    setFilterInactiveUserList(() => {
      return [...users];
    });
  };

  const goToManageClients = () => {
    navigate(`/${route.MANAGECLIENTSROUTE}`);
  };


  // useEffect(() => {
  //   console.log(tenantKey);
  //   setTabValue('MyClients');
  //   getMyUserList();
  // }, [tenantKey]);


  return (
    <React.Fragment>
      {/* Right Sidebar code */}
      {/* AddClient Ride SideBar */}
      {/* <DrawerActionSidebar
        open={openAddClientDrawer}
        toggleDrawer={toggleRightDrawer}
        component={<NewClientScreen isRenderOnActionPanel={isRenderOnActionPanel} toggleDrawer={toggleRightDrawer} />}
        drawerType={ActionDrawerEnum.AddClientDrawer}
        anchor="bottom"
      /> */}

      {/* ClientDetailsRightSidebar */}
      <DrawerActionSidebar
        clientUsername={clientUsername}
        open={openClientDetailsDrawer}
        toggleDrawer={toggleRightDrawer}
        component={
          <DashboardClientActions
            clientCognitoId={clientCognitoId ? clientCognitoId : ''}
            clientUsername={clientUsername}
            userList={filterUserList}
            toggleDrawer={toggleRightDrawer}
            drawerType={ActionDrawerEnum.ClientActionsDrawer}
            demoMode={demoMode}
          />
        }
        drawerType={ActionDrawerEnum.ClientActionsDrawer}
        anchor="right"
        width={380}
      />

      <Box className={classes.page_Content}>
        <Typography className={classes.dvui_name}>Hi {loggedInUserName}!</Typography>
        <KaliQuote quotesBGColor="#fff" quotesBorder="1px solid #46D5CD">
          <HealthQuote />
        </KaliQuote>
        <TabContext value={tabValue}>
          <Box className={classes.dv_clientsFilterSection}>
            <Box className={classes.dvcfs_left}>
              <Typography className={classes.dvcfs_clients}>Clients</Typography>

              <TabList
                onChange={handleTabsChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
                classes={{
                  indicator: classes.tabIndicator
                }}
                sx={{ alignItems: 'center' }}
              >
                <span style={{ opacity: '.3', paddingRight: '15px' }} />
                <Tab value={'MyClients'} label={'My Clients'} sx={tabStyles} />{' '}
                <span style={{ opacity: '.3', paddingRight: '5px' }}>|</span>
                <Tab value={'AllClients'} label={'All Clients'} sx={tabStyles} />{' '}
                <span style={{ opacity: '.3', paddingRight: '5px' }}>|</span>
                <Tab value={'Inactive'} label={'Inactive'} sx={tabStyles} />
              </TabList>
            </Box>
            <Box className={classes.dvcfs_right}>
              <Box className={classes.dvfsr_fieldBox}>
                <Box className={classes.dvfsr_searchField}>
                  <Autocomplete
                    noOptionsText={'No matches'}
                    id="client"
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                      handleOnMaterialAutoSelect(newValue);
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    options={materialAutoCompleteOptions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search for a client"
                        fullWidth
                        InputProps={{
                          ...params.InputProps,
                          sx: {
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            fontWeight: 400
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <img src={SearchImgIcon} alt="" />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                  />

                  {/* <Box className="autcompleteWrapper">
                  <ReactSearchAutocomplete
                    items={autoCompleteOptions}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    showClear={false}
                    placeholder="Search for a client"
                    showNoResultsText="No matches"
                    styling={{ zIndex: 4 }} // To display it on top of the search box below
                    // autoFocus
                    fuseOptions={{ threshold: 0 }} //used for filtering best match records
                  />
                </Box> */}

                  {/* <Autocomplete
                  noOptionsText={"No matches"}
                  id="client"
                  disableClearable
                  options={autoCompleteOptions}
                  // options={userList.map((option) => option.name)}
                  // onChange={handleSearch}
                  onInputChange={(event, newInputValue) => {
                    // handleSearch(newInputValue)
                  }}

                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search for a client"
                      fullWidth
                      InputProps={{
                        ...params.InputProps,
                        sx: {
                          fontFamily: "Poppins",
                          fontSize: 16,
                          fontWeight: 400,
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <img src={SearchImgIcon} alt="" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                /> */}
                </Box>
              </Box>
              <MUIButton onclickHandler={goToManageClients} buttonText={'Manage Clients'} />
            </Box>
          </Box>
          <TabPanel value={'MyClients'}>
            <DashboardClientList
              userList={filterUserList}
              sortHandler={sort}
              demoMode={demoMode}
              toggleRightDrawer={toggleRightDrawer}
            />
          </TabPanel>

          <TabPanel value={'AllClients'}>
            <DashboardClientList
              userList={filterUserList}
              sortHandler={sort}
              demoMode={demoMode}
              toggleRightDrawer={toggleRightDrawer}
            />
          </TabPanel>
          <TabPanel value={'Inactive'}>
            <InactiveClientList
              inactiveClientList={filterInactiveUserList}
              sortHandler={inactiveSort}
              demoMode={demoMode}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </React.Fragment>
  );
};

export default ClientOverviewScreen;
