import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTilesViewStyles } from './TilesViewStyles';

// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CommonContext, CommonContextType } from '../../core/context';
import { ColorHelper } from '../../core/helper/ColorHelper';
import { FontColor, FontFamily } from '../../core';
// import { borderRadius } from '@mui/system';

type Props = {
  title?: any;
  // time: string;
  children: React.ReactNode | React.ReactNode[];
  category?: string;
  isDemo?: boolean;
  activityIcon?: any;
  activityDateTime?: string;
  isActivityDashboardTiles?: boolean;
  isShownDevider?: boolean;
  score?: number;
  inMainPage?: boolean;
  titleIcon?: any;
  boxClass?:string;
};

const TilesView = ({
  children,
  title,
  category,
  activityIcon,
  activityDateTime,
  isActivityDashboardTiles,
  isShownDevider,
  score,
  inMainPage,
  titleIcon,
  boxClass
}: Props) => {
  const classes = useTilesViewStyles();
  const { demoMode } = useContext(CommonContext) as CommonContextType;
  //const shadowColor = ColorHelper.getShadownColor(category, 'rgba(143, 155, 179, 0.1)');
  const borderColor = '#E4E9F2';

  return (
    <Box
      className={`${classes.tilesViewCardBox} ${boxClass ? boxClass : ''} overviewCard nourishCard growCard moveCard reflectCard connectCard restCard biomeCard trackerCard genomicsCard bloodworkCard nutritionWizardCard activityLoggerCard bodyCompositionCard lazyloaded drawerActionSidebarCard activityDashboard strengthCard`}
      style={{
        //border: category !== undefined ? undefined : `1px solid ${borderColor}`,
        //borderBottom: `1px solid ${borderColor}`,
        //borderBottomWidth: '1px'
        //border: `1px solid ${borderColor}`,
        // justifyContent: 'space-between',
        // backgroundColor: 'green'
        boxShadow: inMainPage === true ? '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)' : undefined,
        borderRadius: inMainPage === true ? '10px' : undefined,
      }}
    >
      <Box className={classes.tv_card}>
        {title !== 'Profile' && (
          <Box className={classes.tvc_header}>
            {title && (
              <Box className={classes.tvch_title}>
                <Typography
                  paragraph
                  className={classes.tvcht_heading}
                  style={{ fontSize: category !== undefined ? '14px' : '16px' }}
                >
                  {title}
                  {score && <span style={{ fontSize: '14px', color: ColorHelper.getTextColor(String(category), FontColor), fontFamily: FontFamily, fontWeight: '600' }}>{' '}{score}</span>}
                  {titleIcon && titleIcon}
                </Typography>

                {/* <Typography paragraph className={classes.tvcht_time}>
              {time}
            </Typography> */}
              </Box>
            )}

            {isActivityDashboardTiles === true && activityIcon}
            {isActivityDashboardTiles === true && (
              <Typography sx={{ fontSize: '11px', color: '#8F9BB3', fontFamily: FontFamily }}>
                {activityDateTime}
              </Typography>
            )}
            {demoMode === true && (
              <Box className={classes.tvch_icons}>
                {/* <InfoOutlinedIcon sx={{ display: isActivityDashboardTiles === true ? 'none' : 'block' }} /> */}
                {/* <ShareOutlinedIcon /> */}
              </Box>
            )}
          </Box>
        )}
        <Box className={`${classes.tvc_body}`}>{children}</Box>
      </Box>
      {isShownDevider === true &&
        <Box
          style={{
            backgroundColor: borderColor,
            height: '1px',
            position: 'absolute',
            bottom: '0px',
            width: '92%',
            left: '20px'
          }}
        />
      }
    </Box >
  );
};

export default TilesView;
