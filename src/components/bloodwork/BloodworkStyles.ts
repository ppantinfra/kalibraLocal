import { makeStyles } from '@mui/styles';
import { AppColor, ButtonStyles, FontFamily, ButtonColor, ButtonRadius, FontStyle, FontColor, DefaulPrimarytColor } from '../../core';

export const useBloodworkStyles = makeStyles(
  {
    bloodwork_summary_headings: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      '@media (max-width: 1024px)': {
        flexDirection: 'column',
        rowGap: '16px'
      },
      '@media (max-width: 376px)': {
        '& button p': {
          fontSize: '11px'
        }
      }
    },
    pagegination:{ 
      display:'flex', 
      flexDirection:'row',
      width:'100%'
    },
    pageItem:{ 
      // display:'flex', 
      // flexDirection:'row',
      // width:'100%'
      width:'20px'
    },
    helperText:{
      position: 'absolute', marginTop: '-24px',
      right: '4px',
      fontFamily: FontFamily,
      fontSize: '11px !important',
      color:'#FF3D71 !important'
    },
    updateReferralAuthorityIntro:{
      fontFamily: FontFamily,
      fontSize: '14px',
    },
    testTimeTitle:{
      marginTop:'24px',
      fontFamily: FontFamily,
      fontSize: '10px',
      fontWeight:'500'
    },
    submitBtn: {
      ...ButtonStyles(
        '16px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        ButtonRadius,
        FontFamily,
        FontStyle,
        '500',
        '14px',
        '24px',
        'none',
        'none'
      ),
      width: '99px',
      '&:hover': {
        background: ButtonColor
      }
    },

    bs_buttonBox: {
      '@media (max-width: 640px)': {
        flexWrap: 'wrap',
        rowGap: '8px'
        // '& button': {
        //   flex: 1,
        // }
      }
    },

    tilesContent: {
      background: '#fff',
      padding: '10px',
      borderRadius: '5px',
      boxShadow:
        '0px 56px 22px rgb(143 155 179 / 1%), 0px 32px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',
      // border: "1px solid rgb(235, 91, 18,.155)",
      marginBottom: '1vmax',
      marginTop: '2vmax'
    },
    bloodworkrSection: {
      background: '#fff',
      borderRadius: '5px',
      padding: '10px'
    },
    heading: {
      fontSize: '18px',
      color: '#2B2F3B',
      padding: '1vmax',
      textAlign: 'initial',
      marginBottom: '0',
      fontFamily: FontFamily,
      '@media (max-width: 768px)': {
        fontSize: '15px'
      }
    },
    subHeading: {
      fontSize: '14px',
      color: 'rgba(43 47 59/75%)',
      marginBottom: '2vmax',
      '@media (max-width: 768px)': {
        fontSize: '12px'
      }
    },

    tilesBox: {
      padding: '1vmax 2vmax'
    },

    tbSquare: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: '600',
      padding: '2vmax',
      borderRadius: '3px'
    },
    tbSquareRed: {
      border: `2px solid ${AppColor.bsDanger}`,
      color: AppColor.bsDanger,
      '&:hover': {
        boxShadow: 'rgb(220 53 70 / 70%) 0px 0px 0.5vmax 0px'
      }
    },
    tbSquareYellow: {},
    tbSquareGreen: {
      border: `2px solid ${AppColor.bsSuccess}`,
      color: AppColor.bsSuccess,
      '&:hover': {
        boxShadow: 'rgb(40 167 70 / 70%) 0px 0px 0.4vmax 0px'
      }
    },
    tbs_heading: {},
    tbs_value: {
      fontSize: '4vmax'
    },
    tbs_status: {},

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
    mabssb_listBox: {},
    mabssblb_heading: {
      padding: '0 2vmax',
      lineHeight: '1',
      fontSize: '15px',
      fontWeight: '500',
      fontFamily: FontFamily
    },
    ul: {
      fontSize: '13px'
    },
    buttonsBox: {
      display: 'flex',
      marginBottom: '10px',
      '@media (max-width: 376px)': {
        flexWrap: 'wrap'
      }
    },
    pendingDocMessageBox: {
      display: 'flex',
      width:'100%',
      marginBottom: '16px',
      borderRadius:'10px',
      alignItems:'center',
      backgroundColor:'#CCFCE3',
      padding:'8px'
    },
    pendingDocMesssage: {
      color:'#007D6C',
      fontSize:'11px',
      fontWeight:'600',
      fontFamily: FontFamily
    },
    processedDocMessageBox: {
      display: 'flex',
      width:'100%',
      marginBottom: '16px',
      borderRadius:'10px',
      alignItems:'center',
      backgroundColor:'#FFF1C2',
      padding:'8px'
    },
    processedDocMessage: {
      color:'#B86E00',
      fontSize:'11px',
      fontWeight:'600',
      fontFamily: FontFamily
    },
    uploadButton: {
      ...ButtonStyles(
        '15px',
        '#46D7CB',
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
    reviewButton: {
      ...ButtonStyles(
        '15px',
        AppColor.bsWarning,
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
      marginRight: '20px',
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none'
      }
    },
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: '#2B2F3B',
      textDecoration: 'none'
    },
    backtoClients: {
      display: 'flex',
      fontFamily: FontFamily
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important'
    },

    /***  Upload report page ***/
    upload_report: {
      display: 'flex',
      margin: 'auto',
      height: 400,
      marginLeft: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#8F9BB3',
      borderStyle: 'dashed',
      borderWidth: '0.1em',
      borderRadius: '8px',

      '& p': {
        color: FontColor,
        fontFamily: `${FontFamily} !important`,

        '&:first-child': {
          fontSize: '18px',
          fontWeight: 'bold'
        }
      }
    },
    upload_report_text: {
      width: '435px',
      fontSize: '16px',
      textAlign: 'center',

      '@media (max-width:480px)': {
        fontSize: '14px',
        width: '310px'
      },
      '@media (max-width:376px)': {
        width: '245px'
      }
    },
    uploadAgainBtn: {
      cursor: 'pointer',
      height:'20px',
      marginRight: '12px'
      
    },
    browseBtn: {
      ...ButtonStyles(
        '10px 20px',
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
      cursor: 'pointer'
    },

    /*** submit for analysis page ***/
    submitAnalysisBtnBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems:'center',
      '@media (max-width: 480px)': {
        flexWrap: 'wrap',
        rowGap: '16px',
        justifyContent: 'space-between',
      }
    },
    submit_for_analysis: {
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      columnGap: '20px',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        rowGap: '20px'
      }
    },
    selectedLeftImage: {
      display: 'flex',
      justifyContent: 'center',
      '@media (max-width:600px)': {
        height: 'max-content'
      }
    },
    selectedPreviewImageBox: {
      width: '50%',
      '@media (max-width: 600px)': {
        width: '100%'
      }
    },
    selectedPreviewImage: {
      display: 'flex',
      height: '475px',
      border: '1px solid #C5CEE0',
      margin: '16px'
    },
    anylysisImageListBox: {
      height: '420px',
      display: 'flex',
      alignItems: 'center',
      '@media (max-width: 480px)': {
        '& .MuiStack-root': {
          justifyContent: 'center'
        }
      }
    },
    submitAnalysisBtn: {
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

    /*** review-bloodwork page ***/
    /*  table **/
    column_header_text_red: {
     // color: 'red!important',
      fontSize: '11px',
      fontWeight: '600 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle,

      '@media (max-width: 768px)': {
        fontSize: '16px'
      }
    },
    column_header_text: {
      color: `${FontColor} !important`,
      fontSize: '11px',
      fontWeight: '600 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle,

      '@media (max-width: 768px)': {
        fontSize: '11px'
      }
    },
    add_marker_text: {
      color: `${FontColor} !important`,
      fontSize: '14px',
      marginLeft:'3px',
      marginBottom:'18px',
      fontWeight: '600 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle,

      // '@media (max-width: 768px)': {
      //   fontSize: '16px'
      // }
    },
    column_header_goal: {
      color: `${FontColor} !important`,
      fontSize: '12px !important',
      fontWeight: '400 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle
    },
    noInputBorder: {
      border: 'none'
    },
    menuIcon: {
      transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      color: AppColor.kalibraThemeColor,
      '&:hover': {
        color: ButtonColor,
        transform: 'scale(1.2)'
      }
    },

    // table styles
    mui_paper: {
      boxShadow: 'none'
    },
    mui_tableContainer: {
      boxShadow: 'none',
      overflowY: 'hidden',
      paddingRight: '1px',
      scrollbarColor: '#3ba2d529 transparent',
      scrollbarWidth: 'thin',
      overscrollBehaviorX: 'contain'
    },
    mui_table: {
      borderSpacing: '0px !important',

      '& th': {
        // borderTop: '1.5px solid #33B7B8',
        // borderBottom: '1.5px solid #33B7B8',
        borderSpacing: '2px !important',
        border: 'none'
        // '@media (min-width:768px) and (max-width:1100px)': {
        //   borderTop: '1.5px solid #33B7B8',
        //   borderBottom: '1.5px solid #33B7B8'
        // }
      },

      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important'
        },
        borderTop: '1.5px solid #2E3A59;'
      },
      '& tr th': {
        textAlign: 'center !important',
        fontSize: '12px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        padding: '4px',
        '& p': {
          fontWeight: '600',
          color: FontColor
        }
      },
      '& tr td': {
        textAlign: 'center !important',
        border: 'none !important',
        height:'90px',
        // '@media (min-width:768px) and (max-width:1100px)': {
        //   borderBottom: '1px solid rgba(224, 224, 224, 1) !important'
        // }
      },

      '& tfoot td': {
        border: 'none',
        padding: '10px'
      },

      '& tbody tr td': {
        padding: '10px 0px 5px 10px',
        fontSize: '16px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '400',
        background: 'white',

        '&:not(:first-child)': {
          padding: '10px 15px',

          '& p': {
            fontSize: '14px',
            fontWeight: '600'
          },
          '&:first-child': {
            '& p': {
              color: FontColor
            }
          },
          '&:nth-of-type(odd)': {
            '& p': {
              '&:first-child': {
                // color: "#DB2C66",
              }
            }
          },
          '&:nth-of-type(even)': {
            '& p': {
              '&:first-child': {
                // color: "#00B887",
              }
            }
          },
          '@media (min-width:1024px) and (max-width:1200px)': {
            // boxShadow: '2px 0 5px -2px #888'
            padding: '10px 6px',
          }
        },
        '&:first-child': {
          textAlign: 'left !important',
          '@media (min-width:768px)': {
            position: 'sticky',
            zIndex: '900 !important',
            left: '0'
          },
          '@media (min-width:768px) and (max-width:1100px)': {
            // boxShadow: '2px 0 5px -2px #888'
          }
        }
      }
    },

    mui_add_table: {
      borderSpacing: '0px !important',

      '& th': {
        // borderTop: '1.5px solid #33B7B8',
        // borderBottom: '1.5px solid #33B7B8',
        borderSpacing: '2px !important',
        border: 'none'
        // '@media (min-width:768px) and (max-width:1100px)': {
        //   borderTop: '1.5px solid #33B7B8',
        //   borderBottom: '1.5px solid #33B7B8'
        // }
      },

      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important'
        },
        borderTop: '1.5px solid #2E3A59;'
      },
      '& tr th': {
        textAlign: 'center !important',
        fontSize: '12px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        padding: '4px',
        '& p': {
          fontWeight: '600',
          color: FontColor
        }
      },
      '& tr td': {
        textAlign: 'center !important',
        border: 'none !important',
        height:'90px',
        // '@media (min-width:768px) and (max-width:1100px)': {
        //   borderBottom: '1px solid rgba(224, 224, 224, 1) !important'
        // }
      },

      '& tfoot td': {
        border: 'none',
        padding: '10px'
      },

      '& tbody tr td': {
        padding: '10px 0px 5px 10px',
        fontSize: '16px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '400',
        background: 'white',

        // '&:not(:first-child)': {
        //   padding: '10px 15px',

        //   '& p': {
        //     fontSize: '14px',
        //     fontWeight: '600'
        //   },
        //   '&:first-child': {
        //     '& p': {
        //       color: FontColor
        //     }
        //   },
        //   '&:nth-of-type(odd)': {
        //     '& p': {
        //       '&:first-child': {
        //         // color: "#DB2C66",
        //       }
        //     }
        //   },
        //   '&:nth-of-type(even)': {
        //     '& p': {
        //       '&:first-child': {
        //         // color: "#00B887",
        //       }
        //     }
        //   },
        //   '@media (min-width:1024px) and (max-width:1200px)': {
        //     // boxShadow: '2px 0 5px -2px #888'
        //     padding: '10px 6px',
        //   }
        // },
        // '&:first-child': {
        //   textAlign: 'left !important',
        //   '@media (min-width:768px)': {
        //     position: 'sticky',
        //     zIndex: '900 !important',
        //     left: '0'
        //   },
        //   '@media (min-width:768px) and (max-width:1100px)': {
        //     // boxShadow: '2px 0 5px -2px #888'
        //   }
        // }
      }
    },

    tableHeadCellBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tableHeadFirstCellBox: {
      justifyContent: 'flex-start !important'
      // marginLeft: '18px'
    },

    tableHeadCell: {
      '&:not(:first-child)': {
        // '& .MuiBox-root:first-child': {
        //   marginLeft: '7px'
        // }
      },
      '@media (min-width: 768px)': {
        '&:first-child': {
          position: 'sticky',
          zIndex: '900 !important',
          left: '0',
          
          '@media (min-width:768px) and (max-width:1100px)': {
            // boxShadow: '2px 0 5px -2px #888'
          }
        }
      }
    },
    markerNameTableHeadCell: {
      '@media (max-width:1024px)': {
        minWidth: '320px'
      }
    },

    tableBodyRow: {
       //color: '#2B2F3B',
      //  '& td': {
      //   padding: '10px 0px 5px 10px !important',
      //   backgroundColor:'red !important'
      //  }

    },
    tableBodyCell: {
      fontWeight: '400',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      fontSize: '12px',
      color: '#2B2F3B',
      backgroundColor:'blue !important',
      textAlign: 'center',
      border: 'none',
      '@media (min-width: 769px)': {
        '&:first-child': {
          position: 'sticky',
          zIndex: '900 !important',
          left: '0',
          background: 'white !important',
          textAlign: 'start !important'
        }
      }
    },
    addtableBodyCell: {
      fontWeight: '400',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      fontSize: '12px',
      color: '#2B2F3B',
      backgroundColor:'blue !important',
      textAlign: 'center',
      border: 'none',
      '@media (min-width: 769px)': {
        '&:first-child': {
          position: 'sticky',
          zIndex: '900 !important',
          left: '0',
          background: 'white !important',
          textAlign: 'start !important'
        }
      }
    },

    /* End table **/

    reviewTopText: {
      margin: '16px 0',
      fontSize: '14px',
      color: FontColor,
      lineHeight: '19.6px',
      width: '550px',
      '@media (max-width: 768px)': {
        width: '400px'
      },
      '@media (max-width: 550px)': {
        width: '360px'
      },
      '@media (max-width: 480px)': {
        width: '320px'
      },
      '@media (max-width: 412px)': {
        width: '280px'
      },
      '@media (max-width: 376px)': {
        width: '235px'
      }
    },
    reviewHeadings: {
      '& p': {
        fontWeight: 'bold',
        fontSize: '11px'
      }
    },
    review_bloodwork_row: {
      fontSize: '12px',
      '& input': {
        border: 'none',
        fontSize: '14px',
        height: '32px',
        fontWight:'600',
        padding: '8.5px 8px',
        borderRadius: ButtonRadius,
        FontFamily: FontFamily,
        '@media (max-width:1280px)': {
          fontSize: '14px'
        }
      },
      '& .MuiInputBase-formControl': {
        //borderRadius: '4px',
        border: 'none',
        background: '#F8F9FC'
      },

      '& .Mui-focused': {
         background: '#FFFFFF',
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
      
          outline: '#46D7CB'
        },
        '& input': {
          color: FontColor,
          fontFamily: FontFamily,
          fontWeight: '600',
          fontSize: '14px',

          '@media (max-width:1280px)': {
            fontSize: '14px'
          }
        }
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB'
      },

      '& .MuiTextField-root': {
        // paddingBottom: "15px",
        '@media (max-width:768px)': {
          // paddingBottom: "2vmax",
        },
        '@media (max-width:480px)': {
          // paddingBottom: "3vmax",
        }
      },
      '& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        background: '#F8F9FC',
        border: '1px solid #E4E9F2',
        borderRadius: '8px'
      },
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        // height: "1.5vmax",
        fontSize: '11px',
        background: '#F8F9FC',
        border: '1px solid #E4E9F2',
        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '14.5px 14px'
        }
      },
      '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        fontSize: '11px',

        '@media (max-width:768px)': {
          fontSize: '13px',
          padding: '12.5px 14px'
        }
      },
      '& .css-8g8ymg-MuiInputBase-root-MuiOutlinedInput-root': {
        '& hover': {
          border: '1px solid #E4E9F2'
        }
      },
      '& .MuiInputAdornment-root .MuiTypography-root': {
        fontSize: '11px',
        fontFamily: FontFamily,
        fontWeight: '400',
        marginRight: '-6px'
      }
    },
    notchedOutline: {
      border: 'none'
    },
    invalidInputField: {
      borderRadius: '8px',
      '& .MuiInputBase-formControl': {
        // border: '1px solid #FF3D71 !important',
        // '& .Mui-focused': {
        //   border: 'none !important',
        // }
 
      }
    },
    validInputField: {
      //borderRadius: '8px'
    },
    selectField: {
      height: '32px',
      width: '100px',
      padding: '24px 0',
      background: '#f8f9fc',
    },
    selectUnitField: {
      height: '32px',
      minWidth:'75px',
      padding: '24px 0',
      background: '#f8f9fc',
      '@media (min-width:1024px) and (max-width:1120px)': {
        width:'75px',
      }
    },
    selectHMField: {
      height: '32px',
      minWidth: '60px',
      maxWidth:undefined,
      padding: '24px 0',
      background: '#f8f9fc',
      marginTop:'-3px',
      marginLeft:'-5px',
      '@media (min-width:1120px) and (max-width:1280px)': {
        // boxShadow: '2px 0 5px -2px #888'
        maxWidth:'13.5vw',
      },
      '@media (min-width:1024px) and (max-width:1120px)': {
        // boxShadow: '2px 0 5px -2px #888'
        maxWidth:'13vw',
      }
     // backgroundColor: 'red'

    },
    menuItem: {
      fontFamily: FontFamily,
      fontSize: '14px',
    },
    selectBloodWorkField: {
      height: '30px',
      width: '160px',
      border: 'none',
      fontFamily: FontFamily,
      fontSize: '14px',
      fontWeight:'600',
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderColor: 'rgba(0, 0, 0, 0.23)'
      },
    },
    markerName: {
      fontSize: '14px',
      color: FontColor,
      fontFamily: FontFamily,
     // backgroundColor:'green',
      wordBreak: 'break-word',
      marginLeft:'-6px',
      width: '100px',
      textOverflow: 'ellipsis',
      whiteSpace: 'break-spaces',
      overflow: 'visible',
      fontWeight: '400 !important'
    },
    deleteBtn: {
      display: 'contents'
    },
    validationMsg: {
      color: '#FF3D71',
      wordWrap: 'break-word',
      marginTop: '0px !important',
      position:'absolute',
      display:'-webkit-box',
      marginRight:'30px',
      textAlign:'left',
      lineHeight: 'unset !important',
      fontWeight: '400 !important',
      fontFamily: FontFamily,
      fontSize: '11px !important',
      '@media (max-width: 768px)': {
        fontSize: '10px'
      },
      '@media (max-width: 412px)': {
        fontSize: '8px'
      }
    },
    minmaxMsg: {
      width: '138px',
      fontFamily: FontFamily,
      fontSize: '11px',
      '@media (max-width: 768px)': {
        width: '60px',
        fontSize: '10px'
      },
      '@media (max-width: 412px)': {
        width: '45px',
        fontSize: '8px'
      }
    },
    updateBtn: {
      ...ButtonStyles(
        '10px 20px',
        '#46D7CB',
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
    addBtn: {
      ...ButtonStyles(
        '10px 20px',
        '#46D7CB',
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
      marginRight: '8px',
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none'
      }
    },

    /*** submission-progress page ***/
    submission_progressTextBox: {
      textAlign: 'center',
      '& p:first-child': {
        fontFamily: FontFamily,
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
        '@media (max-width: 480px)': {
          fontSize: '16px'
        }
      },
      '& p:last-child': {
        fontFamily: FontFamily,
        fontSize: '16px',
        textAlign: 'center',
        width: '600px',
        '@media (max-width: 600px)': {
          width: '410px'
        },
        '@media (max-width: 480px)': {
          width: '365px',
          fontSize: '14px'
        },
        '@media (max-width: 376px)': {
          width: '258px',
          fontSize: '12px'
        }
      }
    },

    viewNowBtn: {
      ...ButtonStyles(
        '8px 16px',
        '#46D7CB',
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
      marginTop: '10px',
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none'
      }
    },

    /*** bloodwork-detailed-report-box   ***/
    reportTabList: {
      '& .MuiTabScrollButton-root': {
        width: '25px',
        '& ..MuiSvgIcon-fontSizeSmall': {
          fontSize: '28px'
        }
      },
      '& .MuiTabScrollButton-root.Mui-disabled ': {
        opacity: 0.3
      }
    },
    bottomChipBox: {
      alignItems: 'center',
      marginBottom: '8px',
      padding: '8px',

      '@media (max-width:600px)': {
        flexWrap: 'wrap',
        rowGap: '5px'
      }
    },
    bloodworkDetailedReportBox: {
      backgroundColor: 'white',
      borderRadius: '8px',
      // marginRight: "16px",
      // width: "375px",
      color: '#2B2F3B',
      background: '#fff',
      padding: '10px',
      boxShadow:
        '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)',
      maxWidth: '100%',
      height: '425px',
      fontFamily: FontFamily,
      position: 'relative',
      '@media (max-width: 1500px)': {
        height: '375px'
      },
      '@media (max-width: 1100px)': {
        height: '300px'
      },
      '@media (max-width: 600px)': {
        height: '375px'
      },
      '@media (max-width: 376px)': {
        height: '300px'
      }
    },
    bdreport_header: {
      display: 'flex',
      padding: '16px',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    bdreport_title: {
      // textAlign: "center",
      fontFamily: FontFamily,
      fontSize: '14px',
      fontWeight: 'bold'
    },

    /***  bloodwork-result-summary  ***/
    pageContent: {
      padding: '5px 0'
    },

    result_summary_contents: {
      // boxShadow:
      //   '0px 56px 22px rgb(143 155 179 / 1%), 0px 32px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',

      borderRadius: '8px',
      background: '#fff',
      padding: '10px 15px',
      marginBottom: '24px',
      '&:before': {
        backgroundColor: 'transparent !important'
      }
    },
    result_summary_accordion: {
      margin: '16px 0',
      boxShadow: 'none',
      '& [data-testid=ExpandMoreIcon]': {
        fontSize: '30px',
        color: '#46D7CB'
      },
      '&:before': {
        backgroundColor: 'transparent !important'
      },
      '& [aria-expanded=true]': {
        minHeight: 'auto'
      },
      '& .MuiAccordionSummary-content': {
        justifyContent: 'space-between'
        // width: 'calc(100%-30px)',
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: '12px 0'
      }
    },
    accordionSubTitle: {
      width: 'calc(100% - 30px)'
    },
    totalScoreText: {
      '@media (max-width: 950px)': {
        width: '47%'
      },
      '@media (max-width: 640px)': {
        width: '44%'
      },
      '@media (max-width: 500px)': {
        width: '44%',
        paddingLeft: '30px'
      },
      '@media (min-width: 1024px)': {
        width: '52%',
        paddingLeft: '10px'
      },
      '@media (min-width: 1280px)': {
        width: '53%'
        // paddingLeft: '10px',
      },
      '@media (min-width: 1600px)': {
        width: '52%'
      }
    },
    accordionSummary: {
      backgroundColor: '#F8F9FC',
      borderTop: 'rgba(0, 0, 0, 0.3) 1px solid',
      borderBottom: 'rgba(0, 0, 0, 0.3) 1px solid',
      '& p': {
        fontWeight: 'bold',
        fontSize: '15px',
        fontFamily: FontFamily,
        '@media (max-width: 400px)': {
          fontSize: '13px'
        }
      }
    },
    accordionDetails: {
      padding: '8px 0'
    },
    resultSummaryItemBox: {
      padding: '16px',
      alignItems: 'center',
      '&:not(:last-child)': {
        borderBottom: 'rgba(0, 0, 0, 0.12) 1px solid'
      },
      '&:last-child': {
        paddingBottom: '0'
      },
      '& > div': {
        '&:first-child': {
          '@media (max-width: 480px)': {
            width: '150px'
          },
          '& p': {
            '@media (max-width: 480px)': {
              width: '60px',
              whiteSpace: 'break-spaces',
              textOverflow: 'ellipsis',
              overflow: 'visisble'
            }
          }
        }
      },

      '& .MuiStack-root': {
        '& p': {
          fontFamily: FontFamily,
          fontSize: '13px',

          '@media (max-width: 768px)': {
            fontSize: '11px'
          }
        }
      }
    },
    tiltleText: {
      '&:last-child': {
        textAlign: 'end !important',
        '@media (min-width: 1280px)': {}
      }
    },
    document: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      //width:'100%',
      justifyContent:'center',
      //overflow: 'scroll',
      '& .react-pdf__Page': {
        // boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        // margin: '1em',
        flexDirection: 'row',
        border: '1px solid rgb(0 0 0 / 30%)',
        // borderRadius: '8px',
        '& .react-pdf__Page__canvas': {
          maxWidth: '100%',
          height: 'auto !important'
        }
      }
    },
    // style={{ border: selectedPageNumber === index + 1 ? '1.5px solid #33B7B8' : '0.5px solid #C5CEE0' }}
    selectedPage: {
      border: '1.5px solid #33B7B8 !important',
      // marginLeft: '1em',
      // marginRight: '1em',
      flexDirection: 'row',
      '& .react-pdf__Page__canvas': {
        width: '50px',
        height: '75px'
      }
    },
    previewDocument: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      rowGap: '16px',
      columnGap: '16px',
      flexWrap: 'wrap',
      '& .react-pdf__Page': {
        border: '0.5px solid #C5CEE0',
        // marginLeft: '1em',
        // marginRight: '1em',
        flexDirection: 'row',
        '& .react-pdf__Page__canvas': {
          width: '50px',
          height: '75px'
        }
      },
     

      '& button': {
        padding: 0,
        minWidth: 'auto'
      }
    }
  },
  { index: 1 }
);
