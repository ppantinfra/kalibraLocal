import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAssessmentAccordionStyles, AssessmentMediaContent } from './';
import { UserService, emptyAndRangeValidator } from '../../core';
import { SuccessDialog, NumberField, HookFormButton, InputField, SnackBarsToast } from '../../components/common';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useForm } from 'react-hook-form';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RoutesPath as route } from '../../core/constants';
import * as pattern from '../../core';
import { InputLabel } from '@mui/material';

interface Props {
  assessmentGroups: any[];
  assessmentType?: string; //used for sending reportType value at the time of hitting a api
  isEdit?: boolean | any;
  userId?: any;
  reportId?: any;
}

const GenerateInputFields = ({
  healthMarker,
  errors,
  register,
  isEdit,
  openMediaHandler
}: {
  healthMarker: any;
  errors: any;
  register: any;
  isEdit: boolean;
  openMediaHandler: any;
}) => {
  const classes = useAssessmentAccordionStyles();
  let isShowInfoIcon = false;
  if (healthMarker.mediaContent.length > 0 || healthMarker.infoHow.length > 0 || healthMarker.infoWhat.length > 0 || healthMarker.infoWhy.length > 0) {
    isShowInfoIcon = true;
  }

  return (
    <Box key={healthMarker.healthMarkerId} id="fieledBox">
      {/* Code for dynamic fields */}
      <NumberField
        fullWidth={true}
        id={healthMarker.healthMarkerKey}
        labelName={`${healthMarker.name} (${healthMarker.unit})`}
        // controlName={healthMarker.healthMarkerId.toString()}
        controlName={
          isEdit
            ? healthMarker?.userHealthMarker?.userHealthMarkerId.toString() +
            '-version-' +
            healthMarker?.userHealthMarker?.version.toString()
            : healthMarker.healthMarkerId.toString()
        }
        register={register}
        errors={errors}
        rules={{
          required: false,
          validate: {
            checkRange: (v: any) =>
              emptyAndRangeValidator(v, healthMarker.rangeMin, healthMarker.rangeMax) || 'Not within expected range'
          },
          pattern: pattern.AseesmentFieldPattern
        }}
        minRange={healthMarker.rangeMin}
        maxRange={healthMarker.rangeMax}
        classes={classes.notchedOutline}
        inputIndormentElement={`(${healthMarker.rangeMin}-${healthMarker.rangeMax})`}
        // startEndorementContent={
        //   <InputAdornment
        //     position="start"
        //     onClick={() => {
        //       openMediaHandler(healthMarker);
        //     }}
        //     style={{
        //       cursor: 'pointer'
        //     }}
        //   >
        //     {healthMarker.mediaContent.length > 0 ? (
        //       <InfoOutlinedIcon
        //         style={{
        //           fontSize: '1.5vmax',
        //           color: 'rgb(92, 148, 255)'
        //         }}
        //       />
        //     ) : (
        //       ''
        //     )}
        //   </InputAdornment>
        // }
        labelIcon={isShowInfoIcon === true ? (
          <InfoOutlinedIcon
            onClick={() => {
              openMediaHandler(healthMarker);
            }}
          />
        ) : (
          ''
        )}
      />
    </Box>
  );
};

