import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UserService, FontColor, FontFamily } from '../../../core';
import { TilesView } from '../../tiles';
import Grid from '@mui/material/Grid';
import imageHeadingIcon from '../../../assets/images/activity-log/strength/imageHeadingIcon.svg';
import EnduranceScoreChart from './EnduranceScoreChart';
import rowIcon from '../../../assets/images/activity-log/endurance/row.svg';
import runIcon from '../../../assets/images/activity-log/endurance/run.svg';
import wattBikeIcon from '../../../assets/images/activity-log/endurance/wattBike.svg';
import burpeesIcon from '../../../assets/images/activity-log/endurance/burpees.svg';
import jacksIcon from '../../../assets/images/activity-log/endurance/jacks.svg';
import bodyHoldIcon from '../../../assets/images/activity-log/endurance/bodyHold.svg';
import pushUpsIcon from '../../../assets/images/activity-log/endurance/pushUps.svg';
import modPushUpsIcon from '../../../assets/images/activity-log/endurance/modPushUps.svg';
import handStandIcon from '../../../assets/images/activity-log/endurance/handStand.svg';
import pullUpsIcon from '../../../assets/images/activity-log/endurance/pullUps.svg';
import ausPullUpsIcon from '../../../assets/images/activity-log/endurance/ausPullUps.svg';
import modAusPullUpsIcon from '../../../assets/images/activity-log/endurance/modAusPullUps.svg';
import pushToPullRatioIcon from '../../../assets/images/activity-log/endurance/pushToPullRatio.svg';
import EnduranceProgressBar, { EnduranceProgressBarType } from './EnduranceProgressBar';
type Iprops = {
    clientId: any;
};

