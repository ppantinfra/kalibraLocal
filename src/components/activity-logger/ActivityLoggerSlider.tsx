import React from 'react';
import Box from '@mui/material/Box';
import { useActivityLoggerListStyles } from './';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Link from '@mui/material/Link';
// import Select from '@mui/material/Select';
import ActivityLoggerConfirmationModal from './ActivityLoggerConfirmationModal';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import MenuItem from '@mui/material/MenuItem';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { DatePickerStyles } from './DatePickerStyles';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import moment from 'moment';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import runIcon from '../../assets/images/table-icons/Move.svg';
import moveIcon from '../../assets/images/swim-icon.svg';
import weightIcon from '../../assets/images/weight-icon.svg';

type Props = {
  steps: Array<any>;
  changeHandler: any;
  dates: any[];
};

const DatePickerFooterComponent = () => {
  const classes = DatePickerStyles();
  return (<div className={classes.dpFooter}>
    <div className="activities run">
      <img src={runIcon} alt="" /> Run
    </div>
    <div className="activities weight">
      <img src={weightIcon} width="32px" alt="" /> Weight
    </div>
    <div className="activities swim">
      <img src={moveIcon} alt="" /> Swim
    </div>
  </div>);
};

const ActivityLoggerSlider = ({ steps, changeHandler, dates }: Props) => {
  // console.log(dates);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const [openTemplateModal, setOpenTemplateModal] = React.useState<boolean>(
    false
  );
  const [confirmModalIcon, setConfirmModalIcon] = React.useState<any>();
  const [templateModalHeader, setTemplateModalHeader] = React.useState<any>('');
  const [templateModalMessage, setTemplateModalMessage] = React.useState<any>(
    ''
  );
  const [templateButtonLabel, setTemplateButtonLabel] = React.useState<any>('');
  const [iconBgColor, setIconBgColor] = React.useState<any>('');
  const [, setIconColor] = React.useState<any>(''); //iconColor

  const initialValue = dayjs('2022-12-14');
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState<Dayjs | null>(initialValue);


  const runDays = ['27/11/22', '07/12/22'];
  const swimDays = ['25/11/22', '05/12/22', '11/12/22'];
  const weightDays = ['02/11/22', '02/12/22', '12/12/22'];

  const hideTemplateModal = () => {
    setOpenTemplateModal(false);
  };

  const copyLastWorkOut = () => {
    changeHandler(dates[activeStep].value, dates[activeStep - 1].value);
    setOpenTemplateModal(false);
  };

  const handleNext = () => {
    changeHandler(dates[activeStep + 1].value);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    changeHandler(dates[activeStep - 1].value);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useActivityLoggerListStyles();
  const datePickerClasses = DatePickerStyles();

  return (
    <React.Fragment>
      <Box className={classes.wl_content}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className="prevButton"
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>


          }
          backButton={
            <Box sx={{ display: 'flex' }}>
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                className="nextButton"
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>

              <Box className={classes.previousTextBox}>
                <Link
                  component="button"
                  className={`${classes.prev_text_Link} prev_date_link`}
                  disabled={true}
                >
                  <span className={classes.days}>Day {dates.length - activeStep}</span>
                  {/* {steps[activeStep].date} */}
                </Link>
                <Link component="button" className={classes.dateBox}>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={value}
                      // views={['day']}
                      // loading={isLoading}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      // onMonthChange={handleMonthChange}
                      // renderInput={(params) => <TextField {...params} />}

                      // Custom Input
                      renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box className={datePickerClasses.calIcon} sx={{ display: 'flex', alignItems: 'center' }}>
                          <input ref={inputRef} {...inputProps} disabled />
                          {InputProps?.endAdornment}
                        </Box>
                      )}
                      components={{
                        OpenPickerIcon: DateRangeOutlinedIcon,
                        LeftArrowIcon: ChevronLeftIcon,
                        RightArrowIcon: ChevronRightIcon,
                      }}


                      renderLoading={() => <CalendarPickerSkeleton />}
                      showToolbar={true}
                      ToolbarComponent={DatePickerFooterComponent}
                      disableFuture={true}
                      renderDay={(day, _value, DayComponentProps) => {
                        const formattedDate = moment(day.toString()).format('DD/MM/YY');
                        const isRunning = !DayComponentProps.outsideCurrentMonth && runDays.includes(formattedDate);
                        const isSwimming = !DayComponentProps.outsideCurrentMonth && swimDays.includes(formattedDate);
                        const isWeight = !DayComponentProps.outsideCurrentMonth && weightDays.includes(formattedDate);
                        return (
                          <PickersDay key={day.toString()} className={isRunning ? datePickerClasses.activitiesRun : isSwimming ? datePickerClasses.activitiesSwim : isWeight ? datePickerClasses.activitiesWeight : ''}  {...DayComponentProps} />
                        );
                      }}
                    />
                  </LocalizationProvider>


                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={
                      steps[activeStep].date.value
                        ? steps[activeStep].date.value
                        : steps[activeStep].date
                    }
                    onChange={(event) => {
                      let index = 0;
                      for (let i = 0; i < dates?.length; i++) {
                        if (dates[i].value === event.target.value) {
                          index = i;
                        }
                      }

                      // var index = dates.indexOf(event.target.value)
                      setActiveStep(index);
                      changeHandler(event.target.value);
                    }}
                  >
                    {dates
                      ? dates.map((option, index) => {
                        return (
                          <MenuItem value={option?.value} key={index}>
                            {option?.name}
                          </MenuItem>
                        );
                      })
                      : ''}
                  </Select> */}
                </Link>

                {!(dates.length === 1 || activeStep !== dates.length - 1) && (
                  <Link
                    className={classes.prev_text_Link}
                    component="button"
                    // disabled={
                    //   dates.length === 1 || activeStep !== dates.length - 1
                    // }
                    onClick={
                      () => {
                        setOpenTemplateModal(true);
                        setTemplateModalMessage(
                          'Are you sure you want to copy the previous data?'
                        );
                        setTemplateModalHeader('Copy Last Workout');
                        setConfirmModalIcon(ConfirmationNumberIcon);
                        setTemplateButtonLabel('Copy');
                        setIconBgColor('#FFD6D9');
                        setIconColor('#FF3D71');
                      }

                      // () =>openDeleteSetTemplateModal(row.setId, tableBlockIndex)
                      // deleteSet(row.setId, tableBlockIndex)
                    }
                  >
                    {/* Copy from previous week */}
                    Copy last workout
                  </Link>
                )}
              </Box>
            </Box>
          }
          className={classes.muiMobileStepper}
        />
        <Box sx={{ width: '100%', pb: 2 }}>
          {/* {steps[activeStep].description} */}
          {steps[activeStep].renderTable}
        </Box>
      </Box>

      <ActivityLoggerConfirmationModal
        hideTemplateModal={hideTemplateModal}
        confirmModalIcon={confirmModalIcon}
        templateModalHeader={templateModalHeader}
        templateModalMessage={templateModalMessage}
        templateButtonLabel={templateButtonLabel}
        submitButton={copyLastWorkOut}
        openTemplateModal={openTemplateModal}
        iconBgColor={iconBgColor}
      />
    </React.Fragment>
  );
};

export default ActivityLoggerSlider;
