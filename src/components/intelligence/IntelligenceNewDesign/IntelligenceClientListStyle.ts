import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonColor, DefaulPrimarytColor, AppColor } from '../../../core';
// import plusIconGreen from '../../assets/images/plusIcon-green.svg';

export const useIntelligenceClientListStyles = makeStyles(
  {
    column_header_text: {
      color: `${FontColor} !important`,
      fontSize: '12px !important',
      fontWeight: '600 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle
    },
    tableCellNoBorder: {
      
      '& th': {
        border: '0 none !important',
      },
      '& p': {
        backgroundColor: 'transparent !important',
      }
    },
    tableBodyCustom: {
      '& td': {
        borderBottom:'1.5px solid #e2e6f1',
        padding:'10px 15px !important',
        borderLeft: 0,
        borderRight: 0
      },
      '& tr:last-child td': {
        borderBottom:0
      }
    },
    
    lastColumnData: {
      '& p': {
        backgroundColor: 'transparent !important',
      },
      '& td': {
        border: '0 none !important'
      }
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
      // color: AppColor.kalibraThemeColor,
      color: '#8F9BB3',
      '&:hover': {
        color: ButtonColor,
        transform: 'scale(1.2)'
        // background: `url(${plusIconGreen})`
      }
    },

    // table styles
    mui_paper: {
      boxShadow: 'none'
    },
    mui_tableContainer: {
      boxShadow: 'none',
      maxHeight: '100%',
      height: '100%',
      overflowY: 'hidden',
      paddingRight: '1px',
      scrollbarColor: '#3ba2d529 transparent',
      scrollbarWidth: 'thin',
      overscrollBehaviorX: 'contain',

      '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '8px',
        height: '8px'
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '8px',
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: '#3ba2d529',
        minHeight: 24,
        boxShadow: 'inset 1px 0px 5px #bdbdbd'
      },
      '&::-webkit-scrollbar-thumb:focus': {
        backgroundColor: '#959595'
      }
    },
    mui_table: {
      borderSpacing: '0px !important',

      '& th': {
        borderTop: '0px solid #33B7B8',
        borderBottom: '1.5px solid #e2e6f1',
        borderSpacing: '2px !important'
      },

      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important'
        },
        borderTop: '1.5px solid #2E3A59;'
      },
      '& tr th': {
        textAlign: 'center ',
        fontSize: '12px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        padding: '4px',
        '& p': {
          fontWeight: '600',
          color: FontColor
        },

        '&:not(first-child)': {
          '& p': {
            fontSize: '12px',
            '&:last-child': {
              background: '#EDF1F7',
              color: FontColor,
              fontFamily: FontFamily,
              borderRadius: '12px',
              fontWeight: '400',
              padding: '0 7px',
              width: '50px',
              margin: 'auto'
            }
          }
        }
      },

      '& tr td': {
        textAlign: 'center '
      },

      '& tfoot td': {
        border: 'none',
        padding: '10px'
      },

      '& tbody tr td': {
        padding: '10px 0px 5px 10px',
        fontSize: '12px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '400',
        // opacity: ".8",
        background: 'white',

        '&:not(:first-child)': {
          padding: '10px 15px',
          '& p': {
            fontSize: '12px',
            fontWeight: '500',

            '&:last-child': {
              background: '#E4E9F2',
              color: `${FontColor} !important`,
              fontFamily: FontFamily,
              borderRadius: '12px',
              fontWeight: '500',
              padding: '0 7px',
              width: '60px',
              margin: 'auto'
            }
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
          '& .greenValue': {
            color: '#00B887',
            fontWeight: '600',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`
          },
          '& .redValue': {
            color: '#DB2C66',
            fontWeight: '600',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`
          },
          '& .blackValue': {
            color: '#333333',
            fontWeight: '600',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`
          },
          '& .goalValue': {
            color: `${FontColor} !important`,
            fontWeight: '600 !important',
            fontSize: 12,
            fontFamily: `${FontFamily} !important`
          },
          '&:nth-of-type(even)': {
            '& p': {
              '&:first-child': {
                // color: "#00B887",
              }
            }
          }
        },
        '&:first-child': {
          '@media (min-width:768px)': {
            position: 'sticky',
            zIndex: '900 !important',
            left: '0'
          },
          '@media (min-width:768px) and (max-width:1100px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        }
      }
    },

    mui_table_inactiveList: {
      '& tbody tr td': {
        border: 'none',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        '&:not(:first-child) p:last-child': {
          color: `${DefaulPrimarytColor.primary600green} !important`
        }
      },

      '& .clientNameTableHeadCell': {
        '& > div': {
          justifyContent: 'left !important',
          marginLeft: '50px'
        }
      }
    },
    mui_table_assessmentList: {
      '& tbody tr td': {
        border: 'none',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        '& p': {
          fontWeight: '400 !important'
        },
        '&:first-child': {
          boxShadow: 'none',
          '@media (min-width:768px) and (max-width: 876px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        }
      },
      '& thead tr th': {
        '&:first-child': {
          boxShadow: 'none',
          '@media (min-width: 768px) and (max-width: 876px)': {
            position: 'sticky',
            zIndex: '900 !important',
            left: '0',
            textAlign: 'start'
          },
          '@media (min-width:768px) and (max-width: 876px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        }
      }
    },
    assessmentLink: {
      textDecoration: 'none',
      cursor: 'pointer'
    },

    assessments: {
      '& p': {
        background: 'transparent !important',
        width: 'unset !important'
      }
    },
    completedOn: {
      '& p': {
        background: 'transparent !important',
        width: 'unset !important',
        color: `${FontColor} !important`
      }
    },
    tableHeading: {
      '& p': {
        background: 'transparent !important',
        width: 'unset !important'
      }
    },

    /*** Switch status    ***/
    activeStatus: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: '40px',

      '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#46D7CB',
        height: '16px',
        borderRadius: '100px',
        opacity: 1
      },

      '& .MuiSwitch-track': {
        background: 'rgba(143, 155, 179, 0.16)',
        height: '16px',
        // width: '16px',
        borderRadius: '100px',
        opacity: 1
      },
      '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
        marginTop: '5px',
        marginLeft: '2px'
      },

      '& .MuiSwitch-thumb': {
        color: '#fff',
        height: '12px',
        width: '12px',
        marginTop: '5px',
        marginLeft: '7px'
      },
      '& .Mui-checked': {
        '& svg': {
          color: DefaulPrimarytColor.primary500green
        },
        color: DefaulPrimarytColor.primary500green
      }
    },
    reinviteLink: {
      color: DefaulPrimarytColor.primary600green,
      fontSize: '11px',
      fontFamily: FontFamily,
      textDecoration: 'none'
    },
    viewActionLink: {
      color: DefaulPrimarytColor.primary600green,
      fontSize: '14px',
      fontFamily: FontFamily,
      textDecoration: 'none'
    },

    tableHeadCellBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .clientNameCenter': {}
    },
    tableHeadFirstCellBox: {
      justifyContent: 'center !important',
      marginLeft: '18px'
    },
    clientName: {
      fontSize: '16px',
      color: FontColor
    },
    emptyStar: {
      color: '#faaf00'
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
    tableHeadCell: {
      '&:not(:first-child)': {
        '& .MuiBox-root:first-child': {
          marginLeft: '7px'
        }
      },
      '@media (min-width: 768px)': {
        '&:first-child': {
          position: 'sticky',
          zIndex: '900 !important',
          left: '0',
          textAlign: 'start',
          '@media (min-width:768px) and (max-width:1100px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        }
      }
    },
    clientNameTableHeadCell: {
      '@media (max-width:1024px)': {
        minWidth: '320px'
      }
    },
    manageClientNameTableHeadCell: {
      minWidth: '320px',
      boxShadow: '2px 0 5px -2px #888'
    },
    manageClientNameTableBodyCell: {
      boxShadow: '2px 0 5px -2px #888'
    },
    tableBodyRow: {
      color: '#2B2F3B',
      '& .tableBodyCellStatus': {
        borderRadius: '14px',
        fontSize: '12px',
        fontWeight: '600',
        fontFamily: `${FontFamily} !important`,
        fontStyle: FontStyle,
        color: FontColor,
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2px 8px'
      },
      '& .greenDate': {
        background: '#CCFCE3'
      },
      '& .yellowDate': {
        background: '#FFF1C2'
      },
      '& .redDate': {
        background: '#FFD6D9'
      }
    },
    tableBodyCell: {
      fontWeight: '400',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      fontSize: '12px',
      color: '#2B2F3B',
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

    mui_grid: {
      '@media (max-width: 768px)': {
        display: 'flex',
        flexDirection: 'column',
        width: '76%'
      }
    },

    userProfileBox: {
      display: 'flex',
      columnGap: '5px',
      background: 'transparent !important',
      color: '#2B2F3B',
      alignItems: 'center',
      cursor: 'pointer',
      justifyContent: 'space-between',
      '@media (max-width: 480px)': {
        display: 'block'
      }
    },
    plusIconBox: {
      transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&:hover': {
        transform: 'scale(1.25)',
        '& svg path': {
          fill: '#33B7B8'
        }
      }
    },

    UserAvatar: {
      height: '40px',
      width: '40px'
    },
    userInfo: {
      background: 'transparent !important',
      cursor: 'pointer',
      '@media (max-width: 1100px)': {
        paddingRight: '45px'
      },
      '& :hover': {
        color: '#33B7B8'
      }
    },

    userInfoWithoutHover: {
      background: 'transparent !important',
      cursor: 'pointer',
      '@media (max-width: 1100px)': {
        paddingRight: '45px'
      },
    },
    userName: {
      // width: "115px",
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontSize: '14px !important',
      fontFamily: FontFamily,
      fontWeight: '400',
      color: FontColor,
      fontStyle: FontStyle
    },
    assessmentName: {
      marginLeft: '10px'
    },

    disableHover: {
      cursor: 'default',
      color: AppColor.black + '!important',
      
    },
    disablePointer: {
      cursor: 'not-allowed',
      '& input': {
        cursor: 'not-allowed',
      }
    },
    userAssesmentDate: {
      width: '214px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: '12px',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontWeight: '300'
    },
    vassUserProfileBox: {
      marginBottom: '5px',
      cursor: 'pointer'
    },
    chevronRightIcon: {
      color: '#46D7CB',
      background: 'transparent !important'
    },
    pagination: {
      animation: '$fadeIn 1s'
    },

    '@keyframes fadeIn': {
      '0%': {
        opacity: 0
      },
      '10%': {
        opacity: 0.01
      },
      '15%': {
        opacity: 0.04
      },
      '25%': {
        opacity: 0.08
      },
      '50%': {
        opacity: 0.1
      },
      '65%': {
        opacity: 0.3
      },
      '80%': {
        opacity: 0.7
      },
      /* ending state (same as "to") */
      '100%': {
        opacity: 1
      }
    },
    lightFontWeight: {
      fontWeight:'400 !important',
      display:'inline',
      color:'#596072 !important',
      fontFamily: 'Poppins'
    },
    mui_tableContainer_custom: {
      borderRadius: '10px',
      padding:'0 10px'
    }
  },
  { index: 1 }
);
