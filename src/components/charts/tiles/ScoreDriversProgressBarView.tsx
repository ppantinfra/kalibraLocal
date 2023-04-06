import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { ColorHelper } from '../../../core/helper/ColorHelper';
import PillarInfoDialog from '../../common/confirmation/PillarInfoDialog';

const useScoreDriversProgressBarViewStyles = makeStyles({
  // Tabs  progress
  tabsListBox: {
    minHeight: '36px',
    border: '0',
    '& .MuiTab-textColorPrimary': {
      color: '#fff',
    },
    '& .MuiTab-textColorPrimary.Mui-selected': {
      background: '#0989e3',
    },
    '& .css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root.Mui-disabled': {
      opacity: 0.3,
      PointerEvents: 'none',
    },
    '@media (max-width: 1367px)': {
      width: '35vmax',
    },
    '@media (max-width: 1280px)': {
      width: '25vmax',
    },
  },

  tabPanel: {
    // position: "absolute"
    paddingRight: '5px !important',
  },
  tabPanel_nourish: {
    '& .nourish_progress': {
      background: '#A83440',
    },
  },
  tabPanel_move: {
    '& .move_progress': {
      background: '#0884A9',
    },
  },
  tabPanel_connect: {
    '& .connect_progress': {
      background: '#AE8B27',
    },
  },
  tabPanel_grow: {
    '& .grow_progress': {
      background: '#AE8B27',
    },
  },
  tabPanel_biome: {
    '& .biome_progress': {
      background: 'rgb(250, 102, 138)',
    },
  },
  tabPanel_reflect: {
    '& .reflect_progress': {
      background: '#5B2FAE',
    },
  },
  tabPanel_rest: {
    '& .rest_progress': {
      background: '#2F53B3',
    },
  },

  tabPanel_subLink: {
    fontSize: '12px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginBottom: '5px',
    padding: '5px',
    marginRight: '0',
    marginLeft: 'auto',
    // width: "4vmax",
    display: 'inline-block',
  },
  strength: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '3px',
    '& svg': {
      fontSize: '18px',
    },
  },
  tabPanel_subLink_move: {
    color: '#0884A9',
    border: '1px solid #C8F8F9',

    backgroundColor: '#C8F8F9',
  },

  tabPanel_progressBox: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    '@media (max-width:1500px)': {
      paddingBottom: '5px',
    },
    '&:first-child': {
      marginTop: '1vmax',
    },
  },
  tabPanelText: {
    fontSize: '11px',
    color: '#46D7CB',
    fontWeight: '400',
    fontFamily: 'Poppins',
    width: '9.0vmax',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    '@media (max-width: 1500px)': {
      //fontSize: '12px',
    },
    '@media (max-width: 1280px)': {
      width: '15vmax',
      //fontSize: '12px',
    },
  },
  progress: {
    //backgroundColor: 'white', //'#d8d8d8',
    borderRadius: '2px',
    position: 'relative',
    minHeight: '16px',
    maxHeight: '16px',

    width: '100%',
    // "@media (max-width: 1500px)": {
    //   minHeight: "12px",
    // },
  },

  progressDdone: {
    background: 'rgb(59, 125, 221)',
    borderRadius: '8px',
    color: '#fff',
    display: 'flex',
    jusrifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '0',
    opacity: '0',
    zIndex: 1900,
    transition: '1s ease 0.3s',
    position: 'absolute'
  },
  doneText: {
    display: 'flex',
    jusrifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 1,
    fontSize: '12px',
    fontWeight: '500',
    marginLeft: 5,
    '@media (max-width: 1280px)': {
      fontSize: '10px',
    },
  },

  mui_tabButton_nourish: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    // border: "1px solid #FCD6C4",

    '&.MuiTab-root.Mui-selected': {
      color: '#A83440',
      border: '1px solid #FCD6C4',
      background: '#FCD6C4',
      borderRadius: '5px',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#FCD6C4 !important',
        padding: '3px',
      },
    },
  },
  mui_tabButton_move: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: '#0884A9',
      border: '1px solid #C8F8F9',
      borderRadius: '5px',
      backgroundColor: '#C8F8F9',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#C8F8F9 !important',
        padding: '3px',
      },
    },
  },

  mui_tabButton_move_activityLogger: {
    color: '#0884A9',
    border: '1px solid #C8F8F9',
    backgroundColor: '#C8F8F9',
  },
  acticityLoggerLink_move: {
    color: '#0884A9',
  },
  mui_tabButton_activityLogger: {
    borderRadius: '5px',
    marginRight: '10px',
  },
  acticityLoggerLink: {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  mui_tabButton_rest: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: '#2F53B3',
      border: '1px solid #BFDBFE',
      borderRadius: '5px',
      backgroundColor: '#BFDBFE',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#BFDBFE !important',
        padding: '3px',
      },
    },
  },

  mui_tabButton_rest_activityLogger: {
    color: '#2F53B3',
    border: '1px solid #BFDBFE',
    backgroundColor: '#BFDBFE',
  },
  acticityLoggerLink_rest: {
    color: '#2F53B3',
  },
  mui_tabButton_grow: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: '#8CA639',
      border: '1px solid #F5FCC9',
      borderRadius: '5px',
      backgroundColor: '#F5FCC9',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#F5FCC9 !important',
        padding: '3px',
      },
    },
  },
  mui_tabButton_biome: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: 'rgb(250, 102, 138)',
      borderRadius: '5px',
      backgroundColor: 'rgba(250 102 138 / 30%) !important',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: 'rgba(250 102 138 / 30%) !important',
        padding: '3px',
      },
      '& svg': {
        color: 'rgb(250, 102, 138)',
      },
    },
  },

  mui_tabButton_connect: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: '#AE8B27',
      border: '1px solid #FDF3B9',
      borderRadius: '5px',
      backgroundColor: '#FDF3B9',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#FDF3B9 !important',
        padding: '3px',
      },
    },
  },
  mui_tabButton_reflect: {
    padding: '4px 10px',
    minWidth: '20px',
    minHeight: '36px',
    '&.MuiTab-root.Mui-selected': {
      color: '#5B2FAE',
      border: '1px solid #E3BFFD',
      backgroundColor: '#E3BFFD',
      borderRadius: '5px',
      '& .MuiAvatar-circular ': {
        width: '25px',
        height: '25px',
      },
      '& .MuiAvatar-img': {
        background: '#E3BFFD !important',
        padding: '3px',
      },
    },
  },
  mui_tabButton_reflect_activityLogger: {
    color: '#5B2FAE',
    border: '1px solid #E3BFFD',
    backgroundColor: '#E3BFFD',
  },
  acticityLoggerLink_reflect: {
    color: '#5B2FAE',
  },

  drawerActionSidebar_scoreDrivers: {
    '& .drawerActionScoreBarBox': {
      '& > div': {
        marginBottom: '10px',
        alignItems: 'center',

        '& p': {
          fontSize: '14px',
        },
        '& > div': {
          height: '20px',
          color: '#222b45',
          '& > div': {
            // color: "#222b45",
          },
        },
      },
    },
  },
  pillar_button: {
    padding: '0 8px',
    borderRadius: '25px',
    '& .MuiAvatar-circular ': {
      width: '30px',
    },
    '& .MuiAvatar-img': {
      padding: '3px',
    },
  },
  button_rest: {
    color: '#2F53B3',
    border: '1px solid #BFDBFE80',
    backgroundColor: '#BFDBFE80',
  },
  button_move: {
    color: '#0884A9',
    border: '1px solid #C8F8F980',
    backgroundColor: '#C8F8F980',
  },
  button_nourish: {
    color: '#A83440',
    border: '1px solid #FCD6C480',
    backgroundColor: '#FCD6C480',
  },
  button_connect: {
    color: '#AE8B27',
    border: '1px solid #FDF3B980',
    backgroundColor: '#FDF3B980',
  },
  button_reflect: {
    color: '#5B2FAE',
    border: '1px solid #E3BFFD80',
    backgroundColor: '#E3BFFD80',
  },
  button_grow: {
    color: '#8CA639',
    border: '1px solid #F5FCC980',
    backgroundColor: '#F5FCC980',
  },
});

