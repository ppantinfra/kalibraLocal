import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import { FormLabel } from '@mui/material';

export interface IInputProps {
  isRow?: boolean;
  radioClasses?: string;
  controlName?: any;
  register?: any;
  labelName?: string;
  errors?: any;
  rules?: any;
  options?: any[];
  optionName: string;
  optionValue: string | number;
  defaultValue?: any;
  control: any;
  blurHandler?: any;
  className?: any;
  style?: any;
  labelClassName?: any;
  hideLabelName?: boolean;

  // formArray
  mainIndex?: any;
  arrayControlName?: any;
  arrayName?: any;

  //NestedFormArray
  nestedIndex?: any;
  nestedControlName?: any;
  nestedArrayName?: any;

  noValidate?: boolean;
}

const RadioField = (props: IInputProps) => {
  const arrayErrors = props.arrayName &&
    props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.arrayControlName]
      ?.type === 'required' && (
      <p className="is-invalid">{props.labelName} is required</p>
    );

  const nestedArrayErrors = props.nestedArrayName &&
    props.errors?.[props.arrayName]?.[props.mainIndex]?.[
      props.nestedArrayName
    ]?.[props.nestedIndex]?.[props.nestedControlName]?.type === 'required' && (
      <p className="is-invalid">{props.labelName} is required</p>
    );

  return (
    <React.Fragment>
      {props.noValidate !== true && (
        <Box className={'formInputLabels'}>
          {props.hideLabelName === undefined && props.labelName && (
            <Box>
              <FormLabel htmlFor="label" className={'labelClassName'}>
                {props.labelName}:
              </FormLabel>
            </Box>
          )}
          <Box className={'errorTextBox'}>
            {props.errors[props.controlName] &&
              props.errors[props.controlName].type === 'required' && (
                <p className="is-invalid">{props.labelName} is required</p>
              )}

            {arrayErrors}
            {nestedArrayErrors}
          </Box>
        </Box>
      )}
      <FormControl component="fieldset">
        <Controller
          required
          rules={props.rules}
          control={props.control}
          name={props.controlName}
          // defaultValue={props.defaultValue}

          {...props.register(props.controlName, { ...props.rules })}
          render={({ field }) => {
            return (
              <RadioGroup
                {...field}
                onBlur={props.blurHandler}
                row
                style={props.style}
                className={props.radioClasses}
                defaultValue={props.defaultValue}
              >
                {props.options
                  ? props.options.map((option, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={option[props.optionValue]}
                        control={
                          <Radio
                            style={
                              props.errors[props.controlName] &&
                              props.errors[props.controlName].type ===
                              'required' && { color: 'red' }
                            }
                          />
                        }
                        label={option[props.optionName]}
                      />
                    );
                  })
                  : ''}
              </RadioGroup>
            );
          }}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default RadioField;