const Endurance = ({ clientId }: Iprops) => {
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

    const progressAveragePercentage = (value: any, minValue: any, maxValue: any) => {
        const val = Number(value);
        const min = Number(minValue);
        const max = Number(maxValue);
        const result = ((val - min) / (max - min)) * 100;
        return Math.round(result);

    };

    const getCompareMeasurements = async (_clientId: any) => {
        setShowNoActivity(false);

        await UserService.getCompareMeasurements(_clientId, 1, 0, 'EnduranceAssessment').then((res: any) => {
            const allMeasurementData = res.data;

            //cardio
            let rowScore = 0;
            let runScore = 0;
            let wattBikeScore = 0;
            const rowScoreRange = { doneText: 0, done: 0 };
            const runScoreRange = { doneText: 0, done: 0 };
            const wattBikeScoreRange = { doneText: 0, done: 0 };

            // Full Body
            let burpressScore = 0;
            let jackScore = 0;
            const burpressScoreRange = { doneText: 0, done: 0 };
            const jackScoreRange = { doneText: 0, done: 0 };

            // Core
            let bodyHoldScore = 0;
            const bodyHoldScoreRange = { doneText: 0, done: 0 };
            //Push
            let pushUpsScore = 0;
            let modPushUpsScore = 0;
            let handStandScore = 0;
            const pushUpsScoreRange = { doneText: 0, done: 0 };
            const modPushUpsScoreRange = { doneText: 0, done: 0 };
            const handStandScoreRange = { doneText: 0, done: 0 };
            // Pull
            let pullUpsScore = 0;
            let modPullUpsaScore = 0;
            let ausPullUpsScore = 0;
            const pullUpsScoreRange = { doneText: 0, done: 0 };
            const modPullUpsaScoreRange = { doneText: 0, done: 0 };
            const ausPullUpsScoreRange = { doneText: 0, done: 0 };
            //PushToPull
            let pushToPullScore = 0;
            const pushToPullScoreRange = { doneText: 0, done: 0 };


            if (allMeasurementData.length > 0) {
                for (const measurement of allMeasurementData) {
                    for (const groups of measurement.groups) {
                        for (const groupData of groups.data) {
                            switch (groupData.key) {
                                //•	Cardio
                                case '2KmRowScore':
                                    rowScore = scoreToPercentage(groupData.value);
                                    break;
                                case '2KmRowTest':
                                    rowScoreRange.doneText = Number(groupData.value);
                                    rowScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case '12MinRunScore':
                                    runScore = scoreToPercentage(groupData.value);
                                    break;
                                case '12MinRunTest':
                                    runScoreRange.doneText = Number(groupData.value);
                                    runScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case '3MinWattBikeScore':
                                    wattBikeScore = scoreToPercentage(groupData.value);
                                    break;
                                case '3MinWattBikeTest':
                                    wattBikeScoreRange.doneText = Number(groupData.value);
                                    wattBikeScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;

                                //Full Body
                                case '2MinBurpeeScore':
                                    burpressScore = scoreToPercentage(groupData.value);
                                    break;
                                case '2MinBurpeeTest':
                                    burpressScoreRange.doneText = Number(groupData.value);
                                    burpressScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case '1MinJumpingJackScore':
                                    jackScore = scoreToPercentage(groupData.value);
                                    break;
                                case '1MinJumpingJackTest':
                                    jackScoreRange.doneText = Number(groupData.value);
                                    jackScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                // Core
                                case 'HollowBodyHoldScore':
                                    bodyHoldScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'HollowBodyHold':
                                    bodyHoldScoreRange.doneText = Number(groupData.value);
                                    bodyHoldScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                //Push
                                case 'PushUpsScore':
                                    pushUpsScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'PushUps':
                                    pushUpsScoreRange.doneText = Number(groupData.value);
                                    pushUpsScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case 'ModifiedPushUpsScore':
                                    modPushUpsScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'ModifiedPushUps':
                                    modPushUpsScoreRange.doneText = Number(groupData.value);
                                    modPushUpsScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case 'HandStandScore':
                                    handStandScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'HandStand':
                                    handStandScoreRange.doneText = Number(groupData.value);
                                    handStandScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                //Pull
                                case 'PullUpsScore':
                                    pullUpsScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'PullUps':
                                    pullUpsScoreRange.doneText = Number(groupData.value);
                                    pullUpsScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case 'AustralianPullUpsScore':
                                    ausPullUpsScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'AustralianPullUps':
                                    ausPullUpsScoreRange.doneText = Number(groupData.value);
                                    ausPullUpsScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                case 'ModifiedAustralianPullUpsScore':
                                    modPullUpsaScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'ModifiedAustralianPullUps':
                                    modPullUpsaScoreRange.doneText = Number(groupData.value);
                                    modPullUpsaScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;
                                //Push-to-Pull
                                case 'PushToPullScore':
                                    pushToPullScore = scoreToPercentage(groupData.value);
                                    break;
                                case 'PushToPull':
                                    pushToPullScoreRange.doneText = Number(groupData.value);
                                    pushToPullScoreRange.done = progressAveragePercentage(groupData.value, groupData.minValue, groupData.maxValue);
                                    break;

                            }
                        }
                    }
                }

                const cardioScore = averagePercentage([rowScore, runScore, wattBikeScore]);
                const fullBodyScore = averagePercentage([burpressScore, jackScore]);
                const coreScore = averagePercentage([bodyHoldScore]);
                const pushScore = averagePercentage([pushUpsScore, modPushUpsScore, handStandScore]);
                const pullScore = averagePercentage([pullUpsScore, modPullUpsaScore, ausPullUpsScore]);
                const PushToPullScore = averagePercentage([pushToPullScore]);

                const cardioChartData: EnduranceProgressBarType[] = [
                    { headingIcon: rowIcon, headingText: '2 Km Row', progressValue: rowScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: rowScoreRange },
                    { headingIcon: runIcon, headingText: '12 Min Run', progressValue: runScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Meters', scoreProgressDone: runScoreRange },
                    { headingIcon: wattBikeIcon, headingText: '3 Min WattBike', progressValue: wattBikeScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Watts', scoreProgressDone: wattBikeScoreRange },
                ];

                const fullBodyChartData: EnduranceProgressBarType[] = [
                    { headingIcon: burpeesIcon, headingText: '2 Min Burpees', progressValue: burpressScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: burpressScoreRange },
                    { headingIcon: jacksIcon, headingText: '1 Min J Jacks', progressValue: jackScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: jackScoreRange },
                ];

                const coreChartData: EnduranceProgressBarType[] = [
                    { headingIcon: bodyHoldIcon, headingText: 'Body Hold', progressValue: bodyHoldScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: bodyHoldScoreRange },
                ];

                const pushChartData: EnduranceProgressBarType[] = [
                    { headingIcon: pushUpsIcon, headingText: 'Push Ups', progressValue: pushUpsScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: pushUpsScoreRange },
                    { headingIcon: modPushUpsIcon, headingText: 'Mod. Push Ups', progressValue: modPushUpsScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: modPushUpsScoreRange },
                    { headingIcon: handStandIcon, headingText: 'Handstand', progressValue: handStandScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: handStandScoreRange },
                ];

                const pullChartData: EnduranceProgressBarType[] = [
                    { headingIcon: pullUpsIcon, headingText: 'Pull Ups', progressValue: pullUpsScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: pullUpsScoreRange },
                    { headingIcon: ausPullUpsIcon, headingText: 'Aus. Pull Ups', progressValue: ausPullUpsScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: ausPullUpsScoreRange },
                    { headingIcon: modAusPullUpsIcon, headingText: 'Mod. Aus. Pull Ups', progressValue: modPullUpsaScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: modPullUpsaScoreRange },
                ];

                const pushToPullChartData: EnduranceProgressBarType[] = [
                    { headingIcon: pushToPullRatioIcon, headingText: 'Push-to-Pull Ratio', progressValue: pushToPullScore, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Ratio', scoreProgressDone: pushToPullScoreRange },
                ];

                const pillars = [
                    { 'id': 1, 'name': 'Cardio', 'score': cardioScore, chartData: cardioChartData },
                    { 'id': 2, 'name': 'Full Body', 'score': fullBodyScore, chartData: fullBodyChartData },
                    { 'id': 3, 'name': 'Core', 'score': coreScore, chartData: coreChartData },
                    { 'id': 4, 'name': 'Push', 'score': pushScore, chartData: pushChartData },
                    { 'id': 5, 'name': 'Pull', 'score': pullScore, chartData: pullChartData },
                    { 'id': 6, 'name': 'Push-to-pull', 'score': PushToPullScore, chartData: pushToPullChartData }];

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
                                <EnduranceScoreChart
                                    pillarClickHandler={pillarClickHandler}
                                    pillarScores={pillarScores}
                                    clientId={clientId}
                                />
                            </TilesView>
                        </Grid>
                    </div>
                    <div className='strengthRight '>
                        {/* Image */}
                        <Grid item className={'strengthGrid-2 strengthGrid-2-height'} >
                            {selectedPillar &&
                                <TilesView boxClass='strengthRightBox' title={<span className='font-weight-normal d-flex align-items-center'> <img src={imageHeadingIcon} className='mr-2' /> <p style={{ fontSize: '11px' }}>Focus should be on <strong>Full Body</strong> and <strong>Push-to-pull</strong> as Endurance Scores are low</p> </span>} category="Move">
                                    <div className='d-flex  mt-5 responive-mobility responive-mobility-responsive'>

                                        {selectedPillar?.chartData.length > 0 &&
                                            <>

                                                {selectedPillar?.chartData.map((selectedChart) => {

                                                    return (
                                                        <>
                                                            <div className='responive-mobility-column' style={{ width: `${100 / selectedPillar?.chartData.length}%` }}>
                                                                <EnduranceProgressBar chartData={selectedChart} />
                                                            </div>
                                                        </>
                                                    );
                                                })}

                                            </>
                                        }
                                    </div>
                                </TilesView>
                            }
                        </Grid>
                    </div>
                </div>

                : <Box style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: FontColor, fontFamily: FontFamily }}>
                    <Typography>No Endurance Activity was found. Please Fill Assessment First</Typography>
                </Box>}

        </React.Fragment>
    );
};

export default Endurance;
