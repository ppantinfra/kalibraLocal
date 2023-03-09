import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useChartSyles = makeStyles(
  {
    lineChartBox: {

      '@media (min-width: 769px) and (max-width:1024px)': {
        width: '235px',
        height: '140px',
        margin: 'auto'
      }
    },
    lineChartBox_header: {},
    lineChartBox_title: {
      color: '#2B2F3B',
      fontSize: '13px',
      paddingBottom: '10px'
    },
    lineChartBox_tilesName: {
      color: '#2B2F3B',
      fontSize: '13px'
    },
    lineChartBox_value: {
      color: '#2B2F3B',
      fontSize: '18px',
      fontWeight: '500'
    },
    circularProgressBarBox: {
      width: '12vmax',
      height: '12vmax',
      margin: '1vmax auto'
    },

    DoughnutChartBox: {
      // position: "relative",
      width: '261px',
      height: '261px',
      margin: 'auto',
      '& .canvasjs-chart-credit': {
        display: 'none'
      },
      '@media (max-width:1280px)': {
        //   width: "16vmax",
      }
    },
    DoughnutChartText: {
      position: 'absolute',
      top: '59%',
      left: '50%',
      fontSize: '10px',
      transform: 'translate(-50% , -50%)',
      textAlign: 'center'
    },

    progress: {
      backgroundColor: '#d8d8d8',
      borderRadius: '2px',
      position: 'relative',
      height: '1.2vmax',
      width: '100%',

      '@media (max-width: 1280px)': {
        height: '1.5vmax'
      }
    },
    '@keyframes fill': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(135deg)'
      }
    },

    progressDdone: {
      background: 'rgb(59, 125, 221)',
      borderRadius: '2px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '0',
      opacity: '0',
      transition: '1s ease 0.3s',
      fontSize: '13px',
      fontWeight: '500',
      '@media (max-width: 1280px)': {
        fontSize: '10px'
      }
    }
  },
  { index: 1 }
);

Chart.register(...registerables);

type Props = {
  chartData?: any;
};

const ScoreLineChart = ({ chartData }: Props) => {
  const classes = useChartSyles();
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.label,
        fill: true,
        lineTension: 0.5,
        backgroundColor: chartData.gradient,
        pointRadius: 0,
        pointBorderColor: 'rgba(75,192,192,1)',
        // pointBorderWidth: 2,
        // pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        borderColor: 'rgba(75,192,192,.5)',
        borderWidth: 2,
        data: chartData.data
      }
    ]
  };

  const options: any = {
    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
         border: '1px solid red',
        }
      },
      y: {
        grid: {
          display: false,
          border: '0',
          drawBorder: false
        },
        ticks: {
          display: false, //this will remove only the label,
          border: '0'
        }
      },
      r: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 50
      }
    },
    responsive: true
    // maintainAspectRatio: false,
  };

  return (
    <React.Fragment>
      <Box className={classes.lineChartBox}>
        <Line data={data} options={options} key={options} />
      </Box>
    </React.Fragment>
  );
};

export default ScoreLineChart;
