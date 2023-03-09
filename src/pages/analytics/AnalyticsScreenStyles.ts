import { makeStyles } from '@mui/styles';
import {
    FontColor,
    FontFamily
  } from '../../core';
  

export const useAnalyticsScreenStyles = makeStyles({
  page_Content: {

    '& p':{
        fontSize: '20px',
        fontFamily: FontFamily,
        color: FontColor,
    }
  },
});
