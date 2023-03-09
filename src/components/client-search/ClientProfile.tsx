import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import johnPic from '../../assets/images/avatar.png';
import Skeleton from '@mui/material/Skeleton';
import moment from 'moment';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, ButtonColor, AppColor } from '../../core/';
import DrawerActionSidebar from '../../components/layouts/drawer/DrawerActionSidebar';
import { ActionDrawerEnum } from '../../core/enums';
import { DashboardClientActions } from '../pillars';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const usecreateProfileStyles = makeStyles({
  personInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    alignSelf: 'start',
    padding: '0',

    '@media (max-width: 750px)': {
      // flexDirection: "column",
      alignItems: 'center',
      rowGap: '10px',
      justifyContent: 'space-between'
    },
    '@media (max-width: 375px)': {
      rowGap: '10px'
    }
  },

  menuIcon: {
    cursor: 'pointer',
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: AppColor.kalibraThemeColor,
    '&:hover': {
      color: ButtonColor,
      transform: 'scale(1.2)'
    }
  },

  arrowIcon: {
    cursor: 'pointer',
    fontSize: '35px',
    color: AppColor.kalibraThemeColor,
    '&:hover': {
      color: ButtonColor
    }
  },
  pcs_img: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    '@media (max-width: 480px)': {
      width: '38px',
      height: '38px'
    }
  },
  pcs_username: {
    textAlign: 'center',
    marginLeft: '6px',
    color: FontColor,
    fontFamily: FontFamily,
    fontWeight: '600',
    fontSize: '11px',
    '@media (max-width: 768px)': {
      fontSize: '11px'
    }
  },
  pcs_nickname: {
    textAlign: 'center',
    color: '#8F9BB3',
    fontSize: '11px',
    '@media (max-width: 768px)': {
      fontSize: '8px'
    },
    marginLeft: 10
  },
  pcs_card_personal_info: {
    position: 'absolute',
    bottom: '5%',
    left: '3%',
    '@media (min-width: 1366px)': {
      bottom: '10%'
    },
    '& .MuiGrid-item:not(:last-child) > .MuiBox-root': {
      borderRight: '1px solid #C5CEE0',
      paddingRight: '5px'
    }
  },
  pcs_card_info: {},
  pcspcPersonal_item: {
    display: 'flex',
    paddingBottom: '3px',
    flexDirection: 'column'
  },
  pcspc_item: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  pcspcPersonalText: {
    fontSize: '11px',
    marginLeft: 10,
    color: '#2B2F3B',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '@media (max-width: 1280px)': {
      fontSize: '11px'
    }
  },

  pcspcPersonalValue: {
    color: FontColor,
    marginLeft: 6,
    fontFamily: FontFamily,
    fontWeight: '600',
    fontSize: '11px',
    textTransform: 'capitalize',
    '@media (max-width: 1280px)': {
      fontSize: '11px'
    },
    '@media (max-width: 768px)': {
      fontSize: '11px'
    }
  },

  pcs_profileImageNameBox: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px'
  },
  pcs_profilePersonalTextValueBox: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 750px)': {
      justifyContent: 'flex-start',
      marginLeft: '24px',
    },
    // '@media (max-width: 736px)': {
    //   flexWrap: 'wrap'
    // }
  },
  pcs_textBox: {
    display: 'flex',
    alignItems: 'center'

    // "@media (max-width: 736px)": {
    //   flexDirection: "column",
    // },
  },
  editBtn: {
    display: 'flex',
    padding: '0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '3px',
    minWidth: 0,
    // "& svg": {
    //   fontSize: "20px",
    // }
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: AppColor.kalibraThemeColor,
    '&:hover': {
      color: ButtonColor,
      transform: 'scale(1.2)',
      background: 'transparent'
    }
  }
});

type ProfileProps = {
  userDetailsData: any;
  loading: boolean;
  // showClientSelectionHandler: any;
  searcField?: React.ReactNode | React.ReactNode[];
  selectedUserName?: string;
};

