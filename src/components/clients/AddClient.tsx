import React, { useState } from 'react';
import { CardView } from './partials';
import { useAddClientStyles } from './AddClientStyles';
import { HookFormButton, InputField } from '../../components/common/';
import { useForm } from 'react-hook-form';
import * as pattern from '../../core';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import StringAvatarHelper from '../../core/helper/StringAvatarHelper';

// User searched matched card
const UserMatchedRender = ({ searchedData, setShowSearchedCard, inviteClient, setIsUserMatched }) => {
  const classes = useAddClientStyles();


  return (
    <React.Fragment>
      {(searchedData || []).map((data: any, index: number) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px',
              borderTop: '1px solid #E4E9F2',
              borderBottom: '1px solid #E4E9F2',
              padding: '10px 0',
              marginBottom: '32px',
              marginTop: '8px'
            }}
          >
            <Avatar {...StringAvatarHelper(data?.name)} className={classes.UserAvatar} />
            <span className={classes.userInfo}>
              <Typography className={classes.userName}>{data.name}</Typography>
            </span>
          </Box>
        );
      })}

      <Box className={classes.buttonBox}>
        <Link className={classes.yesBtn} onClick={inviteClient}>
          Invite
        </Link>
        <Link
          className={classes.noBtn}
          onClick={() => {
            setShowSearchedCard(true);
            setIsUserMatched(false);
          }}
        >
          Cancel
        </Link>
      </Box>
    </React.Fragment>
  );
};

//  User searched card
const RenderSearchForm = ({ register, errors, handleSubmit }) => {
  const classes = useAddClientStyles();

  return (
    <form className={classes.formContent} method="post">
      <Box mb={4}>
        <InputField
          labelName="Email"
          placeholder="Enter Client’s Email Address"
          type="email"
          controlName={'email'}
          register={register}
          errors={errors}
          rules={{ required: true, pattern: pattern.EmailPattern, maxLength: 255 }}
        />
      </Box>
      <Box className={classes.buttonBox}>
        <HookFormButton className={classes.submitBtn} variant="contained" name="Search" handleSubmit={handleSubmit} />
      </Box>
    </form>
  );
};

