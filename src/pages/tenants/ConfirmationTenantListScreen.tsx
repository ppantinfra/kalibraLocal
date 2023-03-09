import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../core';
import { useConfirmationTenantsScreenStyles } from './ConfirmationTenantsScreenStyles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { SnackBarsToast, SuccessDialog } from '../../components/common/';
import Container from '@mui/material/Container';
import { RoutesPath as route } from '../../core/constants';
import { CommonContext, CommonContextType } from '../../core/context';
import { logoutUser } from '../../api/AuthApi';


const ConfirmationTenantListScreen = () => {
  const classes = useConfirmationTenantsScreenStyles();
  const navigate = useNavigate();
  const [tenanList, setTenanListState] = React.useState<any>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [showInfoDialog, setShowInfoDialog] = useState<boolean>(false);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  const { clearContextAndLogout } = useContext(CommonContext) as CommonContextType;

  const {
    // setUserId, setDemoMode,
    setTenantKey,
    setTenantList
  } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    const getTenantList = async () => {
      try {
        await UserService.getTenantList()
          .then((res) => {
            if (res) {
              setTenanListState(res?.tenants);
              setTenantList(JSON.stringify(res?.tenants));
              if (res.tenants && res.tenants.length <= 1) {
                setTenantKey(res.tenants[0].key);
                // setLoading(true);
                navigate(`/${route.CLIENTSLISTROUTE}`);
              } else if (res.tenants && res.tenants.length === 0) {
                setShowInfoDialog(true);
              }
            } else {
              setIsError(true);
              setOpenSnackBar(true);
              setSnackBarMessage('something went wrong');
            }
          })
          .catch((err) => {
            setSnackBarMessage(err.message);
          });
      } catch (error) {
        console.error(error);
      }
    };
    getTenantList();
  }, [navigate, setTenantKey, setTenantList]);

  // useEffect(() => {
  //   if (tenanList && tenanList.length > 0) {
  //     setTenantList(JSON.stringify(tenanList));
  //   }

  // }, [tenanList, setTenantList]);

  const handleClickProvider = (e: any, tenant: any) => {
    e.preventDefault();
    setTenantKey(tenant.key);
    navigate(`/${route.CLIENTSLISTROUTE}`);
  };

  const closePopup = () => {
    clearContextAndLogout();
    logoutUser().then(() => {
      navigate('/');
      setTimeout(function () {
        setShowInfoDialog(false);
      }, 2000);
    });
  };

  return (
    <React.Fragment>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />

      {tenanList.length > 1 ? (
        <React.Fragment>
          <Box className={classes.container}>
            <Container
              component="section"
              maxWidth="lg"
              sx={{
                width: '100%',
                maxWidth: '100%'
                // maxWidth: {
                //   xl: "92vw",
                //   lg: "90vw",
                //   md: "85vw",
                //   xs: "85vw",
                // },
              }}
            >
              <Box className={classes.tenantContent}>
                <Box className={classes.tenantsBox}>
                  <Box className={classes.profileIconBox}>
                    <PermIdentityIcon className={classes.profileIcon} />
                  </Box>

                  <Box>
                    <Typography className={classes.headerTitle}>Select Provider</Typography>
                    <Typography paragraph className={classes.ht_paragraph}>
                      You seem to have access to multiple providers on our platform. Select one to proceed.
                    </Typography>
                  </Box>
                  <Box className={`${classes.SelectSection}`}>
                    <Box className={classes.selectProvider}>
                      {tenanList &&
                        tenanList.map((tenant: any) => (
                          <Link
                            className={classes.linkButton}
                            key={tenant.id}
                            onClick={(e) => handleClickProvider(e, tenant)}
                          >
                            {tenant.name}
                          </Link>
                        ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </React.Fragment>
      ) : (
        ''
      )}
      {showInfoDialog === true &&
        <SuccessDialog
          showSuccessPopup={false}
          setShowSuccessPopup={showInfoDialog}
          successMessage={'You no longer have an active Subscription'}
          successDescription="Please contact your account owner, or get in touch with our support team to reactivate your subscription."
          successNotifyMessage=""
          successDialogCloseHandler={closePopup}
          showDoneButton={true}
          hideSuccessImage={true}
        />
      }
    </React.Fragment>
  );
};

export default ConfirmationTenantListScreen;


