import React, { useContext, useEffect } from 'react';
import { CardView } from '../../clients/partials';
import Box from '@mui/material/Box';
import { useAddPractionerStyles } from './AddPractionerStyles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StringAvatarHelper from '../../../core/helper/StringAvatarHelper';
import InputLabel from '@mui/material/InputLabel';
import { InputField } from '../../common/';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { CommonContext, CommonContextType } from '../../../core/context';
import envelopeIcon from '../../../assets/images/envelopeIcon.svg';
import tickIcon from '../../../assets/images/tickCopy.svg';
import { useNavigate } from 'react-router-dom';
const LoginInstruction = ({ userDetails, addAnotherPractionerHandler }) => {
  const classes = useAddPractionerStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const { tenantKey, loggedInUserName, tenantList } = useContext(CommonContext) as CommonContextType;
  const [showCopyPasswordIcon, setShowCopyPasswordIcon] = React.useState<boolean>(true);
  const [selectedTenantName, setSelectedTenantName] = React.useState<string>('');
  const navigate = useNavigate();

  const {
    register,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  // Used to get the selected tenant/organisation name to show it on the mail body.
  useEffect(() => {
    const allTenants = JSON.parse(tenantList);
    for (const tenant of allTenants) {
      if (tenant?.key === tenantKey) {
        setSelectedTenantName(tenant?.name);
      }
    }

  }, [tenantKey, tenantList]);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const generateMailBodyText = () => {
    return `Welcome to your new Kalibra PRO Account for ${selectedTenantName}%0D%0A%0D%0AHello,%0D%0AYou have a new Kalibra PRO account with the ${selectedTenantName} organization.%0D%0ASign in to your Kalibra Account to access the Kalibra PRO platform your organization provides, where you can invite and view your Kalibra users' data%0D%0A%0D%0AYour username: ${userDetails?.email}%0D%0APassword: ${userDetails?.password}%0D%0AKalibra PRO: https://pro.kalibra.ai/%0D%0A%0D%0ARegards,%0D%0A${loggedInUserName}%0D%0A`;
  };
  const generateDivBodyText = () => {
    return `Welcome to your new Kalibra PRO Account for ${selectedTenantName}<br> <br>
    Hello,<br>
    You have a new Kalibra PRO account with the ${selectedTenantName} organization. <br>
    Sign in to your Kalibra Account to access the Kalibra PRO platform your organization provides, where you can invite and view your Kalibra users' data
    <br><br>
    Your username: ${userDetails?.email} <br>
    Password: ${userDetails?.password} <br>
    Kalibra PRO: <a href="https://pro.kalibra.ai/" target="_blank">https://pro.kalibra.ai/</a><br>
    <br>
    Regards,<br>
    ${loggedInUserName}`;
  };

  const generateHtmlBodyTest = () => {
    const string = generateDivBodyText();
    return { __html: string };
  };

  return (
    <CardView
      caption="Practitioner added"
      description={
        <>
          {userDetails?.name} can start using Kalibra Pro within 24 hours. In most cases, it should take just a few
          minutes.
        </>
      }
      autoHeight={true}
      sx={{
        maxWidth: '500px',
        width: '95%'
      }}
      closeBtn={true}
      closeBtnHandler={()=>navigate(-1)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '10px',
          borderTop: '1px solid #E4E9F2',
          borderBottom: '1px solid #E4E9F2',
          padding: '10px 0',
          marginBottom: '32px',
          marginTop: '8px',

        }}
      >
        <Avatar {...StringAvatarHelper(userDetails?.name)} className={classes.UserAvatar} />
        <span className={classes.userInfo}>
          <Typography className={classes.userName}>{userDetails.name}</Typography>
        </span>
      </Box>

      {/* Emial Password */}
      <div className="loginInstructionsWrapper">
        <Box sx={{ mt: 2 }}>
          <InputLabel htmlFor="email-label">Email</InputLabel>
          <Box className={classes.formContent}>
            <InputField
              hideLabelName={true}
              labelName="Email"
              placeholder="Email"
              type="email"
              controlName={'email'}
              register={register}
              errors={errors}
              defaultValue={userDetails?.email}
              rules={{ required: true }}
              disabled
            />
          </Box>
          {/* {props.emailTextError ? <ErrorMessage errorMessage={props.emailTextError} /> : ''} */}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <InputLabel htmlFor="password-label">Password</InputLabel>
          </Box>
          <Box
            className={classes.formContent}
            sx={{
              display: 'flex',
              flexDirection: 'inherit!important',
              justifyContent: 'flexStart!important',
              alignItems: 'center'
            }}
          >
            <Box sx={{ maxWidth: '60%', flex: '1 1 60%' }}>
              <InputField
                labelName="Password"
                disabled
                defaultValue={userDetails?.password}
                hideLabelName={true}
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                controlName={'password'}
                register={register}
                errors={errors}
                rules={{
                  required: true
                }}
                inputIndormentElement={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                }
                variant="outlined"
              />
            </Box>
            <Link
              sx={{
                display: 'flex',
                gap: '10px',
                paddingTop: '6px',
                fontSize: '11px',
                lineHeight: '16px',
                fontWeight: '400',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onClick={() => {
                setShowCopyPasswordIcon(false);
                navigator.clipboard.writeText(userDetails?.password);
                setTimeout(() => {
                  setShowCopyPasswordIcon(true);
                }, 1000);
              }}
            >
              <Box sx={{ paddingTop: '6px', paddingLeft: '10px' }}>
                {showCopyPasswordIcon ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 21H12C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H12Z"
                      fill="#46D7CB"
                    />
                    <path
                      d="M9.73 15H5.67C4.96268 14.9974 4.28509 14.7152 3.78494 14.2151C3.28478 13.7149 3.00263 13.0373 3 12.33V5.67C3.00263 4.96268 3.28478 4.28509 3.78494 3.78494C4.28509 3.28478 4.96268 3.00263 5.67 3H12.33C13.0373 3.00263 13.7149 3.28478 14.2151 3.78494C14.7152 4.28509 14.9974 4.96268 15 5.67V9.4H13V5.67C13 5.49231 12.9294 5.32189 12.8038 5.19624C12.6781 5.07059 12.5077 5 12.33 5H5.67C5.49231 5 5.32189 5.07059 5.19624 5.19624C5.07059 5.32189 5 5.49231 5 5.67V12.33C5 12.5077 5.07059 12.6781 5.19624 12.8038C5.32189 12.9294 5.49231 13 5.67 13H9.73V15Z"
                      fill="#46D7CB"
                    />
                  </svg>
                ) : (
                  <img src={tickIcon} alt="." />
                )}
              </Box>{' '}
              Copy Password
            </Link>
          </Box>
        </Box>
      </div>

      {/* Login Instruction */}
      <div className="col2 cardResponsive">
        <div className='pr-2'>
          <div>
            <label className="subtitle">Send login instructions</label>

            <div className="subtitleContent">
              The email will provide a link to set the password and login to Kalibra Pro. The email will be sent from your email client, to ensure security.
            </div>

          </div>
          <div className="bgGray p-2">
            <div className="subtitle" dangerouslySetInnerHTML={generateHtmlBodyTest()} />
          </div>
        </div>
        <div className='pr-1'>
          <img src={envelopeIcon} alt="." width="140" />
        </div>
      </div>

      {/* Preview */}



      <Box className={classes.buttonBox + ' footRow'} mt={2} sx={{ bottom: '20px' }}>
        <Link
          className={classes.yesBtn} sx={{ width: '130px!important', whiteSpace: 'nowrap' }}
          href={`mailto:${userDetails?.email}?subject=Your Kalibra PRO Login details&body=${generateMailBodyText()}`}
        // onClick={addAnotherPractionerHandler}
        // sx={{ width: '168px !important', padding: '12px 0 !important' }}
        >
          Send Login
        </Link>

        <Link
          className={classes.noBtn + ' btn-outline'}
          onClick={addAnotherPractionerHandler}
        >
          Add Another Practitioner
        </Link>
      </Box>
    </CardView>
  );
};

export default LoginInstruction;
