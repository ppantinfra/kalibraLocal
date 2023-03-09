import React from 'react';
import { useManageOrganizationListStyles } from './ManageOrganizationListStyles';
import { Box, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import johnPic from '../../assets/images/avatar.png';

const ClientList = ({ clients, userName }) => {
  const classes = useManageOrganizationListStyles();
  return (
    <>
      <Typography className={classes.userName}>{userName}</Typography>
      <Box sx={{ mt: 2 }}>
        {clients &&
          clients.map((obj, rolesIndex) => (
            // <div key={rolesIndex}> {obj?.name} </div>
            <Stack className={classes.clientList} key={rolesIndex}>
              {/* name */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '0.65vmax'
                }}
              >
                <Avatar alt={johnPic} src={johnPic} className={classes.UserAvatar} />
                <span>
                  <Typography className={classes.avatarName}>{obj?.name}</Typography>
                </span>
              </Box>
            </Stack>
          ))}
      </Box>
    </>
  );
};

export default ClientList;
