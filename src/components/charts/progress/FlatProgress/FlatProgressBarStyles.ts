import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../../core/';

export const useFlatProgressBarStyles = makeStyles({
  progressBarBox: {
    marginBottom: '3.5vmax',
    '@media (min-width: 2900px)':{
      marginBottom: '2.5vmax',
    }
  },
  emptyProgressBarBox: {
    marginBottom: '0.5vmax',
    '@media (min-width: 2900px)':{
      marginBottom: '0.5vmax',
    }
  },
  apg_SubText: {
    fontSize: '11px',
    fontWeight: '400',
    //lineHeight: "0",
    color: FontColor,
    fontFamily: FontFamily,
    paddingBottom: '5px',
   
    '@media (max-width:768px)': {
      // paddingBottom: "3.5vmax !important",
    },
  },
  apg_pointText: {
    color: FontColor,
    fontFamily: FontFamily,
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: 1,
    '@media (max-width: 1500px)': {
      //fontSize: '14px',
    },
    '@media (max-width: 376px)': {
      //fontSize: '12px',
    },
  },
  progressVisualFull: {
    display: 'flex',
    /* change the value if you want different thickness */
    height: '8px',
    margin: '-3vmax 0 3vmax',
  },
  smallProgressVisualFull: {
    display: 'flex',
    /* change the value if you want different thickness */
    height: '8px',
    margin: '-3vmax 0 3vmax',
  },
  progressVisualPart: {
    /* Number of the seconds for complete animation */
    height: '8px',
    borderRadius: '1vmax',
    transition: 'width 1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&:not(last-child)': {
      marginRight: '2px',
    },
    // "@media (max-width:1280px)": {
    //   height:".9vmax",
    // },
  },
  smallProgressVisualPart: {
    /* Number of the seconds for complete animation */
    height: '8px',
    borderRadius: '1vmax',
    transition: 'width 1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '&:not(last-child)': {
      marginRight: '2px',
    },
    // "@media (max-width:1280px)": {
    //   height:".9vmax",
    // },
  },

  itemLabel: {
    fontWeight: '64000',
    position: 'absolute',
    marginTop: '15px',
    textAlign: 'center',
    color: '#8F9BB3',
    fontSize: '11px',
    '@media (max-width: 1280px)': {
      //fontSize: '10px',
    },
  },

  mainBox: {
    position: 'absolute',
    top: '-5px',
    left: '45%',
    transform: 'translate(-50%, -50%)',
  },
  smallMainBox: {
    position: 'absolute',
    top: '-3px',
    left: '45%',
    transform: 'translate(-50%, -50%)',
  },

  graphWrapper: {
    position: 'relative',
    fontFamily: FontFamily,
    minWidth: '160px',
    // marginRight: "4vmax",
    // top: "105px"
    '@media (min-width: 2900px)':{
      top: '30px'
    }
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
    color: 'rgb(76, 79, 86)',
    fontWeight: '600',
    fontSize: '10px',
    '@media (max-width: 1280px)': {
      fontSize: '10px',
    },
    '@media (max-width:768px)': {
      bottom: '2vmax',
    },
  },
  pop: {
    position: 'fixed',
    border: '2px solid #FFFFFF',
    /* transform: matrix(-1, 0, 0, 1, 0, 0); */
    // background: "#46D7CB",
    // height: '18px',
    // width: '18px',
    minWidth: '15px',
    minHeight: '15px',
    borderRadius: '100px',
    boxShadow: '0px 0px 4px rgba(143, 155, 179, 0.6)',
    // background: "pink",
    zIndex: 1,
    animation: '$fadeIn 2s',
    // "@media (max-width:768px)":{}
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
      '@media (max-width: 1280px)': {
        width: '8vmax',
        fontSize: '10px',
      },
    },
  },
});
