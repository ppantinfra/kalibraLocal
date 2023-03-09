import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkStyles } from './BloodworkStyles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import BloodWork from '../../assets/images/bloodwork/blood-tube.svg';
import UploadIcon2 from '../../assets/images/bloodwork/upload-icon.svg';
import UploadGreyIcon from '../../assets/images/bloodwork/upload-icon-grey.svg';
import { CriticalAreas, BloodWorkReportBox, Actions } from './partials';
import nourishIcon from '../../assets/images/bloodwork/nourish-icon.png';
import moveIcon from '../../assets/images/bloodwork/move-icon.png';
import reflectIcon from '../../assets/images/bloodwork/reflect-icon.png';
import restIcon from '../../assets/images/bloodwork/rest-icon.png';
import { AppColor, UserService, DefaulPrimarytColor } from '../../core';
import hamburgerIcon from '../../assets/images/bloodwork/hamburger-icon.png';
import SideDrawer from './partials/side-drawer';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import BackendApi from '../../api/shared/BackendApi';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import moment from 'moment';
import { CommonContext, CommonContextType } from '../../core/context';
import { MUIButton } from '../common';
import useMediaQuery from '@mui/material/useMediaQuery';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type IProps = {
  tabValue?: string;
  clientId: string;
  uploadClickHandler: any;
  resultSummaryClickHandler: any;
  reviewPendingBloodworkHandler: any;
  reloadPendingBloodwork: boolean;
};
const Bloodwork = ({
  tabValue,
  clientId,
  uploadClickHandler,
  resultSummaryClickHandler,
  reviewPendingBloodworkHandler,
  reloadPendingBloodwork
}: IProps) => {
  const theme = useTheme();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  const [showDrawer, setShowDrawer] = useState(false);
  const [bloodworkReportTitle, setBloodworkReportTitle] = useState<any>();
  const [bloodworkReportGroup, setBloodworkReportGroup] = useState<any>();
  const [pendingDocId, setPendingDocId] = React.useState<string>('');
  const [pendingStatusId, setPendingStarusId] = React.useState(0);
  const [createdOn, setCreatedOn] = useState<any>(undefined);
  const [pages, setPages] = useState<any>([]);
  const [groups, setGroups] = useState<any>([]);
  const [assessmentData, setAssessmentData] = useState<any>();
  const [assessmentList, setAssessmentList] = React.useState<any[]>();
  const [selectedAsssessment, setSelectedAssessment] = React.useState<any>();
  const classes = useBloodworkStyles();
  console.debug(tabValue);
  const match700 = useMediaQuery(theme.breakpoints.down(700));

  const toggleDrawer = (value: boolean, type?: any, group?: any) => () => {
    setBloodworkReportTitle(type);
    setBloodworkReportGroup(group);
    setShowDrawer(value);
  };

  const getPendingBloodwork = React.useCallback(async () => {
    try {
      const response = await BackendApi.get(`/pro/health-markers/get-pending-bloodwork/${clientId}`);
      if (response.status >= 200 && response.status <= 399) {
        if (
          response.data !== undefined &&
          response.data.documentId != undefined &&
          response.data.documentId != 'No records found'
        ) {
          setCreatedOn(response.data.createdOn);
          setPages(response.data.pages);
          setPendingStarusId(response.data.statusId);
          setPendingDocId(response.data.documentId.length == 0 ? '' : response.data.documentId);
        } else {
          setPendingDocId('');
          setPendingStarusId(0);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, [clientId]);

  React.useEffect(() => {
    getPendingBloodwork();
  }, [getPendingBloodwork, reloadPendingBloodwork]);

  const clntId = clientId;
  const getAssessmentDetailsView = React.useCallback(async () => {
    if (selectedAsssessment) {
      await UserService.getAssessmentDetailsView(selectedAsssessment.id, String(clntId))
        .then((res: any) => {
          if (res) {
            setAssessmentData(res);
            const accordionGroupsWithData: any = [];
            //used for checking whether group have data then only accordion will show
            for (const group of res.groups) {
              let showGroupAcordion = false;
              for (const data of group.data) {
                if (data?.graphType !== 'None' && data?.categories.length > 0 && data?.graphCategory.length > 0) {
                  showGroupAcordion = true;
                }
              }
              if (showGroupAcordion) {
                accordionGroupsWithData.push(group);
              }
            }

            setGroups(accordionGroupsWithData);
          } else {
            console.error(res);
          }
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
    // eslint-disable-next-line
  }, [selectedAsssessment]);

  React.useEffect(() => {
    getAssessmentDetailsView();
  }, [getAssessmentDetailsView]);

  const getAssessmentList = async (id: string) => {
    if (id) {
      await UserService.getUserAssessmentList(id).then((res) => {
        if (res.data) {
          const assessments = res.data.filter((item) => item.assessmentType === 'FunctionalBiomarkersAssessment');
          setSelectedAssessment(assessments[0]);
          setAssessmentList(assessments);
        }
      });
    }
  };

  React.useEffect(() => {
    if (clientId) {
      getAssessmentList(clientId);
    }
  }, [clientId]);

  const renderGroup = () => {
    if (groups === undefined || groups.length == 0) {
      return <></>;
    }
    return groups.map((group) => {
      let groupScores = [];
      groupScores = group.groupScores.reduce((newArray, element) => {
        newArray.push(element);
        return newArray;
      }, []);

      groupScores = groupScores.reverse();
      return (
        <Grid item lg={3} md={demoMode === true ? 6 : 6} xs={demoMode === true ? 12 : 6} key={group.groupKey} style={{ alignItems: 'stretch' }}>
          <BloodWorkReportBox
            // bottomColor={'#DB2C66'}
            title={group.groupName}
            scores={groupScores}
            group={group}
            onClick={toggleDrawer(true, group.groupName, group)}
          />
        </Grid>
      );
    });
  };

  const handleDropdown = (event: SelectChangeEvent) => {
    setSelectedAssessment(event.target.value);
  };

  if (assessmentList === undefined) {
    return <></>;
  }

  let oldFormatDate = '';
  let duplicatedTimes = 1;

  return (
    <Box>
      {bloodworkReportGroup && assessmentData && (
        <SideDrawer
          open={showDrawer}
          toggleDrawer={toggleDrawer}
          anchor="right"
          bloodworkReportTitle={bloodworkReportTitle}
          bloodworkReportGroup={bloodworkReportGroup}
          bloodworkMeasuredDate={moment(assessmentData.measuredDate).toDate()}
        />
      )}
      {pendingDocId.length > 0 &&
        <>
          {pendingStatusId === 3 ?
            <Box
              className={classes.pendingDocMessageBox}
            >
              <CheckCircleOutlineIcon style={{ color: '#007D6C', width: '16px', height: '16px', marginRight: '8px' }} />
              <Typography className={classes.pendingDocMesssage}>
                The bloodwork you uploaded on {DateFormatterHelper.formatDateTime(createdOn)} has been processed. Please review to confirm submission.
          </Typography>
            </Box>
            :
            <Box
              className={classes.processedDocMessageBox}
            >
              <WarningAmberIcon style={{ color: '#B86E00', width: '16px', height: '16px', marginRight: '8px' }} />
              <Typography className={classes.processedDocMessage}>
                The bloodwork you uploaded on {DateFormatterHelper.formatDateTime(createdOn)} is being processed. We will inform you once it is ready for your review.
          </Typography>
            </Box>
          }
        </>
      }
      {
        clientId && (
          <>
            <Stack direction={'row'} className={classes.bloodwork_summary_headings}>
              <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '@media (max-width: 480px)': {
                    justifyContent: 'center',
                  }
                }}
              >
                {assessmentList && assessmentList.length > 0 && (
                  <Select
                    fullWidth
                    value={selectedAsssessment as any}
                    defaultValue={'30'}
                    onChange={(event) => handleDropdown(event)}
                    className={classes.selectBloodWorkField}
                    size="small"
                    MenuProps={{
                      sx: {
                        '&& .Mui-selected': {
                          backgroundColor: '#46D7CB !important',
                          borderRadius: '0px !important'
                        }
                      }
                    }}
                  >
                    {assessmentList?.map((assessment, index) => {
                      const newFormatDate = DateFormatterHelper.formatDate(assessment.measuredDate);
                      if (oldFormatDate === newFormatDate) {
                        duplicatedTimes = duplicatedTimes + 1;
                      } else {
                        duplicatedTimes = 1;
                      }
                      oldFormatDate = newFormatDate;
                      return (
                        <MenuItem key={index} value={assessment as any} style={{}} className={classes.menuItem}
                        >
                          {`${newFormatDate}`}{duplicatedTimes > 1 ? ` (${duplicatedTimes})` : ''}
                        </MenuItem>
                      );
                    })}
                  </Select>
                )}
              </Stack>
              <Stack
                direction={'row'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  //  padding: 1,
                  columnGap: '8px',
                  '@media (max-width: 1024px)': {
                    justifyContent: 'flex-start',
                  },
                  '@media (max-width: 480px)': {
                    justifyContent: 'center',
                  }
                }}
                className={classes.bs_buttonBox}
              >
                {assessmentData && (
                  <Button
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'none'
                    }}
                    onClick={() => resultSummaryClickHandler(assessmentData)}
                  >
                    <img width={14} height={14} src={hamburgerIcon} alt={''} />
                    <Typography
                      fontFamily={'Poppins'}
                      fontSize={14}
                      fontWeight={'500'}
                      sx={{ marginLeft: 1, marginRight: 4, color: '#46D7CB' }}
                    >
                      Results Summary
                  </Typography>
                  </Button>
                )}
                {pendingDocId.length > 0 && pendingStatusId == 3 && (
                  <MUIButton
                    buttonColor={'#fff'}
                    buttonBackground={DefaulPrimarytColor.primary500green}
                    onclickHandler={() => reviewPendingBloodworkHandler({ bloodworkId: pendingDocId, createdOn: createdOn, pages: pages })}
                    buttonText={'Review Bloodwork'}
                  />
                )
                }
                {(pendingDocId.length === 0 || pendingStatusId !== 3) &&
                  <MUIButton
                    buttonColor={'#fff'}
                    buttonBackground={DefaulPrimarytColor.primary500green}
                    onclickHandler={() => uploadClickHandler()}
                    buttonText={'Upload Bloodwork'}
                    buttonIcon={<img width={12} height={12} src={pendingStatusId !== 3 && pendingDocId.length > 0 ? `${UploadGreyIcon}?fit=crop` : `${UploadIcon2}?fit=crop`} alt={''} />}
                    disabled={pendingStatusId !== 3 && pendingDocId.length > 0}
                  />
                }
              </Stack>
            </Stack>

            {selectedAsssessment || pendingDocId.length > 0 ? (
              <Grid
                container
                columnSpacing={{ xs: 3, sm: 3, lg: 3, xl: 3 }}
                rowSpacing={1}
                className={'gridContainer_bloodwork_responsive'}
              >
                {demoMode === true && (
                  <Grid item md={3} xs={6} className={'gridItem_bloodwork_responsive'}>
                    <Stack boxShadow={2} sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1 }}>
                      <Stack
                        direction={'row'}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography fontFamily={'Poppins'} fontSize={16} fontWeight="bold">
                          Key Takeaways
                      </Typography>
                      </Stack>

                      <Stack>
                        <Typography marginTop={2} fontFamily={'Poppins'} fontSize={16} fontWeight="bold">
                          Critical areas
                      </Typography>
                      </Stack>
                      <CriticalAreas title={'Nervous System'} label={'Free T4'} />
                      <CriticalAreas title={'Hormonal Balance'} label={'Free T4'} />
                      <CriticalAreas title={'Immunity'} label={'Free T4'} />
                      <CriticalAreas title={'Energy & Metabolism'} label={'Free T4'} />

                      <Stack>
                        <Typography marginTop={2} fontFamily={'Poppins'} fontSize={16} fontWeight="bold">
                          Actions
                      </Typography>
                        <Actions icon={nourishIcon} title={'Nourish'} bgColor={'#FFD6D9'} textColor={AppColor.bsDanger} />
                        <Actions icon={moveIcon} title={'Move'} bgColor={'#C8F8F9'} textColor={'#0884A9'} />
                        <Actions icon={reflectIcon} title={'Reflect'} bgColor={'#E3BFFD'} textColor={'#5B2FAE'} />
                        <Actions icon={restIcon} title={'Rest'} bgColor={'#BFDBFE'} textColor={'#2F53B3'} />
                      </Stack>
                    </Stack>
                  </Grid>
                )}
                <Grid
                  item
                  md={demoMode === true ? 9 : 12}
                  xs={demoMode == true ? 6 : 12}
                  className={'gridItem_bloodwork_responsive'}
                >
                  <Grid
                    container
                    columns={12}
                    columnSpacing={{ xs: 3, md: 3 }}
                    rowSpacing={{ xs: 4, md: 4 }}
                    sx={{
                      marginLeft: demoMode === true ? '30px' : '0px'
                    }}
                    className={match700 ? 'gridbelow700_tiles_responsive' : ''}
                  >
                    {renderGroup()}
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Box
                component="span"
                sx={{
                  display: 'flex',
                  m: 'auto',
                  height: 400,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Stack spacing={2} alignItems="center" display={'flex'}>
                  <img width={80} height={80} src={`${BloodWork}?fit=crop`} alt={''} />
                  <Typography fontFamily={'Poppins'} fontSize={18} fontWeight="bold">
                    Start your Journey
                </Typography>
                  <Typography width={435} fontSize={16} align="center">
                    Your client does not have any bloodwork assessments yet. Upload bloodwork to begin.
                </Typography>
                  <Button
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                      // padding: 1,
                    }}
                  >
                    {/* <Typography>2022/11/11</Typography>
                  <img style={{ marginLeft: 18, marginRight: 8 }} width={12} height={12} src={leftIcon} alt={''} /> */}
                    <Typography
                      fontFamily={'Poppins'}
                      style={{ color: 'white', marginLeft: 8 }}
                      fontSize={12}
                      fontWeight="500"
                    >
                      Upload Bloodwork
                  </Typography>
                  </Button>
                </Stack>
              </Box>
            )}
          </>
        )
      }
    </Box >
  );
};

export default Bloodwork;
