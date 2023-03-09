import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core/';
import Skeleton from '@mui/material/Skeleton';

const useTilesCardBottomInfoSectionStyles = makeStyles({
  tiles_card_bottom_info: {
    position: 'relative',
    // top: "5px",
    // left: "3%",
    margin: 'auto',

    '@media (min-width: 1366px)': {
      bottom: '0',
    },
    '& .MuiGrid-item:not(:last-child) > .MuiBox-root': {
      borderRight: '1px solid #C5CEE0',
      paddingRight: '5px',
    },
  },
  tcbi_item: {
    display: 'flex',
    paddingBottom: '3px',
    flexDirection: 'column',
  },
  tcbiText: {
    fontSize: '11px',
    color: '#8F9BB3',
    fontWeight: '400',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '@media (max-width: 1280px)': {
      fontSize: '13px',
    },
    '@media (max-width: 376px)': {
      fontSize: '11px',
    },
  },
  tcbiValue: {
    fontSize: '18px',
    color: FontColor,
    fontFamily: FontFamily,
    fontWeight: '600',
    '@media (max-width: 1280px)': {
      //fontSize: '14px',
    },
    '@media (max-width: 768px)': {
      //fontSize: '14px',
    },
    '@media (max-width: 376px)': {
      //fontSize: '12px',
    },
  },
  tcbiUnit: {
    fontSize: '11px',
    color: FontColor,
    fontFamily: FontFamily,
    fontWeight: '400',
    marginTop: '-4px',
    '@media (max-width: 1280px)': {
      //fontSize: '14px',
    },
    '@media (max-width: 768px)': {
      //fontSize: '14px',
    },
    '@media (max-width: 376px)': {
      //fontSize: '12px',
    },
  },
});

type ProfileProps = {
  tilesCardbottomInfoData: any;
};

const TilesCardBottomInfoSection = ({
  tilesCardbottomInfoData,
}: ProfileProps) => {
  const classes = useTilesCardBottomInfoSectionStyles();

  return (
    <React.Fragment>
      <Grid
        container
        columnSpacing={{ lg: 1, md: 3, xs: 1 }}
        columns={15}
        mt={1}
        className={classes.tiles_card_bottom_info}
      >
        {tilesCardbottomInfoData.map((data: any, i: number) => (
          <Grid item xs={3} key={i}>
            <Box className={classes.tcbi_item}>
              <Typography className={classes.tcbiText}>
                {' '}
                {data.name}
              </Typography>
              {data.value !== undefined ?
                <Typography className={classes.tcbiValue}>
                  {/* {Math.round(data.value)} */}

                  {Number(Math.round(data.value)).toLocaleString('en-US', { maximumFractionDigits: 4 })}
                </Typography>
                :
                < Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginTop: '7px', width: '2vmax' }}
                />
              }
              {data.unit !== '' && (
                <Typography className={classes.tcbiUnit}>
                  {data.unit}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default TilesCardBottomInfoSection;
