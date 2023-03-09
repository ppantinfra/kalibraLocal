import React, { useContext, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HealthQuote from '../../components/common/HealthQuote';
import KaliQuote from '../../components/common/KaliQuote';
import { CommonContext, CommonContextType } from '../../core/context';
import { FontFamily, FontColor, FontStyle, UserService } from '../../core';
import { makeStyles } from '@mui/styles';
import ClientAssessmentsList from '../../components/clients/ClientAssessmentsList';
import Back from '../../components/common/Back';
import { useParams } from 'react-router-dom';

export const useStyles = makeStyles(
  {
    page_Content: {
      '& .MuiTablePagination-selectLabel': {
        '@media (max-width: 768px)': {
          display: 'none'
        }
      },
    },
    dvui_name: {
      color: FontColor,
      fontSize: '32px',
      fontWeight: '600',
      fontFamily: FontFamily,

      '@media (max-width: 1024px)': {
        fontSize: '28px'
      },
      '@media (max-width: 768px)': {
        fontSize: '24px'
      },
      '@media (max-width: 640px)': {
        fontSize: '22px'
      }
    },

    dvui_text: {
      color: FontColor,
      fontSize: '16px',
      fontWeight: '400',
      fontFamily: FontFamily,
      fontStyle: FontStyle,
      paddingBottom: '16px',
      '@media (max-width: 1024px)': {
        fontSize: '16px'
      }
    }
  },
  { index: 1 }
);



const ClientAssessmentsScreen = () => {
  const classes = useStyles();

  const { loggedInUserName } = useContext(CommonContext) as CommonContextType;
  const [filterAssessment, setFilterAssessment] = useState<any>();
  const [assessments, setAssessments] = useState<any>();
  const params = useParams();
  const [clientName, setClientName] = useState<string>('');

  useEffect(() => {
    UserService.getInactiveClientAssessmentList(params?.inactiveClientId).then((res) => {
      if (res.status === 200) {
        setAssessments(res.data);
        setFilterAssessment(res.data);
        setClientName(res.data.length > 0 ? res.data[0]?.userName : '');

      }
    });
  }, [params]);

  function dynamicSort(property, type, objKey?) {

    return function (a, b) {
      let result;
      let firstValue;
      let secValue;

      if (!objKey) {
        firstValue = a[property];
        secValue = b[property];
      } else {
        const objA = a.healthMarkers.find((o) => o.externalKey === objKey);
        firstValue = objA ? objA.value : '';
        const objB = b.healthMarkers.find((o) => o.externalKey === objKey);
        secValue = objB ? objB.value : '';
      }

      if (type === 'asc') {
        result = firstValue < secValue ? -1 : firstValue > secValue ? 1 : 0;
      } else {
        result = firstValue > secValue ? -1 : firstValue < secValue ? 1 : 0;
      }
      return result;
    };
  }

  const sort = (property: string, type: string, objKey?: string) => {
    const users = assessments.sort(dynamicSort(property, type, objKey));
    setFilterAssessment(() => {
      return [...users];
    });
  };

  return (
    <React.Fragment>
      <Box className={classes.page_Content}>
        <Typography className={classes.dvui_name}>Hi {loggedInUserName}!</Typography>
        <KaliQuote quotesBGColor="#fff" quotesBorder="1px solid #46D5CD">
          <HealthQuote />
        </KaliQuote>
        <Back componentTitle={clientName} />
        <ClientAssessmentsList assessments={filterAssessment} clientId={params?.inactiveClientId} sortHandler={sort} />
      </Box>
    </React.Fragment>
  );
};

export default ClientAssessmentsScreen;
