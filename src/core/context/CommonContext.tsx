import * as React from 'react';
import { setAnalyticUserId } from '../../api/Analytics';
import { setDemoModeLocal, setSelectedUserIdLocal, setShowManageOrgLocal, setTenantKeyLocal, setTenantListLocal } from '../../api/shared/CommonApi';
import { removeWebPushExternalUserId } from '../../api/WebPushAPI';


type ContextProviderProps = {
    children: React.ReactNode;
};

export type CommonContextType = {
    userId: string; // used to store the logged in user
    setUserId: (value: string) => void;
    demoMode: boolean;
    setDemoMode: (value: boolean) => void;
    tenantKey: string; // used to store the selected tenant key
    setTenantKey: (value: string) => void;
    loggedInUserName: string;
    setLoggedInUserName: (value: string) => void;
    clearContextAndLogout: () => void;
    tenantList: any; // used to store the tenant list of logged in user 
    setTenantList: (value: any) => void;
    loggedInUserData: any; // used for storing logged in user data i.e job title , roles and other details
    setLoggedInUserData: (value: any) => void;
    continueAnyWay: boolean;
    setContinueAnyWay: (value: boolean) => void;
    showManageOrg: boolean;
    setShowManageOrg: (value: boolean) => void;

};

export const CommonContext = React.createContext<CommonContextType | null>(null);

const CommonContextProvider = ({ children }: ContextProviderProps) => {

    const [userId, setSelectedUserId] = React.useState<string>('');
    // const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [demoMode, setIsDemoMode] = React.useState<boolean>(false);
    const [tenantKey, setTenant] = React.useState<string>('');
    const [loggedInUserName, setLoggedInName] = React.useState<string>('');
    const [tenantList, setTenantListState] = React.useState<any>('');
    const [loggedInUserData, setLoggedInData] = React.useState<string>('');
    const [continueAnyWay, setContinueAnyWayState] = React.useState<any>('');
    const [showManageOrg, setIsShowManageOrg] = React.useState<boolean>(false);


    const setUserId = (value: string) => {
        // if (value) {
        setSelectedUserId(value);
        setSelectedUserIdLocal(value);//storing it on local storage here
        // }

    };

    const setDemoMode = (value: boolean) => {
        if (value !== null) {
            setIsDemoMode(value);
            setDemoModeLocal(value);//storing it on local storage here
        }


    };


    const setShowManageOrg = (value: boolean) => {
        if (value !== null) {
            setIsShowManageOrg(value);
            setShowManageOrgLocal(value);//storing it on local storage here
        }
    };

    const setTenantKey = (value: string) => {
        if (value) {
            setTenant(value);
            setTenantKeyLocal(value);
        }

    };

    const setContinueAnyWay = (value: any) => {
        setContinueAnyWayState(value);
    };


    const setTenantList = (value: any) => {
        if (value) {
            setTenantListState(value);
            setTenantListLocal(value);
        }

    };


    const setLoggedInUserName = (value: string) => {
        if (value) {
            setLoggedInName(value);
        }
    };

    const setLoggedInUserData = (value: any) => {
        if (value) {
            setLoggedInData(value);
        }
    };

    const clearContextAndLogout = () => {
        //clearing context value
        setSelectedUserId('');
        setIsDemoMode(false);
        setTenant('');
        setLoggedInName('');
        setAnalyticUserId(null);
        removeWebPushExternalUserId();

        // clearing local storage
        localStorage.clear();
    };

    return (
        <CommonContext.Provider value={{ userId, setUserId, demoMode, setDemoMode, tenantKey, setTenantKey, tenantList, setTenantList, loggedInUserName, setLoggedInUserName, clearContextAndLogout, loggedInUserData, setLoggedInUserData, continueAnyWay, setContinueAnyWay, showManageOrg, setShowManageOrg }}>
            {children}
        </CommonContext.Provider>
    );
};

export default CommonContextProvider;
