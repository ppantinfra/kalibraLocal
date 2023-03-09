import React from 'react';
import Typography from '@mui/material/Typography';
import 'chartjs-adapter-moment';
import Box from '@mui/material/Box';
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

import { makeStyles } from '@mui/styles';

const fontColor = '#222B45';
const fontFamily = 'Poppins';

export const useGraphChartStyles = makeStyles({
  graphBox: {},
  gb_titleBox: {},
  gbt_title: {
    fontFamily: fontFamily,
    color: fontColor,
    fontSize: '11px',
    fontWeight: 400,
  },
  gbt_graphScore: {
    fontFamily: fontFamily,
    color: fontColor,
    fontSize: '22px',
    fontWeight: 600,
    '@media (max-width: 1500px)': {
      fontSize: '18px',
    },
  },
  lineGraph: {
    width: '350px',
    '@media (max-width: 1500px)': {
      width: '350px',
    },
    '@media (max-width: 425px)': {
      width: '300px',
    },
  },
  nodataBox: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '20px',
    fontFamily: fontFamily,
    '& p': {
      color: fontColor,
      fontFamily: fontFamily,
      fontSize: '20px',
    },
  },
});

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
  title: any;
  graphData?: any;
  graphLabels?: any;
  graphScore?: any;
  minValue?: number;
  maxValue?: number;
};

const GraphChart = ({ title, graphData, graphScore, minValue, maxValue }: Props) => {
  const classes = useGraphChartStyles();

  const data = {
    datasets: [
      {
        fill: true,
        data: graphData,
        borderColor: '#00D68F',
        pointRadius: 3,
        pointBorderColor: '#2CE59B',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        borderWidth: 2,
        backgroundColor: 'rgba(0, 214, 143, 0.16)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      length: 10,
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 60,
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return index % 2 === 0 ? val : '';
          },
          color: '#000000',
          font: {
            size: 10,
          },
        },
        grid: {
          color: '#C5CEE0',
        },
        max: maxValue,
        min: minValue,
        stepSize: 70,
      },
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },

        beginAtZero: false,
        ticks: {
          maxTicksLimit: 10,
          max: 250,
          min: 0,
          stepSize: 70,

          color: '#000000',
          font: {
            size: 10,
          },
        },
        grid: {
          color: '#C5CEE0',
        },
      },
    },
  };

  if (graphData === undefined || graphData.length === 0) {
    return (
      <Box className={classes.graphBox}  >
        <Typography className={classes.nodataBox} >No data available</Typography>
      </Box>);
  }

  return (
    <Box className={classes.graphBox}>
      <Box className={classes.gb_titleBox} sx={{ mb: 2 }}>
        <Typography className={classes.gbt_title}>{title}</Typography>
        <Typography className={classes.gbt_graphScore}>{graphScore}</Typography>
      </Box>
      <Box className={classes.lineGraph}>
        <Line options={options as any} data={data} />
      </Box>
    </Box>
  );
};

export default GraphChart;
