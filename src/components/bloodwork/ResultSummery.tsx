import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkStyles } from './BloodworkStyles';
import { Stack } from '@mui/system';
import DrawerActionSidebar from './partials/side-drawer';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import { ColorHelper } from '../../core/helper/ColorHelper';

type IProps = {
  assessment: any;
};

const ResultSummery = ({ assessment }: IProps) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [expandedAccordionIndex, setExpandedAccordionIndex] = React.useState<number | false>(0);
  const handleChangeAccordion = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordionIndex(isExpanded ? panel : false);
  };

  const classes = useBloodworkStyles();

  const toggleDrawer = () => {
    setShowDrawer(false);
  };

  const Heading = ({ title, width }) => {
    return (
      <Typography
        width={width}
        fontFamily={'Poppins'}
        fontSize={18}
        fontWeight={'600'}
        sx={{
          marginLeft: 1,
          textAlign: 'center',
          '&:last-child': {
            textAlign: 'end'
          }
        }}
        className={classes.tiltleText}
      >
        {title}
      </Typography>
    );
  };

  const ResultSummeryItem = ({ subTitle, siResult, goal, score, color }) => {
    console.debug(color);
    const bgColor = ColorHelper.getGroupItemScoreBackgroundColor(score);
    const nameColor = ColorHelper.getGroupItemScoreColor(score);
    const guidence = ColorHelper.getGroupItemScoreText(score);
    return (
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        className={`${classes.resultSummaryItemBox} resultSummaryItemBox`}
      >
        <Stack width={220}>
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: '16px !important',
              fontWeight: '600 !important'
            }}
          >
            {subTitle}
          </Typography>
        </Stack>
        <Stack width={240}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '16px !important',
              fontWeight: '400 !important'
            }}
          >
            {siResult}
          </Typography>
        </Stack>
        <Stack width={260}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '16px !important',
              fontWeight: '400 !important'
            }}
          >
            {goal}
          </Typography>
        </Stack>
        <Stack width={240} alignItems="center">
          <Typography
            sx={{
              justifyContent: 'center',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              width: 40,
              height: 30,
              color: nameColor,
              background: bgColor,
              fontSize: '14px !important',
              fontWeight: '600 !important'
            }}
          >
            <span
              style={{
                padding: '5px',
                borderRadius: '5px'
              }}
            >
              {score}
            </span>
          </Typography>
        </Stack>
        <Stack width={240}>
          <Typography
            sx={{
              textAlign: 'end',
              color: nameColor,
              fontSize: '14px !important',
              fontWeight: '600 !important'
            }}
          >
            {guidence}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  const ExpandableItem = ({ title, totalScore, index }) => {
    const group = assessment.groups[index];
    const groupScoreColor = ColorHelper.getGroupScoreColor(group.score);
    return (
      <Accordion
        expanded={expandedAccordionIndex === index}
        onChange={handleChangeAccordion(index)}
        key={index}
        className={classes.result_summary_accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.accordionSummary}
        >
          <Stack
            display={'flex'}
            direction={'row'}
            padding={0}
            justifyContent={'space-between'}
            // sx={{ width: 'calc(100% - 30px)' }}
            className={classes.accordionSubTitle}
          >
            <Typography fontFamily={'Poppins'} sx={{ fontSize: '22px !important', fontWeight: '600 !important' }} >{title}</Typography>

            <Typography
              // width={240}
              className={classes.totalScoreText}
              sx={{
                // marginLeft: '20px',
                textAlign: 'center',
                fontSize: '22px !important',
                fontWeight: '600 !important',
                color: groupScoreColor
              }}
            >
              {totalScore}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          {group.data.map((item: any, idx: number) => {
            return (
              <React.Fragment key={idx}>
                <ResultSummeryItem
                  subTitle={item.name}
                  siResult={item.value}
                  goal={`${item.categories[0].minValue}-${item.categories[item.categories.length - 1].maximum} ${item.unit
                    }`}
                  score={Number(item.score).toFixed(2)}
                  color={item.displayCategoryColor}

                // guidence={item.guidence}
                />
              </React.Fragment>
            );
          })}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Stack>
      <Box className={classes.pageContent}>
        <DrawerActionSidebar
          open={showDrawer}
          toggleDrawer={toggleDrawer}
          anchor="right"
          bloodworkMeasuredDate={moment(assessment.measuredDate).toDate()}
        />
      </Box>
      <Box className={classes.result_summary_contents} sx={{ boxShadow: 2 }}>
        <Stack display={'flex'} direction={'row'} padding={2} justifyContent={'space-between'}>
          <Heading title={''} width={220} />
          <Heading title={'Value'} width={240} />
          <Heading title={'Range'} width={240} />
          <Heading title={'Score'} width={240} />
          <Heading title={'Guidance'} width={240} />
        </Stack>

        {assessment.groups.map((group: any, index: number) => (
          <React.Fragment key={index}>
            <ExpandableItem title={group.groupName} totalScore={Number(group.score).toFixed(2)} index={index} />
          </React.Fragment>
        ))}
      </Box>
    </Stack>
  );
};

export default ResultSummery;
