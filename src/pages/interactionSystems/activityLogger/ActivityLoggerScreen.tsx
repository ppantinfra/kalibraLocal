import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useActivityLoggerScreenStyles } from './ActivityLoggerScreenStyles';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { ActivityLogger, ActivityTemplateModal, Strength, Mobility, Endurance } from '../../../components/activity-logger';
import ClientSearch from '../../../components/client-search/ClientSearch';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import { CommonContext, CommonContextType } from '../../../core/context';
import excerciseLogIcon from '../../../assets/images/activity-log/excerciseLogIcon.png';
import enduranceIcon from '../../../assets/images/activity-log/enduranceIcon.png';
import mobilityIcon from '../../../assets/images/activity-log/mobilityIcon.png';
import strengthIcon from '../../../assets/images/activity-log/strengthIcon.png';


const ActivityLoggerScreen = () => {
  const { userId, demoMode } = useContext(CommonContext) as CommonContextType;
  const classes = useActivityLoggerScreenStyles();
  const [selectedTabValue, setSelectedTabValue] = React.useState('excerciseLog');
  const [openTemplateModal, setOpenTemplateModal] = React.useState<boolean>(
    false
  );
  // eslint-disable-next-line
  const [templateDropdownData,] = React.useState<any>();
  // eslint-disable-next-line
  const [templateModalHeader,] = React.useState<any>('');
  // eslint-disable-next-line
  const [templateSelectLabel,] = React.useState<any>('');
  // eslint-disable-next-line
  const [templateButtonLabel,] = React.useState<any>('');
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);


  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  const handleTabsChange = (
    event: React.SyntheticEvent,
    newTabValue: string
  ) => {
    setSelectedTabValue(newTabValue);
  };

  const hideTemplateModal = () => {
    setOpenTemplateModal(false);
  };

  // const importDayOptions = [
  //   { id: 1, day: "Day-1(jesse)" },
  //   { id: 1, day: "Day-1(jesse)" },
  //   { id: 1, day: "Day-1(jesse)" },
  // ];

  // const openImportTemplateModal = () => {
  //   setOpenTemplateModal(true);
  //   setTemplateDropdownData(importDayOptions);
  //   setTemplateModalHeader("Import Template");
  //   setTemplateSelectLabel("Select template");
  //   setTemplateButtonLabel("Import");
  // };

  // const openCreateTemplateModal = () => {
  //   setOpenTemplateModal(true);
  //   setTemplateDropdownData(importDayOptions);
  //   setTemplateModalHeader("Add to Template");
  //   setTemplateSelectLabel("Name");
  //   setTemplateButtonLabel("Add");
  // };

  const onUserSelect = (userid: any) => {
    setSelectedUserId(userid);
  };

  return (
    <React.Fragment>
      <Back componentTitle={screenTitle.ActivityLoggerPage} disableBackButton={true} />
      <Box className={classes._container}>

        <ClientSearch
          selectedUserId={selectedUserId}
          userSelectHandler={onUserSelect}
        />

        {selectedUserId && (
          <React.Fragment>
            {/* <Box sx={{ mt: 1 }}>
              <Typography paragraph className={classes.heading}>
                Log a workout
              </Typography>
            </Box> */}
            <Box>
              <TabContext value={selectedTabValue}>
                {demoMode === true &&
                  <Box className={`${classes.tabListRow} activityLogTab`}>

                    <TabList
                      onChange={handleTabsChange}
                      textColor="secondary"
                      TabIndicatorProps={{
                        style: {
                          background: 'transparent',
                          transition: 'none',
                        },
                      }}
                      aria-label="secondary tabs example"
                      className={`${classes.mui_tablist} mui_sub_tablist`}
                      variant="scrollable"
                      scrollButtons="auto"
                      style={{
                        color: '#46D7CB',
                      }}
                    >
                      <Tab
                        value="excerciseLog"
                        label="Exercise Log"
                        iconPosition="start"
                        icon={<img src={excerciseLogIcon} />}
                        className={`${classes.mui_tabButton} ${classes.mui_tabButton_strength}`}
                      />


                      <Tab
                        value="strength"
                        label="Strength"
                        iconPosition="start"
                        icon={<img src={strengthIcon} />}
                        className={`${classes.mui_tabButton} ${classes.mui_tabButton_endurance}`}
                      />


                      <Tab
                        value="mobility"
                        label="Mobility"
                        iconPosition="start"
                        icon={<img src={mobilityIcon} />}
                        className={`${classes.mui_tabButton} ${classes.mui_tabButton_performance}`}
                      />

                      <Tab
                        value="endurance"
                        label="Endurance"
                        iconPosition="start"
                        icon={<img src={enduranceIcon} />}
                        className={`${classes.mui_tabButton} ${classes.mui_tabButton_performance}`}
                      />
                    </TabList>

                    {/* {isDemoMode === true && (
                    <Box className={classes.templateLinkBox}>
                      <Link
                        className={classes.templateLink}
                        component="button"
                        onClick={openImportTemplateModal}
                      >
                        Import template
                      </Link>
                      |
                      <Link
                        className={classes.templateLink}
                        component="button"
                        onClick={openCreateTemplateModal}
                      >
                        Create template
                      </Link>
                    </Box>
                  )} */}
                  </Box>
                }
                <TabPanel value={'excerciseLog'} className={classes.tabPanel}>
                  <ActivityLogger clientId={selectedUserId} />
                </TabPanel>

                <TabPanel value={'strength'} className={classes.tabPanel}>
                  <Strength clientId={selectedUserId} />
                </TabPanel>

                <TabPanel value={'mobility'} className={classes.tabPanel}>
                  <Mobility clientId={selectedUserId} />
                </TabPanel>

                <TabPanel value={'endurance'} className={classes.tabPanel}>
                  <Endurance />
                </TabPanel>
              </TabContext>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <ActivityTemplateModal
        hideTemplateModal={hideTemplateModal}
        setOpenTemplateModal={setOpenTemplateModal}
        templateDropdownData={templateDropdownData}
        templateModalHeader={templateModalHeader}
        templateSelectLabel={templateSelectLabel}
        templateButtonLabel={templateButtonLabel}
        // userId={userId}
        // healthMarkersData={healthMarkersData}
        openTemplateModal={openTemplateModal}
      />
    </React.Fragment>
  );
};

export default ActivityLoggerScreen;