const AssessmentAccordion = ({
  assessmentGroups,
  assessmentType,
  isEdit,
  userId,
  reportId,
}: Props) => {
  const classes = useAssessmentAccordionStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [addedReportId, setAddedReportId] = useState<string>('');
  const [openMediaModal, setOpenMediaModal] = useState(false);
  const [mediaContentData, setMediaContentData] = useState<any>([]);
  const [mediaContentInfoWhat, setMediaContentInfoWhat] = useState<any>('');
  const [mediaContentInfoHow, setMediaContentInfoHow] = useState<any>('');
  const [mediaContentInfoWhy, setMediaContentInfoWhy] = useState<any>('');
  const [mediaContentModalHeaderName, setMediaContentModalHeaderName] = useState<any>('');
  const [expandedAccordionIndex, setExpandedAccordionIndex] = React.useState<number | false>(0);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [assessmentDetails, setAssessmentDetails] = useState<any>(assessmentGroups);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<any>([]);

  // This use Effect is called at hte time of Edit mode to set the default values in a form which user already filled

  useEffect(() => {
    if (assessmentGroups.length > 0) {
      if (isEdit) {
        const defaultValueBody: any = {};
        //extracting control names from dynamic control api
        for (let i = 0; i < assessmentGroups.length; i++) {
          //extracting comments field value
          if (assessmentGroups[i]?.comment?.comment) {
            //checking that comments obj is in the api response or not
            //control name contains version value for getting version at update time
            defaultValueBody[
              'comment' + assessmentGroups[i]?.comment?.commentId + '-version-' + assessmentGroups[i]?.comment?.version
            ] = assessmentGroups[i]?.comment?.comment;
          }
          for (let j = 0; j < assessmentGroups[i]?.subGroups.length; j++) {
            for (let k = 0; k < assessmentGroups[i]?.subGroups[j]?.healthMarkers.length; k++) {
              //control name set to userHealthMarkerId-version-[versionValue]
              defaultValueBody[
                assessmentGroups[i]?.subGroups[j]?.healthMarkers[k]?.userHealthMarker?.userHealthMarkerId.toString() +
                '-version-' +
                assessmentGroups[i]?.subGroups[j]?.healthMarkers[k]?.userHealthMarker?.version.toString()
              ] = assessmentGroups[i]?.subGroups[j]?.healthMarkers[k]?.userHealthMarker?.value;
            }
          }
        }
        reset(defaultValueBody); // this will set the default values to all the controls
      }
    }
  }, [isEdit, assessmentGroups, reset]);

  useEffect(() => {
    const indexArray: any = [];
    if (assessmentGroups.length > 0) {
      for (let i = 0; i < assessmentGroups.length; i++) {
        indexArray.push(i);
        let showAccordion = false;
        for (let j = 0; j < assessmentGroups[i]?.subGroups.length; j++) {
          let showAccordionLabel = false;

          if (assessmentGroups[i]?.subGroups[j]?.healthMarkers.length > 0) {
            showAccordion = true; //if any of the groups have healthmarker then accodion will show
            showAccordionLabel = true; //if existing subgroups have more then 1 health marker then lable will show
          }
          assessmentGroups[i].subGroups[j].showAccordionLabel = showAccordionLabel;
        }
        assessmentGroups[i].showAccordion = showAccordion;
      }
      setAssessmentDetails(assessmentGroups);
      setOpenAccordionIndex(indexArray);
    }
  }, [assessmentGroups]);

  const handleAccordionChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (!isExpanded) {
      setOpenAccordionIndex((prevState) =>
        prevState.filter((prevItem) => prevItem !== panel)
      );
    } else {
      setOpenAccordionIndex(current => [...current, panel]);
    }
    setExpandedAccordionIndex(isExpanded ? panel : false);
  };

  const addAssesment = async (data: any) => {
    const dataArray: any = Object.entries(data);
    const healthMarkersArrayToPost: { healthMarkerId: number; value: string }[] = []; // used for setting healthMarkers at the time of hitting api
    const commentsArrayToPost: {
      color: string;
      comment: string;
      groupId: number;
    }[] = []; // used for setting comments at the time of hitting api
    let oneHealthMarkerFieldFill = false; //used for checking any one field fill by user in any of the groups
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i][0].includes('comment')) {
        //comment section code
        const array = dataArray[i][0].split('comment');
        commentsArrayToPost.push({
          groupId: +array[1],
          color: 'red',
          comment: dataArray[i][1].toString()
        });
      } else {
        //health marker section code
        if (dataArray[i][1]) {
          //if any field has value then we set variable to true
          oneHealthMarkerFieldFill = true;
        }
        healthMarkersArrayToPost.push({
          healthMarkerId: +dataArray[i][0],
          value: dataArray[i][1].toString()
        });
      }
    }
    if (!oneHealthMarkerFieldFill) {
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage('Please fill one field');
      return;
    } else {
      const bodyToPost = {
        reportType: assessmentType,
        sourceType: 'WEB_APP',
        sourceDate: new Date().toISOString(),
        healthMarkers: healthMarkersArrayToPost,
        comments: commentsArrayToPost,
        userAction: 'existing', //isEdit? "Update": "Create"
        cognitoId: userId
      };

      // Api calling
      await UserService.addNewAssessment(bodyToPost).then((responseData) => {
        if (responseData) {
          if ((responseData as any).id) {
            setAddedReportId((responseData as any).id);
          }
          setShowSuccessPopup(true);
        }
      });
    }
  };

  const updateAssesment = async (data: any) => {
    const dataArray: any = Object.entries(data);
    const healthMarkersArrayToPost: { userHealthMarkerId: number; value: string; version: number }[] = []; // used for setting healthMarkers at the time of hitting api
    const commentsArrayToPost: {
      commentId: number;
      value: string;
      version: number;
    }[] = []; // used for setting comments at the time of hitting api
    let oneHealthMarkerFieldFill = false; //used for checking any one field fill by user in any of the groups
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i][0].includes('comment')) {
        //comment section code
        const arrayWithOutComment = dataArray[i][0].split('comment');
        const arrayWithoutVersion = arrayWithOutComment[1].split('-version-');
        commentsArrayToPost.push({
          commentId: arrayWithoutVersion[0],
          value: dataArray[i][1].toString(),
          version: +arrayWithoutVersion[1]
        });
      } else {
        //health marker section code
        if (dataArray[i][1]) {
          //if any field has value then we set variable to true
          oneHealthMarkerFieldFill = true;
        }
        const healthMarkerWithVersion = dataArray[i][0].split('-version-');
        healthMarkersArrayToPost.push({
          userHealthMarkerId: healthMarkerWithVersion[0],
          value: dataArray[i][1].toString(),
          version: +healthMarkerWithVersion[1]
        });
      }
    }
    if (!oneHealthMarkerFieldFill) {
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage('Please fill one field');
      return;
    } else {
      const bodyToPost = {
        healthMarkers: healthMarkersArrayToPost,
        comments: commentsArrayToPost,
        reportId: reportId
        // cognitoId: userId,
      };

      // Api calling
      await UserService.updateAssessmentDetails(bodyToPost).then((res: any) => {
        // console.log(res);
        if (res) {
          setShowSuccessPopup(true);
        }
      });
    }
  };

  const onSubmit = (data: any) => {
    if (isEdit) {
      updateAssesment(data);
    } else {
      addAssesment(data);
    }
  };

  const openMediaModelHandler = (healthMarker: any) => {
    setOpenMediaModal(true);
    setMediaContentModalHeaderName(healthMarker.name);
    setMediaContentInfoWhat(healthMarker.infoWhat);
    setMediaContentInfoHow(healthMarker.infoWhat);
    setMediaContentInfoWhy(healthMarker.infoWhy);
    setMediaContentData(healthMarker.mediaContent.length > 0 && healthMarker.mediaContent);
  };

  const goToAssessmentDetailPage = () => {
    navigate(`/${route.ASSESSMENT}/${route.VIEWASSESSMENT}`, {
      state: {
        reportId: isEdit ? reportId : addedReportId,
      },
      replace: true
    });
  };

  return (
    <React.Fragment>
      <Box className={classes.pageContent} id="pageContent">

        <Box sx={{ mt: 1 }}>
          <Box sx={{ width: '100%' }}>
            <SnackBarsToast
              openSnackBar={openSnackBar}
              snackBarMessage={snackBarMessage}
              isError={isError}
              setOpenSnackBar={setOpenSnackBar}
            />
            <form className={classes.multiStepAssFormBox} noValidate>
              <Box>
                <div className={classes.cb_card}>
                  {assessmentDetails &&
                    assessmentDetails.map((grp: any, index: any) => (
                      <React.Fragment key={index}>
                        {grp.showAccordion && (
                          <Accordion
                            // expanded={expandedAccordionIndex === index}
                            expanded={openAccordionIndex.includes(index)}
                            onChange={handleAccordionChange(index)}
                            key={grp.id}
                            // className={
                            //   assessmentDetails.length > 1
                            //     ? expandedAccordionIndex === index
                            //       ? classes.expandedAccordion
                            //       : ''
                            //     : ''
                            // }

                            className={
                              assessmentDetails.length > 1
                                ? openAccordionIndex.includes(index)
                                  ? classes.expandedAccordion
                                  : ''
                                : ''
                            }
                          >
                            {assessmentDetails.length > 1 && (
                              <AccordionSummary
                                expandIcon={assessmentDetails.length > 1 ? <ExpandMoreIcon /> : ''}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                className={classes.accordionSummary}
                              >
                                <Typography paragraph className={classes.groupHeading}>
                                  {grp.name}
                                </Typography>
                              </AccordionSummary>
                            )}

                            <AccordionDetails>
                              <Box sx={{ mt: 3 }} className={classes.assessmentGroupsBox}>
                                <Box className="">
                                  <Box sx={{ mt: 1 }}>
                                    {grp.subGroups.map((subGroup: any) => (
                                      <React.Fragment key={'main' + subGroup.id}>
                                        {subGroup.showAccordionLabel && (
                                          <Box className={classes.subGroupBox} key={subGroup.id}>
                                            <Typography paragraph className={classes.subGroupHeading}>
                                              {subGroup.name}
                                            </Typography>
                                            <Box className={classes.subGroupFieldBox} id="subGroupBox">
                                              {subGroup.healthMarkers.map((healthMarker: any) => (
                                                <>
                                                  <GenerateInputFields
                                                    healthMarker={healthMarker}
                                                    errors={errors}
                                                    isEdit={isEdit}
                                                    openMediaHandler={openMediaModelHandler}
                                                    register={register}
                                                  />
                                                </>
                                              ))}
                                            </Box>
                                          </Box>
                                        )}
                                      </React.Fragment>
                                    ))}
                                  </Box>

                                  {/* Comments section*/}
                                  {/* Comment field only showning when there is atleast one healthmarker of any subgroups */}

                                  {grp.showAccordion && (
                                    <Box sx={{ marginTop: '2vmax' }}>
                                      <InputLabel htmlFor="email-label" className={classes.labelClassName}>
                                        Comments:
                                      </InputLabel>
                                      <Box className={classes.commentBox} id={'commentBox'}>
                                        <InputField
                                          hideLabelName={true}
                                          labelName="Comments"
                                          controlName={
                                            isEdit
                                              ? 'comment' +
                                              String(grp.comment?.commentId) +
                                              '-version-' +
                                              grp.comment?.version
                                              : 'comment' + String(grp.id)
                                          }
                                          register={register}
                                          rules={{
                                            required: false,
                                            maxLength: 2000
                                          }}
                                          errors={errors}
                                          variant="outlined"
                                          multiline={true}
                                          rows={4}
                                          sx={{ width: '100%', marginTop: '5px' }}
                                        />
                                      </Box>
                                    </Box>
                                  )}

                                </Box>
                              </Box>
                            </AccordionDetails>
                          </Accordion>
                        )}
                      </React.Fragment>
                    ))}


                  {/* Buttons Section */}

                  {assessmentDetails.length > 0 && (
                    <Box sx={{ display: 'flex' }} className={
                      assessmentDetails.length > 1 ? `${classes.mt2} ${classes.buttonsBox}` : classes.buttonsBox
                    }>
                      <HookFormButton
                        className={classes.nextBtn}
                        variant="contained"
                        name={isEdit ? 'Update' : 'Save'}
                        handleSubmit={handleSubmit((data: any) => onSubmit(data))}
                      />
                    </Box>
                  )}
                </div>
                {openMediaModal === true &&
                  <AssessmentMediaContent mediaContentData={mediaContentData} handleClose={() => { setOpenMediaModal(false); }} name={mediaContentModalHeaderName} whatText={mediaContentInfoWhat} howText={mediaContentInfoHow} whyText={mediaContentInfoWhy} />
                }
                {showSuccessPopup && (
                  <SuccessDialog
                    showSuccessPopup={false}
                    setShowSuccessPopup={setShowSuccessPopup}
                    successMessage={isEdit ? 'Assessment successfully updated' : 'Assessment successfully added'}
                    successDescription=""
                    successNotifyMessage=""
                    successDialogCloseHandler={goToAssessmentDetailPage}
                    showDoneButton={true}
                  />
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default AssessmentAccordion;
