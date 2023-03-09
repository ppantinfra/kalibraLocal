import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core/';

export const clientSearchStyles = makeStyles(
  {
    clientSearchBox: {
      //marginBottom: '150px',
    },
    fixedClientSearch: {
      // width: 'calc(100% - 48px)',
      // padding: 0,
      // background: '#f8f9fc !important',
      // zIndex: 1,
      // position: 'fixed',
      // alignItems: 'center',
      // backgroundSize: '300%',
      // justifyContent: 'center',
      // backgroundPosition: '50%',
    },
    backtoClients: {
      display: 'flex',
      fontFamily: FontFamily,
      color: FontColor,
      alignItems: 'center',
      fontSize: '18px',
      marginBottom: 0,
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        fontSize: '16px'
      }
    },
    categoryContainer: {
      display: 'flex', 
      flexDirection: 'row',
      marginTop: '16px',

     alignItems: 'center', 
     '@media (min-width:1299px)': {
       backgroudColor:'yellow',
       marginTop: '-34px',
     },
     '@media (min-width:2999px)': {
       backgroudColor:'red',
       marginTop: '-34px',
     },
   },
   selectActivityField: {
     height: '30px',
     width: '160px',
     border: 'none',
     fontFamily: FontFamily,
     fontSize: '14px',
     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
       border: '1px solid rgba(0, 0, 0, 0.23)',
       borderColor: 'rgba(0, 0, 0, 0.23)'
     },
   },
   menuItem: {
     fontFamily: FontFamily,
     fontSize: '14px',
   },
    icons: {
      background: 'transparent !important',
      fontSize: '28px'
    },
    dvcfs_right: {
      // padding: '16px'
    },
    chooseClientBox: {
      // minHeight: '85vh',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      marginTop: '121px',
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
    subHeading: {
      display: 'flex',
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600'
    },
    subHeading_client: {
      alignItems: 'center',
      color: FontColor,
      fontFamily: FontFamily,
      fontSize: '16px',
      fontWeight: '600'
    },
    dvfsr_fieldBox: {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '10px',
      alignItems: 'center'
    },
    
    dvfsr_searchField: {
      display: 'flex',
      // justifyContent: "space-between",
      alignItems: 'center',
      columnGap: '10px',
      '& .MuiOutlinedInput-root': {
        '@media (min-width:360px) and (max-width:412px)': {
          flexDirection: 'column'
        },
        '& .MuiInputAdornment-root': {
          '@media (min-width:360px) and (max-width:412px)': {
            marginTop: '18px'
          }
        }
      },

      '& .MuiInputBase-formControl': {
        background: '#fff',
        border: '1px solid #C5CEE0',
        borderRadius: '10px',
        height: '37px',

        '& input': {
          '@media (max-width: 768px)': {
            fontSize: '16px'
          },
          '@media (max-width: 640px)': {
            // fontSize: "14px",
            // minWidth: '150px'
            // width: "auto",
          },
          '@media (min-width: 374px)': {
            minWidth: '170px !important'
          },
          '@media (max-width: 374px)': {
            minWidth: '197px'
          },
          '@media (max-width: 320px)': {
            // fontSize: "14px",
            minWidth: '116px !important'
          }
        }
      },
      '& .Mui-focused': {},

      '&::placeholder': {
        fontStyle: 'italic'
      },

      '& .MuiAutocomplete-inputRoot': {
        padding: '0 14px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        outline: 'none',
        border: 'none'
      }
    },
    userDetailsBox: {
      // border: '1px solid #46d7cb',
      // boxShadow:
      //   '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      // borderRadius: '8px',
      // background: '#fff',
    },
    labelClassName: {
      color: '#222b45',
      fontSize: '11px',
      fontFamily: FontFamily,
      fontWeight: '400',
    },
  },
  { index: 1 }
);
