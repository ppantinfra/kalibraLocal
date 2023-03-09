import React from 'react';
import BoxHeader from './box/BoxHeader';
import Grid from '@mui/material/Grid';
import Picture from './picture/Picture';
// import BoxFooter from "../box/BoxFooter";

const PictureLayout = ({ outlet }) => {
  return (
    <>
      <Grid
        container
        columns={12}
        alignItems={'center'}
        className={'gridContainerbelow950_pictureLayout gridContainerbelow950_pictureLayout_parent pictureLayout'}
      >
        <Grid item lg={5} md={5} xs={5}>
          <BoxHeader />
          {outlet}
        </Grid>
        <Grid
          item
          lg={7}
          md={7}
          xs={7}
          sx={{ background: '#101426' }}
          className="gridItembelow950_pictureLayout"
        >
          <Picture />
        </Grid>
      </Grid>
      {/* <BoxFooter /> */}
    </>
  );
};

export default PictureLayout;
