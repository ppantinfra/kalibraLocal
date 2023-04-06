import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useChartSyles } from '../ChartSyles';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box';
import 'chartjs-adapter-moment';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import annotationPlugin from 'chartjs-plugin-annotation';
import moment from 'moment';

Chart.register(...registerables);
Chart.register(annotationPlugin);

type Props = {
  chartData?: any;
};

const HypnogramChart = ({ chartData }: Props) => {

  const classes = useChartSyles();
  const gradient = (context: any) => {
    const ctx = context.chart.ctx;
    const linearGradient = ctx.createLinearGradient(0, 0, 0, 180);
    linearGradient.addColorStop(0, ColorHelper.getBarColor('teal', String('Rest')));
    linearGradient.addColorStop(1, 'rgba(73, 243, 243, 0)');
    return linearGradient;
  };

  const annotation = {
    type: 'line',
    borderColor: '#8F9BB3',
    borderDash: [2, 2],
    borderDashOffset: 0,
    borderWidth: 1,
    label: {
      enabled: true,
      content: () => 'Average: 90',
      position: 'end'
    },
    scaleID: 'y',
    value: () => 115
  };

  if (chartData === undefined) {
    return <></>;
  }

  const yLabels = ['Unknown', 'Awake', 'Sleeping', 'Out of Bed', 'Light', 'Deep', 'REM'];

  let lineData = chartData.data.map(item => {
    return {
      x: new Date(item.graphTime),
      y: yLabels[Math.floor(item.graphData)]
    };
  });
  lineData.sort((a, b) => a.x - b.x);

  // const totalTime = lineData[lineData.length - 1].x - lineData[0].x;
  const newlineData: Array<any> = [];

  newlineData.push({ x: lineData[0].x, duration: 0, y: lineData[0].y });
  lineData.forEach(element => {
    if (element.y === newlineData[newlineData.length - 1].y) {
      newlineData[newlineData.length - 1].duration += element.x - newlineData[newlineData.length - 1].x;
    } else {
      newlineData[newlineData.length - 1].duration += element.x - newlineData[newlineData.length - 1].x;
      newlineData.push({ x: element.x, duration: 0, y: element.y });
    }
  });

  lineData = newlineData.map(item => {
    return { x: item.x, y: item.y };
  });

  // const percentages = newlineData.map(item =>
  //   item.duration * 100.0 / totalTime
  // );
  const data = {
    datasets: [
      {
        fill: true,
        borderColor: ColorHelper.getBarColor('green', String('Rest')),
        borderWidth: 1,
        backgroundColor: gradient,
        data: lineData,
      },
    ],
  };

  const convertDateFormat = (str: string) => {
    return moment(new Date(str)).format('hh:mm');
  };

  const min = moment(lineData[0].x).subtract(1, 'minute');
  const max = moment(lineData[lineData.length - 1].x).add(1, 'minute');
  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: chartData.name ? chartData.name : 'Heart Rate',
        position: 'bottom'
      },
      annotation: {
        annotations: {
          annotation
        }
      }
    },
    scales: {
      y: {
        type: 'category',
        labels: yLabels,
        display: true,
        reverse: true,
        //beginAtZero: true,
        bounds: 'ticks',
        title: {
          text: '',
          display: false,
          align: 'start',
        },
        ticks: {
          callback: function (val) {
            return yLabels[val];
          },
          color: '#929CB0',
          font: {
            size: 10,
            weight: 500,
          },
        },
        grid: {
          display: false,
          borderWidth: '0px'
        },
      },
      x: {
        type: 'time',
        time: {
          unit: 'minute',
        },
        barPercentage: 1,
        categoryPercentage: 0.5,
        min: moment(min).toDate(),
        max: moment(max).toDate(),
        bounds: 'ticks',
        title: {
          text: '',
          display: false,
          align: 'start'
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#929CB0',
          maxTicksLimit: 6,
          // min: 0,
          font: {
            size: 10,
            weight: 500,
          },
          autoSkip: true,
          callback: function (val, index) {
            if (index === 0) {
              return 'Time';
            }
            return convertDateFormat(val);
          },
        },
      },
    },
    maintainAspectRatio: false,
    //responsive: true,
  };

  return (
    <React.Fragment>
      <Box
        className={classes.barChartBox}
      >
        <Bar data={data} options={options}
        // style={{ height: '300px' }} 
        />
      </Box>
    </React.Fragment>
  );
};

export default HypnogramChart;
