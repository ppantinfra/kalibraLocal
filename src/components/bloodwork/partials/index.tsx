import React from 'react';
import { Box, Checkbox, Chip, Typography } from '@mui/material';
import { Stack } from '@mui/system'; //bgcolor
import { AppColor, FontFamily, FontColor } from '../../../core';
import infoIcon from '../../../assets/images/bloodwork/info-icon.png';
import expandIcon from '../../../assets/images/bloodwork/expand-icon.svg';
import SmallCurverdLineChart from '../../charts/line/SmallCurverdLineChart';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

import { useBloodworkStyles } from '../BloodworkStyles';
// import { ColorHelper } from '../../../core/helper/ColorHelper';
import ScoreLineChart from './lineChart';
import { ColorHelper } from '../../../core/helper/ColorHelper';
// import { CommonContext, CommonContextType } from '../../../core/context';

export const BottomChip = ({ label, color, bgColor }) => {
  return (
    <Box
      style={{
        //border: `2px solid ${color}`,
        fontSize: 10,
        color: color,
        backgroundColor: bgColor,
        borderRadius: 12,
        padding: '4px 8px',
        fontWeight: '400',
        fontFamily: 'Poppins',
        margin: 2
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
        const scoreColor = item.score > 0.995
          ? AppColor.scoreSuccess600
          : item.score > 0.799
            ? AppColor.scoreSuccess600
            : item.score > .504
              ? AppColor.scoreWarning600
              : AppColor.scoreDanger700;
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
    const bgColor = item.score > 0.995
      ? AppColor.scoreSuccess100
      : item.score > 0.799
        ? AppColor.scoreSuccess100
        : item.score > .504
          ? AppColor.scoreWarning100
          : AppColor.scoreDanger100;

    const nameColor = item.score > 0.995
      ? AppColor.scoreSuccess700
      : item.score > 0.799
        ? AppColor.scoreSuccess700
        : item.score > .504
          ? AppColor.scoreWarning700
          : AppColor.scoreDanger700;

    return <BottomChip key={item.key} label={item.name} color={nameColor} bgColor={bgColor} />;
  });
};

export const BloodWorkReportBox = ({ title, scores, group, onClick }) => {
  // const { demoMode } = React.useContext(CommonContext) as CommonContextType;
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
  const groupScoreText = ColorHelper.getGroupScoreText(group.score);
  // groupScore > 89.9
  //   ? 'Excellent'
  //   : groupScore > 79.9
  //     ? 'Looking Good'
  //     : groupScore > 50.4
  //       ? 'Needs Attention'
  //       : 'Needs Attention';


  return (
    <Stack
      boxShadow={'2px'}

      sx={{
        backgroundColor: 'white',
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
          padding: 1.5,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >

        <Stack width={20} />
        <Typography
          width={136}
          height={42}
          fontFamily={'Poppins'}
          fontSize={16}
          fontWeight="600"
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          {title}
        </Typography>
        <img width={20} height={20} src={expandIcon} alt={''} style={{ marginRight: 0, marginBottom: 44 }} />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 1,
          height: '85%'
        }}
      >
        <Box height={58} width={120}>
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
            fontSize={48}
            fontWeight="700"
            color={groupScoreColor}
            sx={{ textAlign: 'center' }}
          >
            {pointChartData[pointChartData.length - 1]}

          </Typography>
          <Typography style={{ marginTop: '34px', marginLeft: '6px' }} >/5</Typography>
        </Box>
        <Stack
          width={'80%'}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
          direction={'row'}
          flexWrap={'wrap'}
        >
          {renderBoxItem(group)}
        </Stack>
      </Stack>
      <Stack
        height={32}
        sx={{
          display: 'flex',
          backgroundColor: groupScoreColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Typography fontFamily={'Poppins'} fontSize={14} fontWeight="600" color={'white'}>
          {groupScoreText}
        </Typography>
      </Stack>

    </Stack >
  );
};

export const CriticalAreas = ({ title, label }) => {
  return (
    <Stack direction={'row'} sx={{ marginTop: 1, alignItems: 'center' }}>
      <Typography fontFamily={'Poppins'} fontSize={14} fontWeight="500">
        {title}
      </Typography>
      <img width={12} height={12} src={infoIcon} alt={''} style={{ marginRight: 8, marginLeft: 12 }} />
      <BottomChip label={label} color={AppColor.scoreDanger600} bgColor={AppColor.scoreDanger100} />
    </Stack>
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
  diet: any;
  summery?: any;
  coconutOil?: any;
  vegetableOil?: any;
  steps?: any;
  meditation?: any;
  supplements?: any;
  chartData?: any;
};

export const BloodWorkDetailedReportBox = ({
  title,
  data,
  diet,
  summery,
  coconutOil,
  vegetableOil,
  steps,
  meditation,
  supplements,
  chartData
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
            <Typography fontFamily={'Poppins'} fontSize={11} sx={{ marginLeft: 2 }}>
              &#8226;
            </Typography>
            <Typography fontFamily={'Poppins'} fontSize={11} sx={{ marginLeft: 1 }}>
              {item}
            </Typography>
          </Stack>
        );
      })}
      {diet ? (
        <>
          <Typography fontFamily={'Poppins'} fontSize={11} sx={{ marginLeft: 2, marginRight: 1 }}>
            {summery}
          </Typography>
          <Stack direction={'row'} marginTop={5} marginBottom={2} justifyContent={'center'}>
            <Stack alignItems={'center'}>
              <Typography
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
                width={100}
              >
                {' '}
                {steps ? 'Steps per day' : ' Animal Fats & Coconut Oil'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: steps ? '#10DDEB' : '#EA7068'
                  })}
                  value={steps ? steps : coconutOil}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    {steps ? steps : coconutOil}%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
            <Stack alignItems={'center'} marginLeft={4}>
              <Typography
                width={100}
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
              >
                {' '}
                {meditation ? 'Meditation' : 'Polyunsaturated Vegetable Oils'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: meditation ? '#9F5EF2' : '#EA7068'
                  })}
                  value={meditation ? meditation : vegetableOil}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    {meditation ? meditation : vegetableOil}%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
          </Stack>
        </>
      ) : null}
      {supplements ? (
        <>
          <Stack direction={'row'} justifyContent={'center'}>
            <Stack alignItems={'center'}>
              <Typography
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
                width={100}
              >
                {' '}
                {'Vitamin A'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: steps ? '#10DDEB' : '#EA7068'
                  })}
                  value={87.8}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    {87.8}%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
            <Stack alignItems={'center'} marginLeft={4}>
              <Typography
                width={100}
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
              >
                {' '}
                {'Vitamin D3'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: meditation ? '#9F5EF2' : '#EA7068'
                  })}
                  value={100}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    100%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
          </Stack>

          <Stack direction={'row'} marginTop={2} marginBottom={2} justifyContent={'center'}>
            <Stack alignItems={'center'}>
              <Typography
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
                width={100}
              >
                {' '}
                {'Vitamin K2'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: steps ? '#10DDEB' : '#EA7068'
                  })}
                  value={15.9}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    15.9%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
            <Stack alignItems={'center'} marginLeft={4}>
              <Typography
                width={100}
                fontFamily={'Poppins'}
                fontSize={9}
                fontWeight={'bold'}
                sx={{ textAlign: 'center', marginBottom: 1 }}
              >
                {'Magnesium'}
              </Typography>
              <Box sx={{ height: 80, width: 80 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  backgroundPadding={18}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: meditation ? '#9F5EF2' : '#EA7068'
                  })}
                  value={75.1}
                >
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold">
                    75.1%
                  </Typography>
                </CircularProgressbarWithChildren>
              </Box>
            </Stack>
          </Stack>
        </>
      ) : null}

      {chartData && (
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
      )}
    </Stack>
  );
};
