import React, { useContext, useState } from 'react';
import { HookFormButton, InputField, CustomDatePicker, RadioField, SelectField } from '../../common';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
// import * as pattern from '../../../core';
import { useAddPractionerStyles } from './AddPractionerStyles';
import { CommonContext, CommonContextType } from '../../../core/context';
import LoginInstruction from './LoginInstruction';
import { UserService } from '../../../core';
import Typography from '@mui/material/Typography';
import moment from 'moment';

const AddPractioner = ({ userEmail, addAnotherPractionerHandler }) => {
  const { tenantKey } = useContext(CommonContext) as CommonContextType;
  const [addedScreen, showAddedScreen] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>('');
  const [isSelectBoxChanged, setIsSelectBoxChanged] = useState<boolean>(false);
  const classes = useAddPractionerStyles();
  const gendersDropdown = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }
  ];
  const roles = [
    // { name: 'Owner', value: 'isOwner' },
    { name: 'Administrator', value: 'isAdmin' },
    { name: 'Practitioner', value: 'isUser' },
    { name: 'Billing Manager', value: 'isBillingManager' }
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: 'onChange'
  });
  const onCreateAccountClick = async (data: any) => {
    const bodyToSend: any = {};
    const rolesObj = {
      tenant: tenantKey,
      isOwner: false,
      isAdmin: false,
      isBillingManager: false,
      isUser: false
    };
    rolesObj[data?.roles] = true;
    bodyToSend.email = userEmail;
    bodyToSend.name = data?.firstname + ' ' + data?.lastname;
    bodyToSend.nickname = data?.nickname;
    bodyToSend.gender = data?.sex;
    bodyToSend.birthdate = moment(data?.birthdate).format('YYYY-MM-DD');
    bodyToSend.jobTitle = data?.jobTitle;
    bodyToSend.userPermissionDto = rolesObj;

    await UserService.addNewUserToOrganization(bodyToSend).then((res: any) => {
      if (res) {
        setUserDetails(res);
        showAddedScreen(true);
      }
    });
  };

  const changeHandler = () => {
    setIsSelectBoxChanged(true);
  };


  return (
    <React.Fragment>
      {!addedScreen ? (
        <Box className="cb_card pt-2">
          <Box className={classes.pageContent}>
            {/* <Box className={classes.pageContentWrapper}> */}
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: '400' }}>
              Sorry, we could not find an account matching the email address you provided. Please create a new account.
            </Typography>
            <form className={classes.formContent}>
              <Box sx={{ mt: 1 }}>
                <Box sx={{ mt: 1 }} className={classes.formGroup}>
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Email"
                      placeholder="Enter Email Address"
                      type="email"
                      controlName={'email'}
                      register={register}
                      errors={errors}
                      defaultValue={userEmail ? userEmail : ''}
                      disabled
                    // rules={{ required: true, pattern: pattern.EmailPattern }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: 1 }} className={classes.formGroup}>
                  {/* <Box className={classes.formGroupField}></Box> */}
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="First Name"
                      placeholder="First Name"
                      type="text"
                      controlName={'firstname'}
                      register={register}
                      errors={errors}
                      rules={{ required: true, maxLength: 255 }}
                    />
                  </Box>

                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Last Name"
                      placeholder="Last Name"
                      type="text"
                      controlName={'lastname'}
                      register={register}
                      errors={errors}
                      rules={{ required: true, maxLength: 255 }}
                    />
                  </Box>
                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Nickname"
                      placeholder="Nickname"
                      type="text"
                      controlName={'nickname'}
                      register={register}
                      errors={errors}
                      rules={{ required: true, maxLength: 255 }}
                    />
                  </Box>

                  <Box className={`${classes.formGroupField} ${isSelectBoxChanged === true ? classes.selectBox : classes.selectBoxWithPlaceHolder}`}>
                    <SelectField
                      controlName="roles"
                      errors={errors}
                      register={register}
                      labelName="Role"
                      placeholder="Select Role"
                      options={roles}
                      optionValue="value"
                      optionName="name"
                      defaultValue=""
                      rules={{ required: true }}
                      changeHandler={changeHandler}
                    //disableLabel={true}
                    />
                  </Box>

                  <Box className={classes.formGroupField}>
                    <InputField
                      labelName="Job Title"
                      placeholder="Job Title"
                      type="text"
                      controlName={'jobTitle'}
                      register={register}
                      errors={errors}
                      rules={{ required: true, maxLength: 255 }}
                    />
                  </Box>
                </Box>
                <Box sx={{ mt: 1 }} className={classes.formGroup}>
                  <Box className={classes.formGroupField}>
                    <RadioField
                      isRow={true}
                      radioClasses="radio-control"
                      controlName="sex"
                      register={register}
                      labelName="Sex"
                      errors={errors}
                      rules={{ required: true }}
                      options={gendersDropdown}
                      optionValue="value"
                      optionName="name"
                      control={control}
                    // labelClassName={classes.inputLabel}
                    />
                  </Box>
                  <Box className={`${classes.formGroupField} ${classes.dateInput}`}>
                    <CustomDatePicker
                      labelName="Date of Birth"
                      controlName={'birthdate'}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      control={control}
                      disableFutureDate={true}
                      showErrorMsg={true}
                      hideLabelBorderError={true}
                    />
                  </Box>
                </Box>
                <Box className={classes.buttonBox}>
                  <HookFormButton
                    className={classes.submitBtn}
                    variant="contained"
                    name="Create Account"
                    handleSubmit={handleSubmit((data: any) => onCreateAccountClick(data))}
                  />
                </Box>
              </Box>
            </form>
            {/* </Box> */}
          </Box>
        </Box>
      ) : (
        <LoginInstruction addAnotherPractionerHandler={addAnotherPractionerHandler} userDetails={userDetails} />
      )
      }
    </React.Fragment >
  );
};

export default AddPractioner;
