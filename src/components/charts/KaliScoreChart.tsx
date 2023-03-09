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
import { useChartSyles } from './ChartSyles';
import {
  VictoryPie,
  VictoryLabel,
} from 'victory';
import { PillarScore } from '../../core/types/PillarScore';
import { ColorHelper } from '../../core/helper/ColorHelper';
import PieLabel from './PieLabel';
import NourishIcon from '../../assets/images/table-icons/Nourish.svg';
import ConnectIcon from '../../assets/images/table-icons/Connect.svg';
import GrowIcon from '../../assets/images/table-icons/Grow.svg';
import MoveIcon from '../../assets/images/table-icons/Move.svg';
import ReflectIcon from '../../assets/images/table-icons/Reflect.svg';
import RestIcon from '../../assets/images/table-icons/Rest.svg';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

type IProps = {
  toggleRightDrawer?: any;
  pillarScores?: Array<PillarScore>;
  kaliScore: number;
  drawerType: string;
  clientId: string;
};

const KaliScoreChart = ({
  toggleRightDrawer,
  pillarScores,
  kaliScore,
  drawerType,
  clientId,
}: IProps) => {
  const classes = useChartSyles();
  const [selectedPie1Index, setSelectedPie1Index] = React.useState(undefined);
  const [selectedPie2Index, setSelectedPie2Index] = React.useState(undefined);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const backgroundColor = {
    Rest: 'rgba(191, 219, 254,0.6)',
    Nourish: 'rgba(252, 214, 196,0.6)',
    Move: 'rgba(200, 248, 249,0.6)',
    Connect: 'rgba(253, 243, 185,0.6)',
    Grow: 'rgba(224, 240, 149,0.6)',
    Reflect: 'rgba(227, 191, 253,0.6)',
  };

  React.useEffect(() => {
    setSelectedPie1Index(undefined);
    setSelectedPie2Index(undefined);
  }, [clientId]);

  if (pillarScores === undefined || pillarScores.length === 0) {
    return <></>;
  }

  const doughnutWidth = 55;
  const innerRadiusBase = 45;

  const baseData = pillarScores.map((element, index) => {
    return {
      x: element.name,
      y: 5,
      radius:
        selectedPie1Index === index || selectedPie2Index === index
          ? innerRadiusBase + doughnutWidth + 6
          : innerRadiusBase + doughnutWidth,
      label: `${element.name} (${element.score})`,
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
    return backgroundColor[pillarScores[index].name];
  });

  const userColors = userData.map((element, index) => {
    return ColorHelper.getBarColor('teal', pillarScores[index].name);
  });

  const labelRadius = { 'Rest': 20, 'Nourish': 42, 'Move': 40, 'Connect': 40, 'Grow': 36, 'Reflect': 20 };

  const createPie = (data: any, colors: any, isShowLabel: boolean) => {
    return (
      <VictoryPie
        animate={isShowLabel === false ? {} : { duration: 500, easing: 'cubicOut', animationWhitelist: ['label'] }}
        startAngle={0}
        colorScale={colors}
        standalone={false}
        labelComponent={<PieLabel isShowLabel={isShowLabel} />}
        labelRadius={({ datum }) => innerRadiusBase + doughnutWidth + labelRadius[datum.label.split(' ')[0]]}
        radius={({ datum }) => datum.radius}
        innerRadius={innerRadiusBase}
        data={data}
        style={{ data: { cursor: 'pointer' }, parent: { touchAction: 'none', backgroundColor: 'green' } }}
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
                        toggleRightDrawer(
                          true,
                          drawerType,
                          pillarScores[props.index].name,
                          String(pillarScores[props.index].id),
                        );
                      },
                    },
                  ];
                },
                onMouseOver: () => {
                  return [
                    {
                      target: 'data',
                      mutation: (props) => {
                        if (props.datum.label.split(' ').length === 1) {
                          setSelectedPie2Index(props.index);
                        } else {
                          setSelectedPie1Index(props.index);
                        }

                        if (isShowLabel === true) {
                          return {};
                        } else {
                          return {};
                        }
                      },
                    },
                    {
                      target: 'labels',
                      mutation: () => {
                        return { active: true };
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: 'data',
                      mutation: (props) => {
                        if (props.datum.label.split(' ').length === 1) {
                          setSelectedPie2Index(undefined);
                        } else {
                          setSelectedPie1Index(undefined);
                        }
                        setTimeout(() => {
                          setIsUpdated(!isUpdated);
                        }, 10);
                        return {};
                      }
                    },
                    {
                      target: 'labels',
                      mutation: () => ({ active: false })
                    }
                  ];
                }
              },
            },
          ]}
      />
    );
  };

  return (
    <div className={classes.kaliScoreBox}>
      <svg width="400px" height="300px" viewBox="50 60 300 300">
        {createPie(baseData, baseColors, true)}
        {createPie(userData, userColors, false)}
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={190}
          style={{
            fontSize: 10,
            fontFamily: 'Poppins',
            fill:
              selectedPie1Index !== undefined || selectedPie2Index !== undefined
                ? userColors[Number(selectedPie1Index !== undefined ? selectedPie1Index : selectedPie2Index)]
                : '#46D7CB',
          }}
          text={
            selectedPie1Index !== undefined || selectedPie2Index !== undefined
              ? pillarScores[Number(selectedPie1Index !== undefined ? selectedPie1Index : selectedPie2Index)].name + ' Score'
              : 'Kalibra Score'
          }
        />
        <VictoryLabel
          inline
          x={200}
          y={212}
          textAnchor="middle"
          verticalAnchor="middle"
          style={[
            {
              fontSize: 21,
              fontFamily: 'Poppins',
              fontWeight: 600,
              fill:
                selectedPie1Index !== undefined || selectedPie2Index !== undefined
                  ? userColors[Number(selectedPie1Index !== undefined ? selectedPie1Index : selectedPie2Index)]
                  : '#46D7CB',
            },
            {
              fontSize: 12,
              fontFamily: 'Poppins',
              fontWeight: 600,

              fill:
                selectedPie1Index !== undefined || selectedPie2Index !== undefined
                  ? userColors[Number(selectedPie1Index !== undefined ? selectedPie1Index : selectedPie2Index)]
                  : '#46D7CB',
            },
          ]}
          text={[
            selectedPie1Index !== undefined || selectedPie2Index !== undefined
              ? String(pillarScores[Number(selectedPie1Index !== undefined ? selectedPie1Index : selectedPie2Index)].score)
              : String(kaliScore),
            '%',
          ]}
          lineHeight={[1, 1]}
        />
        <image x="130" y="58" height="20px" width="20px" href={ReflectIcon} preserveAspectRatio="xMaxYMax meet" />
        <image x="250" y="58" height="20px" width="20px" href={RestIcon} preserveAspectRatio="xMinYMax meet" />
        <image x="52" y="169" height="20px" width="20px" href={GrowIcon} preserveAspectRatio="xMinYMax meet" />
        <image x="120" y="295" height="20px" width="20px" href={ConnectIcon} preserveAspectRatio="xMinYMax meet" />
        <image x="257" y="295" height="20px" width="20px" href={MoveIcon} preserveAspectRatio="xMinYMax meet" />
        <image x="335" y="169" height="20px" width="20px" href={NourishIcon} preserveAspectRatio="xMinYMax meet" />
      </svg>
    </div>
  );
};

export default KaliScoreChart;
