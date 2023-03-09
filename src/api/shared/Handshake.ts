import Config, { ConfigType } from '../../core/constants/Config';
import axios from 'axios';
import moment from 'moment-timezone';

export enum HandshakeVariant {
    PRE_AUTH = 'pre-auth',
    POST_AUTH = 'after-auth'
}

export const handshake = async (variant: HandshakeVariant, userToken?: string) => {
    
    const appCommitId = Config.GIT_COMMIT;
    const appBranch = Config.APP_BRANCH;

    const clientTime = moment().format();

    const postData = {
      appCommitId: appCommitId,
      appBranch: appBranch,
      clientTime: clientTime,
      apiKey: Config.HANDSHAKE_API_KEY
    };

    const tenant = localStorage.getItem('tenant');

    return axios.post(`${Config.BACKEND_API_ENDPOINT}/handshake/pro-${variant}`, postData, {
        headers: {
            'Content-Type': 'application/json',
            'The-Timezone-IANA': moment.tz.guess(),
            'Authorization': `Bearer ${userToken}`,
            'Tenant': `${tenant}`,
        }
    })
    .then(response => {
        
        const newEnv = response.data.envVars.reduce((prev: any, curr: any) => {
            prev[curr.name.replace('PRO_', '').replace('REACT_APP_', '')] = curr.value ? curr.value : Config[curr.name.replace('PRO_', '').replace('REACT_APP_', '') as keyof ConfigType];            
            return prev;
        }, {});

        let configKey: keyof ConfigType;

        for (configKey in Config) {
          if (newEnv[configKey]) {
            (Config as any)[configKey] = newEnv[configKey];
          }
        }

    }).catch(err => console.debug(err));
  };