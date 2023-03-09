import { makeStyles } from '@mui/styles';
import { ButtonColor, ButtonRadius, ButtonStyles, FontColor, FontFamily, FontStyle } from '../../core/';

export const useAssessmentDetailsAccordionStyles = makeStyles(
  {
    pageContent: {
      padding: '10px 0',
      borderRadius: '1vmax',
    },
    backtoLink: {
      paddingBottom: '10px',
    },
    clientActions: {
      display: 'flex',
      //flexWrap: 'wrap',
      //columnGap: '05px',
      //rowGap: '15px',
      marginTop: '15px',
      justifyContent: 'center',
      alignItems: 'center',
      // maxWidth: '260px',
      // margin: 'auto',
      flexDirection: 'column',
      //padding: '0 37px',
      cursor: 'pointer',
    },
    title: {
      fontSize: '14px',
      // width: 'max-content',
      marginTop: '5px',
      fontWeight: '600',
      textAlign: 'left',
      // opacity: 0.7,
      color: FontColor,
      fontFamily: 'Poppins, sans-serif',
      transition: 'all 0.3s',
      '&:hover': {
        color: '#33B7B8',
      }
    },
    description: {
      fontSize: '14px',
      //width: 'max-content',
      marginTop: '5px',
      fontWeight: '400',
      // opacity: 0.7,
      color: FontColor,
      fontFamily: 'Poppins, sans-serif',
      transition: 'all 0.3s',
      '&:hover': {
        color: '#33B7B8',
      }
    },
    assesmentTitle: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px',
      '@media (max-width: 420px)': {
        display: 'block',
        position: 'relative',
        '& .assesmentBreadcrumb': {
          marginLeft: '25px'
        },
        '& .assesmentLink': {
          position: 'absolute',
          top: '0',
          left: '0'
        }
      },
    },
    sourceTitle: {
      '@media (max-width: 420px)': {
        marginLeft: '25px'
      },
    },
    typeselect: {
      outline: 'none',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '500',
      border: '1px solid #C5CEE0',
      borderRadius: ButtonRadius,
      width: '100%',
      '@media (max-width: 1024px)': {
        //width: '40%',
      },
      '@media (max-width: 499px)': {
        // width: '100%',
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
      marginTop: '28px',
      fontSize: '10px',
      marginBottom: '1px',
      fontFamily: FontFamily
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
    editBtn: {
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
        '16px',
        '20px',
        'none',
        'none'
      ),
    },
    icon: {
      height: '80px',
      width: '80px',
      // height: '44px',
      // width: '44px',
      color: 'rgb(70, 215, 203)',
      // opacity: '0.8'
    },
    clientActionsRow: {
      display: 'flex',
      justifyContent: 'center',
      borderBottom: '1px solid #E4E9F2',
      paddingTop: '8px',
    },
    chevronLeftIcon: {},
    accordionSummary: {
      padding: '0px 16px',
      borderTop: '#8F9BB3 1px solid',
      borderBottom: '#8F9BB3 0px solid',
      background: '#F8F9FC',
      minHeight: 'auto!important',
      // "& [data-testid=ExpandMoreIcon]": {
      //   display: "none",
      // },
      '& .MuiAccordionSummary-expandIconWrapper': {
        color: '#46D7CB'
      },
      '& .MuiAccordionSummary-content': {
        margin: '8px 0'
      }
    },
    expandedAccordion: {
      margin: '0!important',
      '& .MuiAccordionDetails-root': {
        borderTop: '#8F9BB3 1px solid',
        padding: '24px!important'
      },
    },

    titleDate: {
      color: '#222B45',
      '& span': {
        fontSize: '11px',
      }
    },
    subHeading: {
      display: 'flex',
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '18px',
      fontWeight: '600',
    },
    subHeading_client: {
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600',
    },

    userDetailsBox: {
      border: '1px solid #46d7cb',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      padding: '16px',
      borderRadius: '8px',
      background: '#fff',
      columnGap: '15px',
      display: 'flex',
      '@media (max-width: 768px)': {
        alignItems: 'center',
      },
    },
    UserAvatar: {
      height: '40px',
      width: '40px',
      '@media (max-width: 768px)': {
        height: '30px',
        width: '30px',
      },
    },
    userInfo: {
      background: 'transparent !important',
      textAlign: 'start',

      '@media (min-width: 1280px)': {
        marginRight: '60px',
      },
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
        fontWeight: '600',
      },
    },
    userdob: {
      color: '#929CB0',
      fontFamily: FontFamily,
      fontSize: '12px',
      display: 'table-cell',
      '@media (max-width: 1280px)': {
        fontSize: '10px',
      },
      '@media (max-width: 768px)': {
        fontSize: '11px',
      },
    },
    apg_text: {
      color: '#929CB0',
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '400',
    },

    groupsDataBoxPadding: {
      paddingTop: '7vmax',
    },
    commentTitle: {
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '15px',
      fontWeight: '600',
    },
    commentText: {
      fontSize: '14px',
      fontFamily: FontFamily,
      color: 'rgb(146, 156, 176)',
      display: 'flex',
      '@media (max-width: 1280px)': {
        fontSize: '14px',
      },
      '@media (max-width: 768px)': {
        fontSize: '13px',
      },
    },

    groupName: {
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: FontFamily,
      color: FontColor,
      marginRight: '6px',
      '@media (max-width: 1280px)': {
        fontSize: '14px',
      },
      '@media (max-width: 768px)': {
        fontSize: '13px',
      },
    },

    groupHeading: {
      fontSize: '14px',
      fontWeight: '600',
      color: FontColor,
      fontFamily: FontFamily,
      marginBottom: '0px',
    },
    subGroupHeading: {
      fontSize: '12px',
      fontWeight: '500',
      color: FontColor,
      fontFamily: FontFamily,
    },

    groupsDataBox: {
      borderBottom: '1px solid rgb(228, 233, 242)',
      paddingTop: '10px',
      paddingLeft: '10px',
      paddingBottom: '13px',
      '& .apg_SubText_keyStats ': {
        fontSize: '14px',
      },
    },

    col4: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      marginBottom: '50px',
      '&:last-child': {
        marginBottom: '0px',
      }
    },
    cols: {
      maxWidth: '25%',
      flex: '0 0 25%',
      position: 'relative',
      '& .unit': {
        position: 'absolute',
        top: '30px',
        left: '3px',
      },
      '@media (max-width: 940px)': {
        maxWidth: '50%',
        flex: '0 0 50%',
      },
      '@media (max-width: 640px)': {
        maxWidth: '100%',
        flex: '0 0 100%',
        marginBottom: '25px',
        '& .unit': {
          top: '30px',
          fontSize: '12px',
        }
      },
      '@media (max-width: 540px)': {
        '& .unit': {
          top: '20px',
        }
      },
    },
    practitionerAvatar: {
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      '@media (max-width: 480px)': {
        width: '38px',
        height: '38px'
      }
    },
    practitionerName: {
      marginLeft: '6px',
      fontFamily: FontFamily,
      fontSize: '14px'
    },
    practitioner: {
      fontFamily: FontFamily,
      fontSize: '14px',
      color: '#8F9BB3',
      marginLeft: '6px',
      marginBottom: '4px'
    },
  },
  { index: 1 }
);
