import React from 'react';
import Box from '@mui/material/Box';
// import ProgressLine from './ProgressLine';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import FlatProgressBar from './FlatProgress/FlatProgressBar';

type Props = {
  progressBarData: Array<any>;
  isFakeData?: boolean;
  isIntelligenceProgressBarChart?: boolean;
};

const HorizontalProgressBarChart = ({ isFakeData, progressBarData, isIntelligenceProgressBarChart }: Props) => {
  const graphType = {
    graphType: 'HorizontalStackedBarChartUngrouped'
  };
  let data;
  if (isFakeData === true) {
    data = progressBarData;
  } else {
    data = progressBarData.map((proData: any) => {
      if (proData.value === undefined || proData?.categories === undefined || proData?.categories.length === 0) {
        return {
          label: proData.name,
          total: 0,
          point: 0,
          unit: '',
          pointColor: '',
          visualParts: Array<any>()
        };
      }
      let total = Number(proData.rangeMax) - Number(proData.rangeMin);
      if (proData?.categories.length > 0) {
        total = proData?.categories[proData?.categories.length - 1].maximum - proData?.categories[0].minimum;
      }
      const item = {
        label: proData?.name,
        total: total,
        point: Number(proData.value).toFixed(1),
        unit: proData?.unit,
        pointColor: '',
        visualParts: Array<any>(),
        category: proData?.category,
        infoWhat: proData?.infoWhat,
        infoWhy: proData?.infoWhy,
        infoHow: proData?.infoHow,
        lastUpdated: proData?.lastUpdated

      };

      proData?.categories.forEach((element) => {
        if (item.point >= element.minimum && item.point <= element.maximum) {
          item.pointColor = ColorHelper.getBarColor(element.color, item.category);
        }

        item.visualParts.push({
          maxValue: element.maximum,
          minValue: element.minimum,
          range: element.maximum - element.minimum,
          label: element.rangeLabel,
          color: ColorHelper.getBarColor(element.color, proData?.category)
        });
      });

      return item;
    });
  }

  return (
    <React.Fragment>
      <Box sx={{ mt: 2 }}>
        {data.map((proData: any, index: any) => (
          <Box key={index}>
            <FlatProgressBar
              label={proData?.label}
              visualParts={proData?.visualParts}
              graphCategory={'HorizontalStackedBarChartUngrouped'}
              total={proData?.total}
              point={proData?.point}
              unit={proData?.unit}
              data={graphType}
              pointColor={proData?.pointColor}
              category={proData?.category}
              isIntelligenceProgressBarChart={isIntelligenceProgressBarChart}
              infoWhat={proData?.infoWhat}
              infoWhy={proData?.infoWhy}
              infoHow={proData?.infoHow}
              lastUpdated={proData?.lastUpdated}
            />

          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default HorizontalProgressBarChart;
