import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../core';

export const useChartSyles = makeStyles(
  {
    //   Chart
    kaliScoreBox: {
      width: '16vmax',
      margin: 'auto',
      position: 'relative',
      justifyContent: 'center',
      display: 'grid',
      '& canvas': {
        position: 'absolute',
      },
      '& svg': {
        '@media (max-width:1280px)': {
          height: '300px',
        },
        '@media (max-width:1140px)': {
          height: '300px',
        },
        '@media (max-width:1024px)': {
          height: '300px',
        },
        '@media (min-width:768px) and (max-width:799px)': {
          height: '280px',
        },
        '@media (max-width:767px)': {
          height: '300px',
        },
        '@media (max-width:400px)': {
          height: '260px',
          marginTop: '23px',
        },
        '@media (max-width:360px)': {
          height: '220px',
          marginTop: '23px',
        },
      },
    },
  
    lineChartBox: {},
    barChartBox: { 
    '& canvas': {
      height: '200px !important',
    },
    },
    lineChartBox_header: {},
    selectFrequencyBox: {
     position:'absolute',
     right:'32px',
     top:'46px',
    },
    selectFrequencyField: {
      height: '30px',
      width: '100px',
      border: 'none',
      fontFamily: FontFamily,
      fontSize: '12px',
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderColor: 'rgba(0, 0, 0, 0.23)'
      },
    },
    menuItem: {
      fontFamily: FontFamily,
      fontSize: '12px',
    },
    lineChartBox_title: {
      color: '#2B2F3B',
      fontSize: '13px',
      paddingBottom: '10px',
    },
    lineChartBox_tilesName: {
      color: '#2B2F3B',
      fontSize: '13px',
    },
    lineChartBox_value: {
      color: '#2B2F3B',
      fontSize: '18px',
      fontWeight: '500',
    },
    circularProgressBarBox: {
      width: '12vmax',
      height: '12vmax',
      margin: '1vmax auto',
    },

    DoughnutChartBox: {
      // position: "relative",
      width: '261px',
      height: '261px',
      margin: 'auto',
      '& .canvasjs-chart-credit': {
        display: 'none',
      },
      '@media (max-width:1280px)': {
        //   width: "16vmax",
      },
    },
    DoughnutChartText: {
      position: 'absolute',
      top: '59%',
      left: '50%',
      fontSize: '10px',
      transform: 'translate(-50% , -50%)',
      textAlign: 'center',
    },

    progress: {
      backgroundColor: '#d8d8d8',
      borderRadius: '2px',
      position: 'relative',
      height: '1.2vmax',
      width: '100%',

      '@media (max-width: 1280px)': {
        height: '1.5vmax',
      },
    },
    '@keyframes fill': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(135deg)',
      },
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
        fontSize: '10px',
      },
    },
  },
  { index: 1 }
);
