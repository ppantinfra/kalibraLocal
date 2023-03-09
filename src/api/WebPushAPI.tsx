import Auth from '@aws-amplify/auth';

declare global {
  interface Window {
    OneSignal: any;
  }
}

let isOneSignalWorking = false;
window.OneSignal = window.OneSignal || [];

export const isWebPushNotificationsSupported = async (): Promise<boolean> => {
  try {
    return window.OneSignal.isPushNotificationsSupported();
  } catch (error) {
    console.error(error);
  }

  return false;
};

export const isWebPushNotificationsEnabled = async (): Promise<boolean> => {
  try {
    return window.OneSignal.isPushNotificationsEnabled().then((isEnabled: boolean) => {
      return isEnabled;
    });
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const setWebPushExternalUserId = async (): Promise<void> => {
  if (isOneSignalWorking === false) {
    return;
  }

  try {
    const enabled: boolean = await isWebPushNotificationsEnabled();
    if (enabled) {
      const user = await Auth.currentAuthenticatedUser();
      if (user != undefined && user.attributes.sub !== undefined) {
        window.OneSignal.push(() => {
          window.OneSignal.setExternalUserId(user.attributes.sub);
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeWebPushExternalUserId = async (): Promise<void> => {
  try {
    window.OneSignal.push(() => {
      window.OneSignal.removeExternalUserId();
    });
  } catch (error) {
    console.error(error);
  }
};

// Only call once from App.tsx
export const initializeOneSignalWeb = async (onesinalAppId: string): Promise<void> => {
  if (onesinalAppId && onesinalAppId.length > 0) {
    const OneSignal = window.OneSignal;
    OneSignal.push(() => {
      OneSignal.init({ appId: onesinalAppId });
      OneSignal.on('subscriptionChange', async (isSubscribed: boolean) => {
        isOneSignalWorking = true;
        console.debug("The user's subscription state is now:", isSubscribed);
        if (isSubscribed) {
          await setWebPushExternalUserId();
        } else {
          await removeWebPushExternalUserId();
        }
      });
    });
  }

};

export const setWebPushSubscription = async (unmute: boolean): Promise<void> => {
  try {
    await window.OneSignal.setSubscription(unmute);
  } catch (error) {
    console.error(error);
  }
};
