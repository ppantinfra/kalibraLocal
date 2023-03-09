import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import { makeStyles } from '@mui/styles';
import DeleteClient from '../../components/organization/DeleteClient';

export const useStyles = makeStyles(
  {
    page_Content: {},
    _headingSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      justifyContent: 'space-between',
      '@media (max-width: 768px)': {
        marginTop: '12px'
      }
    }
  },
  { index: 1 }
);

const DeletePractionerScreen = () => {
  const location = useLocation();
  const classes = useStyles();
  const [stateData, setStateData] = useState<any>('');

  useEffect(() => {
    const states: any = location?.state;
    if (states) {
      setStateData(states);
    }

  }, [location?.state]);
  return (
    <Box className={classes.page_Content}>
      <Box className={classes._headingSection}>
        <Back componentTitle={'Delete Client'} />
      </Box>
      <DeleteClient usersList={stateData?.allUsers} oldUserId={stateData?.selectedUserId} oldUserName={stateData?.selectedUserName} />
    </Box>
  );
};

export default DeletePractionerScreen;