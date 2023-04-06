import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserFromLocalStorage, getShowManageOrgLocal } from '../../api/shared/CommonApi';
import { RoutesPath as route } from '../constants';

const AuthGuard = ({ children }: any) => {
    const location = useLocation();
    if (location.pathname.includes(route.MANAGEORGANIZATION)) { // organisation module not showing when user does not have admin role 
        const showOrganisation = getShowManageOrgLocal();
        if (showOrganisation) {
            return children;
        } else {
            return <Navigate to={`/${route.CLIENTSLISTROUTE}`} replace />;
        }

    } else {
        const user = getUserFromLocalStorage();
        if (user === null) {
            return <Navigate to="/" replace />;
        }
        return children;
    }

};

export default AuthGuard;