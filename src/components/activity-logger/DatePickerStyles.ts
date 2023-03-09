import { makeStyles } from '@mui/styles';
export const DatePickerStyles = makeStyles(() => ({ //define CSS for different date types
  calIcon:{
    '& input': {
      borderRadius: '8px',
      border: '1px solid #C5CEE0'
    },
    '& .MuiIconButton-root': {
      marginLeft: '-53px',
      backgroundColor: 'transparent!important',
      '& svg': {
        fill: '#222B45'
      }
    }
  },
 
  activitiesRun: {
    backgroundColor: '#bff4e0',
    color: '#238f99',
  },

  activitiesWeight: {
    backgroundColor: '#fcd9b7',
    color: '#a53d24',
  },

  activitiesSwim: {
    backgroundColor: '#bfdbfe',
    color: '#2f53b3',
  },


  dpFooter: {
    order: 2,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '300px',
    gap: '10px',
    padding: '0 15px 15px 15px',
    '& .activities': {
      backgroundColor: '#ccc',
      borderRadius: '25px',
      padding: '5px 15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
    },

    '& .activities.run': {
      backgroundColor: '#bff4e0',
      color: '#238f99',
    },

    '& .activities.weight': {
      backgroundColor: '#fcd9b7',
      color: '#a53d24',
    },

    '& .activities.swim': {
      backgroundColor: '#bfdbfe',
      color: '#2f53b3',
    }

  },

}));
