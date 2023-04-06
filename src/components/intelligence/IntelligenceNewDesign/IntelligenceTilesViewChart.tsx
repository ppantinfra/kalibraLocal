import React from 'react';
import Box from '@mui/material/Box';
import { Line, Radar, Scatter } from 'react-chartjs-2';
import { VictoryChart, VictoryCandlestick, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import { MenuItem, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { useIntelligenceModuleStyles } from './IntelligenceModuleStyle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


type Props = {
    title?: string;
    data: any;
    options: any;
    chartType: string;
};

const IntelligenceTilesViewChart = ({
    title,
    data,
    options,
    chartType
}: Props) => {
    const classes = useIntelligenceModuleStyles();
    const dropdownValues = ['Line', 'Radar', 'Scatter', 'Candle'];
    const viewValues = ['Monthly', 'Annualy'];
    return (
        <Box
            className={`${classes.tilesViewCardBox} drawerActionSidebarCard`}
        //   style={{
        //     boxShadow: `0px 0px 4px ${shadowColor}, 0px 10px 19px ${shadowColor}, 0px 4px 14px ${shadowColor}, 0px 4px 8px ${shadowColor}, 0px 0px 0px ${shadowColor}`
        //   }}
        >
            <Box className={classes.tv_card}>
                <Box className={classes.tvc_header}>
                    <Box className={`${classes.tvch_title} ${classes.intel_flexBoxDiv}`}>
                        <Typography
                            paragraph
                            className={classes.tvcht_heading}
                        //   style={{ color: ColorHelper.getTextColor(String(category), FontColor) }}
                        >
                            {title}
                        </Typography>
                        <div className={`${classes.intel_chartDropDown}`}>
                            <div>
                                <Typography >Graph Type</Typography>
                                <Select IconComponent={ KeyboardArrowDownOutlinedIcon }
                                    onChange={(event) => { console.debug(event.target.value); }}
                                    value={chartType || ''}
                                    size={'small'}
                                >

                                    {dropdownValues &&
                                        dropdownValues.map((item: any, index: number) => (
                                            <MenuItem
                                                // value={item.name}
                                                key={index}
                                                data-name={item}
                                                value={item}
                                            >
                                                {item}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </div>
                            <div className='last'>

                                <Typography >View</Typography>
                                <Select IconComponent={ KeyboardArrowDownOutlinedIcon }
                                    onChange={(event) => { console.debug(event.target.value); }}
                                    value={viewValues[0]}
                                    size={'small'}
                                >

                                    {viewValues &&
                                        viewValues.map((item: any, index: number) => (
                                            <MenuItem
                                                // value={item.name}
                                                key={index}
                                                data-name={item}
                                                value={item}
                                            >
                                                {item}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </div>
                        </div>


                    </Box>


                </Box>
                <Box className={`${classes.intel_chartBody}`}>

                    {chartType === 'Line' && <Line  height={250}
                        options={options} data={data}
                    />
                    }
                    {chartType === 'Radar' && <Radar height={250}
                        options={options} data={data}
                    />
                    }
                    {chartType === 'Scatter' && <Scatter height={250}
                        options={options} data={data}
                    />
                    }

                    {chartType === 'Candle' && <VictoryChart height={250}
                        theme={VictoryTheme.material}
                        domainPadding={{ x: 25 }}
                        scale={{ x: 'time' }}
                    >

                        <VictoryAxis />
                        <VictoryAxis dependentAxis  />
                        <VictoryCandlestick labelComponent={<VictoryTooltip />} style={{
                            data: {
                                //fill: '#46d7cb',
                                strokeWidth: 0,
                            }
                        }}
                            candleColors={{ positive: '#46d7cb', negative: 'red' }}
                            data={data}
                        />
                    </VictoryChart>}
                </Box>
            </Box>
        </Box>
    );
};

export default IntelligenceTilesViewChart;
