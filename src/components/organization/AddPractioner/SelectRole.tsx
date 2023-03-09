import React, { useState } from 'react';
import { CardView } from '../../clients/partials';
import { HookFormButton } from '../../common';
import Box from '@mui/material/Box';
import { useAddPractionerStyles } from './AddPractionerStyles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

type Props = {
  roleSelectHandler: any;
  practionerAdded: boolean;
  addAnotherPractionerHandler: any;
};

const SelectRole = ({ roleSelectHandler, practionerAdded, addAnotherPractionerHandler }: Props) => {
  const classes = useAddPractionerStyles();
  const [rolesObj, setRolesObj] = useState<any>({
    isOwner: false,
    isAdmin: false,
    isBillingManager: false,
    isUser: false
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setRolesObj({
      ...rolesObj,
      [name]: checked
    });
  };

  return (
    <React.Fragment>
      {/* Role Selection screen */}
      {!practionerAdded && (
        <CardView
          caption="Select Role"
          description="We found a match for the email address you entered. Please select the role."
          confirmButtonLabel="Done"
          // confirmButtonHandler={searchClientHandler}
          height={400}
          width={348}
        >
          <form className={classes.formContent} method="post">
            <Box mb={4}>
              {/* <div>
                <FormControlLabel
                  control={
                    <Checkbox checked={rolesObj?.isOwner || false} onChange={handleCheckboxChange} name="isOwner" />
                  }
                  label="Owner"
                  className={classes.checkBoxLabel}
                />
              </div> */}

              <div>
                <FormControlLabel
                  control={
                    <Checkbox checked={rolesObj?.isAdmin || false} onChange={handleCheckboxChange} name="isAdmin" />
                  }
                  label="Administrator"
                  className={classes.checkBoxLabel}
                />
              </div>

              <div>
                <FormControlLabel
                  control={
                    <Checkbox checked={rolesObj?.isUser || false} onChange={handleCheckboxChange} name="isUser" />
                  }
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
            </Box>
            <Box className={classes.buttonBox}>
              <HookFormButton
                className={classes.submitBtn}
                variant="contained"
                name="Done"
                handleSubmit={() => roleSelectHandler(rolesObj)}
              />
            </Box>
          </form>
        </CardView>
      )}

      {/* Practitioner added screen */}

      {practionerAdded && (
        <CardView
          caption="Practitioner added"
          description="We have added the practitioner to your organisation."
          height={226}
          width={348}
        >
          <Box className={classes.buttonBox} mt={1}>
            <Link className={classes.yesBtn} onClick={addAnotherPractionerHandler} sx={{ cursor: 'pointer' }}>
              Done
            </Link>
            <Link
              className={classes.noBtn}
              onClick={addAnotherPractionerHandler}
              sx={{ width: 'auto !important', padding: '12px 0 !important', cursor: 'pointer' }}
            >
              Add Another Practitioner
            </Link>
          </Box>
        </CardView>
      )}
    </React.Fragment>
  );
};

export default SelectRole;
