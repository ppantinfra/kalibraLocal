import React from 'react';
import { makeStyles } from '@mui/styles';
import { FontFamily, FontStyle, ButtonStyles, DefaulPrimarytColor } from '../../../core';
import Button from '@mui/material/Button';
import { darken } from '@mui/material';

const useButtonStyles = makeStyles(
  {
    button: {
      ...ButtonStyles(
        '12px 24px',
        DefaulPrimarytColor.primary500green,
        '#fff ',
        'capitalize',
        'none',
        '8px',
        FontFamily,
        FontStyle,
        '500',
        '14px',
        '20px',
        'none',
        'none'
      ),
      height: '40px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      columnGap: '8px',
      transition: '.3s all',
      '&:hover': {
        background: '#53c0b7'
      },

      '@media (max-width: 768px)': {
        fontSize: '12px',
        letterSpacing: '.5px'
      },
      '& svg': {
        paddingRight: '5px'
      }
    }
  },
  { index: 1 }
);

type IButtonProps = {
  onclickHandler: any;
  buttonIcon?: React.ReactNode | React.ReactNode[];
  buttonText?: string | React.ReactNode | React.ReactNode[];
  buttonBackground?: string;
  buttonColor?: string;
  disabled?: any;
  width?: string;
};

const MUIButton = ({
  onclickHandler,
  buttonText,
  buttonIcon,
  buttonBackground,
  buttonColor,
  disabled,
  width
}: IButtonProps) => {
  const classes = useButtonStyles();


  return (
    <Button
      className={classes.button}
      onClick={onclickHandler}
      sx={{
        color: buttonColor,
        minWidth: width,
        '&:hover': {
          background: buttonBackground === undefined ? undefined : `${darken(String(buttonBackground), 0.1)} !important`
        },
        '&.Mui-disabled': {
          backgroundColor: '#EDF1F7',
          background: '#EDF1F7',
          color: '#C5CEE0'
        }
      }}
      disabled={disabled}
    >
      { buttonIcon}
      { buttonText}
    </Button >
  );
};

export default MUIButton;
