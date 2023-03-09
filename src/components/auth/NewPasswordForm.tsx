import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { HookFormButton, InputField } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import { useSignInFormStyles } from './SignInFormStyles';
// import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import * as pattern from '../../core';

interface RegistrationProps {
  handleSavePassword: (e: any) => void;
  passwordCheck: any;
  passwordErrorMsg?: string;
}

const NewPasswordForm: React.FC<RegistrationProps> = (props) => {
  const classes = useSignInFormStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
    // control
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <form className={`${classes.formContent} signinForm`} method="post" noValidate>
      <Typography className={classes.loginHeading}>Create New Password</Typography>
      <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', color: '#000000', marginTop: '24px' }}>
        Your new password must be different from the previous password, minimum 8 characters long and contain atleast 1
        capital letter, number and special character.
      </Typography>

      {/* Password */}
      <Box sx={{ mt: 4 }}>
        <InputLabel htmlFor="password-label" className={classes.labelClassName}>
          Password
        </InputLabel>
        <Box className={classes.formField}>
          <InputField
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
            type={showConfirmPassword ? 'text' : 'password'}
            controlName={'confirmPassword'}
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
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownConfirmPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
              </IconButton>
            }
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Save Password */}
      <Box sx={{ mt: 4 }}>
        <HookFormButton
          className={classes.signInBtn}
          variant="contained"
          name="Save Password"
          handleSubmit={handleSubmit((data: any) => props.handleSavePassword(data))}
        />
      </Box>
    </form>
  );
};

export default NewPasswordForm;
