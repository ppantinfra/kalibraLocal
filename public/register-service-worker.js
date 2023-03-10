/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('SW_PUBLIC_URL/OneSignalSDKUpdaterWorker.js', {
        scope: 'SW_PUBLIC_SCOPE'
      })
      .register('SW_PUBLIC_URL/OneSignalSDKWorker.js', {
        scope: 'SW_PUBLIC_SCOPE'
      })
      .then(function (info) {
        console.info('Registered service-worker', info);
      })
      .catch(function (error) {
        console.info('Failed to register service-worker', error);
      });
  });
}
