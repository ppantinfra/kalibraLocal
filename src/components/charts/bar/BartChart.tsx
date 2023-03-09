import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useChartSyles } from '../ChartSyles';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box';
import 'chartjs-adapter-moment';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables);
Chart.register(annotationPlugin);

// type Props = {
//   chartData?: any;
// };

const BarChart = () => {
  const classes = useChartSyles();
  const gradient = (context: any) => {
    const ctx = context.chart.ctx;
    const linearGradient = ctx.createLinearGradient(0, 0, 0, 120);
    linearGradient.addColorStop(0, ColorHelper.getBarColor('green', String('Move')));
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
    value: () => 90
  };

  const labels = ['30', '60', '90'];
  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: gradient,
        data: [160, 70, 180],
      },
    ],
  };


  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Heart Rate',
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
        min: 0,
        max: 200,
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
        type: 'linear',
        beginAtZero: true,
        display: true,
        min: 30,
        max: 90,
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
          min: 0,
          font: {
            size: 10,
            weight: 500,
          },
          autoSkip: false,
          callback: function (val, index) {
            if (index === 0) {
              return 'km';
            }
            return val;
          },
        },
      },
    },
    responsive: true,
  };

  return (
    <React.Fragment>
      <Box className={classes.barChartBox}>
        <Bar data={data} options={options} style={{ height: '300px' }} />
      </Box>
    </React.Fragment>
  );
};

export default BarChart;
