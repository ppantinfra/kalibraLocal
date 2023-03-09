import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, AppColor, ButtonColor } from '../../core';

export const useIntelligenceClientListStyles = makeStyles(
  {
    IAD_heading: {
      fontSize: '22px',
      fontFamily: 'Poppins',
      color: '#222B45',
      fontWeight: 600,

      '@media (max-width: 600px)': {
        fontSize: '18px'
      }
    },
    page_Content: {
      '& .MuiTablePagination-selectLabel': {
        display: 'none'
      }
    },
    screenTitle: {
      fontSize: '30px !important',
      fontFamily: FontFamily,
      color: FontColor,
      paddingBottom: '10px',
      fontWeight: 600
    },

    column_header_text: {
      color: `${FontColor} !important`,
      fontSize: '18px',
      fontWeight: '600 !important',
      fontFamily: FontFamily,
      fontStyle: FontStyle,

      '@media (max-width: 768px)': {
        fontSize: '16px'
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
      },
      '& .tableHeadCell_individualTrend': {
        '& .MuiChip-root': {
          width: '24px',
          height: '24px',
          padding: 0,
          '& img': {
            margin: 'auto'
          }
        },
        '& span': {
          display: 'none'
        }
      }
    },
    mui_table: {
      borderSpacing: '0px !important',

      '& th': {
        borderTop: '1.5px solid #33B7B8',
        borderBottom: '1.5px solid #33B7B8',
        borderSpacing: '2px !important'
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
        textAlign: 'center !important'
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
          textAlign: 'left !important',
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

    tableHeadCellBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    tableHeadFirstCellBox: {
      justifyContent: 'flex-start !important',
      marginLeft: '18px'
    },
    clientName: {
      fontSize: '18px',
      color: FontColor,
      '@media (max-width: 768px)': {
        fontSize: '16px'
      }
    },
    pillarName: {
      fontSize: '18px',
      color: FontColor,
      marginLeft: '5px',
      '@media (max-width: 768px)': {
        fontSize: '16px'
      }
    },
    sortIcons: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '3px',
      marginLeft: '6px',
      '& img': {
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
      },
      '& .greyIcon': {
        color: '#C5CEE0'
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

    tableBodyRow: {
      color: '#2B2F3B'
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

    UserAvatar: {
      height: '40px',
      width: '40px'
    },
    userInfo: {
      background: 'transparent !important',
      '@media (max-width: 1100px)': {
        paddingRight: '45px'
      },
      '& :hover': {
        color: '#33B7B8'
      }
    },
    userName: {
      // width: "115px",
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontSize: '16px !important',
      fontFamily: FontFamily,
      fontWeight: '600',
      color: FontColor,
      fontStyle: FontStyle,
      '@media (max-width: 768px)': {
        fontSize: '14px !important'
      }
    },
    pillarSubcategory: {
      // width: "115px",
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      padding: 0,
      background: 'transparent !important',
      fontSize: '16px !important',
      fontFamily: FontFamily,
      fontWeight: '600',
      color: FontColor,
      fontStyle: FontStyle,
      '@media (max-width: 768px)': {
        fontSize: '14px !important'
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
    }
  },
  { index: 1 }
);
