import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DateFormatterHelper from '../../../core/helper/DateFormatterHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  lineChartTitle?: any;
  lineChartColor?: string;
  lineChartData?: any;
  labels?: any;
};

const SmallCurverdLineChart = ({ lineChartTitle, lineChartColor, lineChartData, labels }: Props) => {
  const data = {
    labels,
    datasets: [
      {
        label: lineChartTitle,
        data: lineChartData,
        borderColor: lineChartColor,
        pointBorderColor: lineChartColor,
        pointBackgroundColor: 'white',
        pointBorderWidth: 1,
        pointRadius: 2,
        borderWidth: 1,
      }
    ]
  };

  const options: any = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        titleFont: {
          size: 11
        },
        callbacks: {
          label: (context: any) => {
            return `${context.parsed.y}`;
          },
          title: function (context: any) {
            return DateFormatterHelper.formatDateTime(context[0].label);
          },
        },
        filter: function () {
          return lineChartTitle === 'lineChartTitle';
        },
      },
      title: {
        display: false
      }
    },

    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false,
          border: '0',
          drawBorder: false
        },
        ticks: {
          display: true, //this will remove only the label,
          border: '0',
          stepSize: 1
        }
      }
    },
    responsive: true
    // maintainAspectRatio: false,
  };

  return <Line options={options} data={data} />;
};

export default SmallCurverdLineChart;
