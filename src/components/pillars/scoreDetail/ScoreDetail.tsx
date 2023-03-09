import React from 'react';
import Box from '@mui/material/Box';
import { ScoreDetailStyles } from './ScoreDetailStyles';
import { TilesView } from '../../tiles';
import { ScoreLineChart } from '../../charts';
import Grid from '@mui/material/Grid';
import { UserService } from '../../../core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import { IndividualAssessments } from '../../../pages/interactionSystems/assessments';
import ScoreHelper from '../../../core/helper/scoreHelper';
import { Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BackendApi from '../../../api/shared/BackendApi';
import TooltipHelper from '../../../core/helper/TooltipHelper';

type ScoreDetailProps = {
  userId: string;
  externalKey: string;
  data?: any;
};



const ScoreDetail = ({ userId, externalKey, data }: ScoreDetailProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = ScoreDetailStyles();
  const [scoreChanges, setScoreChanges] = React.useState<any>();
  const [, setStartDate] = React.useState<Date>(new Date());
  /* eslint-disable */
  const [endDate,] = React.useState<Date>(data?.lastUpdatedDate as Date);
  const [assessmentList, setAssessmentList] = React.useState<any>();

  const maxDataPointsToDisplay = 365;
  const getScoreChanges = React.useCallback(async () => {
    const startMonthDateMnt: moment.Moment = moment(endDate).startOf('day').subtract(maxDataPointsToDisplay, 'days');
    setStartDate(startMonthDateMnt.toDate());
    const params = {
      startDate: startMonthDateMnt.toISOString(),
      endDate: endDate.toISOString(),
      keys: externalKey,
      assessments: true
    };
    const response = await UserService.getUserHealMarkerScoreHistory(userId, externalKey, params);

    if (response.status >= 200 && response.status <= 399) {
      if (response.data !== undefined) {
        const scoreData: Array<any> = [];
        response.data.values.forEach(element => {
          scoreData.push({ x: (new Date(element.date)), y: element.value } as any);
        });
        const chartData = ScoreHelper.generateChartDataFromScores(response.data, data.category);
        setScoreChanges(chartData);
        setAssessmentList(response.data.assessments);
      }
    }
  }, [userId, endDate, externalKey]);

  React.useEffect(() => {
    getScoreChanges();
  }, [getScoreChanges]);

  const deleteAssessmentHandler = async (assessmentId: string) => {
    const response = await BackendApi.delete(`/pro/clean-user-assessment-data/${assessmentId}/${userId}`);
    if (response.status >= 200 && response.status <= 399) {
      getScoreChanges();
    }
  };

  const InfoIcon = () => {
    return (
      <>
        <TooltipHelper title="The last five assessments for this marker are shown below" placement="top">
          <span className={classes.closeIcon}>
            <InfoOutlinedIcon />
          </span>
        </TooltipHelper>
      </>
    )
  }

  return (
    <React.Fragment>
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
            <TilesView title="History" isShownDevider={true} category={data.category}>
              {/* {scoreChanges && <GraphChart
                title={''}
                graphData={scoreChanges}
                minValue={data?.minValue}
                maxValue={data?.maxValue}
              />
              } */}
              {scoreChanges && scoreChanges.data.length === 0 ?
                <Typography className={classes.noHistoryText}>There is no history for this marker.</Typography>
                : <ScoreLineChart chartData={scoreChanges} />
              }

            </TilesView>
          </Grid>

          <Grid item lg={6} md={6} xs={6}>
            <TilesView title="Assessments" category={data.category} titleIcon={<InfoIcon />}>
              <IndividualAssessments assessmentList={assessmentList} disableHeaderAndPagination={true} deleteAssessmentHandler={deleteAssessmentHandler} />
            </TilesView>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ScoreDetail;