const ClientProfile = ({
  userDetailsData,
  loading,
  searcField,
  selectedUserName
}: // showClientSelectionHandler,
  ProfileProps) => {
  const classes = usecreateProfileStyles();
  const [openClientActionDrawer, setOpenClientActionDrawer] = React.useState<boolean>(false);
  const theme = useTheme();
  const lessThan750 = useMediaQuery(theme.breakpoints.down(750));
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleRightDrawer = (value: boolean, type: string) => {
    if (type === ActionDrawerEnum.ClientActionsDrawer) {
      setOpenClientActionDrawer(value);
    }
  };

  return (
    <React.Fragment>
      <DrawerActionSidebar
        clientUsername={userDetailsData?.name}
        open={openClientActionDrawer}
        toggleDrawer={toggleRightDrawer}
        component={
          <DashboardClientActions
            clientCognitoId={userDetailsData?.cognitoId}
            toggleDrawer={toggleRightDrawer}
            drawerType={ActionDrawerEnum.ClientActionsDrawer}
          />
        }
        drawerType={ActionDrawerEnum.ClientActionsDrawer}
        anchor="right"
        width={380}
      />

      <Box className={classes.personInfo}>
        <Box className={classes.pcs_profileImageNameBox}>
          {/* <MenuOpenIcon
            name="simple-controlled"
            max={1}
            className={`${classes.menuIcon} animatedIcon`}
            onClick={() => setOpenClientActionDrawer(true)}
          /> */}

          {selectedUserName && <Avatar alt={johnPic} src={johnPic} className={classes.pcs_img} />}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            {searcField}
          </Box>
        </Box>
        {selectedUserName && (
          <>
            {lessThan750 && (
              <Box onClick={handleClick} sx={{ display: 'flex', alignItems: 'center' }}>
                {open ? (
                  <ExpandLess className={classes.arrowIcon} max={1} />
                ) : (
                  <ExpandMore className={classes.arrowIcon} max={1} />
                )}
              </Box>
            )}

            {!lessThan750 && (
              <Box className={classes.pcs_profilePersonalTextValueBox}>
                <Box className={classes.pcs_textBox}>
                  <Typography className={classes.pcspcPersonalText}> Sex:</Typography>
                  <Typography className={classes.pcspcPersonalValue}>
                    {loading ? (
                      userDetailsData?.gender
                    ) : (
                      <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                    )}
                  </Typography>
                </Box>
                <Box className={classes.pcs_textBox}>
                  <Typography className={classes.pcspcPersonalText}>Age:</Typography>
                  <Typography className={classes.pcspcPersonalValue}>
                    {loading ? (
                      moment().diff(userDetailsData?.birthdate, 'years')
                    ) : (
                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6, width: '3vmax' }} />
                    )}
                  </Typography>
                </Box>
                <Box className={classes.pcs_textBox}>
                  <Typography className={classes.pcspcPersonalText}>Weight:</Typography>

                  <Typography className={classes.pcspcPersonalValue}>
                    {loading && userDetailsData?.weight !== undefined ? (
                      userDetailsData?.weight + 'kg'
                    ) : (
                      <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                    )}
                  </Typography>
                </Box>
                <Box className={classes.pcs_textBox}>
                  <Typography className={classes.pcspcPersonalText}>Height:</Typography>
                  <Typography className={classes.pcspcPersonalValue}>
                    {loading && userDetailsData?.height !== undefined ? (
                      userDetailsData?.height + 'cm'
                    ) : (
                      <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                    )}
                  </Typography>
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
      {lessThan750 && (
        <Collapse sx={{ py: 1, px: 2 }} in={open} timeout={5} unmountOnExit>
          <Box className={classes.pcs_profilePersonalTextValueBox}>
            <Box className={classes.pcs_textBox}>
              <Typography className={classes.pcspcPersonalText}> Sex:</Typography>
              <Typography className={classes.pcspcPersonalValue}>
                {loading ? (
                  userDetailsData?.gender
                ) : (
                  <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                )}
              </Typography>
            </Box>
            <Box className={classes.pcs_textBox}>
              <Typography className={classes.pcspcPersonalText}>Age:</Typography>
              <Typography className={classes.pcspcPersonalValue}>
                {loading ? (
                  moment().diff(userDetailsData?.birthdate, 'years')
                ) : (
                  <Skeleton animation="wave" height={10} style={{ marginBottom: 6, width: '3vmax' }} />
                )}
              </Typography>
            </Box>
            <Box className={classes.pcs_textBox}>
              <Typography className={classes.pcspcPersonalText}>Weight:</Typography>

              <Typography className={classes.pcspcPersonalValue}>
                {loading && userDetailsData?.weight !== undefined ? (
                  userDetailsData?.weight + 'kg'
                ) : (
                  <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                )}
              </Typography>
            </Box>
            <Box className={classes.pcs_textBox}>
              <Typography className={classes.pcspcPersonalText}>Height:</Typography>
              <Typography className={classes.pcspcPersonalValue}>
                {loading && userDetailsData?.height !== undefined ? (
                  userDetailsData?.height + 'cm'
                ) : (
                  <Skeleton animation="wave" height={10} style={{ marginLeft: '6px', width: '3vmax' }} />
                )}
              </Typography>
            </Box>
          </Box>
        </Collapse>
      )}
    </React.Fragment>
  );
};

export default ClientProfile;
