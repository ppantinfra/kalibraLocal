import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
// import { useChartSyles } from '../../charts';
import { VictoryPie } from 'victory';
import ActivityLoggerPieLabel from '../ActivityLoggerPieLabel';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ArcElement
);

type PillarScore = {
    id: number;
    name: string;
    score: number;
};

type IProps = {
    pillarClickHandler?: any;
    pillarScores?: Array<PillarScore>;
    clientId: string;
};

const EnduranceScoreChart = ({
    pillarClickHandler,
    pillarScores,
    clientId,
}: IProps) => {
    const [selectedPie1Index, setSelectedPie1Index] = React.useState<any>(0);
    const [selectedPie2Index, setSelectedPie2Index] = React.useState<any>(0);

    React.useEffect(() => {
        setSelectedPie1Index(0);
        setSelectedPie2Index(0);

    }, [clientId]);

    if (pillarScores === undefined || pillarScores.length === 0) {
        return <></>;
    }

    const doughnutWidth = 55;
    const innerRadiusBase = 35;

    const baseData = pillarScores.map((element, index) => {
        return {
            x: element.name,
            y: 5,
            radius:
                selectedPie1Index === index || selectedPie2Index === index
                    ? innerRadiusBase + doughnutWidth + 6
                    : innerRadiusBase + doughnutWidth,
            // label: `${element.name} (${element.score}%)`,

            label: [element.name, element.score + '%'],
            showSelectedColor: selectedPie1Index === index || selectedPie2Index === index
                ? true
                : false
        };
    });

    const userData = pillarScores.map((element) => {
        return {
            x: element.name,
            y: 5,
            radius: innerRadiusBase + element.score * (doughnutWidth / 100),
            label: element.name,
        };
    });

    const baseColors = baseData.map((element, index) => {
        return selectedPie2Index === index ? '#DCFBED' : '#EDF1F7';
    });

    const userColors = userData.map((element, index) => {
        return selectedPie1Index === index ? '#46D7CB' : '#C5CEE0';
    });


    const labelRadius = { 'Cardio': 15, 'Full Body': 25, 'Core': 25, 'Push': 15, 'Pull': 25, 'Push-to-pull': 30 };

    const createPie = (data: any, colors: any, isShowLabel: boolean) => {
        return (
            <VictoryPie
                // animate={isShowLabel === false ? {} : { duration: 500, easing: 'cubicOut', animationWhitelist: ['label'] }}
                startAngle={-30}
                padAngle={2}
                colorScale={colors}
                standalone={false}
                labelComponent={<ActivityLoggerPieLabel isShowLabel={isShowLabel} />}
                labelRadius={({ datum }) => innerRadiusBase + doughnutWidth + (datum.label[0] ? labelRadius[datum.label[0]] : labelRadius[datum.label.split(' ')[0]])}
                radius={({ datum }) => datum.radius}
                innerRadius={innerRadiusBase}
                data={data}
                // style={{ data: { cursor: 'pointer' }, parent: { touchAction: 'none', backgroundColor: 'pink' } }}
                events={
                    [
                        {
                            target: 'data',
                            eventHandlers: {
                                onClick: () => {
                                    return [
                                        {
                                            target: 'labels',
                                            mutation: (props) => {
                                                setSelectedPie1Index(props.index);
                                                setSelectedPie2Index(props.index);
                                                pillarClickHandler(props.index);
                                            },
                                        },
                                    ];
                                },
                            },
                        },
                    ]}
            />
        );
    };

    return (
        <div >
            <svg width="100%" height="290px" viewBox="50 60 300 300">
                {createPie(baseData, baseColors, true)}
                {createPie(userData, userColors, false)}
            </svg>
        </div>
    );
};
export default EnduranceScoreChart;