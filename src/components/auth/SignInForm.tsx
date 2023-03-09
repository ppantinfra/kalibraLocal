import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { HookFormButton, InputField } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSignInFormStyles } from './SignInFormStyles';
import { RoutesPath as route } from '../../core/constants';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as pattern from '../../core';
// import SingleSignIn from './SingleSignIn';

interface SignInProps {
  values: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: any) => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  passwordCheck: any;
  passwordErrorMsg?: string;
  // handleSocialSignIn: (userId: string) => void;
}

const SignInFrom: React.FC<SignInProps> = (props) => {
  const classes = useSignInFormStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  // const goToRegistration = () => {
  //   navigate(`/${route.REGISTRATIONMODULE}`);
  // };
  const goToResetPassword = () => {
    navigate(`/${route.RESETPASSWORDMODULE}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <form className={`${classes.formContent} signinForm`} method="post" noValidate>
      <Typography className={classes.loginHeading}>Login</Typography>
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="email-label" className={classes.labelClassName}>
          Username
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            labelName='Email Address'
            placeholder="Email"
            type="email"
            controlName={'email'}
            register={register}
            errors={errors}
            rules={{ required: true, pattern: pattern.EmailPattern }}
          />
        </Box>
        {/* {props.emailTextError ? <ErrorMessage errorMessage={props.emailTextError} /> : ''} */}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <InputLabel htmlFor="password-label" className={classes.labelClassName}>
            Password
          </InputLabel>
          <Link style={{ cursor: 'pointer' }} className={classes.forgotLink} onClick={goToResetPassword}>
            Forgot Password?
          </Link>
        </Box>
        <Box className={classes.formField}>
          <InputField
            labelName='Password'
            hideLabelName={true}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            controlName={'password'}
            register={register}
            errors={errors}
            rules={{
              required: true,
              validate: {
                checkPassword: (v: any) => props.passwordCheck(v) || props.passwordErrorMsg
              }
            }}
            inputIndormentElement={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffOutlinedIcon className={classes.visibilityIcon} /> : <VisibilityOutlinedIcon className={classes.visibilityIcon} />}
              </IconButton>
            }
            variant="outlined"
          />
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <FormControlLabel control={<Checkbox />} label="Remember me" className={classes.checkBoxLabel} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <HookFormButton
          className={classes.signInBtn}
          variant="contained"
          name="Log In"
          handleSubmit={handleSubmit((data: any) => props.handleLogin(data))}
        />
      </Box>

      {/* <SingleSignIn handleSingleSignIn={props.handleSocialSignIn} /> */}

      {/* <Box sx={{ mt: 3 }}>
        <Typography className={classes.donnotHaveAccount}>
          Don’t have an account? <Link style={{ cursor: 'pointer' }} onClick={goToRegistration}>Sign Up</Link>
        </Typography>
      </Box> */}
    </form>
  );
};

export default SignInFrom;
