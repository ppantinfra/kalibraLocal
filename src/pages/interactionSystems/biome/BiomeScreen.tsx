import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
// import TabList from '@mui/lab/TabList';
// import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import GenomicsIcon from '../../../assets/images/table-icons/genome.png';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import Avatar from '@mui/material/Avatar';
import Biome from '../../../components/biome/Biome';
// import Genomic from '../../../components/genomics/genomic/Genomic';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../../core/context';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../core';

const useStyles = makeStyles(
  {
    _container: {
      marginTop: '10px',
      marginBottom: '10px'
    },
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: '#2B2F3B',
      textDecoration: 'none'
    },
    backtoClients: {
      display: 'flex',
      color: FontColor,
      fontFamily: FontFamily
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important'
    }
  },
  { index: 1 }
);

const BiomeScreen = () => {
  const classes = useStyles();
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  const onUserSelect = (slectedUserId: any) => {
    setSelectedUserId(slectedUserId);
  };

  return (
    <React.Fragment>
      <Back componentTitle={screenTitle.BiomePage} disableBackButton={true}/>
      <Box className={classes._container}>
        <ClientSearch selectedUserId={selectedUserId} userSelectHandler={onUserSelect} />
        {selectedUserId &&
          <Box>
            <Biome
            // userId={userId !== undefined ? userId : ''}
            />
          </Box>
        }
      </Box>
    </React.Fragment>
  );
};

export default BiomeScreen;
