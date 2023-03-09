import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../../core';

export const useActivityLoggerScreenStyles = makeStyles(
  {
    pageContent: {
      padding: '10px 0',
    },
    _container: {
      borderRadius: '1vmax',
      '& .MuiTabPanel-root.css-13xfq8m-MuiTabPanel-root': {
        padding: '24px 0',
      },
    },

    heading: {
      fontSize: '20px',
      color: FontColor,
      fontFamily: FontFamily,
      paddingBottom: '1vmax',
      marginBottom: '0',
      textAlign: 'initial',
      fontWeight: '600',
      '@media (max-width: 768px)': {
        fontSize: '15px',
      },
    },

    // Tabls css

    mui_tablist: {
      '& .MuiTab-root.Mui-selected ': {
        backgroundColor: '#FFFFFF',
        border: '1px solid #46D7CB',
        color: '#46D7CB',
      },
      '& .MuiTabs-flexContainer': {
        columnGap: '12px',
        rowGap: '12px',
        // flexWrap: "wrap",
        
        '@media (max-width:900px)': {},
      },
      '& .MuiTabs-scrollButtons': {
        '& .MuiSvgIcon-fontSizeSmall': {
          fontSize: '2vmax',
        },
      },
    },
    mui_tabButton: {
      display: 'flex',
      border: '1px solid #9FF9F9',
      padding: '0 16px',
      borderRadius: '20px',
      // background: "#EDF1F7",
      textTransform: 'capitalize',
      transition: '.3s all',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      // width: "8vmax",
      minHeight: '33px',
      fontFamily: FontFamily,

      '& .MuiAvatar-circular ': {
        marginRight: '3px',
      },
      '@media (max-width:1280px)': {
        // width: "11.5vmax",
      },
      '& .tabIcon': {
        marginLeft: '8px',
        marginRight: '0',
        display: 'none',
        fontSize: '18px',
      },

      '&.MuiTab-root.Mui-selected': {
        flexDirection: 'row !important',
        transition: '.3s all',
        '& .tabIcon': {
          display: 'block',
        },
        '& .MuiAvatar-circular ': {
          width: '25px',
          height: '25px',
        },
      },
    },
    mui_tabButton_endurance: {
      '&.MuiTab-root.Mui-selected': {
        color: FontColor,
        border: '1px solid #46D7CB',
        backgroundColor: '#9FF9F9',
        '& svg': {
          color: FontColor,
        },
      },
    },
    mui_tabButton_strength: {
      '&.MuiTab-root.Mui-selected': {
        color: FontColor,
        border: '1px solid #46D7CB',
        backgroundColor: '#9FF9F9',
        '& svg': {
          color: FontColor,
        },
      },
    },
    mui_tabButton_performance: {
      '&.MuiTab-root.Mui-selected': {
        color: FontColor,
        border: '1px solid #46D7CB',
        backgroundColor: '#9FF9F9',
        '& svg': {
          color: FontColor,
        },
      },
    },

    tabPanel: {
      '& .overviewCard': {
        border: '1px solid #90f3d9',
        boxShadow: 'rgb(144 243 217 / 5%) 0px 0px 0.875rem 0px',

        // tabsListBox
      },
    },
    tabListRow: {
      display: 'flex',
      justifyContent: 'space-between',
      '@media (max-width: 985px)': {
        flexDirection: 'column',
      },
    },
    templateLinkBox: {
      // position: "absolute",
      // right: "0",
    },
    templateLink: {
      margin: '0 5px',
      textDecoration: 'none',
      color: '#0BAECA',
      fontSize: '18px',
      fontFamily: FontFamily,
    },

    wl_content: {
      position: 'relative',
      // background: "#fff",
      // padding: "1vmax",
      borderRadius: '8px',
      '& .MuiFormHelperText-contained': {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },

    backtoLink: {
      display: 'flex',
      // justifyContent: "flex-start",
      // alignItems: "center",
      // color: "#2B2F3B",
      // textDecoration: "none",
      // width: "13vmax",
      // "@media (max-width: 1024px)": {
      //   width: "16vmax",
      // },
    },
    backtoClients: {
      display: 'flex',
      fontFamily: FontFamily,
    },
    chevronLeftIcon: {
      color: '#46D7CB',
      background: 'transparent !important',
    },
  },
  { index: 1 }
);
