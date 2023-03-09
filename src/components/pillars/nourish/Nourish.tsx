import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { NourishStyles } from './NourishStyles';
import { TilesView } from '../../tiles';
import { DoughnutChart, ScoreLineChart, HorizontalProgressBarChart, ScoreDriversProgressBarView } from '../../charts';
// import { SelectChangeEvent } from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import { UserService } from '../../../core';
// import { any } from "prop-types";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import moment from "moment";
import ScoreHelper from '../../../core/helper/scoreHelper';
import HealthMarkerHelper from '../../../core/helper/HealthMarkerHelper';
import { CommonContext, CommonContextType } from '../../../core/context';
import { Typography } from '@mui/material';
import TooltipHelper from '../../../core/helper/TooltipHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';




type NourishProps = {
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

const Nourish = ({ userId, allTilesData, catId }: NourishProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = NourishStyles();
  //const [value, setValue] = React.useState("FiveBarChart");
  const [scoreChartData, setScoreChartData] = React.useState<any>(undefined);
  // const [selectedOption, setSelectedOption] = React.useState<string | any>("bfChin");
  const [scoreDriverData, setScoreDriverData] = React.useState<any>([]);
  const fastingGlucoseChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    label: 'Fasting Glucose',
    category: 'Nourish',
    gradient: ScoreHelper.generateGradient('Nourish'),
    data: [
      { x: '01 01 2022', y: 33 },
      { x: '02 02 2022', y: 53 },
      { x: '03 03 2022', y: 85 },
      { x: '04 04 2022', y: 41 },
      { x: '05 05 2022', y: 44 },
      { x: '06 06 2022', y: 65 },
    ]
  };
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const getUserScoreHistory = async (id: string, categoryId: string) => {
    try {
      await UserService.getUserScoreHistory(id, categoryId)
        .then((res: any) => {
          if (res.data.scores?.length > 0) {
            const scoreData = ScoreHelper.generateChartData(res.data, 'nourish');
            setScoreChartData(scoreData);
            const driverData = ScoreHelper.generateScoreDriverChartData(res.data);
            setScoreDriverData(driverData);
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
      //console.log(error);
    }
  };

  useEffect(() => {
    getUserScoreHistory(userId, catId);
  }, [userId, catId]);

  const bodyCompExternalKeys: Record<string, string> = {
    BodyFat: 'Body Fat',
    WaistToHipRatio: 'Waist/Hip ratio'
  };
  const bodyCompData = HealthMarkerHelper.getHealthMarkers(allTilesData, bodyCompExternalKeys);

  const metabolismExternalKeys: Record<string, string> = {
    Insulin: 'insulin',
    averagedailyfast: 'average daily fast'
  };
  const metabolismData = HealthMarkerHelper.getHealthMarkers(allTilesData, metabolismExternalKeys);

  return (
    <React.Fragment>
      <Typography className={classes.description}>
        Our nutrition, digestion, elimination, inflammation and micro/macro nutrient balance.
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
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TilesView title="Score" category="Nourish" score={scoreChartData?.accuracy} isShownDevider={true} titleIcon={<InfoIcon />} >
              <ScoreLineChart chartData={scoreChartData} />
            </TilesView>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TilesView title="Score Drivers" category="Nourish" isShownDevider={true}>
              <ScoreDriversProgressBarView category="Nourish" data={scoreDriverData} />
            </TilesView>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TilesView title="Body Composition" category="Nourish" isShownDevider={true}>
              <HorizontalProgressBarChart progressBarData={bodyCompData} />
            </TilesView>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12}>
            <TilesView title="Metabolism" category="Nourish" isShownDevider={demoMode}>
              <HorizontalProgressBarChart progressBarData={metabolismData} />
            </TilesView>
          </Grid>

          {demoMode === true && (
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TilesView title=" Target macros or TDEE/BMR" category="Nourish" isDemo={true} isShownDevider={true}>
                <DoughnutChart chartDescription="MET-min/per week" category="Nourish" />
              </TilesView>
            </Grid>
          )}

          {demoMode === true && (
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <TilesView title="Fasting Glucose" category="Nourish" isDemo={true}>
                <ScoreLineChart chartData={fastingGlucoseChartData} />
              </TilesView>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Nourish;
