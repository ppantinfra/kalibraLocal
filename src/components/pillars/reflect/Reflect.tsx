import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { ReflectStyles } from './ReflectStyles';

import { TilesView } from '../../tiles';
import {
  DoughnutChart,
  ScoreLineChart,
  HorizontalProgressBarChart,
  BubbleChart,
  ScoreDriversProgressBarView
} from '../../charts';
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




type ReflectProps = {
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

const Reflect = ({ userId, catId }: ReflectProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = ReflectStyles();
  const [scoreChartData, setScoreChartData] = React.useState<any>(undefined);
  const [scoreDriverData, setScoreDriverData] = React.useState<any>([]);
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const mindfulMinutesData = [
    {
      label: 'day range',
      visualParts: [
        {
          maxValue: 2,
          minValue: 1,
          range: 2 - 1,
          label: '1-2',
          color: ColorHelper.getBarColor('red', 'Reflect')
        },
        {
          maxValue: 3,
          minValue: 2,
          range: 3 - 2,
          label: '3-2',
          color: ColorHelper.getBarColor('orange', 'Reflect')
        },
        {
          maxValue: 4,
          minValue: 3,
          range: 4 - 3,
          label: '3-3',
          color: ColorHelper.getBarColor('green', 'Reflect')
        },
        {
          maxValue: 5,
          minValue: 4,
          range: 5 - 4,
          label: '4-5',
          color: ColorHelper.getBarColor('teal', 'Reflect')
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 4,
      point: 4,
      unit: 'm',
      pointColor: ColorHelper.getBarColor('teal', 'Reflect'),
      category: 'Reflect',
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
  //           const chartData = ScoreHelper.generateChartData(res.data, 'reflect');
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
  //     //  console.log(error);
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
          const chartData = ScoreHelper.generateChartData(res, 'reflect');
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
        Our psychological state and mindset, mental health and connection with ourselves.
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
            <TilesView title="Score" category="Reflect" score={scoreChartData?.accuracy} isShownDevider={true} titleIcon={<InfoIcon />}>
              <ScoreLineChart chartData={scoreChartData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Reflect drivers" category="Reflect" isShownDevider={demoMode}>
              <ScoreDriversProgressBarView category="Reflect" data={scoreDriverData} />
            </TilesView>
          </Grid>
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Stress (low/medium/high) minutes" category="Reflect" isDemo={true} isShownDevider={true}>
                <DoughnutChart chartDescription="low/medium/high" category="Reflect" />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Mindful minutes" category="Reflect" isDemo={true} isShownDevider={true}>
                <HorizontalProgressBarChart progressBarData={mindfulMinutesData} isFakeData={true} />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Bubbles Chart" category="Reflect" isDemo={true} isShownDevider={true}>
                <BubbleChart />
              </TilesView>
            </Grid>
          )}
          {demoMode === true && (
            <Grid item lg={6} md={6} xs={6}>
              <TilesView title="Screen time in hours" category="Reflect" isDemo={true}>
                <ScoreLineChart chartData={scoreChartData} />
              </TilesView>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Reflect;
