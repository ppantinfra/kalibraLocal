import React from 'react';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ButtonColor, AppColor } from '../../core';
import { ColorHelper } from '../../core/helper/ColorHelper';
import { RoutesPath as route } from '../../core/constants';

const useBackScreenStyles = makeStyles({
  backtoLink: {
    //paddingTop: '10px',
    marginLeft: '-10px',

    '& svg': {
      fontSize: '35px',
      color: AppColor.kalibraThemeColor,
      transition: '.3s all',
      '&:hover': {
        color: ButtonColor
      }
    }
  },
  chevronLeftIcon: {
    marginTop: '3px'
  },
  backPageHeading: {
    marginTop: '-5px'
  }
});

type Props = {
  componentTitle: string | React.ReactNode | React.ReactNode[];
  score: number,
  bloodworkId: string
};

const BloodworkReportBack = ({ componentTitle, score, bloodworkId }: Props) => {
  const classes = useBackScreenStyles();
  const navigate = useNavigate();
  const groupScoreColor = ColorHelper.getGroupScoreColor(score);
  const navigateToBack = () => {
    navigate(`/${route.BLOODWORK}`, {
      state: {
        bloodworkId: bloodworkId
      }
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '10px',
        paddingTop: '0px',
        paddingBottom: '0px'
      }}
    >

      <Link
        onClick={() => {
          navigateToBack();
        }}
        className={`${classes.backtoLink}`}
      >
        <ChevronLeftIcon className={`${classes.chevronLeftIcon} animatedIcon`} />
      </Link>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }} >
          <Typography className={`${classes.backPageHeading} pageHeading`}>
            {componentTitle}

          </Typography>
          <Typography color={groupScoreColor} className={`${classes.backPageHeading} pageHeading`} style={{ marginLeft: '4px' }}>
            {score}
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default BloodworkReportBack;
