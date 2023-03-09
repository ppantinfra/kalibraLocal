import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import { clientSearchStyles } from './ClientSearchStyle';
import { UserService } from '../../core';
import { ConfirmDialog } from '../clients/partials';

const AddClientToggle = ({ toggleValue, selectedUserData }) => {
    const classes = clientSearchStyles();
    const [showAddClientPopup, setShowAddClientPopup] = useState(false);
    const [showRemoveClientPopup, setShowRemoveClientPopup] = useState(false);
    const [addClient, setAddClient] = useState<boolean>(false);

    useEffect(() => {
        setAddClient(toggleValue);
    }, [toggleValue]);


    const addClientHandler = async () => {
        await UserService.addUserToOrganization(selectedUserData?.cognitoId).then(() => {
            setAddClient(true);
        });
    };

    const removeClientHandler = async () => {
        await UserService.removeUserFromOrganization(selectedUserData?.cognitoId).then(() => {
            setAddClient(false);
        });
    };

    const onToggleChange = (event) => {
        if (event.target.checked) {
            setShowAddClientPopup(true);
        } else {
            setShowRemoveClientPopup(true);
        }
    };
    return (
        <React.Fragment>
            {/*  Add Client Dialog */}
            <ConfirmDialog
                setShowConfirmPopup={setShowAddClientPopup}
                isOpen={showAddClientPopup}
                caption="Add to your clients?"
                description={` Are you sure you want to add ${selectedUserData?.name}  to your client list? You can start interacting with him once you do. `}
                confirmButtonLabel="Add"
                cancelButtonLabel="Cancel"
                confirmButtonHandler={addClientHandler}
                cancelButtonHandler={() => {
                    setShowAddClientPopup(false);
                }}
            />

            {/*  Remove Client Dialog */}
            <ConfirmDialog
                setShowConfirmPopup={setShowRemoveClientPopup}
                isOpen={showRemoveClientPopup}
                caption="Remove from your clients?"
                description={`Are you sure you want to remove ${selectedUserData?.name}  from your client list? You can add him back later. `}
                confirmButtonLabel="Remove"
                cancelButtonLabel="Cancel"
                confirmButtonHandler={removeClientHandler}
                cancelButtonHandler={() => {
                    setShowRemoveClientPopup(false);
                }}
            />



            <Box className='toggleClient' >
                <InputLabel
                    htmlFor="switch-label"
                    className={classes.labelClassName}
                >
                    {addClient ? 'Added to My Clients' : 'Add to My Clients'}
                </InputLabel>
                <Switch
                    checked={addClient}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        onToggleChange(event);
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Box>
        </React.Fragment>
    );
};

export default AddClientToggle;