import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import Box from '@mui/material/Box';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Red dataset',
      data: [
        {
          x: 20,
          y: 30,
          r: 15,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 30,
          y: 20,
          r: 18,
        },
        {
          x: 44,
          y: 33,
          r: 20,
        },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: [
        {
          x: 12,
          y: 24,
          r: 10,
        },
        {
          x: 40,
          y: 30,
          r: 20,
        },
        {
          x: 20,
          y: 10,
          r: 30,
        },
        {
          x: 30,
          y: 10,
          r: 40,
        },
      ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BubbleChart = () => {
  return (
    <Box>
      <Bubble options={options} data={data} />
    </Box>
  );
};

export default BubbleChart;
