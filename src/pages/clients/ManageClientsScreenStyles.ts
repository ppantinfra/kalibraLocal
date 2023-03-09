import { makeStyles } from '@mui/styles';
import {
    FontFamily,
    ButtonStyles,
    FontStyle
  } from '../../core';
  

export const useManageClientsScreenStyles = makeStyles({
  page_Content: {
    '& .MuiTablePagination-selectLabel': {
      '@media (max-width: 768px)': {
        display: 'none'
      }
    }
  },
  mc_headingSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      marginTop: '12px'
    },
    '@media (max-width: 600px)': {
      // flexDirection: 'column'
    }
  },
  addNewClientLink: {
    ...ButtonStyles(
      '12px',
      '#33B7B8',
      '#fff !important',
      'capitalize',
      'none',
      '10px',
      FontFamily,
      FontStyle,
      '500',
      '14px',
      '20px',
      'none',
      'none'
    ),
    height: '45px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: '.3s all',
    '&:hover': {
      background: '#53c0b7'
    },

    '@media (max-width: 768px)': {
      fontSize: '12px',
      letterSpscing: '.5px'
    },
    '& svg': {
      paddingRight: '5px'
    }
  },
  dv_clientsFilterSection: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
      marginTop: '12px'
    },
    '@media (max-width: 935px)': {
      flexDirection: 'column'
    }
  },
  dvcfs_left: {
    display: 'flex',
    alignItems: 'center',

    '& .MuiTabs-flexContainer': {
      alignItems: 'center'
    }
  },
  dvcfs_clients: {
    // color: "#33B7B8",
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: FontFamily,
    lineHeight: '140%',
    // marginRight: '21px'
  },
  tabIndicator: {
    backgroundColor: 'transparent'
  },
  dvcfs_right: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '24px',
    marginBottom: '10px',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      rowGap: '12px',
      marginBottom: '20px',
      marginTop: '5px'
    },
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      rowGap: '12px',
      marginBottom: '20px',
      marginTop: '5px'
    }
  },
});
