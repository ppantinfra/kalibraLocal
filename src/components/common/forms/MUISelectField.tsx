import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export interface ISelectProps {
  controlName: string;
  labelName?: string;
  labelId?: string;
  id?: string;
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
}

const MUISelectField = (props: ISelectProps) => {
  return (
    <React.Fragment>
      <Select
        placeholder={props.placeholder}
        labelId={props.labelId}
        id={props.id}
        defaultValue={props.defaultValue}
        className={
          props.errors[props.controlName]
            ? `${props.selectClases} invalid-parentBox`
            : `form-control ${props.selectClases}`
        }
        {...props.register(props.controlName, { ...props.rules })}
        size="small"
      >
        {props.options
          ? props.options.map((option, index) => {
            return (
              <MenuItem value={option[props.optionValue]} key={index}>
                {option[props.optionName]}
              </MenuItem>
            );
          })
          : ''}
      </Select>
      {props.errors[props.controlName] &&
        props.errors[props.controlName].type === 'required' && (
          <p className="is-invalid">{props.labelName} is required</p>
        )}
    </React.Fragment>
  );
};

export default MUISelectField;
