import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../core/';

export const useBloodworkScoreStyles = makeStyles(
  {
    biomarkerSection: {
      background: '#fff',
      borderRadius: '5px',
      padding: '10px',
      fontFamily: FontFamily
    },
    heading: {
      fontSize: '18px',
      color: '#2B2F3B',
      paddingBottom: '10px',
      marginBottom: '0',
      textAlign: 'initial',
      fontFamily: FontFamily,
      '@media (max-width: 768px)': {
        fontSize: '15px'
      }
    },
    subHeading: {
      fontSize: '14px',
      color: 'rgba(43 47 59/75%)',
      marginBottom: '20px',
      fontFamily: FontFamily,
      '@media (max-width: 768px)': {
        fontSize: '12px'
      }
    },
    tilesBox: {
      padding: '10px',

      '& .MuiGrid-item': {
        '&:nth-of-type(1)': {
          '& .tbSquare': {
            background: '#000'
          }
        },
        '&:nth-of-type(2)': {
          '& .tbSquare': {
            background: '#2E2E2E'
          }
        },
        '&:nth-of-type(3)': {
          '& .tbSquare': {
            background: '#464033'
          }
        },
        '&:nth-of-type(4)': {
          '& .tbSquare': {
            background: '#454545'
          }
        },
        '&:nth-of-type(5)': {
          '& .tbSquare': {
            background: '#4E545C'
          }
        },
        '&:nth-of-type(6)': {
          '& .tbSquare': {
            background: '#5C5C5C'
          }
        },
        '&:nth-of-type(7)': {
          '& .tbSquare': {
            background: '#737373'
          }
        },
        '&:nth-of-type(8)': {
          '& .tbSquare': {
            background: '#7E7C73'
          }
        },
        '&:nth-of-type(9)': {
          '& .tbSquare': {
            background: '#8A8A8A'
          }
        },
        '&:nth-of-type(10)': {
          '& .tbSquare': {
            background: '#3a43416e'
          }
        }
      }
    },

    tbSquare: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '600',
      padding: '10px',
      borderRadius: '3px',
      textAlign: 'center'
    },
    tbSquareRed: {
      background: 'black',
      color: '#fff',
      borderRightWidth: '25px',
      borderRightStyle: 'solid',
      borderImage: 'linear-gradient(to bottom, #7af616, #b5d300, #d6ad00, #e88500, #eb5b12) 1 100%'
    },
    tbSquareYellow: {
      background: 'black',
      color: '#f4f2f2',
      borderRightWidth: '25px',
      borderRightStyle: 'solid',
      borderImage: 'linear-gradient(to bottom, #f6bf16, #f5ac0a, #f39906, #f0860a, #eb7212) 1 100%'
    },
    tbSquareGreen: {
      background: 'black',
      color: '#f4f2f2',
      borderRightWidth: '25px',
      borderRightStyle: 'solid',
      borderImage: 'linear-gradient(to bottom, #52ee0d, #00f16e, #00f2a5, #00f0ce, #12ebe7) 1 100%'
    },
    tbs_heading: {
      fontSize: '13px',
      fontFamily: FontFamily
    },
    tbs_value: {
      fontSize: '2vmax',
      fontFamily: FontFamily
    },
    tbs_status: {
      fontSize: '12px',
      fontFamily: FontFamily
    },

    mediAdviceBox: {
      display: 'flex',
      justifyItems: 'center',
      columnGap: '1vmax',
      padding: '1vmax 2vmax',
      flexWrap: 'wrap'
    },
    mabSquare: {
      border: '1px solid rgba(0, 0, 0, 0.15)',
      padding: '1vmax',
      borderRadius: '3px',
      flex: '1 1 30%'
    },
    mabs_heading: {
      textAlign: 'center',
      lineHeight: '1',
      fontSize: '17px',
      fontWeight: '500'
    },
    mabs_subBox: {},
    mabssb_listBox: {
      border: '1px solid rgba(0, 0, 0, 0.15)',
      padding: '1vmax',
      marginBottom: '1vmax',
      borderRadius: '3px'
    },
    mabssblb_heading: {
      padding: '0 2vmax',
      lineHeight: '1',
      fontSize: '15px',
      fontWeight: '500'
    },
    ul: {
      fontSize: '13px'
    }
  },
  { index: 1 }
);
