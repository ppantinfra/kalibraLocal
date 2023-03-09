import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily, AppColor } from '../../core';
import { CommonContext, CommonContextType } from '../../core/context';
import SmallCurverdLineChart from '../charts/line/SmallCurverdLineChart';

const useStyles = makeStyles({
  viewDetailed: {
    paddingTop: '10px',
    color: '#33B7B8',
    fontSize: '14px',
    cursor: 'pointer'
  },
  ITReportContents: {},
  itrc_text: {
    fontFamily: FontFamily,
    fontSize: '12px',
    fontWeight: 500,
    marginTop: 10,
    marginBottom: 10,
    color: FontColor
  },
  itrc_score: {
    fontFamily: FontFamily,
    fontSize: 16,
    fontWeight: 600,
    color: '#fff',
    '& span': {
      fontWeight: '400',
      fontSize: '10px'
    }
  },
  share_icons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: FontFamily,
    cursor: 'pointer',
    columnGap: '5px',

    '& .MuiSvgIcon-root': {
      color: '#231F20',
      width: '16.89px',
      height: '16px',
      fontFamily: FontFamily,
      cursor: 'pointer'
    }
  }
});

type IIntelligenceTrendingReportProps = {
  scoreDetailData?: any;
  tableReportClickHandler?: any;
  ITrendingReportTitle?: any;
};
const IntelligenceTrendingReport = ({
  scoreDetailData,
  tableReportClickHandler,
  ITrendingReportTitle
}: IIntelligenceTrendingReportProps) => {
  const classes = useStyles();
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const negativeScoreDetailData: Array<any> = (scoreDetailData || []).filter((el: any) => el.score < 0);
  const zeroScoreDetailData: Array<any> = (scoreDetailData || []).filter((el: any) => el.score === 0);
  const positiveScoreDetailData: Array<any> = (scoreDetailData || []).filter((el: any) => el.score > 0);

  return (
    <React.Fragment>
      <Typography className={classes.viewDetailed} onClick={tableReportClickHandler}>
        View detailed report
      </Typography>
      <Box className={classes.ITReportContents}>
        <Typography className={`${classes.itrc_text} positive_itrc_text`}>
          {ITrendingReportTitle} has been trending up for {positiveScoreDetailData.length} clients this week
        </Typography>
        {positiveScoreDetailData.map((item: any, index: number) => {
          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F8F9FC',
                marginTop: 1,
                borderRadius: 2,
                paddingLeft: 0,
                paddingRight: 1,
                height: 60
              }}
              key={index}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: 200,
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    padding: '16px 0',
                    backgroundColor: item.color,
                    borderRadius: 2,
                    height: 52,
                    width: 63,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography className={classes.itrc_score}>
                    {item.score > 0 ? (
                      <>
                        +{item.score}
                        <span>{item.unit}</span>
                      </>
                    ) : (
                      <>
                        {item.score}
                        <span>{item.unit}</span>
                      </>
                    )}
                  </Typography>
                </Box>
                <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold" marginLeft={1}>
                  {item.clientName}
                </Typography>
              </Box>
              <Box sx={{ width: 70 }}>
                <SmallCurverdLineChart
                  lineChartTitle={'lineChartTitle'}
                  lineChartColor={
                    item.score > 0 ? AppColor.bsDanger : item.score === 0 ? AppColor.bsWarning : AppColor.bsSuccess
                  }
                  lineChartData={item.lineChartData}
                />
              </Box>
              {demoMode === true && (
                <></>
                // <Box className={classes.share_icons}>
                //   <ShareOutlinedIcon />
                // </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box className={classes.ITReportContents}>
        <Typography className={`${classes.itrc_text} positive_itrc_text`}>
          {negativeScoreDetailData.length} clients have shown a consistent drop over 3 weeks
        </Typography>
        {negativeScoreDetailData.map((item: any, index: number) => {
          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F8F9FC',
                marginTop: 1,
                borderRadius: 2,
                paddingLeft: 0,
                paddingRight: 1,
                height: 60
              }}
              key={index}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: 200,
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    padding: '16px 0',
                    backgroundColor: item.color,
                    borderRadius: 2,
                    height: 52,
                    width: 63,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography className={classes.itrc_score}>
                    {item.score > 0 ? (
                      <>
                        +{item.score}
                        <span>{item.unit}</span>
                      </>
                    ) : (
                      <>
                        {item.score}
                        <span>{item.unit}</span>
                      </>
                    )}
                  </Typography>
                </Box>
                <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold" marginLeft={1}>
                  {item.clientName}
                </Typography>
              </Box>
              <Box sx={{ width: 70 }}>
                <SmallCurverdLineChart
                  lineChartTitle={'lineChartTitle'}
                  lineChartColor={
                    item.score > 0 ? AppColor.bsDanger : item.score === 0 ? AppColor.bsWarning : AppColor.bsSuccess
                  }
                  lineChartData={item.lineChartData}
                />
              </Box>
              {demoMode === true && (
                <></>
                // <Box className={classes.share_icons}>
                //   <ShareOutlinedIcon />
                // </Box>
              )}
            </Box>
          );
        })}
      </Box>
      <Box className={classes.ITReportContents}>
        <Typography className={`${classes.itrc_text} positive_itrc_text`}>
          {zeroScoreDetailData.length} client has been plateauing
        </Typography>
        {zeroScoreDetailData.map((item: any, index: number) => {
          return (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F8F9FC',
                marginTop: 1,
                borderRadius: 2,
                paddingLeft: 0,
                paddingRight: 1,
                height: 60
              }}
              key={index}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: 200,
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    padding: '16px 0',
                    backgroundColor: item.color,
                    borderRadius: 2,
                    height: 52,
                    width: 63,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography className={classes.itrc_score}>
                    {item.score > 0 ? (
                      <>
                        +{item.score}
                        <span>{item.unit}</span>
                      </>
                    ) : (
                      <>
                        {item.score}
                        <span>{item.unit}</span>
                      </>
                    )}
                  </Typography>
                </Box>
                <Typography fontFamily={'Poppins'} fontSize={12} fontWeight="bold" marginLeft={1}>
                  {item.clientName}
                </Typography>
              </Box>
              <Box sx={{ width: 70 }}>
                <SmallCurverdLineChart
                  lineChartTitle={'lineChartTitle'}
                  lineChartColor={
                    item.score > 0 ? AppColor.bsDanger : item.score === 0 ? AppColor.bsWarning : AppColor.bsSuccess
                  }
                  lineChartData={item.lineChartData}
                />
              </Box>
              {demoMode === true && (
                <></>
                // <Box className={classes.share_icons}>
                //   <ShareOutlinedIcon />
                // </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default IntelligenceTrendingReport;
