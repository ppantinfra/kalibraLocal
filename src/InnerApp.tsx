import React, { useEffect, useContext, useState } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import {
  sideBarLayoutRoutes,
  headerFooterLayoutRoutes,
  headerPictureLayoutRoutes
} from './core/routes/routes';

import NotFoundScreen from './pages/NotFoundScreen';
import { getUserFromLocalStorage, getDemoModeFromLocalStorage, getUserIdFromLocalStorage, getTenantKeyFromLocal, getTenantListFromLocal } from './api/shared/CommonApi';
import BoxLayout from './components/layouts/BoxLayout';
import DrawerLayout from './components/layouts/DrawerLayout';
import { AuthGuard } from './core';
import { CommonContext, CommonContextType } from './core/context';
import PictureLayout from './components/layouts/PictureLayout';
import { logEvent } from './api/Analytics';
import NotDesktopMode from './pages/NotDesktopMode';

const InnerApp: React.FC = () => {

  const { setUserId, setDemoMode, setTenantKey, tenantKey, loggedInUserName, setLoggedInUserName, setTenantList, setLoggedInUserData, continueAnyWay } = useContext(CommonContext) as CommonContextType;
  const user = getUserFromLocalStorage();
  const tenantKeys = getTenantKeyFromLocal();
  const location = useLocation();


  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    const desktopMode = innerWidth > 1024;
    return {
      width,
      height,
      desktopMode
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);


  useEffect(() => {
    // this is used for setting the context values from local storage when user refresh any page
    if (user !== null) {
      setLoggedInUserName(user.name);
      setLoggedInUserData(JSON.stringify(user));
    }
    const userId = getUserIdFromLocalStorage();
    setUserId(userId);
    const demoMode = getDemoModeFromLocalStorage();
    setDemoMode(demoMode);
    setTenantKey(tenantKeys);
    const tenantList = getTenantListFromLocal();
    setTenantList(tenantList);
  }, [setDemoMode, setUserId, setTenantKey, setLoggedInUserName, user, tenantKeys, setTenantList, setLoggedInUserData]);

  const [currentPath, setCurrentPath] = React.useState<any>();
  React.useEffect(() => {

    if (location.pathname !== currentPath) {
      setTimeout(() => {
        logEvent('Navigation', {
          currentScreen: currentPath,
          previousScreen: location.pathname,
          username: loggedInUserName
        });
      }, 30);
      setCurrentPath(location.pathname);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Routes>
        {/* Picture Layout Routes */}
        {!user && (
          <>
            {windowDimensions?.desktopMode || continueAnyWay ? (<>
              <Route
                path="/"
                element={<PictureLayout outlet={<Outlet />} />}
              >
                {headerPictureLayoutRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Route>
              <Route path="/*" element={<NotFoundScreen />} />

            </>) : (<Route path="/*" element={<NotDesktopMode />} />)}
          </>
        )}



        {/* Header Footer Layout Routes */}
        {!tenantKeys && (
          <>
            {windowDimensions?.desktopMode || continueAnyWay ? (<>
              <Route
                path="/"
                element={<AuthGuard><BoxLayout outlet={<Outlet />} /></AuthGuard>}
              >
                {headerFooterLayoutRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route?.naviagtePath ? <Navigate to={route.naviagtePath} /> : <route.component />}
                  />
                ))}
              </Route>
              <Route path="/*" element={<NotFoundScreen />} />

            </>) : (<Route path="/*" element={<NotDesktopMode />} />)}




          </>

        )}



        {/* DrawerLayout Routes */}
        {tenantKey !== '' && loggedInUserName !== '' && (
          <>
            {windowDimensions?.desktopMode || continueAnyWay ? (<>
              <Route
                path="/"
                element={<AuthGuard><DrawerLayout outlet={<Outlet />} /></AuthGuard>}
              >
                {sideBarLayoutRoutes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={route?.naviagtePath ? <Navigate to={route.naviagtePath} /> : <route.component />}
                  />
                ))}
              </Route>
              <Route path="/*" element={<NotFoundScreen />} />
            </>) : (
              <>
                <Route path="/*" element={<NotDesktopMode />} />
              </>)}
          </>

        )}
      </Routes>


    </React.Fragment >
  );
};

export default InnerApp;