import React, { useState, useEffect, useContext } from 'react';
import { UserService } from '../../core';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchImgIcon from '../../assets/images/searchIcon.svg';
import TextField from '@mui/material/TextField';
import ClientProfile from './ClientProfile';
import { clientSearchStyles } from './ClientSearchStyle';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { CommonContext, CommonContextType } from '../../core/context';
import SelectIcon from '../../assets/images/select.svg';
import AddClientToggle from './AddClientToggle';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WearableCategories from './WearableCategores';
type Props = {
  selectedUserId: string;
  userSelectHandler?: any;// not required where search field for client needs to be disabled
  diableChooseClientScreen?: boolean; // used for Intelligence as there is no need to show please choose client first 
  //this 2 fields used to add/ remove selected client to organisation used in client details screen.
  showAddClientToggle?: boolean;
  showWearableCategory?: boolean;
  toggleValue?: boolean;
  changeCategory?: (category: string) => void;
  changeActivityType?: (activityType: any) => void;
};
const ClientSearch = (props: Props) => {
  const { setUserId } = useContext(CommonContext) as CommonContextType;
  const [userList, setUserList] = useState<any[]>([]);
  const [selectedUserData, setSelectedUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>('');
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [materialAutoCompleteOptions, setMaterialAutoCompleteOptions] = useState<any[]>([]);
  const classes = clientSearchStyles();
  const [showMenu, setShowMenu] = useState<boolean>(false); //client search box shown according to this condition
  const theme = useTheme();
  const lessThan1300 = useMediaQuery(theme.breakpoints.down(1300));

  const getUserList = async () => {
    await UserService.getUserList().then((res) => {
      setUserList(res);
      setShowMenu(true);
      const materialAutoCompleteUser: any[] = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i]?.name) {
          materialAutoCompleteUser.push(res[i]?.name);
        }
      }
      setMaterialAutoCompleteOptions(materialAutoCompleteUser);
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getUserData = React.useCallback(async () => {
    setLoading(false);
    const externalKeys = 'Bodyweight,Height';
    await Promise.all([
      UserService.getUserDetails(props.selectedUserId),
      UserService.getClientHealthMarkers(props.selectedUserId, externalKeys)
    ]).then((response: any) => {
      const userData: any = {};
      //Extracting Weight,Height Value
      response[1]?.data[0]?.healthMarkers.forEach((element) => {
        if (element.externalKey === 'Bodyweight') {
          userData.weight = Number.parseInt(element.value);
        } else if (element.externalKey === 'Height') {
          userData.height = Number.parseInt(element.value);
        }
      });
      setLoading(true);
      setSelectedUserData({
        ...response[0]?.data,
        weight: userData?.weight,
        height: userData?.height
      });
    });
  }, [props.selectedUserId]);

  useEffect(() => {
    if (props.selectedUserId) {
      getUserData();
    }
  }, [props.selectedUserId, getUserData]);

  useEffect(() => {
    //used to show selected name of user in the search field
    if (userList?.length > 0 && props.selectedUserId) {
      const result = userList.filter(
        (obj) => obj?.userCognitoId.toString().toLowerCase() === props.selectedUserId.toLowerCase()
      );
      setSelectedUserName(result[0]?.name);
      setValue(result[0]?.name);
      setInputValue(result[0]?.name);
    }
  }, [userList, props.selectedUserId]);

  const handleOnMaterialAutoSelect = React.useCallback(
    (searchString) => {
      if (userList?.length > 0 && searchString) {
        const result = userList.filter((obj) => obj?.name?.toString().toLowerCase() === searchString.toLowerCase());
        if (result.length > 0) {
          if (props.userSelectHandler) {
            props.userSelectHandler(result[0]?.userCognitoId);
          }

          setUserId(result[0]?.userCognitoId); ///saving context value
          setSelectedUserName(result[0]?.name);
        }
      }
    },
    [props, setUserId, userList]
  );

  useEffect(() => {
    handleOnMaterialAutoSelect(value);
  }, [value, handleOnMaterialAutoSelect]);

  const getAlignItems = () => {
    if (selectedUserName === undefined || selectedUserName.length === 0) {
      return undefined;
    }

    if (props.showWearableCategory === true || props.showAddClientToggle === true) {
      if (lessThan1300) {
        return 'flex-start';
      } else {
        return 'flex-end';
      }
    }
    return undefined;
  };

  return (
    <React.Fragment>
      <Box className={classes.clientSearchBox} sx={{ mb: 3 }}>
        <Box className={classes.fixedClientSearch}>
          {/* <Typography mb={1} className={classes.subHeading}>
            Client:
          </Typography> */}
          {showMenu && (
            <Box className={'clientSearch'}>
              <Stack className={classes.userDetailsBox} sx={{ alignItems: getAlignItems() }}  >
                <ClientProfile
                  loading={loading}
                  userDetailsData={selectedUserData}
                  selectedUserName={selectedUserName}
                  searcField={
                    <Box className={classes.dvfsr_searchField}>
                      <Autocomplete
                        disabled={!props.userSelectHandler}
                        noOptionsText={'No matches'}
                        id="client"
                        // disableClearable
                        // open
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        options={materialAutoCompleteOptions}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Search for a client"
                            fullWidth
                            InputProps={{
                              ...params.InputProps,
                              sx: {
                                fontFamily: 'Poppins',
                                fontSize: 16,
                                fontWeight: 400
                              },
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img src={SearchImgIcon} alt="" />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      />
                    </Box>
                  }
                />

                {props.showAddClientToggle && <AddClientToggle toggleValue={props.toggleValue} selectedUserData={selectedUserData} />}

                {selectedUserName && props.showWearableCategory && <WearableCategories clientId={props.selectedUserId} changeActivityType={props?.changeActivityType} changeCategory={props?.changeCategory}></WearableCategories>}

                {/* )} */}

                {!selectedUserName && !props.selectedUserId && !props.diableChooseClientScreen && (
                  <Box className={classes.chooseClientBox}>
                    <Box className={classes.selectImage}>
                      {' '}
                      <img src={SelectIcon} alt="" />
                    </Box>
                    <Typography sx={{ mt: 3 }}>Please select a client to continue</Typography>
                  </Box>
                )}
              </Stack>
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ClientSearch;
