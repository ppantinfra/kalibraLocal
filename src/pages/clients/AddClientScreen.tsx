import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import { makeStyles } from '@mui/styles';
// import AddClient from '../../components/clients/AddClient';
import { SearchClient, EmailNotMatch, EmailMatch } from '../../components/clients/AddClientComponents';
import { UserService } from '../../core';

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

const AddClientScreen = () => {
  const classes = useStyles();
  const [userEmail, setUserEmail] = useState<string>(''); //email filled by user for search

  //Not match Screen variables
  const [emailNotMatchModal, setShowEmailNotMatchModal] = useState<boolean>(false);
  const [inviteSent, setInviteSent] = useState<boolean>(false);


  //match screen variables
  const [emailMatchModal, setShowEmailMatchModal] = useState<boolean>(false);
  const [matchedUserData, setMatchedUserData] = useState<any>({});
  const [dataSharingInviteSent, setDataSharingInviteSent] = useState<boolean>(false);
  const [alreadyConnnected, setAlreadyConnected] = useState<boolean>(false);


  const onSearchButtonClick = async (data: any) => {
    setUserEmail(data?.email);
    await UserService.checkEmailExist(data?.email).then((res) => {
      if (res.status === 204) { //204 means email doesnot exisit
        setShowEmailNotMatchModal(true);
      } else {
        setShowEmailMatchModal(true);
        setMatchedUserData(res?.data);
        if (res?.data?.tenant) {
          setAlreadyConnected(true);
        }
      }
    });
  };


  //Not match screen methods
  const onSendInviteButtonClick = async () => {
    const body = { 'userEmail': userEmail };

    await UserService.sendInviteToUser(body).then((res) => {
      if (res.status === 201) { // indicates invite sent to user
        setInviteSent(true);
      }
      // need to habdle 409 status means invite already sent
    });
  };

  // go back to search email modal
  const goBackToSearchEmailScreen = () => {
    setShowEmailNotMatchModal(false);
    setShowEmailMatchModal(false);
    setInviteSent(false);
  };

  //match screen methods

  const onSendDataSharingInviteButtonClick = async () => {
    const body = { 'userId': matchedUserData?.cognitoId };

    await UserService.sendDataSharingInviteToUser(body).then((res) => {
      if (res.status === 201) { // indicates data sharing invite sent to user
        setDataSharingInviteSent(true);
      }
    });
  };

  return (
    <Box className={classes.page_Content}>
      <Box className={classes._headingSection}>
        <Back componentTitle={'Add Client'} />
      </Box>

      {/* <AddClient /> */}

      {/* Code to show email Search screen  */}
      {!emailNotMatchModal && !emailMatchModal && <SearchClient searchClientHandler={onSearchButtonClick} />}

      {/* Email Not match Case */}
      {emailNotMatchModal && <EmailNotMatch sendInviteHandler={onSendInviteButtonClick} tryAnotherEmailHandler={goBackToSearchEmailScreen}
        inviteSent={inviteSent} userEmail={userEmail} />}

      {/* Email  match Case */}
      {emailMatchModal && <EmailMatch userData={matchedUserData} goBackToSearchHandler={goBackToSearchEmailScreen}
        sendInviteHandler={onSendDataSharingInviteButtonClick} inviteSent={dataSharingInviteSent} alreadyConnected={alreadyConnnected} />}



    </Box>
  );
};

export default AddClientScreen;