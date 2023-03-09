// Return user info from the localStorage
import { Auth } from '@aws-amplify/auth';
enum LocalStorageKeys {
  User = 'user',
  Tenant = 'tenant',
  TenantList = 'tenantList',
  DemoMode = 'demoMode',
  selectedUserId = 'selectedUserId',
}


// Demo Mode
export const setDemoModeLocal = (value: boolean | any) => {
  localStorage.setItem(LocalStorageKeys.DemoMode, value);
};

export const getDemoModeFromLocalStorage = () => {
  const demoMode = localStorage.getItem(LocalStorageKeys.DemoMode);
  if (demoMode) {
    return JSON.parse(demoMode);
  } else return null;
};


//User
export const setUserLocal = (user: any) => {
  localStorage.setItem(LocalStorageKeys.User, JSON.stringify(user));
};


export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem(LocalStorageKeys.User);
  if (user !== undefined) {
    return JSON.parse(String(user));
  } else return null;
};


//tenant key
export const setTenantKeyLocal = (value: string) => {
  localStorage.setItem(LocalStorageKeys.Tenant, value);
};

export const getTenantKeyFromLocal = () => {
  const tenant = localStorage.getItem(LocalStorageKeys.Tenant);
  return tenant ? tenant.toString() : '';

};

//tenant List
export const setTenantListLocal = (value: any) => {
  localStorage.setItem(LocalStorageKeys.TenantList, value);
};

export const getTenantListFromLocal = () => {
  const tenantList = localStorage.getItem(LocalStorageKeys.TenantList);
  return tenantList ? tenantList : '';

};


//Set selected user Id to local storage
export const setSelectedUserIdLocal = (value: string) => {
  localStorage.setItem(LocalStorageKeys.selectedUserId, value);
};

export const getUserIdFromLocalStorage = () => {
  const userid = localStorage.getItem(LocalStorageKeys.selectedUserId);
  return userid ? userid.toString() : '';
};


export const getCurrentUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    return undefined;
  }
};








