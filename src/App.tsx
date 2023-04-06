import React, { useState } from 'react';
import './App.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme, StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import InnerApp from './InnerApp';
import BackendApi from './api/shared/BackendApi';
import { Auth } from '@aws-amplify/auth';
import { SnackBarsToast } from './components/common';
import { CommonContextProvider } from './core/context';
import { getTenantKeyFromLocal } from './api/shared/CommonApi';
import { showLoader, hideLoader } from './api/AuthApi';
import { useInitHandshake } from './core/hooks/useInitHandshake';
import { AxiosError, AxiosResponse } from 'axios';
import ErrorDialog from './components/common/errorDialog/ErrorDialog';
import { Config } from './core';
import { initializeOneSignalWeb } from './api/WebPushAPI';
import { initAnalytics } from './api/Analytics';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const App: React.FC = () => {

  const initHandshake = useInitHandshake();
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | AxiosResponse>({} as AxiosError);
  const [is401Error, setIs401Error] = useState<boolean>(false);


  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: '#63b8ff',
        main: '#0989e3',
        dark: '#005db0',
        contrastText: '#000',
      },
      secondary: {
        main: '#4db6ac',
        light: '#82e9de',
        dark: '#00867d',
        contrastText: '#000',
      },
    },
  });

  let numberOfAjaxCAllPending = 0;
  // Set JSON Web Token in Client to be included in all calls
  BackendApi.interceptors.request.use(async (config: any) => {
    numberOfAjaxCAllPending++;
    showLoader();

    const tenantKey = getTenantKeyFromLocal();
    if (tenantKey) {
      config.headers.tenant = `${tenantKey}`;
    }
    const result = await Auth.currentSession();
    if (result) {
      const token = result.getIdToken().getJwtToken();
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['x-access-token'] = `${token}`;
    }
    return config;
  });

  BackendApi.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending === 0) {
      hideLoader();
    }

    if (!(response && response.status >= 200 && response.status <= 399)) { //if error comes then api response set to null
      return Promise.reject(response);
    } else { //if no error then api response is the actual response
      return response;
    }
  }, function (err) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    numberOfAjaxCAllPending--;
    // console.log(error?.request?.responseURL);
    if (numberOfAjaxCAllPending === 0) {
      hideLoader();
    }

    if (err?.response?.status === 401) {
      setIs401Error(true);
      setError(err);
      setIsError(true);
      localStorage.clear();
      return Promise.reject(err);
    } else {
      setIs401Error(false);
      setError(err);
      setIsError(true);
      return Promise.reject(err);
    }


  });

  const RenderRoute = () => {
    return (
      <Routes>
        <Route path='/*' element={<InnerApp />} />
      </Routes >
    );
  };

  React.useEffect(() => {
    if (initHandshake.isHandshakeComplete === true) {
      initializeOneSignalWeb(Config.ONESIGNAL_APP_ID);
      initAnalytics(Config.AMPLITUDE_API_KEY);
    }
  }, [initHandshake.isHandshakeComplete]);

  return (!initHandshake.isHandshakeComplete) ? (<></>) : (
    <>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        setOpenSnackBar={setOpenSnackBar}
      />
      <ErrorDialog
        openDialog={isError}
        setOpenDialog={setIsError}
        error={error}
        is401Error= {is401Error}
      />

      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CacheProvider value={cache}>
            <CssBaseline />
            <Box className='page_wrapper'>
              <Router>

                <CommonContextProvider>
                  {RenderRoute()}
                </CommonContextProvider>
              </Router>
            </Box>
          </CacheProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

