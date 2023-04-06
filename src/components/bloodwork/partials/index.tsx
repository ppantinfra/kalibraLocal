import React from 'react';
import { Box, Checkbox, Chip, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dietIcon from '../../../assets/images/bloodwork/diet-icon.png';
import supplementIcon from '../../../assets/images/bloodwork/supplement-icon.png';
import lifestyleIcon from '../../../assets/images/bloodwork/lifestyle-icon.png';
import actionCircleIcon from '../../../assets/images/bloodwork/action-circle-icon.png';
import expandIcon from '../../../assets/images/bloodwork/expand-icon.svg';
import SmallCurverdLineChart from '../../charts/line/SmallCurverdLineChart';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { useBloodworkStyles } from '../BloodworkStyles';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PillarIcon from '../../common/PillarIcon';
import SpecialCircularProgressBar from '../../charts/progress/SpecialCircularProgressBar';
import { FlatHorizontalProgressBarChart } from '../../charts';

export const BottomChip = ({ label, color, bgColor }) => {
  return (
    <Box
      style={{
        fontSize: 10,
        color: color,
        backgroundColor: bgColor,
        borderRadius: 12,
        //padding: '4px 8px',
        fontWeight: '400',
        fontFamily: 'Poppins',
        margin: '4px 6px 4px 6px'
      }}
    >
      {label}
    </Box>
  );
};

export const ReportTabsList = ({ tabListItems, handleTabsChange }) => {
  const classes = useBloodworkStyles();
  return (
    <TabList
      onChange={handleTabsChange}
      textColor="secondary"
      TabIndicatorProps={{
        style: { background: 'transparent', transition: 'none' }
      }}
      variant="scrollable"
      aria-label="detailed-report tabs"
      className={`${classes.reportTabList} mui_reportTabList`}
    >
      {tabListItems.map((item: any, index: number) => {
        const scoreColor = ColorHelper.getGroupItemScoreColor(item.score);
        return (
          <Tab
            key={index}
            value={item.name}
            label={item.name}
            sx={{
              flexDirection: 'row',
              background: 'white',
              // pointerEvents: item.label !== 'Cholesterol' ? 'none' : 'visible',
              fontSize: 14,
              borderRadius: '8px',
              padding: '0px 8px',
              fontWeight: '600',
              fontFamily: 'Poppins',
              textTransform: 'capitalize',
              color: scoreColor,
              minHeight: '24px', height: '24px',
              border: `1px solid ${scoreColor}`,
              '&.Mui-selected': {
                color: '#fff',
                backgroundColor: `${scoreColor} !important`,
                border: 'none'
              },
              margin: '16px 4px'
            }}
            style={{ height: 20 }}
          />
        );
      }
      )}
    </TabList>
  );
};

const renderBoxItem = (group: any) => {
  return group.data.map((item) => {
    const nameColor = ColorHelper.getGroupItemScoreColor(item.score);
    return <BottomChip key={item.key} label={item.name} color={nameColor} bgColor={'transparent'} />;
  });
};

export const BloodWorkReportBox = ({ title, scores, group, onClick }) => {
  const pointLabels: Array<any> = [];
  let pointChartData: Array<any> = [];
  if (scores.length > 0) {
    scores.forEach((item) => {
      pointChartData.push(item.score);
      pointLabels.push(item.createdOn);
    });
    const length = pointChartData.length;
    for (let i = 0; i < 4 - length; i++) {
      pointChartData = [pointChartData[0]].concat(pointChartData);
    }
  }

  const groupScoreColor = ColorHelper.getGroupScoreColor(group.score);

  return (
    <Stack
      boxShadow={'2px'}
      sx={{
        backgroundColor: 'white',
        paddingBottom: '16px',
        borderRadius: '8px',
        '@media (max-width:1280px)': {
        },
        height: '100%',
        cursor: 'pointer',
        boxShadow: '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1);',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        }
      }}
      onClick={onClick}
    >
      <Stack
        direction={'row'}
        sx={{
          display: 'flex',
          paddingTop: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
          alignItems: 'self-start',
          justifyContent: 'space-between'
        }}
      >
        <Stack width={20} />
        <Typography
          fontFamily={'Poppins'}
          fontSize={16}
          fontWeight="600"
          sx={{ textAlign: 'center', margin: 'auto', minHeight: 38, }}
        >
          {title}
        </Typography>
        <img width={20} height={20} src={expandIcon} alt={''} style={{ marginTop: '0px' }} />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '16px',
          paddingRight: '16px',
          height: '85%'
        }}
      >
        <Box height={40} width={120} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <SmallCurverdLineChart
            lineChartTitle={'lineChartTitle'}
            lineChartColor={groupScoreColor}
            lineChartData={pointChartData}
            labels={pointLabels}
          />
        </Box>
        <Box style={{ display: 'flex' }}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={32}
            fontWeight="700"
            color={groupScoreColor}
            sx={{ textAlign: 'center' }}
          >
            {pointChartData[pointChartData.length - 1]}
          </Typography>
        </Box>
        <Stack
          sx={{ alignItems: 'center', justifyContent: 'center' }}
          direction={'row'}
          flexWrap={'wrap'}
        >
          {renderBoxItem(group)}
        </Stack>
      </Stack>
    </Stack >
  );
};

