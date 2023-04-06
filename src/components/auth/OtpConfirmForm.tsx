import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { HookFormButton, InputField, SnackBarsToast } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import { useSignInFormStyles } from './SignInFormStyles';
// import * as pattern from '../../core';
import { useForm } from 'react-hook-form';
import Link from '@mui/material/Link';
import { Alert, Button, IconButton, Snackbar } from '@mui/material';
// import { Auth } from 'aws-amplify';
import CloseIcon from '@mui/icons-material/Close';
import { hideLoader, resendSignUpCode, showLoader } from '../../api/AuthApi';
import { AxiosError } from 'axios';
import ErrorDialog from '../common/errorDialog/ErrorDialog';

interface RegistrationProps {
  handleOptValidate: (e: any) => void;
  confirmEmail: string;
  goToLogin?: () => void;
  goToSignup?: () => void;
}

const OtpConfirmForm: React.FC<RegistrationProps> = (props) => {
  const classes = useSignInFormStyles();
  const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = React.useState<string>('');
  const [isError, setIsError] = React.useState<boolean>(false);
  const [resendSnackbar, setResendSnackbar] = useState<boolean>(false);
  const [resendMessage, setResendMessage] = useState<string>('');
  const [resendError, setResendError] = useState<boolean>(false);
  const [disabledResend, setDisabledResend] = useState<boolean>(false);
  const [visibleErrorDialog, setVisibleErrorDialog] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>({} as AxiosError);

  const resendOTPMessage = `A new OTP has been sent to ${props.confirmEmail}, if you have not received the OTP in your Inbox, please check your spam and junk folders.`;
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setResendSnackbar(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  // const resendVerificationCode = async () => {
  //   try {
  //     await Auth.resendSignUp(props.confirmEmail);
  //   } catch (error) {
  //     setIsError(true);
  //     setOpenSnackBar(true);
  //     setSnackBarMessage(String(error));
  //   }
  // };

  const handleOtpResend = async () => {
    showLoader();

    // After requesting a resend the button gets disabled for 1min
    setDisabledResend(true);
    setTimeout(() => {
      setDisabledResend(false);
    }, 1000 * 60);

    await resendSignUpCode(props.confirmEmail)
      .then(res => {
        if (res.data) {
          setResendError(false);
          setResendMessage(resendOTPMessage);
          setResendSnackbar(true);
        } else {
          setResendError(true);
          setResendMessage('This email isn\'t assigned to any account or is already verified. Try a different email, or sign up instead');
          setResendSnackbar(true);
        }
      }).catch(err => {
        setError(err);
        setVisibleErrorDialog(true);
      });
    hideLoader();
  };

  return (
    // Otp confirmation Screen
    <form className={`${classes.formContent} signinForm`} method="post" noValidate>

      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />

      <Typography className={classes.otpHeading}>
        Great, nearly there! We have verified your email and sent you an OTP code
          </Typography>

      <Typography className={classes.otpSubHeading}>
        Type in the OTP code to join Kalibra
          </Typography>

      {/* Email */}
      {/* <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="email-label" className={classes.labelClassName}>
          Email
            </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            labelName="Email address"
            defaultValue={props.confirmEmail}
            placeholder="Email"
            type="text"
            controlName={'email'}
            register={register}
            errors={errors}
            rules={{ required: true, pattern: pattern.EmailPattern }}
          />
        </Box>
      </Box> */}

      {/* Kalibra Code */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="kalibraCode-label" className={classes.labelClassName}>
          One Time Code
            </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            labelName="One Time Code"
            placeholder="One Time Code"
            type="text"
            controlName={'otp'}
            register={register}
            errors={errors}
            rules={{ required: true, maxLength: 255 }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <HookFormButton
          className={classes.signInBtn}
          variant="contained"
          name="Submit"
          handleSubmit={handleSubmit((data: any) => props.handleOptValidate(data))}
        // handleSubmit={handleSubmit((data: any) =>handleRegistration(data))}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          variant={'text'}
          color={'primary'}
          size="small"
          disableElevation={true}
          onClick={handleOtpResend}
          className={classes.resendOTPBtn}
          disabled={disabledResend}
        >
          Resend Code
        </Button>
      </Box>
      {/* <Box sx={{ mt: 3 }}>
        <Typography className={classes.otpResendText}>
          {'You haven\'t received verification code yet. Click '}
          <Link onClick={() => { resendVerificationCode(); }} >
            here
      </Link>
          {' to request a code again.'}
        </Typography>
      </Box> */}

      <Box sx={{ mt: 3 }}>
        {props.goToLogin !== undefined ?
          <Typography className={classes.otpResendText}>
            Already have an account? <Link style={{ cursor: 'pointer' }} onClick={props.goToLogin}>Login</Link>
          </Typography>
          :
          <Typography className={classes.otpResendText}>
            {'Don\'t have a account?'} <Link onClick={props.goToSignup}>Sign Up</Link>
          </Typography>
        }
      </Box>
      <Snackbar
        open={resendSnackbar}
        autoHideDuration={6000}
        onClose={() => setResendSnackbar(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Alert severity={resendError ? 'error' : 'success'} action={action}>
          {resendMessage}
        </Alert>
      </Snackbar>
      <ErrorDialog
        openDialog={visibleErrorDialog}
        setOpenDialog={setVisibleErrorDialog}
        error={error}
      />
    </form>
  );
};

export default OtpConfirmForm;