import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../core';

export const GenomicsScreenStyles = makeStyles(
  {
    _container: {
      marginTop: '10px',
      marginBottom: '10px',
    },
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: '#2B2F3B',
      textDecoration: 'none',
    },
    backtoClients: {
      display: 'flex',
      color: FontColor,
      fontFamily: FontFamily,
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important',
    },
    // Tab styles
    mui_tablist: {
      '& .MuiTab-root.Mui-selected ': {
        color: `${FontColor} !important`,
      },
      '& .MuiTabs-flexContainer': {
        columnGap: '10px',
        rowGap: '10px',
        '@media (min-width: 1280px)': {
          flexWrap: 'wrap',
        },
      },
    },
    mui_tabButton: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: FontFamily,
      fontWeight: '400',
      fontSize: 18,
      color: '#222B45',
      padding: '0 5px',
      borderRadius: '5px',
      textTransform: 'capitalize',
      transition: '.3s ease',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      minHeight: '48px',
      '@media (max-width:768px)': {
        fontSize: '16px',
      },

      '& .MuiAvatar-circular ': {
        marginRight: '8px',
        width: '19px',
        height: '16px',
      },
      '& .tabIcon': {
        marginBottom: '0',
        width: '16px',
        height: '16px',
        marginLeft: '0',
        marginRight: '8px',
      },
      '&.MuiTab-root.Mui-selected': {
        fontWeight: '600',
      },
    },

    mui_tabButton_biome: {
      '& svg': {
        color: 'rgb(250, 102, 138) !important',
      },
    },
    mui_tabButtonMove: {
      border: '1px solid #C5CEE0',
      padding: '0 20px',
      borderRadius: '20px',
      textTransform: 'capitalize',
      transition: '.3s ease',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      width: 'unset',
      minHeight: '33px',
      color: FontColor,
      '&.MuiTab-root.Mui-selected': {
        background: '#C5CEE0 !important',
      },
    },
  },
  { index: 1 }
);
