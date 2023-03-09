import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const useHelpItemViewStyles  = makeStyles({
  bigDialogPopup: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiDialog-paper': {
      borderRadius: '2vmax',
    },
    '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '-1',
    },
    '& iframe':{
      height: '80vh !important',
      width: '86vw !important',
      inset:'0px !important',
    }
    
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tilesViewCardBox: {
    color: '#2B2F3B',
    background: '#fff',
    padding: '16px 16px 16px 16px',
    boxShadow: '0px 10px 22px rgb(143 155 179 / 1%), 0px 25px 19px rgb(143 155 179 / 5%), 0px 14px 14px rgb(143 155 179 / 9%), 0px 4px 8px rgb(143 155 179 / 10%), 0px 0px 0px rgb(143 155 179 / 10%)',
    maxWidth: '100%',
    fontFamily: FontFamily,
    position: 'relative',
  },
  cardBox: {
    height: '100%',
  },
  headerBox: {
    fontSize: '18px',
    fontFamily: FontFamily,
    color: FontColor,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBox: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: FontFamily,
    color: FontColor,
    borderRadius:'0px 0px 8px 8px',
  },
  desriptionBox: {
    marginTop:'16px',
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignItems: 'center',
    fontFamily: FontFamily,
    color: FontColor,
    borderRadius:'0px 0px 8px 8px',
  },

  title: {
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '14px',
    fontWeight: '600',
  },
  description: {
    fontFamily: FontFamily,
    color: ' #33B7B8',
    fontSize: '14px',
    fontWeight: '600',
    cursor:'pointer'
  },
 




});
