import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import rightImage from '../../../assets/images/loginRightImage2.svg';
import ColoredPlusIcon from '../../../assets/images/Union.svg';
import { FontFamily, BaseColor } from '../../../core';

const useStyles = makeStyles({
  rightContainer: {
    backgroundImage: `url(${rightImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',


    '@media (max-height:720px)': {
      // height: "720px",
    },
    '@media (max-width:1280px) ': {
      // width: "759px",
      backgroundSize: 'contain',
    },
    '@media (max-width:1024) ': {
      width: '100%',
    },
  },
  textGridBox: {
    height: '100vh',
    textAlign: 'center',
    padding: '0 62px',
  },

  rc_content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '50vh',
    '& p': {
      fontSize: '18px',
      color: BaseColor.basic300grey,
      fontFamily: FontFamily,
      textShadow: '0px 0px 8px rgba(16, 20, 38, 0.5)',
      fontWeight: '600',
    },
  },
});


const BoxPicture = () => {
  const classes = useStyles();
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        width: '100%',
        padding: '0 !important',
        maxWidth: {
          xl: '92vw',
          lg: '90vw',
          md: '85vw',
          xs: '85vw',
        },
      }}
      className={classes.rightContainer}
    >
      <Box >
        {/* <img src={rightImage} alt=""/> */}
        <Box className={classes.textGridBox}>
          <Grid container columns={15} className={classes.rc_content}>
            <Grid item xs={3}>
              <Typography>NOURISH</Typography>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src={ColoredPlusIcon} alt="" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography>MOVE</Typography>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src={ColoredPlusIcon} alt="" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography>CONNECT</Typography>
            </Grid>
          </Grid>

          <Grid container columns={15} className={classes.rc_content}>
            <Grid item xs={3}>
              <Typography>REST</Typography>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src={ColoredPlusIcon} alt="" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography>GROW</Typography>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <img src={ColoredPlusIcon} alt="" />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Typography>REFLECT</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default BoxPicture;
