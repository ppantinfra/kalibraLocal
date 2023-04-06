import React, { useEffect, useState, useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useManageOrganizationListStyles } from './ManageOrganizationListStyles';
import { MUIButton } from '../common';
import { Box, Typography } from '@mui/material';
import { ActionDrawerEnum } from '../../core/enums';
import { UserService } from '../../core';
import { CommonContext, CommonContextType } from '../../core/context';

const EditRole = ({ selectedRoles, toggleDrawer, updateUserId, refreshListHandler, userName }) => {
  const classes = useManageOrganizationListStyles();
  const [rolesObj, setRolesObj] = useState<any>({});
  const { tenantKey } = useContext(CommonContext) as CommonContextType;
  const [disableButton, setDisableButton] = useState<boolean>(true);




  useEffect(() => {
    const rolesObjectData = {
      isOwner: false,
      isAdmin: false,
      isBillingManager: false,
      isUser: false
    };

    if (selectedRoles && selectedRoles.length > 0) {
      setDisableButton(false);
      for (const role of selectedRoles) {
        rolesObjectData[role.key] = true;
      }
    }
    setRolesObj(rolesObjectData);
  }, [selectedRoles]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    // code for disable submit button
    const allRoles = ['isOwner', 'isAdmin', 'isBillingManager', 'isUser'];
    let anyFieldChecked = false;

    for (const role of allRoles) {
      if (role !== name) {
        if (rolesObj[role]) {
          anyFieldChecked = true;
        }
      }
    }

    if (checked || anyFieldChecked) {
      setDisableButton(false); // if checked any of the role then also button enabled
    } else {
      setDisableButton(true);
    }

    //end disable button code



    setRolesObj({
      ...rolesObj,
      [name]: checked
    });
  };

  const handleEditRole = async () => {
    const data = rolesObj;
    data.tenant = tenantKey;

    await UserService.updateUserRole(updateUserId, data).then((res) => {
      if (res) {
        toggleDrawer(false, ActionDrawerEnum.EditOrganizationRole, {}, updateUserId, userName);
        refreshListHandler();
      }
    });
  };
  return (
    <>
      <Typography className={classes.userName}>{userName}</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography className={classes.roleLbl}>Select Role</Typography>
        <div className={classes.roleWrapper}>
          <FormControlLabel
            control={<Checkbox checked={rolesObj?.isOwner || false} onChange={handleCheckboxChange} name="isOwner" />}
            label="Owner"
            className={classes.checkBoxLabel}
            disabled={true}
          />
        </div>

        <div>
          <FormControlLabel
            control={<Checkbox checked={rolesObj?.isAdmin || false} onChange={handleCheckboxChange} name="isAdmin" />}
            label="Administrator"
            className={classes.checkBoxLabel}
          />
        </div>

        <div>
          <FormControlLabel
            control={<Checkbox checked={rolesObj?.isUser || false} onChange={handleCheckboxChange} name="isUser" />}
            label="Practitioner"
            className={classes.checkBoxLabel}
          />
        </div>

        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={rolesObj?.isBillingManager || false}
                onChange={handleCheckboxChange}
                name="isBillingManager"
              />
            }
            label="Billing Manager"
            className={classes.checkBoxLabel}
          />
        </div>

        <Box sx={{ mt: 2 }}>
          <MUIButton buttonColor={'#fff'} onclickHandler={handleEditRole} buttonText={<>Done</>} width={'50px'} disabled={disableButton} />
        </Box>
      </Box>
    </>
  );
};

export default EditRole;
