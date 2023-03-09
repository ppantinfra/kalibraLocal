import React from 'react';
import { useHelpScreenStyles } from './HelpScreenStyles';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import { useNavigate } from 'react-router-dom';
import Help from '../../components/help/Help';

const HelpScreen = () => {
    const classes = useHelpScreenStyles();
    const navigate = useNavigate();
    const gotoScreen = (path) => {
        navigate(`/${path}`);
    };

    return (
        <React.Fragment>

            <Box className={classes.page_Content}>
                <Box className={classes.mc_headingSection}>
                    <Back componentTitle={'Help & Support'} disableBackButton={true} />
                </Box>


                <Help gotoScreen={gotoScreen} />
            </Box >
        </React.Fragment>
    );
};

export default HelpScreen;