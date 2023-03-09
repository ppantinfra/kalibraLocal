import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { UserService } from '../../core';
import { SnackBarsToast } from '../../components/common';
import { Overview, Nourish, Move, Rest, Reflect, Connect, Grow } from '../../components/pillars';
import DrawerActionSidebar from '../../components/layouts/drawer/DrawerActionSidebar';
import { ActionDrawerEnum } from '../../core/enums';
import ClientSearch from '../../components/client-search/ClientSearch';
import Back from '../../components/common/Back';
import { screenTitle } from '../../core/constants';
import { CommonContext, CommonContextType } from '../../core/context';

const ClientDetailsScreen = () => {
  //const theme = useTheme();
  // const greaterThan500 = useMediaQuery(theme.breakpoints.up(500));
  // const classes = useClientDetailsScreenStyles();
  const [isError, setIsError] = useState<boolean>(false);
  const [userDetailsData, setUserDetailsData] = useState<any>({});
  const [healthMarkers, setHealthMarkers] = useState<Array<any>>([]);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [openChatBoatDrawer, setOpenChatBoatDrawer] = React.useState<boolean>(false);
  const [openRadarScoreDriversDrawer, setOpenRadarScoreDriversDrawer] = React.useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const [selectedKalibraScoreChart, setSelectedKalibraScoreChart] = React.useState<any>();
  const [selectedCatId, setSelectedCatid] = React.useState<any>();
  const { userId } = useContext(CommonContext) as CommonContextType;
  const [myClient, setMyClient] = useState<boolean>(false);

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  const onUserSelect = (userid: any) => {
    setSelectedUserId(userid);
  };

  const pillars = ['Move', 'Connect', 'Nourish', 'Grow', 'Reflect', 'Rest'];

  const externalKeys1 =
    'Height,Bodyweight,BodyFat,WaterIntake,SleepHours,HRVAvg,RestingHeartRate,SleepTimeDeep,SystolicBloodPressure,DiastolicBloodPressure,CaloriesIn,BodyMassIndex,MeasuredBodyFatCheek,MeasuredBodyFatChin,MeasuredBodyFatPec,MeasuredBodyFatMidax,MeasuredBodyFatUmbil,MeasuredBodyFatSupra,MeasuredBodyFatBiceps,MeasuredBodyFatTriceps,MeasuredBodyFatSubscap,WaistToHipRatio,SprenHRVScanFeature';
  const externalKeys2 =
    'BasalMetabolicRate,CarbsConsumed,ProteinConsumed,FatConsumed,TDEE,Grip,ActiveEnergyExpenditure,Steps,HRAvgDay,Insulin,TotalEnergyExpenditure,Triglycerides,CRP,ReadinessScore,TotalEnergyExpenditure,VO2Max';

  const getClientHealthMarkers = React.useCallback(async (id: any) => {
    await Promise.all([
      UserService.getClientHealthMarkers(id, externalKeys1),
      UserService.getClientHealthMarkers(id, externalKeys2)
    ])
      .then((response: any) => {
        if (response[0]?.data && response[0]?.data.length > 0) {
          setMyClient(response[0].data[0]?.myClient);
        }

        const healthMarkers1 = response[0].data.length > 0 ? response[0].data[0].healthMarkers : [];
        const healthMarkers2 = response[1].data.length > 0 ? response[1].data[0].healthMarkers : [];
        setHealthMarkers([...healthMarkers1, ...healthMarkers2]);
      })
      .catch((err: any) => {
        setIsError(true);
        setSnackBarMessage(err.message);
      });
  }, []);

  const getUserDetails = React.useCallback(async (id: any) => {
    try {
      await UserService.getUserDetails(id)
        .then(async (res: any) => {
          if (res.data?.cognitoId === undefined) {
            setIsError(true);
            setOpenSnackBar(true);
            setSnackBarMessage("Can't get client!");
          } else {
            setUserDetailsData(res.data);
          }
        })
        .catch((err: any) => {
          setIsError(true);
          setSnackBarMessage(err.message);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      getClientHealthMarkers(selectedUserId);
      getUserDetails(selectedUserId);
    }
  }, [selectedUserId, getClientHealthMarkers, getUserDetails]);

  const { name } = userDetailsData;

  const toggleRightDrawer = (value: boolean, type: any, pillarName?: any, pillarId?: any) => {
    if (type === ActionDrawerEnum.ChatBoatDrawer) {
      setOpenChatBoatDrawer(value);
    } else if (type === ActionDrawerEnum.overviewRadarScoreDriverstDrawer || pillars.includes(type)) {
      setSelectedKalibraScoreChart(pillarName);
      setSelectedCatid(pillarId);
      setOpenRadarScoreDriversDrawer(value);
    }
  };

  return (
    <React.Fragment>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />
      <DrawerActionSidebar
        clientUsername={name}
        open={openRadarScoreDriversDrawer}
        toggleDrawer={toggleRightDrawer}
        component={
          selectedKalibraScoreChart === 'Rest' ? (
            <Rest catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : selectedKalibraScoreChart === 'Nourish' ? (
            <Nourish catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : selectedKalibraScoreChart === 'Move' ? (
            <Move catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : selectedKalibraScoreChart === 'Connect' ? (
            <Connect catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : selectedKalibraScoreChart === 'Grow' ? (
            <Grow catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : selectedKalibraScoreChart === 'Reflect' ? (
            <Reflect catId={selectedCatId} userId={String(selectedUserId)} allTilesData={healthMarkers} />
          ) : (
            <></>
          )
        }
        drawerType={selectedKalibraScoreChart}
        anchor="right"
        width={500}
      />

      {/* <DrawerActionSidebar
        clientUsername={name}
        open={openChatBoatDrawer}
        toggleDrawer={toggleRightDrawer}
        component={<Chat name={name} />}
        drawerType={ActionDrawerEnum.ChatBoatDrawer}
        anchor="right"
        width={greaterThan500 ? 500 : undefined}
      /> */}

      <Box>
        <Box>
          <Back componentTitle={screenTitle.ClientOverviewPage} />
          <ClientSearch selectedUserId={selectedUserId} userSelectHandler={onUserSelect} showAddClientToggle={true} toggleValue={myClient} />
        </Box>

        <div style={{ marginTop: 16 }} />
        {selectedUserId && (
          <Overview
            userDetailsData={userDetailsData}
            toggleRightDrawer={toggleRightDrawer}
            clientId={selectedUserId}
            openChatBoatDrawer={openChatBoatDrawer}
            allTilesData={healthMarkers}
          />
        )}
      </Box>
    </React.Fragment>
  );
};

export default ClientDetailsScreen;
