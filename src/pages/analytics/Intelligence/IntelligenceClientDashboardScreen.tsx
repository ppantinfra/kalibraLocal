import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IntelligenceClientDashboard } from '../../../components/intelligence';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';

const IntelligenceClientDashboardScreen = () => {
    const params = useParams();

    useEffect(() => {
        console.debug(params?.selectedClientId);
    }, [params]);
    return (
        <React.Fragment>
             <Back componentTitle={screenTitle.IntelligenceDashboardPage} />
             <IntelligenceClientDashboard />
        </React.Fragment>
       
    );
};

export default IntelligenceClientDashboardScreen;