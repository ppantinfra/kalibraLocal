import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  ButtonColor,
  ButtonRadius,
  FontStyle,
  ButtonStyles,
} from '../../../core';

export const useBodyCompositionScreenStyles = makeStyles(
  {
    _container: {
      '& .MuiTabPanel-root.css-13xfq8m-MuiTabPanel-root': {
        padding: '24px 0',
      },
    },
    _wrapper: {
      overflowX: 'hidden',
    },
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: '#2B2F3B',
      textDecoration: 'none',
    },
    backtoClients: {
      display: 'flex',
      fontFamily: FontFamily,
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important',
    },

    heading: {
      padding: '10px 0',
      '& p': {
        fontSize: '30px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        '@media (max-width:1367px)': {
          fontSize: '26px',
        },
        '@media (max-width: 768px)': {
          fontSize: '15px',
        },
      },
    },

    keyName: {
      padding: '8px 15px !important',
      // borderTop: '1px solid #8F9BB3 !important',
      // borderBottom: '1px solid #8F9BB3'
    },

    bodyComposition: {},
    bc_userDetailsBox: {
      marginBottom: '20px',
      textAlign: 'start',
      background: '#fff',
      borderRadius: '10px',
      padding: '8px 24px',
      boxShadow: '0px 0px 20px 5px rgba(191, 191, 191, 0.25)',
    },
    mui_grid: {},
    ud: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ud_subBox: {},
    ud_Text: {
      color: '#8F9BB3',
      fontWeight: '400',
      fontSize: '14px',
      '@media (max-width: 840px)': {
        fontSize: '12px',
      },
    },
    ud_Value: {
      fontWeight: '400',
      fontSize: '18px',
      color: FontColor,
      fontFamily: FontFamily,

      '@media (max-width: 840px)': {
        fontSize: '14px',
      },
    },
    bc_contents: {
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 20px 5px rgba(191, 191, 191, 0.25)',
    },

    /************** Body Comp Main Screen ******/
    bc_mainBox: {
      // display: "flex",
      // flexWrap: "nowrap",
      // columnGap: "20px",
    },
    bc_leftMeasurementBox: {
      // flex: "1 1 70%",
    },
    bclmb_contents: {},
    bclmb_tiles_group: {},
    bclmbtg_headingBox: {
      marginBottom: '8px'
    },
    bclmbtghb_headingText: {
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '22px',
      fontWeight: '600',

      '@media (max-width: 768px)': {
        fontSize: '18px',
      },
    },
    bclmbtg_tilesSubGroup: {},
    bclmbtgtsg_tileItem: {
      position: 'relative',
      cursor: 'pointer',
      padding: '10px 0 0',
      background: '#fff',
      borderRadius: '10px',
      textAlign: 'center',
      height: '198px',
      boxShadow:
        '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)',
    },
    bclmbtgtsgtI_headerBox: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: "center",
      position: 'relative',
    },

    bclmbtgtsgtI_lineChartBox: {
      width: '100px',
      margin: 'auto',
    },
    bclmbtgtsgtI_percentageScoreBox: {
      paddingBottom: '17px',
      margin: '0 auto',
      '& .bodyFatCalipersScoreColor': {
        color: '#F1B44A',
      },
      '& .bodyFatScoreColor': {
        color: '#00B887',
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
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '1',

      '@media (max-width: 768px)': {
        fontSize: '36px',
      },

      '& span': {
        fontSize: '20px',
      },
    },
    fromScore: {
      background: '#E4E9F2',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '12px',
      borderRadius: '14px',
      display: 'initial',
      padding: '2px 10px',
      '& span': {
        fontSize: '8px',
      },
    },
    bclmbtgtsgti_heading: {
      margin: 'auto',
      '& p': {
        width: '100px',
        height: '42px',
        fontFamily: FontFamily,
        color: FontColor,
        fontSize: '14px',

        // "@media (max-width: 768px)": {
        //   fontSize: "12px",
        // },
      },
    },
    bclmbtgtsgti_shareBox: {
      position: 'absolute',
      right: '5%',
    },
    shareIcon: {
      textDecoration: 'none',
      color: '#231F20',

      '& svg': {
        color: '#231F20',
        fontSize: '14px',
      },
    },
    enableLink: {
      filter: 'invert(1)',
      cursor: 'pointer'
    },
    disableLink: {
      filter: 'none',
      cursor: 'not-allowed'
    },

    bc_rightSidePictureBox: {
      flex: '1 1 30%',
      padding: '8px 24px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0px 20px 5px rgba(191, 191, 191, 0.25)',

      '& .bcnhbhb_navigatedLinks_right': {
        '@media (max-width: 1280px)': {
          flexDirection: 'column',
          alignItems: 'baseline',
          marginRight: '0',
          marginLeft: 'auto',
          // paddingLeft: "40px",
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
      color: FontColor,
      fontFamily: FontFamily,
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
      fontFamily: FontFamily,
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
        fontFamily: FontFamily,
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
      // display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      //  border: "1px solid #E4E9F2",
      borderRadius: '10px',
      marginTop: '5px',
      position: 'relative',
      '@media (max-width:768px)': {
        '&> img': {
          height: '20vh',
        },
      },
      '@media (max-width:640px)': {
        '&>img': {
          width: '18vh',
        },
      },
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
      color: FontColor,
      fontFamily: FontFamily,
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
      '& img': {
        display: 'initial !important',
      }
    },

    /******  Measurements Drawer Styles  *******/
    measurementDrawer: {
      '& .MuiDrawer-paper': {
        backgroundColor: '#fff !important',
      },

      '& .MuiDrawer-modal': {
        zIndex: '1300 !important',
      },
    },

    /****** Compare Measurement Styles  *******/

    bodyComp_measurements: {},
    bcm_headerContent: {
      padding: '8px 12px',
    },
    bcm_headerBox: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '5px',
    },
    bcmhb_heading: {
      fontFamily: FontFamily,
      color: FontColor,
      fontSize: '32px',
      fontWeight: '600',

      '@media (max-width:1367px)': {
        fontSize: '22px',
      },
      '@media (max-width:768px)': {
        fontSize: '18px',
      },
    },
    bcmhb_subHeading: {
      fontFamily: FontFamily,
      color: FontColor,
      fontSize: '18px',
      fontWeight: '400',
      padding: '5px 10px',
      '@media (max-width:1367px)': {
        fontSize: '14px',
      },
      '@media (max-width:1200px)': {
        fontSize: '11px',
      },
    },

    /*** measurement table list *******/
    rangeDateBox: {
      display: 'flex',
      columnGap: '8px',
      paddingLeft: '20px',
      fontSize: '14px',
      '& .disabledLeftArrow': {
        opacity: 0.2,
        pointerEvents: 'none',
      },
      '& .disabledLink': {
        opacity: 0.2,
        color: FontColor,
        pointerEvents: 'none',
      },
      '& .disabledRightArrow': {
        opacity: 0.2,
        pointerEvents: 'none',
      },
    },
    arrowIcon: {
      cursor: 'pointer',
      width: '30px',
    },
    link: {
      cursor: 'pointer',
      // width: '30px'
    },
    tableContainer_measurement: {
      // overflowX: "hidden",
      boxShadow: 'none',
      padding: '8px 20px',
      scrollbarColor: '#6b6b6b #2b2b2b',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '8px',
        height: '8px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '8px',
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: '#3ba2d529',
        minHeight: 24,
        boxShadow: 'inset 1px 0px 5px #bdbdbd',
      },
      '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: '#959595',
      },
    },
    tcm_table: {
      // "&:nth-of-type(2n+1)": {
      //   "& tbody tr>td": {
      //     background: "#E4E9F2",
      //   },
      // },
      // "&:nth-child(even)": {
      //   "& tbody tr>td": {
      //     background: "#F1F3F7",
      //   },
      // },

      '& .ct_tableBody': {
        '&:nth-of-type(2n+1)': {
          '& .ct_tableRow': {
            '& td:first-child': {
              background: '#E4E9F2 !important',
            },
          },
        },
        '&:nth-of-type(n+1)': {
          '& .ct_tableRow': {
            '& td:first-child': {
              background: '#F1F3F7 !important',
              width: '25%'
            },
          },
        },
        // "& .ct_tableRow": {
        //   "&:first-child td":{
        //     background: "#E4E9F2",
        //   },
        //   "& td:first-child": {
        //     background: "#E4E9F2 !important",
        //   }
        // }
      },

      '& tbody tr:first-child': {
        borderTop: 0,
        '& td': {
          fontWeight: '600',
          // background: "#E4E9F2",
        },
      },

      borderBottom: '1.5px solid #2E3A59',

      '&:first-child thead': {
        // borderTop: '1.5px solid #0BAECA',
        // borderBottom: '1.5px solid #0BAECA',
        '& .slick-slider': {
          padding: '0 20px',
        },
        '& .slick-next': {
          right: '0 !important',
        },
        '&.slick-prev ': {
          left: '0 !important',
        },
      },
      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important',
          // borderTop: "1.5px solid #2E3A59",
        },
        // borderTop: "1.5px solid #2E3A59",
      },
      '& tr th': {
        textAlign: 'center !important',
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#222B45',
        fontWeight: '600',
        padding: '10px',
        '@media (max-width:1280px)': {
          fontSize: '14px',
        },
      },
      // "& tr td": {
      //   textAlign: "center !important",
      // },
      '& tbody': {
        '& tr': {
          '& td:first-child': {
            textAlign: 'left !important',
            // border: 'none',
            // borderBottom: "1px solid rgba(224, 224, 224, 1)",
            // borderTop: "1px solid rgba(224, 224, 224, 1)",
          },
          // borderTop: "1px solid rgba(224, 224, 224, 1)",
          '&:not(:last-child)': {
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
          },

          '& .slick-slider': {
            '& td': {
              textAlign: 'center !important',
            },
          },
        },
      },

      '& tbody tr td': {
        padding: '2px 16px',
        fontSize: '14px',
        fontFamily: 'Poppins',
        color: '#222B45',

        '&:not(:first-child)': {
          textAlign: 'center !important',
        },
      },
    },

    /*    Custom table with header slider     */
    customTable: {},
    ct_tableRow: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cttr_tableCell: {},

    /***** Add measurement Styles ******/

    addMeasurementForm: {
      background: '#fff',
      padding: '8px 20px',

      // "&:last-child": {
      borderRadius: '0 0 10px 10px',
      // }
    },
    formContent: {
      display: 'flex',
      flexDirection: 'column',
      '& input': {
        fontSize: '16px',

        '@media (max-width:1280px)': {
          fontSize: '14px',
        },
      },

      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB',
        },
        '& input': {
          color: FontColor,
          fontFamily: FontFamily,
          fontWeight: '600',
          fontSize: '16px',
          '@media (max-width:1280px)': {
            fontSize: '14px',
          },
        },
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB',
      },

      '& .MuiTextField-root': {
        // paddingBottom: "15px",
        '@media (max-width:768px)': {
          // paddingBottom: "2vmax",
        },
        '@media (max-width:480px)': {
          // paddingBottom: "3vmax",
        },
      },
      '& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        background: '#F8F9FC',
        border: '1px solid #E4E9F2',
        borderRadius: '8px',
      },
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        // height: "1.5vmax",
        fontSize: '15px',
        background: '#F8F9FC',
        border: '1px solid #E4E9F2',
        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '14.5px 14px',
        },
      },
      '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        fontSize: '15px',

        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '12.5px 14px',
        },
      },
      '& .css-8g8ymg-MuiInputBase-root-MuiOutlinedInput-root': {
        '& hover': {
          border: '1px solid #E4E9F2',
        },
      },
      // radio checked color
      '& .css-pbe73e-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
        color: '#46D7CB',
      },
    },
    formGroupBox: {
      '&:not(:first-child)': {
        paddingTop: '8px',
      },
    },
    formHeading: {
      fontSize: '18px',
      fontWeight: '500',
      color: FontColor,
      fontFamily: FontFamily,
      borderBottom: '1px solid #C5CEE0',
      textTransform: 'uppercase',
      paddingBottom: '5px',
      '@media (max-width:1280px)': {
        fontSize: '16px',
      },
    },
    formGroup: {
      display: 'flex',
      columnGap: '4vmax',
      '& .MuiInputBase-formControl': {
        background: '#F8F9FC',
        border: '1px solid #E4E9F2',
        '@media (max-width: 768px)': {
          padding: '3.5px 14px',
        },
      },
    },
    measurementsFields: {
      // flexWrap: "wrap",
      // "& .mf_itemBox": {
      //   width: "30%",
      //   "@media (max-width:480px)": {
      //     width: "50%",
      //   },
      // },
    },
    mf_fieldBox: {
      display: 'flex',
      columnGap: '20px',
      // alignItems: "center",
      paddingBottom: '10px',
      flexWrap: 'nowrap',
      '& .MuiBox-root': {
        flex: '1',
      },
    },
    inputLabel: {
      color: FontColor,
      fontSize: '16px',
      paddingBottom: '5px',
      fontFamily: FontFamily,
      fontWeight: '400',
      textAlign: 'left',
      overflow: 'visible',
      whiteSpace: 'normal',
      textOverflow: 'initial',
      '@media (max-width: 1280px)': {
        fontSize: '14px',
      },
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
      padding: '8px 0',
    },
    saveMeasurementsBtn: {
      ...ButtonStyles(
        '15px',
        ButtonColor,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '15px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none',
      },

      '@media (max-width: 768px)': {
        fontSize: '14px',
        padding: '12px',
      },
    },
    notchedOutline: {
      border: 'none',
    },
    redStar: {
      color: '#FF3D71',
    },
    yellowStar: {
      color: '#FFAA00',
    },

    starValidation: {
      fontSize: '12px',
    },

    /****      Add Pictures styles          *****/

    amf_pictureBox: {
      // display: "flex",
      // flexWrap: "wrap",
      // columnGap: "30px",
      // "& .amfpb_item": {
      //   flex: "1 1 30%",
      //   paddingBottom: "10px",
      //   "@media (max-width: 1280px)": {
      //     flex: "1 1 40%",
      //   },
      // },
    },
    frontPictureBox: {},
    sidePictureBox: {},
    backPictureBox: {},
    amfpbi_headerBox: {},
    pictureHeading: {
      fontSize: '18px',
      fontWeight: '500',
      color: FontColor,
      fontFamily: FontFamily,
      textTransform: 'uppercase',
      paddingBottom: '5px',
      '@media (max-width:1280px)': {
        fontSize: '16px',
      },
      '@media (max-width:768px)': {
        fontSize: '14px',
      },
    },
    pictureFooter: {
      fontSize: '16px',
      fontWeight: '500',
      color: FontColor,
      fontFamily: FontFamily,
      textTransform: 'uppercase',
      paddingBottom: '5px',
      textAlign: 'center',
      '@media (max-width:1280px)': {
        fontSize: '14px',
      },
    },
    amfpbi_pictureBox: {
      border: '4px dashed #E4E9F2',
      borderRadius: '10px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '386px',

      '@media (max-width: 934px)': {
        height: '300px',
      },
      '@media (max-width: 640px)': {
        height: '245px',
      },
    },
    amfbpipb_previewImage: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      // alignItems: "center",
      height: '386px',
      // width: "386px",
      // padding: "10px",
      '@media (max-width: 934px)': {
        height: '300px',
      },

      '& img': {
        borderRadius: '10px',
      },
    },

    uploaderBox: {},
    ub_imgBox: {},
    ub_dragAndDropTextBox: {},
    ub_dragAndDropText: {
      width: '265px',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',

      '@media (max-width: 768px)': {
        width: '245px',
      },
      '@media (max-width: 550px)': {
        width: '175px',
      },
    },

    /****      Compare Pictures styles          *****/
    comparePicture: {},
    cp_content: {
      display: 'flex',
      columnGap: '20px',
      padding: '8px 20px',
      flexWrap: 'nowrap',
      '& .cpc_leftImageBox': {
        '& .cpc_left_dateBox': {
          // paddingBottom: "8.5px",
          height: '39px',
        },
      },
      '& .cpc_rightImageBox': {},
    },
    cpc_imagesBox: {
      flex: 1,
    },
    cpcib_dateBox: {
      display: 'flex',
      columnGap: '20px',
      // flexWrap: "nowrap",
      // width: "50%",
      alignItems: 'center',
    },
    cpcibdb_subBox: {
      // flex: "1",
    },
    cpclipdb_dateText: {
      fontFamily: FontFamily,
      color: FontColor,
      fontSize: '20px',
      fontWeight: '600 !important',

      '@media (max-width: 768px)': {
        fontSize: '16px',
      },
    },
    cpclipdb_dateValue: {
      color: '#8F9BB3 !important',
      fontSize: '16px',
      fontWeight: '400',
      '@media (max-width: 768px)': {
        fontSize: '14px',
      },
    },

    selectControl: {
      background: '#fff',
      padding: '0 10px',
      border: '1px solid #C5CEE0',
      borderRadius: '6px',
      fontSize: '14px',
      color: FontColor,
      fontFamily: FontFamily,

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    cpcib_pictureBox: {
      marginTop: '10px',
    },
    cpcibpb_headerBox: {},
    cpcibpb_heading: {
      fontSize: '16px',
      fontWeight: '500',
      color: FontColor,
      fontFamily: FontFamily,
      textTransform: 'uppercase',
      paddingBottom: '5px',
      '@media (max-width:1280px)': {
        fontSize: '14px',
      },
      '@media (max-width:768px)': {
        fontSize: '12px',
      },
    },
    cpcibpb_previewImageBox: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #E4E9F2',
      borderRadius: '10px',
      marginTop: '5px',
      '& canvas': {
        borderRadius: '10px',
      },
      '& img': {
        borderRadius: '10px',
        '@media (max-width:640px)': {
          height: '20vh',
        },
      },
    },
    cpcibpb_previewImage: {
      height: '386px',
      '@media (max-width:980px)': {
        height: '374px',
      },

      '& img': {
        borderRadius: '10px',
      },
    },
    noMeasurementBox: {
      textAlign: 'center',
      marginTop: '20px',
      '& p': {
        color: FontColor,
        fontFamily: FontFamily,
        fontSize: '20px',
      },
    },
  },
  { index: 1 }
);
