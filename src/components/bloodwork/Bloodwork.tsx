import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkStyles } from './BloodworkStyles';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import BloodWork from '../../assets/images/bloodwork/blood-tube.svg';
import UploadIcon2 from '../../assets/images/bloodwork/upload-icon.svg';
import UploadGreyIcon from '../../assets/images/bloodwork/upload-icon-grey.svg';
import { CriticalAreas, RecomemdationAreas, BloodWorkReportBox, BloodWorkActionBox } from './partials';
import analysisIcon from '../../assets/images/bloodwork/analysis-icon.png';
import actionIcon from '../../assets/images/bloodwork/action-icon.png';
import { UserService, DefaulPrimarytColor } from '../../core';
import hamburgerIcon from '../../assets/images/bloodwork/hamburger-icon.png';
import SideDrawer from './partials/side-drawer';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import BackendApi from '../../api/shared/BackendApi';
import { InputLabel, MenuItem, Select, SelectChangeEvent, Switch } from '@mui/material';
import moment from 'moment';
import { MUIButton } from '../common';
import useMediaQuery from '@mui/material/useMediaQuery';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ButtonWithIcon from '../common/ButtonWithIcon';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useLocation } from 'react-router-dom';
import { CommonContext, CommonContextType } from '../../core/context';


const CriticalAreaData = [{
  title: 'Testosterone',
  description: 'Testosterone helps to build and retain muscle, improve strength, and increase the body’s capacity to use oxygen during exercise.',
  isLow: true
},
{
  title: 'Anti-Tg',
  description: 'Elevated thyroglobulin antibody levels are associated with thyroid dysfunction. Thyroid hormones regulate brain function, body temperature, energy production, and metabolism.',
  isLow: false
},
{
  title: 'Ferritin',
  description: 'Serum ferritin is a sensitive indicator of iron status in the case of deficiency or overload. Ferritin is also an acute-phase protein, rising in response to disease, and potentially masking iron-deficiency.',
  isLow: true
}];

const RecomemdationAreaData = [{
  title: 'Testosterone',
  description: 'Maintain total testosterone at around 1 ng/mL. Low testosterone is strongly associated with cognitive and neurological decline, obesity, metabolic syndrome, type 2 diabetes, and cardiovascular disease.'
},
{
  title: 'Anti-Tg',
  description: 'Anti-Tg should be as low as possible, ideally not detectable. The metabolic rate of every cell is controlled by thyroid hormones. There can be no optimal health without optimal thyroid function.'
},
{
  title: 'Ferritin',
  description: 'The functional range is around 100 ng/mL. Correcting iron levels should also correct ferritin levels. Optimal iron status is necessary for energy, strong muscles, clear thinking, and good immune function.'
}];

