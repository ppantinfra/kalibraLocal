import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import brandLogo from '../../../assets/images/navigations/brandLogo.svg';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles'; //useTheme
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { DrawerLayoutStyles } from './DrawerLayoutStyles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import kalibraLogo from '../../../assets/images/Kalibra_Primary_logo_500px.svg';
import useMediaQuery from '@mui/material/useMediaQuery';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

const DrawerHeader = ({ open, toggleDrawerHandler }) => {
  const classes = DrawerLayoutStyles();
  const theme = useTheme();
  const greaterThan768 = useMediaQuery(theme.breakpoints.up(768));

  return (
    <AppBar position="fixed" open={open} className={`${classes.mui_header} mui_appBarHeader`}>
      <Container
        component="section"
        maxWidth="xl"
        sx={{
          width: '100%',
          maxWidth: '100%',

          '@media (min-width: 768px)': {
            paddingLeft: '0 !important',
            width: '100%',
            maxWidth: '100%'
          }
        }}
      >
        <Toolbar sx={{ padding: '0 !important', position: 'absolute', zIndex: '1203' }}>
          {greaterThan768 ? (
            <Box
              className="brandLogo"
              style={
                open
                  ? { display: 'none' }
                  : { display: 'flex', width: '64px', textAlign: 'center', justifyContent: 'center' }
              }
            >
              <img src={brandLogo} alt="brandLogo" className="logoImg" onClick={toggleDrawerHandler(true)}/>
              {/* onClick={toggleDrawerHandler(true)} */}
              <IconButton onClick={toggleDrawerHandler(true)}
                className={`${classes.openIcon} header-hamburger`}>
              <svg width="10" height="10" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.61047 8C1.82006 8 2.02886 7.9184 2.18565 7.75601L5.27597 4.55609C5.57837 4.24169 5.57437 3.74331 5.26557 3.43451L2.06565 0.234594C1.75366 -0.0781981 1.24727 -0.0781981 0.934483 0.234594C0.62249 0.547386 0.62249 1.05297 0.934483 1.36577L3.57842 4.0097L1.03528 6.64403C0.728087 6.96243 0.736887 7.46881 1.05448 7.77521C1.21048 7.9256 1.41047 8 1.61047 8Z" fill="#8F9BB3"/>
              </svg>
              </IconButton>
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawerHandler(true)}
                className={'header-hamburger'}
              >
                <ChevronRightIcon className="colorDefault" />
              </IconButton> */}
            </Box>
          ) : (
            <Box
              style={
                open
                  ? { display: 'none' }
                  : { display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }
              }
            >
              <IconButton onClick={toggleDrawerHandler(true)}>
                <MenuIcon style={{ color: '#45c4b9' }} />
              </IconButton>

              {/* <img src={kalibraLogo} onClick={toggleDrawerHandler(true)} /> */}
              <img src={brandLogo} alt="brandLogo" className="logoImg" onClick={toggleDrawerHandler(true)} />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default DrawerHeader;
