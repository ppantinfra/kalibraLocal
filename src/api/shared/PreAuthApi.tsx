import axios from 'axios';
import * as moment from 'moment-timezone';
import { Config } from '../../core';

const PreAuthApi = axios.create({
    baseURL: Config.BACKEND_API_ENDPOINT,
    // timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'The-Timezone-IANA': moment.tz.guess()
    }
});

export default PreAuthApi;