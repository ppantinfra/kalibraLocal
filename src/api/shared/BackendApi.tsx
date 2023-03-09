import axios from 'axios';
import * as moment from 'moment-timezone';
import { Config } from '../../core';



// Create axios client, pre-configured with baseURL
const BackendApi = axios.create({
    baseURL: Config.BACKEND_API_ENDPOINT,
    // timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'The-Timezone-IANA': moment.tz.guess()
    }
});

export default BackendApi;
