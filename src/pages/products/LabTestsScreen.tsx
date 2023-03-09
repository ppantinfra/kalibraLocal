import React from 'react';
import { useProductScreenStyles } from './ProductScreenStyles';
import Box from '@mui/material/Box';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DummyRedered from '../../components/common/DummyRedered';
import Back from '../../components/common/Back';
import { screenTitle } from '../../core/constants';

const LabTestsScreen = () => {
  const classes = useProductScreenStyles();

  return (
    <Box>
      <Back componentTitle={screenTitle.LabTestsPage} />
      <Box className={classes.page_Content}>
        <DummyRedered
          renderedText="Coming Soon"
          renderedImageIcon={<ScienceOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default LabTestsScreen;
