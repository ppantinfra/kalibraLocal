import { makeStyles } from '@mui/styles';
import { AppColor } from '../../../core';

export const ErrorDialogStyles = makeStyles({
  title: {
    color: `${AppColor.red}`,
    textAlign: 'center'
  },
  icon: {
    color: `${AppColor.red}`,
    margin: '16px 0'
  },
  close: {
    position: 'absolute'
  },
  content: {
    textAlign: 'center',
    padding: '0 24px'
  },
  dismissButton: {
    color: `${AppColor.red}`
  }
});
