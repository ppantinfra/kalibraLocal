import React from 'react';
import { Controller } from 'react-hook-form';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';


import { makeStyles } from '@mui/styles';
export const DatePickerStyles = makeStyles(() => ({ //define CSS for different date types
    calIcon: {
        '& input': {
            borderRadius: '8px',
            border: '1px solid #C5CEE0',
            width: '100%',
            padding: '8.5px 14px',
            height: 'auto',
            fontFamily: 'poppins !important'
        },
        '& .invalid-parentBox': {
            border: '1.5px solid red !important',
        },
        '& .MuiIconButton-root': {
            marginLeft: '-53px',
            backgroundColor: 'transparent!important',
            '& svg': {
                fill: '#222B45'
            }
        }
    },
    lblName: {
        fontSize: '12px',
        fontWeight: '400'
    }
}));


export interface IInputProps {
    controlName: string;
    labelName?: string;
    hideLabelName?: boolean;
    defaultValue?: any;
    register?: any;
    errors?: any;
    rules?: any;
    minValue?: any;
    maxValue?: any;
    control: any;
    disableFutureDate?: boolean;
    changeHanlder?: any;
    showErrorMsg?: boolean;
    hideLabelBorderError?: boolean
}

const CustomDatePicker = (props: IInputProps) => {
    const datePickerClasses = DatePickerStyles();
    return (
        <React.Fragment>
            <Box className={'formInputLabels'}>
                {props.labelName && !props.hideLabelName && (
                    <Box>
                        <InputLabel htmlFor="label" className={'labelClassName signinFormLabel'}>
                            {props.labelName}:
                        </InputLabel>
                    </Box>
                )}
                {props.showErrorMsg && <Box className={'errorTextBox'}>


                    {props.errors[props.controlName] && props.errors[props.controlName].type === 'required' && (
                        <p className="is-invalid">{props.labelName ? `${props.labelName} is ` : ''}required</p>
                    )}
                    {props.errors[props.controlName] && props.errors[props.controlName].type === 'checkBirthdate' && props.errors[props.controlName].message.length > 0 && (
                        <p className="is-invalid">
                            {props.errors[props.controlName].message}
                        </p>
                    )}
                </Box>}
            </Box>

            <Box className='pickerBox'>
                {/* <label className={datePickerClasses.lblName}>{props.labelName}</label> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Controller
                        rules={props.rules}
                        control={props.control}
                        name={props.controlName}
                        defaultValue={props.defaultValue || null}
                        render={({
                            field: { onChange, value },
                        }) => (
                            <>
                                <DesktopDatePicker
                                    value={value || null}
                                    onChange={(date) => {
                                        onChange(date);
                                        if (props.changeHanlder) {
                                            props.changeHanlder(date);
                                        }

                                    }}


                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                        <>
                                            <Box className={datePickerClasses.calIcon} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <input ref={inputRef} {...inputProps} disabled
                                                    className={props.errors[props.controlName] ? props.hideLabelBorderError ? '' : 'invalid-parentBox' : ''} />
                                                {InputProps?.endAdornment}
                                            </Box>
                                        </>
                                    )}
                                    components={{
                                        OpenPickerIcon: DateRangeOutlinedIcon,
                                        LeftArrowIcon: ChevronLeftIcon,
                                        RightArrowIcon: ChevronRightIcon,
                                    }}
                                    renderLoading={() => <CalendarPickerSkeleton />}
                                    disableFuture={props.disableFutureDate}
                                    inputFormat='dd-MMM-yyyy'
                                    minDate={props.minValue}
                                    maxDate={props.maxValue}
                                />
                            </>
                        )}
                    />
                </LocalizationProvider>
            </Box>

        </React.Fragment>
    );
};

export default CustomDatePicker;