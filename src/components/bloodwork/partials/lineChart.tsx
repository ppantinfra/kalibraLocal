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

const pointColorFun = (data: any) => {
  let color = '';
  for (let i = 0; i < data.length; i++) {
    // if (data[i] >= 3) {
    //   color = 'rgba(75,192,192,1)';
    // } else if (data[i] >= 2) {
    //   alert(data[i]);

    //   color = '#FFAA00';
    // } else {
    //   color = '#DB2C66';
    // }

    color = data[i] >= 3 ? 'rgba(75,192,192,1)' : data[i] >= 2 ? '#FFAA00' : '#DB2C66';
  }
  return color;
};

const ScoreLineChart = ({ chartData }: Props) => {
  const classes = useChartSyles();
  const data = {
    labels: chartData?.labels,
    datasets: [
      {
        label: chartData?.label,
        // fill: true,
        // lineTension: 0.5,
        // backgroundColor: chartData?.gradient,
        // pointRadius: 0,
        pointBorderColor: pointColorFun(chartData?.data),
        //   chartData?.data[0] > 3 ? 'rgba(75,192,192,1)' : chartData?.data[0] > 2 ? '#FFAA00' : '#DB2C66',
        // pointBorderWidth: 2,
        // pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        pointBorderWidth: 2,
        data: chartData?.data,

        // label: lineChartTitle,
        // data: lineChartData,
        // borderColor: lineChartColor,
        // pointBorderColor: lineChartColor,
        // pointBackgroundColor: lineChartColor,
        // pointBorderWidth: 1,
        pointRadius: 4
        // borderWidth: 1
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
        }

        // ticks: {
        //   border: '1px solid red'
        //   //  callback: function (val, index) {
        //   //     // Hide the label of every 2nd dataset
        //   //     return index % 2 === 0 ? val : '';
        //   //   },
        // }
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
