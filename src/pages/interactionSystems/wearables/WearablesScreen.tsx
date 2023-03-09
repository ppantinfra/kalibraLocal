import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../../core/context';
import Wearables from '../../../components/wearables/Wearble';

const WearablesScreen = () => {
  const [selectedUserId, setSelectedUserId] = React.useState<any>(null);
  const [category, setCategory] = React.useState<string>('Rest');
  const [selectedActivityType, setSelectedActivityType] = React.useState<any>({ activityTypeId: 9999, activityTypeName: 'All Categories', activities: '0' });
  const { userId } = useContext(CommonContext) as CommonContextType;

  useEffect(() => {
    setSelectedUserId(userId);
  }, [userId]);

  const onUserSelect = (slectedUserId: any) => {
    setSelectedUserId(slectedUserId);
  };

  const changeCatgory = (cat: string) => {
    setCategory(cat);
  };

  const changeActivityType = (activityType: any) => {
    setSelectedActivityType(activityType);
  };

  return (
    <React.Fragment>
      <Back componentTitle={screenTitle.WearablesPage} disableBackButton={true} />
      <ClientSearch
        selectedUserId={selectedUserId}
        userSelectHandler={onUserSelect}
        changeActivityType={changeActivityType}
        changeCategory={changeCatgory}
        showWearableCategory={true}
      />
      {selectedUserId && (<Box style={{ marginTop: '40px' }} >
        <Wearables clientId={selectedUserId} category={category} selectedActivityType={selectedActivityType} />
      </Box>)}
    </React.Fragment>
  );
};

export default WearablesScreen;
