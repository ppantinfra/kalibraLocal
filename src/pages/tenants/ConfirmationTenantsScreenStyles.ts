import { makeStyles } from '@mui/styles';
import {
  FontColor,
  ButtonRadius,
  DefaulPrimarytColor,
  FontFamily,
} from '../../core/constants/ElementBaseStyles';
import { darken } from '@mui/material';

export const useConfirmationTenantsScreenStyles = makeStyles(
  {
    container: {
      backgroundColor: 'rgba(217, 220, 240, 0.1)',
      padding: '0',
      height: '100vh',
      '& ~ footer': {
        display: 'none',
      },
    },

    tenantContent: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    profileIconBox: {
      display: 'none',
    },
    profileIcon: {
      opacity: '.8',
      margin: 'auto',
      width: '100px',
      height: '100px',
    },
    tenantsBox: {
      height: '74vh',
      overflowY: 'auto',
      width: '537px',
      background: '#fff',
      borderRadius: ButtonRadius,
      boxShadow:
        '0px 56px 22px rgba(143, 155, 179, 0.01), 0px 32px 19px rgba(143, 155, 179, 0.05), 0px 14px 14px rgba(143, 155, 179, 0.09), 0px 4px 8px rgba(143, 155, 179, 0.1), 0px 0px 0px rgba(143, 155, 179, 0.1)',
      padding: '48px',

      '@media (max-width: 900px)': {
        padding: '24px',
        height: '70vh',
      },
      '@media (max-width: 600px)': {
        width: '465px',
      },
      '@media (max-width: 480px)': {
        width: '355px',
      },
    },
    headerTitle: {
      fontSize: '28px',
      fontFamily: FontFamily,
      fontWeight: '600',
      lineHeight: '32px',
      letterSpacing: '0em',
      textAlign: 'center',
      color: '#000000',
      paddingBottom: '24px',
      '@media (max-width: 1280px)': {
        fontSize: '26px',
      },
    },

    ht_paragraph: {
      color: FontColor,
      fontSize: '18px',
      fontFamily: FontFamily,
      fontWeight: '400',
      lineHeight: '19.6px',
      paddingBottom: '24px',

      '@media (max-width: 1280px)': {
        fontSize: '14px',
      },
    },
    selectProvider: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: '20px',
      width: '100%',
      columnGap: '20px',
      flexWrap: 'wrap',
    },

    SelectSection: {
      transition: '.3s all',
      '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        width: '8px',
        height: '8px',
      },
      '&::-webkit-scrollbar-track': {
        borderRadius: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '8px',
        backgroundColor: 'rgb(178 179 181 / 10%)',
        minHeight: '24',
        boxShadow: 'inset 1px 0px 5px #e4e9f2',
      },
      '&::-webkit-scrollbar-thumb:focus': {
        backgroundColorr: '#959595',
      },
    },
    linkButton: {
      flex: '1 1 40%',
      background: DefaulPrimarytColor.primary500green,
      borderRadius: ButtonRadius,
      color: '#fff',
      padding: '10px 20px',
      textDecoration: 'none',
      width: '100%',
      cursor: 'pointer',
      textAlign: 'center',
      '&:hover': {
        background: `${darken(String(DefaulPrimarytColor.primary500green), 0.1)} !important`
      }
    },
  },
  { index: 1 }
);
