import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles } from '../../core/';

export const useActivityLoggerListStyles = makeStyles(
  {
    // Tabls css
    wl_content: {
      position: 'relative',
      borderRadius: '8px',
      '& .MuiFormHelperText-contained': {
        color: 'rgba(0, 0, 0, 0.6)'
      }
    },
    // Stepper css
    muiMobileStepper: {
      borderTop: '1px solid #0BAECA',
      borderBottom: '1px solid #0BAECA',
      padding: '5px',
      '& .MuiButton-root': {
        textTransform: 'capitalize',
        padding: '4px 0',
        minWidth: '24px',
        '&:hover': {
          backgroundColor: 'transparent !important'
        },
        '&.prevButton:not(&.Mui-disabled)': {
          color: FontColor,
          fontWeight: '500',
          '& svg': {
            color: '#46D7CB'
          }
        },
        '&.nextButton:not(&.Mui-disabled)': {
          color: '#46D7CB',
          fontWeight: '500',
          '& svg': {
            color: '#46D7CB'
          }
        },
        '& .Mui-disabled': {
          color: 'rgba(0, 0, 0, 0.26) !important',
          cursor: 'not-allowed!important'
        }
      },
      '& .MuiMobileStepper-dots': {
        display: 'none'
      }
    },

    previousTextBox: {
      display: 'flex',
      marginLeft: '8px',
      // columnGap: "8px",
      '& *': {
        fontFamily: FontFamily
      }
    },

    prev_text_Link: {
      '&.prev_date_link': {
        pointerEvents: 'none',
        fontSize: '14px',
        textTransform: 'capitalize',
        color: FontColor,
      },
      textDecoration: 'none',
      textTransform: 'capitalize',
      fontSize: '14px',
      marginLeft: '8px',
      '&[disabled]': {
        pointerEvents: 'auto',
        cursor: 'not-allowed!important',
        color: '#ccc',
      }
    },

    // activityLoggerListBox
    activityLoggerListBox: {
      // '&:not(:first-child)': {
      //   '& table': {
      //     '& thead': {
      //       visibility: 'collapse !important'
      //     }
      //   }
      // },
      '&:nth-of-type(2n+1)': {
        '& .leftGreyBox': {
          background: '#E4E9F2'
        }
      },
      '&:nth-child(even)': {
        '& .leftGreyBox': {
          background: '#F1F3F6'
        }
      },

      '&:first-child': {
        '& .greyBoxHeader': {
          borderBottom: '1px solid rgba(224, 224, 224, 1)',
          padding: '22px',
          background: '#EDF1F7'
        }
      },

      '& tfoot': {
        borderBottom: '1px solid rgba(224, 224, 224, 1)'
      }
    },
    allb_content: {
      borderBottom: '2px solid #2E3A59',
      '& .greyBoxHeader': {}
    },
    leftGreyBox: {},

    lgb_dropdownBox: {
      padding: '24px 16px 24px 16px'
      // minWidth: "305px",
    },
    rightTableBox: {
      width: '100%'
    },
    // table styles
    tableContainer_workout: {
      overflowX: 'auto',
      boxShadow: 'none',
      maxHeight: '100%',
      height: '100%',
      overflowY: 'hidden',
      paddingRight: '1px',
      scrollbarColor: '#6b6b6b #2b2b2b',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '8px',
        height: '14px'
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '8px',
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: '#3ba2d529',
        // backgroundColor: "transparent",
        minHeight: 24,
        boxShadow: 'inset 1px 0px 5px #bdbdbd'
      },
      '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: '#959595'
      }
    },
    table_workout: {
      '& tbody': {
        '&:nth-child(even)': {
          '& .oddDropdownColumn': {
            background: '#E4E9F2',
            '@media (min-width:768px)': {
              position: 'sticky',
              zIndex: '900 !important',
              left: '0'
            },
            '@media (min-width:768px) and (max-width:1024px)': {
              boxShadow: '2px 0 5px -2px #888'
            }
          },
          '& tr td': {
            '& .oddDropdownColumn': {
              background: '#E4E9F2'
            }
          }
        }
      },
      '&:nth-of-type(2n+1)': {
        '& .dropdownColumn': {
          background: '#F1F3F6',
          '@media (min-width:768px)': {
            position: 'sticky',
            zIndex: '900 !important',
            left: '0'
          },
          '@media (min-width:768px) and (max-width:1024px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        },
        '& tr td': {
          '& .oddDropdownColumn': {
            background: '#F1F3F6'
          }
        }
      },

      '&:not(:first-child)': {
        '& thead': {
          visibility: 'collapse !important'
        },
        borderTop: '1.5px solid #2E3A59;'
      },

      '& tr th': {
        textAlign: 'center !important',
        fontSize: '16px',
        fontFamily: FontFamily,
        color: FontColor,
        fontWeight: '600',
        padding: '6px',
        '&:first-child': {
          borderRight: 'none',
          '@media (min-width:768px)': {
            position: 'sticky',
            zIndex: '900 !important',
            left: '0',
            background: '#EDF1F7'
          },
          '@media (min-width:768px) and (max-width:1024px)': {
            boxShadow: '2px 0 5px -2px #888'
          }
        }
      },
      '& tr td': {
        textAlign: 'center !important',
        borderBottom: '.8px solid rgba(224, 224, 224, 1)',

        '&:first-child': {
          borderRight: 'none'
        }
      },

      '& tfoot td': {
        border: 'none',
        padding: '10px',
        height: '36px',
      },

      '& tbody tr td': {
        padding: '6px 10px',
        fontSize: '14px',
        fontFamily: 'Poppins',
        color: FontColor,
        fontWeight: '400',
        height: '24px',
        '& .MuiFormControl-fullWidth': {
          alignItems: 'center',
          '& .MuiOutlinedInput-root': {
            height: '28px',
            width: '80px'
          }
        },
        '& .formControl': {
          '& .Mui-focused': {
            // border: "none !important",
            color: FontColor,
            outline: 'none !important'
          },
          '& input': {
            padding: '7px 14px',
            textAlign: 'center',
            background: 'transparent',
            fontSize: '14px',
            fontFamily: 'Poppins',
            color: FontColor,
            fontWeight: '400'
          },
          '& .MuiInputBase-formControl': {
            background: 'transparent'
          }
        }
      },

      '& tbody .initialTableRow': {
        '& td': {
          height: '24px',
          maxHeight: '24px',
          padding: '0 10px',
          '& .formInputLabels': {
            display: 'none!important',
          }
        }
      }
    },

    addSetLink: {
      textDecoration: 'none',
      color: '#33B7B8',
      fontSize: '13px',
      fontWeight: '500',
      fontFamily: 'Poppins'
    },

    // radio styles
    radioCell: {
      columnGap: '8px !important',
      '& .PrivateSwitchBase-root': {
        display: 'none !important'
      },
      '& .MuiFormControlLabel-labelPlacementEnd': {
        marginLeft: '0 !important',
        marginRight: '0 !important'
      },
      '& .MuiFormControlLabel-label': {
        border: '1px solid #49F3F3 !important',
        borderRadius: '4px !important',
        padding: '2px 10px',
        fontSize: '14px',
        color: FontColor,
        fontFamily: 'Poppins',
        fontWeight: '400'
      },
      '& .Mui-checked': {
        '& ~ .MuiFormControlLabel-label': {
          background: '#C8F8F9 !important'
        }
      }
    },

    // select Styles
    selectBox: {
      marginBottom: '10px',

      '& .MuiFormControl-root': {
        alignItems: 'flex-start !important',
        '& label': {
          display: 'none',
        }
      },
      // '& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input': {
      //   color: '#8F9BB3 !important',
      //   fontWeight: '400 !important',
      // },
    },
    selectControl: {
      background: '#fff',
      padding: '0 10px',
      border: '1px solid #C5CEE0',
      borderRadius: '6px',
      width: '100%',
      // marginLeft: '60px',
      marginTop: '0 !important',
      '& .MuiNativeSelect-select': {
        color: FontColor,
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: FontFamily
      },
      '& .MuiNativeSelect-select:focus': {
        backgroundColor: 'transparent !important'
      },


    },

    selectInputLabel: {
      color: '#192038',
      fontSize: '14px',
      paddingBottom: '4px',
      fontFamily: FontFamily,
      fontWeight: '500',
      // opacity: ".8",
      textAlign: 'left',
      // transform: 'translate(0, -3px) scale(0.75)',
      // transform: 'translate(0, 22px) scale(0.75)'
    },

    // inpute styles
    noInputBorder: {
      border: 'none'
    },

    dialogTitleBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& p': {
        fontWeight: '600'
      }
    },
    dialogActionsBox: {
      display: 'flex',
      columnGap: '1vmax',
      padding: '1vmax'
    },

    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
      padding: '8px 0',
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#fff',
      zIndex: 100000,
      right: 0,
      paddingRight: '25px',
      boxShadow: '15px 0 20px 3px rgb(0 0 0 / 5%)',
      width: 'calc(100% - 64px)',
      '@media (max-width: 768px)': {
        width: '100%'
      }
    },

    saveBtn: {
      ...ButtonStyles(
        '12px 24px',
        '#33B7B8 ',
        '#fff ',
        'capitalize',
        'none',
        '10px',
        FontFamily,
        FontStyle,
        '500',
        '18px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: '#53c0b7',
        boxShadow: 'none'
      },
      '@media (max-width: 768px)': {
        fontSize: '14px',
        padding: '12px'
      }
    },
    closeBtn: {
      position: 'static',
      background: '#dbedeb !important ',
      color: 'rgb(0 0 0 / 60%) !important',
      textTransform: 'capitalize',
      border: 'none',
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      fontWeight: '900',
      fontSize: '15px',
      lineHeight: '20px'
    },

    exerciseFieldContent: {
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: '1vmax',
      columnGap: '1vmax'
    },
    exerciseFields: {
      flex: '1 1 15%'
    },
    noBorder: {
      border: 'none'
    },
    rangeField: {
      '& .MuiInputBase-formControl': {
        border: 'none !important',
        background: 'transparent !important'
      }
    },
    rangeHelperText1: {
      fontSize: '12px'
    },
    rangeHelperText2: {
      fontSize: '12px',
      margin: '0',
      color: 'rgba(0, 0, 0, 0.6)'
    },
    days: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    dateBox: {
      margin: '0px',
      textDecoration: 'none',
      '& div': {
        borderColor: '#dedede!important',
        fontSize: '12px',
        padding: '4px 0px',
        color: FontColor
      }
    },

    chooseClientBox: {
      // minHeight: '85vh',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '50px',
      '& p': {
        color: FontColor,
        fontSize: '18px',
        fontWeight: 600,
        textAlign: 'center'
      }
    },
    selectImage: {
      width: '148.72px',
      height: '144px',
      transition: '.3s all',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    },
    customRadio: {

      '& .MuiFormControlLabel-labelPlacementEnd': {

        width: '60px',

        position: 'relative',

      },

      '& input[type="checkbox"]': {

        height: 0,

        width: 0,

        visibility: 'hidden',

      },

      '& .MuiRadio-root svg': {

        visibility: 'hidden'

      },

      '& .MuiRadio-root': {

        cursor: 'pointer',

        textIndent: '-9999px',

        width: '60px',

        height: '35px',

        background: '#fff',

        border: '1px solid #49f3f4',

        display: 'block',

        borderRadius: '6px',

        position: 'relative'

      },

      '& .Mui-checked': {

        background: '#c9f8f9'

      },

      '& .MuiTypography-body1': {

        position: 'absolute',

        left: '0',

        right: '0',

      }

    }
  },

  { index: 1 }
);
