import React, { useState, useEffect } from 'react';
import ScoreDriversProgressBarView from '../../charts/tiles/ScoreDriversProgressBarView';
import { TilesView } from '../../tiles';
import StrengthScoreChart from './StrengthScoreChart';
import Grid from '@mui/material/Grid';
import upperPushFront from '../../../assets/images/activity-log/strength/upperPushFront.png';
import upperPushBack from '../../../assets/images/activity-log/strength/upperPushBack.png';
import upperPullFront from '../../../assets/images/activity-log/strength/upperPullFront.png';
import upperPullBack from '../../../assets/images/activity-log/strength/upperPullBack.png';
import lowerPushFront from '../../../assets/images/activity-log/strength/lowerPushFront.png';
import lowerPushBack from '../../../assets/images/activity-log/strength/lowerPushBack.png';
import lowerPullFront from '../../../assets/images/activity-log/strength/lowerPullFront.png';
import lowerPullBack from '../../../assets/images/activity-log/strength/lowerPullBack.png';
import corePosteriorFront from '../../../assets/images/activity-log/strength/corePosteriorFront.png';
import corePosteriorBack from '../../../assets/images/activity-log/strength/corePosteriorBack.png';
import coreAnteriroFront from '../../../assets/images/activity-log/strength/coreAnteriroFront.png';
import coreAnterirorBack from '../../../assets/images/activity-log/strength/coreAnterirorBack.png';
import imageHeadingIcon from '../../../assets/images/activity-log/strength/imageHeadingIcon.svg';
import { UserService, FontColor, FontFamily } from '../../../core';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Iprops = {
  clientId: any;
};

