import React, { useState, useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchImgIcon from '../../../assets/images/searchIcon.svg';
import { DefaulPrimarytColor, FontFamily, FontColor } from '../../../core';
import { useLocation, useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { CommonContext, CommonContextType } from '../../../core/context';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { MUIButton } from '../../../components/common';
import { useClientOverviewScreenStyles } from '../../clients/ClientOverviewScreenStyles';
import { IntelligenceClientLists } from '../../../components/intelligence';
import { RoutesPath as route } from '../../../core/constants';

const tabStyles: any = {
    flexDirection: 'row',
    // background: '#fff',
    fontSize: 14,
    // borderRadius: 5,
    padding: 0,
    fontWeight: '500',
    fontFamily: FontFamily,
    textTransform: 'capitalize',
    minHeight: '35px',
    color: FontColor,
    '&.Mui-selected': {
        color: DefaulPrimarytColor.primary600green
    }
};

const IntelligenceScreen = () => {
    const { tenantKey } = useContext(CommonContext) as CommonContextType;
    const location = useLocation();
    const navigate = useNavigate();
    const classes = useClientOverviewScreenStyles();
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [materialAutoCompleteOptions, setMaterialAutoCompleteOptions] = useState<any[]>([]);
    const [tabValue, setTabValue] = React.useState('AllClients');
    const [topUserList, setTopUserList] = useState<any[]>([]);
    const [filterTopUserList, setFilterTopUserList] = useState<any[]>([]);
    const [allUserList, setAllUserList] = useState<any[]>([]);
    const [FilterAllUserList, setFilterAllUserList] = useState<any[]>([]);
    const user = [{ 'myClient': true, 'name': 'Ivan Vatchkov', 'nickname': 'Kalibrator', 'userCognitoId': 'db03e8c1-0d71-401e-a31c-8ca60f809bbc', 'genderCode': 'M', 'lastUpdated': '2023-04-01T16:00:00.000Z', 'healthMarkers': [{ 'latestHealthMarkerValues': [{ 'value': 15, 'lastUpdated': '2021-12-06T19:21:33.000Z' }], 'externalKey': 'BodyFat', 'name': 'Body Fat', 'value': 15, 'lastUpdated': '2021-12-06T19:21:33.000Z', 'rangeMin': '3.00000', 'rangeMax': '75.00000', 'unit': '%', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 87, 'lastUpdated': '2023-03-16T10:53:30.000Z' }], 'externalKey': 'Bodyweight', 'name': 'Weight', 'value': 87, 'lastUpdated': '2023-03-16T10:53:30.000Z', 'rangeMin': '10.00000', 'rangeMax': '350.00000', 'unit': 'kg', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 230, 'lastUpdated': '2023-01-30T16:00:00.000Z' }], 'externalKey': 'CaloriesIn', 'name': 'kCal In', 'value': 230, 'lastUpdated': '2023-01-30T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 2867, 'lastUpdated': '2022-08-11T00:00:00.000Z' }], 'externalKey': 'CaloriesOut', 'name': 'kCal Out', 'value': 2867, 'lastUpdated': '2022-08-11T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 8.216666666666667, 'lastUpdated': '2023-04-01T16:00:00.000Z' }], 'externalKey': 'SleepHours', 'name': 'Sleep', 'value': 8.216666666666667, 'lastUpdated': '2023-04-01T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '24.00000', 'unit': 'h', 'category': 'Rest', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 5884, 'lastUpdated': '2023-04-01T16:00:00.000Z' }], 'externalKey': 'Steps', 'name': 'Steps', 'value': 5884, 'lastUpdated': '2023-04-01T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '50000.00000', 'unit': 'count', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 2.9, 'lastUpdated': '2021-12-01T04:00:00.000Z' }], 'externalKey': 'WaterIntake', 'name': 'Water Intake', 'value': 2.9, 'lastUpdated': '2021-12-01T04:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '8.00000', 'unit': 'L', 'category': 'Nourish', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }] }, { 'myClient': false, 'name': 'Gabriella Johnson', 'nickname': 'Gabi', 'userCognitoId': '755414d4-7ee5-44d5-8eb4-406c3b0a826e', 'genderCode': 'F', 'lastUpdated': '2022-12-12T11:35:27.000Z', 'healthMarkers': [{ 'latestHealthMarkerValues': [{ 'value': 61, 'lastUpdated': '2022-12-12T11:35:27.000Z' }], 'externalKey': 'Bodyweight', 'name': 'Weight', 'value': 61, 'lastUpdated': '2022-12-12T11:35:27.000Z', 'rangeMin': '10.00000', 'rangeMax': '350.00000', 'unit': 'kg', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 2815, 'lastUpdated': '2022-11-27T00:00:00.000Z' }], 'externalKey': 'CaloriesIn', 'name': 'kCal In', 'value': 2815, 'lastUpdated': '2022-11-27T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 2308, 'lastUpdated': '2022-11-27T00:00:00.000Z' }], 'externalKey': 'CaloriesOut', 'name': 'kCal Out', 'value': 2308, 'lastUpdated': '2022-11-27T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 7.614, 'lastUpdated': '2022-11-27T00:00:00.000Z' }], 'externalKey': 'SleepHours', 'name': 'Sleep', 'value': 7.614, 'lastUpdated': '2022-11-27T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '24.00000', 'unit': 'h', 'category': 'Rest', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 9486, 'lastUpdated': '2022-11-27T00:00:00.000Z' }], 'externalKey': 'Steps', 'name': 'Steps', 'value': 9486, 'lastUpdated': '2022-11-27T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '50000.00000', 'unit': 'count', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 3.511, 'lastUpdated': '2022-11-27T00:00:00.000Z' }], 'externalKey': 'WaterIntake', 'name': 'Water Intake', 'value': 3.511, 'lastUpdated': '2022-11-27T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '8.00000', 'unit': 'L', 'category': 'Nourish', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }] }, { 'myClient': false, 'name': 'Andrew theGoodwin stage ', 'nickname': 'Andrew', 'userCognitoId': '7ab5d812-df2a-4a2c-b965-e5d9721e8a78', 'genderCode': 'M', 'lastUpdated': '2023-03-24T16:00:00.000Z', 'healthMarkers': [{ 'latestHealthMarkerValues': [{ 'value': 45.09306, 'lastUpdated': '2022-04-25T07:00:00.000Z' }], 'externalKey': 'BodyFat', 'name': 'Body Fat', 'value': 45.09306, 'lastUpdated': '2022-04-25T07:00:00.000Z', 'rangeMin': '3.00000', 'rangeMax': '75.00000', 'unit': '%', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 82, 'lastUpdated': '2023-02-21T02:52:05.000Z' }], 'externalKey': 'Bodyweight', 'name': 'Weight', 'value': 82, 'lastUpdated': '2023-02-21T02:52:05.000Z', 'rangeMin': '10.00000', 'rangeMax': '350.00000', 'unit': 'kg', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 3350, 'lastUpdated': '2023-02-23T16:00:00.000Z' }], 'externalKey': 'CaloriesIn', 'name': 'kCal In', 'value': 3350, 'lastUpdated': '2023-02-23T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 565, 'lastUpdated': '2022-06-28T00:00:00.000Z' }], 'externalKey': 'CaloriesOut', 'name': 'kCal Out', 'value': 565, 'lastUpdated': '2022-06-28T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 604, 'lastUpdated': '2023-03-24T16:00:00.000Z' }], 'externalKey': 'Steps', 'name': 'Steps', 'value': 604, 'lastUpdated': '2023-03-24T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '50000.00000', 'unit': 'count', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 0.0012, 'lastUpdated': '2022-04-26T00:00:00.000Z' }], 'externalKey': 'WaterIntake', 'name': 'Water Intake', 'value': 0.0012, 'lastUpdated': '2022-04-26T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '8.00000', 'unit': 'L', 'category': 'Nourish', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }] }, { 'myClient': false, 'name': 'Andrew Goodwin', 'nickname': 'The Good Wi2', 'userCognitoId': 'b32b39a1-c70d-4aed-b7bf-915580682f28', 'genderCode': 'F', 'lastUpdated': '2023-04-01T16:00:00.000Z', 'healthMarkers': [{ 'latestHealthMarkerValues': [{ 'value': 17, 'lastUpdated': '2021-12-06T19:54:01.000Z' }], 'externalKey': 'BodyFat', 'name': 'Body Fat', 'value': 17, 'lastUpdated': '2021-12-06T19:54:01.000Z', 'rangeMin': '3.00000', 'rangeMax': '75.00000', 'unit': '%', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 75, 'lastUpdated': '2023-03-14T04:03:55.000Z' }], 'externalKey': 'Bodyweight', 'name': 'Weight', 'value': 75, 'lastUpdated': '2023-03-14T04:03:55.000Z', 'rangeMin': '10.00000', 'rangeMax': '350.00000', 'unit': 'kg', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 3000, 'lastUpdated': '2022-04-15T04:00:00.000Z' }], 'externalKey': 'CaloriesIn', 'name': 'kCal In', 'value': 3000, 'lastUpdated': '2022-04-15T04:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 3, 'lastUpdated': '2022-08-12T00:00:00.000Z' }], 'externalKey': 'CaloriesOut', 'name': 'kCal Out', 'value': 3, 'lastUpdated': '2022-08-12T00:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '5000.00000', 'unit': 'kCal', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 2831, 'lastUpdated': '2023-04-01T16:00:00.000Z' }], 'externalKey': 'Steps', 'name': 'Steps', 'value': 2831, 'lastUpdated': '2023-04-01T16:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '50000.00000', 'unit': 'count', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 5, 'lastUpdated': '2022-04-15T04:00:00.000Z' }], 'externalKey': 'WaterIntake', 'name': 'Water Intake', 'value': 5, 'lastUpdated': '2022-04-15T04:00:00.000Z', 'rangeMin': '0.00000', 'rangeMax': '8.00000', 'unit': 'L', 'category': 'Nourish', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }] }, { 'myClient': true, 'name': 'Test account', 'nickname': 'test@kalibra.ai', 'userCognitoId': '42e762f6-db66-4c47-b169-24f59d1ceaec', 'genderCode': 'M', 'lastUpdated': '2023-04-03T08:45:49.000Z', 'healthMarkers': [{ 'latestHealthMarkerValues': [{ 'value': 42.341339111328125, 'lastUpdated': '2023-02-28T11:21:46.000Z' }], 'externalKey': 'BodyFat', 'name': 'Body Fat', 'value': 42.341339111328125, 'lastUpdated': '2023-02-28T11:21:46.000Z', 'rangeMin': '3.00000', 'rangeMax': '75.00000', 'unit': '%', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }, { 'latestHealthMarkerValues': [{ 'value': 80, 'lastUpdated': '2023-04-03T08:45:49.000Z' }], 'externalKey': 'Bodyweight', 'name': 'Weight', 'value': 80, 'lastUpdated': '2023-04-03T08:45:49.000Z', 'rangeMin': '10.00000', 'rangeMax': '350.00000', 'unit': 'kg', 'category': 'Move', 'info': '', 'infoWhat': '', 'infoHow': '', 'infoWhy': '', 'goal': null }] }];

    const handleOnMaterialAutoSelect = (searchString) => {
        if (searchString) {
            if (tabValue === 'AllClients') {
                if (allUserList?.length > 0 && searchString) {
                    const result = allUserList.filter((obj) => obj?.name?.toString().toLowerCase() === searchString.toLowerCase());
                    if (result.length > 0) {
                        setFilterAllUserList(() => {
                            return [...result];
                        });
                    }
                }
            } else {
                if (topUserList?.length > 0 && searchString) {
                    const result = topUserList.filter((obj) => obj?.name?.toString().toLowerCase() === searchString.toLowerCase());
                    if (result.length > 0) {
                        setFilterTopUserList(() => {
                            return [...result];
                        });
                    }
                }
            }
        } else {
            if (tabValue === 'AllClients') {
                setFilterAllUserList(allUserList);
            } else {
                setFilterTopUserList(topUserList);
            }
        }

    };

    const getAllUserList = async () => {
        setAllUserList(user);
        setFilterAllUserList(user);
        const materialAutoCompleteUser: any[] = [];
        for (let i = 0; i < user.length; i++) {
            if (user[i]?.name) {
                // autoCompleteUser.push({ id: i, name: res[i]?.name });
                materialAutoCompleteUser.push(user[i]?.name);
            }
        }
        setMaterialAutoCompleteOptions(materialAutoCompleteUser);
    };



    const getTopUserList = async () => {
        setTopUserList(user);
        setFilterTopUserList(user);
        const materialAutoCompleteUser: any[] = [];
        for (let i = 0; i < user.length; i++) {
            if (user[i]?.name) {
                // autoCompleteUser.push({ id: i, name: res[i]?.name });
                materialAutoCompleteUser.push(user[i]?.name);
            }
        }
        setMaterialAutoCompleteOptions(materialAutoCompleteUser);
    };

    const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setValue(null);
        setInputValue('');
        setTabValue(newTabValue);
        if (newTabValue === 'AllClients') {
            getAllUserList();
        } else {
            getTopUserList();
        }
        // used to change the state of selected tab
        navigate(location.pathname, {
            replace: true,
            state: {
                type: newTabValue,
            },
        });

    };

    useEffect(() => {
        const states: any = location?.state;
        setAllUserList([]);
        setFilterAllUserList([]);
        setTopUserList([]);
        setFilterTopUserList([]);
        if (states?.type === 'TopClients') {
            setTabValue('TopClients');
            getTopUserList();

        } else {
            setTabValue('AllClients');
            getAllUserList();
        }
        //eslint-disable-next-line
    }, [location?.state, tenantKey]);


    function dynamicSort(property, type, objKey?) {
        return function (a, b) {
            let result;
            let firstValue;
            let secValue;

            if (!objKey) {
                firstValue = a[property];
                secValue = b[property];
            } else {
                const objA = a.healthMarkers.find((o) => o.externalKey === objKey);
                firstValue = objA ? objA.value : '';
                const objB = b.healthMarkers.find((o) => o.externalKey === objKey);
                secValue = objB ? objB.value : '';
            }

            if (type === 'asc') {
                result = firstValue < secValue ? -1 : firstValue > secValue ? 1 : 0;
            } else {
                result = firstValue > secValue ? -1 : firstValue < secValue ? 1 : 0;
            }
            return result;
        };
    }

    const sort = (property: string, type: string, objKey?: string) => {
        const users = allUserList.sort(dynamicSort(property, type, objKey));
        setFilterAllUserList(() => {
            return [...users];
        });
    };

    const topSort = (property: string, type: string, objKey?: string) => {
        const users = topUserList.sort(dynamicSort(property, type, objKey));
        setFilterTopUserList(() => {
            return [...users];
        });
    };

    const goToIntelligenceDashboard = () => {
        navigate(`/${route.INTELLIGENCECUSTOMISEDASHBOARD}`);
    };

    return (
        <React.Fragment>
            <Box className={classes.page_Content}>
                <TabContext value={tabValue}>
                    <Box className={classes.dv_clientsFilterSection}>
                        <Box className={classes.dvcfs_left}>
                            <Typography className={classes.dvcfs_clients}>Intelligence</Typography>

                            <TabList
                                onChange={handleTabsChange}
                                aria-label="lab API tabs example"
                                variant="fullWidth"
                                classes={{
                                    indicator: classes.tabIndicator
                                }}
                                sx={{ alignItems: 'center' }}
                            >
                                <span style={{ opacity: '.3', paddingRight: '15px' }} />
                                <Tab value={'AllClients'} label={'All Clients'} sx={tabStyles} />{' '}
                                <span style={{ opacity: '.3', paddingRight: '5px' }}>|</span>
                                <Tab value={'TopClients'} label={'Top Clients'} sx={tabStyles} />
                            </TabList>
                        </Box>
                        <Box className={classes.dvcfs_right}>
                            <Box className={classes.dvfsr_fieldBox}>
                                <Box className={classes.dvfsr_searchField}>
                                    <Autocomplete
                                        noOptionsText={'No matches'}
                                        id="client"
                                        value={value}
                                        onChange={(event: any, newValue: string | null) => {
                                            handleOnMaterialAutoSelect(newValue);
                                            setValue(newValue);
                                        }}
                                        inputValue={inputValue}
                                        onInputChange={(event, newInputValue) => {
                                            setInputValue(newInputValue);
                                        }}
                                        options={materialAutoCompleteOptions}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Search for a client"
                                                fullWidth
                                                InputProps={{
                                                    ...params.InputProps,
                                                    sx: {
                                                        fontFamily: 'Poppins',
                                                        fontSize: 16,
                                                        fontWeight: 400
                                                    },
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <img src={SearchImgIcon} alt="" />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        )}
                                    />
                                </Box>
                            </Box>
                            <MUIButton onclickHandler={goToIntelligenceDashboard} buttonText={'Intelligence Dashboard'} />
                        </Box>
                    </Box>
                    <TabPanel value={'AllClients'}>
                        <IntelligenceClientLists
                            userList={FilterAllUserList}
                            sortHandler={sort}

                        />
                    </TabPanel>

                    <TabPanel value={'TopClients'}>
                        <IntelligenceClientLists
                            userList={filterTopUserList}
                            sortHandler={topSort}

                        />
                    </TabPanel>

                </TabContext>
            </Box>
        </React.Fragment>

    );
};

export default IntelligenceScreen;