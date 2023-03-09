import React from 'react';
import { useProductScreenStyles } from './ProductScreenStyles';
import Box from '@mui/material/Box';
import DummyRedered from '../../components/common/DummyRedered';
import Back from '../../components/common/Back';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import { screenTitle } from '../../core/constants';

const SupplementsScreen = () => {
  const classes = useProductScreenStyles();

  return (
    <Box>
      <Back componentTitle={screenTitle.SupplementsPage} />
      <Box className={classes.page_Content}>
        <DummyRedered
          renderedText="Coming soon"
          renderedImageIcon={<MedicationLiquidOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default SupplementsScreen;
