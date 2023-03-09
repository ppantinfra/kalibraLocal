import React, { useState, useEffect } from 'react';
import ScoreDriversProgressBarView from '../../charts/tiles/ScoreDriversProgressBarView';
import { TilesView } from '../../tiles';
import MobilityScoreChart from './MobilityScoreChart';
import Grid from '@mui/material/Grid';
import coreImage from '../../../assets/images/activity-log/mobility/core.png';
import shouldersImage from '../../../assets/images/activity-log/mobility/shoulders.png';
import hipsImage from '../../../assets/images/activity-log/mobility/hips.png';
import legsImage from '../../../assets/images/activity-log/mobility/legs.png';
import kneesImage from '../../../assets/images/activity-log/mobility/knees.png';
import anklesImage from '../../../assets/images/activity-log/mobility/ankles.png';
import imageHeadingIcon from '../../../assets/images/activity-log/strength/imageHeadingIcon.svg';
import { UserService, FontColor, FontFamily } from '../../../core';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


type Iprops = {
  clientId: any;
};
const Mobility = ({ clientId }: Iprops) => {
  const [showNoActivity, setShowNoActivity] = useState<boolean>(false);
  const [pillarScores, setPillarScores] = useState<any>([]);
  const [selectedPillar, setSelectedPillar] = useState<any>(pillarScores[0]);

  const pillarClickHandler = (pillarIndex: number) => {
    setSelectedPillar(pillarScores[pillarIndex]);
  };

  useEffect(() => {
    setSelectedPillar(pillarScores[0]);
  }, [pillarScores]);

  const scoreToPercentage = (scoreValue: number) => {
    return Math.round(scoreValue * 20);
  };

  const averagePercentage = (scoreValue: number[]) => {
    let sum = 0;
    if (scoreValue.length > 0) {
      for (const score of scoreValue) {
        sum = Number(sum) + Number(score);
      }
      return Math.round(sum / scoreValue.length);
    } else {
      return 0;
    }
  };


  const getCompareMeasurements = async (_clientId: any) => {
    setShowNoActivity(false);
    await UserService.getCompareMeasurements(_clientId, 1, 0, 'MobilityAssessment').then((res: any) => {
      const allMeasurementData = res.data;
      if (allMeasurementData.length > 0) {
        // shoulders
        let compositeRotation = 0;
        let rotationExtL = 0;
        let rotationExtR = 0;
        let rotationIntL = 0;
        let rotationIntR = 0;
        let rotationRatioL = 0;
        let rotationRatioR = 0;
        // Hips
        let squatHipsL = 0;
        let squatHipsR = 0;
        let hurdleStepsHipsL = 0;
        let hurdleStepsHipsR = 0;
        //legs
        let legRaiseL = 0;
        let legRaiseR = 0;
        //overall
        let overheadSquat = 0;
        let overheadPress = 0;
        let squatShouldersL = 0;
        let squatShouldersR = 0;
        let squatShoulders = 0;
        let squatBack = 0;
        //Ankles
        let kneesToWallL = 0;
        let kneesToWallR = 0;
        let hurdleStepAnkleR = 0;
        let hurdleStepAnkle = 0;
        let squatAnkles = 0;

        //core
        let birdDogL = 0;
        let birdDogR = 0;




        for (const measurement of allMeasurementData) {
          for (const groups of measurement.groups) {
            for (const groupData of groups.data) {
              switch (groupData.key) {
                //shoulders
                case 'ShoulderRotationAverageScore':
                  compositeRotation = scoreToPercentage(groupData.value);
                  break;
                case 'ExternalRotationL':
                  rotationExtL = scoreToPercentage(groupData.value);
                  break;
                case 'ExternalRotationR':
                  rotationExtR = scoreToPercentage(groupData.value);
                  break;
                case 'InternalRotationL':
                  rotationIntL = scoreToPercentage(groupData.value);
                  break;
                case 'InternalRotationR':
                  rotationIntR = scoreToPercentage(groupData.value);
                  break;
                case 'RotationRatioL':
                  rotationRatioL = scoreToPercentage(groupData.value);
                  break;
                case 'RotationRatioR':
                  rotationRatioR = scoreToPercentage(groupData.value);
                  break;
                //hips
                case 'OverheadSquatHipsL':
                  squatHipsL = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatHipsR':
                  squatHipsR = scoreToPercentage(groupData.value);
                  break;
                case 'HurdleStepHipsL':
                  hurdleStepsHipsL = scoreToPercentage(groupData.value);
                  break;
                case 'HurdleStepHipsR':
                  hurdleStepsHipsR = scoreToPercentage(groupData.value);
                  break;
                //legs
                case 'LegRaiseL':
                  legRaiseL = scoreToPercentage(groupData.value);
                  break;
                case 'LegRaiseR':
                  legRaiseR = scoreToPercentage(groupData.value);
                  break;
                // overall
                case 'OverheadSquatAverageScore':
                  overheadSquat = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadPress':
                  overheadPress = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatShouldersL':
                  squatShouldersL = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatShouldersR':
                  squatShouldersR = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatShoulders':
                  squatShoulders = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatBack':
                  squatBack = scoreToPercentage(groupData.value);
                  break;
                //Ankles
                case 'KneeToWallL':
                  kneesToWallL = scoreToPercentage(groupData.value);
                  break;
                case 'KneeToWallR':
                  kneesToWallR = scoreToPercentage(groupData.value);
                  break;
                case 'HurdleStepAnkleR':
                  hurdleStepAnkleR = scoreToPercentage(groupData.value);
                  break;
                case 'HurdleStepAnkle':
                  hurdleStepAnkle = scoreToPercentage(groupData.value);
                  break;
                case 'OverheadSquatAnkles':
                  squatAnkles = scoreToPercentage(groupData.value);
                  break;

                //core
                case 'BirdDogL':
                  birdDogL = scoreToPercentage(groupData.value);
                  break;
                case 'BirdDogR':
                  birdDogR = scoreToPercentage(groupData.value);
                  break;
              }
            }
          }
        }
        const shouldersChartTile = {
          chartData: [
            { 'done': compositeRotation, 'progressLabel': 'Composite Rotation' },
            { 'done': rotationExtL, 'progressLabel': 'Rotation Ext L' },
            { 'done': rotationExtR, 'progressLabel': 'Rotation Ext R' },
            { 'done': rotationIntL, 'progressLabel': 'Rotation Int L' },
            { 'done': rotationIntR, 'progressLabel': 'Rotation Int R' },
            { 'done': rotationRatioL, 'progressLabel': 'Rotation Ratio L' },
            { 'done': rotationRatioR, 'progressLabel': 'Rotation Ratio R' }],
          imageData: { front: shouldersImage }
        };
        const hipsChartTile = {
          chartData: [
            { 'done': squatHipsL, 'progressLabel': 'Squat Hips L' },
            { 'done': squatHipsR, 'progressLabel': 'Squat Hips R' },
            { 'done': hurdleStepsHipsL, 'progressLabel': 'Hurdle Step Hips L' },
            { 'done': hurdleStepsHipsR, 'progressLabel': 'Hurdle Step Hips R' }
          ], imageData: { front: hipsImage }
        };
        const legsChartTile = {
          chartData: [
            { 'done': legRaiseL, 'progressLabel': 'Leg Raise L' },
            { 'done': legRaiseR, 'progressLabel': 'Leg Raise R' }
          ], imageData: { front: legsImage }
        };
        const overallChartTile = {
          chartData: [
            { 'done': squatShouldersL, 'progressLabel': 'Squat Shoulders L' },
            { 'done': squatShouldersR, 'progressLabel': 'Squat Shoulders R' },
            { 'done': squatShoulders, 'progressLabel': 'Squat Shoulders' },
            { 'done': overheadSquat, 'progressLabel': 'Overhead Squat' },
            { 'done': overheadPress, 'progressLabel': 'Overhead Press' },
            { 'done': squatBack, 'progressLabel': 'Squat Back' },
          ], imageData: { front: kneesImage }
        };
        const anklesChartTile = {
          chartData: [
            { 'done': kneesToWallL, 'progressLabel': 'Knee-to-Wall L' },
            { 'done': kneesToWallR, 'progressLabel': 'Knee-to-Wall R' },
            { 'done': hurdleStepAnkleR, 'progressLabel': 'Hurdle Step Ankle R' },
            { 'done': hurdleStepAnkle, 'progressLabel': 'Hurdle Step Ankle' },
            { 'done': squatAnkles, 'progressLabel': 'Squat Ankles' },
          ], imageData: { front: anklesImage }
        };

        const coreChartTile = {
          chartData: [
            { 'done': birdDogL, 'progressLabel': 'Bird Dog L' },
            { 'done': birdDogR, 'progressLabel': 'Bird Dog R' }]
          , imageData: { front: coreImage }
        };

        const overallScore = averagePercentage([overheadSquat, overheadPress, squatShouldersL, squatShouldersR, squatShoulders, squatBack]);
        const shoulderScore = averagePercentage([compositeRotation, rotationExtL, rotationExtR, rotationIntL, rotationIntR, rotationRatioL, rotationRatioR]);
        const hipsScore = averagePercentage([squatHipsL, squatHipsR, hurdleStepsHipsL, hurdleStepsHipsR]);
        const legsScore = averagePercentage([legRaiseL, legRaiseR]);
        const coreScore = averagePercentage([birdDogL, birdDogR]);
        const anklesScore = averagePercentage([kneesToWallL, kneesToWallR, hurdleStepAnkleR, hurdleStepAnkle, squatAnkles]);


        const pillars = [
          { 'id': 1, 'name': 'Overall', 'score': overallScore, chartTile: overallChartTile },
          { 'id': 2, 'name': 'Shoulders', 'score': shoulderScore, chartTile: shouldersChartTile },
          { 'id': 3, 'name': 'Hips', 'score': hipsScore, chartTile: hipsChartTile },
          { 'id': 4, 'name': 'Legs', 'score': legsScore, chartTile: legsChartTile },
          { 'id': 5, 'name': 'Core', 'score': coreScore, chartTile: coreChartTile },
          { 'id': 6, 'name': 'Ankles', 'score': anklesScore, chartTile: anklesChartTile }];


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
      {!showNoActivity ?
        <div className='strengthMain'>
          <div className='strengthLeft'>

            <Grid item className={'strengthGrid'}>
              <TilesView title="Scores" boxClass='strengthleftTop'>
                <MobilityScoreChart
                  pillarClickHandler={pillarClickHandler}
                  pillarScores={pillarScores}
                  clientId={clientId}
                />
              </TilesView>
            </Grid>




          </div>
          <div className='strengthRight '>
            {/* Image */}
            <Grid item className={'strengthGrid-2'} >
              {selectedPillar &&
                <TilesView boxClass='strengthRightBox' title={<span className='font-weight-normal d-flex align-items-center'> <img src={imageHeadingIcon} className='mr-2' /> <p>Focus should be on <strong>Ankles</strong> and <strong>Shoulders</strong> as Mobility Scores are low</p> </span>} category="Move">
                  <div className='d-flex  mt-5 responive-mobility'>
                    <div className={'w-50 full-width '}>

                      <label className='pageHeading'>
                        {`${selectedPillar?.name} ${selectedPillar?.score}%`}
                      </label>
                      <ScoreDriversProgressBarView category="Move" data={selectedPillar?.chartTile?.chartData} />

                    </div>


                    <div className={'w-50 d-flex  padding-left img-responsive '}>
                      <img className='d-block text-center' src={selectedPillar?.chartTile?.imageData.front} />

                    </div>
                  </div>
                </TilesView>
              }
            </Grid>
          </div>
        </div>

        : <Box style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: FontColor, fontFamily: FontFamily }}>
          <Typography>No Mobility Activity was found. Please Fill Assessment First</Typography>
        </Box>}

    </React.Fragment>
  );
};


export default Mobility;