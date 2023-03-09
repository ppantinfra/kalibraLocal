import React, { useState, useContext } from 'react';
import { useEditProfileScreenStyles } from './EditProfileScreenStyles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Back from '../../components/common/Back';
import { screenTitle } from '../../core/constants';
import { getUserId, updateUser } from '../../api/AuthApi';
import { dateValidator, UserAttributes, UserService } from '../../core';
import moment from 'moment';
import { CommonContext, CommonContextType } from '../../core/context';
import Switch from '@mui/material/Switch';
import {
  getUserFromLocalStorage,
  setUserLocal,
  // getTenantKeyFromLocal,
  // setSelectedUserIdLocal
} from '../../api/shared/CommonApi';
import { useForm } from 'react-hook-form';
import * as pattern from '../../core';
import {
  SnackBarsToast,
  HookFormButton,
  SuccessDialog,
  InputField,
  RadioField,
  CustomDatePicker
} from '../../components/common';
// import { MenuItem, Select } from '@mui/material';



const EditProfileScreen = () => {
  const classes = useEditProfileScreenStyles();
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const userData = getUserFromLocalStorage();
  userData.birthdate = moment(userData?.birthdate).format('YYYY-MM-DD');
  // const [userValues, setUserValues] = useState<any>(userData);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const { demoMode, setDemoMode, setLoggedInUserName } = useContext(CommonContext) as CommonContextType;
  // const [selectedTenant, setSelectedTenant] = React.useState({});
  // const [tenanList, setTenanList] = React.useState<any>({});
  const gendersDropdown = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: userData,
    shouldFocusError: false
  });

  const birthdateCheck = (date: string) => {
    const error = dateValidator('YYYY-MM-DD', date);
    if (error.length > 0) {
      // setBirthdateErrorMsg(error);
      return error;
    } else {
      return true;
    }
  };


  // useEffect(() => {
  //   const getTenantList = async () => {
  //     try {
  //       await UserService.getTenantList()
  //         .then((res: any) => {
  //           if (res) {
  //             for (const tenant of res.tenants) {
  //               if (tenant?.key === getTenantKeyFromLocal()) {
  //                 const obj = JSON.stringify({ item: tenant });
  //                 setSelectedTenant(obj);
  //               }
  //             }
  //             setTenanList(res?.tenants);
  //           } else {
  //             setIsError(true);
  //             setOpenSnackBar(true);
  //             setSnackBarMessage('something went wrong');
  //           }
  //         })
  //         .catch((err) => {
  //           setIsError(true);
  //           setOpenSnackBar(true);
  //           setSnackBarMessage(err.message);
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getTenantList();
  // }, []);

  // const handleSelectChange = (event: any) => {
  //   setSelectedTenant(event.target.value);
  //   const tenant = JSON.parse(event.target.value).item;
  //   setTenantKey(tenant.key);
  //   // setSelectedUserIdLocal('');
  //   setUserId('');
  // };

  // with react-hook submit
  const updateProfile = async (data: any) => {
    const values: UserAttributes = {
      name: data.name,
      nickname: data.nickname,
      gender: data.gender,
      birthdate: moment(data.birthdate).format('YYYY-MM-DD'),
      'custom:jobtitle': data.jobTitle

    };

    const cognitoId = await getUserId();
    const newUserData = {
      ...values,
      email: userData.email,
      password: userData.password,
      cognitoId: cognitoId,
    };

    await updateUser(values)
      .then(async (res: any) => {
        if (res?.error) {
          setIsError(true);
          setOpenSnackBar(true);
          setSnackBarMessage(res?.error?.message);
        } else {
          const result = await UserService.updateProfileDetails(newUserData);
          if (result.data !== undefined) {
            setLoggedInUserName(data?.name);
            const userObj = getUserFromLocalStorage();
            userObj.name = data?.name;
            userObj.nickname = data?.nickname;
            userObj.gender = data?.gender;
            userObj.birthdate = data?.birthdate;
            userObj.jobTitle = data?.jobTitle;
            // save use to local
            setUserLocal(userObj);
            setShowSuccessPopup(true);
          } else {
            setOpenSnackBar(true);
            setIsError(true);
            setSnackBarMessage("Can't update user!");
          }
        }
      })
      .catch((e: Error) => {
        setOpenSnackBar(true);
        setIsError(true);
        setSnackBarMessage(e.message);
      });
  };

  return (
    <React.Fragment>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />
      <Box>
        <Back componentTitle={screenTitle.MyProfilePage} disableBackButton={true} />
        <Box className={classes.pageContent}>
          <Box className={classes.pageContentWrapper}>
            <form className={classes.formContent} method="post">
              <Box sx={{ mt: 1 }}>
                <Box sx={{ mt: 1 }} className={classes.formGroup}>
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Email"
                      type="email"
                      controlName={'email'}
                      register={register}
                      errors={errors}
                      rules={{ required: true, pattern: pattern.EmailPattern }}
                      defaultValue={userData?.email}
                      disabled={true}
                    />
                  </Box>
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Name"
                      type="text"
                      controlName={'name'}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      defaultValue={userData?.name}
                    />
                  </Box>
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Preferred Name"
                      type="text"
                      controlName={'nickname'}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      defaultValue={userData?.nickname}
                    />
                  </Box>
                  <Box
                    sx={{ display: 'block' }}
                    className={classes.formGroupField}
                  >
                    <RadioField
                      isRow={true}
                      radioClasses={`${classes.radioGroup} form-control`}
                      controlName="gender"
                      register={register}
                      labelName="Sex"
                      errors={errors}
                      rules={{ required: true }}
                      options={gendersDropdown}
                      optionValue="value"
                      optionName="name"
                      control={control}
                      labelClassName={classes.inputLabel}
                      defaultValue={userData?.gender}
                    />
                  </Box>
                  <Box className={`${classes.formGroupField} ${classes.customDatePicker}`}>
                    <CustomDatePicker
                      labelName="Birth Date"
                      controlName={'birthdate'}
                      register={register}
                      errors={errors}
                      rules={{
                        required: true,
                        validate: {
                          checkBirthdate: (v: any) => birthdateCheck(v)
                        }
                      }}
                      // defaultValue={userData.birthdate}
                      control={control}
                      disableFutureDate={true}
                      showErrorMsg={true}
                      hideLabelBorderError={true}
                    />
                  </Box>
                  {/* <Box className={classes.formGroupField}>
                    <InputLabel variant="standard" className={classes.tenantSelectTitle} htmlFor="uncontrolled-native">
                      Tenant:
                    </InputLabel>
                    <Select
                      onChange={handleSelectChange}
                      value={Object.keys(tenanList).length > 0 ? (selectedTenant || '') : ''}
                      displayEmpty

                      placeholder="Tenant"
                      className={classes.tenantselect}
                      inputProps={{
                        'aria-label': 'Without label',
                        name: 'selectedType',
                      }}
                    >
                      {tenanList && Object.keys(tenanList).length > 0 &&
                        tenanList.map((item: any, index: number) => (
                          <MenuItem
                            key={index}
                            data-name={item.name}
                            value={JSON.stringify({
                              item
                            })}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </Box> */}

                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Job Title"
                      type="text"
                      controlName={'jobTitle'}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      defaultValue={userData?.jobTitle}
                    />
                  </Box>


                  {window.location.hostname !== 'pro.kalibra.ai' && <Box className={classes.formGroupField}>
                    <InputLabel
                      htmlFor="switch-label"
                      className={classes.labelClassName}
                    >
                      Demo Mode
                    </InputLabel>
                    <Switch
                      checked={demoMode}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDemoMode(event.target.checked);
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </Box>}

                </Box>

                <Box sx={{ mt: 1 }} className={classes.buttonsBox}>
                  <HookFormButton
                    className={classes.submitBtn}
                    variant="contained"
                    name="Update Profile"
                    handleSubmit={handleSubmit((data: any) =>
                      updateProfile(data)
                    )}
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
        {
          showSuccessPopup && (
            <SuccessDialog
              showSuccessPopup={false}
              setShowSuccessPopup={setShowSuccessPopup}
              successMessage="Profile successfully updated"
              successDescription=""
              successNotifyMessage=""
              showDoneButton={true}
              successDialogCloseHandler={() => setShowSuccessPopup(false)}
            />
          )
        }
      </Box >
    </React.Fragment >
  );
};

export default EditProfileScreen;
