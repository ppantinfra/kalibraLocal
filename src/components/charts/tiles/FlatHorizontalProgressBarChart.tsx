import React from 'react';
import Box from '@mui/material/Box';
import FlatProgressBar from '../progress/FlatProgress/FlatProgressBar';
import { ColorHelper } from '../../../core/helper/ColorHelper';

type Props = {
  data: any;
  willHideTitle?: boolean;
  popSize?: number;
};

const FlatHorizontalProgressBarChart = ({ data, willHideTitle, popSize }: Props) => {

  let total = Number(data.rangeMax) - Number(data.rangeMin);
  let maxValue = 0;
  let minValue = 0;
  let pointColor = '';
  if (data?.categories?.length > 0) {
    maxValue = data?.categories[data?.categories.length - 1].maximum;
    minValue = data?.categories[0].minimum;
    total = maxValue - minValue;
    if (data.value < minValue) {
      pointColor = ColorHelper.getBarColor(data?.categories[0].color, data.category);
    } else if (data.value > maxValue) {
      pointColor = ColorHelper.getBarColor(data?.categories[data?.categories.length - 1].color, data.category);
    }
  }

  const progressBarData = {
    label: data?.name,
    total: total,
    point: data?.value,
    unit: data.unit,
    pointColor: pointColor,
    visualParts: Array<any>(),
  };

  data?.categories?.forEach((element) => {
    if (data.value >= element.minimum && data.value <= element.maximum) {
      progressBarData.pointColor = ColorHelper.getBarColor(element.color, data.category);
    }
    progressBarData.visualParts.push({
      maxValue: element.maximum,
      minValue: element.minimum,
      range: element.maximum - element.minimum,
      label: element.rangeLabel,
      color: ColorHelper.getBarColor(element.color, data?.category)
    });
  });

  const graphType = { 'graphType': 'HorizontalStackedBarChartUngrouped' };

  return (
    <React.Fragment>
      <Box sx={{ mt: 1 }} className="flatProgressItem">
        <Box key={'1'}>
          <FlatProgressBar
            label={progressBarData.label}
            visualParts={data?.categories === undefined ? [] : progressBarData.visualParts}
            graphCategor="HorizontalStackedBarChartUngrouped"
            total={progressBarData.total}
            popSize={popSize}
            point={Number(progressBarData.point).toFixed(1)}
            unit={progressBarData.unit}
            data={graphType}
            pointColor={progressBarData.pointColor}
            category={data?.category}
            willHideTitle={willHideTitle}
            infoWhat={data.infoWhat}
            infoHow={data.infoHow}
            infoWhy={data.infoWhy}
            lastUpdated={data?.lastUpdated}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FlatHorizontalProgressBarChart;
