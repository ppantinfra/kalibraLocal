import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkScoreStyles } from './BloodworkScoreStyles';
import Grid from '@mui/material/Grid';

const BloodworkScores = () => {
  const classes = useBloodworkScoreStyles();
  return (
    <React.Fragment>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={20}
        mt={1}
        px={3}
        py={2}
        className={`${classes.tilesBox} tilesBox bloodScore_responsive`}
      >
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareRed} tbSquare`}>
            <Typography className={classes.tbs_heading}>METABOLISM</Typography>
            <Typography className={classes.tbs_value}>0.3</Typography>
            <Typography className={classes.tbs_status}>Needs Attention</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareRed} tbSquare`}>
            <Typography className={classes.tbs_heading}>ELECTROLYTES</Typography>
            <Typography className={classes.tbs_value}>2.4</Typography>
            <Typography className={classes.tbs_status}>Needs Attention</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareRed} tbSquare`}>
            <Typography className={classes.tbs_heading}>WBC</Typography>
            <Typography className={classes.tbs_value}>4.3</Typography>
            <Typography className={classes.tbs_status}>Needs Attention</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareYellow} tbSquare`}>
            <Typography className={classes.tbs_heading}>CHOLESTEROL</Typography>
            <Typography className={classes.tbs_value}>6.8</Typography>
            <Typography className={classes.tbs_status}>Looking Good</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareYellow} tbSquare`}>
            <Typography className={classes.tbs_heading}>PANCREAS</Typography>
            <Typography className={classes.tbs_value}>8.5</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareYellow} tbSquare`}>
            <Typography className={classes.tbs_heading}>KIDNEY</Typography>
            <Typography className={classes.tbs_value}>8.0</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareGreen} tbSquare`}>
            <Typography className={classes.tbs_heading}>RBC</Typography>
            <Typography className={classes.tbs_value}>9.9</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareGreen} tbSquare`}>
            <Typography className={classes.tbs_heading}>LIVER</Typography>
            <Typography className={classes.tbs_value}>10.0</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareGreen} tbSquare`}>
            <Typography className={classes.tbs_heading}>MINERALS</Typography>
            <Typography className={classes.tbs_value}>10.0</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={5} xs={5}>
          <Box className={`${classes.tbSquare} ${classes.tbSquareGreen} tbSquare`}>
            <Typography className={classes.tbs_heading}>INFLAMMATION</Typography>
            <Typography className={classes.tbs_value}>10.0</Typography>
            <Typography className={classes.tbs_status}>Excellent!</Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BloodworkScores;
