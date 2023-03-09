import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import brandLogo from '../../../assets/images/Kalibra_Primary_logo_500px.svg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mui_header: {
    boxShadow: 'none',
    transition: '.6s all',
    backgroundColor: 'transparent',
    alignItems: 'center',

    '& .logo': {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '24px',
    },
  },
});
const BoxHeader = () => {
  const classes = useStyles();
  return (
    <AppBar className={`${classes.mui_header} mui_headerForPictureLayout`}>
      <Container
        component="section"
        maxWidth="xl"
        sx={{
          width: '100%',
          maxWidth: '100%',
          // maxWidth: {
          //   xl: "92vw",
          //   lg: "90vw",
          //   md: "85vw",
          //   xs: "85vw",
          // },
        }}
      >
        <Box className="logo">
          <img src={brandLogo} alt="brandLogo" width="150" />
        </Box>
      </Container>
    </AppBar>
  );
};

export default BoxHeader;
