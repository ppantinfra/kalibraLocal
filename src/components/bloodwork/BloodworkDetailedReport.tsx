import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { BloodWorkDetailedReportBox, BloodWorkDetailedReportScoreBox, ReportTabsList } from './partials';
import Grid from '@mui/material/Grid';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useBloodworkStyles } from '.';
type IProps = {
  bloodworkReportTitle: any;
  bloodworkReportGroup: any;
  bloodworkMeasuredDate: Date;
};

const BloodworkDetailedreport = ({ bloodworkReportGroup }: IProps) => {
  const classes = useBloodworkStyles();
  const [tabValue, setTabValue] = React.useState(bloodworkReportGroup.data[0].name);
  const [, setUserid] = useState('');
  const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };

  const data = bloodworkReportGroup.data.find(item => item.name === tabValue);

  return (
    <Box className={classes.pageContent}>
      <Stack
        direction={'row'}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
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
                <BloodWorkDetailedReportScoreBox
                  title={'Score'}
                  data={data}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'What You Should Know'}
                  data={[
                    'Higher cholesterol levels mean better cognitive function',
                    'It also means better glucose and fat metabolism as well as inflammation',
                    'It is the key to cell membrane integrity, brain and nervous system function, hormone and Vitamin D synthesis.',
                    'It provides the building block for every steroid hormone, including vitamin D, adrenal and sex hormones.'
                  ]}
                />
              </Grid>
              <Grid item md={4} xs={6}>
                <BloodWorkDetailedReportBox
                  title={'What You Can Do'}
                  data={[
                    'Aim for a level of 220 mg/dL',
                    'Focus on a nutrient dense diet with plenty of healthy animal fats',
                    'Minimise stress, immune system triggers from allergens, inflammatory foods like sugars, startches and polyunsaturated vegetable oils',
                    'Levels below optimal should prompt an evaluation of nutrition status, neurological and mood impacts.'
                  ]}
                />
              </Grid>

            </Grid>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default BloodworkDetailedreport;
