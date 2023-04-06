import React, { useContext, useEffect, useState } from 'react';
import { screenTitle, RoutesPath as route } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import Back from '../../../components/common/Back';
import { CommonContext, CommonContextType } from '../../../core/context';
import { useLocation, useNavigate } from 'react-router-dom';
import ResultSummery from '../../../components/bloodwork/ResultSummery';

const ResultSummaryScreen = () => {
    const { userId } = useContext(CommonContext) as CommonContextType;
    const location = useLocation();
    const navigate = useNavigate();
    const [assessment, setAssessment] = useState<any>('');
    const [bloodworkId, setBloodworkId] = useState<any>('');

    useEffect(() => {
        const states: any = location?.state;

        if (!states) { //case when user enter specific route and state is null
            navigate(`/${route.BLOODWORK}`);
        } else {
            if (states?.assessment) { //this is called when user open page through navigation
                setAssessment(states?.assessment);
            }
            if (states?.bloodworkId) {
                setBloodworkId(states?.bloodworkId);
            }
        }
    }, [location?.state, navigate]);

    return (
        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <Back componentTitle={screenTitle.ResultSummaryPage} bloodworkMeasuredDate={assessment.measuredDate} btnBackHandler={() => {
                navigate(`/${route.BLOODWORK}`, {
                    state: {
                        bloodworkId: bloodworkId
                    }
                });
            }}
            />
            {assessment && <ResultSummery assessment={assessment} />}

        </React.Fragment>
    );
};

export default ResultSummaryScreen;