import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { makeStyles } from '@mui/styles';
import { VictoryArea, VictoryAxis, VictoryChart } from 'victory';
import PillarIcon from '../../common/PillarIcon';
import { Skeleton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AssessmentMediaContent } from '../../assessments';
const fontColor = '#222B45';
const fontFamily = 'Poppins';

export const useGraphChartStyles = makeStyles({
  graphBox: {
    margin: 'auto',
    position: 'relative',
    justifyContent: 'start',
    display: 'grid',
    '& canvas': {
      position: 'absolute',
    },
    '& svg': {
      '@media (max-width:1280px)': {
        height: '280px'
      },
      '@media (max-width:400px)': {
        width: '400px',
        height: '260px'
      }
    }
  },
  gb_titleBox: {},
  gbt_title: {
    fontFamily: fontFamily,
    color: fontColor,
    fontSize: '11px',
    fontWeight: 400,
  },
  gbt_graphScore: {
    fontFamily: fontFamily,
    color: fontColor,
    fontSize: '18px',
    fontWeight: 600,
    '@media (max-width: 1500px)': {
      // fontSize: '14px',
    },
  },
  lineGraph: {
    width: '396px',
    '@media (max-width: 1500px)': {
      width: '259px',
    },
  },
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  title: any;
  graphData?: any;
  graphScore?: any;
  category?: string;
  data?: any
};

const ChartWithTwoMarkers = ({ title, graphData, graphScore, category, data }: Props) => {
  const classes = useGraphChartStyles();
  const [boundingRect, setBoundingRect] = React.useState({ width: 0, height: 0 });
  const graphRef = React.useRef(null);
  const [openMediaModal, setOpenMediaModal] = React.useState(false);

  const updateSize = () => {
    if (graphRef !== undefined && graphRef.current !== undefined) {
      setBoundingRect((graphRef.current as any).getBoundingClientRect());
    }
  };

  React.useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  let width = boundingRect.width + 40;
  width = width <= 40 ? 250 : width;
  return (
    <>
      <Box className={classes.gb_titleBox} sx={{ mb: 2 }}>
        <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography component="div" className={classes.gbt_title}>{title} <PillarIcon pillarName={category} /></Typography>
          <InfoOutlinedIcon
            style={{ width: '16px', height: '16px', cursor: 'pointer' }}
            onClick={() => {
              setOpenMediaModal(true);
            }}
          />
        </Box>
        {(graphData[0] !== undefined && graphData[1] !== undefined) ?
          <Typography className={classes.gbt_graphScore}>{graphScore}</Typography>
          :
          < Skeleton
            animation="wave"
            height={10}
            style={{ marginLeft: '6px', marginTop: '10px', width: '3vmax' }}
          />
        }
      </Box>
      <div style={{ width: '100%', height: '100%' }} ref={graphRef} >
        {graphData[0] !== undefined && graphData[1] !== undefined && (
          <svg style={{ background: 'transparent', marginTop: -50, marginLeft: -24, width: '100%', height: 250 }}>
            <VictoryChart
              height={185}
              width={width}
              standalone={false}
              style={{

                background: { fill: 'transparent' },
                parent: { border: '5px solid #ccc', height: 200, marginLeft: '0', maxWidth: '100%', padding: 0 },
              }}
            >
              <VictoryAxis dependentAxis
                tickValues={[0, 40, 80, 120, 160, 200]}
                style={{
                  tickLabels: { fontSize: 11, padding: 3, fontFamily: 'Poppins' },
                  grid: { strokeWidth: 0.5, stroke: '#C5CEE0' }
                }}
              />
              <VictoryAxis
                tickValues={[0, 40, 80, 120, 160, 200, 240]}
                style={{
                  tickLabels: { fontSize: 11, padding: 3, fontFamily: 'Poppins' },
                  grid: { strokeWidth: 0.5, stroke: '#C5CEE0' }
                }}
              />
              <VictoryArea data={[
                { x: 0, y: graphData[0] },
                { x: graphData[1], y: graphData[0] },
              ]} style={{ data: { fill: 'rgba(0, 214, 143, 0.16)', fontSize: 10 }, labels: { fontSize: 10 } }} />
            </VictoryChart>

          </svg>
        )}
      </div>
      {openMediaModal === true &&
        <AssessmentMediaContent mediaContentData={undefined} handleClose={() => { setOpenMediaModal(false); }} name={title} whatText={data?.infoWhat} howText={data?.infoHow} whyText={data?.infoWhy} />
      }
    </>
  );
};

export default ChartWithTwoMarkers;
