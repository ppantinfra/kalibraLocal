import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import { makeStyles } from '@mui/styles';
import SearchClient from '../../components/organization/AddPractioner/SearchClient';
import { screenTitle } from '../../core/constants';
import SelectRole from '../../components/organization/AddPractioner/SelectRole';
import { UserService } from '../../core';
import AddPractioner from '../../components/organization/AddPractioner/AddPractioner';
import AlreadyAdded from '../../components/organization/AddPractioner/AlreadyAdded';
import { CommonContext, CommonContextType } from '../../core/context';

export const useStyles = makeStyles(
  {
    page_Content: {},
    _headingSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      justifyContent: 'space-between',
      '@media (max-width: 768px)': {
        marginTop: '12px'
      }
    }
  },
  { index: 1 }
);

const AddPractionerScreen = () => {
  const { tenantKey } = useContext(CommonContext) as CommonContextType;
  const classes = useStyles();
  const [userEmail, setUserEmail] = useState<any>('');
  const [showClientSearch, setShowClientSearch] = useState<boolean>(true);
  const [showRoleSelection, setShowRoleSelection] = useState<boolean>(false);
  const [showAddPractioner, setShowAddPractioner] = useState<boolean>(false);
  const [roleSelectedSuccess, setShowRoleSelectedSuccess] = useState<boolean>(false);
  const [showUserAlreadyAdded, setShowUserAlreadyAdded] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>(''); // saved used data in this field

  const goToSearchScreen = () => { // used to redirect to search screen 
    setShowClientSearch(true);
    setShowRoleSelection(false);
    setShowAddPractioner(false);
    setShowRoleSelectedSuccess(false);
    setShowUserAlreadyAdded(false);
    setUserEmail('');
    setUserDetails('');
  };

  // called on button click on search screen 
  const onClientSearch = async (data: any) => {
    setUserEmail(data?.email);
    await UserService.checkOrganizationEmailExist(data?.email).then((res: any) => {
      setShowClientSearch(false);
      if (res) { // case when email exists
        setUserDetails(res);

        if (res.cognitoId) {
          if (res.roles && res.roles.length > 0) { // user already have roles for this organization
            setShowUserAlreadyAdded(true);
          } else { // if user connected with other organization then we have to select role
            setShowRoleSelection(true);
          }
        } else { //new user
          setShowAddPractioner(true);
        }


      }
    });
  };


  //called on role select done button click

  const onRoleSelection = async (rolesData: any) => {
    rolesData.tenant = tenantKey;

    await UserService.updateUserRole(userDetails?.cognitoId, rolesData).then((res) => {
      if (res) {
        setShowRoleSelectedSuccess(true);
      }
    });
  };

  return (
    <Box className={classes.page_Content}>
      <Box className={classes._headingSection}>
        <Back componentTitle={screenTitle.AddPractionerPage} />
      </Box>
      {/* Practitioner Search screen */}
      {showClientSearch && <SearchClient searchHandler={onClientSearch} />}
      {/* Role selection screen */}
      {showRoleSelection && <SelectRole roleSelectHandler={onRoleSelection} practionerAdded={roleSelectedSuccess} addAnotherPractionerHandler={goToSearchScreen} />}
      {/* Add Practitioner Screen */}
      {showAddPractioner && <AddPractioner userEmail={userEmail} addAnotherPractionerHandler={goToSearchScreen} />}

      {showUserAlreadyAdded && (
        <AlreadyAdded userDetails={userDetails} addAnotherPractionerHandler={goToSearchScreen} />
      )}
    </Box>
  );
};

export default AddPractionerScreen;