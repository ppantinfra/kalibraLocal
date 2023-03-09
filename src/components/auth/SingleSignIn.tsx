import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import googleLogo from '../../assets/images/Google__G__Logo.svg';
import appleLogo from '../../assets/images/Apple_logo_black.svg';
// import facebookLogo from '../../assets/images/Facebook_f_logo.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useSignInFormStyles } from './SignInFormStyles';
import { UserService } from '../../core';
import { SnackBarsToast } from '../common';
import { showLoader, hideLoader } from '../../api/AuthApi';
import { setUserLocal } from '../../api/shared/CommonApi';
type Iprops = {
    handleSingleSignIn: any
};

const SingleSignIn = ({ handleSingleSignIn }: Iprops) => {

    const classes = useSignInFormStyles();
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    const getOrCreateUserInfo = async (cognitoUser?: any) => {
        // const userInfo = {
        //     cognitoId: cognitoUser?.signInUserSession?.idToken?.payload?.sub,
        //     name: cognitoUser.attributes.name || 'hanish',
        //     nickname: cognitoUser.attributes.nickname || 'hk',
        //     email: cognitoUser.attributes.email,
        //     gender: cognitoUser.attributes.gender || 'male',
        //     birthdate: cognitoUser.attributes.birthdate || '1980-01-31',
        //     sub: cognitoUser.attributes.sub,
        //     // picture : 'test'
        // };
        // //condition used for not to call api for create user while login through credentials
        // if (!cognitoUser.attributes.name || !cognitoUser.attributes.nickname || !cognitoUser.attributes.gender || !cognitoUser.attributes.birthdate) {
        //     try {
        //         await UserService.addUserAfterAuthenticate(userInfo);

        //     } catch (error: any) {
        //         hideLoader();

        //         setIsError(true);
        //         setOpenSnackBar(true);
        //         setSnackBarMessage(error ? error : 'Something went wrong!');

        //     }
        // }

        handleSingleSignIn(cognitoUser?.signInUserSession?.idToken?.payload?.sub);
    };



    const processSignInUp = async () => {
        const currentUser: any = await Auth.currentAuthenticatedUser();
        if (currentUser) {
            await setUserLocal(currentUser.UserAttributes);
            await UserService.getUserDetails(currentUser.UserAttributes.sub);
            const info: any = await getOrCreateUserInfo(currentUser);
            if (info?.error) {
                hideLoader();
                setIsError(true);
                setOpenSnackBar(true);
                setSnackBarMessage(info?.error ? info?.error : 'Something went wrong!');
            }
        } else {
            hideLoader();
        }


        // if (currentUser) {
        //     handleSingleSignIn(currentUser?.signInUserSession?.idToken?.payload?.sub);
        // } else {
        //     //write code for creation of user account in our database here
        //     document.body.classList.remove('loading-indicator');
        // }
    };


    useEffect(() => {
        const unsubscribe = Hub.listen('auth', ({ payload: { event } }) => {
            switch (event) {
                case 'signIn':
                    processSignInUp();
                    break;
                case 'signOut':
                    break;
                case 'customOAuthState':
                    break;
            }
        });

        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSingleSignInClick = (provider: any) => {
        showLoader();
        Auth.federatedSignIn({ provider: provider });
    };
    return (

        <>
            <SnackBarsToast
                openSnackBar={openSnackBar}
                snackBarMessage={snackBarMessage}
                isError={isError}
                setOpenSnackBar={setOpenSnackBar}
            />



            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography>or login with</Typography>
                <Box className={classes.SocialLinks} sx={{ mt: 3 }}>
                    {/* <Link className='animatedIcon' onClick={() => onSingleSignInClick(CognitoHostedUIIdentityProvider.Facebook)} color='inherit'>
                    <img src={facebookLogo} alt='google' />
                    Facebook
                </Link> */}

                    <Link className='animatedIcon' onClick={() => onSingleSignInClick(CognitoHostedUIIdentityProvider.Apple)} color='inherit'>
                        <img src={appleLogo} alt='apple' />
                        Apple
                    </Link>

                    <Link className='animatedIcon' onClick={() => onSingleSignInClick(CognitoHostedUIIdentityProvider.Google)} color='inherit'>
                        <img src={googleLogo} alt='facebook' />
                        Google
                    </Link>
                </Box>
            </Box>
        </>
    );


};

export default SingleSignIn;