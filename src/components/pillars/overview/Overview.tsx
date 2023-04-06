import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Chart, registerables } from 'chart.js';
import { TilesView, SmallSquareTilesItem, TilesCardBottomInfoSection } from '../../tiles';
import { KaliScoreChart, FlatHorizontalProgressBarChart } from '../../charts';
import Grid from '@mui/material/Grid';
// import AssessmentList from '../../assessments/AssessmentList';
import { UserService } from '../../../core';
import { PillarScore } from '../../../core/types/PillarScore';
import { ActionDrawerEnum } from '../../../core/enums';
import ChartWithTwoMarkers from '../../charts/graphs/ChartWithTwoMarkers';
import HealthMarkerHelper from '../../../core/helper/HealthMarkerHelper';
import { SlickSlider } from '../../common';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerActionSidebar from '../../layouts/drawer/DrawerActionSidebar';
import ScoreDetail from '../scoreDetail/ScoreDetail';
import ClientOverviewAssessmentsList from '../../assessments/ClientOverviewAssessmentsList';

Chart.register(...registerables);

type ClientDashboardProps = {
  userDetailsData: any;
  toggleRightDrawer: any;
  clientId?: any;
  openChatBoatDrawer?: boolean;
  allTilesData?: Array<any>;
};

const Overview = ({ toggleRightDrawer, clientId, allTilesData }: ClientDashboardProps) => {
  const [open, setOpen] = React.useState<any>(false);
  const [sidebarHeader, setSidebarHeader] = useState<string>('');
  const [scoreDetailData, setScoreDetailData] = useState<any>();
  const [externalKey, setExternalKey] = useState<any>();
  const [pillarScores, setPillarScores] = useState<Array<PillarScore>>();
  const [kaliScore, setKaliScore] = useState<number>(0);
  const theme = useTheme();
  const lessThan1200 = useMediaQuery(theme.breakpoints.down(1200));
  const match768to899 = useMediaQuery(theme.breakpoints.between(768, 899));

  const handleDrawerOpen = (key: string, name: string, data: any) => {
    setOpen(true);
    setScoreDetailData(data);
    setExternalKey(key);
    setSidebarHeader(name);
  };

  const tileHandleShare = () => {
    //console.log('share');
  };


  const getUserScore = async (id: string) => {
    await Promise.all([
      UserService.getUserScoreDetails(id),
      UserService.getUserScoreTotal(id)
    ]).then(([res, totalScoreRes]) => {
      if (res && res.length > 0) {
        const mainScores: Array<PillarScore> = [];
        for (const data of res) {
          const score: PillarScore = {
            id: data?.id,
            name: data?.externalKey,
            score: data?.score
          };
          mainScores.push(score);
        }
        setPillarScores(mainScores);
      }
      if (totalScoreRes) {
        setKaliScore(totalScoreRes?.score);
      }

    });

  };

  // const getUserScore = async (id: string) => {
  //   try {
  //     await UserService.getUserScore(id)
  //       .then((res: any) => {
  //         if (res.data.categories?.length > 0) {
  //           const mainScores: Array<PillarScore> = [];
  //           const orderedPillars = ['rest', 'nourish', 'move', 'connect', 'grow', 'reflect'];
  //           for (const pillarName of orderedPillars) {
  //             res.data.categories.forEach((element) => {
  //               if (String(element.name).toLowerCase() === pillarName) {
  //                 const score: PillarScore = {
  //                   id: element.id,
  //                   name: element.name,
  //                   score: element.scores[0].score
  //                 };
  //                 mainScores.push(score);
  //               }
  //             });
  //           }
  //           setPillarScores(mainScores);
  //         }

  //         if (res.data.scores?.length > 0) {
  //           setKaliScore(res.data.scores[0].score);
  //         }
  //       })
  //       .catch((err: any) => {
  //         console.error(err);
  //         // setIsError(true);
  //         // setSnackBarMessage(err.message);
  //       });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  useEffect(() => {
    if (clientId) {
      getUserScore(clientId);
    }
  }, [clientId]);

  const renderTiles = () => {
    const externalKeys = {
      BodyFat: 'Body Fat',
      Bodyweight: 'Weight',
      VO2Max: 'VO2Max',
      ProteinConsumed: 'Protein',
      CarbsConsumed: 'Carbs',
      FatConsumed: 'Fat',
      WaterIntake: 'Water',
      SleepHours: 'Sleep'
    };

    return Object.keys(externalKeys).map((key) => {
      let healthMarker = allTilesData?.find((hm) => hm.externalKey === key);
      let data = {};
      if (healthMarker === undefined) {
        healthMarker = { name: externalKeys[key] };
      } else {
        healthMarker.name = externalKeys[key];
        data = {
          lastUpdatedDate: healthMarker.latestHealthMarkerValues?.length > 0 ? new Date(healthMarker.latestHealthMarkerValues[0].lastUpdated) : new Date(),
          maxValue: healthMarker.rangeMax,
          minValue: healthMarker.rangeMin,
          category: healthMarker.category
        };

      }
      return (
        <Grid item xs={12} md={12} lg={6} key={key} className='overviewTileItem'>
          <SmallSquareTilesItem
            handleDrawerOpen={() => handleDrawerOpen(key, externalKeys[key], data)}
            tileHandleShare={tileHandleShare}
            data={healthMarker}
          />
        </Grid>
      );
    });
  };

  const systolic = allTilesData?.find((item) => item.externalKey === 'SystolicBloodPressure')?.value;
  const diastolic = allTilesData?.find((item) => item.externalKey === 'DiastolicBloodPressure')?.value;
  const category = allTilesData?.find((item) => item.externalKey === 'DiastolicBloodPressure')?.category;

  const caloriesInData = allTilesData?.find((item) => item.externalKey === 'CaloriesIn');
  const waterInTakeData = allTilesData?.find((item) => item.externalKey === 'WaterIntake');
  let restingHR = allTilesData?.find((item) => item.externalKey === 'RestingHeartRate');

  if (restingHR === undefined) {
    restingHR = { name: 'Resting HR' };
  }

  const bottomTileExternalKeys: Record<string, string> = {
    BasalMetabolicRate: 'BMR',
    TotalEnergyExpenditure: 'TDEE',
    ProteinConsumed: 'Protein',
    CarbsConsumed: 'Carbs',
    FatConsumed: 'Fat'
  };
  const bottomTileData = HealthMarkerHelper.getHealthMarkers(allTilesData, bottomTileExternalKeys);

  return (
    <React.Fragment>
      {lessThan1200 && <SlickSlider>{renderTiles()}</SlickSlider>}

      <Grid container spacing={3} className={'tiles-grid overviewGrid'}>
        <Grid item xs={12} lg={8}>
          <Box className={'left-grid'}>
            <Grid container spacing={3} className={match768to899 ? 'gridBetween768to899' : ''}>
              <Grid item xs={12} md={6} lg={6}>
                <TilesView title="Kalibra Score" inMainPage={true}>
                  <KaliScoreChart
                    toggleRightDrawer={toggleRightDrawer}
                    pillarScores={pillarScores}
                    kaliScore={kaliScore}
                    drawerType={ActionDrawerEnum.overviewRadarScoreDriverstDrawer}
                    clientId={clientId}
                  />
                </TilesView>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TilesView title="Assessments" inMainPage={true}>
                  <ClientOverviewAssessmentsList clientId={clientId} />
                </TilesView>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TilesView title="Cardiac Health" inMainPage={true}>
                  <Box>
                    <FlatHorizontalProgressBarChart data={restingHR} />

                    {/* {systolic !== undefined && diastolic !== undefined && ( */}
                    <Box className={'graphBox'} sx={{ marginTop: '50px' }}>
                      <ChartWithTwoMarkers
                        title={'Blood Pressure'}
                        graphScore={`${Number(systolic).toFixed(0)}/${Number(diastolic).toFixed(0)}`}
                        graphData={[systolic, diastolic]}
                        category={category}
                        data={allTilesData?.find((item) => item.externalKey === 'DiastolicBloodPressure')}
                      />
                    </Box>
                    {/* )} */}
                  </Box>
                </TilesView>
              </Grid>
              <Grid item xs={12} md={6} lg={6} className="nutritionOverview">
                <TilesView title="Nutrition Overview" inMainPage={true}>
                  <Box>
                    {waterInTakeData !== undefined && <FlatHorizontalProgressBarChart data={waterInTakeData} />}

                    {caloriesInData !== undefined && <FlatHorizontalProgressBarChart data={caloriesInData} />}
                    {/* {isDemoMode === true && ( */}
                    <TilesCardBottomInfoSection tilesCardbottomInfoData={bottomTileData} />
                    {/* )} */}
                  </Box>
                </TilesView>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {!lessThan1200 && (
          <Grid item lg={4}>
            <Grid container columnSpacing={3} rowSpacing={3} className={'tiles_grid_responsive'}>
              {renderTiles()}

              {/* {isDemoMode === true && (
              <Grid item xs={12} md={6} lg={6}>
                <Box className={classes.addGoalTile} onClick={addGoal}>
                  <Box>
                    <AddCircleOutlineIcon />
                    <Typography>Add goal</Typography>
                  </Box>
                </Box>
              </Grid>
            )} */}
            </Grid>
          </Grid>
        )}
      </Grid>

      <DrawerActionSidebar
        clientUsername={''}
        open={open}
        toggleDrawer={(openFlag) => {
          setOpen(openFlag);
        }}
        component={<ScoreDetail userId={String(clientId)} externalKey={externalKey} data={scoreDetailData} />}
        drawerType={sidebarHeader}
        infoData={scoreDetailData}
        anchor="right"
        width={500}
        hideDivider={true}
      />
    </React.Fragment>
  );
};

export default Overview;
// function getUserScore(userId: any) {
//   throw new Error("Function not implemented.");
// }
