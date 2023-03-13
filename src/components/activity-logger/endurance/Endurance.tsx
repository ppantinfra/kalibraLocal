import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FontColor, FontFamily } from '../../../core';
import { TilesView } from '../../tiles';
import Grid from '@mui/material/Grid';
import imageHeadingIcon from '../../../assets/images/activity-log/strength/imageHeadingIcon.svg';
import EnduranceScoreChart from './EnduranceScoreChart';
import minsIcon from '../../../assets/images/activity-log/endurance/mins.svg';
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
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
        ];

        const fullBodyChartData: EnduranceProgressBarType[] = [
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
        ];

        const coreChartData: EnduranceProgressBarType[] = [
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
        ];

        const pushChartData: EnduranceProgressBarType[] = [
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
        ];

        const pullChartData: EnduranceProgressBarType[] = [
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
        ];

        const pushToPullChartData: EnduranceProgressBarType[] = [
            { headingIcon: minsIcon, headingText: '2 Km Row', progressValue: 34, progressColor: '#46D7CB', progressText: 'Score', scoreProgressLabel: 'Mins', scoreProgressDone: 25 },
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
