import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { CustomDatePicker, HookFormButton, InputField, RadioField } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import { useSignInFormStyles } from './SignInFormStyles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as pattern from '../../core';

interface RegistrationProps {
  handleRegistration: (e: any) => void;
  goToOTPConfirmation: (e: any) => void;
  passwordCheck: any;
  passwordErrorMsg?: string;
  confirmpasswordCheck: any;
  confirmpasswordErrorMsg?: string;
  birthdateCheck: any;
  birthdateErrorMsg?: string;
}

const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z]+$/;

const RegistrationForm: React.FC<RegistrationProps> = (props) => {
  const classes = useSignInFormStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const genderOptions = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <form className={`${classes.formContent} signinForm`} method="post" noValidate>
      <Typography className={classes.loginHeading}>Create New Account</Typography>

      {/* Email */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="email-label" className={classes.labelClassName}>
          Email
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            labelName="Email address"
            placeholder="Email"
            type="email"
            controlName={'email'}
            register={register}
            errors={errors}
            rules={{ required: true, pattern: pattern.EmailPattern, maxLength: 255 }}
          />
        </Box>
      </Box>

      {/* Password */}

      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="password-label" className={classes.labelClassName}>
          Password
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            placeholder="Password"
            labelName="Password"
            type={showPassword ? 'text' : 'password'}
            controlName={'password'}
            register={register}
            errors={errors}
            rules={{
              required: true,
              validate: {
                checkPassword: (v: any) => props.passwordCheck(v)
              },
              maxLength: 255
            }}
            inputIndormentElement={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            }
            variant="outlined"
          />
        </Box>
      </Box>
      {/* Confirm Password */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="confirmPassword-label" className={classes.labelClassName}>
          Confirm Password
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            placeholder="Confirm Password"
            labelName="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            controlName={'confirmPassword'}
            register={register}
            errors={errors}
            rules={{
              required: true,
              validate: {
                checkConfirmPassword: (v: any) => props.confirmpasswordCheck(v)
              },
              maxLength: 255
            }}
            inputIndormentElement={
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            }
          />
        </Box>
      </Box>

      {/* Full name */}
      <Box sx={{ mt: 4 }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', columnGap: '10px' }}>
          <Box>
            <InputLabel htmlFor="fullName-label" className={classes.labelClassName}>
              First Name
            </InputLabel>
            <Box className={classes.formField}>
              <InputField
                onKeyDown={(event) => {
                  if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                hideLabelName={true}
                placeholder="First Name"
                labelName="First Name"
                type="text"
                controlName={'firstName'}
                register={register}
                errors={errors}
                rules={{ required: true, maxLength: 255 }}
              />
            </Box>
          </Box>
          <Box>
            <InputLabel htmlFor="fullName-label" className={classes.labelClassName}>
              Last Name
            </InputLabel>
            <Box className={classes.formField}>
              <InputField
                onKeyDown={(event) => {
                  if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                hideLabelName={true}
                labelName="Last Name"
                placeholder="Last Name"
                type="text"
                controlName={'lastName'}
                register={register}
                errors={errors}
                rules={{ required: true, maxLength: 255 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Nickname */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="nickname-label" className={classes.labelClassName}>
          Nickname
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
            hideLabelName={true}
            labelName="Nickname"
            placeholder="Nickname"
            type="text"
            controlName={'nickname'}
            register={register}
            errors={errors}
            rules={{ required: true, maxLength: 255 }}
          />
        </Box>
      </Box>

      {/* Sex */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="nickname-label" className={classes.labelClassName}>
          Sex
        </InputLabel>
        <Box className={classes.formField}>
          <RadioField
            isRow={true}
            radioClasses={`${classes.radioGroup} form-control`}
            hideLabelName={true}
            controlName="gender"
            register={register}
            errors={errors}
            rules={{ required: true }}
            options={genderOptions}
            optionValue="value"
            optionName="name"
            control={control}
            labelName="Gender"
            labelClassName={classes.inputLabel}
          />
        </Box>
      </Box>

      {/* Date of Birth */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="birthdate-label" className={classes.labelClassName}>
          Date of Birth
        </InputLabel>
        <Box className={`${classes.formField} ${classes.customDatePicker}`}>
          <CustomDatePicker
            hideLabelName={true}
            controlName={'birthdate'}
            labelName="Date of Birth"
            register={register}
            errors={errors}
            control={control}
            disableFutureDate={true}
            showErrorMsg={true}
            hideLabelBorderError={true}
            rules={{
              required: true,
              validate: {
                checkBirthdate: (v: any) => props.birthdateCheck(v)
              }
            }} />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography className={classes.aggrementText}>
          By signing up you agree to our <Link style={{ cursor: 'pointer' }} href='https://kalibra.ai/terms' target="_blank" rel="noopener noreferrer"> terms of use</Link> and <Link style={{ cursor: 'pointer' }} href='https://kalibra.ai/privacy' target="_blank" rel="noopener noreferrer"> privacy policy</Link>
        </Typography>
        <HookFormButton
          className={classes.signInBtn}
          variant="contained"
          name=" Create Account"
          handleSubmit={handleSubmit((data: any) => props.handleRegistration(data))}
        />
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography className={classes.donnotHaveAccount}>
          Already have an account? <Link style={{ cursor: 'pointer' }} onClick={goToLogin}>Login</Link>
        </Typography>
      </Box>
      {/* <Box sx={{ mt: 3 }}>
        <Typography className={classes.donnotHaveAccount}>
          Have a one-time confirmation code to enter? <Link style={{ cursor: 'pointer' }} onClick={props.goToOTPConfirmation}>Verify</Link>
        </Typography>
      </Box> */}
    </form >
  );
};

export default RegistrationForm;
