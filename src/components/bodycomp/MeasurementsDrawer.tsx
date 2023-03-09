import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
// import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BodyCompositionGraph from './charts/BodyCompositionGraph';

type IProps = {
  open?: any;
  toggleDrawer?: any;
  tileHandleShare?: () => void;
  lineChartTitle?: any;
  graphData?: any;
  graphLabels?: any;
};

const MeasurementsDrawer = ({
  open,
  toggleDrawer,
  // tileHandleShare,
  lineChartTitle,
  graphData,
  graphLabels,
}: IProps) => {
  const classes = useBodyCompositionScreenStyles();
  return (
    <React.Fragment>
      <Box className={`${classes.measurementDrawer} measurementDrawer`}>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={240}
          minFlingVelocity={500}
          className={'measurementSwipeableDrawer'}
        >
          <Box className="msd_headerBox">
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
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography
                      display="flex"
                      columnGap="1vmax"
                      whiteSpace="break-spaces"
                    >
                      {lineChartTitle}
                    </Typography>
                  </Box>
                  {/* <Box>
                    <Link
                      className={classes.shareIcon}
                      onClick={tileHandleShare}
                    >
                      <ShareOutlinedIcon />
                    </Link>
                  </Box> */}
                </Box>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: '-webkit-right' }}>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ p: 5 }}>
            <BodyCompositionGraph
              title={lineChartTitle}
              graphData={graphData}
              graphLabels={graphLabels}
            />
          </Box>
        </SwipeableDrawer>
      </Box>
    </React.Fragment>
  );
};

export default MeasurementsDrawer;
