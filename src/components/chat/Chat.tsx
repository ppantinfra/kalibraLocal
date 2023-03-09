import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { AppColor, FontColor, FontStyle, FontFamily, ButtonStyles, DefaulPrimarytColor } from '../../core';

import Avatar from '@mui/material/Avatar';
import johnPic from '../../assets/images/avatar.png';

export const useChatStyles = makeStyles(
  {
    chatbox: {},
    chatMessage: {},
    img: {
      width: '24px',
      height: '24px'
    },

    chat_card_body: {
      padding: '20px 5px'
    },
    sender: {
      padding: '15px',
      borderRadius: '5px',
      margin: '0 5px'
    },
    hostMessageBox: {
      backgroundColor: 'rgb(228, 233, 242) !important',
      borderRadius: '16px 16px 16px 0px !important',

      '&:first-child': {
        borderRadius: '16px 16px 2px 0px'
      },
      '&:last-child': {
        borderRadius: '2px 2px 16px 0px'
      },
      '& p': {
        color: FontColor
      }
    },
    recipientMessageBox: {
      backgroundColor: 'rgb(70, 215, 203)',
      borderRadius: '16px 16px 0px',

      '& p': {
        color: '#fff !important'
      }
    },
    messageBox_host: {
      display: 'flex',
      alignItems: 'flex-end',
      margin: '10px',
      width: '330px',
      marginRight: '30px'
    },
    messageBox_recipient: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: '60px'
    },
    messageText: {
      fontFamily: FontFamily,
      fontWeight: 400
    },
    userName: {
      fontFamily: FontFamily
    },

    chat_card_footer: {
      background: '#fff',
      borderTop: '1px solid rgba(0,0,0,.2)',
      padding: '10px 10px 0',
      position: 'fixed',
      bottom: '0',
      zIndex: '1',
      backgroundPosition: '50%',
      backgroundSize: '300%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '380px'
    },
    formContent: {
      width: '380px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
      '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          color: '#46D7CB',
          border: '2px solid #46D7CB',
          outline: '#46D7CB'
        }
      },
      '& .Mui-focused.MuiInputLabel-formControl': {
        color: '#46D7CB'
      },
      '& .css-wb57ya-MuiFormControl-root-MuiTextField-root': {
        paddingBottom: '10px'
      },
      '& label[data-shrink=false]+.MuiInputBase-formControl .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        background: 'rgba(228, 233, 242,.4)',
        border: '1px solid rgba(228, 233, 242,.4)',
        borderRadius: '8px 0 0 8px',
        paddingBottom: '11px',

        '@media (max-width: 1140px)': {
          paddingBottom: '11px'
        },
        '@media (max-width: 1024px)': {
          paddingBottom: '12px'
        }
      },
      '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        fontSize: '16px'
      },
      '& .css-8g8ymg-MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '8px 0 0 8px',
        '& hover': {
          border: '1px solid rgba(228, 233, 242,.4)'
        }
      }
    },

    formGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      flex: '1 1 40%',
      color: 'rgb(18, 19, 20)',
      '@media (max-width:768px)': {
        flex: '1 1 50%'
      }
    },
    formGroupField: {
      width: '100%'
    },
    buttonsBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: '10px'
    },
    sendBtn: {
      ...ButtonStyles(
        '17.2px 14px',
        DefaulPrimarytColor.primary500green,
        '#fff !important',
        'capitalize',
        'none',
        '0 8px 8px 0',
        `${FontFamily} !important`,
        FontStyle,
        '500',
        '15px',
        '20px',
        'none',
        'none'
      ),
      '&:hover': {
        background: DefaulPrimarytColor.primary500green,
        boxShadow: 'none'
      }
    },
    callBtn: {
      ...ButtonStyles(
        '5px',
        AppColor.bsPrimary,
        '#fff !important',
        'capitalize',
        'none',
        '3px',
        `${FontFamily} !important`,
        FontStyle,
        '500',
        '15px',
        '20px',
        'none',
        'none'
      ),

      minWidth: '40px',
      '&:hover': {
        background: AppColor.bsPrimary,
        boxShadow: 'none',
        border: 'none'
      }
    }
  },
  { index: 1 }
);

// type IProps = {
//   name?: string;
// };

const Chat = () => {
  const classes = useChatStyles();
  const [message, setMessage] = useState('');

  const send = (e: any) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Box className={`${classes.chatbox} chatbox`}>
        <Box className={`${classes.chatMessage} chatMessage`}>
          <Box className={classes.chat_card_body} sx={{ px: 4 }}>
            <Box className={`${classes.messageBox_host} messageBox_host`}>
              <Avatar alt={johnPic} src={johnPic} className={classes.img} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px'
                }}
              >
                <Box className={`${classes.sender} ${classes.hostMessageBox}`}>
                  <Typography className={classes.userName}>{/* <strong>{name}</strong> */}</Typography>
                  <Typography className={classes.messageText}>
                    I want to build some muscle? How much sleep do you think you need?
                  </Typography>
                </Box>
                <span
                  style={{
                    fontSize: '10px',
                    textAlign: 'left',
                    marginLeft: '20px',
                    lineHeight: 0
                  }}
                >
                  10:57 AM
                </span>
              </Box>
            </Box>
            <Box className={`${classes.messageBox_recipient} messageBox_recipient`}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px'
                }}
              >
                <Box className={`${classes.sender} ${classes.recipientMessageBox}`}>
                  <Typography className={classes.userName}></Typography>
                  <Typography className={classes.messageText}>At least 6 hours, and drink enough fluids.</Typography>
                </Box>
                <span
                  style={{
                    fontSize: '10px',
                    textAlign: 'right',
                    marginRight: '20px',
                    lineHeight: 0
                  }}
                >
                  10:58 AM
                </span>
              </Box>
            </Box>
          </Box>
          <Box className={`${classes.chat_card_footer} chat_card_footer`}>
            <form className={`${classes.formContent} formContent`} method="post">
              <Box className={classes.formGroup}>
                <Box className={classes.formGroupField}>
                  <TextField
                    id="message"
                    placeholder="Type your message"
                    type="text"
                    fullWidth
                    InputProps={{
                      autoComplete: 'off'
                    }}
                    className="form-control"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Box>
                <Box>
                  <Button className={classes.sendBtn} onClick={send}>
                    <SendIcon />
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Chat;
