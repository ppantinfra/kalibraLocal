import React from 'react';
import { CardView } from '../partials';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useAddClientStyles } from '../AddClientStyles';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../../core/constants';
import StringAvatarHelper from '../../../core/helper/StringAvatarHelper';

type Iprops = {
  userData: any;
  goBackToSearchHandler: any;
  sendInviteHandler: any;
  inviteSent: boolean;
  alreadyConnected: boolean;
};


const EmailMatch = ({ userData, goBackToSearchHandler, sendInviteHandler, inviteSent, alreadyConnected }: Iprops) => {
  const classes = useAddClientStyles();
  const navigate = useNavigate();




  return (
    <>

      {!alreadyConnected ? (
        <React.Fragment>
          {!inviteSent ? (
            // Invite to data sharing screen code
            <CardView
              caption="We have a match!"
              description="We found the following user matching the email address you entered. Invite them to connect with you?"
              height={314}
              width={348}
            >
              {/* User name display code */}
              <Box
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
                <Avatar {...StringAvatarHelper(userData?.name)} className={classes.UserAvatar} />
                <span className={classes.userInfo}>
                  <Typography className={classes.userName}>{userData?.name}</Typography>
                </span>
              </Box>

              {/* Actions code */}

              <Box className={classes.buttonBox}>
                <Link className={classes.yesBtn} onClick={sendInviteHandler} sx={{ cursor: 'pointer' }}>
                  Invite
                </Link>
                <Link
                  sx={{ cursor: 'pointer' }}
                  className={classes.noBtn}
                  onClick={goBackToSearchHandler}>
                  Cancel
                </Link>
              </Box>
            </CardView>) :
            // Invite sent screen
            <CardView
              caption="Invitation to share data with your Organisation!"
              description={
                <>
                  Sit back and relax while we wait for <strong>{userData?.email}</strong> to accept your invitation. Would you like
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
                  onClick={goBackToSearchHandler}
                  sx={{ width: '168px !important', padding: '12px 0 !important', cursor: 'pointer' }}
                >
                  Invite Another Client
                </Link>
                <Link
                  sx={{ cursor: 'pointer' }}
                  className={classes.noBtn}
                  onClick={() => {
                    navigate(`/${route.MANAGECLIENTSROUTE}`);
                  }}
                >
                  Close
                </Link>
              </Box>
            </CardView>
          }
        </React.Fragment>
      ) : (


        <React.Fragment>
          {/* Already connected to same cognito */}

          <CardView
            caption="Already Connected!"
            description={
              <>
                <strong>{userData?.name}</strong> is already connected with you. Would you like to add
                more clients
              </>
            }
            height={226}
            width={348}
          >
            <Box className={classes.buttonBox} mt={1}>
              <Link
                className={classes.yesBtn}
                onClick={goBackToSearchHandler}
                sx={{ width: '168px !important', padding: '12px 0 !important', cursor: 'pointer' }}
              >
                Add More Clients
              </Link>
              <Link
                sx={{ cursor: 'pointer' }}
                className={classes.noBtn}
                onClick={() => {
                  navigate(`/${route.MANAGECLIENTSROUTE}`);
                }}
              >
                Cancel
              </Link>
            </Box>
          </CardView>
        </React.Fragment>
      )}
    </>


  );
};

export default EmailMatch;