const AddClient = () => {
  const classes = useAddClientStyles();
  const {
    register,
    handleSubmit,
    formState: { errors }
    // control
  } = useForm({
    mode: 'onChange'
  });

  const [userData] = useState([
    { id: '1', email: 'elijahstone@gmail.com', name: 'Elijah Stone', isConnected: true },
    { id: '2', email: 'ossine@gmail.com', name: 'Ossine', isConnected: false }
  ]);
  const [searchedData, setSearchedData] = useState<any>();
  const [alreadyConnectedUserData, setAlreadyConnectedUserData] = useState<any>();
  const [isUserMatched, setIsUserMatched] = useState<boolean>(false);
  const [isAlreadyConnected, setIsAlreadyConnected] = useState<boolean>(false);
  const [showSearchedCard, setShowSearchedCard] = useState<boolean>(true);
  const [isInviteSent, setIsInviteSent] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  const searchClient = (data: any) => {
    const item = userData.filter((el) => el.email === data.email);

    if (item.length > 0) {
      setUsername(item[0].name);
      setSearchedData(item);
      setIsUserMatched(true);
      setIsAlreadyConnected(false);
      setShowSearchedCard(false);
      setIsInviteSent(false);
    } else {
      setUsername(data.email);
      setSearchedData(item);
      setIsUserMatched(false);
      setShowSearchedCard(false);
      setIsAlreadyConnected(false);
      setIsInviteSent(false);
    }
  };

  const inviteClient = (data: any) => {
    const item = data.filter((el) => el.isConnected === true);
    if (item.length > 0) {
      setAlreadyConnectedUserData(item[0]);
      setIsAlreadyConnected(true);
      setShowSearchedCard(false);
      setIsUserMatched(false);
      setIsInviteSent(false);
    } else {
      setIsAlreadyConnected(false);
      setShowSearchedCard(false);
      setIsUserMatched(false);
      setIsInviteSent(true);
    }
  };

  const addMoreClientHandler = () => {
    setShowSearchedCard(true);
    setIsAlreadyConnected(false);
    setIsUserMatched(false);
    setIsInviteSent(false);
  };

  const tryAnotherEmailHandler = () => {
    setShowSearchedCard(true);
    setIsAlreadyConnected(false);
    setIsUserMatched(false);
    setIsInviteSent(false);
  };

  const sendInviteHandler = () => {
    setIsInviteSent(true);
    setShowSearchedCard(false);
    setIsAlreadyConnected(false);
    setIsUserMatched(false);
  };

  const onClose = () => {
    {
      if (isUserMatched === false) {
        setIsUserMatched(false);
        setShowSearchedCard(false);
        setIsAlreadyConnected(false);
        setIsInviteSent(false);
      } else {
        setIsUserMatched(true);
        setShowSearchedCard(false);
        setIsAlreadyConnected(false);
        setIsInviteSent(false);
      }
    }
  };

  return (
    <React.Fragment>
      {/* User searched card */}
      {showSearchedCard === true && (
        <CardView
          caption="Search by Email Address"
          description="Check if your client is already on Kalibra. Be sure to enter the email address they used to sign up."
          confirmButtonLabel="Search"
          confirmButtonHandler={searchClient}
          height={318}
          width={348}
        >
          <RenderSearchForm
            register={register}
            errors={errors}
            handleSubmit={handleSubmit((data: any) => searchClient(data))}
          />
        </CardView>
      )}
      {/* Matched user searched  card */}
      {isUserMatched === true && searchedData.length > 0 && (
        <CardView
          caption="We have a match!"
          description="We found the following user matching the email address you entered. Invite them to connect with you?"
          height={314}
          width={348}
        >
          <UserMatchedRender
            searchedData={searchedData}
            setShowSearchedCard={setShowSearchedCard}
            inviteClient={() => inviteClient(searchedData)}
            setIsUserMatched={setIsUserMatched}
          />
        </CardView>
      )}

      {/* Already connected card */}
      {isAlreadyConnected === true &&
        isUserMatched === false &&
        showSearchedCard === false &&
        alreadyConnectedUserData !== undefined && (
          <CardView
            caption="Already Connected!"
            description={
              <>
                <strong>{alreadyConnectedUserData.name}</strong> is already connected with you. Would you like to add
                more clients
              </>
            }
            height={206}
            width={348}
          >
            <Box className={classes.buttonBox} mt={1}>
              <Link
                className={classes.yesBtn}
                onClick={addMoreClientHandler}
                sx={{ width: '168px !important', padding: '12px 0 !important' }}
              >
                Add More Clients
              </Link>
              <Link
                className={classes.noBtn}
                onClick={() => {
                  setIsUserMatched(true);
                }}
              >
                Close
              </Link>
            </Box>
          </CardView>
        )}

      {/* Not matched User searched card */}
      {isUserMatched === false && showSearchedCard === false && isAlreadyConnected === false && isInviteSent === false && (
        <CardView
          caption="Invite to Kalibra?"
          description="Sorry, we couldn’t find anyone matching the email address you entered. Would you like to invite them to download Kalibra?"
          confirmButtonLabel="Search"
          confirmButtonHandler={searchClient}
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
        </CardView>
      )}

      {/* If new user then Invitation sent card or if user found but not already connected then also invitation sent */}
      {isInviteSent === true && isAlreadyConnected === false && isUserMatched === false && showSearchedCard === false && (
        <CardView
          caption="Invitation sent!"
          description={
            <>
              Sit back and relax while we wait for <strong>{username}</strong> to accept your invitation. Would you like
              to add more clients?
            </>
          }
          height={226}
          width={348}
          closeBtn={true}
          closeBtnHandler={() => onClose}
        >
          <Box className={classes.buttonBox} mt={1}>
            <Link
              className={classes.yesBtn}
              onClick={addMoreClientHandler}
              sx={{ width: '168px !important', padding: '12px 0 !important' }}
            >
              Invite Another Client
            </Link>
            <Link
              className={classes.noBtn}
              onClick={() => onClose}
            >
              Close
            </Link>
          </Box>
        </CardView>
      )
      }
    </React.Fragment >
  );
};

export default AddClient;
