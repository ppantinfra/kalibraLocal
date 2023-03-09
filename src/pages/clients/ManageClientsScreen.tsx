import React, { useContext, useEffect, useState } from 'react';
import { useManageClientsScreenStyles } from './ManageClientsScreenStyles';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import { RoutesPath as route } from '../../core/constants';
import { CommonContext, CommonContextType } from '../../core/context';
import ManageClientList from '../../components/clients/ManageClientList';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserService, DefaulPrimarytColor, FontFamily, FontColor } from '../../core';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
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

const ManageClientsScreen = () => {
  const classes = useManageClientsScreenStyles();
  const navigate = useNavigate();
  const { demoMode, tenantKey } = useContext(CommonContext) as CommonContextType;
  const [manageClientList, setManageClientList] = useState<any[]>([]);
  const [filterManageClientList, setFilterManageClientList] = useState<any[]>([]);
  const [tabValue, setTabValue] = React.useState('AllClients');
  const location = useLocation();

  const getAllClientList = async () => {
    await UserService.getManageClientList().then((res) => {
      if (res) {
        setManageClientList(res);
        setFilterManageClientList(res);
      }
    });
  };

  const getMyClientList = async () => {
    await UserService.getManageClientList().then((res) => {
      if (res) {
        const myClients = res.filter((data: any) => {
          return data.myClient;
        });
        setManageClientList(myClients);
        setFilterManageClientList(myClients);
      }
    });
  };


  useEffect(() => {
    const states: any = location?.state;
    if (states?.type === 'MyClients') {
      setTabValue('MyClients');
      getMyClientList();
    } else {
      setTabValue('AllClients');
      getAllClientList();
    }
  }, [location?.state, tenantKey]);





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
    const users = manageClientList.sort(dynamicSort(property, type, objKey));
    setFilterManageClientList(() => {
      return [...users];
    });
  };


  const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
    if (newTabValue === 'AllClients') {
      getAllClientList();
    } else {
      getMyClientList();
    }
    // used to change the state of selected tab
    navigate(location.pathname, {
      replace: true,
      state: {
        type: newTabValue,
      },
    });

  };

  const gotoAddClient = () => {
    navigate(`/${route.NEWCLIENTROUTE}`);
  };

  return (
    <Box className={classes.page_Content}>
      <TabContext value={tabValue}>
        <Box className={classes.dv_clientsFilterSection}>
          <Box className={classes.dvcfs_left}>
            <Back componentTitle={'Manage Clients'} />
            <TabList
              onChange={handleTabsChange}
              aria-label="lab API tabs example"
              variant="fullWidth"
              classes={{
                indicator: classes.tabIndicator
              }}
              sx={{ alignItems: 'center' }}
            >
              <Tab value={'AllClients'} label={'All Clients'} sx={tabStyles} />{' '}
              <span style={{ opacity: '.3', paddingRight: '5px' }}>|</span>
              <Tab value={'MyClients'} label={'My Clients'} sx={tabStyles} />
            </TabList>
          </Box>
          <Box className={classes.dvcfs_right}>
            <MUIButton onclickHandler={gotoAddClient} buttonText={'Add Client'} />
          </Box>
        </Box>
        <TabPanel value={'AllClients'}>
          <ManageClientList manageClientList={filterManageClientList} demoMode={demoMode} getClientListHandler={getAllClientList} sortHandler={sort} selectedTab={tabValue} />
        </TabPanel>

        <TabPanel value={'MyClients'}>
          <ManageClientList manageClientList={filterManageClientList} demoMode={demoMode} getClientListHandler={getMyClientList} sortHandler={sort} selectedTab={tabValue} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ManageClientsScreen;
