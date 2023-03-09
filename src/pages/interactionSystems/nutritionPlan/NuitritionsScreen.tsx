import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import MyProfile from '../../../components/nuitrition/MyProfile';
import MyNuitritionPreferences from '../../../components/nuitrition/MyNuitritionPreferences';
import MyNuitritionRecipies from '../../../components/nuitrition/MyNuitritionRecipies';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { NuitritionScreenStyles } from './NuitritionScreenStyles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../../core/context';





const NuitritionsScreen = () => {
  const classes = NuitritionScreenStyles();
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);

  const [NTabValue, setNTabValue] = React.useState('myProfile');
  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);
  const handleTabsChange = (
    event: React.SyntheticEvent,
    newTabValue: string
  ) => {
    setNTabValue(newTabValue);
  };

  const onUserSelect = (userid: any) => {
    setSelectedUserId(userid);
  };

  return (
    <React.Fragment>

      <Back componentTitle={screenTitle.NutritionPage} disableBackButton={true} />
      {/* Tabs */}

      <ClientSearch
        selectedUserId={selectedUserId}
        userSelectHandler={onUserSelect}
      />

      {selectedUserId &&

        <Box
          sx={{ marginTop: '10px', marginBottom: '5px', display: 'flex' }}
          className={classes.nuitritionSection}
        >
          <TabContext value={NTabValue}>
            <TabList
              onChange={handleTabsChange}
              textColor="secondary"
              TabIndicatorProps={{ style: { background: 'transparent' } }}
              orientation="vertical"
              variant="scrollable"
              aria-label="Vertical tabs example"
              sx={{}}
            >
              <Tab value="myProfile" icon={<PersonAddAltIcon />} />
              <Tab
                value="MyNutritionalPreferences"
                icon={<MedicationLiquidIcon />}
              />
              <Tab value="nutritionRecipies" icon={<RestaurantIcon />} />
            </TabList>

            <TabPanel value={'myProfile'} className={classes.nuitritionPanel}>
              <MyProfile />
            </TabPanel>
            <TabPanel
              value={'MyNutritionalPreferences'}
              className={classes.nuitritionPanel}
            >
              <MyNuitritionPreferences />
            </TabPanel>
            <TabPanel
              value={'nutritionRecipies'}
              className={classes.nuitritionPanel}
            >
              <MyNuitritionRecipies />
            </TabPanel>
          </TabContext>
        </Box>
      }
    </React.Fragment>
  );
};

export default NuitritionsScreen;