type Props = {
  category?: string;
  data: any;
  isRenderOnActionPanel?: boolean;
};
const ScoreDriversProgressBarView = ({ data, category }: Props) => {
  const classes = useScoreDriversProgressBarViewStyles();
  const [selectedSubCat, setSelectedSubCat] = React.useState('');
  const [showPillarInfo, setShownPillarInfo] = React.useState(false);
  const Progress = ({ done, isLoaded, doneNumber }: any) => {

    const [style, setStyle] = React.useState({});
    const progresStyle = {
      opacity: 1,
      width: done <= 16 ? '16%' : done >= 100 ? '100%' : `${done}%`,
      backgroundColor: done <= 0 ? '#C5CEE0' : ColorHelper.getBarColor('teal', String(category)),
    };
    let loadedStyle = {};

    if (isLoaded === false && Object.keys(style).length === 0) {
      setTimeout(() => {
        setStyle(progresStyle);
      }, 200);
    } else {
      loadedStyle = progresStyle;
    }

    return (
      <Box className={`${classes.progress} scoreDriveProgressBar`}>
        <Box
          style={{ height: 1, position: 'absolute', top: 8, width: '100%', backgroundColor: '#C5CEE0', }}
        />
        <Box
          className={`${classes.progressDdone} nourish_progress move_progress grow_progress rest_progress reflect_progress connect_progress biome_progress`}
          style={isLoaded === true ? loadedStyle : style}
        >
          <Typography className={classes.doneText} style={{ color: 'white' }}>
            {' '}
            {doneNumber !== 0 ? doneNumber : done}
          </Typography>
        </Box>

      </Box>
    );
  };

  const renderTabContent = () => {
    return data.map((item: any, index: any) => (
      <Box className={classes.tabPanel_progressBox} key={index} >
        <Typography className={classes.tabPanelText} onClick={() => { setSelectedSubCat(item.progressLabel); setShownPillarInfo(true); }}  >
          {' '}
          {item.progressLabel}
        </Typography>
        <Progress done={Number.parseInt(item.done) < 0 ? 0 : Number.parseInt(item.done)} isLoaded={selectedSubCat.length > 0} doneNumber={item.doneNumber ? item.doneNumber : 0} />
      </Box>
    ));
  };

  return (
    <Box className="TabBox" style={{ overflow: 'hidden', marginTop: '10px' }}>
      {renderTabContent()}
      {showPillarInfo === true && (
        <PillarInfoDialog
          pillar={category}
          subCat={selectedSubCat}
          infoDialogCloseHandler={() => { setShownPillarInfo(false); }}
        />
      )}
    </Box>
  );
};

export default ScoreDriversProgressBarView;
