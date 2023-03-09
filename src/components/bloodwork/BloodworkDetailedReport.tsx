import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { BloodWorkDetailedReportBox, ReportTabsList } from './partials';
import Grid from '@mui/material/Grid';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useBloodworkStyles } from '.';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import { AppColor } from '../../core';
type IProps = {
  bloodworkReportTitle: any;
  bloodworkReportGroup: any;
  bloodworkMeasuredDate: Date;
};

const BloodworkDetailedreport = ({ bloodworkReportTitle, bloodworkReportGroup, bloodworkMeasuredDate }: IProps) => {
  const classes = useBloodworkStyles();
  const [tabValue, setTabValue] = React.useState(bloodworkReportGroup.data[0].name);
  const [, setUserid] = useState('');
  const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  const scoreColor = bloodworkReportGroup.score > 0.995
    ? AppColor.scoreSuccess600
    : bloodworkReportGroup.score > 0.799
      ? AppColor.scoreSuccess600
      : bloodworkReportGroup.score > .504
        ? AppColor.scoreWarning600
        : AppColor.scoreDanger700;

  const historicalAnalysisChartData = {
    labels: ['Sep’21', 'Feb’22', 'Mar’22', 'Apr’22', 'May’22', 'Jun’22', 'Jul’22', 'Aug’22', 'Sep’22', 'Aug’22'],
    label: 'Historical Analysis',
    data: [3.1, 2.8, 3, 2.9, 3.2, 3.0, 3.5, 3.9, 2.9, 3.1]
  };

  return (
    <Box className={classes.pageContent}>
      <Stack
        direction={'row'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2
        }}
      >
        <Stack
          direction={'row'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1
          }}
        // onClick={() => navigate(-1)}
        >
          <Typography sx={{ fontWeight: '600', fontSize: 22 }}>{bloodworkReportTitle}</Typography>
          <Typography sx={{ marginLeft: 1, fontWeight: '600', fontSize: 22, color: scoreColor }}>{bloodworkReportGroup.score}</Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1
          }}
        >
          <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>{DateFormatterHelper.formatDate(bloodworkMeasuredDate)}</Typography>
        </Stack>
      </Stack>
      <TabContext value={tabValue}>
        <Box>
          <ReportTabsList tabListItems={bloodworkReportGroup.data} handleTabsChange={handleTabsChange} />

          <TabPanel value={tabValue}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={4}
              columns={12}
              className={'gridContainer_bloodworkDetailedTile_responsive'}
            >
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'Historical Analysis'}
                  data={null}
                  diet={undefined}
                  summery={undefined}
                  coconutOil={undefined}
                  vegetableOil={undefined}
                  steps={undefined}
                  meditation={undefined}
                  supplements={undefined}
                  chartData={historicalAnalysisChartData}
                />
                <></>
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'What it Means'}
                  data={[
                    'Higher cholesterol levels mean better cognitive function',
                    'It also means better glucose and fat metabolism as well as inflammation',
                    'It is the key to cell membrane integrity, brain and nervous system function, hormone and Vitamin D synthesis.',
                    'It provides the building block for every steroid hormone, including vitamin D, adrenal and sex hormones.'
                  ]}
                  diet={undefined}
                  summery={undefined}
                  coconutOil={'62.5%'}
                  vegetableOil={undefined}
                  steps={undefined}
                  meditation={undefined}
                  supplements={undefined}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'Actions'}
                  data={[
                    'Aim for a level of 220 mg/dL',
                    'Focus on a nutrient dense diet with plenty of healthy animal fats',
                    'Minimise stress, immune system triggers from allergens, inflammatory foods like sugars, startches and polyunsaturated vegetable oils',
                    'Levels below optimal should prompt an evaluation of nutrition status, neurological and mood impacts.'
                  ]}
                  diet={undefined}
                  summery={undefined}
                  coconutOil={undefined}
                  vegetableOil={28.4}
                  steps={undefined}
                  meditation={undefined}
                  supplements={undefined}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'Diet'}
                  diet={true}
                  data={undefined}
                  summery={
                    'Eat plenty of animal fats and coconut oil with your meals each day. Avoid polyunsaturated vegetable oils.'
                  }
                  coconutOil={62.5}
                  vegetableOil={28.4}
                  steps={undefined}
                  meditation={undefined}
                  supplements={undefined}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'Supplements'}
                  data={null}
                  diet={undefined}
                  summery={null}
                  coconutOil={undefined}
                  vegetableOil={undefined}
                  steps={undefined}
                  meditation={undefined}
                  supplements={true}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'Lifestyle'}
                  data={null}
                  diet={true}
                  summery={
                    'Include resistance training and long walks after lunch/dinner in your routine. Meditate daily to minimise stress.'
                  }
                  coconutOil={undefined}
                  vegetableOil={undefined}
                  steps={73.6}
                  meditation={48.7}
                  supplements={undefined}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={'Estradiol(M)'}>Estradiol(M)</TabPanel>
          <TabPanel value={'DHEA-S(M)'}>DHEA-S(M)</TabPanel>
          <TabPanel value={'Total T(M)'}>Total T(M)</TabPanel>
          <TabPanel value={'Trig/HDL'}>Trig/HDL</TabPanel>
          <TabPanel value={'Cholesterol/HDL'}>Cholesterol/HDL</TabPanel>
          <TabPanel value={'LDL'}>LDL</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default BloodworkDetailedreport;
