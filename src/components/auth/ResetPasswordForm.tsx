import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { HookFormButton, InputField } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import { useSignInFormStyles } from './SignInFormStyles';
import { useForm } from 'react-hook-form';
import * as pattern from '../../core';
import ResetPasswordOtpConfirm from './ResetPasswordOtpConfirm';
import Link from '@mui/material/Link';

interface RegistrationProps {
  handleSendLink: (e: any) => void;
  handleResendLink: (e: any) => void;
  goToLogin: () => void;
  isSentEmail?: boolean;
}

const ResetPasswordForm: React.FC<RegistrationProps> = (props) => {
  const classes = useSignInFormStyles();
  const [email, setEmail] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors }
    // control
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  return (
    <React.Fragment>
      {props.isSentEmail === true ? (
        <ResetPasswordOtpConfirm email={email} />
      ) : (
        <form className={`${classes.formContent} signinForm`} method="get" noValidate={false}>
          <Typography className={classes.loginHeading}>Reset Password</Typography>
          <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', color: '#000000', marginTop: '24px' }}>
            Enter the email address associated with your account and we’ll send you a link to reset your password if an account exists.
          </Typography>

          {/* Email */}
          <Box sx={{ mt: 3 }}>
            <InputLabel htmlFor="email-label" className={classes.labelClassName}>
              Email
            </InputLabel>
            <Box className={classes.formField}>
              <InputField
                hideLabelName={true}
                placeholder="Email"
                labelName="Email address"
                type="email"
                controlName={'email'}
                register={register}
                errors={errors}
                rules={{ required: true, pattern: pattern.EmailPattern, maxLength: 255 }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <HookFormButton
              className={classes.signInBtn}
              variant="contained"
              name="Send Link"
              handleSubmit={handleSubmit((data: any) => {
                data.email = data.email.trim();
                setEmail(data?.email);
                props.handleSendLink(data);
              })}
            />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography className={classes.donnotHaveAccount}>
              Already have an account? <Link style={{ cursor: 'pointer' }} onClick={props.goToLogin}>Login</Link>
            </Typography>
          </Box>

        </form>
      )}
    </React.Fragment>
  );
};

export default ResetPasswordForm;
