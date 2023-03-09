import React from 'react';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FileUploader } from 'react-drag-drop-files';
import pictureImgIcon from '../../assets/images/pictureIcon.svg';
import Grid from '@mui/material/Grid';

type IAddPictureProps = {
  fileTypes?: Array<any>;
  handleChangeFrontImage?: any;
  handleChangeBackImage?: any;
  handleChangeSideImage?: any;
  frontImagePreviewUrl?: any;
  backImagePreviewUrl?: any;
  sideImagePreviewUrl?: any;
  // frontFile?: any;
  // backFile?: any;
  // sideFile?: any;
  frontFileName?: any;
  sideFileName?: any;
  backFileName?: any;
  // frontFileSize?: any;
  // sideFileSize?: any;
  // backFileSize?: any;
};

const AddPictureForm = ({
  fileTypes,
  handleChangeFrontImage,
  handleChangeBackImage,
  handleChangeSideImage,
  frontImagePreviewUrl,
  backImagePreviewUrl,
  sideImagePreviewUrl,
  // frontFile,
  // backFile,
  // sideFile,
  frontFileName,
  sideFileName,
  backFileName
}: // frontFileSize,
  // sideFileSize,
  // backFileSize,
  IAddPictureProps) => {
  const classes = useBodyCompositionScreenStyles();
  const [frontFileSizeError, setFrontFileSizeError] = React.useState<any>();
  const [sideFileSizeError, setSideFileSizeError] = React.useState<any>();
  const [backFileSizeError, setBackFileSizeError] = React.useState<any>();

  const renderChildren = () => {
    return (
      <Box className={classes.uploaderBox}>
        <Box className={classes.ub_imgBox}>
          <img src={pictureImgIcon} alt="" />
        </Box>
        <Box className={classes.ub_dragAndDropTextBox}>
          <Typography className={classes.ub_dragAndDropText}>
            Drag & drop your file here or <span style={{ color: '#33B7B8', cursor: 'pointer' }}>Browse</span>
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={classes.addMeasurementForm}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        // columnSpacing={{ xs: 2, sm: 8, md: 20 }}
        columns={12}
        mt={1}
        className={'grid_BodyCompAddPicture_responsive_mob'}
      >
        <Grid item lg={4} md={6} xs={6}>
          <Box className={`${classes.frontPictureBox} amfpb_item`}>
            <Box className={classes.amfpbi_headerBox}>
              <Typography className={classes.pictureHeading}>Front</Typography>
            </Box>
            <Box>
              {frontImagePreviewUrl ? (
                <>
                  <Box className={classes.amfbpipb_previewImage}>
                    <img src={frontImagePreviewUrl} alt="preview" />
                  </Box>

                  <Typography className={classes.pictureFooter}>
                    {frontFileName.split('.').slice(0, -1).join('.')}
                  </Typography>
                </>
              ) : (
                <Box className={classes.amfpbi_pictureBox}>
                  <FileUploader
                    multiple={false}
                    handleChange={handleChangeFrontImage}
                    name="frntFile"
                    types={fileTypes}
                    maxSize={1}
                    onTypeError={(err) => {
                      console.error(err);
                      /*console.log('onTypeError', err)*/
                    }}
                    onSizeError={(file) => {
                      // console.log(file);
                      setFrontFileSizeError(file);
                    }}
                  >
                    {renderChildren()}
                  </FileUploader>
                </Box>
              )}
            </Box>

            {frontFileSizeError && <span style={{ color: 'red' }}>{frontFileSizeError}</span>}
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={6}>
          <Box className={`${classes.sidePictureBox} amfpb_item`}>
            <Box className={classes.amfpbi_headerBox}>
              <Typography className={classes.pictureHeading}>Side</Typography>
            </Box>
            <Box>
              {sideImagePreviewUrl ? (
                <>
                  <Box className={classes.amfbpipb_previewImage}>
                    <img src={sideImagePreviewUrl} alt="preview" />
                  </Box>
                  <Typography className={classes.pictureFooter}>
                    {sideFileName.split('.').slice(0, -1).join('.')}
                  </Typography>
                </>
              ) : (
                <Box className={classes.amfpbi_pictureBox}>
                  <FileUploader
                    multiple={false}
                    handleChange={handleChangeSideImage}
                    name="sideFile"
                    types={fileTypes}
                    maxSize={1}
                    onTypeError={(err) => {
                      console.error(err);
                      /*console.log('onTypeError', err)*/
                    }}
                    onSizeError={(file) => {
                      // console.log(file);
                      setSideFileSizeError(file);
                    }}
                  >
                    {renderChildren()}
                  </FileUploader>
                </Box>
              )}
            </Box>
            {sideFileSizeError && <span style={{ color: 'red' }}>{sideFileSizeError}</span>}
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={6}>
          <Box className={`${classes.backPictureBox} amfpb_item`}>
            <Box className={classes.amfpbi_headerBox}>
              <Typography className={classes.pictureHeading}>Back</Typography>
            </Box>
            <Box>
              {backImagePreviewUrl ? (
                <>
                  <Box className={classes.amfbpipb_previewImage}>
                    <img src={backImagePreviewUrl} alt="preview" />
                  </Box>
                  <Typography className={classes.pictureFooter}>
                    {backFileName.split('.').slice(0, -1).join('.')}
                  </Typography>
                </>
              ) : (
                <Box className={classes.amfpbi_pictureBox}>
                  <FileUploader
                    multiple={false}
                    handleChange={handleChangeBackImage}
                    name="backFile"
                    types={fileTypes}
                    maxSize={1}
                    onTypeError={(err) => {
                      console.error(err);
                      /*console.log('onTypeError', err)*/
                    }}
                    onSizeError={(file) => {
                      // console.log(file);
                      setBackFileSizeError(file);
                    }}
                  >
                    {renderChildren()}
                  </FileUploader>
                </Box>
              )}
            </Box>
            {backFileSizeError && <span style={{ color: 'red' }}>{backFileSizeError}</span>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPictureForm;
