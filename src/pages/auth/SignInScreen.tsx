import React, { useState, FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { IUser, UserService, UsernameOrEmailValidator, passwordValidator, Config } from '../../core';
import { setUserLocal } from '../../api/shared/CommonApi';
import { SignInFrom } from '../../components/auth/';
import { SnackBarsToast } from '../../components/common/';
import { loginUser, showLoader, hideLoader, confirmSignUpCode } from '../../api/AuthApi';
import { useSignInScreenStyles } from './SignInScreenStyles';
import Container from '@mui/material/Container';
import { RoutesPath as route } from '../../core/constants';
import OtpConfirmForm from '../../components/auth/OtpConfirmForm';
import { setWebPushExternalUserId } from '../../api/WebPushAPI';
import { logEvent, initAnalytics } from '../../api/Analytics';
import { handshake, HandshakeVariant } from '../../api/shared/Handshake';
import Auth from '@aws-amplify/auth';

const SignInScreen: FC = (): ReactElement => {
  const navigate = useNavigate();
  const classes = useSignInScreenStyles();

  const [values, setValues] = useState<IUser>({
    username: '',
    password: '',
    showPassword: false
  });

  const [showOtpConfirm, setShowOtpConfirm] = useState<boolean>(false);
  const [confirmEmail, setConfirmEmail] = useState<string>('');
  const [emailTextError, setEmailTextError] = useState<string>('');
  const [passwordTextError, setPasswordTextError] = useState<string>('');
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const passwordCheck = (data: string) => {
    const error = passwordValidator(data);
    if (error) {
      setPasswordErrorMsg(error);
      return false;
    } else {
      return true;
    }
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });

    const uName: string = values.username as string;
    const uPassword: string = values.password as string;

    const emailError = UsernameOrEmailValidator(uName);
    if (uName && emailError) {
      setEmailTextError(emailError);
    } else setEmailTextError('');

    const passwordError = passwordValidator(uPassword);
    if (uPassword && passwordError) {
      setPasswordTextError(passwordError);
    } else setPasswordTextError('');
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const showError = (errorMessage: string) => {
    setIsError(true);
    setOpenSnackBar(true);
    setSnackBarMessage(errorMessage);
  };

  const handleLoginContextAndNavigate = async (userId: any, jobTitle: string, roles: any) => {
    try {
      const response = await UserService.getUserDetails(userId);
      if (response.data !== undefined) {
        const obj = { ...response.data, jobTitle: jobTitle, roles: roles };
        setUserLocal(obj);
        if (response.data.name && response.data.gender && response.data.nickname) {
          navigate(route.CONFIRMATIONTENANT);
        } else {
          navigate(route.PROFILEROUTE);
        }

        // window.location.reload();
        setIsError(false);
      } else {
        showError(String('Something went wrong!'));
      }
    } catch (error) {
      showError(String(error));
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
      setShowOtpConfirm(false);
    }
  };

  const handleLogin = async (data: any) => {
    showLoader();
    try {
      await loginUser(data.email, data.password)
        .then(async (res: any) => {

          if (res?.error) {
            if (res?.error?.code == 'UserNotConfirmedException') {
              setConfirmEmail(data.email);
              setShowOtpConfirm(true);
            } else {
              showError(res?.error?.message);
            }
          } else {
            // const jobTitle= arrayData.find(item => item.key === "baz");
            const session = await Auth.currentSession();
            const token = session.getIdToken().getJwtToken();
            await handshake(HandshakeVariant.POST_AUTH, token);
            await setWebPushExternalUserId();
            initAnalytics(Config.AMPLITUDE_API_KEY);
            logEvent('SignIn');
            handleLoginContextAndNavigate(res.signInUserSession.idToken.payload.sub, res.attributes['custom:jobtitle'], res.attributes['custom:roles']);
          }
          hideLoader();
        })
        .catch((err: Error) => {
          showError(err.message);
        });
    } catch (error) {
      hideLoader();
      showError('login failed!');
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

      <Box className={`${classes.signInScreen} signInScreen_responsive`}>
        <Container
          component="section"
          maxWidth="lg"
          sx={{
            // width: "100%",
            maxWidth: {
              xl: '34vw',
              lg: '30vw',
              md: '34vw',
              xs: '34vw'
            }
            // background: "#fff",
          }}
          className={'gridContainerbelow950_pictureLayout'}
        >
          {!showOtpConfirm ?
            //Signup form
            <SignInFrom
              handleChange={handleChange}
              values={values}
              handleLogin={handleLogin}
              handleMouseDownPassword={handleMouseDownPassword}
              handleClickShowPassword={handleClickShowPassword}
              // emailTextError={emailTextError}
              // passwordTextError={passwordTextError}
              passwordCheck={passwordCheck}
              passwordErrorMsg={passwordErrorMsg}
            // handleSocialSignIn={handleLoginContextAndNavigate}
            />

            :
            //Otp confirm form
            <OtpConfirmForm
              handleOptValidate={handleOtpValidate}
              confirmEmail={confirmEmail}
              goToLogin={() => { setShowOtpConfirm(false); }}
            />

          }

        </Container>
      </Box>
    </StyledEngineProvider>
  );
};

export default SignInScreen;

