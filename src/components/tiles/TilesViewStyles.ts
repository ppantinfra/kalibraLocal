import { makeStyles } from '@mui/styles';

import { FontColor, FontFamily } from '../../core';

export const useTilesViewStyles  = makeStyles({
  tilesViewCardBox: {
    color: '#2B2F3B',
    background: '#fff',
    padding: '24px',
    //borderRadius: '10px',
    boxShadow: '0px 56px 22px rgb(143 155 179 / 1%), 0px 32px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',
    maxWidth: '100%',
    height: '348px',
    fontFamily: FontFamily,
    position: 'relative',
    '@media (max-width: 1500px)': {
      height: '348px',
    },
    '@media (min-width: 2999px)': {
      height: '430px',
    },
  },
  tv_card: {
    // padding: '10px',
    height: '100%',
  },
  tvc_header: {
    fontSize: '18px',
    fontFamily: FontFamily,
    color: FontColor,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    alignItems: 'center',
  },
  tvch_title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'start',
    flexDirection: 'column',
    alignItems: 'start',
    fontFamily: FontFamily,
    color: FontColor,
  },
  tvcht_heading: {
    marginBottom: '0',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '16px',
    fontWeight: '600',
  },
  tvcht_time: {
    marginBottom: '5px',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '13px',
  },
  tvch_icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: FontFamily,
    cursor: 'pointer',
    columnGap: '5px',

    '& .MuiSvgIcon-root': {
      color: '#231F20',
      fontSize: '20px',
      fontFamily: FontFamily,
    },
  },

  tvc_body: {},
});
