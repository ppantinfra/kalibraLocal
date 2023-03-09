import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  FontStyle
  // AppColor, ButtonColor
} from '../../core';

export const useIntelligenceStyles = makeStyles(
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
    }
  },
  { index: 1 }
);
