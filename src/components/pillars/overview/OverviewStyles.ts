import { makeStyles } from '@mui/styles';

export const OverviewStyles = makeStyles(
  {
    addGoalTile: {
      position: 'relative',
      cursor: 'pointer',
      padding: '10px 0 0',
      background: 'transparent',
      borderRadius: '10px',
      textAlign: 'center',
      height: '159px',
      border: '2px dashed #8F9BB3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        color: '#8F9BB3',
      },
      '& p': {
        color: '#8F9BB3',
      },
    },
  },
  { index: 1 }
);
