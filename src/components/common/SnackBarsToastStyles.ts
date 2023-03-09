import { makeStyles } from '@mui/styles';
import { AppColor } from '../../core';

export const SnackBarsToastStyles = makeStyles({
  snackBarErrorClass: {
    backgroundColor: `${AppColor.red}`,
  },
  snackBarSuccessClass: {
    backgroundColor: '#0D4E67',
  },
});
