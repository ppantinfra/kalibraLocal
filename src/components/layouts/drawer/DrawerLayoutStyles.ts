import { makeStyles } from '@mui/styles';
import { FontFamily, FontColor } from '../../../core/';

export const DrawerLayoutStyles = makeStyles(
  {
    icon: {
      // height: '24px',
      // width: '24px',
      // color: 'rgb(70, 215, 203)',
      // opacity: '0.7',
      marginLeft: '-1px'
    },
    mui_header: {
      boxShadow: 'none',
      transition: '.6s all',
      zIndex: '1203',
      '@media (max-width: 768px)': {
        backgroundColor: '#fff',
        zIndex: '1203',
        height: '64px'
      },

      '@media (min-width: 768px)': {
        backgroundColor: 'transparent',
        zIndex: '1203',
      },
      '& .MuiToolbar-root': {
        // minHeight: '50px',
        // '@media (max-width: 600px)': {
        //   minHeight: '50px'
        // }
      },

      '& .MuiIconButton-root': {
        // backgroundColor: 'transparent',
        // '@media (max-width: 767px)': {
        //   backgroundColor: '#fff'
        // },
        '&:hover': {
          backgroundColor: 'transparent'
          // '@media (max-width: 767px)': {
          //   backgroundColor: '#fff'
          // }
        }
      }
    },
    siteHeaderWrapper: {
      background: '#EDF1F7',
      padding: '12px 12px 12px 0',
      // marginBottom: '15px',
      '@media (max-width: 768px)': {
        marginTop: '65px',
        marginLeft: '0!important',
      },
      '& img': {
        cursor: 'pointer'
      },
    },
    OutlinedInput: {
      '& .MuiFormLabel-root': {
        fontFamily: 'Poppins',
        color: '#8F9BB3',
        fontWeight: '500',
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '0.02em',
      },
      '& .MuiInputBase-formControl': {
        border: '0px none',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '24px',
        color: '#222B45',
        backgroundColor: 'transparent'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0px none',
        fontFamily: 'Poppins',
        color: '#222B45'
      },
      '& svg': {
        stroke: '#222B45',
        strokeDasharray: '14px',
        strokeWidth: '2px',
        transform: 'scale(0.9)',
        fill: 'transparent'
      }
    },

    mui_footer: {
      boxShadow: 'none',
      transition: '.6s all'
    },
    mui_drawer: {
      borderRight: 'none',
      transition: '.6s all',

      '& .MuiDrawer-docked .MuiDrawer-paper': {
        background: '#fff',
        boxSizing: 'border-box'
      },

      '&.hideSidebar': {
        '& .MuiDrawer-paper': {
          transition: '.6s all',
          // zIndex: '1201 !important',
          '@media (max-width: 768px)': {
            display: 'none'
          },
          '@media (min-width: 768px)': {
            display: 'block'
          }
        },
        '&.MuiPaper-elevation': {
          '@media (max-width: 769px)': {
            transition: '.6s all'
          }
        }
      },
      '&.showSidebar': {
        '& .MuiDrawer-paper': {
          transition: '.6s all',
          zIndex: '1201 !important'
          // '@media (max-width: 768px)': {
          //     background: 'linear-gradient(to bottom, #46d7cb, #d8cdcd)',
          // },
        }
      }
    },
    openIcon: {
      borderRadius: '50%',
      cursor: 'pointer',
      transition: '.2s all',
      // border: '1px solid #46d7cb',
      backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
      '&:hover': {
        // background: '',
        // border: '1px solid #46d7cb',
        // backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
        '& svg path': {
          fill: '#46d7cb'
        }
      }
    },
    mui_grid: {
      alignItems: 'center'
    },
    UserAvatar: {
      height: '24px',
      width: '24px'
    },

    actions_notification: {
      paddingBottom: '16px'
    },
    actions_heading: {
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '800',
      color: '#46d7cb',
      marginBottom: '16px',
      marginTop: '16px'
    },
    actions_subHeading: {
      fontFamily: FontFamily,
      color: FontColor,
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '16px',
      marginTop: '16px'
    },
    actions_text: {
      fontFamily: FontFamily,
      color: '#8f9bb3',
      fontSize: '12px',
      fontWeight: 400
    },
    nested: {
      paddingLeft: '4px'
    }
  },
  { index: 1 }
);
