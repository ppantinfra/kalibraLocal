import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { GenomicsScreenStyles } from './GenomicsScreenStyles';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
// import TabList from '@mui/lab/TabList';
// import Tab from '@mui/material/Tab';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import GenomicsIcon from '../../../assets/images/table-icons/genome.png';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import Avatar from '@mui/material/Avatar';
// import Biome from '../../../components/genomics/biome/Biome';
import Genomic from '../../../components/genomics/Genomic';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../../core/context';






const GenomicsScreen = () => {
  const classes = GenomicsScreenStyles();
  // const [genomicsValue, setGenomicsTabValue] = React.useState('genomic');
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  // const handleTabsChange = (
  //   event: React.SyntheticEvent,
  //   newTabValue: string
  // ) => {
  //   setGenomicsTabValue(newTabValue);
  // };
  const onUserSelect = (slectedUserId: any) => {
    setSelectedUserId(slectedUserId);
  };

  return (
    <React.Fragment>
      <Back componentTitle={screenTitle.GenomicsPage} disableBackButton={true}/>
      <Box className={classes._container}>
        <ClientSearch
          selectedUserId={selectedUserId}
          userSelectHandler={onUserSelect}
        />

        {selectedUserId && <Box>


          <Genomic /></Box>}

        {/* <TabContext value={genomicsValue}>
          <Box>
            <TabList
              onChange={handleTabsChange}
              textColor="secondary"
              TabIndicatorProps={{
                style: { background: 'transparent', transition: 'none' },
              }}
              aria-label="secondary tabs example"
              className={`${classes.mui_tablist} mui_tablist_top`}
            >
              <Tab
                value="genomic"
                label="Genomic"
                icon={
                  <Avatar
                    alt="genomic"
                    src={GenomicsIcon}
                    sx={{ width: 20, height: 20 }}
                  />
                }
                className={`${classes.mui_tabButton}`}
                // className={`${classes.mui_tabButtonMove}`}
                sx={{ flexDirection: 'row' }}
              />
              <Tab
                value="biome"
                label="Biome"
                icon={<PsychologyIcon className="tabIcon" />}
                className={`${classes.mui_tabButton} ${classes.mui_tabButton_biome}`}
            
              />
            </TabList>
            <TabPanel value={'genomic'}>
              <Genomic />
            </TabPanel>
            <TabPanel value={'biome'}>
              <Biome />
            </TabPanel>
          </Box>
        </TabContext> */}

      </Box>
    </React.Fragment>
  );
};

export default GenomicsScreen;
