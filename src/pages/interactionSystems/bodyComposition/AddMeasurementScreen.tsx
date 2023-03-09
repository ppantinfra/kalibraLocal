import React, { useState, useEffect, useContext } from 'react';
import { AssessmentAccordion } from '../../../components/assessments';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { UserService } from '../../../core';
import { CommonContext, CommonContextType } from '../../../core/context';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import MeasurementTabs from '../../../components/bodycomp/MeasurementTabs';


const AddMeasurementaScreen = () => {
    const [assessmentGroups, setAssessmentGroups] = useState<any>([]);
    const [assessmentType, setAssessmentType] = useState('');
    const { userId } = useContext(CommonContext) as CommonContextType;
    const [selectedTab, setSelectedTab] = useState<string>('dimensions');


    const getAssessmentGroupsOnAddCase = (assessmentName: string) => {
        UserService.getHealthMarkers(assessmentName).then((res) => { //
            if (res) {
                setAssessmentGroups(res?.groups);
                setAssessmentType(res?.reportType);
            }
        });
    };

    useEffect(() => {
        const assessmentName = selectedTab === 'dimensions' ? 'StykuAssessment' : 'BodyCompAssessment';
        getAssessmentGroupsOnAddCase(assessmentName);
    }, [selectedTab]);

    const ontabsChange = (value: any) => {
        setSelectedTab(value);
    };

    return (
        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <Back componentTitle={screenTitle.AddMeasurementPage} componentRender={<MeasurementTabs tabChangeHandler={ontabsChange} selectedTab={selectedTab} />} />


            <AssessmentAccordion assessmentGroups={assessmentGroups}
                assessmentType={assessmentType}
                isEdit={false}
                userId={userId}

            />

        </React.Fragment>
    );
};

export default AddMeasurementaScreen;