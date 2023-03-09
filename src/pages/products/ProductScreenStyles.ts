import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, AppColor } from '../../core';

export const useProductScreenStyles = makeStyles({
  page_Content: {
    '& p': {
      fontSize: '20px',
      fontFamily: FontFamily,
      color: FontColor
    }
  },
  productsChips: {
    width: 150,
    backgroundColor: AppColor.kalibraThemeColor,
    color: '#fff',
    paddingLeft: 1.55,
    fontSize: 16,
    height: 34,
    borderRadius: 34,
    justifyContent: 'center',
    fontWeight: 600,
    '& ..MuiChip-avatar': {
      color: '#fff !important'
    }
  }
});
