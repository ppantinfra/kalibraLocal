import React, { useState, FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import { passwordValidator, confirmpasswordValidator, UserService, dateValidator } from '../../core';
import Container from '@mui/material/Container';
import RegistrationForm from '../../components/auth/RegistrationForm';
import { makeStyles } from '@mui/styles';
import moment from 'moment';
import { registerUser, confirmSignUpCode, showLoader, hideLoader } from '../../api/AuthApi';
import OtpConfirmForm from '../../components/auth/OtpConfirmForm';
import { SnackBarsToast } from '../../components/common';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(
  {
    registrationScreen: {
      height: '100vh',
      padding: '100px 0 50px',
      background: '#fff',
      //   display: 'flex',
      alignItems: 'center',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  },
  { index: 1 }
);

const RegistrationScreen: FC = (): ReactElement => {
  const classes = useStyles();
  const [showOtpConfirm, setShowOtpConfirm] = useState<boolean>(false);
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [confirmpasswordErrorMsg, setConfirmPasswordErrorMsg] = useState<string>('');
  const [birthdateErrorMsg, setBirthdateErrorMsg] = useState<string>('');
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();



  const handleRegistration = async (data: any) => {
    //password and cofirm password same checking
    if (data?.password !== data?.confirmPassword) {
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage('Password and Confirm Password must be the same');
      return;
    }

    showLoader();
    // Creating user through amplify
    const result = await registerUser(
      data?.email,
      data?.password,
      data?.firstName + ' ' + data?.lastName,
      data?.nickname,
      data?.gender,
      moment(data?.birthdate).format('YYYY-MM-DD')
    );
    if (result?.error) {
      hideLoader();
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage(result?.error?.message ? result?.error?.message : 'Something went wrong!');
    } else {
      //creating user in the database
      const userInfo = {
        cognitoId: result.userSub,
        name: data?.firstName + ' ' + data?.lastName,
        nickname: data?.nickname,
        email: data?.email,
        gender: data?.gender,
        birthdate: moment(data?.birthdate).format('YYYY-MM-DD'),
      };
      const userResponse: any = await UserService.addUserBeforeAuthenticate(userInfo);
      if (userResponse) {
        if (userResponse?.error) {
          hideLoader();
          setIsError(true);
          setOpenSnackBar(true);
          setSnackBarMessage(userResponse?.error ? userResponse?.error : 'Something went wrong!');
        } else {
          hideLoader();
          setConfirmEmail(userInfo.email);
          setShowOtpConfirm(true);
        }
      } else {
        hideLoader();
        setIsError(true);
        setOpenSnackBar(true);
        setSnackBarMessage(userResponse?.error ? userResponse?.error : 'Something went wrong!');
      }

    }
  };

  const handleOtpValidate = async (data: any) => {
    showLoader();
    // Creating user through amplify
    const result = await confirmSignUpCode(confirmEmail, data?.otp);
    if (result?.error) {
      hideLoader();
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage(result?.error ? result?.error.message : 'Something went wrong!');
    } else {
      hideLoader();
      setIsError(false);
      setOpenSnackBar(true);
      setSnackBarMessage('Otp Verified Success!');
      navigate('/');
    }
  };

  const passwordCheck = (data: string) => {
    const error = passwordValidator(data);
    setPassword(data);
    if (error.length > 0) {
      setPasswordErrorMsg(error);
      return error;
    } else {
      return true;
    }
  };

  const confirmpasswordCheck = (confirmpassword: string) => {
    const error = confirmpasswordValidator(password, confirmpassword);
    if (error.length > 0) {
      setConfirmPasswordErrorMsg(error);
      return error;
    } else {
      return true;
    }
  };

  const birthdateCheck = (date: string) => {
    const error = dateValidator('YYYY-MM-DD', date);
    if (error.length > 0) {
      setBirthdateErrorMsg(error);
      return error;
    } else {
      return true;
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />

      <Box className={`${classes.registrationScreen} signInScreen_responsive`}>
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
          {!showOtpConfirm ?
            //Signup form
            <RegistrationForm
              handleRegistration={handleRegistration}
              passwordCheck={passwordCheck}
              passwordErrorMsg={passwordErrorMsg}
              confirmpasswordErrorMsg={confirmpasswordErrorMsg}
              confirmpasswordCheck={confirmpasswordCheck}
              goToOTPConfirmation={() => { setShowOtpConfirm(true); }}
              birthdateCheck={birthdateCheck}
              birthdateErrorMsg={birthdateErrorMsg}
            />
            :
            //Otp confirm form
            <OtpConfirmForm
              handleOptValidate={handleOtpValidate}
              confirmEmail={confirmEmail}
              goToSignup={() => { setShowOtpConfirm(false); }}
            />

          }

        </Container>
      </Box>
    </StyledEngineProvider>
  );
};

export default RegistrationScreen;
