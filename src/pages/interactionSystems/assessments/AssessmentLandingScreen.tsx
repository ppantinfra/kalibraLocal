import React, { useState, useEffect, useContext } from 'react';
import { useAssessmentStyles } from '../../../components/assessments';
import Box from '@mui/material/Box';
import { UserService } from '../../../core';
import Grid from '@mui/material/Grid';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { RoutesPath as route } from '../../../core/constants';
import { IndividualAssessments } from '.';
import { MUIButton } from '../../../components/common';
import { CommonContext, CommonContextType } from '../../../core/context';
import { useNavigate } from 'react-router-dom';
import { InputAdornment, TextField, IconButton } from '@mui/material';
import SearchImgIcon from '../../../assets/images/searchIcon.svg';
import { ActionDrawerEnum } from '../../../core/enums';
import DrawerActionSidebar from '../../../components/layouts/drawer/DrawerActionSidebar';
import ConductAssessmentIntro from '../../../components/assessments/ConductAssessmentIntro';
import CancelIcon from '@mui/icons-material/Cancel';
import BackendApi from '../../../api/shared/BackendApi';

const AssessmentLandingScreen = () => {
    const classes = useAssessmentStyles();
    const [assessmentList, setAssessmentList] = useState<any>('');
    const [filteredAssessmentList, setFilteredAssessmentList] = useState<any>([]);
    const [assessmentTypes, setAssessmentTypes] = useState<any>([]); //dropdown listing
    const { userId } = useContext(CommonContext) as CommonContextType;
    const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
    const navigate = useNavigate();
    const [openConductIntro, setOpenConductIntro] = React.useState<boolean>(false);
    const [value, setValue] = React.useState('');

    useEffect(() => {
        setSelectedUserId(userId);
    }, [userId]);

    const onUserSelect = (userid: any) => {
        setSelectedUserId(userid);
    };

    const getAssessmentList = async (id: string) => {
        await UserService.getUserAssessmentList(id).then((res) => {
            if (res.data) {
                setAssessmentList(res.data);
                setFilteredAssessmentList(res.data);
            }
        });
    };

    useEffect(() => {
        if (selectedUserId) {
            getAssessmentList(selectedUserId);
        }
    }, [selectedUserId]);

    const getAssessmentTypes = async () => {
        await UserService.getAssessmentList().then((assessmentResponse) => {
            if (assessmentResponse) {
                setAssessmentTypes(assessmentResponse.reportTypes);
            }
        });
    };

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
        const newAssessmentList = filteredAssessmentList.sort(dynamicSort(property, type, objKey));
        setFilteredAssessmentList(newAssessmentList);
    };

    useEffect(() => {
        getAssessmentTypes();
    }, []);

    const toggleRightDrawer = () => {
        setOpenConductIntro(false);
    };

    const handleStartAssessment = (assessmentType: any) => {
        setOpenConductIntro(false);
        navigate(`/${route.ASSESSMENT}/${route.NEWASSESSMENT}`, {
            state: {
                type: assessmentType,
            }
        });
    };

    const deleteAssessmentHandler = async (assessmentId: string) => {

        const response = await BackendApi.delete(`/pro/clean-user-assessment-data/${assessmentId}/${userId}`);
        if (response.status >= 200 && response.status <= 399) {
            const newAsessmentList = filteredAssessmentList.filter(item => item.id !== assessmentId);
            setFilteredAssessmentList(newAsessmentList);
        }
    };

    const searchAssessment = (text: string) => {
        const lowverCaseText = String(text).trim().toLowerCase();
        setValue(text);
        if (text.length == 0) {
            setFilteredAssessmentList(assessmentList);
            return;
        }
        const newAsessmentList = assessmentList.filter((item) => {
            if ((item.assessmentName && String(item.assessmentName).toLowerCase().includes(lowverCaseText)) ||
                (item.coachName && String(item.coachName).toLowerCase().includes(lowverCaseText))) {
                return true;
            }
            return false;
        });
        setFilteredAssessmentList(newAsessmentList);
    };

    return (
        <React.Fragment >

            <Box className={classes.pageContent}>
                {/* <Box className={classes.userDetailsBox}> */}
                <ClientSearch selectedUserId={selectedUserId} userSelectHandler={onUserSelect} />


                {/* </Box> */}

                {selectedUserId && (
                    <React.Fragment>
                        {/* <Box sx={{ mt: 1 }}>
                            <Typography paragraph className={classes.subHeading}>
                                {screenTitle.NewAssessmentPage}
                            </Typography>
                            <Typography className={classes.smText}>Select Assessment Type</Typography>
                        </Box> */}
                        <Box className={classes.assessmentSelectBox}>
                            <Box className={classes.assessmentSelector}>
                                {/* <Select
                                    onChange={handleSelectChange}
                                    value={selectedType || ''}
                                    displayEmpty
                                    className={`${classes.typeselect} typeSelect`}
                                    inputProps={{
                                        'aria-label': 'Without label',
                                        classes: {
                                            icon: classes.selectIcon,
                                            root: classes.selectRoot
                                        },
                                        name: 'selectedType'
                                    }}
                                    size={'small'}
                                >
                                    <MenuItem value="one" selected style={{ color: '' }}>
                                        Select Assessment Type
                                    </MenuItem>
                                    {assessmentList &&
                                        assessmentList.map((item: any, index: number) => (
                                            <MenuItem
                                                // value={item.name}
                                                key={index}
                                                data-name={item.name}
                                                value={JSON.stringify({
                                                    assessmentTypeKey: item.key,
                                                    assessmentTypeName: item.name
                                                })}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                                */}
                                <TextField
                                    // {...params}
                                    placeholder="Search for an assessment"
                                    // fullWidth
                                    sx={{
                                        width: '250px', height: '10px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '10px !important',
                                            backgroundColor: 'white',
                                            border: '0px solid #C5CEE0',
                                        }
                                    }}
                                    size="small"
                                    //variant="outlined"
                                    onChange={(e) => searchAssessment(e.target.value)}
                                    value={value}
                                    InputProps={{
                                        // ...params.InputProps,
                                        sx: {
                                            fontFamily: 'Poppins',
                                            fontSize: 16,
                                            fontWeight: 400,

                                        },
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <img src={SearchImgIcon} alt="" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: value && (
                                            <IconButton
                                                style={{ width: '14px', height: '14px', marginLeft: '30px' }}
                                                size="small"
                                                aria-label="toggle password visibility"
                                                onClick={() => searchAssessment('')}
                                            >

                                                <CancelIcon />
                                            </IconButton>
                                        ),
                                    }}
                                />
                                <MUIButton
                                    buttonColor={'#fff'}
                                    onclickHandler={() => { setOpenConductIntro(true); }}
                                    buttonText={<>Conduct Assessement</>}
                                    //disabled={!types ? true : false}
                                    width={'50px'}
                                />
                                {/* <Button
                    component="button"
                    className={`${classes.startAssBtn}`}
                    onClick={handleStartAssessment}
                    disabled={!types ? true : false}
                  >
                    Start assessment <ChevronRightIcon sx={{ ml: 1 }} />
                  </Button> */}
                                {/* </Box> */}
                                {/* </Grid> */}

                                {/* <Grid item xs={12} >
                    <Box className={classes.apg_contentBox}>
                      <Box sx={{ mt: 1 }}>
                        <Typography paragraph className={classes.apg_text}>
                          There are 5 steps to the kinetic assessment and you will
                          be guided through each step to accurately record your
                          clients’ data.
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <Typography paragraph className={classes.apg_SubText}>
                          Keep the following in mind while conducting the
                          assessment with your client:
                        </Typography>
                        <ul className={classes.apg_textList}>
                          <li>
                            <Typography
                              paragraph
                              className={classes.apg_textItem}
                            >
                              A piece of advice
                            </Typography>
                          </li>
                          <li>
                            {' '}
                            <Typography
                              paragraph
                              className={classes.apg_textItem}
                            >
                              Another piece of advice
                            </Typography>
                          </li>
                          <li>
                            {' '}
                            <Typography
                              paragraph
                              className={classes.apg_textItem}
                            >
                              Last little piece of advice
                            </Typography>
                          </li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid> */}
                                {/* </Grid> */}
                            </Box>
                        </Box>
                        {filteredAssessmentList && (
                            <React.Fragment>
                                <Box sx={{ mt: '24px' }}>
                                    {/* <Typography paragraph className={classes.subHeadingLOA}>
                                        View Assessments
                                    </Typography> */}
                                </Box>
                                <Box>
                                    <Grid item xs={12}>
                                        <IndividualAssessments
                                            assessmentList={filteredAssessmentList}
                                            sortHandler={sort}
                                            deleteAssessmentHandler={deleteAssessmentHandler}
                                        ></IndividualAssessments>
                                    </Grid>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </Box>
            <DrawerActionSidebar
                clientUsername={'dfdf'}
                open={openConductIntro}
                toggleDrawer={toggleRightDrawer}
                component={
                    <ConductAssessmentIntro assessmentTypes={assessmentTypes} handleStartAssessment={handleStartAssessment} />
                }
                drawerType={ActionDrawerEnum.ConductAssessment}
                anchor="right"
                width={380}
            />
        </React.Fragment >
    );
};

export default AssessmentLandingScreen;