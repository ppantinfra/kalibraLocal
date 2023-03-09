import React from 'react';
import Box from '@mui/material/Box';
import { useActivityLoggerListStyles } from './';
import Link from '@mui/material/Link';
import ActivityLoggerConfirmationModal from './ActivityLoggerConfirmationModal';
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
    changeHandler: any;
    filledlogDates: any[];
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

const ActivityDatePicker = ({ changeHandler, filledlogDates }: Props) => {
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

    const initialValue = dayjs(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(initialValue);
    const [prevDate, setprevDate] = React.useState<any>('');
    // const runDays = ['27/11/22', '07/12/22'];
    // const swimDays = ['25/11/22', '05/12/22', '11/12/22'];
    // const weightDays = ['02/11/22', '02/12/22', '12/12/22'];

    const hideTemplateModal = () => {
        setOpenTemplateModal(false);
    };

    React.useEffect(() => {
        setprevDate('');
        const convertedSelectedDate = selectedDate ? moment(new Date(selectedDate.toString())).format('MM/DD/YY') : '';

        if (filledlogDates.length > 0 && convertedSelectedDate) {

            for (let i = 0; i < filledlogDates.length; i++) {
                const date = filledlogDates[i];
                const datearray = date.split('/');

                const newDate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];

                if (convertedSelectedDate > newDate) {
                    setprevDate(newDate);
                    return;
                }
            }

        } else {
            //disable copy from prev date here
        }


    }, [filledlogDates, selectedDate]);

    const copyLastWorkOut = () => {
        changeHandler(selectedDate, prevDate);
        setOpenTemplateModal(false);
    };

    const classes = useActivityLoggerListStyles();
    const datePickerClasses = DatePickerStyles();

    return (
        <React.Fragment>

            <Box>
                <Link component="button" className={classes.dateBox}>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            value={selectedDate}
                            PopperProps={{
                                placement: 'bottom-start',
                            }}

                            // PopperProps={{
                            //     placement: 'right',
                            // }}
                            // views={['day']}
                            // loading={isLoading}
                            onChange={(newValue) => {
                                setSelectedDate(newValue);
                                changeHandler(newValue);
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

                                // need to add functionality to highlights running, weight dates after backend implementation
                                const isRunning = false;
                                const isWeight = false;
                                const isSwimming = !DayComponentProps.outsideCurrentMonth && filledlogDates.includes(formattedDate);

                                return (
                                    <PickersDay key={day.toString()} className={isRunning ? datePickerClasses.activitiesRun : isSwimming ? datePickerClasses.activitiesSwim : isWeight ? datePickerClasses.activitiesWeight : ''}  {...DayComponentProps} />
                                );
                            }}
                            inputFormat='dd-MMM-yyyy'
                        />
                    </LocalizationProvider>
                </Link>


                <Link
                    className={classes.prev_text_Link}
                    component="button"
                    disabled={prevDate === ''}
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
                    Copy last workout
                </Link>

            </Box>
            {/* <Box sx={{ width: '100%', pb: 2 }}>
                    <ActivityLogger clientId='123' activityType='strength' />
                </Box> */}

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

export default ActivityDatePicker;