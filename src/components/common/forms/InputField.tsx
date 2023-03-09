import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import { InputLabel } from '@mui/material';

export interface IInputProps {
  controlName: string;
  labelName?: string;
  hideLabelName?: boolean;
  placeholder?: string;
  type?: string;
  defaultValue?: any;
  register?: any;
  errors?: any;
  rules?: any;
  classes?: any;
  className?: any;
  style?: any;
  variant?: any;
  blurHandler?: any;
  disabled?: boolean;
  rows?: number;
  sx?: any;
  // formArray
  mainIndex?: any;
  arrayControlName?: any;
  arrayName?: any;
  multiline?: boolean;
  //NestedFormArray
  nestedIndex?: any;
  nestedControlName?: any;
  nestedArrayName?: any;
  onKeyDown?: any;
  noValidate?: boolean;
  inputIndormentElement?: React.ReactNode | React.ReactNode[];
}

const InputField = (props: IInputProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const onBlur = () => {
    setIsFocus(false);
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const arrayErrors =
    props.arrayName &&
    ((props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.arrayControlName]?.type === 'required' && (
      <p className="is-invalid">{props.labelName} is required</p>
    )) ||
      (props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.arrayControlName]?.type === 'maxLength' && (
        <p className="is-invalid">
          {props.labelName} should be have maximum of {props.rules.maxLength} characters
        </p>
      )) ||
      (props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.arrayControlName]?.type === 'minLength' && (
        <p className="is-invalid">
          {props.labelName} should be contain atleast {props.rules.minLength} characters
        </p>
      )));

  const nestedArrayErrors =
    props.nestedArrayName &&
    ((props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.nestedArrayName]?.[props.nestedIndex]?.[
      props.nestedControlName
    ]?.type === 'required' && <p className="is-invalid">{props.labelName} is required</p>) ||
      (props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.nestedArrayName]?.[props.nestedIndex]?.[
        props.nestedControlName
      ]?.type === 'maxLength' && (
          <p className="is-invalid">
            {props.labelName} should be have maximum of {props.rules.maxLength} characters
          </p>
        )) ||
      (props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.nestedArrayName]?.[props.nestedIndex]?.[
        props.nestedControlName
      ]?.type === 'minLength' && (
          <p className="is-invalid">
            {props.labelName} should be contain atleast {props.rules.minLength} characters
          </p>
        )));

  return (
    <React.Fragment>
      { props.hideLabelName === undefined && isFocus === true && (
        <Box className={'formInputLabels'}>
          {props.labelName && props.hideLabelName === undefined && (
            <Box>
              <InputLabel htmlFor="label" className={'labelClassName signinFormLabel'}>
                {props.labelName}:
              </InputLabel>
            </Box>
          )}
        </Box>
      )}
      {props.noValidate !== true && isFocus === false && (
        <Box className={'formInputLabels'}>
          {props.labelName && props.hideLabelName === undefined && (
            <Box>
              <InputLabel htmlFor="label" className={'labelClassName signinFormLabel'}>
                {props.labelName}:
              </InputLabel>
            </Box>
          )}

          <Box className={'errorTextBox'}>
            {props.errors[props.controlName] && props.errors[props.controlName].type === 'required' && (
              <p className="is-invalid">
                {/* {props.labelName} is  */}
                {props.labelName} is required
              </p>
            )}
            {props.errors[props.controlName] && props.errors[props.controlName].type === 'maxLength' && (
              <p className="is-invalid">
                {props.labelName} should be have maximum of {props.rules.maxLength} characters
              </p>
            )}
            {props.errors[props.controlName] && props.errors[props.controlName].type === 'min' && (
              <p className="is-invalid">
                {props.labelName} should be contain atleast {props.rules.min} characters
              </p>
            )}
            {props.errors[props.controlName] && props.errors[props.controlName].type === 'pattern' && (
              <p className="is-invalid">{props.labelName} is invalid</p>
            )}
            {props.errors[props.controlName] && props.errors[props.controlName].message.length > 0 && <p className="is-invalid">{props.errors[props.controlName].message}</p>}
            {arrayErrors}
            {nestedArrayErrors}
          </Box>
        </Box>
      )}
      <FormControl fullWidth>
        <TextField
          noValidate
          className={props.errors[props.controlName] && props.errors[props.controlName].message.length > 0 && isFocus === false ? 'invalid-parentBox' : props.className}
          placeholder={props.placeholder}
          type={props.type}
          onKeyDown={props.onKeyDown}
          variant={props.variant}
          InputProps={{
            classes: props?.classes,
            // value:props.defaultValue
            autoComplete: 'off',
            endAdornment: props.inputIndormentElement && (
              <InputAdornment position="end">{props.inputIndormentElement}</InputAdornment>
            )
          }}
          {...props.register(props.controlName, { ...props.rules })}
          defaultValue={props.defaultValue}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={props.disabled}
          multiline={props.multiline}
          rows={props.rows}
          sx={props.sx}
        />
      </FormControl >

    </React.Fragment >
  );
};

export default InputField;
