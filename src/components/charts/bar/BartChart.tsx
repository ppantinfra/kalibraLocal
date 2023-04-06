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

const BarChart = ({ chartData }: Props) => {

  const classes = useChartSyles();
  const gradient = (context: any) => {
    const ctx = context.chart.ctx;
    const linearGradient = ctx.createLinearGradient(0, 0, 0, 180);
    linearGradient.addColorStop(0, ColorHelper.getBarColor('green', String(chartData.name ? 'Rest' : 'Move')));
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

  const lineData = chartData.data.map(item => {
    return {
      x: new Date(item.graphTime),
      y: item.graphData
    };
  });
  lineData.sort((a, b) => a.x - b.x);

  const data = {
    datasets: [
      {
        fill: true,
        //lineTension: 0.5,
        borderColor: ColorHelper.getBarColor('green', String(chartData.name ? 'Rest' : 'Move')),
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
        type: 'linear',
        display: true,
        min: chartData.minY ? chartData.minY : 0,
        max: chartData.maxY ? chartData.maxY : 200,
        beginAtZero: true,
        bounds: 'ticks',
        title: {
          text: '',
          display: false,
          align: 'start',
        },
        ticks: {
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            if (index === 0) {
              return 'bpm';
            }
            return index % 2 === 0 ? val : '';
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

export default BarChart;
