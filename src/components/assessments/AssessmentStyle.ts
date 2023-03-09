import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, ButtonColor, ButtonRadius, FontStyle, ButtonStyles } from '../../core/';

export const useAssessmentStyles = makeStyles(
  {
    pageContent: {
      padding: '10px 0',
      borderRadius: '1vmax'
    },
    backtoLink: {
      paddingBottom: '10px'
    },
    dialogPopup: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiDialog-paper': {
        borderRadius: '2vmax',
      },
      '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1',
      },
      '& .slick-slider': {
        alignItems: 'center',
        backgroundColor:'back',
        justifyContent:'center',
        '& iframe':{
          height: '26.7vw !important',
          width: '15vw !important',
          inset:'20px !important',
          scrolling:'no'
        }
      },
      '& .slick-prev:before':{
        color: '#2E3A59'
      },
      '& .slick-next:before': {
        color: '#2E3A59'
      },
      '& .slick-track': {
      },
    },
    bigDialogPopup: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiDialog-paper': {
        borderRadius: '2vmax',
      },
      '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '-1',
      },
      '& .slick-slider': {
        alignItems: 'center',
        backgroundColor:'back',
        justifyContent:'center',
        '& iframe':{
          height: '80vh !important',
          inset:'0px !important'
        }
      },
      '& .slick-prev:before':{
        color: '#2E3A59'
      },
      '& .slick-next:before': {
        color: '#2E3A59'
      },
      '& .slick-track': {
      },
    },
    dialogContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dialogTitle:{
      fontSize: '18px',
      textAlign:'left',
      marginLeft:'24px',
      color: FontColor,
      fontFamily: FontFamily,
      fontWeight: '600',
      //lineHeight: '1',
    },
    chevronLeftIcon: {},
    heading: {
      fontSize: '26px',
      fontWeight: '600',
      color: FontColor,
      fontFamily: FontFamily,
      '@media (max-width: 768px)': {
        fontSize: '20px'
      }
    },
    subHeading: {
      display: 'flex',
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600'
    },
    subHeadingLOA: {
      display: 'flex',
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600',
      marginTop: '30px'
    },
    subHeading_client: {
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600'
    },

    userDetailsBox: {
      border: '1px solid #EDF1F7',
      padding: '16px',
      borderRadius: '8px',
      background: '#fff',
      columnGap: '15px',
      display: 'flex',
      '@media (max-width: 768px)': {
        alignItems: 'center'
      }
    },
    UserAvatar: {
      height: '40px',
      width: '40px',
      '@media (max-width: 768px)': {
        height: '30px',
        width: '30px'
      }
    },
    userInfo: {
      background: 'transparent !important',
      textAlign: 'start',

      '@media (min-width: 1280px)': {
        marginRight: '60px'
      }
    },
    userName: {
      margin: 0,
      padding: 0,
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '500',
      background: 'transparent !important',

      '@media (max-width: 768px)': {
        fontSize: '13px',
        fontWeight: '600'
      }
    },
    userdob: {
      color: '#929CB0',
      fontFamily: FontFamily,
      fontSize: '12px',
      display: 'table-cell',
      '@media (max-width: 1280px)': {
        fontSize: '10px'
      },
      '@media (max-width: 768px)': {
        fontSize: '11px'
      }
    },
    assessmentSelectBox: {
      // padding: "16px",
      // padding: '16px',
      // borderRadius: '8px',
      // background: '#fff',
      '& .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.makeStyles-typeselect-22.css-1vajdim-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':
      {
        border: '1px solid #EDF1F7',
        borderRadius: '8px'
      }
    },
    assessmentSelector: {
      display: 'flex',
      width:'100%',
      justifyContent: 'space-between',
      //columnGap: '16px',
      rowGap: '16px',
      
      '@media (max-width: 499px)': {
        flexDirection: 'column',
      },

      '& .typeSelect': {
        background: '#fff',
      }
    },
    assessmentListBox: {
      padding: '16px',
      borderRadius: '8px',
      background: '#fff',
      marginTop: '16px',
      '& .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.makeStyles-typeselect-22.css-1vajdim-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':
      {
        border: '1px solid #EDF1F7',
        borderRadius: '8px'
      }
    },
    typeselect: {
      outline: 'none',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '10px',
      fontWeight: '500',
      border: '1px solid #C5CEE0',
      borderRadius: ButtonRadius,
      width: '25%',
      '@media (max-width: 1024px)': {
        width: '40%',
      },
      '@media (max-width: 499px)': {
        width: '100%',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
      '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        '&:focus-visible': {
          outline: '1px solid #46D7CB',
          borderRadius: ButtonRadius
        }
      },
      '& :focus': {
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      },
      '& :hover': {
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      },
      '&:before': {
        borderColor: 'white !important',
        boxShadow: 'none',
        border: 'none',
        outline: 'none'
      },
      '&:after': {
        borderColor: 'white !important',
        boxShadow: 'none',
        border: 'none',
        outline: 'none'
      },
      '&:not(.Mui-disabled):hover::before': {
        borderColor: 'white !important',
        boxShadow: 'none',
        border: 'none',
        outline: 'none'
      },
      '&:hover:not(.Mui-disabled):before': {
        borderColor: 'white !important',
        boxShadow: 'none',
        border: 'none',
        outline: 'none'
      },

      // '@media (max-width: 970px)': {
      //   padding: '8px 4px'
      // },
      '@media (max-width: 768px)': {
        fontWeight: '500',
        padding: '0',
        fontSize: '14px'
      }
    },
    smText: {
      fontSize: '12px',
    },
    adornedEnd:{
       marginLeft:'30px'
    },
    selectIcon: {
      // fill: '#46D7CB',
      fill: 'transparent',
      fontSize: '38px',
      stroke: '#ccc',
      strokeDasharray: '14px',
      strokeWidth: '2px',
    },
    selectRoot: {
      color: '#46D7CB'
    },

    disabledLink: {
      pointerEvents: 'none'
    },
    apg_contentBox: {
      border: '1px solid #EDF1F7',
      padding: '16px',
      borderRadius: '8px',
      background: '#fff'
    },
    apg_text: {
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '15px',
      fontWeight: '400'
    },
    apg_SubText: {
      fontSize: '14px',
      textAlign:'left',
     
      color: '#33B7B8',
      fontFamily: FontFamily,
      fontWeight: '400',
      
      //lineHeight: '1',
      // '@media (max-width:768px)': {
      //   paddingBottom: '3.5vmax !important'
      // }
    },
    apg_selectedSubText: {
      fontSize: '14px',
      textAlign:'left',
     
      color: FontColor,
      fontFamily: FontFamily,
      fontWeight: '600',
      
      //lineHeight: '1',
      // '@media (max-width:768px)': {
      //   paddingBottom: '3.5vmax !important'
      // }
    },
    apg_textList: {
      lineHeight: '1'
    },
    apg_textItem: {
      fontSize: '14px',
      color: FontColor,
      fontFamily: FontFamily,
      fontWeight: '400',
      lineHeight: '.1'
    },

    hidden: {
      WebkitLineClamp: 4,
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      display: 'none'
    },
    showMoreHelp: {
      ...ButtonStyles(
        '15px',
        'rgba(71, 215, 203, 0.08)',
        '#46D7CB',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '16px',
        '20px',
        'none',
        'none'
      ),
      width: '100%',
      border: '1px solid #46D7CB',
      '&:hover': {
        background: 'rgba(71, 215, 203, 0.09)',
        boxShadow: 'none'
      }
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    startAssBtn: {
      ...ButtonStyles(
        '15px',
        ButtonColor,
        '#fff',
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
        boxShadow: 'none'
      }
    },

    containerIframe: {
      position: 'relative',
    //  overflow: 'hidden',
      //width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      // '@media (max-width:1280px)': {
      //   // width: '34vmax'
      // }
    },
    responsiveIframe: {
       position: 'relative',
      // top: '0',
      // left: '0',
      // bottom: '0',
      // right: '0',
       width: '100%',
       height: '100%'
    }
  },
  { index: 1 }
);
