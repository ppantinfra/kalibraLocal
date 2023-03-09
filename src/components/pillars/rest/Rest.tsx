import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { RestStyles } from './RestStyles';
import { TilesView } from '../../tiles';
import { DoughnutChart, ScoreLineChart, HorizontalProgressBarChart, ScoreDriversProgressBarView } from '../../charts';
import Grid from '@mui/material/Grid';
import { UserService } from '../../../core';
import ScoreHelper from '../../../core/helper/scoreHelper';
import HealthMarkerHelper from '../../../core/helper/HealthMarkerHelper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CommonContext, CommonContextType } from '../../../core/context';
import { Typography } from '@mui/material';
import TooltipHelper from '../../../core/helper/TooltipHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


type RestProps = {
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

const Rest = ({ userId, allTilesData, catId }: RestProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = RestStyles();
  const [scoreChartData, setScoreChartData] = React.useState<any>(undefined);
  const [scoreDriverData, setScoreDriverData] = React.useState<any>([]);


  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const restfulnessChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    label: 'Restfulness',
    category: 'Rest',
    gradient: ScoreHelper.generateGradient('rest'),
    data: [
      { x: '01 01 2022', y: 33 },
      { x: '02 02 2022', y: 53 },
      { x: '03 03 2022', y: 85 },
      { x: '04 04 2022', y: 41 },
      { x: '05 05 2022', y: 44 },
      { x: '06 06 2022', y: 65 },
    ]
  };

  const getUserScoreHistory = async (id: string, categoryId: string) => {
    try {
      await UserService.getUserScoreHistory(id, categoryId)
        .then((res: any) => {
          if (res.data.scores?.length > 0) {
            const chartData = ScoreHelper.generateChartData(res.data, 'rest');
            setScoreChartData(chartData);
            const driverData = ScoreHelper.generateScoreDriverChartData(res.data);
            setScoreDriverData(driverData);
          }
          //   setIsError(true);
          //   setOpenSnackBar(true);
          //   setSnackBarMessage('Can\t get client\'s data!');
        })
        .catch((err: any) => {
          console.error(err);
          // setIsError(true);
          // setSnackBarMessage(err.message);
        });
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getUserScoreHistory(userId, catId);
  }, [userId, catId]);

  const sleepMatricExternalKeys: Record<string, string> = {
    SleepTimeDeep: 'Deep sleep',
    HeartRateVariability: 'HRV'
  };
  const sleepMatricData = HealthMarkerHelper.getHealthMarkers(allTilesData, sleepMatricExternalKeys);

  return (
    <React.Fragment>
      <Typography className={classes.description}>
        Our sleep, restfulness and recovery cycles. Our bedtime hygiene and habits.
      </Typography>
      <Box className={classes._container}>
        <Grid
          container
          //rowSpacing={2}
          columnSpacing={2}
          columns={2}
          //mt={1}
          className={matches ? 'gridbelow700_tiles_responsive' : ''}
        >
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Score" category="Rest" score={scoreChartData?.accuracy} isShownDevider={true} titleIcon={<InfoIcon />} >
              <ScoreLineChart chartData={scoreChartData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Score Drivers" category="Rest" isShownDevider={true}>
              <ScoreDriversProgressBarView category="Rest" data={scoreDriverData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Sleep Metrics" category="Rest" isShownDevider={demoMode}>
              <HorizontalProgressBarChart progressBarData={sleepMatricData} />
            </TilesView>
          </Grid>
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Sleep dynamics (Deep/REM/Light)" category="Rest" isDemo={true} isShownDevider={true}>
                <DoughnutChart chartDescription="MET-min/per week" category="Rest" />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Restfulness" category="Rest" isDemo={true}>
                <ScoreLineChart chartData={restfulnessChartData} />
              </TilesView>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Rest;
