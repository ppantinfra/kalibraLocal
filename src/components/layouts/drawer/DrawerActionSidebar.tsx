import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DrawerActionSideBarStyle } from './DrawerActionSidebarStyle';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import PillarIcon from '../../common/PillarIcon';
import { ErrorBoundary } from '../../../components/common/ErrorBoundary';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AssessmentMediaContent } from '../../assessments';

type IProps = {
  open: boolean;
  toggleDrawer?: any;
  component?: any;
  drawerType?: string;
  title?: string;
  anchor: 'left' | 'top' | 'right' | 'bottom';
  clientUsername?: any;
  disableDrawerType?: boolean | false;
  width?: number;
  trendScore?: any;
  trendScoreUnit?: any;
  hideDivider?: boolean;
  infoData?: any;
};

const DrawerActionSidebar = ({
  open,
  toggleDrawer,
  component,
  drawerType,
  //title,
  anchor,
  disableDrawerType,
  width,
  hideDivider,
  infoData
}: IProps) => {
  const classes = DrawerActionSideBarStyle();
  const [openMediaModal, setOpenMediaModal] = React.useState(false);
  let finalWidth = width;
  if (finalWidth !== undefined && finalWidth > window.innerWidth) {
    finalWidth = window.innerWidth;
  }

  const pillars = ['Rest', 'Grow', 'Move', 'Connect', 'Reflect', 'Nourish', 'Fat', 'Body Fat', 'Weight', 'Protein', 'Carbs', 'Water', 'Sleep'];
  let isShowInfoIcon = false;
  if ((infoData?.infoHow && infoData?.infoHow.length > 0) || (infoData?.infoWhat && infoData?.infoWhat.length > 0) || (infoData?.infoWhy && infoData?.infoWhy.length > 0)) {
    isShowInfoIcon = true;
  }


  return (
    <React.Fragment>
      <Box className={`${classes.measurementDrawer} measurementDrawer`}>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={() => toggleDrawer(false, drawerType)}
          onOpen={() => toggleDrawer(true, drawerType)}
          swipeAreaWidth={375}
          minFlingVelocity={500}
          className={'measurementSwipeableDrawer drawerContentStyles'}
          PaperProps={{
            sx: {
              width: finalWidth !== undefined ? `${finalWidth}px` : '100%'
            }
          }}
        >
          <Box
            className="msd_headerBox"
            style={{
              padding:
                drawerType === 'Client Actions'
                  ? '25px 20px 0'
                  : // : drawerType === 'Chat'
                  // ? '25px 20px 0'
                  // : drawerType === 'Score Drivers'
                  // ? '25px 20px 0'
                  // : drawerType === 'Body Fat'
                  // ? '25px 16px 0'
                  // : drawerType === 'Weight'
                  // ? '25px 16px 0'
                  // : drawerType === 'Protein'
                  // ? '25px 16px 0'
                  // : drawerType === 'Carbs'
                  // ? '25px 16px 0'
                  // : drawerType === 'Fat'
                  // ? '25px 16px 0'
                  // : drawerType === 'Water'
                  // ? '25px 16px 0'
                  // : drawerType === 'Sleep'
                  // ? '25px 16px 0'
                  // : drawerType === 'Compare Measurement'
                  // ? '25px 16px 0'
                  // : drawerType === 'Add Measurement'
                  // ? '25px 16px 0'
                  // : drawerType === 'View Assessment'
                  // ? '25px 16px 0'
                  // : drawerType === 'Upload Bloodwork'
                  // ? '25px 16px 0'
                  '25px 16px 0'
            }}
          >
            <Grid
              container
              spacing-lg-10={2}
              spacing-md-10={2}
              spacing-xs-10={10}
              className={classes.mui_grid}
              alignItems="center"
            >
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: 'flex',
                    columnGap: '10px',
                    alignItems: 'center'
                  }}
                >
                  {!disableDrawerType && (
                    <Box>
                      <Typography
                        className={`${classes.heading} actionDrawerHeading`}
                        display="flex"
                        columnGap="8px"
                        whiteSpace="break-spaces"
                        component="div"
                      // style={{
                      //   color: ColorHelper.getTextColor(String(drawerType), FontColor)
                      // }}
                      >
                        <PillarIcon pillarName={String(drawerType)} isBig={true} /> {drawerType}
                      </Typography>
                      {/* <Typography
                        className={classes.subHeading}
                        style={{
                          color: ColorHelper.getTextColor(String(drawerType), '#33B7B8'),
                          display: 'flex'
                        }}
                      >
                        {clientUsername}{' '}
                        {trendScore && (
                          <span>
                            {trendScore}
                            <span style={{ fontSize: '10px' }}>{trendScoreUnit}</span>
                          </span>
                        )}
                      </Typography> */}
                      {isShowInfoIcon === true && <InfoOutlinedIcon
                        style={{ width: '16px', height: '16px', marginTop: '2px', cursor: 'pointer' }}
                        onClick={() => {
                          setOpenMediaModal(true);
                        }}
                      />
                      }
                    </Box>
                  )}
                </Box>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: '-webkit-right' }}>
                <IconButton
                  onClick={() => {
                    toggleDrawer(false, drawerType);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>

          {(!disableDrawerType && hideDivider === false) &&
            (<Divider />)}

          <Box
            sx={

              drawerType === 'Client Actions' || pillars.includes(String(drawerType)) ? { px: 0 } : { px: 2 }
              // : drawerType === 'Body Fat'
              // ? {px: 2 }
              // : drawerType === 'Weight'
              // ? {px: 2 }
              // : drawerType === 'Protein'
              // ? {px: 2 }
              // : drawerType === 'Carbs'
              // ? {px: 2 }
              // : drawerType === 'Fat'
              // ? {px: 2 }
              // : drawerType === 'Water'
              // ? {px: 2 }
              // : drawerType === 'Sleep'
              // ? {px: 2 }
              // : drawerType === 'Compare Measurement'
              // ? {px: 2 }
              // : drawerType === 'Add Measurement'
              // ? {px: 2 }
              // : drawerType === 'View Assessment'
              // ? {px: 2 }
              // : drawerType === 'Upload Bloodwork'
              // ? {px: 2 }
              // : {px: 5 }
            }
            className={classes.drawerBodyBox}
          >
            <ErrorBoundary >
              {component}
            </ErrorBoundary>

          </Box>
        </SwipeableDrawer>
      </Box>
      {openMediaModal === true &&
        <AssessmentMediaContent mediaContentData={undefined} handleClose={() => { setOpenMediaModal(false); }} name={drawerType} whatText={infoData?.infoWhat} howText={infoData?.infoHow} whyText={infoData?.infoWhy} />
      }
    </React.Fragment >
  );
};

export default DrawerActionSidebar;
