import React, { useState } from 'react';
import { useActivityLoggerListStyles } from './';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import Link from '@mui/material/Link';
import TableBody from '@mui/material/TableBody';
import { useForm, useFieldArray } from 'react-hook-form';
import { InputField, SelectField, RadioField, HookFormButton, SnackBarsToast } from '../../components/common';
import deleteImgIcon from '../../assets/images/deleteImgIcon.svg';
import { ActivityLoggerType, WorkoutService } from '../../core';
import ActivityLoggerConfirmationModal from './ActivityLoggerConfirmationModal';
import colorDeleteIcon from '../../assets/images/colorDeleteIcon.svg';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import InfoIcon from '../../assets/images/info.png';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../core/constants';

const SetFormArray = ({
  register,
  control,
  errors,
  mainIndex,
  arrayName,
  setsFields,
  restDropdown,
  tempoDropdown,
  changeHandler,
  allFields,
  userId,
  allExercisesData,
  update,
  field,
  fieldIndex
}: {
  register: any;
  control: any;
  errors: any;
  mainIndex: any;
  arrayName: string;
  setsFields: any;
  restDropdown: any;
  tempoDropdown: any;
  changeHandler: any;
  allFields: any;
  userId: any;
  allExercisesData: any;
  update: any;
  field: any;
  fieldIndex: any;
}) => {
  const {
    fields = setsFields,
    append,
    remove
  } = useFieldArray({
    control,
    name: `userActivityLogs[${mainIndex}].userActivityLogSets`
  });

  const classes = useActivityLoggerListStyles();
  const propsClasses = { notchedOutline: classes.noInputBorder };
  const [openTemplateModal, setOpenTemplateModal] = React.useState<boolean>(false);
  const [confirmModalIcon, setConfirmModalIcon] = React.useState<any>();
  const [templateModalHeader, setTemplateModalHeader] = React.useState<any>('');
  const [templateModalMessage, setTemplateModalMessage] = React.useState<any>('');
  const [templateButtonLabel, setTemplateButtonLabel] = React.useState<any>('');
  const [iconBgColor, setIconBgColor] = React.useState<any>('');
  // const [iconColor, setIconColor] = React.useState<any>("");
  const [setIndex, setSetIndex] = React.useState<any>('');
  const [deletedSet, setDeletedSet] = React.useState<any>('');

  const hideTemplateModal = () => {
    setOpenTemplateModal(false);
  };
  const handleDeleteSet = async () => {
    //call api here

    setOpenTemplateModal(false);
    const body = {
      userActivityLogSetId: deletedSet?.userActivityLogSetId,
      userId: userId
    };

    if (deletedSet?.userActivityLogSetId !== '0') {  // delte api hit when user delete saved set only
      const queryParam = '?hard=1';
      await WorkoutService.deleteActivityLoggerSet(queryParam, body);
      remove(setIndex);
    } else { // case suppose user enter new set that is not added yet in the database and if he wants to delete then there is no need to hit api
      remove(setIndex);
    }

  };

  const OnFocusDdChange = (index: number, objValue: any, selectedValue: number) => {
    if (objValue === undefined) {
      return;
    }
    for (const ddValue of objValue.focusDropdownValues) {
      if (ddValue?.id.toString() === selectedValue.toString()) {
        const excerciseDropdown: any[] = ddValue?.exercises;
        const newObj: any = {
          ...objValue,
          excerciseDropdownValues: excerciseDropdown,
          exerciseId: excerciseDropdown.length > 0 ? excerciseDropdown[0].id : '',
          focusId: selectedValue
        };
        update(index, newObj);
      }
    }
  };

  const OnExcerciseDdChange = (index: number, objValue: any, selectedValue: number) => {
    //used for setting isDataChange for group to true
    const newObj: any = {
      ...objValue,
      isDataChange: true,
      exerciseId: selectedValue
    };
    update(index, newObj);
  };

  return (
    <>
      <TableBody>
        <TableRow sx={{ height: 1 }}>
          {/* Grey box selector column */}
          <TableCell sx={{ verticalAlign: 'top' }} rowSpan={fields.length + 3} className={'dropdownColumn oddDropdownColumn'}>
            <Box className={classes.lgb_dropdownBox}>
              <Box id="fieledBox" className={classes.selectBox}>
                <InputLabel htmlFor="select-label" className={classes.selectInputLabel}>
                  Focus
                </InputLabel>
                <SelectField
                  mainIndex={fieldIndex}
                  placeholder={'Select Focus Area'}
                  // labelName="Focus"
                  arrayControlName="focusId"
                  arrayName="userActivityLogs"
                  controlName={`userActivityLogs.${fieldIndex}.focusId`}
                  register={register}
                  errors={errors}
                  // rules={{ required: true }}
                  options={allExercisesData}
                  optionValue="id"
                  optionName="name"
                  classes={propsClasses}
                  defaultValue={field?.focusId}
                  changeHandler={(event) => OnFocusDdChange(fieldIndex, field, event.target.value)}
                  labelClassName={classes.selectInputLabel}
                  selectClases={{
                    root: classes.selectControl
                    // icon: classes.arrowDownIcon,
                  }}
                  noValidate={true}
                  disableLabel={true}
                />
              </Box>
              <Box id="fieledBox" className={classes.selectBox}>
                <InputLabel htmlFor="select-label" className={classes.selectInputLabel}>
                  Exercise
                </InputLabel>
                <SelectField
                  mainIndex={fieldIndex}
                  placeholder={'Select Exercise'}
                  // labelName="Exercise"
                  arrayControlName="exerciseId"
                  arrayName="userActivityLogs"
                  controlName={`userActivityLogs.${fieldIndex}.exerciseId`}
                  register={register}
                  errors={errors}
                  // rules={{ required: true }}
                  options={field.excerciseDropdownValues}
                  optionValue="id"
                  optionName="name"
                  classes={propsClasses}
                  defaultValue={field.exerciseId}
                  changeHandler={(event) => OnExcerciseDdChange(fieldIndex, field, event.target.value)}
                  labelClassName={classes.selectInputLabel}
                  selectClases={{
                    root: classes.selectControl
                    // icon: classes.arrowDownIcon,
                  }}
                  noValidate={true}
                  disableLabel={true}
                />
              </Box>
            </Box>
          </TableCell>
        </TableRow>
        {/* Value rows */}
        {fields.map((item, index) => {
          return (
            <TableRow key={item.id} className={fields.length == 1 ? 'initialTableRow' : 'oss'}>
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">
                <InputField
                  mainIndex={mainIndex}
                  nestedIndex={index}
                  nestedControlName="exerciseLoad"
                  nestedArrayName="userActivityLogSets"
                  className="formControl"
                  variant="outlined"
                  arrayName={arrayName}
                  type="number"
                  controlName={`userActivityLogs.${mainIndex}.userActivityLogSets.${index}.exerciseLoad`}
                  register={register}
                  errors={errors}
                  rules={{ required: true }}
                  classes={propsClasses}
                  blurHandler={(event) =>
                    changeHandler(mainIndex, allFields, index, event.target.value, 'exerciseLoad')
                  }
                  noValidate={true}
                />
              </TableCell>
              <TableCell align="right">
                <InputField
                  mainIndex={mainIndex}
                  nestedIndex={index}
                  classes={propsClasses}
                  className="formControl"
                  variant="outlined"
                  nestedControlName="rep"
                  nestedArrayName="userActivityLogSets"
                  arrayName={arrayName}
                  type="number"
                  controlName={`userActivityLogs.${mainIndex}.userActivityLogSets.${index}.rep`}
                  register={register}
                  errors={errors}
                  rules={{ required: true }}
                  blurHandler={(event) => changeHandler(mainIndex, allFields, index, event.target.value, 'rep')}
                  noValidate={true}
                />
              </TableCell>
              <TableCell align="right">
                <InputField
                  mainIndex={mainIndex}
                  nestedIndex={index}
                  classes={propsClasses}
                  nestedControlName="rpe"
                  nestedArrayName="userActivityLogSets"
                  className="formControl"
                  variant="outlined"
                  arrayName={arrayName}
                  type="number"
                  controlName={`userActivityLogs.${mainIndex}.userActivityLogSets.${index}.rpe`}
                  register={register}
                  errors={errors}
                  rules={{ required: true }}
                  blurHandler={(event) => changeHandler(mainIndex, allFields, index, event.target.value, 'rpe')}
                  noValidate={true}
                />
              </TableCell>
              <TableCell align="right" className={classes.customRadio}>
                <RadioField
                  mainIndex={mainIndex}
                  nestedIndex={index}
                  nestedControlName="restId"
                  nestedArrayName="userActivityLogSets"
                  arrayName={arrayName}
                  controlName={`userActivityLogs.${mainIndex}.userActivityLogSets.${index}.restId`}
                  register={register}
                  errors={errors}
                  // rules={{ required: true }}
                  control={control}
                  options={restDropdown}
                  optionValue="id"
                  optionName="rest"
                  defaultValue={item.restId}
                  blurHandler={(event) => changeHandler(mainIndex, allFields, index, event.target.value, 'restId')}
                  className={`form-control ${classes.radioCell}`}
                  style={{ flexWrap: 'nowrap' }}
                  noValidate={true}
                />
              </TableCell>
              <TableCell align="right" className={classes.customRadio}>
                <RadioField
                  mainIndex={mainIndex}
                  nestedIndex={index}
                  nestedControlName="tempoId"
                  nestedArrayName="userActivityLogSets"
                  arrayName={arrayName}
                  controlName={`userActivityLogs.${mainIndex}.userActivityLogSets.${index}.tempoId`}
                  register={register}
                  errors={errors}
                  //  rules={{ required: true }}
                  control={control}
                  options={tempoDropdown}
                  optionValue="id"
                  optionName="tempo"
                  defaultValue={item.tempoId}
                  blurHandler={(event) => changeHandler(mainIndex, allFields, index, event.target.value, 'tempoId')}
                  className={`form-control ${classes.radioCell}`}
                  style={{ flexWrap: 'nowrap' }}
                  noValidate={true}
                />
              </TableCell>
              <TableCell align="right">
                <Link
                  component="button"
                  onClick={
                    () => {
                      setOpenTemplateModal(true);
                      setTemplateModalMessage('Are you sure you want to delete this set?');
                      setTemplateModalHeader('Delete set');
                      setConfirmModalIcon(colorDeleteIcon);
                      setTemplateButtonLabel('Delete');
                      setIconBgColor('#FFD6D9');
                      // setIconColor("#FF3D71");
                      setSetIndex(index);
                      setDeletedSet(item);
                    }

                    // () =>openDeleteSetTemplateModal(row.setId, tableBlockIndex)
                    // deleteSet(row.setId, tableBlockIndex)
                  }
                >
                  <img src={deleteImgIcon} alt="del" />
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
        {/* add sets row */}
        <TableRow sx={{ border: 'none', height: '24px', padding: '0 !important' }}>
          <TableCell align="right" sx={{ borderBottom: 'none !important' }}>
            {/* showing max 20 sets in a group */}
            {fields.length < 20 ? (
              <Link
                onClick={() =>
                  append({
                    userActivityLogSetId: '0',
                    set: '',
                    exerciseLoad: 0,
                    rep: 0,
                    rpe: 0,
                    restId: null,
                    tempoId: null,
                    isDataChange: true
                  })
                }
                component="button"
                className={classes.addSetLink}
              >
                + Add set
              </Link>
            ) : (
              ''
            )}
          </TableCell>
        </TableRow>
        {/* empty grey row */}
        <TableRow
          sx={{
            borderBottom: '2px solid #2E3A59',
            background: fields.length < 4 ? '#f8f9fc !important' : '#fff!important'
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item: any) => (
            <TableCell
              key={item}
              className="oss"
              align="right"
              sx={{ borderBottom: 'none !important', height: fields.length < 4 ? '75px!important' : '10px!important', padding: '0 !important' }}
            ></TableCell>
          ))}
        </TableRow>
      </TableBody>

      <ActivityLoggerConfirmationModal
        hideTemplateModal={hideTemplateModal}
        confirmModalIcon={confirmModalIcon}
        templateModalHeader={templateModalHeader}
        templateModalMessage={templateModalMessage}
        templateButtonLabel={templateButtonLabel}
        submitButton={handleDeleteSet}
        openTemplateModal={openTemplateModal}
        iconBgColor={iconBgColor}
      />
    </>
  );
};

type Props = {
  allWorkoutData: ActivityLoggerType;
  allExercisesData: Array<any>;
  allRestData: Array<any>;
  allTempoData: Array<any>;
  deleteActivityLogs: any;
  userId: any;
  refreshFilledDatesHandler: any;// used suppose user filled any logs then we have to hit api for uploaded dates to update the colors in date picker
  updateActivityLog?: boolean;
  noLogsCreateHandler?: any;
  showNoLogsMessage?: boolean;
};

const ActivityLoggerList = ({
  allWorkoutData,
  allExercisesData,
  allRestData,
  allTempoData,
  deleteActivityLogs,
  userId,
  refreshFilledDatesHandler,
  updateActivityLog,
  showNoLogsMessage,
  noLogsCreateHandler
}: Props) => {
  const classes = useActivityLoggerListStyles();
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: allWorkoutData
  });
  const { fields, update } = useFieldArray({
    control,
    name: 'userActivityLogs'
  });

  React.useEffect(() => {
    //setting dropdown options in case of update
    reset(allWorkoutData);
    for (let i = 0; i < allWorkoutData?.userActivityLogs.length; i++) {
      const value = allWorkoutData?.userActivityLogs[i];
      if (value?.focusId && value?.excerciseDropdownValues?.length === 0) {
        for (const ddValue of value.focusDropdownValues) {
          if (ddValue?.id === value?.focusId) {
            const excerciseDropdown: any[] = ddValue?.exercises;
            const newObj: any = {
              ...value,
              excerciseDropdownValues: excerciseDropdown
            };
            update(i, newObj);
          }
        }
      }
    }
  }, [update, allWorkoutData, reset]);

  const OnSetValuesChange = (
    mainIndex: number,
    objValue: any,
    setIndex: number,
    updatedValue: any,
    updatedKey: string
  ) => {
    //execute only when isDataChange Value false and if only it is on update mode i.e if user created new set then this will not execute
    if (
      objValue?.userActivityLogId &&
      !objValue?.userActivityLogSets[setIndex]?.isDataChange &&
      objValue?.userActivityLogSets[setIndex]?.userActivityLogSetId
    ) {
      const setsArray = objValue?.userActivityLogSets;
      const updatedIndexSet = setsArray[setIndex];
      updatedIndexSet.isDataChange = true;
      updatedIndexSet[updatedKey] = updatedValue;
      setsArray[setIndex] = updatedIndexSet;
      const newObj: any = { ...objValue, userActivityLogSets: setsArray };
      update(mainIndex, newObj);
    }
  };

  const onSubmit = async (data: any) => {
    let isUpdateCase = false;
    for (const logs of data.userActivityLogs) {
      if (!logs.exerciseId || !logs.focusId) {
        setIsError(true);
        setOpenSnackBar(true);
        setSnackBarMessage('Please select Focus and Excercise  Values');
        return;
      }
      if (logs.userActivityLogId !== '0') {
        isUpdateCase = true;
      }

    }
    if (deleteActivityLogs) {
      //case for deleting a logs when there is already have a data in case of copy from previous date
      const queryParam = '?hard=1';
      await WorkoutService.deleteActivityLogs(queryParam, deleteActivityLogs);
    }

    const array = data?.userActivityLogs;
    array.forEach((object) => {
      delete object.excerciseDropdownValues;
      delete object.focusDropdownValues;
      for (let i = 0; i < object?.userActivityLogSets.length; i++) {
        object.userActivityLogSets[i].set = i + 1;
      }
    });
    const finalData = { userActivityLogs: array };
    const res = await WorkoutService.addActivityLoggerActivities(finalData);
    if (!res) {


      if (!isUpdateCase) { // execute to refresh te coor of selected date in date picker if user enter new entry
        refreshFilledDatesHandler();
      }
      setIsError(false);
      setOpenSnackBar(true);
      setSnackBarMessage(isUpdateCase ? 'Logs Updated Successfully' : 'Logs Added Successfully');

    } else {
      setIsError(true);
      setOpenSnackBar(true);
      setSnackBarMessage('Something Went Wrong');
    }
    // console.log(res);
    navigate(`/${route.CLIENTSLISTROUTE}`);
  };

  return (


    <Box>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />


      {!showNoLogsMessage && <React.Fragment>
        <Box className={`${classes.activityLoggerListBox} activityLoggerListBox`}>
          <Box className={classes.rightTableBox}>
            <TableContainer component={Paper} className={classes.tableContainer_workout}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table" className={classes.table_workout}>
                <TableHead sx={{ background: '#EDF1F7' }}>
                  <TableRow>
                    <TableCell align="left" style={{ minWidth: 150 }}></TableCell>
                    <TableCell align="right" style={{ minWidth: 90 }}>
                      Set
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 20 }}>
                      Load
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 20 }}>
                      Rep
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 20 }}>
                      RPE
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 90 }}>
                      Rest
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: 90 }}>
                      Tempo
                    </TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                {fields.map((field, index) => {
                  return (
                    <React.Fragment key={index}>
                      <SetFormArray
                        register={register}
                        control={control}
                        errors={errors}
                        mainIndex={index}
                        arrayName="userActivityLogs"
                        setsFields={field?.userActivityLogSets}
                        restDropdown={allRestData}
                        tempoDropdown={allTempoData}
                        changeHandler={OnSetValuesChange}
                        allFields={field}
                        userId={userId}
                        allExercisesData={allExercisesData}
                        update={update}
                        field={field}
                        fieldIndex={index}
                      />
                    </React.Fragment>
                  );
                })}
              </Table>
            </TableContainer>
          </Box>
        </Box>

        <Box className={classes.buttonBox}>
          <HookFormButton
            className={classes.saveBtn}
            variant="contained"
            name={updateActivityLog ? 'Update Log' : 'Create Log'}
            handleSubmit={handleSubmit((data: any) => onSubmit(data))}
          />
        </Box>
      </React.Fragment>}



      {showNoLogsMessage && <React.Fragment>
        <Box className={classes.chooseClientBox}>
          <Box className={classes.selectImage}>
            {' '}
            <img src={InfoIcon} alt="" />
          </Box>
          <Typography sx={{ mt: 3 }}>There is no activity log for this date, would you like to create one?</Typography>
          <Box sx={{ marginTop: 4 }}>
            <HookFormButton
              className={classes.saveBtn}
              variant="contained"
              name='Create Log'
              handleSubmit={() => noLogsCreateHandler()}
            />
          </Box>

        </Box>
      </React.Fragment>}
    </Box>
  );
};

export default ActivityLoggerList;
