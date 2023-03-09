import React from 'react';
import { useChartSyles } from './ChartSyles';
import Box from '@mui/material/Box';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ColorHelper } from '../../core/helper/ColorHelper';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  chartDescription: string;
  category: string;
};

const blueSky = (context: any) => {
  const ctx = context.chart.ctx;
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'blue');
  gradient.addColorStop(1, 'purple');
  return gradient;
};
const blackWhite: any = (context: any) => {
  const ctx = context.chart.ctx;
  const gradient: any = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, 'black');
  return gradient;
};

const transparent: any = (context: any) => {
  const ctx = context.chart.ctx('2d');
  const gradient: any = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'silver');
  gradient.addColorStop(1, 'white');
  return gradient;
};

const Gradient: any = [];

Gradient.push(blueSky, blackWhite, transparent);


const DoughnutChart = ({ chartDescription, category }: Props) => {


  const data = {
    labels: ['19%', '54%', '28%'],
    datasets: [
      {
        label: '# of Sleep',
        data: [19, 54, 28],
        stroke: Gradient,
        // backgroundImage: Gradient,
        backgroundColor: [
          ColorHelper.getBarColor('teal', category),
          ColorHelper.getBarColor('yellow', category),
          ColorHelper.getBarColor('orange', category)
        ],

        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    cutout: window.innerWidth > 1280 ? '90%' : '50%',
    plugins: {
      legend: {
        //   display: false,
      },

      outlabels: {
        text: '%l %p',
        color: 'red',
        stretch: 20,
        render: 'label',
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
        },
      },
      labels: {
        position: 'outside',
        color: 'red',
        stretch: 20,
        render: 'label',
        display: true,
        offset: 50,
      },

      // dataLabels: {
      //   display: true,
      //   anchor: "end",
      //   align: "right",
      //   offset: 50,
      //   render: "label",
      //   position: "outside",
      // },

      // pieceLabel: {
      //   render: "label",
      //   fontColor: "#000",
      //   position: "outside",
      //   segment: true,
      // },
    },
  };

  const classes = useChartSyles();
  return (
    <Box className={classes.DoughnutChartBox}>
      <Doughnut data={data} options={options} />
      <Box className={classes.DoughnutChartText}>{chartDescription}</Box>
    </Box>
  );
};

export default DoughnutChart;
