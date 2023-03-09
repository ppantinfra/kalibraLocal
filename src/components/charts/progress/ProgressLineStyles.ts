import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily
} from '../../../core';

export const useProgressLineStyles = makeStyles({
  apg_SubText: {
    fontSize: '12px',
    color: FontColor,
    fontFamily: FontFamily,
    fontWeight: '400',
    lineHeight: '1',
    paddingBottom: '10px',
    '@media (max-width:1280)': {
      paddingBottom: '2vmax',
      fontSize: '11px',
    },
    '@media (max-width:768px)' : {
      paddingBottom: '3.5vmax !important'
    }
  
  },
  progressVisualFull: {
    display: 'flex',
    /* change the value if you want different thickness */
    height: '8px',
    margin: '-3vmax 0 3vmax',
  },
  progressVisualPart: {
    /* Number of the seconds for complete animation */
    height:'8px',
    borderRadius: '1vmax',
    transition: 'width 1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


    '&:not(last-child)':{
        marginRight:'2px',
    },
    // "@media (max-width:1280px)": {
    //   height:".9vmax",
    // },
  },

  valueText: {
    fontWeight:'600',
    marginTop: '15px',
    textAlign: 'center',
    color: FontColor,
    fontSize:'14px',
  },

  itemLabel: {
    fontWeight:'400',
    position: 'absolute',
    marginTop: '15px',
    textAlign: 'center',
    color: '#8F9BB3',
    fontSize:'11px',
    '@media (max-width: 1280px)' :{
      //fontSize:'10px',
    }
  },
  itemRange: {
    fontWeight:'600',
    position: 'absolute',
    marginTop: '-15px',
    textAlign: 'center',
    color: FontColor,
    fontSize:'11px',
    '@media (max-width: 1280px)' :{
      fontSize:'10px',
    }
  },

  mainBox: {
    position: 'absolute',
    // top: "-20px",
    top: '-6.5px',
    left: '45%',
    transform: 'translate(-50%, -50%)',
  },

  graphWrapper: {
    position: 'relative',
    fontFamily: FontFamily,
    marginRight: '20px',
  },
  stick: {
    position: 'absolute',
    top: '10px',
    left: '4px',
    height: '10px',
    width: '2px',
    background: '#ff0022',
    zIndex: 0,
    animation: '$fadeIn 2s',
  },
  unitbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: '1.2vmax',
    minWidth: '9vmax',
    textAlign: 'center',
    color: FontColor,
    fontFamily: FontFamily,
    fontWeight: '600',
    fontSize:'10px',
    '@media (max-width: 1280px)' :{
      fontSize:'10px',
    },
    '@media (max-width:768px)' : {
      bottom: '2vmax',
    },

  },
  pop: {
    position: 'fixed',
    border: '2px solid #FFFFFF',
   // background: '#46D7CB',
    height: '18px',
    width: '18px',
    minWidth: '13px',
    minHeight: '13px',
    marginTop:'.125vmax',
    borderRadius: '100px',
    zIndex: 1,
    animation: '$fadeIn 2s',
    boxShadow: '0px 0px 4px rgba(143, 155, 179, 0.6)',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '10%': {
      opacity: 0.01,
    },
    '15%': {
      opacity: 0.04,
    },
    '25%': {
      opacity: 0.08,
    },
    '50%': {
      opacity: 0.1,
    },
    '65%': {
      opacity: 0.3,
    },
    '80%': {
      opacity: 0.7,
    },
    /* ending state (same as "to") */
    '100%': {
      opacity: 1,
    },
  },
  // "@-moz-keyframes fadeIn": {
  //   "0%": {
  //     opacity: 0,
  //   },
  //   "10%": {
  //     opacity: 0.01,
  //   },
  //   "15%": {
  //     opacity: 0.04,
  //   },
  //   "25%": {
  //     opacity: 0.08,
  //   },
  //   "50%": {
  //     opacity: 0.1,
  //   },
  //   "65%": {
  //     opacity: 0.3,
  //   },
  //   "80%": {
  //     opacity: 0.7,
  //   },
  //   /* ending state (same as "to") */
  //   "100%": {
  //     opacity: 1,
  //   },
  // },
  // "@-webkit-keyframes fadeIn": {
  //   "0%": {
  //     opacity: 0,
  //   },
  //   "10%": {
  //     opacity: 0.01,
  //   },
  //   "15%": {
  //     opacity: 0.04,
  //   },
  //   "25%": {
  //     opacity: 0.08,
  //   },
  //   "50%": {
  //     opacity: 0.1,
  //   },
  //   "65%": {
  //     opacity: 0.3,
  //   },
  //   "80%": {
  //     opacity: 0.7,
  //   },
  //   /* ending state (same as "to") */
  //   "100%": {
  //     opacity: 1,
  //   },
  // },
  // "@-o-keyframes fadeIn": {
  //   "0%": {
  //     opacity: 0,
  //   },
  //   "10%": {
  //     opacity: 0.01,
  //   },
  //   "15%": {
  //     opacity: 0.04,
  //   },
  //   "25%": {
  //     opacity: 0.08,
  //   },
  //   "50%": {
  //     opacity: 0.1,
  //   },
  //   "65%": {
  //     opacity: 0.3,
  //   },
  //   "80%": {
  //     opacity: 0.7,
  //   },
  //   /* ending state (same as "to") */
  //   "100%": {
  //     opacity: 1,
  //   },
  // },
  // "@-ms-keyframes fadeIn": {
  //   "0%": {
  //     opacity: 0,
  //   },
  //   "10%": {
  //     opacity: 0.01,
  //   },
  //   "15%": {
  //     opacity: 0.04,
  //   },
  //   "25%": {
  //     opacity: 0.08,
  //   },
  //   "50%": {
  //     opacity: 0.1,
  //   },
  //   "65%": {
  //     opacity: 0.3,
  //   },
  //   "80%": {
  //     opacity: 0.7,
  //   },
  //   /* ending state (same as "to") */
  //   "100%": {
  //     opacity: 1,
  //   },
  // },


  unGroupedLabel: {
    '& .makeStyles-apg_SubText-49': {
      display: 'flex',
      textOverflow: 'ellipsis',
      width: '6vmax',
      overflow: 'hidden',
      whiteSpace: 'break-spaces',
      wordSpacing: '2px',
      lineHeight: '14px',
      fontSize: '11px',
      color: FontColor,
      fontFamily: FontFamily,
      '@media (max-width: 1280px)': {
        width: '8vmax',
        fontSize: '10px',
      }
    }
  }
});
