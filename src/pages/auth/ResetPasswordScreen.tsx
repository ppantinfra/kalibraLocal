import React, { FC, ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { ResetPasswordForm } from '../../components/auth/';
import { Auth } from 'aws-amplify';
import { SnackBarsToast } from '../../components/common';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(
  {
    resetPasswordScreen: {
      height: '100vh',
      // padding: '100px 0 50px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  },
  { index: 1 }
);

const ResetPasswordScreen: FC = (): ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isSentEmail, setIsSentEmail] = React.useState<boolean>(false);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleSendLink = async (data: any) => {
    // navigate('/');
    try {
      const result = await Auth.forgotPassword(data.email);
      if (result?.CodeDeliveryDetails !== undefined) {
        setIsSentEmail(true);
      }
    } catch (error: any) {
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage(error?.message ? error?.message : 'Something Went Wrong...');

    }
  };
  const handleResendLink = () => {
    // navigate('/');
    setIsSentEmail(true);
  };

  return (
    <>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />

      <StyledEngineProvider injectFirst>
        <Box className={`${classes.resetPasswordScreen} signInScreen_responsive`}>
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
            <ResetPasswordForm
              handleSendLink={handleSendLink}
              handleResendLink={handleResendLink}
              isSentEmail={isSentEmail}
              goToLogin={() => { navigate('/'); }}
            />
          </Container>
        </Box>
      </StyledEngineProvider>
    </>
  );
};

export default ResetPasswordScreen;
