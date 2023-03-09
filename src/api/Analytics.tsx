import amplitude from 'amplitude-js';
import Auth from '@aws-amplify/auth';

let isAnalyticsWorking = false;

export const setAnalyticUserId = (userId: string | null) => {
  if (!isAnalyticsWorking) {
    return;
  }
  try {
    amplitude.getInstance().setUserId(userId);
  } catch (analyticsError) {
    console.error(analyticsError);
  }
};

export const initAnalytics = async (apiKey: string) => {
  if (apiKey && apiKey.length > 0) {
    try {
      amplitude.getInstance().init(apiKey);
      const session = await Auth.currentSession();
      const payload = session.getIdToken().payload;
      setAnalyticUserId(`${payload.sub}-${payload.name}`);
      isAnalyticsWorking = true;
    } catch (analyticsError) {
      console.error(analyticsError);
    }
  }
};

export const logEvent = (name: string, eventProperties?: Record<string, unknown>) => {
  if (!isAnalyticsWorking) {
    return;
  }
  try {
    amplitude.getInstance().logEvent(name, eventProperties);
  } catch (analyticsError) {
    console.error(analyticsError);
  }
};



