import React from 'react';
import Box from '@mui/material/Box';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import BodyCompNavigatedHeader from './BodyCompNavigatedHeader';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Body3D from './Body3D';

type IProps = {
  handleAdd?: () => void;
  handleCompare?: () => void;
  headerLabel?: string;
  dateText?: any;
  gridColumn1?: number;
  gridColumn2?: number;
  deletePicture?: () => void;
  iconClass?: string;
};

const Pictures = ({
  handleAdd,
  handleCompare,
  headerLabel,
  dateText,
  gridColumn1,
  gridColumn2,
  deletePicture,
  iconClass
}: IProps) => {
  const classes = useBodyCompositionScreenStyles();

  return (
    <React.Fragment>
      <Box className={`${classes.bc_rightSidePictureBox} bc_mainBoxItem bc_rightSidePictureBox`}>
        <BodyCompNavigatedHeader
          handleAdd={handleAdd}
          handleCompare={handleCompare}
          headerLabel={headerLabel}
          dateText={dateText}
          gridColumn1={gridColumn1}
          gridColumn2={gridColumn2}
          iconClass={iconClass}
          isPicturesHeader={true}
        />

        <Grid rowSpacing={1} sx={{ flexDirection: 'column' }} className={'grid640_BodyCompPicture_responsive_mob'}>
          <Grid item>
            <Box className={classes.bcrspb_pictureBox}>
              <Box className={classes.bcrspbpb_headerBox}></Box>

              <Box className={classes.bcrspb_previewImage}>
                <Body3D />
                <Link component="button" className={classes.closeIconBox} onClick={deletePicture}></Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Pictures;
