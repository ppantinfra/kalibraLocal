import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { useChartSyles } from '../ChartSyles';
import { Chart, registerables } from 'chart.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import DateFormatterHelper from '../../../core/helper/DateFormatterHelper';

Chart.register(...registerables);

type Props = {
  chartData: any;
};

const FREQUENCY = ['Weekly', 'Monthly', 'Annual'];

const ScoreLineChart = ({ chartData }: Props) => {
  const classes = useChartSyles();
  const [chartFrequency, setChartFrequency] = React.useState<string>('Weekly');

  if (chartData === undefined) {
    return <></>;
  }
  let unit = 'week';
  if (chartFrequency === 'Monthly') {
    unit = 'month';
  } else if (chartFrequency === 'Annual') {
    unit = 'year';
  }

  const newGraphData: Array<any> = [];
  let lastItem;
  for (const item of chartData.data) {
    // check the same week
    if (newGraphData.length > 0) {
      if (moment(item.x).isSame(moment(lastItem.x), unit as any)) { //isoWeek
        newGraphData[newGraphData.length - 1].y = (newGraphData[newGraphData.length - 1].y + item.y) / 2.0;
      } else {
        newGraphData.push({ x: item.x, y: item.y });
        lastItem = item;
      }
    } else {
      newGraphData.push({ x: item.x, y: item.y });
      lastItem = item;
    }
  }

  const data = {
    datasets: [
      {
        fill: true,
        lineTension: newGraphData.length > 3 ? 0.5 : 0,
        backgroundColor: chartData.gradient,
        pointRadius: 5,
        pointBorderColor: ColorHelper.getBarColor('teal', chartData.category),
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        borderColor: ColorHelper.getBarColor('teal', chartData.category),
        borderWidth: 2,
        data: newGraphData,
      },
    ],
  };
  const convertDateFormat = (str: string) => {
    if ((new Date(str)).getMonth() === 0) {
      return moment(new Date(str)).format('MMM YY');
    } else {
      return moment(new Date(str)).format('MMM');
    }
  };

  const options: any = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return tooltipItem.formattedValue;
          },
        }
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          callback: function (val, index) {
            // Hide the label of every 2nd dataset
            return index % 2 === 0 ? val : '';
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        display: newGraphData.length > 0 ? true : false,
        type: 'time',
        time: {
          unit: unit,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: '#929CB0',
          font: {
            size: 10,
            weight: 500,
          },
          autoSkip: false,
          callback: function (val, index) {
            if (unit === 'week') {
              return index % 4 === 0 ? convertDateFormat(val) : '';
            } else {
              return convertDateFormat(val);
            }
          },
        },
      },
    },
    responsive: true,
  };

  const handleDropdown = (event: SelectChangeEvent) => {
    setChartFrequency(event.target.value);
  };

  return (
    <React.Fragment>
      <Box
        className={`${classes.lineChartBox_header} lineChartBox_header_common lineChartBox_header_bodyComp`}
      >
        <Typography
          className={`${classes.lineChartBox_title} lineChartBox_title_bodyComp lineChartBox_title_common `}
        >
          {DateFormatterHelper.formatDate(chartData.data[0].x)} -{' '}
          {DateFormatterHelper.formatDate(chartData.data[chartData.data.length - 1].x)}
        </Typography>
        <Box className={classes.selectFrequencyBox}>
          <Select
            fullWidth
            value={chartFrequency}
            defaultValue={''}
            onChange={(event) => handleDropdown(event)}
            className={classes.selectFrequencyField}
            size="small"
            MenuProps={{
              sx: {
                '&& .Mui-selected': {
                  backgroundColor: '#46D7CB !important',
                  borderRadius: '0px !important'
                }
              }
            }}
          >
            {FREQUENCY.map((item, index) => {
              return (
                <MenuItem key={index} value={item} style={{}} className={classes.menuItem}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Box>

      </Box>
      <Box className={classes.lineChartBox}>
        {newGraphData.length === 1 ? <Bar data={data} options={options} /> : <Line data={data} options={options} />}

      </Box>
    </React.Fragment>
  );
};

export default ScoreLineChart;
