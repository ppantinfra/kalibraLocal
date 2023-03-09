import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dimensionIcon from '../../assets/images/dimension.png';
import BodyFatIcon from '../../assets/images/bodyfat.png';
import { makeStyles } from '@mui/styles';
import { FontFamily } from '../../core';

type Iprops = {
    tabChangeHandler: any
    selectedTab: string
};

const MeasurementTabs = ({ tabChangeHandler, selectedTab }: Iprops) => {
    const tabclasses = makeStyles(
        {
            categoryContainer: {
                // display: 'flex',
                // flexDirection: 'row',
                // marginTop: '16px',

                // alignItems: 'center',
                // '@media (min-width:1299px)': {
                //     backgroudColor: 'yellow',
                //     marginTop: '-34px',
                // },
                // '@media (min-width:2999px)': {
                //     backgroudColor: 'red',
                //     marginTop: '-34px',
                // },
            },

        }
    );

    const classes = tabclasses();

    return (
        <Box
            className={classes.categoryContainer}
            style={{ display: 'flex' }}
        >
            <Box style={{ display: 'flex', cursor: 'pointer' }} onClick={() => {
                tabChangeHandler('dimensions');
            }}>
                <img style={{ width: '20px', height: '20px' }} src={dimensionIcon} alt={''} />
                <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center' }}>
                    <Typography style={{ marginLeft: '6px', fontSize: '12px', fontFamily: FontFamily, fontWeight: selectedTab === 'dimensions' ? '600' : '400' }} >
                        Dimensions
                    </Typography>
                </Box>
            </Box>

            <Box style={{ display: 'flex',  marginRight: '26px', marginLeft: '24px', cursor: 'pointer' }} onClick={() => {
                tabChangeHandler('body fat');
            }}>
                <img style={{ width: '20px', height: '20px' }} src={BodyFatIcon} alt={''} />
                <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center' }}>
                    <Typography style={{ marginLeft: '6px', fontSize: '12px', fontFamily: FontFamily, fontWeight: selectedTab !== 'dimensions' ? '600' : '400' }} >
                        Body Fat
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MeasurementTabs;