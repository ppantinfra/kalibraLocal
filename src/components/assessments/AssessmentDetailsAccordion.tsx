import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { UserService } from '../../core';
import { useAssessmentDetailsAccordionStyles } from './AssessmentDetailsAccordionStyles';
import { SnackBarsToast, HookFormButton } from '../common/';
import { ColorHelper } from '../../core/helper/ColorHelper';
import AssessmentDetailsGraph from './AssessmentDetailGraph';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import johnPic from '../../assets/images/avatar.png';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';

type IProps = {
  reportId?: any;
  clientId?: string;
  componentOpenOnDialog?: boolean;
  editAssessmentHandler?: any
};

const AssessmentDetailsAccordion = ({
  reportId,
  clientId,
  componentOpenOnDialog,
  editAssessmentHandler
}: IProps) => {
  const classes = useAssessmentDetailsAccordionStyles();
  const [expandedAccordionIndex, setExpandedAccordionIndex] = React.useState<
    number | false
  >(0);
  //const [healthMarkerUserData, setHealthMarkerUserData] = useState<any>({});
  const [groups, setGroups] = useState<any>([{}]);
  const [graphChartDatas, setGraphChartDatas] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [assessmentData, setAssessmentData] = useState<any>(); // accordion 

  //Blood biomarker assessment case we are showing accordion, others case we are showing assessment directly
  const [assessmentAccordionList, SetAssessmentNonAccordionList] = useState<any>();
  const accordionList = ['Blood Biomarkers'];

  // let graphDatas: Array<any> = [];
  const graphDatas: Array<any> = React.useMemo(() => [], []);

  const getAssessmentDetailsView = React.useCallback(async () => {
    if (reportId) {
      await UserService.getAssessmentDetailsView(reportId, String(clientId))
        .then((res: any) => {
          // console.log('api response', res, res.error);

          if (res) {
            setLoading(true);
            // setassessmentDetailsView(res);
            //  setHealthMarkerUserData(res.user);
            setAssessmentData(res);

            const accordionGroupsWithData: any = [];
            //used for checking whether group have data then only accordion will show
            for (const group of res.groups) {
              accordionGroupsWithData.push(group);
            }

            setGroups(accordionGroupsWithData);
            setLoading(true);

            const tmpGroups: any = res.groups;
            const allGroupsInASingleArray: any = [];
            tmpGroups.forEach(async (group: any) => {
              const datas = group.data;
              datas.forEach(async (data: any) => {
                allGroupsInASingleArray.push(data);
                const graphData: any = [];
                const graphOneData: any = [];
                let total = 0;
                const categories: any = data.categories;
                const graphCategories: any = data.graphCategory[0];
                let count = 1;
                categories.map(async (category: any) => {
                  if (data.graphType !== 'None') {
                    const label = `x${count}Label`;
                    const countLabel = `x${count}`;

                    graphData.push({
                      minValue: category.minValue,
                      maxValue: category.maxValue,
                      range: category.maxValue - category.minValue,
                      color: ColorHelper.getBarColor(
                        category.color,
                        data.pillar !== undefined ? data.pillar : data.category
                      ),
                      label: `${graphCategories[label]}`,
                    });

                    total = total + graphCategories[countLabel];
                    count++;
                  }
                });

                graphOneData.label = data.type;
                graphOneData.unit = data.unit;
                graphOneData.total = total;
                graphOneData.point = data.value;
                graphOneData.visualParts = data.graphType !== 'None' ? graphData : [];
                graphDatas[data.id] = graphOneData;
              });
            });

            setGraphChartDatas(graphDatas);
            SetAssessmentNonAccordionList(allGroupsInASingleArray);
          } else {
            console.error(res);
            // setLoading(false);
            // setIsError(true);
            // setOpenSnackBar(true);
            // setSnackBarMessage(res);
          }
        })
        .catch((err: any) => {
          console.error(err);
          // setOpenSnackBar(true);
          // setSnackBarMessage(err);
        });
    }
  }, [reportId, clientId, graphDatas]);

  const navigate = useNavigate();

  useEffect(() => {
    getAssessmentDetailsView();
  }, [getAssessmentDetailsView]);

  useEffect(() => {
    getAssessmentDetailsView();
    /* eslint-disable */
  }, [reportId]);

  const handleAccordionChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordionIndex(isExpanded ? panel : false);
    };

  const hasAtleastOneComment = groups?.find((group) => group?.comment?.comment.length > 0) !== undefined;

  return (
    <React.Fragment>
      <SnackBarsToast
        openSnackBar={openSnackBar}
        snackBarMessage={snackBarMessage}
        isError={isError}
        setOpenSnackBar={setOpenSnackBar}
      />
      {loading === true && (
        <>
          <Box className={classes.pageContent}>
            <Box className={classes.assesmentTitle}>
              <Box className='assesmentBreadcrumb' sx={{ display: 'flex' }}>
                {!componentOpenOnDialog && (
                  <Link className='assesmentLink'
                    onClick={() => {
                      navigate(-1);
                    }}
                    sx={{ display: 'flex' }}
                  >
                    <ChevronLeftIcon className={`${classes.chevronLeftIcon} animatedIcon`} />
                  </Link>
                )}

                <span className={classes.titleDate}><strong>{assessmentData?.reportType}</strong> <span>{DateFormatterHelper.formatDateTime(assessmentData?.measuredDate)}</span></span>
              </Box>
              {assessmentData?.assessmentName === 'Wearables' && <Box className={classes.sourceTitle}><span className={classes.titleDate}><strong>Source: </strong>  <span style={{ textTransform: 'capitalize' }}>{assessmentData?.sourceName.toString().toLowerCase()}</span></span></Box>}
            </Box>
            {assessmentData.assessorName && assessmentData.assessorName.length > 0 &&
              <>
                <Typography className={classes.practitioner}>Practitioner</Typography>
                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }} className='cb_card' >
                  <Avatar alt={johnPic} src={johnPic} className={classes.practitionerAvatar} />
                  <Typography className={classes.practitionerName}>{assessmentData.assessorName}</Typography>
                </Box>
              </>
            }

            <div className='cb_card'>
              {accordionList.includes(assessmentData?.assessmentName) ?
                // Accordion Code
                <React.Fragment>

                  {groups.map((group: any, index: any) => (
                    <Accordion
                      expanded={expandedAccordionIndex === index}
                      onChange={handleAccordionChange(index)}
                      key={index}
                      className={expandedAccordionIndex === index ? classes.expandedAccordion : ''}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className={classes.accordionSummary}
                      >
                        <Typography className={classes.groupHeading}>
                          {group.groupName.toString().toUpperCase()}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <AssessmentDetailsGraph data={group.data}
                            graphChartDatas={graphChartDatas} />
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </React.Fragment>
                :
                // Non- accordion code 
                <React.Fragment>
                  <AssessmentDetailsGraph data={assessmentAccordionList}
                    graphChartDatas={graphChartDatas} />
                </React.Fragment>}
            </div>
          </Box>

          {hasAtleastOneComment === true &&
            <Box sx={{ mt: 2 }} className='cb_card'>
              <Box>
                <Typography paragraph className={classes.commentTitle}>
                  Comments
                </Typography>
              </Box>
              {groups.map((group: any, index: any) => (
                group?.comment?.comment && (
                  <>

                    <Box>

                      <Typography paragraph className={classes.commentText}>
                        <Typography className={classes.groupName}>{group?.comment?.group}:</Typography>
                        {group?.comment?.comment}
                      </Typography>{' '}
                    </Box>
                  </>

                )))}
            </Box>
          }
          <Box sx={{ display: 'flex', marginTop: '24px', justifyContent: 'flex-end' }}>
            <HookFormButton
              className={classes.editBtn}
              variant="contained"
              name={'Edit Assessment'}
              handleSubmit={() => { editAssessmentHandler(reportId); }}
            />
          </Box>
        </>
      )
      }
    </React.Fragment >
  );
};

export default AssessmentDetailsAccordion;






