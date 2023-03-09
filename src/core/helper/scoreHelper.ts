import moment from 'moment';
import { ColorHelper } from './ColorHelper';

const generateGradient = ( category: string) => {
  const gradient = (context: any) => {
    const ctx = context.chart.ctx;
    const linearGradient = ctx.createLinearGradient(0, 0, 0, 200);
    linearGradient.addColorStop(0, ColorHelper.getBarColor('teal', String(category)));
    linearGradient.addColorStop(1, '#fff');
    return linearGradient;
  };

  return gradient;
};

const generateChartData =  (data: any, category?: string) => {
  const scoreChartData = {
    labels: Array<any>(),
    accuracy: data.scores.length > 0 ? data.categories[0].scores[0].score : 0,
    label: 'Score',
    data: Array<any>(),
    gradient: generateGradient( String(category)),
    category: category
  };

  let previousDate: Date;
  data.categories[0].scores.forEach(element => {
    const date = new Date(moment(element.createdOn).format('YYYY-MM-DD'));
    if (previousDate === undefined || previousDate.getTime() !== date.getTime()) {
      scoreChartData.data.push({
        x: date,
        y: element.score
      });
      previousDate = date;
      scoreChartData.labels.push(moment(element.createdOn).format('DD MMM'));
    } else {
      scoreChartData.data[scoreChartData.data.length - 1].y = element.score;
    }
  });
  scoreChartData.data = scoreChartData.data.reverse();
  scoreChartData.labels = scoreChartData.labels.reverse();
  return scoreChartData;
};

const generateChartDataFromScores =  (data: any, category?: string) => {
  const scoreChartData = {
    labels: Array<any>(),
    accuracy: data.values.length > 0 ? data.values[data.values.length - 1].value : 0,
    label: 'Score',
    externalKey: data.key,
    data: Array<any>(),
    gradient: generateGradient(String(category)),
    category: category
  };

  let previousDate: Date;
  data.values.forEach(element => {
    const date = new Date(moment(element.date).format('YYYY-MM-DD'));
    if (previousDate === undefined || previousDate.getTime() !== date.getTime()) {
      scoreChartData.data.push({
        x: date,
        y: element.value
      });
      previousDate = date;
      scoreChartData.labels.push(moment(element.date).format('DD MMM'));
    } else {
      scoreChartData.data[scoreChartData.data.length - 1].y = element.value;
    }
  });
  return scoreChartData;
};


const generateScoreDriverChartData =  (data: any) => {
  const scoreChartData = Array<any>();
  data.categories[0].subCategories.forEach(element => {
    scoreChartData.push({
      done: element.scores.length > 0 ? element.scores[0].score : 0,
      progressLabel: element.name
    });
  });
  return scoreChartData;
};

const ScoreHelper = {
  generateGradient,
  generateChartData,
  generateScoreDriverChartData,
  generateChartDataFromScores
};

export default ScoreHelper;