const renderActionRecomendationBoxItem = (actions: any, showActionDetail: boolean, isShared: boolean, handleActionChange: any) => {
  return actions.map((item, index) => {
    return (
      <Box key={item.id} sx={{ width: '100%' }} >
        <Stack direction={'row'} sx={{ padding: '16px 16px 0px 16px', alignItems: 'self-start' }}>

          <Box>
            {isShared === true ?
              <SpecialCircularProgressBar
                progressValue={100}
                width={76}
                strkWidth={10}
                borderColor={ColorHelper.getBarColor('teal', item.pillar)}
                scoreText=''
              />
              :
              <Checkbox
                sx={{
                  color: '#8F9BB3',
                  width: '20px',
                  height: '20px',
                  '&.Mui-checked': {
                    color: '#46D7CB'
                  },
                }}
                checked={item.isChecked}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleActionChange(item.id, event.target.checked);
                }}
              />
            }
          </Box>
          <Stack direction={'column'} sx={{ alignItems: 'self-start', marginLeft: '12px', marginTop: '-2px' }}>
            <Typography fontFamily={'Poppins'} fontSize={10} fontWeight="500" color='#8F9BB3'>
              {String(item.label).toUpperCase()}
            </Typography>
            <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="600" >
              {item.title}
            </Typography>
            {showActionDetail === true &&
              <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="400" style={{ marginTop: '2px' }} >
                {item.description}
              </Typography>
            }
            {showActionDetail === true &&
              <Box style={{ marginTop: '5px' }}>
                <PillarIcon pillarName={item.pillar} />
              </Box>
            }
          </Stack>
        </Stack>
        {index < actions.length - 1 &&
          < Divider sx={{ borderStyle: 'dashed', marginTop: '16px', borderColor: '#C5CEE0' }} />
        }
      </Box >
    );
  });
};

export const BloodWorkActionBox = ({ category, actions, showActionDetail, isShared, handleActionChange }) => {

  let icon: any = undefined;
  switch (category) {
    case 'Diet':
      icon = dietIcon;
      break;
    case 'Supplements':
      icon = supplementIcon;
      break;
    case 'Lifestyle':
      icon = lifestyleIcon;
      break;
    default:
      break;
  }

  return (
    <Stack
      boxShadow={'2px'}
      sx={{
        backgroundColor: 'white',
        paddingBottom: '16px',
        borderRadius: '8px',
        '@media (max-width:1280px)': {
        },
        height: '100%',
        boxShadow: '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1);',
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          display: 'flex',
          padding: '8px 16px 8px 16px',
          borderRadius: '8px 8px 0px 0px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#EDF1F7'
        }}
      >
        <img width={24} height={24} src={icon} alt={''} style={{}} />
        <Typography
          fontFamily={'Poppins'}
          fontSize={14}
          fontWeight="600"
          sx={{ textAlign: 'left', marginLeft: '10px' }}
        >
          {category}
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '85%'
        }}
      >
        <Stack
          sx={{ alignItems: 'center', justifyContent: 'center' }}
          direction={'row'}
          flexWrap={'wrap'}
        >
          {renderActionRecomendationBoxItem(actions, showActionDetail, isShared, handleActionChange)}
        </Stack>
      </Stack>
    </Stack >
  );
};


