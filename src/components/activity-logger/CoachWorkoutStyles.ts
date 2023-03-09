import { makeStyles } from '@mui/styles';
import { FontColor } from '../../core';

export const CoachWorkoutStyles = makeStyles(
  {
    cb_card: {
      background: '#fff',
      borderRadius: '5px',
      padding: '2vmax',
      boxShadow: 'rgba(33, 37, 41, 0.05) 0px 0px 0.875rem 0px',
      border: '1px solid rgb(33 37 41 / 15%)',
      '& .move_cb_card': {
        border: 'none !important',
      },
    },
    cb_card_title: {
      fontSize: '18px',
      color: '#2B2F3B',
      paddingBottom: '1vmax',
      marginBottom: '0',
      textAlign: 'initial',
      '@media (max-width: 768px)': {
        fontSize: '15px',
      },
    },
    //   Table
    mui_tableContainer: {
      overflow: 'hidden',
    },
    mui_table: {
      borderSpacing: '2px !important',
    },

    tableBody_coach: {
      '& .css-1ex1afd-MuiTableCell-root': {
        padding: '8px 16px',
        fontSize: '12px',
        textAlign: 'start !important',
        color: FontColor,
        fontWeight: '400',
      },

      '& .css-1qkwuln-MuiTableRow-root:nth-of-type(2n+1)': {
        backgroundColor: 'rgba(0, 0, 0, 0.04) !important',
        '& .css-1ex1afd-MuiTableCell-root': {
          padding: '8px 16px',
        },
      },
    },
    tableBodyRow: {
      color: '#2B2F3B',
    },
    tableBodyCell: {
      fontWeight: '400',
      border: '1px solid rgba(178 179 181/10%)',
      fontSize: '12px',
      color: '#2B2F3B',
      textAlign: 'start',
      '&:first-child': {
        position: 'sticky',
        left: 0,
        textAlign: 'start !important',
      },
    },
    tableBodyCell_imgIcon: {
      width: '3vmax',
    },
  },
  { index: 1 }
);
