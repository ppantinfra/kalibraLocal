import React from 'react';
import { CardView } from '../../clients/partials';
import Box from '@mui/material/Box';
import { useAddPractionerStyles } from './AddPractionerStyles';
import Link from '@mui/material/Link';

const AlreadyAdded = ({ userDetails, addAnotherPractionerHandler }) => {
    const classes = useAddPractionerStyles();
    return (
        <CardView
            caption="Already Connected!"
            description={
                <>
                    <strong>{userDetails?.name}</strong> is already a member of your organisation. Would you like to add more clients?
                </>
            }
            height={206}
            width={348}
        >
            <Box className={classes.buttonBox} mt={1}>
                <Link
                    className={classes.yesBtn}
                    onClick={addAnotherPractionerHandler}
                    sx={{ width: '168px !important', padding: '12px 0 !important', cursor:'pointer' }}
                >
                    Add More Clients
                </Link>
            </Box>
        </CardView>
    );
};

export default AlreadyAdded;