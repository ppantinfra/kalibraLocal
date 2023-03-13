import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { GrowStyles } from './GrowStyles';
import { TilesView } from '../../tiles';
import { DoughnutChart, ScoreLineChart, HorizontalProgressBarChart, ScoreDriversProgressBarView } from '../../charts';
import Grid from '@mui/material/Grid';
import { UserService } from '../../../core';
import ScoreHelper from '../../../core/helper/scoreHelper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CommonContext, CommonContextType } from '../../../core/context';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import { Typography } from '@mui/material';
import TooltipHelper from '../../../core/helper/TooltipHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';




type GrowProps = {
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

const Grow = ({ userId, catId }: GrowProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = GrowStyles();
  const [scoreChartData, setScoreChartData] = React.useState<any>(undefined);
  const [scoreDriverData, setScoreDriverData] = React.useState<any>([]);
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const thetaAlphaData = [
    {
      label: 'Theta/alpha ratio(TAR)',
      visualParts: [
        {
          maxValue: 0.5,
          minValue: 0,
          range: 0.5 - 0,
          label: '0-0.5',
          color: ColorHelper.getBarColor('red', 'Grow')
        },
        {
          maxValue: 1,
          minValue: 0.5,
          range: 1 - 0.5,
          label: '0.5-1',
          color: ColorHelper.getBarColor('orange', 'Grow')
        },
        {
          maxValue: 1.5,
          minValue: 1,
          range: 1.5 - 1,
          label: '1-1.5',
          color: ColorHelper.getBarColor('green', 'Grow')
        },
        {
          maxValue: 2,
          minValue: 1.5,
          range: 2 - 1.5,
          label: '1.5-2',
          color: ColorHelper.getBarColor('teal', 'Grow')
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 2,
      point: 0.3,
      pointColor: ColorHelper.getBarColor('red', 'Grow'),
      unit: 'm',
      data: {
        graphType: 'HorizontalStackedBarChartUngrouped'
      }
    }
  ];

  // const getUserScoreHistory = async (id: string, categoryId: string) => {
  //   try {
  //     await UserService.getUserScoreHistory(id, categoryId)
  //       .then((res: any) => {
  //         if (res.data.scores?.length > 0) {
  //           const chartData = ScoreHelper.generateChartData(res.data, 'grow');
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
  //     //console.log(error);
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
          const chartData = ScoreHelper.generateChartData(res, 'grow');
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

  return (
    <React.Fragment>
      <Typography className={classes.description}>
        Our constant self-development, purpose. Our “why’ and relationship with our future self.
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
            <TilesView title="Score" category="Grow" score={scoreChartData?.accuracy} isShownDevider={true} titleIcon={<InfoIcon />} >
              <ScoreLineChart chartData={scoreChartData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Score Drivers" category="Grow" isShownDevider={demoMode}>
              <ScoreDriversProgressBarView category="Grow" data={scoreDriverData} />
            </TilesView>
          </Grid>
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Stress Metric" category="Grow" isDemo={true} isShownDevider={true}>
                <DoughnutChart chartDescription="low/medium/high" category="Grow" />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Brain metrics" category="Grow" isDemo={true} isShownDevider={true}>
                <HorizontalProgressBarChart progressBarData={thetaAlphaData} isFakeData={true} />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Screen time in hours" category="Grow" isDemo={true} >
                <ScoreLineChart chartData={scoreChartData} />
              </TilesView>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Grow;
