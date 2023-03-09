import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BiomeStyles } from './BiomeStyles';
import { TilesView } from '../tiles';
import { HorizontalProgressBarChart, ScoreDriversProgressBarView } from '../charts';
import biomeMap from '../../assets/images/genomics/biome.png';
import liverHealthIcon from '../../assets/images/biome/liverHealth.svg';
import metabolicHealthIcon from '../../assets/images/biome/metabolicHealth.svg';
import gutHealthIcon from '../../assets/images/biome/gutHealth.svg';
import foodMetabolismIcon from '../../assets/images/biome/foodMetabolism.svg';
import HeartHealthIcon from '../../assets/images/biome/heartHealth.svg';
import muscleRepairIcon from '../../assets/images/biome/muscleRepair.svg';
import oxidativeStressIcon from '../../assets/images/biome/oxidativeStress.svg';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// type BiomeProps = {
//   userId?: string;
// };

const Biome = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));
  const classes = BiomeStyles();
  // const scoreChartData = {
  //   labels: [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ],
  //   label: 'Score',
  //   data: [50, 40, 50, 40, 55, 75, 70, 65, 60, 50, 70, 100],
  // };

  const overallBiomeReportData = [
    {
      label: 'Pathogenic potential',
      visualParts: [
        {
          maxValue: 2,
          minValue: 1,
          range: 2 - 1,
          label: 'Poor',
          color: '#FA668A'
        },
        {
          maxValue: 4,
          minValue: 2,
          range: 4 - 2,
          label: 'Good',
          color: '#F99444'
        },
        {
          maxValue: 5,
          minValue: 5,
          range: 5 - 4,
          label: 'Great',
          color: '#36BB9D'
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 4,
      point: 3,
      unit: 'point',
      data: {
        graphType: 'HorizontalStackedBarChartUngrouped'
      }
    },
    {
      label: 'Biofilm Formation',
      visualParts: [
        {
          maxValue: 2,
          minValue: 1,
          range: 2 - 1,
          label: 'Poor',
          color: '#FA668A'
        },
        {
          maxValue: 4,
          minValue: 2,
          range: 4 - 2,
          label: 'Good',
          color: '#F99444'
        },
        {
          maxValue: 5,
          minValue: 5,
          range: 5 - 4,
          label: 'Great',
          color: '#36BB9D'
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 4,
      point: 4,
      unit: 'point',
      data: {
        graphType: 'HorizontalStackedBarChartUngrouped'
      }
    },
    {
      label: 'Antibiotic resistance',
      visualParts: [
        {
          maxValue: 2,
          minValue: 1,
          range: 2 - 1,
          label: 'Poor',
          color: '#FA668A'
        },
        {
          maxValue: 4,
          minValue: 2,
          range: 4 - 2,
          label: 'Good',
          color: '#F99444'
        },
        {
          maxValue: 5,
          minValue: 5,
          range: 5 - 4,
          label: 'Great',
          color: '#36BB9D'
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 4,
      point: 2,
      unit: 'point',
      data: {
        graphType: 'HorizontalStackedBarChartUngrouped'
      }
    },
    {
      label: 'Microbiome diversity',
      visualParts: [
        {
          maxValue: 2,
          minValue: 1,
          range: 2 - 1,
          label: 'Poor',
          color: '#FA668A'
        },
        {
          maxValue: 4,
          minValue: 2,
          range: 4 - 2,
          label: 'Good',
          color: '#F99444'
        },
        {
          maxValue: 5,
          minValue: 5,
          range: 5 - 4,
          label: 'Great',
          color: '#36BB9D'
        }
      ],
      graphCategory: 'HorizontalStackedBarChartUngrouped',
      total: 4,
      point: 5,
      unit: 'point',
      data: {
        graphType: 'HorizontalStackedBarChartUngrouped'
      }
    }
  ];

  const foodMetabolismData = [
    {
      title: 'Food Metabolism',
      subTitle: 'Carbohydrates',
      source: foodMetabolismIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'Carbohydrates',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups associated with carbohydrate breakdown levels was found to be slightly high. This is not a cause for concern as this means your body is efficient at digesting carbohydrates, and you are able to harvest more energy from carbohydrates. This is good!'
      // description:
      //   'One of the elements that keeps the gut microbiome in check is bile acid. The bile acid pool refers to the amount of bile acid in your body. Mainly produced in the liver, bile acid serves many functions in the body. Among these, it serves important functions such as fat digestion and regulation of the gut microbiome to prevent an overgrowth of bacteria. In turn, the gut bacteria contribute to the formation of bile acid pools.',
    },
    {
      title: 'Metabolic Health',
      subTitle: 'Proteins',
      source: foodMetabolismIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'Proteins',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups associated with protein breakdown levels was found to be slightly high. This is not a cause for concern as this means your body is efficient at digesting proteins, and you are able to harvest more energy from proteins. This is good!'
      // description:
      //   'Elevated levels of Imidazole Propionate are known to disrupt glucose metabolism. Research has shown that elevated levels of serum Imidazole Propionate were present in subjects with diabetes and pre-diabetes.',
    },
    {
      title: 'Food Metabolism',
      subTitle: 'Fats',
      source: foodMetabolismIcon,
      result: 'Great',
      color: '#36BB9D',
      statusBarChartData: [
        {
          label: 'Fats',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 4.5,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups associated with fat breakdown levels was found to be in the optimum range. This means that your body is efficient at digesting fats, and you are able to harvest more energy from fats. This is great!'
      // description:
      //   'Elevated levels of Imidazole Propionate are known to disrupt glucose metabolism. Research has shown that elevated levels of serum Imidazole Propionate were present in subjects with diabetes and pre-diabetes.',
    }
  ];
  const gutHealthData = [
    {
      title: 'Gut Health',
      subTitle: 'Cysteine & Derivatives ',
      source: gutHealthIcon,
      result: 'Great',
      color: '#36BB9D',
      statusBarChartData: [
        {
          label: 'Cysteine & Derivatives',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 4,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups responsible for cysteine production was found to be high. This means that you are producing plenty of cysteine to keep your gut lining healthy. This is great!'
      // description:
      //   'One of the elements that keeps the gut microbiome in check is bile acid. The bile acid pool refers to the amount of bile acid in your body. Mainly produced in the liver, bile acid serves many functions in the body. Among these, it serves important functions such as fat digestion and regulation of the gut microbiome to prevent an overgrowth of bacteria. In turn, the gut bacteria contribute to the formation of bile acid pools.',
    },
    {
      title: 'Gut Health',
      subTitle: 'Indole & Indole Derivatives',
      source: gutHealthIcon,
      result: 'Poor',
      color: '#FA668A',
      statusBarChartData: [
        {
          label: 'Indole & Indole Derivatives',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 2,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups responsible for indole production was found to be low. This means that your gut microbiome may not be producing enough indole on its own to maintain your gut lining. This can be improved!'
      // description:
      //   'Elevated levels of Imidazole Propionate are known to disrupt glucose metabolism. Research has shown that elevated levels of serum Imidazole Propionate were present in subjects with diabetes and pre-diabetes.',
    }
  ];
  const liveHealthData = [
    {
      title: 'Heart Health',
      subTitle: 'TMAO',
      source: HeartHealthIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'TMAO',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Trimethylamine N-oxide (TMAO): Your results indicate that the concentration of bacterial groups associated with your TMAO production processes was found to be average. This means that your gut microbiome is producing an average amount of TMAO or TMA. This is good but can be improved further!',
      description:
        'Trimethylamine N-oxides, also known as TMAO, is a biomolecule produced during digestion that has been strongly associated with an increased risk of heart disease, stroke, and other cardiovascular diseases. TMAO is formed in the liver from a building block known as Trimethylamine, or TMA. TMA is produced by certain strains of bacteria in your gut during digestion. The more of those bacteria you have, the greater the amount of TMA and TMAO you can expect to find in your body.'
    },
    {
      title: 'Liver Health',
      subTitle: 'Bile Acid Pool ',
      source: liverHealthIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'Bile Acid Pool',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups responsible for contributing to the bile acid pool was found to be low. This indicates that your bile acid pool size might be reduced, this could contribute to overgrowth of bacteria. This can be improved!',
      description:
        'One of the elements that keeps the gut microbiome in check is bile acid. The bile acid pool refers to the amount of bile acid in your body. Mainly produced in the liver, bile acid serves many functions in the body. Among these, it serves important functions such as fat digestion and regulation of the gut microbiome to prevent an overgrowth of bacteria. In turn, the gut bacteria contribute to the formation of bile acid pools.'
    },
    {
      title: 'Metabolic Health',
      subTitle: 'Imidazole Propionate',
      source: metabolicHealthIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'Bile Acid Pool',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups associated with your Imidazole Propionate production processes was found to be high. This means that your gut microbiome may be producing a larger amount of Imidazole Propionate, which may be affecting your metabolic health. This can be improved!',
      description:
        'Elevated levels of Imidazole Propionate are known to disrupt glucose metabolism. Research has shown that elevated levels of serum Imidazole Propionate were present in subjects with diabetes and pre-diabetes.'
    },
    {
      title: 'Muscle Repair',
      subTitle: 'Branched Chain Amino Acids',
      source: muscleRepairIcon,
      result: 'Good',
      color: '#F99444',
      statusBarChartData: [
        {
          label: 'Branched Chain Amino Acids',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 3,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups associated with BCAA availability was found to be above average. This means that your gut microbiome may be producing a sufficient amount of BCAAs, helping you to build and repair muscles faster, along with regulating glucose levels in blood. This is good!',
      description:
        'Branched-chain amino acids (BCAAs) stimulate the building of protein in muscle and possibly reduce muscle breakdown. BCAAs in certain quantities also regulate glucose levels in blood. The levels of BCAAs in the body is mediated largely by the gut microbiome.'
    },
    {
      title: 'Oxidative Stress',
      subTitle: 'Oxidative Stress',
      source: oxidativeStressIcon,
      result: 'Great',
      color: '#36BB9D',
      statusBarChartData: [
        {
          label: 'Oxidative Stress',
          visualParts: [
            {
              maxValue: 2,
              minValue: 1,
              range: 2 - 1,
              label: 'Poor',
              color: '#FA668A'
            },
            {
              maxValue: 4,
              minValue: 2,
              range: 4 - 2,
              label: 'Good',
              color: '#F99444'
            },
            {
              maxValue: 5,
              minValue: 5,
              range: 5 - 4,
              label: 'Great',
              color: '#36BB9D'
            }
          ],
          graphCategory: 'HorizontalStackedBarChartUngrouped',
          total: 4,
          point: 4.5,
          unit: 'point',
          data: {
            graphType: 'HorizontalStackedBarChartUngrouped'
          }
        }
      ],
      restultDescription:
        'Your results indicate that the concentration of bacterial groups involved in producing reactive oxygen species (ROS) was found to be in the optimum range. This means that your gut microbiome is not producing a significant amount of ROS, and oxidative stress is low. This is great!',
      description:
        'Oxidative stress is described as the imbalance between the availability of reactive oxygen species (ROS) and the body’s ability to detoxify these ROS. While a baseline level of ROS is required for cellular functioning, an imbalance or detoxification lag can cause tissue damage. In the long run, oxidative stress has been linked with cancer, neurodegenerative disorders, and a host of other diseases'
    }
  ];
  const biomeDriversDummyData = [
    { progressLabel: 'Brain', done: '65' },
    { progressLabel: 'Heart', done: '60' },
    { progressLabel: 'Gut', done: '70' },
    { progressLabel: 'Liver', done: '30' },
    { progressLabel: 'Muscle repair', done: '50' },
    { progressLabel: 'Oxidative stress', done: '35' },
    { progressLabel: 'Metabolism', done: '80' },
    { progressLabel: 'Energy', done: '40' },
    { progressLabel: 'Vitamin B', done: '55' }
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
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Overall biome report" inMainPage={true}>
              <Box className="tiles_custom_scrollbar biome_tiles_scrollbar" title="Scroll down">
                <HorizontalProgressBarChart progressBarData={overallBiomeReportData} isFakeData={true} />
              </Box>
            </TilesView>
          </Grid>
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Biome drivers" inMainPage={true}>
              {/* <ProgressChartSection title='Biome drivers' /> */}
              <ScoreDriversProgressBarView category="7" data={biomeDriversDummyData} />
            </TilesView>
          </Grid>
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Biome map" inMainPage={true}>
              <Box className={classes.biomeImgBox}>
                <img src={biomeMap} alt="biomeMap" />
              </Box>
            </TilesView>
          </Grid>
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Food Metabolism" inMainPage={true}>
              <Box className="tiles_custom_scrollbar biome_tiles_scrollbar" title="Scroll down">
                <Box className={classes.bhTitleBox}>
                  <Box className={classes.bhImgIconBox}>
                    <img src={foodMetabolismIcon} alt="liverHealth" />
                  </Box>
                  <Typography className={classes.bhTitle}>Food Metabolism</Typography>
                </Box>
                {foodMetabolismData.map((FM: any, index: any) => (
                  <Box className={classes.biomeHealthBox} key={index} sx={{ mb: 2 }}>
                    <Box>
                      <HorizontalProgressBarChart progressBarData={FM.statusBarChartData} isFakeData={true} />
                    </Box>
                    <Box>
                      <Typography className={classes.bhResult}>
                        Your result: <span style={{ background: FM.color }}>{FM.result}</span>
                      </Typography>
                      <Box>
                        <Typography className={classes.bhResultDesciption}>{FM.restultDescription}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </TilesView>
          </Grid>
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Gut Health" inMainPage={true}>
              <Box className="tiles_custom_scrollbar biome_tiles_scrollbar" title="Scroll down">
                <Box className={classes.bhTitleBox}>
                  <Box className={classes.bhImgIconBox}>
                    <img src={gutHealthIcon} alt="liverHealth" />
                  </Box>
                  <Typography className={classes.bhTitle}>Gut Health</Typography>
                </Box>
                {gutHealthData.map((FM: any, index: any) => (
                  <Box className={classes.biomeHealthBox} key={index} sx={{ mb: 2 }}>
                    <Box>
                      <HorizontalProgressBarChart progressBarData={FM.statusBarChartData} isFakeData={true} />
                    </Box>
                    <Box>
                      <Typography className={classes.bhResult}>
                        Your result: <span style={{ background: FM.color }}>{FM.result}</span>
                      </Typography>
                      <Box>
                        <Typography className={classes.bhResultDesciption}>{FM.restultDescription}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </TilesView>
          </Grid>
          <Grid item lg={4} md={6} xs={6}>
            <TilesView title="Live Health" inMainPage={true}>
              <Box className="tiles_custom_scrollbar biome_tiles_scrollbar" title="Scroll down">
                {liveHealthData.map((FM: any, index: any) => (
                  <Box className={classes.biomeHealthBox} key={index} sx={{ mb: 2 }}>
                    <Box className={classes.bhTitleBox}>
                      <Box className={classes.bhImgIconBox}>
                        <img src={FM.source} alt="liverHealth" />
                      </Box>
                      <Typography className={classes.bhTitle}>{FM.title}</Typography>
                    </Box>
                    <Box>
                      <HorizontalProgressBarChart progressBarData={FM.statusBarChartData} isFakeData={true} />
                    </Box>
                    <Box>
                      <Typography className={classes.bhResult}>
                        Your result: <span style={{ background: FM.color }}>{FM.result}</span>
                      </Typography>
                      <Box>
                        <Typography className={classes.bhResultDesciption}>{FM.restultDescription}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography className={classes.bhDesciption}>{FM.description}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </TilesView>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Biome;
