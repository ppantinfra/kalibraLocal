import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TabButtons = ({
  tabListItems,
  handleTabsChange,
  tabValue,
  tabStyles,
  classes,
}) => {
  return (
    <>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleTabsChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
            classes={{
              indicator: classes.tabIndicator,
            }}
          >
            {tabListItems.map((item: any, index: number) => (
              <Tab
                key={index}
                value={item.value}
                label={item.label}
                sx={tabStyles}
              /> 
            ))}
          </TabList>
        </Box>
      </TabContext>
    </>
  );
};

export default TabButtons;