export const RecomemdationAreas = ({ title, description }) => {
  return (
    <Box
      sx={{
        marginBottom: 3,
        display: 'flex',
        borderRadius: '8px',
        minHeight: '80px',
        backgroundColor: 'white',
        boxShadow: '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1);'
      }}>
      <Box style={{ padding: '16px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img style={{ width: '32px', height: '32px', marginRight: '8px' }} src={actionCircleIcon} alt={''} />
          <Typography fontFamily={'Poppins'} fontSize={14} fontWeight="600">
            {title}
          </Typography>
        </Box>

        <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="400" style={{ marginTop: '4px' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export const CriticalAreas = ({ title, description, isLow }) => {
  return (
    <Box
      sx={{
        marginBottom: 3,
        display: 'flex',
        borderRadius: '8px',
        minHeight: '80px',
        backgroundColor: 'white',
        boxShadow: '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1);'
      }}>
      <Box style={{ height: '100% !important' }} sx={{ backgroundColor: '#FFF2F2', paddingLeft: '8px', paddingRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isLow == true ?
          <KeyboardArrowDownIcon fontSize={'large'} style={{ color: '#FF3D71' }} />
          :
          <KeyboardArrowUpIcon fontSize={'large'} style={{ color: '#FF3D71' }} />
        }
      </Box>
      <Box style={{ padding: '16px' }}>
        <Typography fontFamily={'Poppins'} fontSize={14} fontWeight="600">
          {title}
        </Typography>
        <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="400" style={{ marginTop: '4px' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export const Actions = ({ icon, title, bgColor, textColor }) => {
  return (
    <Stack>
      <Chip
        avatar={<img width={12} height={12} src={icon} alt={''} />}
        label={title}
        sx={{
          width: 120,
          backgroundColor: bgColor,
          color: textColor,
          paddingLeft: 1,
          marginTop: 2
        }}
      />
      <Stack direction={'row'} sx={{ marginTop: 1, alignItems: 'center' }}>
        <Checkbox
          defaultChecked
          sx={{
            color: '#8F9BB3',
            '&.Mui-checked': {
              color: '#46D7CB'
            }
          }}
        />
        <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="400">
          One/two-line recommendation to help correct one or many markers
        </Typography>
      </Stack>
      <Stack direction={'row'} sx={{ marginTop: 1, alignItems: 'center' }}>
        <Checkbox
          sx={{
            color: '#8F9BB3',
            '&.Mui-checked': {
              color: '#46D7CB'
            }
          }}
        />
        <Typography fontFamily={'Poppins'} fontSize={11} fontWeight="400">
          One/two-line recommendation to help correct one or many markers
        </Typography>
      </Stack>
    </Stack>
  );
};

type IBloodWorkDetailedReportBox = {
  title?: string;
  data: any;
};

export const BloodWorkDetailedReportBox = ({
  title,
  data,
}: IBloodWorkDetailedReportBox) => {
  const classes = useBloodworkStyles();
  return (
    <Stack className={classes.bloodworkDetailedReportBox}>
      <Stack direction={'row'} className={classes.bdreport_header}>
        <Typography className={classes.bdreport_title}>{title}</Typography>
      </Stack>
      {data?.map((item: any, index: number) => {
        return (
          <Stack direction={'row'} sx={{ marginBottom: 2 }} key={index}>
            <Typography fontFamily={'Poppins'} fontSize={11} fontWeight='400' sx={{ marginLeft: 2 }}>
              &#8226;
            </Typography>
            <Typography fontFamily={'Poppins'} fontSize={11} fontWeight='400' sx={{ marginLeft: 1 }}>
              {item}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export const BloodWorkDetailedReportScoreBox = ({
  title,
  data
}) => {
  const classes = useBloodworkStyles();
  const pointChartData: Array<any> = [data.score, data.score, data.score, data.score];
  const color = ColorHelper.getGroupItemScoreColor(data.score);
  return (
    <Stack className={classes.bloodworkDetailedReportBox}>
      <Stack direction={'row'} className={classes.bdreport_header}>
        <Typography className={classes.bdreport_title}>{title}</Typography>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '0px 40px 0px 40px' }}>
        <Box height={54} width={140} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <SmallCurverdLineChart
            lineChartTitle={'lineChartTitle'}
            lineChartColor={color}
            lineChartData={pointChartData}
            labels={['', '', '', '']}
          />
        </Box>

        <Box style={{ display: 'flex' }}>
          <Typography
            fontFamily={'Poppins'}
            fontSize={32}
            fontWeight="700"
            color={color}
            sx={{ textAlign: 'center' }}
          >
            {pointChartData[pointChartData.length - 1]}
          </Typography>
        </Box>

        <Typography sx={{ width: '100%', fontSize: '11px', fontWeight: '400', color: '#8F9BB3' }}>
          Results
      </Typography>

        <Box sx={{ width: '100%' }}>
          <FlatHorizontalProgressBarChart data={data} willHideTitle={true} popSize={15} />
        </Box>
      </Box>




      {/* {chartData && (
        <Box>
          <Box sx={{ display: 'flex', columnGap: '75px' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  color: '#8F9BB3',
                  fontFamily: FontFamily
                }}
              >
                Latest reading
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: FontColor,
                  fontFamily: FontFamily
                }}
              >
                110.21mg/dL
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  color: '#8F9BB3',
                  fontFamily: FontFamily
                }}
              >
                Target
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: FontColor,
                  fontFamily: FontFamily
                }}
              >
                220mg/dL
              </Typography>
            </Box>
          </Box>
          <ScoreLineChart chartData={chartData} />

          <Typography
            sx={{
              color: FontColor,
              fontSize: '11px',
              fontFamily: FontFamily,
              marginTop: '44.5px',
              textAlign: 'center'
            }}
          >
            <span>6 months</span>
            <span style={{ opacity: '.3' }}> | </span>
            <span style={{ color: '#46D7CB' }}>1 Year</span>
            <span style={{ opacity: '.3' }}> | </span> <span>3 Years</span>
          </Typography>
        </Box>
      )} */}
    </Stack >
  );
};

