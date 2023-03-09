import React from 'react';
import Box from '@mui/material/Box';
import { GenomicStyles } from './GenomicStyles';
import { TilesView } from '../tiles';
import MTHFRImg from '../../assets/images/genomics/pf-17b36f2d--MTHFR.webp';
import COMTfastImg from '../../assets/images/genomics/pf-b36f2db9--COMTfast.webp';
import COMTslowImg from '../../assets/images/genomics/pf-6f2db951--COMTslow.webp';
import DAOImg from '../../assets/images/genomics/pf-2db951de--DAO.webp';
import MAOAfastImg from '../../assets/images/genomics/pf-b951deef--MAOAfast.webp';
import MAOAslowImg from '../../assets/images/genomics/pf-51deefbe--MAOAslow.webp';
import GSTGPXImg from '../../assets/images/genomics/pf-deefbebd--GSTGPX.webp';
import NOS3Img from '../../assets/images/genomics/pf-efbebdb1--NOS3.webp';
import PEMTImg from '../../assets/images/genomics/pf-bebdb1a2--PEMT.webp';
import { HorizontalProgressBarChart } from '../charts';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// type IClientDashboardProps = {
//   tabValue?: string;
// };

const Genomic = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = GenomicStyles();

  const genomicsData = [
    {
      title: 'MTHFR',
      source: MTHFRImg,
      description: 'Methylation Master',
      expressionBarChartData: [
        {
          label: 'Methylation Master',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 2,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'COMT Fast',
      source: COMTfastImg,
      description: 'Mellowness & Calm',
      expressionBarChartData: [
        {
          label: 'Mellowness & Calm',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'COMT Slow',
      source: COMTslowImg,
      description: 'Focus & Buoyancy',
      expressionBarChartData: [
        {
          label: 'Focus & Buoyancy',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 2,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'DAO',
      source: DAOImg,
      description: 'Oversensitivity to Foods',
      expressionBarChartData: [
        {
          label: 'Oversensitivity to Foods',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 4,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'MAOA Fast',
      source: MAOAfastImg,
      description: 'Mood Swings & Carb Cravings',
      expressionBarChartData: [
        {
          label: 'Mood Swings & Carb Cravings',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'MAOA Slow',
      source: MAOAslowImg,
      description: 'Irritability & Sleep Woes',
      expressionBarChartData: [
        {
          label: 'Irritability & Sleep Woes',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'GST/GPX',
      source: GSTGPXImg,
      description: 'Detox Dilemmas',
      expressionBarChartData: [
        {
          label: 'Detox Dilemmas',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 2,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'NOS3',
      source: NOS3Img,
      description: 'Heart & Blood Flow MAOA Slow Irritability & Sleep Woes',
      expressionBarChartData: [
        {
          label: 'Heart & Blood Flow MAOA Slow Irritability & Sleep Woes',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
    {
      title: 'PEMT',
      source: PEMTImg,
      description: 'Cell Membranes & Liver',
      expressionBarChartData: [
        {
          label: 'Cell Membranes & Liver',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: '1-2',
              color: '#DCFBED',
            },
            {
              maxValue: 3,
              minValue: 2,
              range: 3 - 2,
              label: '2-3',
              color: '#BEF4E0',
            },
            {
              maxValue: 4,
              minValue: 3,
              range: 4 - 3,
              label: '3-4',
              color: '#90F3D9',
            },
            {
              maxValue: 5,
              minValue: 4,
              range: 5 - 4,
              label: '4-5',
              color: '#46D7CB',
            },
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 4,
          unit: 'scale',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped',
          },
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <Box className={classes._container}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          columns={12}
          mt={1}
          className={matches ? 'gridbelow700_tiles_responsive' : ''}
        >
          {genomicsData.map((data: any, index: any) => (
            <Grid item lg={4} md={6} xs={6} key={index}>
              <TilesView title={data.title} inMainPage={true}>
                <Box className="tiles_custom_scrollbar genomic_tiles_scrollbar" title="Scroll down">
                  <Box>
                    <Box className={classes.genomics_img_box}>
                      <img src={data.source} alt={data.title} />
                    </Box>
                    <Box className={classes.genomics_img_footer}>
                      <Typography className={classes.genomics_img_heading}>
                        {data.title}
                      </Typography>
                    </Box>
                    <Box>
                      <HorizontalProgressBarChart
                        progressBarData={data.expressionBarChartData}
                        isFakeData={true}
                      />
                    </Box>
                  </Box>
                </Box>
              </TilesView>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Genomic;
