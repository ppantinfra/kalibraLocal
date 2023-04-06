import React, { useContext, useEffect, useState } from 'react';
import { RoutesPath as route } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../../core/context';
import { useLocation, useNavigate } from 'react-router-dom';
import { BloodworkDetailedreport } from '../../../components/bloodwork';
import BloodworkReportBack from '../../../components/common/BloodworkReportBack';

const BloodworkDetailedReportScreen = () => {
    const { userId } = useContext(CommonContext) as CommonContextType;
    const location = useLocation();
    const navigate = useNavigate();
    const [bloodworkReportTitle, setBloodworkReportTitle] = useState<any>('');
    const [bloodworkReportGroup, setBloodworkReportGroup] = useState<any>('');
    const [bloodworkMeasuredDate, setBloodworkMeasuredDate] = useState<any>('');
    const [bloodworkId, setBloodworkId] = useState<any>('');


    useEffect(() => {
        const states: any = location?.state;

        if (!states) { //case when user enter specific route and state is null
            navigate(`/${route.BLOODWORK}`);
        } else {
            if (states?.bloodworkReportTitle) {
                setBloodworkReportTitle(states?.bloodworkReportTitle);
            }
            if (states?.bloodworkReportGroup) {
                setBloodworkReportGroup(states?.bloodworkReportGroup);
            }
            if (states?.bloodworkMeasuredDate) {
                setBloodworkMeasuredDate(states?.bloodworkMeasuredDate);
            }
            if (states?.bloodworkId) {
                setBloodworkId(states?.bloodworkId);
            }
        }
    }, [location?.state, navigate]);



    return (
        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <BloodworkReportBack componentTitle={bloodworkReportTitle} score={bloodworkReportGroup.score} bloodworkId={bloodworkId} />
            {
                bloodworkReportGroup && bloodworkReportTitle && bloodworkMeasuredDate && <BloodworkDetailedreport
                    bloodworkReportTitle={bloodworkReportTitle}
                    bloodworkReportGroup={bloodworkReportGroup}
                    bloodworkMeasuredDate={bloodworkMeasuredDate}
                />
            }
        </React.Fragment >
    );
};

export default BloodworkDetailedReportScreen;