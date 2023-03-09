import React from 'react';
import Box from '@mui/material/Box';
import { clientSearchStyles } from './ClientSearchStyle';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import moveIcon from '../../assets/images/bloodwork/move-icon.png';
import restIcon from '../../assets/images/bloodwork/rest-icon.png';
import { FontFamily } from '../../core';
import BackendApi from '../../api/shared/BackendApi';

type IProps = {
  clientId: string;
  changeCategory?: (category: string) => void;
  changeActivityType?: (activityType: any) => void;

};

const WearableCategories = ({ clientId, changeCategory, changeActivityType }: IProps) => {
  const classes = clientSearchStyles();
  const [selectedActivityType, setSelectedActivityType] = React.useState<any>();
  const [isMoveActivity, setIsMoveActivity] = React.useState<boolean>(false);
  const [moveActivityTypes, setMoveActivityTypes] = React.useState<Array<any>>([]);
  const [restActivityTypes, setRestActivityTypes] = React.useState<Array<any>>([]);

  const handleDropdown = (event: SelectChangeEvent) => {
    setSelectedActivityType(event.target.value);
    if (changeActivityType) {
      changeActivityType(event.target.value);
    }
  };

  const getActivityTypes = React.useCallback(async () => {
    try {
      const response = await BackendApi.get(`/pro/intelligence/dashboard/terra-activity-types/${clientId}`);
      if (response.status >= 200 && response.status <= 399) {
        const allCategoriesItem = { activityTypeId: 9999, activityTypeName: 'All Categories', activities: '0' };
        const sleepItem = { activityTypeId: 1000, activityTypeName: 'Sleep', activities: '0' };
        setSelectedActivityType(allCategoriesItem);
        setMoveActivityTypes([...[allCategoriesItem], ...response.data]);
        setRestActivityTypes([allCategoriesItem, sleepItem]);
      }
    } catch (err) {
      console.error(err);
    }
  }, [clientId]);

  React.useEffect(() => {
    getActivityTypes();
  }, [getActivityTypes]);

  const activityTypes = isMoveActivity === true ? moveActivityTypes : restActivityTypes;
  return (
    <Box
      className={classes.categoryContainer}
    >
      <Box style={{ display: 'flex', flexDirection: 'row', zIndex: 99999, cursor: 'pointer' }} onClick={() => {
        if (isMoveActivity === false) {
          setSelectedActivityType(activityTypes[0]);
          if (changeActivityType) {
            changeActivityType(activityTypes[0]);
          }
        }
        setIsMoveActivity(true);
        if (changeCategory) {
          changeCategory('Move');
        }
      }}>
        <img style={{ width: '20px', height: '20px' }} src={moveIcon} alt={''} />
        <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center' }}>
          <Typography style={{ marginLeft: '6px', fontSize: '12px', fontFamily: FontFamily, fontWeight: isMoveActivity === true ? '600' : '400' }} >
            MOVE
    </Typography>
          {isMoveActivity === true &&
            <Box style={{ justifyContent: 'center', display: 'flex' }}>
              <Box style={{ backgroundColor: '#222B45', height: '2px', width: '6px' }}></Box>
            </Box>
          }
        </Box>
      </Box>

      <Box style={{ display: 'flex', flexDirection: 'row', zIndex: 99999, marginRight: '26px', marginLeft: '24px', cursor: 'pointer' }} onClick={() => {
        if (isMoveActivity === true) {
          setSelectedActivityType(activityTypes[0]);
          if (changeActivityType) {
            changeActivityType(activityTypes[0]);
          }
        }
        if (changeCategory) {
          changeCategory('Rest');
        }
        setIsMoveActivity(false);
      }}>
        <img style={{ width: '20px', height: '20px' }} src={restIcon} alt={''} />
        <Box style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center', alignSelf: 'center' }}>
          <Typography style={{ marginLeft: '6px', fontSize: '12px', fontFamily: FontFamily, fontWeight: isMoveActivity === true ? '400' : '600' }} >
            REST
    </Typography>
          {isMoveActivity === false &&
            <Box style={{ justifyContent: 'center', display: 'flex' }}>
              <Box style={{ backgroundColor: '#222B45', height: '2px', width: '6px' }}></Box>
            </Box>
          }
        </Box>
      </Box>
      {activityTypes.length > 0 &&
        <Select
          fullWidth
          value={selectedActivityType as any}
          defaultValue={'30'}
          onChange={(event) => handleDropdown(event)}
          className={classes.selectActivityField}
          size='small'
          MenuProps={{
            sx: {
              '&& .Mui-selected': {
                backgroundColor: '#46D7CB !important',
                borderRadius: '0px !important'
              }
            }
          }}
        >
          {activityTypes?.map((activityType, index) => {
            return (
              <MenuItem key={index} value={activityType as any} style={{}} className={classes.menuItem}
              >
                {activityType.activityTypeName}
              </MenuItem>
            );
          })}
        </Select>
      }
    </Box>
  );
};

export default WearableCategories;