const defaultActionDataData = [{
  title: 'Include sea vegetables',
  label: 'essential',
  description: 'Have nori, wakame, and dulse',
  pillar: 'Nourish',
  id: '1',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Focus on a nutrient dense diet',
  label: 'essential',
  description: 'To optimise hormone levels, eat plenty of healthy animal fats and green vegetables. Minimise immune system triggers from allergens, and inflammatory foods like sugars, grains, and polyunsaturated vegetable oils to minimise inflammation.',
  pillar: 'Nourish',
  id: '2',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Restrict net carbohydrates to less than 50 g/day',
  label: 'important',
  description: 'Focus on healthy fats and proteins, grass fed animal products, and fresh vegetables, especially leafy greens.',
  pillar: 'Nourish',
  id: '3',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Include chlorophyll-rich foods',
  label: 'important',
  description: 'Have dark leafy greens and 100 g of beef or chicken liver twice per week.',
  pillar: 'Nourish',
  id: '4',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Minimise intake of fructose and alcohol',
  label: 'helpful',
  description: 'To support liver function, minimise intake of fructose and alcohol.',
  pillar: 'Nourish',
  id: '5',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Have more bitter greens like dandelion and radicchio',
  label: 'helpful',
  description: 'Ensure daily intake of liver cleansing, sulfur-rich cruciferous vegetables like broccoli, kale, and cabbage.',
  pillar: 'Nourish',
  id: '6',
  category: 'Diet',
  isChecked: false,
},
{
  title: 'Iodoral (12.5 mg)',
  label: 'essential',
  description: 'Supports healthy thyroid function and regulation. Essential to provide the the building blocks for thyroid hormone, which helps regulate body temperature, metabolic rate, and brain function. Take with or without food, during the first half of the day.',
  pillar: 'Nourish',
  id: '12',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'DHEA micronised (25.0 mg)',
  label: 'essential',
  description: 'Precursor to sex hormones in both men and women. Adapts its function depending on a person’s needs. Take on empty stomach in the morning.',
  pillar: 'Nourish',
  id: '23',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'Turmeric curcumin (500.0 mg)',
  label: 'important',
  description: 'Powerful natural anti-inflammatory and antioxidant. Take with midday meal.',
  pillar: 'Nourish',
  id: '34',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'Cinnamon (1.0 tsp)',
  label: 'important',
  description: 'Improves insulin sensitivity, lowers glucose and lipids, reduces inflammation and glycation, and improves antioxidant activity. Take with food or drink.',
  pillar: 'Nourish',
  id: '45',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'Complete Amino Acids (4.0 g)',
  label: 'helpful',
  description: 'Provide all essential amino acids in a form that is absorbed directly without relying on digestive processes. Take on empty stomach in the morning.',
  pillar: 'Nourish',
  id: '56',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'Methyl Guard (3.0 mg)',
  label: 'helpful',
  description: 'Supports methylation for healthy heart, blood vessels, brain, and bones. Support homocysteine metabolism and breakdown. Take with midday meal.',
  pillar: 'Nourish',
  id: '67',
  category: 'Supplements',
  isChecked: false,
},
{
  title: 'Donate blood',
  label: 'essential',
  description: 'Donate blood to lower iron stores. High intensity endurance exercise can also help lower iron levels.',
  pillar: 'Nourish',
  id: '11',
  category: 'Lifestyle',
  isChecked: false
},
{
  title: 'Engage in resistance training twice a week',
  label: 'essential',
  description: 'Support optimal hormonal balance with regular exercise and specifically resistance training with whole-body exercises like squats and deadlifts. Workout 2-3 times per week. Avoid hormone disruptors the most of which come from plastics in contact with foods and drinks.',
  pillar: 'Move',
  id: '22',
  category: 'Lifestyle',
  isChecked: false,
},
{
  title: 'Walk at least 30 minutes/day',
  label: 'important',
  description: 'Moderate exercise regularly. Do resistance training 2 times/week. Do not exercise excessively.',
  pillar: 'Move',
  id: '33',
  category: 'Lifestyle',
  isChecked: false,
},
{
  title: 'Practice Intermittent fasting',
  label: 'important',
  description: 'Intermittent fasting is excellent to promote insulin sensitivity, metabolic flexibility, cleansing, and healing. Aim for at least 16 hours, and no food for at least 4 hours before bed.',
  pillar: 'Move',
  id: '44',
  category: 'Lifestyle',
  isChecked: false,
},
{
  title: 'Optimise cholesterol with regular exercise',
  label: 'helpful',
  description: 'Practice both cardiovascular and resistance training, each two times/week.',
  pillar: 'Move',
  id: '55',
  category: 'Lifestyle',
  isChecked: false,
},
{
  title: 'Promote restful sleep',
  label: 'helpful',
  description: 'Promote restful sleep with a regular schedule and consistently sleeping 8 hours per night.',
  pillar: 'Rest',
  id: '66',
  category: 'Lifestyle',
  isChecked: false,
}
];

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
  const location = useLocation();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  const showLeftArea = demoMode;
  const [showDrawer, setShowDrawer] = useState(false);
  const [showActionDetail, setShowActionDetail] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [actions, setActions] = useState(defaultActionDataData);
  const [isAnalysis, setIsAnalysis] = useState(true);
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
              group.data.sort((a, b) => b.score - a.score);
              for (const data of group.data) {
                if (data?.graphType !== 'None' && data?.categories.length > 0 && data?.graphCategory.length > 0) {
                  showGroupAcordion = true;
                }
              }
              if (showGroupAcordion) {
                accordionGroupsWithData.push(group);
              }
            }
            accordionGroupsWithData.sort((a, b) => b.score - a.score);

            setIsShared(false);
            setActions(defaultActionDataData);
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
          const states: any = location?.state;

          setAssessmentList(assessments);
          if (selectedAsssessment === undefined) {
            if (states && states?.bloodworkId) {
              const assesment = assessments.find(item => item.id === states?.bloodworkId);
              if (assesment) {
                setSelectedAssessment(assesment);
                return;
              }
            }
          }
          setSelectedAssessment(assessments[0]);

        }
      });
    }
  };

  React.useEffect(() => {
    if (clientId) {
      getAssessmentList(clientId);
    }
    // eslint-disable-next-line
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
        <Grid item lg={3} md={showLeftArea === true ? 4.5 : 6} xs={showLeftArea === true ? 9 : 6} key={group.groupKey} style={{ alignItems: 'stretch' }}>
          <BloodWorkReportBox
            title={group.groupName}
            scores={groupScores}
            group={group}
            onClick={toggleDrawer(true, group.groupName, group)}
          />
        </Grid>
      );
    });
  };

  const handleActionChange = (id: string, isChecked: boolean) => {

    const newActions = [...actions];
    const index = newActions.findIndex(item => item.id === id);
    if (index >= 0) {
      newActions[index].isChecked = isChecked;
    }
    setActions(newActions);
  };

  const renderAction = (isTopAction) => {
    const categories = ['Diet', 'Supplements', 'Lifestyle'];
    return categories.map(category => {
      let actionData: Array<any> = actions.filter(item => item.category === category);

      if (actionData === undefined || actionData.length == 0) {
        return <></>;
      }

      actionData = actionData.filter(item => {
        if (isTopAction === true && item.label === 'essential') {
          return true;
        } else if (isTopAction === false && item.label !== 'essential') {
          return true;
        }
        return false;
      });

      return (
        <Grid item key={category} lg={3} md={showLeftArea === true ? 4.5 : 6} xs={showLeftArea === true ? 9 : 6} style={{ alignItems: 'stretch' }}>
          <BloodWorkActionBox
            category={category}
            actions={actionData}
            showActionDetail={showActionDetail}
            isShared={isShared}
            handleActionChange={handleActionChange}
          />
        </Grid>
      );
    });
  };


  const renderLeftArea = () => {
    if (isAnalysis === true) {
      return CriticalAreaData.map(item => {
        return <CriticalAreas key={item.title} title={item.title} description={item.description} isLow={item.isLow} />;
      });
    } else {
      return RecomemdationAreaData.map(item => {
        return <RecomemdationAreas key={item.title} title={item.title} description={item.description} />;
      });
    }
  };

  const selectTab = (tabTitle) => {
    setIsAnalysis(tabTitle === 'ANALYSIS');
  };

  const handleDropdown = (event: SelectChangeEvent) => {
    setSelectedAssessment(event.target.value);
  };

  if (assessmentList === undefined) {
    return <></>;
  }

  let oldFormatDate = '';
  let duplicatedTimes = 1;
  const canShare = actions.find(item => item.isChecked === true) !== undefined;

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
          bloodworkId={selectedAsssessment.id}
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
                {showLeftArea === true && <ButtonWithIcon title='ANALYSIS' isSelected={isAnalysis} clickHandler={() => selectTab('ANALYSIS')} icon={analysisIcon} />}
                {showLeftArea === true && <ButtonWithIcon title='ACTIONS' isSelected={!isAnalysis} clickHandler={() => selectTab('ACTIONS')} icon={actionIcon} />}
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
                {isAnalysis === true ?
                  <>
                    {assessmentData && (
                      <Button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          textTransform: 'none'
                        }}
                        onClick={() => resultSummaryClickHandler({ assessment: assessmentData, bloodworkId: selectedAsssessment.id })}
                      >
                        <img width={14} height={14} src={hamburgerIcon} alt={''} />
                        <Typography
                          fontFamily={'Poppins'}
                          fontSize={14}
                          fontWeight={'400'}
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
                    )}
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
                  </>
                  :
                  <>
                    <Box className='toggleClient' >
                      <InputLabel
                        htmlFor="switch-label"
                        style={{ color: '#33B7B8', fontSize: '14px', fontWeight: '400', fontFamily: 'Poppins', marginTop: '-1px' }}
                      >
                        {showActionDetail === false ? 'Show Detail' : 'Hide Detail'}
                      </InputLabel>
                      <Switch
                        checked={showActionDetail}
                        onChange={() => {
                          setShowActionDetail(!showActionDetail);
                        }}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    </Box>
                    {isShared === false &&
                      <MUIButton
                        buttonColor={'#fff'}
                        buttonBackground={DefaulPrimarytColor.primary500green}
                        onclickHandler={() => { setIsShared(true); }}
                        buttonText={'Share'}
                        disabled={!canShare}
                      />
                    }
                  </>
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
                {showLeftArea === true && (
                  <Grid item md={3} xs={6} className={'gridItem_bloodwork_responsive'}>
                    <Typography
                      fontFamily={'Poppins'}
                      fontSize={14}
                      fontWeight={'400'}
                      sx={{ marginBottom: '14px' }}
                    >
                      {isAnalysis === true ?
                        'TOP 3 MARKETS OF INTEREST'
                        :
                        'TOP RECOMEDATIONS'
                      }
                    </Typography>
                    <Stack>
                      {renderLeftArea()}
                    </Stack>
                  </Grid>
                )}
                <Grid
                  item
                  md={showLeftArea === true ? 9 : 12}
                  xs={showLeftArea == true ? 6 : 12}
                  className={'gridItem_bloodwork_responsive'}
                >
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                    <Typography
                      fontFamily={'Poppins'}
                      fontSize={14}
                      fontWeight={'400'}
                      sx={{ marginBottom: '18px' }}
                    >
                      {isAnalysis === true ?
                        'FUNTIONAL AREAS'
                        :
                        'TOP ACTIONS'
                      }
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-start' }}>
                      {isAnalysis === true && showLeftArea === true &&
                        <>
                          {/* <InfoOutlinedIcon
                            style={{ width: '20px', height: '20px', marginRight: '8px', cursor: 'pointer' }}
                            onClick={() => {
                              // setOpenMediaModal(true);
                            }}
                          />
                          <Typography
                            fontFamily={'Poppins'}
                            fontSize={12}
                            fontWeight={'500'}
                          >
                            About this Report
                        </Typography> */}
                        </>
                      }
                    </Box>

                  </Box>
                  <form method="post" noValidate>
                    <Grid
                      container
                      columns={showLeftArea === true ? 9 : 12}
                      columnSpacing={{ xs: 3, md: 3 }}
                      rowSpacing={{ xs: 4, md: 4 }}
                      sx={{
                        marginLeft: showLeftArea === true ? '30px' : '0px'
                      }}
                      className={match700 ? 'gridbelow700_tiles_responsive' : ''}
                    >
                      {isAnalysis === true ?
                        renderGroup()
                        :
                        renderAction(true)

                      }
                    </Grid>
                    {isAnalysis === false &&
                      <Typography
                        fontFamily={'Poppins'}
                        fontSize={14}
                        fontWeight={'400'}
                        style={{ marginTop: '32px', marginBottom: '16px' }}
                      >
                        ADDITIONAL ACTIONS
                      </Typography>
                    }
                    {isAnalysis === false &&
                      < Grid
                        container
                        columns={12}
                        columnSpacing={{ xs: 3, md: 3 }}
                        rowSpacing={{ xs: 4, md: 4 }}
                        sx={{
                          marginLeft: showLeftArea === true ? '30px' : '0px'
                        }}
                        className={match700 ? 'gridbelow700_tiles_responsive' : ''}
                      >
                        {renderAction(false)}
                      </Grid>
                    }
                  </form>
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
