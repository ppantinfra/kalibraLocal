import React from 'react';
import { useAnalyticsScreenStyles } from '../../analytics/AnalyticsScreenStyles';
//import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
//import { useParams } from "react-router-dom";
//import ClientSearch from "../../components/client-search/ClientSearch";
import DummyRedered from '../../../components/common/DummyRedered';
import Back from '../../../components/common/Back';
import ForumIcon from '@mui/icons-material/Forum';
import { screenTitle } from '../../../core/constants';

const ConversationsScreen = () => {
  const classes = useAnalyticsScreenStyles();
  // const { clientId } = useParams();
  // const [selectedUserId, setSelectedUserId] = React.useState<any>(clientId);

  // const onUserSelect = (userId: any) => {
  //   setSelectedUserId(userId);
  // };

  return (
    <Box>
      {/* <ClientSearch
        selectedUserId={selectedUserId}
        userSelectHandler={onUserSelect}
      /> */}
      <Back componentTitle={screenTitle.ConversationsPage} />
      <Box className={classes.page_Content}>
        <DummyRedered
          renderedText="Coming soon"
          renderedImageIcon={<ForumIcon />}
        />
      </Box>
    </Box>
  );
};

export default ConversationsScreen;
