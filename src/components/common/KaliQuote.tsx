import React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import kaliLogo from '../../assets/images/Kalibra_Icon_500px.png';
// import { FontFamily } from "../../core/constants/ElementBaseStyles";

export const useKaliQuoteStyles = makeStyles(
  {
    kali_content: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: '23px',
      marginTop: '16px',
      // marginLeft: '15px',
      // alignItems: 'center',
    },
    kaliLogo: {
      minWidth: '32px',
      maxWidth: '32px',
      display: 'flex',
      '& img': {
        alignSelf: 'end'
      }
    },
    kc_userInfo: {
      minWidth: '50%',
      // marginLeft: '4px',
      // marginTop: '5px',
      padding: '0px 8px',
      borderRadius: '12px 0px 12px 0px'
    }
  },
  { index: 1 }
);

type IProps = {
  children: React.ReactNode | React.ReactNode[];
  quotesBGColor?: string;
  quotesBorder?: string;
};

const KaliQuote = ({ 
  // quotesBGColor, quotesBorder,
   children }: IProps) => {
  const classes = useKaliQuoteStyles();

  return (
    <React.Fragment>
      <Box className={classes.kali_content}>
        {/* <Box className={classes.kaliLogo}> */}
        <img src={kaliLogo} alt="kaliLogo" width={24} height={24} />
        {/* </Box> */}
        <Box
          className={classes.kc_userInfo}
          // sx={{ background: quotesBGColor, border: quotesBorder }}
        >
          {/* <Box
            sx={{
              display: "block",
              textAlign: "left",
              color: "rgb(70, 215, 203)",
              fontWeight: "700",
            }}
          >
            Kali:
          </Box> */}
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default KaliQuote;
