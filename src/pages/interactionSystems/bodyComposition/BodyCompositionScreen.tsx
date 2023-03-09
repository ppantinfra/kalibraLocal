import React, { useEffect, useState, useContext } from 'react';
//import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { useBodyCompositionScreenStyles } from './BodyCompositionScreenStyles';
//import BodyCompositionUserDetail from "./BodyCompositionUserDetail";
import Grid from '@mui/material/Grid';
import Pictures from '../../../components/bodycomp/Pictures';
import Measurements from '../../../components/bodycomp/Measurements';
import Back from '../../../components/common/Back';
import { screenTitle, RoutesPath as route } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { UserService } from '../../../core';
import { CommonContext, CommonContextType } from '../../../core/context';
import { useNavigate } from 'react-router-dom';


const BodyCompositionScreen = () => {
  const classes = useBodyCompositionScreenStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  const matchesBelow641 = useMediaQuery(theme.breakpoints.down(641));
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const [hideRightSidePictureSection] = React.useState<boolean>(true);
  const [hideMeasurements] = React.useState<boolean>(true);
  const [healthMarkers, setHealthMarkers] = useState<Array<any>>([]);
  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  const getClientHealthMarkers = React.useCallback(async () => {
    try {
      const externalKeys =
        'Bodyweight,BodyFat,BodyMassIndex,MeasuredBodyFatCheek,MeasuredBodyFatChin,MeasuredBodyFatPec,MeasuredBodyFatMidax,MeasuredBodyFatUmbil,MeasuredBodyFatSupra,MeasuredBodyFatBiceps,MeasuredBodyFatTriceps,MeasuredBodyFatSubscap,MeasuredBodyFatUpperThigh,MeasuredBodyFatKnee,MeasuredBodyFatQuad,MeasuredBodyFatHam';
      await UserService.getClientHealthMarkers(selectedUserId, externalKeys)
        .then((res: any) => {
          if (res.data?.length > 0) {
            setHealthMarkers(res.data[0].healthMarkers);
          } else {
            // show error
          }
        })
        .catch((err: any) => {
          // show err
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  }, [selectedUserId]);

  useEffect(() => {
    if (selectedUserId) {
      getClientHealthMarkers();
    }
  }, [selectedUserId, getClientHealthMarkers]);

  const handleAddPictures = () => {
    navigate(`/${route.ADDPICTURE}`);
  };
  const handleAddMeasurements = () => {
    navigate(`/${route.ADDMEASUREMENT}`);
  };
  const handleComparePictures = () => {
    navigate(`/${route.COMPAREPICTURE}`);
  };
  const handleCompareMeasurements = () => {
    navigate(`/${route.COMPAREMEASUREMENT}`);
  };

  const deletePicture = () => {
    //console.log('delete picture handler');
  };

  // const goBack = () => {
  //   // setShowCompareMeasurements(false);
  //   // setShowComparePicture(false);
  //   // setShowAddMeasurements(false);
  //   // setShowAddPicture(false);
  //   setHideRightSidePictureSection(true);
  //   setHideMeasurements(true);
  // };

  const onUserSelect = (userid: any) => {
    setSelectedUserId(userid);
  };



  return (
    <React.Fragment>
      <Back componentTitle={screenTitle.BodyCompositionPage} disableBackButton={true} />
      <Box className={classes._container}>
        <ClientSearch
          selectedUserId={selectedUserId}
          userSelectHandler={onUserSelect}
        />

        {selectedUserId && (
          <React.Fragment>
            <Box className={classes.bodyComposition}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={3}
                  className={
                    matchesBelow641
                      ? `${classes.bc_mainBox} gridBelow641BodyComp_responsive`
                      : `${classes.bc_mainBox}`
                  }
                >
                  <Grid
                    item
                    xs={demoMode === true ? 8 : 12}
                    // xs={hideRightSidePictureSection ? 8 : 12}
                    className={'gridBelow641BodyComp_responsive_mob'}
                  >
                    <Grid
                      container
                      spacing={3}
                      className={`${classes.bc_leftMeasurementBox} bc_mainBoxItem`}
                    >
                      <Grid item xs={12}>

                        <Measurements
                          handleAdd={handleAddMeasurements}
                          handleCompare={handleCompareMeasurements}
                          headerLabel="Measurements"
                          dateText="20/07/22"
                          iconClass={'measurementIcon'}
                          gridColumn1={8}
                          gridColumn2={4}
                          handleAddMeasurements={handleAddMeasurements}
                          handleCompareMeasurements={
                            handleCompareMeasurements
                          }
                          allTilesData={healthMarkers}
                          clientId={selectedUserId}
                        />

                      </Grid>
                    </Grid>
                  </Grid>



                  {/* Right side Picture section */}
                  {/* {hideRightSidePictureSection && ( */}
                  {demoMode === true && (
                    <Grid
                      item
                      xs={4}
                      className={'gridBelow641BodyComp_responsive_mob'}
                    >
                      <Pictures
                        handleAdd={handleAddPictures}
                        handleCompare={handleComparePictures}
                        headerLabel="Interactive"
                        dateText="20/07/22"
                        iconClass={'pictureIcon'}
                        gridColumn1={6}
                        gridColumn2={6}
                        deletePicture={deletePicture}
                      />
                    </Grid>
                  )}
                  {/* )} */}
                </Grid>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
};

export default BodyCompositionScreen;
