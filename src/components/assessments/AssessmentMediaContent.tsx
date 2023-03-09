import React, { useRef } from 'react';
import { useAssessmentStyles } from './AssessmentStyle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Dialog, DialogContent, Divider, IconButton } from '@mui/material';
import expandIcon from '../../assets/images/bloodwork/expand-icon-black.svg';
import scaledownIcon from '../../assets/images/bloodwork/scale-down-icon.svg';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import { FontFamily } from '../../core';
import { Stream } from '@cloudflare/stream-react';
type Props = {
  mediaContentData?: any;
  name?: string;
  handleClose?: any;
  whatText?: string;
  howText?: string;
  whyText?: string;
};

const AssessmentMediaContent = ({ mediaContentData, name, whatText, howText, whyText, handleClose }: Props) => {
  const classes = useAssessmentStyles();
  const [isLarge, setIsLarge] = React.useState(false);
  const [selectedPageIndex, setSlectectedPageIndex] = React.useState(0);
  const [isShownAbout, setIsShownAbout] = React.useState(true);

  const settings = {
    //centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    //variableWidth: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
    },
    beforeChange: (current, next) => {
      setSlectectedPageIndex(next);
    }
  };
  let hasAboutData = false;
  if ((whatText && whatText.length > 0) || (howText && howText.length > 0) || (whyText && whyText.length > 0)) {
    hasAboutData = true;
  }

  const renderAbout = () => {
    return (
      <Box sx={{ marginLeft: '16px' }}>
        {String(whatText).length > 0 && <>
          <Typography sx={{ textAlign: 'left', marginTop: '16px', fontWeight: '600', fontFamily: FontFamily, fontSize: '14px' }}>
            What
          </Typography>

          <Typography sx={{ textAlign: 'left', fontWeight: '400', fontFamily: FontFamily, fontSize: '14px' }}>
            {String(whatText)}
          </Typography>
        </>
        }

        {String(howText).length > 0 && <>
          <Typography sx={{ textAlign: 'left', marginTop: '16px', fontWeight: '600', fontFamily: FontFamily, fontSize: '14px' }}>
            How
          </Typography>

          <Typography sx={{ textAlign: 'left', fontWeight: '400', fontFamily: FontFamily, fontSize: '14px' }}>
            {String(howText)}
          </Typography>
        </>
        }

        {String(whyText).length > 0 && <>
          <Typography sx={{ textAlign: 'left', marginTop: '16px', fontWeight: '600', fontFamily: FontFamily, fontSize: '14px' }}>
            Why
          </Typography>

          <Typography sx={{ textAlign: 'left', fontWeight: '400', fontFamily: FontFamily, fontSize: '14px' }}>
            {String(whyText)}
          </Typography>
        </>
        }

      </Box>
    );

  };

  const slickSliderWidth = isLarge === true ? '70vw' : '20vw';
  const rightBoxWidth = isLarge === true ? '76vw' : '26vw';
  const leftItemWidth = isLarge === true ? '14vw' : '14vw';
  const leftDividerWidth = isLarge === true ? '12vw' : '12vw';
  const videoHeight = isLarge === true ? '80vh' : '26.7vw';
  const videoRef = useRef(null);

  const renderMediaContent = () => {
    return mediaContentData.map((mediaContent: any) => {
      const height = mediaContent.videoUrl ? videoHeight : 'auto';
      let videoId = '';
      if (mediaContent.videoUrl) {
        const arr = mediaContent.videoUrl.split('/');
        if (arr && arr.length > 0) {
          videoId = arr[arr.length - 1];
        }
      }

      return (<>
        <Box
          sx={{
            mt: 0,
            display: 'flex',
            justifyContent: 'center',
            height: height,
          }}
        >
          <Box>
            {mediaContent.videoUrl ? (
              <Box>
                <Stream streamRef={videoRef as any} controls volume={0.1} src={String(videoId)}
                  onLoadedData={() => {
                    (videoRef.current as any).volume = 0.1;
                  }}
                  responsive={false}
                />
              </Box>
            ) : (
              <Box style={{
                backgroundColor: 'blue',
                alignItems: 'center'
              }}>
                <img id="image" style={{ width: undefined, maxHeight: videoHeight, }} src={mediaContent.imageUrl} alt="" />
              </Box>
            )}
          </Box>
        </Box>
      </>
      );
    });
  };

  const graphRef = useRef(null);
  return (
    <Dialog
      fullScreen={false}
      fullWidth
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '2000px',  // Set your width here
          },
          '& .slick-slider': {
            width: slickSliderWidth,
          },
        },
      }}
      open={true}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={isLarge === true ? classes.bigDialogPopup : classes.dialogPopup}
    >
      <DialogContent className={classes.dialogContent}>
        <Box style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', top: '16px' }}>
          <Typography
            className={classes.dialogTitle}
            sx={{ textAlign: 'center' }}
          >{name}</Typography>
          <Box style={{ width: '60px', display: 'flex', height: '23px', flexDirection: 'row', justifyContent: 'space-between', marginRight: '16px' }} >
            {isLarge === true ?
              <img width={14} height={14} src={scaledownIcon} alt={''} style={{ marginRight: 0, marginTop: '3px', cursor: 'pointer' }} onClick={() => { setIsLarge(false); }} />
              :
              <img width={14} height={14} src={expandIcon} alt={''} style={{ marginRight: 0, marginTop: '3px', cursor: 'pointer' }} onClick={() => { setIsLarge(true); }} />
            }
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              style={{ marginLeft: '0px' }}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Box>

        </Box>
        <Box style={{ width: '100%', marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Box style={{ width: leftItemWidth }}>

            {hasAboutData === true &&
              <Box sx={{ width: leftItemWidth }}>
                <Typography
                  className={isShownAbout === true ? classes.apg_selectedSubText : classes.apg_SubText}
                  sx={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => { setIsShownAbout(true); }}
                >
                  About
              </Typography>
                <Divider sx={{ width: leftDividerWidth }} style={{ marginTop: '8px', height: '1px', marginBottom: 0, backgroundColor: '#E4E9F2' }}></Divider>
              </Box>
            }

            {mediaContentData &&
              <Box sx={{ width: leftItemWidth }}>
                <Typography
                  className={classes.apg_selectedSubText}
                  sx={{ textAlign: 'left' }}
                >
                  Media
              </Typography>
                <Divider sx={{ width: leftDividerWidth }} style={{ marginTop: '8px', height: '1px', marginBottom: 0, backgroundColor: '#E4E9F2' }}></Divider>
              </Box>
            }

            {mediaContentData &&
              mediaContentData.map((mediaContent: any, i: number) => (
                <Box key={i}>
                  <Box sx={{ mt: 1, width: leftItemWidth }}>
                    <Typography
                      // paragraph
                      className={selectedPageIndex === i ? classes.apg_selectedSubText : classes.apg_SubText}
                      onClick={() => { setSlectectedPageIndex(i); setIsShownAbout(false); (graphRef.current as any).slickGoTo(i); }}
                      sx={{ textAlign: 'center', cursor: 'pointer' }}
                    >
                      {mediaContent.title}
                    </Typography>
                    <Divider sx={{ width: leftDividerWidth }} style={{ marginTop: '8px', height: '1px', marginBottom: 0, backgroundColor: '#E4E9F2' }}></Divider>
                  </Box>
                </Box>
              ))}
          </Box>

          <Box sx={{ width: rightBoxWidth, height: 'auto', minHeight: videoHeight, marginRight: '16px' }}  >
            {isShownAbout == true && hasAboutData === true ?
              renderAbout()
              :
              mediaContentData &&
              <Slider ref={graphRef}  {...settings}>
                {renderMediaContent()}
              </Slider>
            }
          </Box>
        </Box>
      </DialogContent>
    </Dialog >
  );
};

export default AssessmentMediaContent;
