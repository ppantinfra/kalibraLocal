import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserService } from '../../../core';
import { AssessmentAccordion } from '../../../components/assessments';
import { CommonContext, CommonContextType } from '../../../core/context';
import ClientSearch from '../../../components/client-search/ClientSearch';
import Back from '../../../components/common/Back';
import { RoutesPath as route } from '../../../core/constants';

const AssessmentConductScreen = () => {
    const location = useLocation();
    const [assessmentGroups, setAssessmentGroups] = useState<any>([]);
    const [assessmentType, setAssessmentType] = useState('');
    const [assessmentName, setAssessmentName] = useState('');
    const { userId } = useContext(CommonContext) as CommonContextType;
    const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [selectedReportId, setSelectedReportId] = useState<string>('');
    const [sourceName, setSourceName] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedUserId(userId);
    }, [userId]);

    useEffect(() => {
        setSelectedUserId(userId);
    }, [userId]);

    const getAssessmentGroupsOnAddCase = (assessmentTypeKey: any) => {
        UserService.getHealthMarkers(assessmentTypeKey).then((res) => {
            if (res) {
                setAssessmentGroups(res?.groups);
                setAssessmentType(res?.reportType);
                setAssessmentName(res?.assessmentType);
            }
        });

    };

    const getAssessmentGroupsOnEditCase = (assessmentId: any) => {
        UserService.getAssessmentDetailsForUpdate(assessmentId).then((res) => {
            setAssessmentGroups(res?.data?.groups);
            setAssessmentType(res.data.reportType);
            setAssessmentName(res?.data?.assessmentType);
            setSourceName(res?.data?.sourceName);
        });
    };
    useEffect(() => {
        const states: any = location?.state;
        if (!states) { //case when user enter specific route and state is null
            navigate(`/${route.ASSESSMENT}`);
        } else {
            if (states.type) {
                //add case
                getAssessmentGroupsOnAddCase(states?.type?.assessmentTypeKey);
            }
            if (states?.isEdit) {
                setIsEdit(states?.isEdit);
                setSelectedReportId(states?.assessmentId);
                //edit case
                getAssessmentGroupsOnEditCase(states?.assessmentId);
            }
        }


    }, [location?.state, navigate]);

    return (
        <React.Fragment>
            <ClientSearch selectedUserId={selectedUserId} />
            <Back componentTitle={assessmentName} disableBackButton={false} />
            {assessmentName === 'Wearables' && <span className='sourceWrapper'><strong>Source:</strong> <span>{sourceName.toString().toLowerCase()}</span></span>}
            <AssessmentAccordion
                assessmentGroups={assessmentGroups}
                assessmentType={assessmentType}
                isEdit={isEdit}
                userId={userId}
                reportId={selectedReportId}
            />
        </React.Fragment>

    );
};
export default AssessmentConductScreen;