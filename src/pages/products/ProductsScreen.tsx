import React from 'react';
import { useProductScreenStyles } from './ProductScreenStyles';
import Box from '@mui/material/Box';
import DummyRedered from '../../components/common/DummyRedered';
import productsIcon from '../../assets/images/navigations/products-green.svg';
import { Chip } from '@mui/material';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import Back from '../../components/common/Back';
import { useNavigate } from 'react-router-dom';
import { RoutesPath as route, screenTitle } from '../../core/constants';

const ProductsScreen = () => {
  const classes = useProductScreenStyles();
  const navigate = useNavigate();
  const goToConsultations = () => {
    navigate(`/${route.CONSULTATIONS}`);
  };
  const goToSupplements = () => {
    navigate(`/${route.SUPLEMENTS}`);
  };
  const goToLabsTests = () => {
    navigate(`/${route.LABSTESTS}`);
  };

  return (
    <Box>
      <Back componentTitle={screenTitle.ProductsPage} disableBackButton={true} />
      <Box sx={{ display: 'flex', columnGap: '10px', flexWrap: 'wrap', rowGap: '10px' }}>
        <Chip
          className={classes.productsChips}
          avatar={<MedicalInformationOutlinedIcon style={{ width: 14, color: '#fff' }} />}
          label={'Consultations'}
          onClick={goToConsultations}
        />
        <Chip
          className={classes.productsChips}
          avatar={<MedicationLiquidOutlinedIcon style={{ width: 14, color: '#fff' }} />}
          label={'Supplements'}
          onClick={goToSupplements}
        />
        <Chip
          className={classes.productsChips}
          avatar={<ScienceOutlinedIcon style={{ width: 14, color: '#fff' }} />}
          label={'Lab Tests'}
          onClick={goToLabsTests}
        />
      </Box>
      <Box className={classes.page_Content}>
        <DummyRedered renderedText="Coming Soon" renderedImageIcon={<img src={productsIcon} />} />
      </Box>
    </Box>
  );
};

export default ProductsScreen;
