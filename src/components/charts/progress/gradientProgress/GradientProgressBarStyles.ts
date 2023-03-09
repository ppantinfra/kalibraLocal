import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../../../core/';

export const useGradientProgressBarStyles = makeStyles({
  progressVisualFull: {
    display: 'flex',
    /* change the value if you want different thickness */
    // height: "8px",
  },
  progressVisualPart: {
    /* Number of the seconds for complete animation */
    height: '12px',
    transition: 'width 1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:first-child': {
      borderRadius: '0 0 0 10px',
    },
    '&:last-child': {
      borderRadius: '0 0 10px 0',
    },
    '&:only-child': {
      borderRadius: '0 0 10px 10px',
    },

    '&:not(last-child)': {
      // marginRight:"2px",
    },
    '@media (min-width:1200px)': {
      height: '12px',
    },
  },

  itemLabel: {
    fontWeight: '600',
    position: 'absolute',
    marginTop: '1.2vmax',
    textAlign: 'center',
    color: 'rgb(76, 79, 86)',
    fontSize: '11px',
    '@media (max-width: 1280px)': {
      fontSize: '10px',
    },
  },

  mainBox: {
    position: 'absolute',
    top: '-5px',
    left: '45%',
    transform: 'translate(-50%, -50%)',
  },

  graphWrapper: {
    position: 'relative',
    fontFamily: FontFamily,
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
    border: '1.5px solid #FFFFFF',
    boxShadow: '0px 0px 4px rgba(143, 155, 179, 0.6)',
    height: '18px',
    width: '18px',
    top:'-3px',
    borderRadius: '100px',
    zIndex: 1,
    animation: '$fadeIn 2s',
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
