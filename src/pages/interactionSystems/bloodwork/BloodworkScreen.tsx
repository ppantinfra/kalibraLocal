import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  //useLocation
import ClientSearch from '../../../components/client-search/ClientSearch';
import Back from '../../../components/common/Back';
import { screenTitle, RoutesPath as route } from '../../../core/constants';
import { Bloodwork } from '../../../components/bloodwork';
// import UploadBloodworkScreen from './UploadBloodworkScreen';
// import DrawerActionSidebar from '../../../components/layouts/drawer/DrawerActionSidebar';
// import { ActionDrawerEnum } from '../../../core/enums';
// import ResultSummery from '../../../components/bloodwork/ResultSummery';
import { CommonContext, CommonContextType } from '../../../core/context';

const BloodworkScreen = () => {
  const [selectedUserId, setSelectedUserId] = useState<any>(null);
  // const [showUploadScreen, setShowUploadScreen] = useState<boolean>(false);
  // const [showResultSummaryScreen, setShowResultSummaryScreen] = useState<boolean>(false);
  // const [bloodworkId, setBloodworkId] = useState('');
  const [showReviewScreen, setShowReviewScreen] = useState<boolean>(false);
  // const [assessment, setAssessment] = useState<any>();
  const navigate = useNavigate();
  // const location = useLocation();

  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  // useEffect(() => {
  //   // this useEffect is used on refresh case suppose user opened any drawer  then by default that drawer will opened
  //   const states: any = location?.state;
  //   if (states) {
  //     if (states?.type === ActionDrawerEnum.UploadBloodWorkDrawer) {
  //       setShowUploadScreen(true);
  //     } else if (states?.type === ActionDrawerEnum.ResultSummaryBloodWorkDrawer) {
  //       setShowResultSummaryScreen(true);
  //     }
  //   }
  // }, [location?.state]);

  const onUserSelect = (userid: any) => {
    setSelectedUserId(userid);
  };

  const onUploadReportButtonClick = () => {
    // //called when click on Upload bloodwork button from bloodwork dashboard screen
    // navigate(location.pathname, {
    //   //passing state in existing url which is helpful suppose user open drawer and then refresh the browser then by default this drawer will shown open
    //   replace: true,
    //   state: {
    //     type: ActionDrawerEnum.UploadBloodWorkDrawer
    //   }
    // });
    // setShowUploadScreen(true);
    navigate(`/${route.UPLOADBLOODWORK}`, {
      state: {
        clientId: selectedUserId
      }
    });
  };

  const onResultSummaryButtonClick = (data) => {
    //called when click on Result summary button from bloodwork dashboard screen
    // setAssessment(data);
    // navigate(location.pathname, {
    //   //passing state in existing url which is helpful suppose user open drawer and then refresh the browser then by default this drawer will shown open
    //   replace: true,
    //   state: {
    //     type: ActionDrawerEnum.ResultSummaryBloodWorkDrawer
    //   }
    // });
    // setShowResultSummaryScreen(true);


    navigate(`/${route.RESULTSUMMARYBLOODWORK}`, {
      state: {
        assessment: data,
      }
    });


  };

  // const toggleRightDrawer = (value: boolean, type?: string) => {
  //   // navigate(location.pathname, { replace: true }); // this is used to clear the state after closing any of the drawer so that after drawer closing if user refresh
  //   //the browserr then no drawer will open by default
  //   if (type === ActionDrawerEnum.UploadBloodWorkDrawer) {
  //     // setShowUploadScreen(false);
  //     // navigate(location.pathname, { replace: true });
  //   } else if (type === ActionDrawerEnum.ResultSummaryBloodWorkDrawer) {
  //     // setShowResultSummaryScreen(false);
  //     // navigate(location.pathname, { replace: true });
  //   } else if (type === ActionDrawerEnum.BloodworkReviewScreen) {
  //     // setShowReviewScreen(false);
  //     // navigate(location.pathname, { replace: true });
  //   }

  // };

  const reviewPendingBloodwork = (data: any) => {
    //setBloodworkId(data.bloodworkId);
    // setShowReviewScreen(true);
    navigate(`/${route.REVIEWBLOODWORK}`, {
      state: {
        bloodworkId: data.bloodworkId,
        clientId: selectedUserId,
        createdOn: data.createdOn,
        pages: data.pages
      }
    });
  };

  return (
    <React.Fragment>
      {/* Upload Bloodwork drawer */}
      {/* <DrawerActionSidebar
        open={showUploadScreen}
        toggleDrawer={toggleRightDrawer}
        component={<UploadBloodworkScreen clientId={selectedUserId} toggleDrawer={toggleRightDrawer} />}
        drawerType={ActionDrawerEnum.UploadBloodWorkDrawer}
        anchor="bottom"
      />

      <DrawerActionSidebar
        open={showReviewScreen}
        toggleDrawer={toggleRightDrawer}
        component={<UploadBloodworkScreen clientId={selectedUserId} toggleDrawer={toggleRightDrawer} bloodworkId={bloodworkId} />}
        drawerType={ActionDrawerEnum.BloodworkReviewScreen}
        anchor="bottom"
      /> */}

      {/* Result summary  drawer */}
      {/* {assessment &&
        <DrawerActionSidebar
          open={showResultSummaryScreen}
          toggleDrawer={toggleRightDrawer}
          component={<ResultSummery assessment={assessment} />}
          drawerType={ActionDrawerEnum.ResultSummaryBloodWorkDrawer}
          anchor="bottom"
        />
      } */}

      <Back componentTitle={screenTitle.BloodWorkPage} disableBackButton={true} />

      <ClientSearch selectedUserId={selectedUserId} userSelectHandler={onUserSelect} />

      {selectedUserId && (
        <React.Fragment>
          {/* Main screen */}

          <Bloodwork
            clientId={selectedUserId}
            uploadClickHandler={onUploadReportButtonClick}
            reviewPendingBloodworkHandler={reviewPendingBloodwork}
            resultSummaryClickHandler={onResultSummaryButtonClick}
            reloadPendingBloodwork={!showReviewScreen}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default BloodworkScreen;
