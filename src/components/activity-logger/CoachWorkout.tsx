import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { CoachWorkoutStyles } from './CoachWorkoutStyles';
import wahoo from '../../assets/images/wahoo.png';
import TooltipHelper from '../../core/helper/TooltipHelper';




const CoachWorkout = () => {
  const classes = CoachWorkoutStyles();
  return (
    <React.Fragment>
      <Box className={`${classes.cb_card} move_cb_card`}>
        <Box>
          <Typography paragraph className={classes.cb_card_title}>
            Last 6 Workouts
          </Typography>
        </Box>

        <TableContainer
          sx={{ maxHeight: 500 }}
          className={classes.mui_tableContainer}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
            className={classes.mui_table}
          >
            <TableBody
              className={`${classes.tableBody_coach} tableBody_coach tableBody_move`}
            >
              {/* Static Rows  */}
              <TableRow hover tabIndex={-1} className={classes.tableBodyRow}>
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper title="Running from wahoo" placement="top">
                    <span>[R, 74min, 430Kcal, 78bpm AHR, 44.32%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                className={classes.tableBodyRow}
              >
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper
                    title="TICKR_OFFLINE from Wahoo"
                    placement="top"
                  >
                    <span> [T, 72min, 713Kcal, 113bpm AHR, 64.20%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                className={classes.tableBodyRow}
              >
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper title="Running from wahoo" placement="top">
                    <span>[R, 53min, 611Kcal, 124bpm AHR, 70.45%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                className={classes.tableBodyRow}
              >
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper title="Running from wahoo" placement="top">
                    <span>[R, 114min, 1,213Kcal, 125bpm AHR, 71.02%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                className={classes.tableBodyRow}
              >
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper
                    title="TICKR_OFFLINE from Wahoo"
                    placement="top"
                  >
                    <span>[T, 71min, 976Kcal, 138bpm AHR, 78.41%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                className={classes.tableBodyRow}
              >
                <TableCell className={classes.tableBodyCell}>
                  <Box className={classes.tableBodyCell_imgIcon}>
                    <img src={wahoo} alt="wahoo" />
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <TooltipHelper title="Running from wahoo" placement="top">
                    <span>[R, 42min, 572Kcal, 135bpm AHR, 76.70%]</span>
                  </TooltipHelper>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
};

export default CoachWorkout;
