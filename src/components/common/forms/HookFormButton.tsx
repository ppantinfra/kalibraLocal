import React from 'react';
import { makeStyles } from '@mui/styles';
import { FontFamily, FontStyle, ButtonStyles, DefaulPrimarytColor } from '../../../core';
import Button from '@mui/material/Button';

const useButtonStyles = makeStyles(
  {
    button: {
      ...ButtonStyles(
        '12px 24px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        '8px',
        FontFamily,
        FontStyle,
        '500',
        '16px',
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

export interface IButtonProps {
  name: string;
  variant?: any;
  color?: any;
  handleSubmit: any;
  className?: any;
  sx?:any;
}

const HookFormButton = (props: IButtonProps) => {
  const classes = useButtonStyles();
  return (
    <Button
      variant={props.variant}
      color={props.color}
      size="small"
      disableElevation={true}
      onClick={props.handleSubmit}
      className={`${props.className} ${classes.button}`}
      sx={props.sx}
    >
      {props.name}
    </Button>
  );
};

export default HookFormButton;
