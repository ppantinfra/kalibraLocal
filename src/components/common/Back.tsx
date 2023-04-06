import React from 'react';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ButtonColor, AppColor, FontFamily } from '../../core/';
import moment from 'moment';

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
  cancel: {
    //paddingTop: '10px',
    marginLeft: '24px',
    color: '#33B7B8',
    fontFamily: FontFamily,
    fontWeight: '400',
    fontSize: '14px',
    textDecoration: 'none'

  },
  date: {
    marginLeft: '16px',
    marginTop: '-3px',
    fontFamily: FontFamily,
    fontWeight: '400',
    fontSize: '14px'
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
  disableBackButton?: boolean;
  bloodworkCreatedOn?: Date;
  bloodworkMeasuredDate?: Date;
  bloodworkCancelReiviewHandler?: any;
  bloodworkDeleteUploadHandler?: any;
  btnBackHandler?: any;
  componentRender?: any; // used to show extra details on this component then we have to pass jsx in that directly
};

const Back = ({ componentTitle, disableBackButton, bloodworkCreatedOn, bloodworkCancelReiviewHandler, bloodworkDeleteUploadHandler, bloodworkMeasuredDate, componentRender, btnBackHandler }: Props) => {
  const classes = useBackScreenStyles();
  const navigate = useNavigate();
  const navigateToBack = () => {
    if (btnBackHandler) {
      btnBackHandler();
    } else {
      navigate(-1);
    }

  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '10px',
        paddingTop: disableBackButton === true ? '10px' : '0px',
        paddingBottom: disableBackButton === true ? '16px' : '0px'
      }}
    >
      {!disableBackButton && (
        <Link
          onClick={() => {
            navigateToBack();
          }}
          className={`${classes.backtoLink}`}
        >
          <ChevronLeftIcon className={`${classes.chevronLeftIcon} animatedIcon`} />
        </Link>
      )}
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
          justifyContent: componentRender ? 'space-between' : undefined,
          width: componentRender ? '100%' : undefined
        }} >
          <Typography className={`${!disableBackButton ? classes.backPageHeading : undefined} pageHeading`}>
            {componentTitle}
          </Typography>
          {bloodworkCreatedOn &&
            <Typography className={classes.date}>
              {moment(bloodworkCreatedOn).format('DD-MMM-YY')}
            </Typography>
          }
          <Box>
            {componentRender && componentRender}
          </Box>

        </Box>
        <Box>
          {bloodworkCancelReiviewHandler && <Link
            onClick={() => {
              bloodworkCancelReiviewHandler();
            }}
            className={`${classes.cancel}`}
          >
            Cancel Review
            </Link>
          }
          {bloodworkDeleteUploadHandler &&
            <Link
              onClick={() => {
                bloodworkDeleteUploadHandler();
              }}
              className={`${classes.cancel}`}
            >
              Delete Upload
          </Link>
          }
          {bloodworkMeasuredDate &&
            <Typography className={classes.date}>
              {moment(bloodworkMeasuredDate).format('DD-MMM-YY')}
            </Typography>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Back;
