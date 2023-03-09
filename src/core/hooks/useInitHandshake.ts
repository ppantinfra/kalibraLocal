import { Auth } from '@aws-amplify/auth';
import { Amplify } from '@aws-amplify/core';
import Config from '../../core/constants/Config';
import { useEffect, useState } from 'react';
import { handshake, HandshakeVariant } from '../../api/shared/Handshake';
import { showLoader, hideLoader } from '../../api/AuthApi';

export const useInitHandshake = () => {
    const [isHandshakeComplete, setIsHandshakeComplete] = useState<boolean>(false);
    const [isPreHandshakeComplete, setIsPreHandshakeComplete] = useState<boolean>(false);


    useEffect(() => {
        showLoader();
        (async () => {
            await handshake(HandshakeVariant.PRE_AUTH);
            Amplify.configure({
                Auth: {
                    identityPoolId: Config.COGNITO_IDENTITY_POOL_ID,
                    region: Config.AWS_REGION,
                    userPoolId: Config.COGNITO_USER_POOL_ID,
                    userPoolWebClientId: Config.COGNITO_USER_POOL_WEB_CLIENT_ID,
                    oauth: {
                    domain: Config.COGNITO_DOMAIN,
                    scope: ['aws.cognito.signin.user.admin', 'email', 'profile', 'openid', 'phone'],
                    redirectSignIn: Config.COGNITO_REDIRECT_SIGNIN_WEB,
                    redirectSignOut: Config.COGNITO_REDIRECT_SIGNOUT_WEB,
                    // redirectSignIn: Config.COGNITO_REDIRECT_SIGNIN,
                    // redirectSignOut: Config.COGNITO_REDIRECT_SIGNOUT,
                    responseType: 'code',
                    options: {
                        AdvancedSecurityDataCollectionFlag: false
                    },
                    urlOpener: undefined
                    },
                },
                Analytics: {
                    disabled: true,
                },
                });
            setIsPreHandshakeComplete(true);
            hideLoader();
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (isPreHandshakeComplete) {
                showLoader();
                try {
                    const result = await Auth.currentSession();
                    if (result) {
                        const token = result.getIdToken().getJwtToken();
                        await handshake(HandshakeVariant.POST_AUTH, token);
                    }
                    setIsHandshakeComplete(true);
                    hideLoader();
                } catch {
                    setIsHandshakeComplete(true);
                    hideLoader();
                }
            }
        })();
    }, [isPreHandshakeComplete]);
    
    return {
        isHandshakeComplete: isHandshakeComplete
    };
};