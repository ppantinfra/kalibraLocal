import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkStyles } from './BloodworkStyles';
import { Stack } from '@mui/system';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ActionDrawerEnum } from '../../core/enums';


type IProps = {
  goToAssessmentDetailPage: any;
};

const SubmissionProgressScreen = ({ goToAssessmentDetailPage }: IProps) => {
  const [selectedImage] = useState<any>();
  const classes = useBloodworkStyles();
  const [value] = useState(10);
  const [remainingSeconds, setRemainingSeconds] = useState(10);

  const viewAssessment = React.useCallback(() => {
    goToAssessmentDetailPage(false, ActionDrawerEnum.BloodworkReviewScreen);
  }, [goToAssessmentDetailPage]);

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;

    if (remainingSeconds > 0) {
      timeoutId = setTimeout(() => {

        setRemainingSeconds(remainingSeconds - 1);
        if (remainingSeconds - 1 <= 0) {
          clearTimeout(timeoutId as any);
          viewAssessment();
        }

      }, 1000);
    } else if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [remainingSeconds, viewAssessment]);

  return (
    <Box className={classes.pageContent}>
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
        </div>
      )}

      <Box
        component="span"
        sx={{
          display: 'flex',
          m: 'auto',
          height: 400,
          marginLeft: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#8F9BB3'
        }}
      >
        <Stack spacing={2} alignItems="center" display={'flex'}>
          <Box sx={{ height: 100, width: 100 }}>
            <CircularProgressbarWithChildren
              strokeWidth={6}
              backgroundPadding={18}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#46D7CB'
              })}
              value={(value - remainingSeconds) * 10}
            >
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <Typography fontFamily={'Poppins'} fontSize={20} fontWeight="bold">
                {remainingSeconds}
              </Typography>
              <Typography fontFamily={'Poppins'} fontSize={10}>
                seconds
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>

          {remainingSeconds > 0 &&
            <Box className={classes.submission_progressTextBox}>
              <Typography>Almost there!</Typography>
              <Typography width={600} fontSize={16} align="center">
                We are analysing your bloodwork and will present a detailed assessment soon. In the meanwhile, you could
                browse through other sections.
              </Typography>
            </Box>

            //   : (
            //     <Box className={classes.submission_progressTextBox}>
            //   <Typography>Your Assessment is ready!</Typography>
            //   {/* <Button onClick={gotoClientDetails} className={classes.viewNowBtn}>
            //         View Now
            //       </Button> */}
            //   <MUIButton
            //     buttonColor={'#fff'}
            //     buttonBackground={DefaulPrimarytColor.primary500green}
            //     onclickHandler={gotoClientDetails}
            //     buttonText={'View Now'}
            //   />
            // </Box>
            //   )
          }
        </Stack>
      </Box>
    </Box>
  );
};

export default SubmissionProgressScreen;
