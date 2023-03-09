import React from 'react';
import Box from '@mui/material/Box';
import { useHelpStyles } from './HelpStyles';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HelpItemView from './HelpItemView';
import { RoutesPath } from '../../core/constants';

const Help = ({ gotoScreen }) => {
  const theme = useTheme();
  const match700 = useMediaQuery(theme.breakpoints.down(700));
  const match1300 = useMediaQuery(theme.breakpoints.down(1300));
  const classes = useHelpStyles();

  const helpData = [
    { id: '569c792d69f019549117fb2f17fcc3a6', title: '5 min walk-through', description: 'Overview', route: RoutesPath.CLIENTSOVERVIEWROUTE },
    { id: 'edaa2fc6278be149890accea11d91cf6', title: 'Assessments walk-through', description: 'Assessments', route: RoutesPath.ASSESSMENT },
    { id: '52be10e5abf43aa166b6c7c600e9400e', title: 'Biomarker analysis walk-through', description: 'Biomarkers', route: RoutesPath.BLOODWORK },
    { id: 'abf0da2b033eaa936148705883528314', title: 'Wearable walk-through', description: 'Wearables', route: RoutesPath.WEARABLES },

  ];

  return (
    <React.Fragment>
      <Box className={classes._container}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          columns={12}
          mt={'16px'}
          sx={{ marginTop: match1300 ? '-40px' : '-40px' }}
          className={match700 ? 'gridbelow700_tiles_responsive' : ''}
        >
          {helpData.map((data: any, index: any) => (
            <Grid item lg={3} md={4} xs={4} key={index} style={{ alignItems: 'stretch' }}>
              <HelpItemView data={data} gotoPage={() => { gotoScreen(data.route); }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Help;
