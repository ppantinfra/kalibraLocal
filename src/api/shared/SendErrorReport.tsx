import BackendApi from './BackendApi';
import Auth from '@aws-amplify/auth';
import moment from 'moment-timezone';
import { AxiosError, AxiosResponse } from 'axios';
import Config from '../../core/constants/Config';
import { getCurrentUser, getTenantKeyFromLocal } from './CommonApi';

export const sendToKalibra = async (error: AxiosError | AxiosResponse) => {

  const currentSession = await Auth.currentSession();
  const accessToken = currentSession.getAccessToken();
  const idToken = currentSession.getIdToken();
  const refreshToken = currentSession.getRefreshToken();  

  const accessTokenPayload = accessToken.decodePayload();
  const idTokenPayload = idToken.decodePayload();

  const currentUser = await getCurrentUser();

  const errorData = {
    ...error,
    userInfo: {
      tenantKey: getTenantKeyFromLocal(),
      backend_url: Config.BACKEND_API_ENDPOINT,
      cognitoClientId: currentUser.attributes.sub,
      email: currentUser.attributes.email,
      accessToken: {
        jwtToken: accessToken.getJwtToken(),
        clientId: accessTokenPayload.client_id,
        iss: accessTokenPayload.iss,
        tokenUse: accessTokenPayload.token_use,
        scope: accessTokenPayload.scope,
        username: accessTokenPayload.username,
        expiration: accessToken.getExpiration()
      },
      idToken: {
        jwtToken: idToken.getJwtToken(),
        cognitoUsername: idTokenPayload['cognito:username'],
        iss: idTokenPayload.iss,
        expiration: idToken.getExpiration()
      },
      refreshToken: refreshToken.getToken(),
      userLocalTime: moment().format()
    },
    appState: {
      appCommitId: Config.GIT_COMMIT,
      appBranch: Config.APP_BRANCH,
    }
  };

  // Send the error data to the backend

  await BackendApi.post('/errors/send-to-kalibra', errorData);
};  