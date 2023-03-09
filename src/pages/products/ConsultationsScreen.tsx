import React from 'react';
import { useProductScreenStyles } from './ProductScreenStyles';
import Box from '@mui/material/Box';
import DummyRedered from '../../components/common/DummyRedered';
import Back from '../../components/common/Back';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { screenTitle } from '../../core/constants';

const ConsultationsScreen = () => {
  const classes = useProductScreenStyles();

  return (
    <Box>
      <Back componentTitle={screenTitle.ConsultationsPage} />
      <Box className={classes.page_Content}>
        <DummyRedered
          renderedText="Coming Soon"
          renderedImageIcon={<MedicalInformationOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default ConsultationsScreen;
