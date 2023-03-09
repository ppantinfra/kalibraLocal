import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useReviewBloodworkGettingStartedStyles } from './ReviewBloodworkGettingStartedStyles';
import { Link } from '@mui/material';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';

type IProps = {
  clientId: string;
  bloodworkId: string;
  createdOn: Date;
  startButtonClick: any;
  cancelButtonClick: any
};

const ReviewBloodworkGettingStarted = ({ startButtonClick, cancelButtonClick, createdOn }: IProps) => {
  const classes = useReviewBloodworkGettingStartedStyles();

  return (
    <Box style={{ alignItems: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>

      <Box style={{ backgroundColor: 'white', borderRadius: '10px', padding: '24px', marginTop: '24px' }}>
        <Typography className={classes.title}>Your bloodwork is now ready for review</Typography>
        <Box style={{ display: 'flex', flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginTop: '24px' }}>
          {/* <Box style={{ flexBasis: '50%', alignContent: 'flex-start', }}>
            <Typography className={classes.filename}>Filename</Typography>
            <Typography className={classes.filenameValue}>03Jan23_LAB_06716.pdf</Typography>
          </Box> */}
          <Box style={{ flexBasis: '50%', alignContent: 'flex-start', }}>
            <Typography className={classes.filename}>Date & Time of Upload</Typography>
            <Typography className={classes.filenameValue}>{DateFormatterHelper.formatDateTime(createdOn)}</Typography>
          </Box>
        </Box>
        <Box style={{ marginTop: '24px', maxWidth: '489px' }}>
          <Typography className={classes.content}> We have extracted blood makers from the report you uploaded and will now walk you through each page for you to verify the values. Please check all values carefully and add anything that we were unable to obtain. You can submit the bloodwork for analysis when you finish reviewing all the pages.</Typography>
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '24px' }}>
          <Link className={classes.yesBtn} onClick={() => startButtonClick()}>
            {'Let\'s Begin'}
          </Link>
          <Link
            className={classes.cancelBtn}
            onClick={() => { cancelButtonClick(); }}
          >
            Cancel
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewBloodworkGettingStarted;
