import React, { useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MoveStyles } from './MoveStyles';
import { CoachWorkout } from '../../activity-logger';
import { TilesView } from '../../tiles';
import { DoughnutChart, ScoreLineChart, HorizontalProgressBarChart, ScoreDriversProgressBarView } from '../../charts';
import Grid from '@mui/material/Grid';
import { UserService } from '../../../core';
import ScoreHelper from '../../../core/helper/scoreHelper';
import HealthMarkerHelper from '../../../core/helper/HealthMarkerHelper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CommonContext, CommonContextType } from '../../../core/context';
import TooltipHelper from '../../../core/helper/TooltipHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


type MoveProps = {
  catId: string;
  userId: string;
  allTilesData?: Array<any>;
};

const InfoIcon = () => {
  return (
    <>
      <TooltipHelper title="As Kalibra receives various marker updates, the scoring algorithms recalculate the new score for that marker and its importance in the overall score." placement="top">
        <span style={{ position: 'absolute', right: '20px', top: '20px', cursor: 'pointer' }} >
          <InfoOutlinedIcon />
        </span>
      </TooltipHelper>
    </>
  );
};

const Move = ({ userId, allTilesData, catId }: MoveProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = MoveStyles();
  // const [graphChartDatas, setGraphChartDatas] = React.useState<any>({});
  const [scoreChartData, setScoreChartData] = React.useState<any>(undefined);
  const [scoreDriverData, setScoreDriverData] = React.useState<any>([]);
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const renderActivitySummary = (data: Array<any>) => {
    return (
      <Box sx={{ pr: 1 }}>
        {data.map((item) => {
          let unit = item.unit !== undefined ? item.unit : '';
          if (unit === 'count' || unit === 'score') {
            unit = '';
          }
          return (
            <Box className={classes.pcspc_item} key={item.name}>
              <Typography className={classes.pcspcText}>{item.name}</Typography>
              <Typography className={classes.pcspcValue}>
                {item.value !== undefined ? `${Number.parseInt(item.value)} ${unit}` : '----'}
              </Typography>
            </Box>
          );
        })}
      </Box>
    );
  };

  // const getUserScoreHistory = async (id: string, categoryId: string) => {
  //   try {
  //     await UserService.getUserScoreHistory(id, categoryId)
  //       .then((res: any) => {
  //         if (res.data.scores?.length > 0) {
  //           const chartData = ScoreHelper.generateChartData(res.data, 'move');
  //           setScoreChartData(chartData);
  //           const driverData = ScoreHelper.generateScoreDriverChartData(res.data);
  //           setScoreDriverData(driverData);
  //         }
  //         //   setIsError(true);
  //         //   setOpenSnackBar(true);
  //         //   setSnackBarMessage('Can\t get client\'s data!');
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


  const getUserScoreHistory = async (id: string, categoryId: string) => {
    try {
      // await UserService.getUserScoreHistory(id, categoryId)
      await Promise.all([
        UserService.getUserScoreHistory(id, categoryId),
        UserService.getUserScoreSubHistory(id, categoryId)
      ]).then(([res, subRes]) => {
        if (res.length > 0) {
          const chartData = ScoreHelper.generateChartData(res, 'move');
          setScoreChartData(chartData);
        }
        if (subRes.length > 0) {
          const driverData = ScoreHelper.generateScoreDriverChartData(subRes);
          setScoreDriverData(driverData);
        }
      })
        .catch((err: any) => {
          console.error(err);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getUserScoreHistory(userId, catId);
  }, [userId, catId]);

  const activiteExternalKeys: Record<string, string> = {
    Steps: 'Steps',
    TotalEnergyExpenditure: 'Total Calories Burned',
    RestingHeartRate: 'Resting HR',
    ReadinessScore: 'Readiness Score',
    CRP: 'C-Reactive Protein',
    Triglycerides: 'Triglycerides'
  };
  const activitesData = HealthMarkerHelper.getHealthMarkers(allTilesData, activiteExternalKeys);
  const performanceExternalKeys: Record<string, string> = {
    Grip: 'Grip',
    VO2Max: 'VO2Max'
  };
  const performanceData = HealthMarkerHelper.getHealthMarkers(allTilesData, performanceExternalKeys);

  return (
    <React.Fragment>
      <Typography className={classes.description}>
        Our mobility, endurance, strength, muscle mass, bone density, performance and ready state.
      </Typography>
      <Box className={classes._container}>
        <Grid
          container
          //rowSpacing={2}
          columnSpacing={2}
          columns={6}
          //mt={1}
          className={matches ? 'gridbelow700_tiles_responsive' : ''}
        >
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Score" category="Move" score={scoreChartData?.accuracy} isShownDevider={true} titleIcon={<InfoIcon />} >
              <ScoreLineChart chartData={scoreChartData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Score Drivers" category="Move" isShownDevider={true} >
              <ScoreDriversProgressBarView category="Move" data={scoreDriverData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Performance" category="Move" isShownDevider={true}>
              <HorizontalProgressBarChart progressBarData={performanceData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Activity Summary" category="Move" isShownDevider={demoMode}>
              <Box className="tiles_custom_scrollbar">{renderActivitySummary(activitesData)}</Box>
            </TilesView>
          </Grid>
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Аctive minutes (low/medium/high)" category="Move" isDemo={true} isShownDevider={true}>
                <DoughnutChart chartDescription="low/medium/high" category="Move" />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Last 6 Workouts" category="Move" isDemo={true} >
                <Box className="tiles_custom_scrollbar">
                  <CoachWorkout />
                </Box>
              </TilesView>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Move;
