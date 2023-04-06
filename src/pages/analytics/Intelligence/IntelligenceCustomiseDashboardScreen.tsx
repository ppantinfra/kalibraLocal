import React from 'react';
import { IntelligenceCustomiseDashboard } from '../../../components/intelligence';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';

const IntelligenceCustomiseDashboardScreen = () => {
  return (
    <React.Fragment>
        <Back componentTitle={screenTitle.IntelligencePage} disableBackButton={true} />
        <IntelligenceCustomiseDashboard />
    </React.Fragment>
  );
};

export default IntelligenceCustomiseDashboardScreen;