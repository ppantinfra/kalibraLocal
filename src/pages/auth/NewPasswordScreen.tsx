import React, { useState, FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import { passwordValidator } from '../../core';
// import { SnackBarsToast } from '../../components/common/';
import Container from '@mui/material/Container';
// import * as pattern from '../../core';
import { makeStyles } from '@mui/styles';
import { NewPasswordForm } from '../../components/auth/';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(
  {
    newPasswordScreen: {
      height: '100vh',
      //   padding: '100px 0 50px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  },
  { index: 1 }
);

const NewPasswordScreen: FC = (): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');

  const handleSavePassword = async () => {
    navigate('/');
  };

  const passwordCheck = (data: string) => {
    const error = passwordValidator(data);
    if (error) {
      setPasswordErrorMsg(error);
      return false;
    } else {
      return true;
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      {/* <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      /> */}

      <Box className={`${classes.newPasswordScreen} signInScreen_responsive`}>
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            // width: '100%',
            maxWidth: {
              xl: '34vw',
              lg: '30vw',
              md: '34vw',
              xs: '34vw'
            }
          }}
          className={'gridContainerbelow950_pictureLayout'}
        >
          <NewPasswordForm
            handleSavePassword={handleSavePassword}
            passwordCheck={passwordCheck}
            passwordErrorMsg={passwordErrorMsg}
          />
        </Container>
      </Box>
    </StyledEngineProvider>
  );
};

export default NewPasswordScreen;
