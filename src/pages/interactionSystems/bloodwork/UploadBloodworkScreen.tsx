import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReviewBloodworkGettingStarted, useBloodworkStyles } from '../../../components/bloodwork';
import { Stack } from '@mui/system';
import SubmitForAnalysis from '../../../components/bloodwork/SubmitForAnalysis';
import ReviewBloodwork from '../../../components/bloodwork/ReviewBloodwork';
import SubmissionProgressScreen from '../../../components/bloodwork/SubmissionProgress';
import { useNavigate, useLocation } from 'react-router-dom';
import { ActionDrawerEnum } from '../../../core/enums';
import ViewAssessmentDetailsScreen from '../assessments/ViewAssessmentDetailsScreen';
import DrawerActionSidebar from '../../../components/layouts/drawer/DrawerActionSidebar';
import { screenTitle, RoutesPath as route } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import Back from '../../../components/common/Back';
import Dropzone, { Accept } from 'react-dropzone';
import BackendApi from '../../../api/shared/BackendApi';
import ConfirmDialog from '../../../components/clients/partials/ConfirmDialog';

const UploadBloodworkScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSelectedImage] = useState<any>();
  const [detailId, setDetailId] = useState('');
  const [isUpdatingReferralAuthority, setIsUpdatingReferralAuthority] = useState(true);
  const [showSubmitForAnalysisScreen, setShowSubmitForAnalysisScreen] = useState<boolean>(false);
  const [showReviewScreen, setShowReviewScreen] = useState<boolean>(false);
  const [showSubmissionProgressScreen, setShowSubmissionProgressScreen] = useState<boolean>(false);
  const [showViewAssessmentDialog, setShowViewAssessmentDialog] = useState<boolean>(false);
  const classes = useBloodworkStyles();
  const [bloodworkId, setBloodworkId] = useState<any>(undefined);
  const [createdOn, setCreatedOn] = useState<any>(undefined);
  const [clientId, setClientId] = useState<any>('');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const states: any = location?.state;
    if (!states) { //case when user enter specific route and state is null
      navigate(`/${route.BLOODWORK}`);
    } else {
      if (states?.bloodworkId) {
        setBloodworkId(states?.bloodworkId);
      }
      if (states?.createdOn) {
        setCreatedOn(states?.createdOn);
      }
      if (states?.pages) {
        setPages(states?.pages);
      }
      if (states?.clientId) {
        setClientId(states?.clientId);
      }
    }
  }, [location?.state, navigate]);

  const handleFileUpload = (files: any): void => {
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
      global.reportSelected = files[0] || null;
      setShowSubmitForAnalysisScreen(true);
    }
  };

  const onSubmitForAnalysisButtonClick = () => {
    setShowReviewScreen(true);
    navigate(location.pathname, {
      //passing state in existing url which is helpful suppose user open drawer and then refresh the browser then by default this drawer will shown open
      replace: true,
      state: {
        type: ActionDrawerEnum.UploadBloodWorkDrawer,
        subType: ActionDrawerEnum.BloodworkReviewScreen
      },
    });
    setShowSubmitForAnalysisScreen(false);
  };

  const onSubmitForAnalysisBackClick = () => {
    setShowSubmitForAnalysisScreen(false);
  };

  const onReviewScreenUpdateButtonClick = (id: string) => {
    setDetailId(id);
    setShowSubmissionProgressScreen(true);
    setShowReviewScreen(false);
    navigate(location.pathname, { replace: true, });
    setShowSubmitForAnalysisScreen(false);
  };

  const cancelReview = () => {
    navigate(-1);
  };

  const deleteUpload = async () => {
    try {
      const response = await BackendApi.delete(`/pro/clean-user-bloodwork-data/${bloodworkId}/${clientId}`);
      if (response.status === 200) {
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isShownCancelReview = showReviewScreen === true && isUpdatingReferralAuthority === false;

  return (
    <React.Fragment>
      <ClientSearch selectedUserId={clientId} />
      {bloodworkId ?
        <Back
          componentTitle={screenTitle.ReviewBloodWorkPage}
          bloodworkCreatedOn={isShownCancelReview ? createdOn : undefined}
          bloodworkCancelReiviewHandler={isShownCancelReview == true ? cancelReview : undefined}
          bloodworkDeleteUploadHandler={isShownCancelReview == true ? () => { setShowConfirmPopup(true); } : undefined}
        />
        :
        <Back componentTitle={screenTitle.UploadBloodWorkPage} />
      }

      {showSubmitForAnalysisScreen && (
        <SubmitForAnalysis clientId={clientId} submitForAnalysisButtonHandler={onSubmitForAnalysisButtonClick} handleBackClick={onSubmitForAnalysisBackClick} closePopup={() => {
          navigate(`/${route.BLOODWORK}`);
        }
        } />
      )}

      {(bloodworkId !== undefined && bloodworkId.length > 0) && (
        showReviewScreen === true ?
          <ReviewBloodwork clientId={clientId} onUpdateButtonClickHandler={onReviewScreenUpdateButtonClick} bloodworkId={String(bloodworkId)} onUpdateRAClickHandler={() => { setIsUpdatingReferralAuthority(false); }} isUpdatingReferralAuthority={isUpdatingReferralAuthority} pages={pages} />
          :
          <ReviewBloodworkGettingStarted clientId={clientId} startButtonClick={() => { setShowReviewScreen(true); }} cancelButtonClick={() => { navigate(`/${route.BLOODWORK}`); }} bloodworkId={String(bloodworkId)} createdOn={createdOn} />
      )
      }

      {showSubmissionProgressScreen && (
        <SubmissionProgressScreen goToAssessmentDetailPage={
          () => {
            setShowViewAssessmentDialog(true);
          }}
        />
      )}

      {/* View assessment drawer */}
      {bloodworkId !== undefined && showViewAssessmentDialog == true &&
        <DrawerActionSidebar
          open={showViewAssessmentDialog}
          toggleDrawer={() => {
            setShowViewAssessmentDialog(false);
          }}
          component={
            <ViewAssessmentDetailsScreen
              reportIdProp={detailId}
              componentOpenOnDialog={true}
            />
          }
          drawerType={ActionDrawerEnum.ViewAssessmentDrawer}
          anchor="bottom"
        />
      }

      {!showSubmitForAnalysisScreen && !showReviewScreen && !showSubmissionProgressScreen && bloodworkId === undefined && (
        <Box className={classes.pageContent}>
          <Dropzone multiple={false} onDrop={acceptedFiles => handleFileUpload(acceptedFiles)} accept={{ 'application/pdf': ['.pdf', '.PDF'], } as Accept} noKeyboard noClick maxSize={5 * 1024 * 1024}  >
            {({ getRootProps, open, getInputProps }) => (
              <div {...getRootProps()}>
                <Box className={classes.upload_report}>
                  <Stack spacing={2} alignItems="center" display={'flex'}>
                    <Typography>Upload your Test Report</Typography>
                    <Typography className={classes.upload_report_text}>
                      Drag and drop your files here or browse to add. You can upload pdf documents only.
                    </Typography>
                    <Box onClick={() => {
                      open();
                    }}
                      className={`${classes.browseBtn} browseButton`}
                    >
                      <input {...getInputProps()} />
                      <label htmlFor="file" style={{ cursor: 'pointer' }}>
                        <Box>Browse</Box>
                      </label>
                    </Box>
                  </Stack>
                </Box>
              </div>
            )}
          </Dropzone>
        </Box>
      )
      }
      <ConfirmDialog
        setShowConfirmPopup={setShowConfirmPopup}
        isOpen={showConfirmPopup}
        caption="Delete Upload?"
        description={'Are you sure you want to delete this bloodwork upload?'}
        confirmButtonLabel="Delete"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={() => { deleteUpload(); }}
        cancelButtonHandler={() => {
          setShowConfirmPopup(false);
        }}
      />
    </React.Fragment >
  );
};

export default UploadBloodworkScreen;
