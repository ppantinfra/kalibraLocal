import React, { useContext } from 'react';
import notDesktopImg from '../../src/assets/images/not-desktop.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { FontFamily, FontStyle, ButtonStyles } from '../core/';
import { CommonContext, CommonContextType } from '../core/context';

export const useNotDesktopModetyles = makeStyles({
    saveBtn: {
        ...ButtonStyles(
            '12px 24px',
            '#33B7B8 !important',
            '#fff !important',
            'capitalize',
            'none',
            '10px',
            FontFamily,
            FontStyle,
            '500',
            '18px',
            '20px',
            'none',
            'none'
        ),
        '&:hover': {
            background: '#53c0b7',
            boxShadow: 'none',
        },
        '@media (max-width: 768px)': {
            fontSize: '14px',
            padding: '12px',
        },
    },
});

const NotDesktopMode = () => {
    const classes = useNotDesktopModetyles();
    const { setContinueAnyWay } = useContext(CommonContext) as CommonContextType;
    return (
        // <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box className="notFoundWrapper text-center" sx={{ maxWidth: '500px', width: '90%', paddingTop: '50px', paddingBottom: '50px', margin: '0px auto 0 auto' }}>
            <img src={notDesktopImg} alt="not found" className="notFound" width={150} />
            <Typography className="headerTitle mt-2 mb-3">
                Oops..
            </Typography>
            <Typography className="mt-0 mb-2 paragraph-text">
                Kalibra PRO has been designed to work on desktop devices, please access from your computer.
            </Typography>
            {window.location.hostname !== 'pro.kalibra.ai' &&
                <Button
                    variant="contained"
                    className={classes.saveBtn}
                    onClick={() => {
                        setContinueAnyWay(true);
                    }}
                >
                    Continue Anyway
                </Button>
            }
        </Box>
        // </Box>
    );

};

export default NotDesktopMode;