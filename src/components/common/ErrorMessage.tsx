import React from 'react';
import { makeStyles } from '@mui/styles';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography from '@mui/material/Typography';

const useErrorTextStyles = makeStyles({
  customErrorText: {
    display: 'flex',
    columnGap: '9px',
    background: 'rgb(254, 107, 139, .18);',
    padding: '7px 12px',
    borderRadius: '20px',
    fontWeight: '500',
    fontSize: '1.2vmax',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    textAlign: 'left',
    color: 'rgb(254, 107, 139)',
    alignItems: 'center',
    marginTop: '10px',
  },
  warningIcon: {
    fontWeight: '500',
    fontSize: '1.5vmax',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    textAlign: 'left',
  },
});

type Props = {
  errorMessage?: any | undefined;
};

const ErrorMessage = ({ errorMessage }: Props) => {
  const classes = useErrorTextStyles();

  return (
    <React.Fragment>
      <Typography className={classes.customErrorText}>
        <WarningAmberIcon className={classes.warningIcon} /> {errorMessage}
      </Typography>
    </React.Fragment>
  );
};

export default ErrorMessage;
