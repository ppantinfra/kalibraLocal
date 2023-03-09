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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  title: any;
  graphData?: any;
  graphLabels?: any;
};

const BodyCompositionGraph = ({ title, graphData, graphLabels }: Props) => {
  const labels = graphLabels;
  // const labels = ["19/05","02/06","16/07","30/06","13/07","18/07","19/07","20/07","21/07","22/07"];

  const data = {
    labels,
    datasets: [
      {
        label: title,
        fill: true,
        // data: [33, 53, 85, 41, 44, 65],
        data: graphData,
        borderColor: '#00D68F',
        pointRadius: 3,
        pointBorderColor: '#2CE59B',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        backgroundColor: 'rgba(0, 214, 143, 0.16)'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      length: 10
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 10,
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return index % 2 === 0 ? val : '';
          },
          color: '#000000',
          font: {
            size: 10
          }
        },
        grid: {
          color: '#C5CEE0'
        },
        max: 40,
        min: 0,
        stepSize: 10
      },
      x: {
        // beginAtZero: false,
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 45,
          maxTicksLimit: 10,
          // callback: function (val, index) {
          //   // Hide the label of every 2nd dataset
          //   return index % 2 === 0 ? val : "";
          // },

          color: '#000000',
          font: {
            size: 10
          }
        },
        grid: {
          color: '#C5CEE0'
        },
        max: 40,
        min: 0,
        stepSize: 10
      }
    }
  };

  return <Line options={options} data={data} />;
};

export default BodyCompositionGraph;
