import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { NuitritionScreenStyles } from '../../pages/interactionSystems/nutritionPlan/NuitritionScreenStyles';
import { genderTypeValidator, fieldValidator } from '../../core';
//import moment from 'moment';

const MyProfile = () => {
  const classes = NuitritionScreenStyles();
  const [userValues, setUserValues] = useState<any>({
    birthdate: '',
    height: '',
    weight: '',
    bodyFat: '',
    activityLevel: '',
    sex: '',
    rmr: '',
    tdee: ''
  });

  const [heightTextError, setHeightTextError] = useState<string>('');
  const [weightTextError, setWeightTextError] = useState<string>('');
  const [bodyFatTextError, setBodyFatTextError] = useState<string>('');
  const [sexTextError, setSexTextError] = useState<string>('');
  const [activityLevelTextError, setActivityLevelTextError] = useState<string>('');
  const [birthdateTextError, setBirthdateTextError] = useState<string>('');

  const handleUserValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserValues({
      ...userValues,
      [name]: value
    });
    const uHeight: string = userValues.height as string;
    const uWeight: string = userValues.weight as string;
    const uActivityLevel: string = userValues.activityLevel as string;
    const uBodyFat: string = userValues.bodyFat as string;
    const uSex: string = userValues.sex as string;
    const uBirthdate: string = userValues.birthdate as string;

    const heightError = fieldValidator(uHeight);
    if (uHeight && heightError) {
      setHeightTextError(heightError);
    } else setHeightTextError('');

    const weightError = fieldValidator(uWeight);
    if (uWeight && weightError) {
      setWeightTextError(weightError);
    } else setWeightTextError('');

    const bodyFatError = fieldValidator(uBodyFat);
    if (uBodyFat && bodyFatError) {
      setBodyFatTextError(bodyFatError);
    } else setBodyFatTextError('');

    const activityLevelError = fieldValidator(uActivityLevel);
    if (uActivityLevel && activityLevelError) {
      setActivityLevelTextError(activityLevelError);
    } else setActivityLevelTextError('');

    const sexError = genderTypeValidator(uSex);
    if (uSex && sexError) {
      setSexTextError(sexError);
    } else setSexTextError('');

    const birthdateError = fieldValidator(uBirthdate);
    if (uBirthdate && birthdateError) {
      setBirthdateTextError(birthdateError);
    } else setBirthdateTextError('');
  };

  const save = async (e: any) => {
    e.preventDefault();

    const heightError = fieldValidator(userValues.height);
    if (heightError) {
      setHeightTextError(heightError);
    } else setHeightTextError('');

    const weightError = fieldValidator(userValues.weight);
    if (weightError) {
      setWeightTextError(weightError);
    } else setWeightTextError('');

    const bodyFatError = fieldValidator(userValues.bodyFat);
    if (bodyFatError) {
      setBodyFatTextError(bodyFatError);
    } else setBodyFatTextError('');

    const activityLevelError = fieldValidator(userValues.activityLevel);
    if (activityLevelError) {
      setActivityLevelTextError(activityLevelError);
    } else setActivityLevelTextError('');

    const sexError = genderTypeValidator(userValues.sex);
    if (sexError) {
      setSexTextError(sexError);
    } else setSexTextError('');

    const birthdateError = fieldValidator(userValues.birthdate);
    if (birthdateError) {
      setBirthdateTextError(birthdateError);
    } else setBirthdateTextError('');

    // const biodata: any = {
    //   birthdate: moment(userValues.birthdate).format('YYYY-MM-DD'),
    //   height: userValues.height,
    //   weight: userValues.weight,
    //   bodyFat: userValues.bodyFat,
    //   activityLevel: userValues.activityLevel,
    //   sex: userValues.sex,
    //   rmr: userValues.rmr,
    //   tdee: userValues.tdee
    // };

    //  console.log('biodata', biodata);
  };

  return (
    <Box className={classes.nutritionPanelContent}>
      <Box>
        <Typography paragraph className={classes.formHeading}>
          My biodata
        </Typography>
        <Typography className={classes.formSubHeading}>
          Your biodata, used for nutritional suggestions (Biodata from Kalibra NOT found)
        </Typography>
      </Box>
      <Box className={classes.formBox}>
        <form className={classes.formContent} method="post">
          <Box sx={{ mt: 1 }} className={classes.formGroup}>
            <Box className={classes.formGroupField}>
              <TextField
                required
                id="birthdate"
                label="Date of Birth"
                InputLabelProps={{ shrink: true, required: true }}
                type="date"
                variant="outlined"
                fullWidth
                name="birthdate"
                helperText={birthdateTextError ? birthdateTextError : ''}
                onChange={handleUserValuesChange}
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                value={userValues.birthdate}
              />
            </Box>

            <Box className={classes.formGroupField}>
              <TextField
                required
                id="height"
                label="Height (cm)"
                type="number"
                fullWidth
                variant="outlined"
                helperText={heightTextError ? heightTextError : ''}
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="height"
                value={userValues.height}
                onChange={handleUserValuesChange}
              />
            </Box>
            <Box className={classes.formGroupField}>
              <TextField
                required
                id="weight"
                label="Weight (kg)"
                type="number"
                fullWidth
                variant="outlined"
                helperText={weightTextError ? weightTextError : ''}
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="weight"
                value={userValues.weight}
                onChange={handleUserValuesChange}
              />
            </Box>
            <Box className={classes.formGroupField}>
              <TextField
                required
                id="bodyFat"
                label="Body Fat (%)"
                type="number"
                fullWidth
                variant="outlined"
                helperText={bodyFatTextError ? bodyFatTextError : ''}
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="bodyFat"
                value={userValues.bodyFat}
                onChange={handleUserValuesChange}
              />
            </Box>
            <Box sx={{ display: 'block' }} className={classes.formGroupField}>
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  Activity Level
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  // style={{ flexWrap: "nowrap" }}
                  onChange={handleUserValuesChange}
                  className="form-control"
                  value={userValues.gender}
                  name="activityLevel"
                  id={'activityLevel'}
                >
                  <FormControlLabel value="sedentry" control={<Radio />} label="Sedentry" />
                  <FormControlLabel value="lightlyActive" control={<Radio />} label="Lightly Active" />
                  <FormControlLabel value="active" control={<Radio />} label="Active" />
                  <FormControlLabel value="veryActive" control={<Radio />} label="Very Active" />
                </RadioGroup>
              </Box>
              <span style={{ color: '#d32f2f', fontSize: '0.75rem' }}>
                {activityLevelTextError ? activityLevelTextError : null}
              </span>
            </Box>

            <Box sx={{ display: 'block' }} className={classes.formGroupField}>
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  Sex
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  onChange={handleUserValuesChange}
                  className="form-control"
                  value={userValues.sex}
                  name="sex"
                  id={'sex'}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </Box>
              <span style={{ color: '#d32f2f', fontSize: '0.75rem' }}>{sexTextError ? sexTextError : null}</span>
            </Box>
            <Box className={classes.formGroupField}>
              <TextField
                required
                id="rmr"
                label="RMR (calculated)"
                type="number"
                fullWidth
                variant="outlined"
                disabled
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="rmr"
                value={userValues.rmr}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box className={classes.formGroupField}>
              <TextField
                required
                id="tdee"
                label="TDEE (calculated)"
                type="number"
                fullWidth
                variant="outlined"
                disabled
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="tdee"
                value={userValues.tdee}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box className={classes.formGroupField}></Box>
          </Box>

          <Box sx={{ mt: 1 }} className={classes.buttonsBox}>
            <Button className={classes.saveBtn} onClick={save}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default MyProfile;
