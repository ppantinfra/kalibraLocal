import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontColor, FontFamily } from '../../../core';
import { TilesView } from '../../tiles';
import Grid from '@mui/material/Grid';
import imageHeadingIcon from '../../../assets/images/activity-log/strength/imageHeadingIcon.svg';
import EnduranceScoreChart from './EnduranceScoreChart';
import rowIcon from '../../../assets/images/activity-log/endurance/row.png';
import runIcon from '../../../assets/images/activity-log/endurance/run.png';
import wattBikeIcon from '../../../assets/images/activity-log/endurance/wattBike.png';
import burpeesIcon from '../../../assets/images/activity-log/endurance/burpees.png';
import jacksIcon from '../../../assets/images/activity-log/endurance/jacks.png';
import bodyHoldIcon from '../../../assets/images/activity-log/endurance/bodyHold.png';
import pushUpsIcon from '../../../assets/images/activity-log/endurance/pushUps.png';
import modPushUpsIcon from '../../../assets/images/activity-log/endurance/modPushUps.png';
import handStandIcon from '../../../assets/images/activity-log/endurance/handStand.png';
import pullUpsIcon from '../../../assets/images/activity-log/endurance/pullUps.png';
import ausPullUpsIcon from '../../../assets/images/activity-log/endurance/ausPullUps.png';
import modAusPullUpsIcon from '../../../assets/images/activity-log/endurance/modAusPullUps.png';
import pushToPullRatioIcon from '../../../assets/images/activity-log/endurance/pushToPullRatio.png';
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

    const getCompareMeasurements = (_clientId: any) => {
        console.debug(_clientId);
        setShowNoActivity(false);


        const cardioScore = 55;
        const fullBodyScore = 23;
        const coreScore = 89;
        const pushScore = 48;
        const pullScore = 56;
        const PushToPullScore = 21;

        const cardioChartData: EnduranceProgressBarType[] = [
            { headingIcon: rowIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: runIcon, headingText: '12 Min Run', progressValue: 58, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Meters', scoreProgressDone: 4028 },
            { headingIcon: wattBikeIcon, headingText: '3 Min WattBike', progressValue: 86, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Watts', scoreProgressDone: 923 },
        ];

        const fullBodyChartData: EnduranceProgressBarType[] = [
            { headingIcon: burpeesIcon, headingText: '2 Min Burpees', progressValue: 62, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 62 },
            { headingIcon: jacksIcon, headingText: '1 Min J Jacks', progressValue: 83, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 83 },
        ];

        const coreChartData: EnduranceProgressBarType[] = [
            { headingIcon: bodyHoldIcon, headingText: 'Body Hold', progressValue: 79, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: 462 },
        ];

        const pushChartData: EnduranceProgressBarType[] = [
            { headingIcon: pushUpsIcon, headingText: 'Push Ups', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 25 },
            { headingIcon: modPushUpsIcon, headingText: 'Mod. Push Ups', progressValue: 58, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 4028 },
            { headingIcon: handStandIcon, headingText: 'Handstand', progressValue: 86, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: 923 },
        ];

        const pullChartData: EnduranceProgressBarType[] = [
            { headingIcon: pullUpsIcon, headingText: 'Pull Ups', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 25 },
            { headingIcon: ausPullUpsIcon, headingText: 'Aus. Pull Ups', progressValue: 58, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Count', scoreProgressDone: 4028 },
            { headingIcon: modAusPullUpsIcon, headingText: 'Mod. Aus. Pull Ups', progressValue: 86, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Seconds', scoreProgressDone: 923 },
        ];

        const pushToPullChartData: EnduranceProgressBarType[] = [
            { headingIcon: pushToPullRatioIcon, headingText: 'Push-to-Pull Ratio', progressValue: 79, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Ratio', scoreProgressDone: 462 },
        ];

        const pillars = [
            { 'id': 1, 'name': 'Cardio', 'score': cardioScore, chartData: cardioChartData },
            { 'id': 2, 'name': 'Full Body', 'score': fullBodyScore, chartData: fullBodyChartData },
            { 'id': 3, 'name': 'Core', 'score': coreScore, chartData: coreChartData },
            { 'id': 4, 'name': 'Push', 'score': pushScore, chartData: pushChartData },
            { 'id': 5, 'name': 'Pull', 'score': pullScore, chartData: pullChartData },
            { 'id': 6, 'name': 'Push-to-pull', 'score': PushToPullScore, chartData: pushToPullChartData }];

        setPillarScores(pillars);
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
