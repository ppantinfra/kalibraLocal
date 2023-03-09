import { makeStyles } from '@mui/styles';

export const useBodyCompositionProgressBarStyles = makeStyles({
  groupsBox: {},
  groupsNameBox: {
    borderBottom: '1px solid rgb(228, 233, 242)',
  },
  groupsDataBox: {
    borderBottom: '1px solid rgb(228, 233, 242)',
    paddingTop: '1vmax',
  },
  apg_contentBox: {
    border: '1px solid #EDF1F7',
    color: '#929CB0',
    padding: '16px',
    borderRadius: '8px',
    background: '#fff',
  },
  apg_text: {
    color: '#2B2F3B',
    fontSize: '16px',
    fontWeight: '400',
  },
  apg_SubText: {
    fontSize: '12px',
    color: '#2B2F3B',
    fontWeight: '400',
    lineHeight: '1',
    fontFamily: 'Poppins',
    paddingBottom: '1vmax',
    '@media (max-width:1280)': {
      paddingBottom: '2vmax',
      fontSize: '11px',
    },
    '@media (max-width:768px)': {
      paddingBottom: '3.5vmax !important',
    },
  },
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

    '&:not(last-child)': {
      // marginRight:"2px",
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
    top: '-8px',
    left: '45%',
    transform: 'translate(-50%, -50%)',
  },

  graphWrapper: {
    position: 'relative',
    fontFamily: 'Poppins',
    // marginRight: "4vmax",
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
    boxShadow: '0px 0px 4px rgb(143 155 179 / 60%)',
    // background: "#46D7CB",
    height: '18px',
    width: '18px',
    borderRadius: '100px',
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
