import React, { useEffect, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useAssessmentListStyles } from '../assessments/AssessmentListStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import { Button } from '@mui/material';
import { RoutesPath as route } from '../../core/constants';
import upArrowIconIg from '../../assets/images/upArrowIcon.svg';
import downArrowIconIg from '../../assets/images/downArrowIcon.svg';
import { CommonContext, CommonContextType } from '../../core/context';
import { ConfirmDialog } from '../clients/partials';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import TooltipHelper from '../../core/helper/TooltipHelper';



type IIndividualAssessmentsProps = {
  assessmentList: Array<any>;
  disableHeaderAndPagination?: boolean;
  showViewMoreButton?: boolean,
  sortHandler?: any
  deleteAssessmentHandler?: any
};

const IndividualAssessments = ({
  assessmentList,
  disableHeaderAndPagination,
  showViewMoreButton,
  sortHandler,
  deleteAssessmentHandler
}: IIndividualAssessmentsProps) => {
  const { loggedInUserData } = useContext(CommonContext) as CommonContextType;
  const userData = JSON.parse(loggedInUserData);
  const ROWS_PER_PAGE = 10;
  const navigate = useNavigate();
  const classes = useAssessmentListStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE);
  const [selectedAssessment, setSelectedAssessment] = React.useState<any>(''); //used for sending assesment id in case of edit view open on drawer
  const [sortClickedArray, setSortClickedArray] = React.useState<string[]>([]);
  const [showDeletePopup, setShowDeletePopup] = React.useState(false);


  useEffect(() => {
    setPage(0);
    setRowsPerPage(ROWS_PER_PAGE);
  }, [assessmentList]);

  const editAssessmentReport = (assessmentId: any) => {
    navigate(`/${route.ASSESSMENT}/${route.EDITASSESSMENT}`, {
      state: {
        assessmentId: assessmentId,
        isEdit: true
      }
    });
  };

  const viewAssessmentReport = (assessmentId: any) => {
    navigate(`/${route.ASSESSMENT}/${route.VIEWASSESSMENT}`, {
      state: {
        reportId: assessmentId,
      }
    });
  };
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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

  const checkDeletePermission = (coachId: string) => {
    if (coachId && coachId === userData.cognitoId) {
      return true;
    }
    return false;
  };

  return (
    <React.Fragment>
      {/* <AssessmentAddUpdateScreen
            userIdProp={clientId}
            componentOpenOnDialog={true}
            reportIdProp={selectedAssessment}
          /> */}

      {/* <ViewAssessmentDetailsScreen
            reportIdProp={selectedAssessment}
            componentOpenOnDialog={true}
            clientId={clientId}
          /> */}

      <Box className={classes.assessmentList_content}>
        {assessmentList?.length > 0 ? (
          <React.Fragment>
            <div className={!disableHeaderAndPagination ? classes.cb_card : ''}>
              <TableContainer className={`${classes.mui_tableContainer}`}>
                <Table className={classes.mui_table} size="small">
                  <TableBody>
                    {!disableHeaderAndPagination && <TableRow className={classes.tableBodyRow}>
                      <TableCell className={classes.headerText}>
                        <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                          <strong>Assessment Type</strong>
                          <Box className={classes.sortIcons}>
                            <img
                              src={upArrowIconIg}
                              alt="upArrow"
                              className={sortClickedArray.includes('assessmentTypeUp') ? 'greenIcon' : 'greyIcon'}
                              onClick={() => sortClick('assessmentType', 'asc')}
                            />
                            <img
                              src={downArrowIconIg}
                              alt="downArrow"
                              className={sortClickedArray.includes('assessmentTypeDown') ? 'greenIcon' : 'greyIcon'}
                              onClick={() => sortClick('assessmentType', 'desc')}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell className={classes.assessmentText}>
                        <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                          <strong>Date & Time</strong>
                          <Box className={classes.sortIcons}>
                            <img
                              src={upArrowIconIg}
                              alt="upArrow"
                              className={sortClickedArray.includes('measuredDateUp') ? 'greenIcon' : 'greyIcon'}
                              onClick={() => sortClick('measuredDate', 'asc')}
                            />
                            <img
                              src={downArrowIconIg}
                              alt="downArrow"
                              className={sortClickedArray.includes('measuredDateDown') ? 'greenIcon' : 'greyIcon'}
                              onClick={() => sortClick('measuredDate', 'desc')}
                            />
                          </Box>
                        </Box>

                      </TableCell>
                      {!disableHeaderAndPagination &&
                        <TableCell className={classes.assessmentText}>
                          <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                            <strong>Assessed By</strong>
                            <Box className={classes.sortIcons}>
                              <img
                                src={upArrowIconIg}
                                alt="upArrow"
                                className={sortClickedArray.includes('coachNameUp') ? 'greenIcon' : 'greyIcon'}
                                onClick={() => sortClick('coachName', 'asc')}
                              />
                              <img
                                src={downArrowIconIg}
                                alt="downArrow"
                                className={sortClickedArray.includes('coachNameDown') ? 'greenIcon' : 'greyIcon'}
                                onClick={() => sortClick('coachName', 'desc')}
                              />
                            </Box>
                          </Box>
                        </TableCell>
                      }
                      <TableCell className={`${classes.assessmentText} ${classes.actionCell}`}>
                        <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                          <strong>View</strong>
                        </Box>

                      </TableCell>
                      <TableCell className={`${classes.assessmentText} ${classes.actionCell}`}>
                        <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                          <strong>Edit</strong>
                        </Box>
                      </TableCell>
                      <TableCell className={`${classes.assessmentText} ${classes.actionCell}`}>
                        <Box sx={{ display: 'fex', flexDirection: 'row', alignItems: 'center' }}>
                          <strong>Delete</strong>
                        </Box>
                      </TableCell>
                    </TableRow>}

                    {(rowsPerPage > 0 && !disableHeaderAndPagination
                      ? assessmentList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : assessmentList
                    ).map((assessment: any, index: any) => {
                      const canDelete = checkDeletePermission(assessment.coachId);
                      return (
                        <React.Fragment key={index}>
                          <TableRow className={classes.tableBodyRow}>
                            <TableCell className={classes.assessmentText}>
                              <span className={classes.assInfo}>
                                <Typography
                                  onClick={() => viewAssessmentReport(assessment.id)}
                                  className={classes.assName}
                                >
                                  {assessment.assessmentName}
                                </Typography>
                              </span>
                            </TableCell>
                            <TableCell className={!disableHeaderAndPagination ? `${classes.tableBodyCell} ${classes.assessmentText}` : `${classes.tableBodyCell} ${classes.assessmentText} ${classes.assessmentDate}`}>
                              {DateFormatterHelper.formatDateTime(assessment.measuredDate)}
                            </TableCell>
                            {!disableHeaderAndPagination &&
                              <TableCell className={classes.assessmentText}>
                                {assessment.coachName}
                              </TableCell>
                            }
                            {!disableHeaderAndPagination && <TableCell>
                              <Box
                                className={classes.assActionLinkBox}
                                onClick={() => viewAssessmentReport(assessment.id)}
                              >
                                <TooltipHelper title={`View ${assessment.assessmentName} Assessment`} placement="top">
                                  <VisibilityOutlinedIcon className={`${classes.modeEditIcon} animatedIcon`} />
                                </TooltipHelper>
                              </Box>
                            </TableCell>}

                            <TableCell className={classes.assessmentText}>
                              <Box
                                className={classes.assActionLinkBox}
                                onClick={() => editAssessmentReport(assessment.id)}
                              >
                                <TooltipHelper title={`Edit ${assessment.assessmentName} Assessment`} placement="top">
                                  <ModeEditOutlineOutlinedIcon className={`${classes.modeEditIcon} animatedIcon`} />
                                </TooltipHelper>
                              </Box>
                            </TableCell>
                            <TableCell className={classes.assessmentText}>
                              {/* <Box
                              className={classes.assActionLinkBox}
                              onClick={() => editAssessmentReport(assessment.id)}
                            >
                              <TooltipHelper title={`Delete ${assessment.assessmentName} Assessment`} placement="top">
                                <DeleteOutlineIcon className={`${classes.modeEditIcon} animatedRedIcon`} />
                              </TooltipHelper>
                            </Box> */}
                              {/* <Button disabled={checkDeletePermission(assessment.coachId)}> */}
                              <TooltipHelper title={`Delete ${assessment.assessmentName} Assessment`} placement="top">
                                <span
                                  className={canDelete === true ? `${classes.client} animatedRedIcon` : classes.disabled}
                                  onClick={() => {
                                    if (canDelete === true) {
                                      setSelectedAssessment(assessment);
                                      setShowDeletePopup(true);
                                    }
                                  }
                                  }
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
                                      fill={canDelete === true ? '#FF708D' : '#E4E9F2'}
                                    />
                                  </svg>
                                </span>
                              </TooltipHelper>
                              {/* </Button> */}
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              {assessmentList && assessmentList.length > ROWS_PER_PAGE && !disableHeaderAndPagination && (
                <TablePagination
                  rowsPerPageOptions={[10, 20, 30]}
                  component="div"
                  count={assessmentList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  className={classes.paginationBox}
                  nextIconButtonProps={{}}
                  backIconButtonProps={{}}
                />
              )}

              {showViewMoreButton && (
                <Button className={classes.moreBtn} onClick={() => { navigate(`/${route.ASSESSMENT}`); }}>View More </Button>
              )}
            </div>
          </React.Fragment>
        ) : (
          <Box className={classes.noAssessmentBox}>
            <Typography>No assessment was found matching your search criteria</Typography>
          </Box>
        )}
      </Box>
      <ConfirmDialog
        setShowConfirmPopup={setShowDeletePopup}
        isOpen={showDeletePopup}
        caption="Delete Assessment?"
        description={'Are you sure you want to delete this assessment?'}
        confirmButtonLabel="Yes"
        cancelButtonLabel="No"
        confirmButtonHandler={() => { deleteAssessmentHandler(selectedAssessment.id); }}
        cancelButtonHandler={() => {
          setShowDeletePopup(false);
        }}
      />
    </React.Fragment>
  );
};

export default IndividualAssessments;

