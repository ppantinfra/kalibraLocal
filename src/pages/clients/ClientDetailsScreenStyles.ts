import { makeStyles } from '@mui/styles';
import { FontColor, FontFamily } from '../../core';

export const useClientDetailsScreenStyles = makeStyles(
  {
    backtoLink: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    backtoClients: {
      display: 'flex',
      fontFamily: FontFamily,
      color: FontColor,
    },

    // Tab styles
    mui_tablist: {
      minHeight: '0',
      '& .MuiTab-root.Mui-selected ': {
        color: `${FontColor} !important`,
      },
      '& .MuiTabs-flexContainer': {
      
        columnGap: '10px',
        // rowGap: "10px",
        // flexWrap: "wrap",
        // "@media (max-width: 768px)": {
        //   columnGap: "18px",
        // },
        '@media (min-width: 900px)': {
          justifyContent: 'center',
        },
      },
    },
    mui_tabButton: {
      display: 'flex',
      flexDirection: 'row',
      fontFamily: FontFamily,
      fontWeight: '400',
      fontSize: 18,
      color: '#222B45',
      padding: '0 5px',
      borderRadius: '5px',
      textTransform: 'capitalize',
      transition: '.3s ease',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      minHeight: '48px',
      '@media (max-width:768px)': {
        fontSize: '16px',
      },

      '& .MuiAvatar-circular ': {
        marginRight: '8px',
        width: '19px',
        height: '16px',
      },
      '& .tabIcon': {
        marginBottom: '0',
        width: '16px',
        height: '16px',
        marginLeft: '0',
        marginRight: '8px',
      },
      '&.MuiTab-root.Mui-selected': {
        fontWeight: '600',
      },
    },

    mui_tabButton_biome: {
      '& svg': {
        color: 'rgb(250, 102, 138) !important',
      },
    },
    mui_tabButtonMove: {
      border: '1px solid #C5CEE0',
      padding: '0 20px',
      borderRadius: '20px',
      textTransform: 'capitalize',
      transition: '.3s ease',
      whiteSpace: 'break-spaces',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      width: 'unset',
      minHeight: '33px',
      color: FontColor,
      '&.MuiTab-root.Mui-selected': {
        background: '#C5CEE0 !important',
      },
    },

    // client table styles
    mui_paper: {
      boxShadow: 'none',
    },
    mui_tableContainer: {
      height: '60vmax',
      paddingRight: '1px',
      scrollbarColor: '#6b6b6b #2b2b2b',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '8px',
        height: '8px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '8px',
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
        borderRadius: 8,
        backgroundColor: '#3ba2d529',
        minHeight: 24,
        boxShadow: 'inset 1px 0px 5px #bdbdbd',
      },
      '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
        backgroundColor: '#959595',
      },
    },
    mui_table: {
      borderSpacing: '2px !important',
    },
    tableRow: {
      height: 30,
    },
    tableHeadCell: {
      padding: '0px 16px',
      fontSize: '12px',
      fontWeight: '400',
      border: 0,
      color: '#2B2F3B',
      '&:first-child': {
        position: 'sticky',
        zIndex: '900 !important',
        left: '0',
      },
    },
    tableHeadCellEven: {
      background: '#46D7CB',
      color: '#fff',
    },
    tableHeadCellOdd: {
      background: '#E4E9F2',
      color: '#2B2F3B',
    },
    secondTableHeaderCell: {
      '&:first-child': {
        background: 'red',
      },
    },
    tableBody: {},
    tableBodyRow: {
      color: '#2B2F3B',
    },
    tableBodyCell: {
      fontWeight: '400',
      border: '1px solid rgba(178 179 181/10%)',
      fontSize: '12px',
      color: '#2B2F3B',
      '&:first-child': {
        position: 'sticky',
        left: 0,
        background: 'white !important',
      },
    },

  
  },
  { index: 1 }
);
