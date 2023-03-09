import React, { useContext, useState } from 'react';
import MeasurementList from '../../../components/bodycomp/MeasurementList';
import { CommonContext, CommonContextType } from '../../../core/context';
import { screenTitle } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import MeasurementTabs from '../../../components/bodycomp/MeasurementTabs';
import Back from '../../../components/common/Back';

const CompareMeasurementScreen = () => {
    const { userId } = useContext(CommonContext) as CommonContextType;
    const [selectedTab, setSelectedTab] = useState<string>('dimensions');

    const ontabsChange = (value: any) => {
        setSelectedTab(value);
    };

    return (
        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <Back componentTitle={screenTitle.CompareMeasurementPage} componentRender={<MeasurementTabs tabChangeHandler={ontabsChange} selectedTab={selectedTab} />} />
            <MeasurementList clientId={userId} selectedTab={selectedTab} />
        </React.Fragment>
    );
};

export default CompareMeasurementScreen;