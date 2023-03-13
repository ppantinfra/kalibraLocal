import React from 'react';
import { CircularProgressBar, ScoreDriversProgressBarView } from '../../charts';

export type EnduranceProgressBarType = {
    headingIcon: any;
    headingText: any;
    progressValue: any;
    progressColor: string;
    progressText: string;
    scoreProgressLabel: string;
    scoreProgressDone: number
};

type Iprops = {
    chartData: EnduranceProgressBarType;
};


const EnduranceProgressBar = ({ chartData }: Iprops) => {
    return (

        <React.Fragment>
            <div className='enduranceTopData'>
                <img src={chartData?.headingIcon} /> <span>{chartData?.headingText}</span>
            </div>

            <div className='circularProgressBoxWidth'>

                <CircularProgressBar
                    strokeWidth={5}
                    backgroundPadding={18}
                    progressValue={chartData?.progressValue}
                    pathColor={chartData?.progressColor}
                    progressText={chartData?.progressText}
                />
            </div>


            <div className='enduranceProgress' >
                <ScoreDriversProgressBarView category="Move" data={[{ 'done': chartData?.scoreProgressDone, 'progressLabel': chartData?.scoreProgressLabel }]} />
            </div>

        </React.Fragment>
    );
};

export default EnduranceProgressBar;