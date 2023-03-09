import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, FontStyle } from '../../../core';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const useStyles = makeStyles(
  {
    card_view: {
      position: 'relative',
      margin: 'auto',
      // marginTop: '63px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow:
        '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)',
      padding: '24px',
      '@media (max-width: 376px)': {
        //width: '332px'
        width: '100%'
      }
    },
    card_view_content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    },

    cvText: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
      // alignItems: 'center'
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      padding: 0
    },

    yesBtn: {
      background: '#46D7CB',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      width: '100%',
      //   width: '98px',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px 24px',
      textDecoration: 'none',
      '&:hover': {
        background: '#3ba89f'
      }
    },
    noBtn: {
      background: '#fff',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#8F9BB3',
      width: '100%',
      outline: 'none',
      boxShadow: 'none',
      textTransform: 'capitalize',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px 24px',
      textDecoration: 'none',
      '&:hover': {
        background: 'transparent'
      }
    },
    heading: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '140%',
      // textAlign: 'center',
      padding: '0 0 16px'
    },
    text: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
      // textAlign: 'center',
      padding: '0 0 16px'
    },
    notifyText: {
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      color: FontColor,
      fontWeight: '400',
      fontSize: '12px'
    },

    '& .css-hlj6pa-MuiDialogActions-root>:not(:first-of-type)': {
      transition: 'none'
    },
    closeIcon: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      cursor: 'pointer'
    }
  },
  { index: 1 }
);

type Props = {
  caption?: string;
  description?: string | React.ReactNode | React.ReactNode[];
  confirmButtonHandler?: any;
  cancelButtonHandler?: any;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  children?: React.ReactNode | React.ReactNode[];
  height?: number;
  width?: number;
  autoHeight?: boolean;
  sx?: any;
  closeBtn?: boolean;
  closeBtnHandler?: any;
};

const CardView = ({ caption, description, children, height, width, autoHeight, sx, closeBtn, closeBtnHandler }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.card_view} sx={{ ...sx, height: autoHeight ? 'auto' : height, width: width }}>
        <Box className={classes.card_view_content}>
          <Box className={classes.cvText}>
            <Typography className={classes.heading}>
              {caption}
              {closeBtn && (
                <span className={classes.closeIcon} onClick={closeBtnHandler}>
                  <CloseOutlinedIcon />
                </span>

              )}



            </Typography>
            <Box className={classes.text}>{description}</Box>
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
    </React.Fragment>
  );
};

export default CardView;
