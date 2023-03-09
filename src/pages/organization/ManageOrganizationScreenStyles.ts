import { makeStyles } from '@mui/styles';
import {
  FontFamily,
  ButtonStyles,
  FontStyle
} from '../../core';


export const useManageOrganizationScreenStyles = makeStyles({
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
    marginTop: '-15px',
    '@media (max-width: 768px)': {
      marginTop: '0px'
    },
    '@media (max-width: 600px)': {
      // flexDirection: 'column'
    }
  },
  addNewClientLink: {
    ...ButtonStyles(
      '12px 24px',
      '#46D7CB',
      '#fff !important',
      'capitalize',
      'none',
      '8px',
      FontFamily,
      FontStyle,
      '500',
      '14px',
      '20px',
      'none',
      'none'
    ),
    height: '40px',
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
      letterSpacing: '.5px',
      whiteSpace: 'nowrap'
    },
    '& svg': {
      paddingRight: '5px'
    }
  },
});
