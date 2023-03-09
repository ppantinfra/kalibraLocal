import { makeStyles } from '@mui/styles';
import {  FontFamily } from '../../core';

export const useReviewBloodworkGettingStartedStyles = makeStyles(
  {
   title:{
     fontFamily: FontFamily,
     fontSize:'16px',
     fontWeight:'600'
   },
   filename:{
    fontFamily: FontFamily,
    fontSize:'11px',
    fontWeight:'400',
    color:'#8F9BB3'
  },
  filenameValue:{
    fontFamily: FontFamily,
    fontSize:'11px',
    fontWeight:'600'
  },
  content:{
    fontFamily: FontFamily,
    fontSize:'14px',
    fontWeight:'400',
  //  color:'#8F9BB3'
  },
  yesBtn: {
    background: '#46D7CB',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    width: '160px',
    outline: 'none',
    boxShadow: 'none',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    textDecoration: 'none',
    '&:hover': {
      background: '#3ba89f'
    }
  },
  cancelBtn: {
    background: '#fff',
    borderRadius: '8px',
    marginLeft:'24px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#8F9BB3',
    width: '60px',
    outline: 'none',
    boxShadow: 'none',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    textDecoration: 'none',
    '&:hover': {
      background: 'transparent'
    }
  },

  },
  { index: 1 }
);
