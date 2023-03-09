import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily,
  ButtonRadius,
  FontStyle,
  ButtonStyles,
  DefaulPrimarytColor,
} from '../../core';

export const useAssessmentListStyles = makeStyles(
  {
    assessmentList_content: {},
    buttonLinkBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: '10px',
    },
    client: {
      cursor: 'pointer'
    },
    disabled:{
      cursor: undefined
    },
    addNewAssessmentLink: {
      ...ButtonStyles(
        '5px 0',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '16px',
        '24px',
        'none',
        'none'
      ),
      minWidth: '45px',
      textDecoration: 'none',
      transition: '.3s all',
      '&:hover': {
        background: '#53c0b7',
      },
      '@media (max-width: 768px)': {
        minWidth: '42px',
      },
    },
    deleteIcon:{

    },
    sortIcons: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '3px',
      marginLeft: '6px',
      '& img': {
        // filter:
        //   "invert(89%) sepia(34%) saturate(56%) hue-rotate(181deg) brightness(99%) contrast(91%)",
        cursor: 'pointer'
      },
      '& svg': {
        color: '#C5CEE0',
        cursor: 'pointer'
      },
      '& svg:first-child': {
        marginBottom: '-17px'
      },
      '& .greenIcon': {
        color: '#2CE59B',
        filter: 'invert(26%) sepia(89%) saturate(1583%) hue-rotate(95deg) brightness(96%) contrast(106%)'
        // "invert(40%) sepia(40%) saturate(3461%) hue-rotate(505deg) brightness(114%) contrast(110%)",
      },
      '& .greyIcon': {
        color: '#C5CEE0'
        // filter:
        //   "invert(89%) sepia(34%) saturate(56%) hue-rotate(181deg) brightness(99%) contrast(91%)",
      }
    },
   
    // assesmentListBox: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   color: '#929CB0',
    //   borderRadius: '8px',
    //   justifyContent: 'space-between',
    //   background: '#fff',
    //   marginBottom: '5px',
    //   cursor: 'pointer',
    // },
    assActionLinkBox: {

      cursor: 'pointer',
      '@media (max-width: 768px)': {
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      '@media (min-width: 769px) and (max-width: 974px)': {
        justifyContent: 'flex-end',
        padding: '0px 10px',
      },
      '@media (max-width:640px)': {
        padding: '8px 0',
      },
    },
    modeEditIcon: {
      fontSize: '20px',
      background: 'transparent !important',
      '@media (max-width:768px)': {
        fontSize: '30px',
      },
      '@media (min-width: 769px) and (max-width: 974px)': {
        fontSize: '30px',
      },
      '@media (max-width:640px)': {
        fontSize: '27px',
      },
    },
    noAssessmentBox: {
      textAlign: 'center',
      marginTop: '20px',
      '& p': {
        color: FontColor,
        fontFamily: FontFamily,
        fontSize: '20px',
      },
    },

    // Table styles
    mui_tableContainer: {
      boxShadow: 'none',
      minHeight: 205,
      paddingRight: '5px',
      scrollbarColor: '#3ba2d529 transparent',
      scrollbarWidth: 'thin',

      '@media (max-width:768px)': {
        height: '200px',
      },
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
      '& .MuiTablePagination-selectLabel': {
        '@media (max-width: 768px)': {
          display: 'none',
        },
      },
    },
    tableContainerFixedHeight: {
      height: '205px',
    },
    mui_table: {
      borderSpacing: '0px !important',

      '& th': {
        borderTop: '1.5px solid #33B7B8',
        borderBottom: '1.5px solid #33B7B8',
        borderSpacing: '2px !important',
      },

      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important',
        },
        borderTop: '1.5px solid #2E3A59;',
      },
      '& tr th': {
        textAlign: 'center !important',
        fontSize: '14px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        padding: '8px',
        '& p': {
          fontWeight: '600',
          color: FontColor,
        },

        // '&:not(first-child)': {
        //   '& p': {
        //     fontSize: '14px',
        //     '&:last-child': {
        //       background: '#EDF1F7',
        //       color: FontColor,
        //       fontFamily: FontFamily,
        //       borderRadius: '14px',
        //       fontWeight: '400',
        //       padding: '0 7px',
        //       width: '50px',
        //       margin: 'auto',
        //     },
        //   },
        // },
      },

      '& tfoot td': {
        border: 'none',
        padding: '10px',
      },

      '& tbody tr td': {
        padding: '8px 0px 8px 0px',
        fontSize: '14px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '400',
        '&:not(:first-child)': {
          padding: '8px 8px',
          '& p': {
            fontSize: '14px',
            fontWeight: '500',

            '&:last-child': {
              background: '#E4E9F2',
              color: `${FontColor} !important`,
              fontFamily: FontFamily,
              borderRadius: '14px',
              fontWeight: '500',
              padding: '0 8px',
              // width: '60px',
              // margin: 'auto',
            },
          },
          '&:first-child': {
            '& p': {
              color: FontColor,
            },
          },
          '&:nth-of-type(odd)': {
            '& p': {
              '&:first-child': {
                // color: "#DB2C66",
              },
            },
          },
          '& .greenValue': {
            color: '#00B887',
            fontWeight: '600',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`,
          },
          '& .redValue': {
            color: '#DB2C66',
            fontWeight: '600',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`,
          },
          '& .goalValue': {
            color: `${FontColor} !important`,
            fontWeight: '600 !important',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`,
          },
          '&:nth-of-type(even)': {
            '& p': {
              '&:first-child': {
                // color: "#00B887",
              },
            },
          },
        },
        '& tbody tr td:last-child': {
          width: '60px',
        },
        '&:first-child': {
          '@media (min-width:767px)': {
            position: 'sticky',
          },
        },
      },
    },

    tableBodyRow: {
      color: '#2B2F3B',
      '& .tableBodyCellStatus': {
        borderRadius: '14px',
        fontSize: '10px',
        fontWeight: '600',
        fontFamily: `${FontFamily} !important`,
        fontStyle: FontStyle,
        color: FontColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2px 4px',

        '@media (min-width: 800px) and (max-width:900px)': {
          fontSize: '9px',
        },
        '@media (min-width: 768px) and (max-width: 799px)': {
          fontSize: '8px',
        },
        '@media (max-width:405px)': {
          fontSize: '8px',
        },
      },
      '& .greenDate': {
        background: '#CCFCE3',
      },
      '& .yellowDate': {
        background: '#FFF1C2',
      },
      '& .redDate': {
        background: '#FFD6D9',
      },
    },

    tableBodyCell: {
      fontWeight: '400',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      fontSize: '14px',
      color: '#2B2F3B',
      // textAlign: 'center',
      border: 'none',
      '@media (min-width: 769px)': {
        '&:first-child': {
          position: 'sticky',
          left: 0,
          background: 'white !important',
          textAlign: 'start !important',
        },
      },
    },

    assInfo: {
      background: 'transparent !important',
      // '& :hover': {
      //   color: '#33B7B8',
      // },
    },
    assName: {
      // width: "115px",
      // whiteSpace: "nowrap",
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontFamily: FontFamily,
      color: FontColor,
      fontStyle: FontStyle,
      fontSize: '14px',
      transition: 'all 0.2s ease-out',
      '&:hover': {
        color: '#53c0b7',
      },
      '@media (min-width:1301px) and (max-width:1536px)': {
        width: '160px',
        whiteSpace: 'break-spaces',
      },
      '@media (min-width:1200px) and   (max-width:1300px)': {
        // width: "130px",
        whiteSpace: 'break-spaces',
      },

      '@media (min-width: 768px) and (max-width:768px)': {
        fontSize: '14px !important',
      },
      '@media (max-width:376px)': {
        fontSize: '14px !important',
      },
    },
    headerText: {
      fontSize: '14px !important',
    },
    assessmentText: {
      // cursor: 'pointer',
    },
    paginationBox: {
      position: 'relative',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      bottom: 0,
      '& .MuiTablePagination-toolbar': {
        justifyContent: 'center',
        overflowX: 'hidden',
        minHeight: '25px',
        '& p': {
          fontFamily: FontFamily,
          fontSize: '14px',
        },
        '& .MuiTablePagination-selectLabel': {
          '@media (max-width: 321px)': {
            display: 'none',
          },
        },
        '& .MuiInputBase-root': {
          marginRight: 0,
          marginLeft: 0,
        },
        '&.MuiInputBase-input:focus': {
          backgroundColor: 'transparent !important',
        },
      },
    },
    cb_card: {
      background: '#fff',
      borderRadius: '5px',
      padding: '0.5vmax 2vmax 0.5vmax 2vmax',
      boxShadow: 'rgba(33, 37, 41, 0.05) 0px 0px 0.875rem 0px',
      border: 'none !important',
    },
    actionCell: {
      width: '60px',
    },
    moreBtn: {
      display: 'flex',
      margin: '15px auto 0 auto',
      color: '#46D7CB',
      fontWeight: '600',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    assessmentDate: {
      fontWeight: '400',
      fontSize: '11px!important',
      color: '#8F9BB3!important',
    }
  },
  { index: 1 }
);