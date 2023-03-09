import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FontColor, FontFamily } from '../../../core';

export interface ISelectProps {
  controlName: string;
  labelName?: string;
  placeholder?: string;
  defaultValue?: any;
  register: any;
  errors?: any;
  rules?: any;
  options?: any[];
  optionName: string;
  optionValue: string | number;
  classes?: any;
  changeHandler?: any;
  labelClassName?: any;
  selectClases?: any;
  disableLabel?: boolean;

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

const SelectField = (props: ISelectProps) => {
  const arrayErrors = props.arrayName &&
    props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.arrayControlName]?.type === 'required' && (
      <p className="is-invalid">{props.labelName} is required</p>
    );

  const nestedArrayErrors = props.nestedArrayName &&
    props.errors?.[props.arrayName]?.[props.mainIndex]?.[props.nestedArrayName]?.[props.nestedIndex]?.[
      props.nestedControlName
    ]?.type === 'required' && <p className="is-invalid">{props.labelName} is required</p>;

  return (
    <React.Fragment>
      <React.Fragment>
        {!props?.disableLabel && <InputLabel htmlFor="select-label" style={{ fontSize: '10px', fontFamily: FontFamily, color: FontColor, marginBottom: '4px' }}>
          {props.labelName}:
          {props.noValidate !== true && (
            <>
              {props.errors[props.controlName] && props.errors[props.controlName].type === 'required' && (
                <p className="is-invalid" style={{ marginLeft: '8px' }}>{props.labelName} is required</p>
              )}
              {arrayErrors}
              {nestedArrayErrors}
            </>
          )}
        </InputLabel>}
        <FormControl fullWidth>
          <NativeSelect
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            className={props.errors[props.controlName] ? 'invalid-parentBox' : 'form-control nativeSelect'}
            {...props.register(props.controlName, { ...props.rules })}
            onChange={props?.changeHandler}
            sx={{
              background: 'rgba(228, 233, 242, 0.4)'
            }}
            classes={props.selectClases}

          // disableUnderline
          >
            {props.placeholder && props.defaultValue === '' && (
              <option disabled value="">
                <em style={{ color: '#8F9BB3', fontSize: '14px' }}>{props.placeholder}</em>
              </option>
            )}
            {props.options
              ? props.options.map((option, index) => {
                return (
                  <option value={option[props.optionValue]} key={index}>
                    {option[props.optionName]}
                  </option>
                );
              })
              : ''}
          </NativeSelect>
        </FormControl>
      </React.Fragment>
    </React.Fragment>
  );
};

export default SelectField;
