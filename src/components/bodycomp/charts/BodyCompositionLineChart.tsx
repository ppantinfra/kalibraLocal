import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  lineChartTitle?: any;
  lineChartColor?: string;
  lineChartData?: any;
};

const BodyCompositionLineChart = ({
  lineChartTitle,
  lineChartColor,
  lineChartData,
}: Props) => {
  const labels = ['19/05', '02/06', '16/07', '30/06'];

  const data = {
    labels,
    datasets: [
      {
        label: lineChartTitle,
        data: lineChartData,
        // lineTension: 0.5,
        borderColor: lineChartColor,
        pointBorderColor: lineChartColor,
        pointBackgroundColor: lineChartColor,
        pointBorderWidth: 1,
        pointRadius: 2,
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = '';
            if (context.parsed.y) {
              label = context.parsed.y + '%';
            }
            return label;
          },
        },
      },
      title: {
        display: false,
      },
    },

    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          border: '0',
          drawBorder: false,
        },
        ticks: {
          display: false, //this will remove only the label,
          border: '0',
          stepSize: 1,
        },
      },
    },
    responsive: true,
    // maintainAspectRatio: false,
  };

  return <Line options={options} data={data} />;
};

export default BodyCompositionLineChart;
