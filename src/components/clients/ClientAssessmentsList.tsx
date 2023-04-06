import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useDashboardClientListStyles } from './DashboardClientListStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { StyledEngineProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import upArrowIconIg from '../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../assets/images/downArrowIcon.svg';
import { RoutesPath as route } from '../../core/constants';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';

const ClientAssessmentsList = ({ assessments, clientId, sortHandler }) => {
  const classes = useDashboardClientListStyles();
  const navigate = useNavigate();
  const [sortClickedArray, setSortClickedArray] = useState<string[]>([]);

  const viewAssessmentReport = (assessmentReport: any) => {
    navigate(`/${route.ASSESSMENT}/${route.VIEWASSESSMENT}`, {
      state: {
        reportId: assessmentReport?.assessmentId,
        clientId: clientId,
        isInactiveClient: true
      }
    });
  };

  const sortClick = (property: string, type: string, objKey?: string) => {
    const array: string[] = [];
    const propertyName = property ? property : objKey;
    let sortButtonName: string;
    if (type === 'asc') {
      sortButtonName = propertyName + 'Up';
    } else {
      sortButtonName = propertyName + 'Down';
    }
    array.push(sortButtonName);
    setSortClickedArray(array);
    sortHandler(property, type, objKey);
  };

  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <TableContainer component={Paper} className={classes.mui_tableContainer}>
          <Table
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="client table"
            className={`${classes.mui_table} ${classes.mui_table_assessmentList}`}
          >
            <TableHead>
              <TableRow>
                {/* Assessment Name */}
                <TableCell
                  style={{
                    maxWidth: 180
                  }}
                >
                  <Box
                    className={`${classes.tableHeadCellBox} ${classes.tableHeadFirstCellBox} `}
                    sx={{ marginLeft: '10px' }}
                  >
                    <Box className={`${classes.clientName}`}>Assessment Name</Box>
                    <Box className={classes.sortIcons}>
                      <img
                        src={upArrowIconIg}
                        alt="upArrow"
                        className={sortClickedArray.includes('assessmentNameUp') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('assessmentName', 'asc')}
                      />
                      <img
                        src={downArrowIconIg}
                        alt="downArrow"
                        className={sortClickedArray.includes('assessmentNameDown') ? 'greenIcon' : 'greyIcon'}
                        onClick={() => sortClick('assessmentName', 'desc')}
                      />
                    </Box>
                  </Box>
                </TableCell>
                {/* Completed on */}
                <TableCell
                  align="center"
                  style={{ minWidth: 200, textAlign: 'center' }}
                  className={`${classes.tableHeading}`}
                >
                  <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important' }}>
                    Completed on
                  </Typography>
                </TableCell>
                {/* View assessment action */}
                <TableCell style={{ minWidth: 91 }} className={classes.tableHeading}></TableCell>
                <TableCell style={{ minWidth: 91 }} />
                <TableCell style={{ minWidth: 91 }} />
                <TableCell style={{ minWidth: 91 }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {(assessments || []).map((assessment: any, index: any) => (
                <React.Fragment key={index}>
                  <TableRow className={classes.tableBodyRow} key={index}>
                    {/* Assessment Name */}
                    <TableCell className={classes.tableBodyCell}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          columnGap: '10px'
                        }}
                      >
                        <span className={classes.userInfo} onClick={() => viewAssessmentReport(assessment)}>
                          <Typography className={`${classes.userName} ${classes.assessmentName}`}>{assessment?.assessmentName}</Typography>
                        </span>
                      </Box>
                    </TableCell>
                    {/* Completed on */}
                    <TableCell align="center" style={{ minWidth: 91 }} className={classes.completedOn}>
                      <Typography sx={{ fontSize: '14px !important', fontWeight: '600 !important' }}>
                        {/* {moment(assessment?.completedOn).format('L, hh:mm A')} */}
                        {DateFormatterHelper.formatDate(assessment?.completedOn)}
                      </Typography>
                    </TableCell>

                    {/* View assessment action */}
                    <TableCell style={{ minWidth: 91 }}>
                      <Link className={classes.viewActionLink} onClick={() => viewAssessmentReport(assessment)}>
                        View
                      </Link>
                    </TableCell>
                    <TableCell style={{ minWidth: 91 }} />
                    <TableCell style={{ minWidth: 91 }} />
                    <TableCell style={{ minWidth: 91 }} />
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default ClientAssessmentsList;
