import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { HookFormButton, InputField, SnackBarsToast, SuccessDialog } from '../common/';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import { useResetPasswordStyles } from './';
// import * as pattern from '../../core';
import { passwordValidator } from '../../core';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Link from '@mui/material/Link';

interface IProps {
    email: string;
}

const ResetPasswordOtpConfirm = ({ email }: IProps) => {
    const navigate = useNavigate();
    const classes = useResetPasswordStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordErrorMsg, setPasswordErrorMsg] = React.useState<string>('');
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        shouldFocusError: false
    });
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const passwordCheck = (data: string) => {
        const error = passwordValidator(data);
        if (error) {
            setPasswordErrorMsg(error);
            return false;
        } else {
            return true;
        }
    };

    const submitData = async (data: any) => {
        try {
            await Auth.forgotPasswordSubmit(email, data.otp, data.password);
            setShowSuccessPopup(true);
        } catch (error: any) {
            setIsError(true);
            setOpenSnackBar(true);
            setSnackBarMessage(error?.message ? error?.message : 'Something Went Wrong...');
        }
    };

    return (

        <>
            <SnackBarsToast
                openSnackBar={openSnackBar}
                snackBarMessage={snackBarMessage}
                isError={isError}
                setOpenSnackBar={setOpenSnackBar}
            />
            <form className={`${classes.formContent} signinForm`} method="post" noValidate>


                <Typography className={classes.otpHeading}>
                    Great, nearly there! We have verified your email and sent you an OTP code
                </Typography>

                <Typography className={classes.otpDescription} >
                    Type in the OTP code and your new password to get back into Kalibra
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
                            defaultValue={email}
                            placeholder="Email"
                            type="text"
                            controlName={'email'}
                            register={register}
                            errors={errors}
                            rules={{ required: true, pattern: pattern.EmailPattern }}
                        />
                    </Box>
                </Box> */}

                {/* Password */}
                <Box sx={{ mt: 4 }}>
                    <InputLabel htmlFor="password-label" className={classes.labelClassName}>
                        Password
                    </InputLabel>
                    <Box className={classes.formField}>
                        <InputField
                            labelName="Password"
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            controlName={'password'}
                            register={register}
                            errors={errors}
                            rules={{
                                required: true,
                                validate: {
                                    checkPassword: (v: any) => passwordCheck(v) || passwordErrorMsg
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
                            hideLabelName={true}
                        />
                    </Box>
                </Box>

                {/* One Time Code */}
                <Box sx={{ mt: 4 }}>
                    <InputLabel htmlFor="kalibraCode-label" className={classes.labelClassName}>
                        One Time Code
                    </InputLabel>
                    <Box className={classes.formField}>
                        <InputField
                            labelName="One Time Code"
                            placeholder="One Time Code"
                            type="text"
                            controlName={'otp'}
                            register={register}
                            errors={errors}
                            rules={{ required: true }}
                            hideLabelName={true}
                        />
                    </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <HookFormButton
                        className={classes.signInBtn}
                        variant="contained"
                        name="Submit"
                        handleSubmit={handleSubmit((data: any) => submitData(data))}
                    // handleSubmit={handleSubmit((data: any) => handleRegistration(data))}
                    />
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography className={classes.donnotHaveAccount}>
                        Already have an account? <Link style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); }}>Login</Link>
                    </Typography>
                </Box>
            </form >

            {showSuccessPopup && (
                <SuccessDialog
                    showSuccessPopup={false}
                    setShowSuccessPopup={setShowSuccessPopup}
                    successMessage="Password updated successfully"
                    successDescription=""
                    successNotifyMessage=""
                    showDoneButton={true}
                    successDialogCloseHandler={() => {
                        setShowSuccessPopup(false);
                        navigate('/');
                    }}
                />
            )}
        </>
    );
};

export default ResetPasswordOtpConfirm;