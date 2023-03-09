import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { CommonContext, CommonContextType } from '../../core/context';
import { ColorHelper } from '../../core/helper/ColorHelper';
import ListIcon from '@mui/icons-material/List';
import PillarIcon from '../common/PillarIcon';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';

import { makeStyles } from '@mui/styles';
import {
  FontColor,
  FontFamily
  // AppColor, ButtonColor
} from '../../core';

const useStyles = makeStyles({
  tilesViewCardBox: {
    color: '#2B2F3B',
    background: '#fff',
    padding: '10px',
    borderRadius: '14px',

    maxWidth: '100%',
    height: '214px',
    fontFamily: FontFamily,
    position: 'relative'
    // '@media (max-width: 1500px)': {
    //   height: '348px'
    // },
    // '@media (min-width: 2999px)': {
    //   height: '430px'
    // }
  },
  tv_card: {
    padding: '10px',
    height: '100%'
  },
  tvc_header: {
    fontSize: '18px',
    fontFamily: FontFamily,
    color: FontColor,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px'
  },
  tvch_title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'start',
    flexDirection: 'column',
    alignItems: 'start',
    fontFamily: FontFamily,
    color: FontColor
  },
  tvcht_heading: {
    marginBottom: '0',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '16px',
    fontWeight: '600'
  },
  tvcht_time: {
    marginBottom: '5px',
    fontFamily: FontFamily,
    color: FontColor,
    fontSize: '13px'
  },
  tvch_icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: FontFamily,
    columnGap: '5px',
    '& .pillarIconChip': {
      height: '20px',
    },

    '& .MuiSvgIcon-root': {
      color: '#8F9BB3',
      width: '24px',
      height: '24px',
      fontFamily: FontFamily,
      cursor: 'pointer'
    },
    '& img': {
      cursor: 'pointer'
    },

    '&& [data-testid=WbIncandescentOutlinedIcon]': {
      width: '20px',
      height: '20px',
      transform: 'rotate(180deg)',
      color: '#8F9BB3'
    }
  },

  tvc_body: {}
});

type Props = {
  title?: string;
  pillarCategory?: string;
  children: React.ReactNode | React.ReactNode[];
  category?: string;
  handleDrawerOpen?: any;
  tableReportClickHandler?: any;
};

const IntelligenceTilesView = ({
  children,
  title,
  pillarCategory,
  category,
  handleDrawerOpen,
  tableReportClickHandler
}: Props) => {
  const classes = useStyles();
  //   const { demoMode } = useContext(CommonContext) as CommonContextType;
  const shadowColor = ColorHelper.getShadownColor(category, 'rgba(143, 155, 179, 0.1)');

  return (
    <Box
      className={`${classes.tilesViewCardBox} drawerActionSidebarCard`}
      style={{
        boxShadow: `0px 0px 4px ${shadowColor}, 0px 10px 19px ${shadowColor}, 0px 4px 14px ${shadowColor}, 0px 4px 8px ${shadowColor}, 0px 0px 0px ${shadowColor}`
      }}
    >
      <Box className={classes.tv_card}>
        <Box className={classes.tvc_header}>
          <Box className={classes.tvch_title}>
            <Typography
              paragraph
              className={classes.tvcht_heading}
              style={{ color: ColorHelper.getTextColor(String(category), FontColor) }}
            >
              {title}
            </Typography>
          </Box>

          <Box className={classes.tvch_icons}>
            <PillarIcon pillarName={pillarCategory} />
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                columnGap: '10px',
                marginLeft: '5px'
              }}
            >
              <ListIcon onClick={tableReportClickHandler} />
              <WbIncandescentOutlinedIcon onClick={handleDrawerOpen} />
            </Box>
          </Box>
        </Box>
        <Box className={`${classes.tvc_body}`}>{children}</Box>
      </Box>
    </Box>
  );
};

export default IntelligenceTilesView;
