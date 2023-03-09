import React from 'react';
import { CardView } from '../partials';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useAddClientStyles } from '../AddClientStyles';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../../core/constants';

type Iprops = {
    sendInviteHandler: any;
    tryAnotherEmailHandler: any;
    inviteSent: boolean;
    userEmail: string;
};

const EmailNotMatch = ({ sendInviteHandler, tryAnotherEmailHandler, inviteSent, userEmail }: Iprops) => {
    const classes = useAddClientStyles();
    const navigate = useNavigate();
    return (
        <>

            {!inviteSent ?

                // Invite to kalibra screen code
                (<CardView
                    caption="Invite to Kalibra?"
                    description="Sorry, we couldn’t find anyone matching the email address you entered. Would you like to invite them to download Kalibra?"
                    confirmButtonLabel="Search"
                    height={226}
                    width={348}
                >
                    <Box className={classes.buttonBox} mt={1}>
                        <Link
                            className={classes.yesBtn}
                            onClick={sendInviteHandler}
                            sx={{ width: '100% !important', padding: '12px 0 !important', cursor: 'pointer' }}
                        >
                            Send Invite
                        </Link>
                        <Link
                            className={classes.noBtn}
                            onClick={tryAnotherEmailHandler}
                            sx={{ width: '100% !important', padding: '12px 0 !important', cursor: 'pointer' }}
                        >
                            Try another Email
                        </Link>
                    </Box>
                </CardView>) : (

                    // Invite sent screen
                    <CardView
                        caption="Invitation to download Kalibra sent!"
                        description={
                            <>
                                Sit back and relax while we wait for <strong>{userEmail}</strong> to accept your invitation. Would you like
                                to add more clients?
                            </>
                        }
                        height={226}
                        width={410}
                        closeBtn={true}
                        closeBtnHandler={() => navigate(`/${route.MANAGECLIENTSROUTE}`)}
                    >
                        <Box className={classes.buttonBox} mt={1}>
                            <Link
                                className={classes.yesBtn}
                                onClick={tryAnotherEmailHandler}
                                sx={{ width: '168px !important', padding: '12px 0 !important', cursor: 'pointer' }}
                            >
                                Invite Another Client
                            </Link>
                            <Link
                                className={classes.noBtn}
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    navigate(`/${route.MANAGECLIENTSROUTE}`);
                                }}
                            >
                                Close
                            </Link>
                        </Box>
                    </CardView>

                )}
        </>


    );
};

export default EmailNotMatch;