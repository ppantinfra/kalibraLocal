import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DrawerActionSideBarStyle } from '../../layouts/drawer/DrawerActionSidebarStyle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Stack } from '@mui/system';
// import shareIcon from '../../../assets/images/bloodwork/share-icon.png';
import { AppColor } from '../../../core';
// import { FlatHorizontalProgressBarChart } from "../../charts";
// import BloodworkDetailedreport from '../BloodworkDetailedReport';
// import DrawerActionSidebar from '../../layouts/drawer/DrawerActionSidebar';
// import { ActionDrawerEnum } from '../../../core/enums';
import { CommonContext, CommonContextType } from '../../../core/context';
import { FlatHorizontalProgressBarChart } from '../../charts';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route } from '../../../core/constants';
import { ColorHelper } from '../../../core/helper/ColorHelper';


type IProps = {
  open: boolean;
  toggleDrawer?: any;
  component?: any;
  drawerType?: string;
  title?: string;
  anchor: 'left' | 'top' | 'right' | 'bottom';
  clientUsername?: any;
  bloodworkReportTitle?: any;
  bloodworkReportGroup?: any;
  bloodworkMeasuredDate: Date;
};

const SideDrawer = ({
  open,
  toggleDrawer,
  // component,
  // drawerType,
  anchor,
  // title,
  bloodworkReportTitle,
  bloodworkReportGroup,
  bloodworkMeasuredDate
}: IProps) => {
  const classes = DrawerActionSideBarStyle();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  const navigate = useNavigate();

  if (bloodworkReportGroup === undefined) {
    return <></>;
  }

  const groupScoreColor = ColorHelper.getGroupScoreColor(bloodworkReportGroup.score);
  return (
    <>
      <Box className={`${classes.measurementDrawer} measurementDrawer`}>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={475}
          minFlingVelocity={500}
          className={'measurementSwipeableDrawer'}
        >
          <Stack sx={{ padding: 2 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'space-between' }} direction={'row'}>
              <Typography fontFamily={'Poppins'} fontSize={26} fontWeight="600">
                {' '}
                {bloodworkReportTitle}
              </Typography>
              <Typography
                fontFamily={'Poppins'}
                style={{ marginLeft: 6 }}
                fontSize={26}
                fontWeight="600"
                color={groupScoreColor}
              >
                {bloodworkReportGroup.score}
              </Typography>

              {/* <img style={{ marginRight: 12, marginLeft: 12 }} width={12} height={12} src={shareIcon} alt={''} /> */}
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
            {demoMode === true &&
              <Typography
                fontFamily={'Poppins'}
                style={{ color: '#46D7CB', cursor: 'pointer', marginTop: '8px' }}
                fontSize={14}
                fontWeight="400"
                onClick={() => {
                  // setShowDetailedReportDrawer(true)
                  navigate(`/${route.BLOODWORKDETAILEDREPORT}`, {
                    state: {
                      bloodworkReportTitle: bloodworkReportTitle,
                      bloodworkReportGroup: bloodworkReportGroup,
                      bloodworkMeasuredDate: bloodworkMeasuredDate
                    }
                  });
                }}
              >
                View detailed report
              </Typography>
            }
            {demoMode === true &&
              <Typography
                fontFamily={'Poppins'}
                fontSize={14}
                fontWeight="400"

                sx={{ width: 350, marginTop: 4, marginBottom: 4, color: '#2E3A59' }}
              >
                {bloodworkReportGroup.groupDescription}
              </Typography>
            }
            <Typography fontFamily={'Poppins'} fontSize={18} fontWeight="600" style={{ marginTop: 5 }}>
              Marker Break Up
            </Typography>
            {bloodworkReportGroup.data.map((item: any, index: number) => {

              const bgColor = ColorHelper.getGroupItemScoreColor(item.score);

              return (
                <Stack
                  direction={'row'}
                  sx={{
                    display: 'flex',
                    width: 375,
                    alignItems: 'center',
                    backgroundColor: '#F8F9FC',
                    marginTop: 1,
                    borderRadius: 4,
                    paddingLeft: 1,
                    paddingRight: 1
                  }}
                  key={index}
                >
                  <Stack
                    direction={'row'}
                    sx={{
                      display: 'flex',
                      width: '100%', //168,
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        padding: '8px',
                        backgroundColor: bgColor,
                        borderRadius: 2,
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        fontFamily={'Poppins'}
                        fontSize={18}
                        fontWeight='700'
                        textAlign='center'
                        style={{ color: AppColor.white, width: 40, justifyContent: 'center', textAlign: 'center' }}
                      >
                        {Number(item.score).toFixed(2)}
                      </Typography>

                    </Box>
                    <Typography fontFamily={'Poppins'} fontSize={16} fontWeight="600" marginLeft={1}>
                      {item.name}
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',

                    }}
                  >
                    <Box >
                      <FlatHorizontalProgressBarChart data={item} willHideTitle={true} popSize={15} />
                    </Box>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </SwipeableDrawer>
      </Box>
    </>
  );
};

export default SideDrawer;
