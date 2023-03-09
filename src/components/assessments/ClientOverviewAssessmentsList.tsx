import React, { useEffect } from 'react';
import BackendApi from '../../api/shared/BackendApi';
import { UserService } from '../../core';
import IndividualAssessments from './IndividualAssessments';


type IAssessmentListProps = {
    clientId?: any;
};

const ClientOverviewAssessmentsList = ({ clientId }: IAssessmentListProps) => {
    const [assessmentList, setAssessmentList] = React.useState<any>();

    const getAssessmentList = async (id: string) => {
        if (id) {
            try {
                await UserService.getUserAssessmentList(id).then((res) => {
                    if (res.data) {
                        const firstFiveAssessments = res.data.slice(0, 5);
                        setAssessmentList(firstFiveAssessments);
                    } else {
                        setAssessmentList([]);
                    }

                });
            } catch (error) {
                setAssessmentList([]);
            }
        }

    };

    useEffect(() => {
        if (clientId) {
            getAssessmentList(clientId);
        }
    }, [clientId]);

    const deleteAssessmentHandler = async (assessmentId: string) => {
        const response = await BackendApi.delete(`/pro/clean-user-assessment-data/${assessmentId}/${clientId}`);
        if (response.status >= 200 && response.status <= 399) {
            getAssessmentList(clientId);
        }
    };

    return (
        <React.Fragment>
            <IndividualAssessments assessmentList={assessmentList} disableHeaderAndPagination={true} showViewMoreButton={true} deleteAssessmentHandler={deleteAssessmentHandler} />
        </React.Fragment>
    );
};


export default ClientOverviewAssessmentsList;