const Strength = ({ clientId }: Iprops) => {

  const [pillarScores, setPillarScores] = useState<any>([]);
  const [selectedPillar, setSelectedPillar] = useState<any>();
  const [showNoActivity, setShowNoActivity] = useState<boolean>(false);

  const pillarClickHandler = (pillarIndex: number) => {
    setSelectedPillar(pillarScores[pillarIndex]);
  };

  useEffect(() => {
    setSelectedPillar(pillarScores[0]);
  }, [pillarScores]);

  const scoreToPercentage = (scoreValue: number) => {
    return Math.round(scoreValue * 20);
  };



  const getCompareMeasurements = async (_clientId: any) => {
    setShowNoActivity(false);
    await UserService.getCompareMeasurements(_clientId, 1, 0, 'StrengthAssessment').then((res: any) => {
      const allMeasurementData = res.data;
      if (allMeasurementData.length > 0) {
        let upperPullScore = 0;
        let upperPullLatPullDown = 0;
        const upperPullLatPullUp = 0;
        let lowerPush = 0;
        let lowerPushSplitSquat = 0;
        const lowerPushBackSquat = 0;
        let lowerPull = 0;
        let lowerPullSplitSquat = 0;
        const lowerPullBackSquat = 0;
        const corePosterior = 0;
        const superman = 0;
        const coreAnterior = 0;
        const legRaise = 0;
        let upperPush = 0;
        let overHeadPress = 0;
        let benchPress = 0;
        let overHeadValue = 0;
        let benchPressValue = 0;
        for (const measurement of allMeasurementData) {
          for (const groups of measurement.groups) {
            for (const groupData of groups.data) {
              switch (groupData.key) {
                case 'StrengthBackAverageScore':
                  upperPullScore = scoreToPercentage(groupData.value);
                  break;
                case 'SeatedRow3RMScore':
                  upperPullLatPullDown = scoreToPercentage(groupData.value);
                  break;
                case 'BackSquat3RMScore':
                  lowerPush = scoreToPercentage(groupData.value);
                  lowerPushSplitSquat = scoreToPercentage(groupData.value);
                  break;
                case 'Deadlift3RMScore':
                  lowerPull = scoreToPercentage(groupData.value);
                  lowerPullSplitSquat = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadPress3RMScore':
                  overHeadPress = scoreToPercentage(groupData.value);
                  overHeadValue = groupData.value;
                  break;
                case 'BenchPress3RMScore':
                  benchPress = scoreToPercentage(groupData.value);
                  benchPressValue = groupData.value;
                  break;
              }
            }
          }
        }
        upperPush = Math.round((Number(overHeadValue) + Number(benchPressValue)) * 20 / 2);
        const upperPullChartTile = { subHeading: 'Back, Traps, Biceps', chartData: [{ 'done': upperPullLatPullDown, 'progressLabel': 'Lat Pull Down' }, { 'done': upperPullLatPullUp, 'progressLabel': 'Lat Pull Up' }], imageData: { front: upperPullFront, back: upperPullBack } };
        const lowerPushChartTile = { subHeading: 'Quadriceps', chartData: [{ 'done': lowerPushSplitSquat, 'progressLabel': 'Split Squat' }, { 'done': lowerPushBackSquat, 'progressLabel': 'Back Squat' }], imageData: { front: lowerPushFront, back: lowerPushBack } };
        const lowerPullChartTile = { subHeading: 'Hamstrings', chartData: [{ 'done': lowerPullSplitSquat, 'progressLabel': 'Split Squat' }, { 'done': lowerPullBackSquat, 'progressLabel': 'Back Squat' }], imageData: { front: lowerPullFront, back: lowerPullBack } };
        const coreAnteriorChartTile = { subHeading: 'Abs', chartData: [{ 'done': legRaise, 'progressLabel': 'Leg Raise' }], imageData: { front: coreAnteriroFront, back: coreAnterirorBack } };
        const corePosteriorChartTile = { subHeading: 'Lower Back', chartData: [{ 'done': superman, 'progressLabel': 'Superman' }], imageData: { front: corePosteriorFront, back: corePosteriorBack } };
        const upperPushChartTile = { subHeading: 'Chest, Shoulders, Triceps', chartData: [{ 'done': overHeadPress, 'progressLabel': 'Overhead press' }, { 'done': benchPress, 'progressLabel': 'Bench Press' }], imageData: { front: upperPushFront, back: upperPushBack } };

        const pillars = [{ 'id': 1, 'name': 'Upper Push', 'score': upperPush, labelName: 'Upper Push', chartTile: upperPushChartTile },
        { 'id': 2, 'name': 'Upper Pull', 'score': upperPullScore, labelName: 'Upper Pull', chartTile: upperPullChartTile },
        { 'id': 3, 'name': 'Lower Push', 'score': lowerPush, labelName: 'Lower Push', chartTile: lowerPushChartTile },
        { 'id': 4, 'name': 'Lower Pull', 'score': lowerPull, labelName: 'Lower Pull', chartTile: lowerPullChartTile },
        { 'id': 5, 'name': 'Core Posterior', 'score': corePosterior, labelName: 'Core Posterior', chartTile: corePosteriorChartTile },
        { 'id': 6, 'name': 'Core Anterior', 'score': coreAnterior, labelName: 'Core Anterior', chartTile: coreAnteriorChartTile }];
        setPillarScores(pillars);
      } else {
        setShowNoActivity(true);
      }
    });
  };


  useEffect(() => {
    getCompareMeasurements(clientId);
    // eslint-disable-next-line
  }, [clientId]);



  return (
    <React.Fragment>
      {!showNoActivity  ? <div className='strengthMain'>
        <div className='strengthLeft'>
          <Grid item className={'strengthGrid'}>
            <TilesView title="Scores" boxClass='strengthleftTop'>
              <StrengthScoreChart
                pillarClickHandler={pillarClickHandler}
                pillarScores={pillarScores}
                clientId={clientId}
              />
            </TilesView>
          </Grid>


          <Grid item className={'strengthGrid '}>
            {selectedPillar &&
              <TilesView boxClass='strengthleftBottom mt-3' title={<><span>{selectedPillar?.labelName} {selectedPillar?.score}%</span> <br />  <span className='strengthTileSubLabel mt-2'>{selectedPillar?.chartTile?.subHeading}</span></>} category="Move">
                <ScoreDriversProgressBarView category="Move" data={selectedPillar?.chartTile?.chartData} />
              </TilesView>
            }
          </Grid>

        </div>
        <div className='strengthRight'>
          {/* Image */}
          <Grid item className={'strengthGrid-2'} >
            {selectedPillar &&
              <TilesView boxClass='strengthRightBox' title={<span className='font-weight-normal d-flex align-items-center'> <img src={imageHeadingIcon} className='mr-2' /> <p>Focus should be on <strong>Upper Pull</strong> and <strong>Core Anterior</strong> as Strength Scores are low</p> </span>} category="Move">
                <div className='d-flex space-around mt-5'>
                  <div>
                    <img className='d-block text-center' src={selectedPillar?.chartTile?.imageData.front} />
                    <label className='d-block text-center font-weight-light mt-5'><small>Front</small></label>
                  </div>
                  <div>
                    <img className='d-block text-center' src={selectedPillar?.chartTile?.imageData.back} />
                    <label className='d-block text-center font-weight-light mt-5'><small>Back</small></label>
                  </div>
                </div>
              </TilesView>
            }
          </Grid>
        </div>
      </div> : <Box style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: FontColor, fontFamily: FontFamily }}>
        <Typography>No Strength Activity was found. Please Fill Assessment First</Typography>
      </Box>
      }
    </React.Fragment>
  );
};

export default Strength;