import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  FontStyle
  // AppColor, ButtonColor
} from '../../../core';

export const useIntelligenceModuleStyles = makeStyles(
  {
    intelligence_Content: {},
    intelligence_desc: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '140%',
      color: FontColor
    },
    intelchartDropDown: {
      backgroundColor: 'red'
    },
    /*** Intelligence Scores And Bars    ***/
    scoreText: {
      fontSize: '40px',
      fontWeight: 700,
      fontFamily: FontFamily,
      '& span': {
        fontSize: '16px',
        fontWeight: 400,
        '& span': {
          lineHeight: 0
        }
      },
      '& svg': {
        width: '20.33px',
        height: '20.33px'
      }
    },

    /*** Intelligence Activity Dashboard Styles    ***/
    IActivityDashboard: {
      '& .activityDashboard': {
        height: '434px',
        '@media (max-width:900px)': {
          height: '430px'
        },
        '@media (max-width:599px)': {
          height: '544px'
        },
        '@media (max-width:480px)': {
          height: '495px'
        },
        '@media (max-width:412px)': {
          height: '455px'
        }
      }
    },
    IAD_heading: {
      fontSize: '22px',
      fontFamily: 'Poppins',
      color: '#222B45',
      fontWeight: 600,

      '@media (max-width: 600px)': {
        fontSize: '18px'
      }
    },
    IActivityItem: {
      textAlign: 'center',
      marginTop: '24px',
      '& p': {
        fontFamily: FontFamily
      },
      '& .IActivityDashboard': {
        display: 'none'
      }
    },

    totalDistanceText: {
      color: '#46D7CB',
      fontSize: '32px',
      lineHeight: '22.4px',
      '& span': {
        fontSize: '12px'
      }
    },
    totalTimeText: {
      fontWeight: 400,
      fontSize: '14px',
      color: FontColor,
      lineHeight: '19.6px'
    },
    IAMeasurementBox: {
      padding: '10px 18px'
    },
    iamb_row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      '& > div': {
        textAlign: 'center'
      }
    },
    iam_text: {
      color: '#8F9BB3',
      fontSize: '11px',
      fontWeight: 400
    },
    iam_value: {
      color: FontColor,
      fontSize: '14px',
      fontWeight: 600
    },

    intel_chartBody: {
      // minHeight: 'calc(100% - 50px)',
      display: 'flex',
      alignItems: 'center'
    },
    intel_chartDropDown: {
      display: 'flex',
      justifyContent: 'space-between',
      '& .last': {
        marginLeft: '10px'
      },
      '& p': {
        fontSize: '10px',
        color: '#b1bacb',
        fontWeight: '600'
      },
      '& .MuiOutlinedInput-input': {
        padding: '1px 20px 1px 6px !important',
        minWidth: '40px',
        backgroundColor: '#f9fafc',
        fontSize: '11px',
        position: 'relative',
        fontWeight: 'bold',
        color: '#222B45',
     
      },
      '& svg': {
        right:0,
        fill: '#222B45',
        width: '19px'
      },
      '& fieldset': {
        border: '1px solid #e5e9f2'
      }
    },
    tilesViewCardBox: {
      color: '#2B2F3B',
      background: '#fff',
      padding: '10px',
      borderRadius: '14px',
      boxShadow: '0px 10px 16px 0px rgba(0,0,0,0.06)',
      maxWidth: '100%',
      height: '100%',
      fontFamily: FontFamily,
      position: 'relative'
    },
    tv_card: {
      padding: '10px',
      height: '100%'
    },
    tvc_header: {
      fontSize: '18px',
      fontFamily: FontFamily,
      color: FontColor,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    tvch_title: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'start',
      flexDirection: 'column',
      alignItems: 'start',
      fontFamily: FontFamily,
      color: FontColor
    },
    tvcht_heading: {
      marginBottom: '0',
      fontFamily: FontFamily,
      color: FontColor,
      fontSize: '16px',
      fontWeight: '600'
    }, intel_flexBoxDiv: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  },
  { index: 1 }
);
