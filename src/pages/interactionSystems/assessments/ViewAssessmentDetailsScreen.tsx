import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonContext, CommonContextType } from '../../../core/context';
import AssessmentDetailsAccordion from '../../../components/assessments/AssessmentDetailsAccordion';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { RoutesPath as route } from '../../../core/constants';

type Props = {
  reportIdProp?: string;
  componentOpenOnDialog?: boolean;
};

const ViewAssessmentDetailsScreen = ({ reportIdProp, componentOpenOnDialog }: Props) => {
  const location = useLocation();
  const [selectedReportId, setSelectedReportId] = useState<any>('');
  const states: any = location?.state;
  const { userId } = useContext(CommonContext) as CommonContextType;
  const clientId = states?.clientId;
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const [isInactiveClient, setIsInactiveClient] = React.useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedUserId(clientId !== undefined ? clientId : userId);
  }, [userId, clientId]);

  useEffect(() => {
    if (reportIdProp) { //this is called when we call component then value came from props
      setSelectedReportId(reportIdProp);
    }

    if (!states) { //case when user enter specific route and state is null
      navigate(`/${route.ASSESSMENT}`);
    } else {
      if (states?.clientId) { //this is called when user open page through navigation
        setSelectedUserId(states?.clientId);
      }
      if (states?.reportId) { //this is called when user open page through navigation
        setSelectedReportId(states?.reportId);
      }
      if (states?.isInactiveClient) { //this is called when user open page through navigation
        setIsInactiveClient(states?.isInactiveClient);
      }
    }





  }, [reportIdProp, states, navigate]);

  const editAssessmentHandler = (assessmentId) => {
    navigate(`/${route.ASSESSMENT}/${route.EDITASSESSMENT}`, {
      state: {
        assessmentId: assessmentId,
        isEdit: true
      },
      replace: true
    });
  };



  return (
    <React.Fragment>
      {!componentOpenOnDialog && !clientId && (
        <ClientSearch selectedUserId={selectedUserId} />
      )}
      <AssessmentDetailsAccordion reportId={selectedReportId} clientId={clientId !== undefined ? clientId : userId} isInactiveClient={isInactiveClient} componentOpenOnDialog={componentOpenOnDialog}
        editAssessmentHandler={(id) => { editAssessmentHandler(id); }}
      />
    </React.Fragment>
  );
};

export default ViewAssessmentDetailsScreen;
