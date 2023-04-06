import { makeStyles } from '@mui/styles';

const fontColor = '#222B45';
const fontFamily = 'Poppins';

export const useSmallSquareTilesItemStyles = makeStyles(
  {
    /** Small sqare tiles item makeStyles  **/
    bclmbtg_tilesSubGroup: {},
    bclmbtgtsg_tileItem: {
      position: 'relative',
      cursor: 'pointer',
      padding: '10px 0 0',
      background: '#fff',
      borderRadius: '10px',
      textAlign: 'center',
      height: '162px',
      boxShadow:
      '0px 10px 22px rgb(143 155 179 / 1%), 0px 25px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',
    },
    bclmbtgtsgtI_headerBox: {
      display: 'flex',
      // alignItems: "center",
      // justifyContent: "center",
      position: 'relative',
    },
    noCursor:{
      cursor: 'default'
    },
    bclmbtgtsgtI_lineChartBox: {
      width: '60px',
      margin: 'auto',
    },
    bclmbtgtsgtI_emptyBox: {
      display:'flex',
      justifyContent:'center'
    },
    bclmbtgtsgtI_percentageScoreBox: {
      paddingBottom: '13px',
      margin: '0 auto',
      '& .bodyFatCalipersScoreColor': {
        color: '#F1B44A',
      },
      '& .bodyFatScoreColor': {
        color: '#00B887',
      },
      '& .proteinScoreColor': {
        color: '#F5B614',
      },
      '& .carbsScoreColor': {
        color: '#ED8F5E',
      },
      '& .waterScoreColor': {
        color: '#B72D63',
      },
      '& .bodyFatBodyScanScoreColor': {
        color: '#F1B44A',
      },
      '& .BMIScoreColor': {
        color: '#EC805A',
      },
      '& .weightScoreColor': {
        color: '#F3A05A',
      },
      '& .keyStatRedScore': {
        color: '#EC805A',
      },
      '& .chinScoreColor': {
        color: '#00D68F',
      },
      '& .cheekScoreColor': {
        color: '#00D68F',
      },
      '& .pecScoreColor': {
        color: '#FFAA00',
      },
      '& .midaxScoreColor': {
        color: '#FFAA00',
      },
      '& .supraScoreColor': {
        color: '#00D68F',
      },
      '& .umbilScoreColor': {
        color: '#DB2C66',
      },
      '& .bicepsScoreColor': {
        color: '#FFAA00',
      },
      '& .tricepsScoreColor': {
        color: '#00D68F',
      },
      '& .subscapScoreColor': {
        color: '#00D68F',
      },
      '& .upperThighScoreColor': {
        color: '#00D68F',
      },
      '& .kneeScoreColor': {
        color: '#DB2C66',
      },
      '& .calfScoreColor': {
        color: '#FFAA00',
      },
      '& .quadScoreColor': {
        color: '#FFAA00',
      },
      '& .hamScoreColor': {
        color: '#00D68F',
      },
      '& .neckScoreColor': {
        color: '#00D68F',
      },
      '& .naturalWaistScoreColor': {
        color: '#DB2C66',
      },
      '& .navelScoreColor': {
        color: '#DB2C66',
      },
      '& .hipsScoreColor': {
        color: '#FFAA00',
      },
    },
    finalScore: {
      // fontSize: "14px",
      fontSize: '26px',
      fontWeight: '600',
      lineHeight: '1',

      '@media (max-width: 768px)': {
        // fontSize: "36px",
      },

      '& span': {
        fontSize: '14px',
        fontWeight: '400'
      },
    },
    fromScore: {
      background: '#E4E9F2',
      color: fontColor,
      fontFamily: fontFamily,
      fontSize: '14px',
      fontWeight:'600',
      borderRadius: '14px',
      display: 'initial',
      padding: '2px 10px',
      '& span': {
        fontSize: '11px',
        fontWeight:'400',
      },
    },
    bclmbtgtsgti_heading: {
      margin: 'auto',
      '& p': {
        width: '100px',
        height: '42px',
        fontFamily: fontFamily,
        color: fontColor,
        fontSize: '14px',
        fontWeight: '600',
        marginBottom:'20px'

        // "@media (max-width: 768px)": {
        //   fontSize: "12px",
        // },
      },
    },
    bclmbtgtsgti_shareBox: {
      position: 'absolute',
      right: '5%',
     
    },
    bclmbtgtsgti_pillar: {
      position: 'absolute',
      left: '5%',
      top: '-3px'
    },
    shareIcon: {
      textDecoration: 'none',
      color: '#231F20',

      '& svg': {
        color: '#231F20',
        fontSize: '14px',
      },
    },

    bc_rightSidePictureBox: {
      flex: '1 1 30%',
      padding: '8px 24px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 20px 5px rgba(191, 191, 191, 0.25)',

      '& .bcnhbhb_navigatedLinks_right': {
        '@media (max-width: 1200px)': {
          flexDirection: 'column',
          // marginLeft: "-14px",
        },
      },
    },
    bc_navigatedHeaderBox: {
      alignItems: 'center',
      '@media (max-width: 1366px)': {
        // marginLeft: "-12px"
      },
    },
    bcnhb_headerBox: {},
    bcnhbhb_headerText: {},
    bcnhbhb_text: {
      color: fontColor,
      fontFamily: fontFamily,
      fontSize: '30px',
      fontWeight: '600',
      '@media (max-width: 1366px)': {
        fontSize: '22px',
      },
      '@media (max-width: 1200px)': {
        fontSize: '20px',
      },
      '@media (max-width: 1024px)': {
        fontSize: '18px',
      },
      '@media (max-width: 768px)': {
        fontSize: '16px',
      },
    },
    bcnhbhb_subText: {
      fontFamily: fontFamily,
      color: '#8F9BB3',
      fontSize: '16px',
      fontWeight: '400',
      '@media (max-width: 768px)': {
        fontSize: '10px',
      },
    },
    bcnhbhb_navigatedLinks: {
      '& button': {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        fontFamily: fontFamily,
        color: '#0BAECA',
        '@media (max-width: 768px)': {
          fontSize: '12px',
        },
        '& img': {
          marginRight: '5px',
        },
      },
    },
    bcnhbhbnl_addIcon: {
      '& .measurementIcon': {
        width: '24px',
        '@media (max-width: 1366px)': {
          width: '20px',
        },
        '@media (max-width: 1024px)': {
          width: '18px',
        },
        '@media (max-width: 768px)': {
          width: '14px',
        },
      },
      '& .pictureIcon': {
        width: '18px',
        '@media (max-width: 1366px)': {
          width: '14px',
        },
        '@media (max-width: 1024px)': {
          width: '12px',
        },
        // "@media (max-width: 768px)": {
        //   width: "10px",
        // },
      },
    },
    bcnhbhbnl_compareIcon: {
      '& .measurementIcon': {
        width: '24px',
        '@media (max-width: 1366px)': {
          width: '20px',
        },
        '@media (max-width: 1024px)': {
          width: '18px',
        },
        '@media (max-width: 768px)': {
          width: '14px',
        },
      },
      '& .pictureIcon': {
        width: '18px',
        '@media (max-width: 1366px)': {
          width: '14px',
        },
        '@media (max-width: 1024px)': {
          width: '12px',
        },
        // "@media (max-width: 768px)": {
        //   width: "10px",
        // },
      },
    },

    bcrspb_previewImageBox: {
      textAlign: 'center',
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // border: "1px solid #E4E9F2",
      // borderRadius: "10px",
      // marginTop: "5px",
      position: 'relative',
    },
    bcrspb_previewImage: {
      // height: "386px",
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #E4E9F2',
      borderRadius: '10px',
      marginTop: '5px',
      position: 'relative',

      '& img': {
        borderRadius: '10px',
      },
    },
    closeIconBox: {
      position: 'absolute',
      top: '2%',
      right: '2%',
      textDecoration: 'none',
    },

    bcrspb_pictureBox: {
      marginTop: '10px',
    },
    pb_heading: {},
    bcrspbpb_headerBox: {},
    bcrspbpbhb_heading: {
      fontSize: '16px',
      fontWeight: '500',
      color: fontColor,
      fontFamily: fontFamily,
      textTransform: 'uppercase',
      paddingBottom: '5px',
      '@media (max-width:1280px)': {
        fontSize: '14px',
      },
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },

    /***  Horizontal Progress bar chart       ** */

    BodyCompositionhorizontalProgressBarChart: {},

    bchpbc_polygonArrow: {
      position: 'absolute',
      left: '46%',
      right: '44%',
      bottom: 0,
      // zIndex: 2,
    },
  },
  { index: 1 }
);
