import React from 'react';
import Box from '@mui/material/Box';
import ActivityLoggerList from './ActivityLoggerList';
import { WorkoutService } from './../../core';
import moment from 'moment';
import ActivityDatePicker from './ActivityDatePicker';

type Props = {
    clientId: any;
};

const ActivityLogger = ({ clientId }: Props) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [, setError] = React.useState<any>('');
    const [allWorkoutData, setAllWorkoutData] = React.useState<any>();
    const [allRestData, setAllRestData] = React.useState<any>();
    const [allTempoData, setAllTempoData] = React.useState<any>();
    const [allExercisesData, setAllExercisesData] = React.useState<any>();
    const [loggerDatesArray, setLoggerDatesArray] = React.useState<any>('');
    const [deleteActivityLogs, setDeleteActivityLogs] = React.useState<any>('');
    const [isUpdateLog, setIsUpdateLog] = React.useState<boolean>(false);
    const [showNoLogsMessage, setShowNoLogsMessage] = React.useState<boolean>(false);


    const noLogsCreateHandler = () => {
        setShowNoLogsMessage(false);
    };


    const getDefaultValues = React.useCallback((excerciseDropdown, date: string) => {
        const defaultValues: any = [];
        for (let i = 0; i < 6; i++) {
            const obj = {
                focusId: '', // excerciseDropdown[i]?.id,
                exerciseId: '', // excerciseDropdown[i].exercises[0].id,
                focusDropdownValues: excerciseDropdown,
                excerciseDropdownValues: [], //excerciseDropdown[i].exercises
                userId: clientId,
                isDataChange: false,
                userActivityLogId: '0',
                uploadedDate: date,
                userActivityLogSets: [
                    {
                        userActivityLogSetId: '0',
                        set: '',
                        exerciseLoad: 0,
                        rep: 0,
                        rpe: 0,
                        restId: null,
                        tempoId: null,
                        isDataChange: false,
                    },
                ],
            };
            defaultValues.push(obj);
        }
        const finalObj: any = { userActivityLogs: defaultValues };
        setAllWorkoutData(finalObj);
    }, [clientId]);


    const setLogSetsValues = React.useCallback((
        workOutResponse: any,
        excercisesDropdowns: any,
        date: string,
        prevDate?: string
    ) => {
        //method for setting default values in case of add and edit forms
        if (workOutResponse?.userActivityLogs.length > 0) {
            setIsUpdateLog(true);
            setShowNoLogsMessage(false);
            const activity = workOutResponse?.userActivityLogs;
            const defaultValues: any = [];
            let obj: any = {};
            for (const data of activity) {
                const sets: any = [];
                if (data === undefined) {
                    return;
                }

                for (const set of data.userActivityLogSets) {
                    const setObj: any = {
                        set: set?.set,
                        exerciseLoad: set?.exerciseLoad,
                        rep: set?.rep,
                        rpe: set?.rpe,
                        restId: set?.restId,
                        tempoId: set?.tempoId,
                        isDataChange: false,
                        userActivityLogSetId: prevDate ? '0' : set?.id, //used for copy from prev value case
                    };
                    sets.push(setObj);
                }
                obj = {
                    userActivityLogId: prevDate ? '0' : data?.id, //used for copy from prev value case
                    uploadedDate: date,
                    focusId: data?.exercise?.exerciseType?.id,
                    exerciseId: data?.exercise?.id,
                    focusDropdownValues: excercisesDropdowns,
                    excerciseDropdownValues: [],
                    userId: clientId,
                    isDataChange: false,
                    userActivityLogSets: sets,
                };
                defaultValues.push(obj);
            }
            const finalObj: any = { userActivityLogs: defaultValues };
            setAllWorkoutData(finalObj);
        } else {
            setShowNoLogsMessage(true);
            setIsUpdateLog(false);
            //case when there is no records then we show records equals to focus dropdown values
            getDefaultValues(excercisesDropdowns, date);
        }
    }, [clientId, getDefaultValues]);


    const refreshDatesOnAdd = () => {
        setIsLoading(true);
        WorkoutService.getActivityLoggerDates(clientId).then(async (res) => {
            const datesArray: any = [];
            for (const data of res) {
                //adding dates to array i.e on which logs already saved
                const convertedDate = moment.utc(data?.uploadedDate).format('DD/MM/YY');
                datesArray.push(convertedDate);
            }
            const dates = datesArray.reverse();
            setLoggerDatesArray(dates);

        });

    };


    const getWorkoutDetail = React.useCallback(async () => {
        //user for getting dropdownValues and Activity groups set values
        setIsLoading(true);
        WorkoutService.getActivityLoggerDates(clientId).then(async (res) => {

            const datesArray: any = [];


            for (const data of res) {
                //adding dates to array i.e on which logs already saved
                const convertedDate = moment.utc(data?.uploadedDate).format('DD/MM/YY');
                datesArray.push(convertedDate);
            }


            const dates = datesArray.reverse();
            setLoggerDatesArray(dates);
            const todayDate = moment(new Date()).format('YYYY-MM-DD') + 'T00:00:00.000Z';

            const [dropdownResponse, workOutResponse] = await Promise.all([
                WorkoutService.getActivityLoggerDropdownValues(),
                WorkoutService.getActivityLoggerActivities(
                    clientId,
                    todayDate,
                    todayDate
                ),
            ]);

            if (!dropdownResponse || !workOutResponse) {
                setError('Something Went Wrong');
                setIsLoading(false);
            } else {
                setAllRestData(dropdownResponse?.rests);
                setAllTempoData(dropdownResponse?.tempos);

                //excercise to be sort in order wise
                const apiExcercises = dropdownResponse?.exerciseTypes;
                for (let i = 0; i < apiExcercises.length; i++) {
                    apiExcercises[i].exercises.sort(function (a, b) {
                        return a.order - b.order;
                    });
                }
                setAllExercisesData(apiExcercises);
                setLogSetsValues(
                    workOutResponse,
                    dropdownResponse?.exerciseTypes,
                    todayDate
                );
            }
        });
    }, [clientId, setLogSetsValues]);

    React.useEffect(() => {
        getWorkoutDetail();
    }, [clientId, getWorkoutDetail]);

    const onDatesChange = async (date, prevDate?) => {
        setIsLoading(true);
        // setSelectedDate(date);
        let dateToFetch = moment(new Date(date)).format('YYYY-MM-DD') + 'T00:00:00.000Z';
        if (prevDate) {
            //copy from prev date case
            dateToFetch = moment(new Date(prevDate)).format('YYYY-MM-DD') + 'T00:00:00.000Z';
            const userActivityLogsIdToDelete: any = [];
            //case when current date have already filled data and user click on copy from previous date then that data needs to be deleted
            if (allWorkoutData?.userActivityLogs.length > 0) {
                if (allWorkoutData?.userActivityLogs[0]?.userActivityLogId !== '0') {
                    for (const data of allWorkoutData.userActivityLogs) {
                        userActivityLogsIdToDelete.push(data?.userActivityLogId);
                    }
                    const delObj = {
                        userActivityLogIds: userActivityLogsIdToDelete,
                        userId: clientId,
                    };
                    setDeleteActivityLogs(delObj);
                }
            }
        }
        const workOutResponse = await WorkoutService.getActivityLoggerActivities(
            clientId,
            dateToFetch,
            dateToFetch
        ); //clientId, dates[tabIndex], dates[tabIndex]
        if (workOutResponse) {
            setLogSetsValues(workOutResponse, allExercisesData, date, prevDate);
        } else {
            setError('Something Went Wrong');
            setIsLoading(false);
        }
    };

    return (
        <Box>
            {isLoading === true && allWorkoutData !== undefined ? (
                //   <ActivityLoggerSlider
                //     steps={steps}
                //     changeHandler={(date, prevDate?) => onDatesChange(date, prevDate)}
                //     dates={loggerDatesArray}
                //   />

                <React.Fragment>

                    <Box className='datePickerBox'>

                        <ActivityDatePicker changeHandler={(date, prevDate?) => onDatesChange(date, prevDate)}
                            filledlogDates={loggerDatesArray} />
                    </Box>



                    <Box sx={{ width: '100%', pb: 2 }}>
                        <ActivityLoggerList
                            allWorkoutData={allWorkoutData}
                            allRestData={allRestData}
                            allTempoData={allTempoData}
                            allExercisesData={allExercisesData}
                            userId={clientId}
                            refreshFilledDatesHandler={refreshDatesOnAdd}
                            deleteActivityLogs={deleteActivityLogs} // used for deleting a logs in case of copy from previous data already haved saved logs
                            updateActivityLog={isUpdateLog}
                            showNoLogsMessage={showNoLogsMessage}
                            noLogsCreateHandler={noLogsCreateHandler}

                        />

                    </Box>

                </React.Fragment>







            ) : (
                ''
            )}
        </Box>
    );
};


export default ActivityLogger;