
import React, { useState, useEffect } from 'react';
import { CardView, ConfirmDialog } from '../clients/partials';
import { HookFormButton, SelectField } from '../common';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import { useDeleteClientStyles } from './DeleteClientStyles';
import { UserService } from '../../core';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../core/constants';

const DeleteClient = ({ usersList, oldUserId, oldUserName }) => {
  const [availableUser, setAvailableUser] = useState<any>('');
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const classes = useDeleteClientStyles();
  const [selectedUser, SetSelectedUser] = useState<any>('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'

  });
  const navigate = useNavigate();


  useEffect(() => {
    if (usersList && oldUserId && usersList.length > 0) {
      const remainingUser: any = [];
      for (const user of usersList) {
        if (user.proUserId != oldUserId) {
          remainingUser.push(user);
        }
      }
      setAvailableUser(remainingUser);
    }


  }, [usersList, oldUserId]);

  const onTransferClick = (data: any) => {
    if (usersList && usersList.length > 0) {
      for (const user of usersList) {
        if (user.proUserId === data?.user) {
          SetSelectedUser(user);
          setShowConfirmDialog(true);
        }
      }
    }
  };

  const transferHandler = async () => {
    await UserService.deleteUserFromOrganization(oldUserId, selectedUser?.proUserId).then(() => {
      setShowConfirmDialog(false);
      navigate(`/${route.MANAGEORGANIZATION}`);
    });
  };


  return (
    <React.Fragment>
      {/*  ReInvite Dialog */}
      <ConfirmDialog
        setShowConfirmPopup={setShowConfirmDialog}
        isOpen={showConfirmDialog}
        caption="Delete Practitioner"
        description={`The data will be transferred to ${selectedUser?.proUserName}. Are you sure you want to delete ${oldUserName} from your organisation? `}
        confirmButtonLabel="Delete"
        cancelButtonLabel="Cancel"
        confirmButtonHandler={transferHandler}
        cancelButtonHandler={() => {
          setShowConfirmDialog(false);
        }}
      />
      <CardView
        caption="Transfer Data"
        description={`${oldUserName} has access to client data that you should transfer to another user before deleting her account. Please select a user.`}
        confirmButtonLabel="User"
        // confirmButtonHandler={searchClientHandler}
        height={318}
        width={348}
      >
        <form className={classes.formContent} method="post">
          <Box mb={4}>
            <SelectField
              // labelName="User"
              placeholder="Select User"
              controlName={'user'}
              register={register}
              errors={errors}
              rules={{ required: true }}
              optionValue="proUserId"
              optionName="proUserName"
              options={availableUser}
              defaultValue=''
              disableLabel={true}
            />
          </Box>
          <Box className={classes.buttonBox}>
            <HookFormButton className={classes.submitBtn} variant="contained" name="Transfer"
              handleSubmit={handleSubmit((data: any) => onTransferClick(data))}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        </form>
      </CardView>
    </React.Fragment>

  );
};

export default DeleteClient;