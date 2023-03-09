import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Back from '../../../components/common/Back';
import { screenTitle, RoutesPath as route } from '../../../core/constants';
import { useNavigate } from 'react-router-dom';
import ClientSearch from '../../../components/client-search/ClientSearch';
import IntelligenceDashboard from '../../../components/intelligence/IntelligenceDashboard';
import DrawerActionSidebar from '../../../components/layouts/drawer/DrawerActionSidebar';
import IntelligenceTrendingReport from '../../../components/intelligence/IntelligenceTrendingReport';


const IntelligenceClientOverviewScreen = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<any>(false);
  const [sidebarHeader, setSidebarHeader] = useState<string>('');
  const [trendScore, setTrendScore] = useState<string>('');
  const [trendScoreUnit, setTrendScoreUnit] = useState<string>('');
  const [scoreDetailData, setScoreDetailData] = useState<any>();
  const [, setExternalKey] = useState<any>();

  const handleDrawerOpen = (key: string, name: string, data?: any, score?: any, unit?: any) => {
    setOpen(true);
    setScoreDetailData(data);
    setExternalKey(key);
    setSidebarHeader(name);
    setTrendScore(score);
    setTrendScoreUnit(unit);
  };
  const tableReportClickHandler = (name: string, unit: string) => {  // this is called on click of drawer view detailed report and on each tile action button
    navigate(`/${route.INTELLIGENCECLIENTLISTROUTE}`, { state: { tableHeader: name, unitText: unit } });
  };


  const onUserSelect = () => {
    navigate(`/${route.INTELLIGENCECLIENTDETAILSROUTE}`);
  };



  return (
    <React.Fragment>
      <DrawerActionSidebar
        clientUsername={''}
        open={open}
        toggleDrawer={(openFlag) => {
          setOpen(openFlag);
        }}
        component={
          <IntelligenceTrendingReport
            ITrendingReportTitle={sidebarHeader}
            scoreDetailData={scoreDetailData}
            tableReportClickHandler={() => tableReportClickHandler(sidebarHeader, trendScoreUnit)}
          />
        }
        drawerType={sidebarHeader}
        anchor="right"
        width={380}
        trendScore={trendScore}
        trendScoreUnit={trendScoreUnit}
      />

      <Box>
        <Box>
          <Back componentTitle={screenTitle.IntelligencePage} disableBackButton={true} />
          <ClientSearch selectedUserId='' userSelectHandler={onUserSelect} diableChooseClientScreen={true} />
        </Box>
      </Box>
      <IntelligenceDashboard tableReportClickHandler={tableReportClickHandler} handleDrawerOpen={handleDrawerOpen} />
    </React.Fragment>
  );
};

export default IntelligenceClientOverviewScreen;
