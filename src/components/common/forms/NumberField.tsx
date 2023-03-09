import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
// import StarIcon from "@mui/icons-material/Star";
import InputLabel from '@mui/material/InputLabel';

export interface IInputProps {
  controlName: string;
  labelName?: string;
  placeholder?: string;
  defaultValue?: any;
  register?: any;
  errors?: any;
  rules?: any;
  minRange: number;
  maxRange: number;
  classes: any;
  id?: any;
  fullWidth?: boolean;
  inputIndormentElement?: any;
  size?: string;
  startEndorementContent?: any;
  labelIcon?: any;
}

const NumberField = (props: IInputProps) => {
  return (
    <React.Fragment>
      <Box className={'formInputLabels'}>
        {props.labelName && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <InputLabel htmlFor="label" className={'labelClassName'}>
              {props.labelName}:
            </InputLabel>
            {props.labelIcon && (<span className='wd10'> {props.labelIcon}</span>)}
          </Box>
        )}

      </Box>

      <TextField
        fullWidth={props.fullWidth}
        id={props.id}
        size={props.size}
        sx={{  ...(props.labelName && {
          marginTop: '5px',
        }), }}
        // label={props.labelName}
        className={props.errors[props.controlName] ? 'invalid-parentBox ' : ''}
        placeholder={props.placeholder}
        type="number"
        variant="outlined"
        {...props.register(props.controlName, { ...props.rules })}
        InputProps={{
          autoComplete: 'off',
          startAdornment: props.startEndorementContent,
          endAdornment: (
            <InputAdornment position="end">
              {props.inputIndormentElement}
            </InputAdornment>
          ),
          inputProps: {
            min: props.minRange,
            max: props.maxRange,
          },
          classes: {
            notchedOutline: props.classes,
          },
        }}
      />
      <Box className={'errorTextBox'}>
        {props.errors[props.controlName] &&
          props.errors[props.controlName].type === 'required' && (
            <p className="is-invalid">
              {/* note: write Logic here  that Star only visible if errors(red-#FF3D71) or alert/warning(yellow -#FFAA00) and same with below error msg */}
              {/* <StarIcon sx={{ fontSize: "12px", color: "#FF3D71" }} /> */}
              Required
            </p>
          )}
        {props.errors[props.controlName] &&
          props.errors[props.controlName].type === 'maxLength' && (
            <p className="is-invalid">
              {/* <StarIcon sx={{ fontSize: "12px", color: "#FFAA00" }} /> */}
              {props.labelName} should be have maximum of{' '}
              {props.rules.maxLength}
              characters
            </p>
          )}
        {props.errors[props.controlName] &&
          props.errors[props.controlName].type === 'min' && (
            <p className="is-invalid">
              {/* <StarIcon sx={{ fontSize: "12px", color: "#FFAA00" }} /> */}
              {props.labelName} should be contain atleast {props.rules.min}
              characters
            </p>
          )}
        {props.errors[props.controlName] &&
          props.errors[props.controlName].type === 'pattern' && (
            <p className="is-invalid">
              {/* <StarIcon sx={{ fontSize: "12px", color: "#FF3D71" }} /> */}
              {props.labelName} is invalid
            </p>
          )}
        {props.errors[props.controlName] && (
          <p className="is-invalid">
            {props.errors[props.controlName].message}
          </p>
        )}

        {/* apply below validations for body composition measurement form fields */}

        {/* {props.errors[props.controlName] &&
        props.errors[props.controlName].type === "required" && (
          <p className="is-invalid">
            <StarIcon className={`${classes.starValidation} ${classes.redStar}`} /> Value is
            required
          </p>
        )}
      {props.errors[props.controlName] &&
        props.errors[props.controlName].type === "pattern" && (
          <p className="is-invalid">
            <StarIcon className={`${classes.starValidation} ${classes.redStar}`} /> Enter
            numbers only
          </p>
        )}
      {props.errors[props.controlName] &&
        props.errors[props.controlName].type === "maxLength" && (
          <p className="is-invalid">
            <StarIcon sx={{ fontSize: "12px", color: "#FFAA00" }} /> Value
            appears to be very high
          </p>
        )}
      {props.errors[props.controlName] &&
        props.errors[props.controlName].type === "minLength" && (
          <p className="is-invalid">
            <StarIcon className={`${classes.starValidation} ${classes.yellowStar}`} /> Value
            should be contain atleast 10 characters
          </p>
        )}
         {props.errors[props.controlName] && (
        <p className="is-invalid">{props.errors[props.controlName].message}</p>
      )} */}
      </Box>
    </React.Fragment>
  );
};

export default NumberField;
