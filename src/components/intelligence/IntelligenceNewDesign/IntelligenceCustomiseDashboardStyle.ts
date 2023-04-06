import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle, ButtonStyles, ButtonRadius, DefaulPrimarytColor } from '../../../core';

export const useIntelligenceCustomiseDashboardStyles = makeStyles(
    {

        checkBoxActive: {
            display: 'inline-block',
            border: '2px solid #47d7cb',
            backgroundColor: '#47d7cb',
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            marginRight: '10px',
            position: 'relative',
            '&::before': {
                top: '2px',
                opacity: 1,
                zIndex: 1,
                position: 'absolute',
                right: '2px',
                content: '""',
                width: '12px',
                height: '7px',
                borderBottom: 'solid 2px #fff',
                borderLeft: 'solid 2px #fff',
                transform: 'rotate(-45deg)'
            }
        },
        checkBoxDisable: {
            marginRight: '10px',
            borderRadius: '4px',
            display: 'inline-block',
            border: '2px solid #8f9bb3',
            width: '20px',
            height: '20px',
        },
        formContent: {
            display: 'flex',
            flexDirection: 'column',
            '& .MuiChip-label':{
                fontFamily:'"Poppins"'  
            },
            '& .MuiChip-filled': {
                backgroundColor: '#eef1f8',
                border: '1px solid #8f9bb3',
                position: 'relative',
                '& svg': {
                    opacity: 0
                },
                '&::before': {
                    pointerEvents:'none',
                    top: '9px',
                    opacity: 0.5,
                    zIndex: 1,
                    position: 'absolute',
                    right: '15px',
                    content: '""',
                    height: '13px',
                    width: '2px',
                    backgroundColor: '#333',
                    transform: 'rotate(45deg)'
                },
                '&::after': {
                    pointerEvents:'none',
                    top: '9px',
                    opacity: 0.5,
                    zIndex: 1,
                    position: 'absolute',
                    right: '15px',
                    content: '""',
                    height: '13px',
                    width: '2px',
                    backgroundColor: '#333',
                    transform: 'rotate(-45deg)'
                },
            },

            '& .MuiAutocomplete-popupIndicator': {
                display: 'inline-flex'
            },
            '& .MuiInputLabel-root': {
                position: 'relative',
                transform: 'none',
                color: '#222b45',
                fontSize:'14px',
                fontFamily:'"Poppins"'
            },
            '& fieldset legend': {
                opacity: '0 !important',
                width: 0
            },
            '& .MuiInputAdornment-root': {
                '& p': {
                    color: '#33B7B8 !important'
                }
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: '1px solid #E4E9F2',
            },
            '& .MuiInputBase-formControl': {
                border: 'none',
                background: '#F8F9FC',
                borderRadius: '8px'
            },
            '& .MuiOutlinedInput-input.Mui-disabled': {
                WebkitTextFillColor: 'rgba(0, 0, 0, 0.87)!important',
                color: 'rgba(0, 0, 0, 0.87)!important',
            },
            '& .Mui-disabled': {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E4E9F2!important',
                },
            },
            '& input': {
                fontSize: '14px',
                border: 'none',
                fontFamily: 'Poppins',
                borderRadius: ButtonRadius,
                '@media (max-width:768px)': {
                    fontSize: '13px',
                    padding: '14.5px 14px'
                },

                '@media (max-width:1280px)': {
                    fontSize: '14px'
                }
            },
            '& p': {
                fontSize: '14px',
                fontFamily: FontFamily,
                fontWeight: '400'
            },
            '& .Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                    color: '#46D7CB',
                    border: '1px solid #46D7CB',
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

            //   '& .MuiTextField-root': {
            //     paddingBottom: '32px'
            //   },

            '& .MuiOutlinedInput-root': {
                fontSize: '15px',
                padding:'2px 9px',
                '@media (max-width:768px)': {
                    fontSize: '13px'
                }
            },
            '& .radio-control .MuiTypography-root': {
                fontFamily: 'Poppins',
            },
        },
        wd100: {
            flex: '1 1 100%'
        },
        buttonBox: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 0
            // marginTop: '32px'
        },
        submitBtn: {
            ...ButtonStyles(
                '12px 24px',
                DefaulPrimarytColor.primary500green,
                '#fff !important',
                'capitalize',
                'none',
                ButtonRadius,
                `${FontFamily} !important`,
                FontStyle,
                '500',
                '14px',
                '16px',
                'none',
                'none'
            ),
            // height: '40px',
            // width: '98px',
            '&:hover': {
                background: '#53c0b7',
                boxShadow: 'none'
            }
        },
        dateContainer: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            flexFlow: 'row wrap',
            gap: '10px',
            marginTop: '30px',
            marginBottom: '30px',
            '@media (max-width: 479px)': {
                display:'block'

            },
            '& input': {
                border: '1px solid #E4E9F2',
            },
            '& .formInputLabels': {
                flex: '0 0 100%'
            },
   
            '& .dateContainerSingle': {
                '&:last-child': {
                    '@media (max-width: 479px)': {
                        marginTop:'20px'
        
                    },
                },
                
                
                '& .MuiInputAdornment-root': {
                    marginLeft: 0
                }

            }
        },



        dashboardCard: {
            '& div[class*="makeStyles-card_view_content"]': {
                alignItems: 'flex-start'
            },
            '& > div': {
                '@media (max-width: 767px)': {
                    width: '100% !important',

                },
            }
        },


    }
);