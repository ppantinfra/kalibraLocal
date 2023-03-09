import { makeStyles } from '@mui/styles';

import { FontColor, FontFamily } from '../../core';

export const useWearableItemViewStyles  = makeStyles({
  tilesViewCardBox: {
    color: '#2B2F3B',
    background: '#fff',
    padding: '0px 16px 16px 16px',
    boxShadow: '0px 10px 22px rgb(143 155 179 / 1%), 0px 25px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',
    maxWidth: '100%',
    fontFamily: FontFamily,
    position: 'relative',
  },
  cardBox: {
    height: '100%',
  },
  pillarBox: {
    position:'absolute',
    top:'8px',
  },
  providerIconBox: {
    position:'absolute',
    top:'10px',
    right:'16px',
  },
  headerBox: {
    fontSize: '18px',
    fontFamily: FontFamily,
    color: FontColor,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    //flexDirection: 'column',
    alignItems: 'center',
    fontFamily: FontFamily,
    color: FontColor,
    backgroundColor:'green',
    borderRadius:'0px 0px 8px 8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop:'4px',
    paddingBottom:'4px'
  },
  time: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    //flexDirection: 'column',
    alignItems: 'center',
    fontFamily: FontFamily,
    color: FontColor,
    borderRadius:'0px 0px 8px 8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginTop:'16px',
   
  },
  lengthBox: {
    display: 'flex',
    justifyContent: 'center',
    rowGap:'0px',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: FontFamily,
    color: FontColor,
    marginTop:'8px',
   
  },
  length: {
    marginBottom: '0',
    fontFamily: FontFamily,
    fontSize: '32px',
    fontWeight: '700',
    color:'#8F9BB3'
  },
  spentTime: {
    marginTop: '0',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '14px',
    fontWeight: '400',
  },
  marker: {
    marginTop: '0',
    fontFamily: FontFamily,
    color: '#8F9BB3',
    fontSize: '14px',
    fontWeight: '400',
    textAlign:'center'
  },
  markerValue: {
    marginTop: '0',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '14px',
    fontWeight: '600',
    textAlign:'center'
  },
  date: {
    marginBottom: '0',
    fontFamily: FontFamily,
    fontSize: '11px',
    fontWeight: '400',
    color:'#8F9BB3'
  },
  title: {
    marginBottom: '0',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '11px',
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
