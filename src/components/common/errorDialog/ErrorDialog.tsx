import React, { useState, useEffect } from 'react';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar } from '@mui/material';
import { AxiosError, AxiosResponse } from 'axios';
import { ErrorDialogStyles } from './ErrorDialogStyles';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { sendToKalibra } from '../../../api/shared/SendErrorReport';
import CloseIcon from '@mui/icons-material/Close';


type ErrorDialogProps = {
    openDialog: boolean;
    setOpenDialog: any;
    error: AxiosError | AxiosResponse;
    is401Error?: boolean;
};

const ErrorDialog = ({ openDialog, setOpenDialog, error, is401Error }: ErrorDialogProps) => {
    const classes = ErrorDialogStyles();
    const [confirmSend, setConfirmSend] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');


    useEffect(() => {
        const apiError: any = error;
        if (error) {
            if (apiError?.response?.data?.error) {
                setErrorMsg(apiError?.response?.data?.error);
            } else {
                setErrorMsg('');
            }
        }

    }, [error]);

    const handleCloseSnackBar = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setConfirmSend(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const onDialogClose = () => {
        if (is401Error) {
            localStorage.clear();
        } else {
            setOpenDialog(false);
        }
    };



    return (
        <>
            <Dialog
                open={openDialog}
                onClose={() => { onDialogClose(); }}
            >
                <ErrorOutlineOutlinedIcon sx={{ fontSize: 128, width: '100%' }} className={classes.icon} />


                <DialogTitle className={classes.title} sx={{ padding: '8px 0', fontSize: 24 }}>
                    {is401Error ? 'Looks like you are not authorised to do this action.' : 'Looks like we have a little problem.'}
                </DialogTitle>

                <DialogContent sx={{ padding: 0 }}>
                    <DialogContentText className={classes.content}>
                        {/* We have experienced an unexpected situation during your request processing.
                        We are still in the beta-testing phase, so these things unfortunately happen.
                        Please be assured that we will investigate the problem and provide a solution as soon as possible.
                        You could also help us if you send us additional details clicking on the button &quot;Send report to Kalibra&quot; below. */}

                        We have experienced an unexpected situation during this interaction.
                        These things unfortunately happen. Please be assured that we will investigate
                        the problem and provide a solution as soon as possible. It would really help
                        if you could send us additional details clicking on the button &quot;Send report to Kalibra&quot; below.
                        {errorMsg && (
                            <>
                                <span style={{ display: 'block', margin: '15px 0' }}>
                                    <small><label style={{ color: '#8f1a84' }}>error:&nbsp;</label>  <label style={{ color: '#d84147' }}>&nbsp;&quot;{errorMsg}&quot;</label></small>
                                </span>
                            </>
                        )}
                    </DialogContentText>

                </DialogContent>

                {!is401Error &&
                    <DialogActions className={classes.dismissButton}>
                        <Button onClick={() => {
                            setOpenDialog(false);
                            sendToKalibra(error);
                            setConfirmSend(true);
                        }} color='inherit'>Send to Kalibra</Button>
                        <Button onClick={() => setOpenDialog(false)} autoFocus color='inherit'>Dismiss</Button>
                    </DialogActions>
                }
            </Dialog>
            <Snackbar
                open={confirmSend}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <Alert severity='success' action={action}>
                    Thank You for Your feedback! We will get back to You shortly
                </Alert>
            </Snackbar>
        </>
    );
};

export default ErrorDialog;