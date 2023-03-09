import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHelpItemViewStyles } from './HelpItemViewStyles';
import HelpMediaDialog from './HelpMediaDialog';

type Props = {
  data?: any,
  gotoPage?: any;
};

const HelpItemView = ({
  data,
  gotoPage
}: Props) => {
  const classes = useHelpItemViewStyles();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handlePlay = () => {
    setOpenDialog(true);
  };

  const poster = `https://customer-okr317df89fanugr.cloudflarestream.com/${String(data.id)}/thumbnails/thumbnail.jpg?time=1s&height=600`;

  return (
    <Box
      className={`${classes.tilesViewCardBox}`}
      style={{
        borderRadius: '10px',
      }}

      sx={{
        height: '100%',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        },
        '& iframe': {
          cursor: 'pointer'
        }
      }}
    >
      <Box className={classes.cardBox}>
        <Box className={classes.headerBox}>

          <Box className={classes.titleBox} >
            <Typography
              paragraph
              className={classes.title}
            >
              {data.title}
            </Typography>
          </Box>
        </Box>
        <Box style={{ borderRadius: '10px', cursor: 'pointer', justifyContent: 'center', display: 'flex' }}
          onClick={() => { handlePlay(); }}
        >
          {/* <Stream streamRef={videoRef as any} controls={true} volume={0.1} src={String(data.id)}
            onLoadedData={() => {
              (videoRef.current as any).volume = 0.1;
            }}
            onPlay={handlePlay}

            responsive={true}
          /> */}
          <img src={poster} style={{ width: '100%', minHeight: '150px' }} />

        </Box>
        <Box className={classes.desriptionBox} onClick={() => { gotoPage(); }} >
          <Typography
            paragraph
            className={classes.description}
          >
            {data.description}
          </Typography>
        </Box>



        {/* <Box className={classes.providerIconBox}>
          <Tooltip title={data.providerName}>
            <img style={{ marginLeft: 16 }} width={20} height={20} src={data.logo} alt={''} />
          </Tooltip>
        </Box> */}

        {/* <Box className={classes.time}>
          <Typography
            paragraph
            className={classes.date}
          >
            {DateFormatterHelper.formatDateTime(data.startTime)}
          </Typography>
        </Box> */}


      </Box>
      {openDialog === true &&
        <HelpMediaDialog videoId={data.id} handleClose={() => { setOpenDialog(false); }} />
      }
    </Box >
  );
};

export default HelpItemView;
