/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useBloodworkStyles } from './BloodworkStyles';
import { useForm } from 'react-hook-form';
import { Button, Grid, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import BackendApi from '../../api/shared/BackendApi';
import { BiomarkerItem, Bloodwork } from '../../core/types/Bloodwork.type';
import ConfirmDialog from '../common/confirmation/ConfirmDialog';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { DefaulPrimarytColor, FontFamily } from '../../core';
import { CustomDatePicker, HookFormButton, InputField, MUIButton } from '../common';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type IProps = {
  clientId: string;
  bloodworkId: string;
  onUpdateButtonClickHandler: any;
  onUpdateRAClickHandler: any;
  isUpdatingReferralAuthority: boolean;
  pages: Array<any>;
};

const ReviewBloodwork = ({ onUpdateButtonClickHandler, bloodworkId, clientId, onUpdateRAClickHandler, isUpdatingReferralAuthority, pages }: IProps) => {
  const classes = useBloodworkStyles();
  const defaultHealthMarker = {
    healthMarkerId: -1,
    healthMarkerName: 'Select Marker',
    healthMarkerUnitTypes: []
  };

  const defaultUnit = {
    unitId: -1,
    unit: 'Unit',
    title: 'Unit',
  };

  const [bloodworkData, setBloodworkData] = useState<Bloodwork>();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState(0);
  const [allHealthMarkers, setAllHealthMarkers] = useState([]);
  const [selectedHealthMarker, setSelectedHealthMarker] = useState(undefined);
  const [addMarkerValue, setAddMakerValue] = useState('');
  const [addMarkerUnit, setAddMakerUnit] = useState(undefined);
  const [pagesData, setPagesData] = useState<any>([]);
  const [selectedPageIndex, setSelectedPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let startPageNumber = 0;
  if (pages && pages.length > 0 && pages[0].pageNumber === 0) {
    startPageNumber = 1;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false
  });

  const oldData = bloodworkData;
  const mergeBloodWorkData = (newBloodWork: Bloodwork) => {
    newBloodWork.healthMarker = newBloodWork.healthMarker.sort((a, b) => Number(a.pageNumber) * 1000 + Number(a.lineNumber) - Number(b.pageNumber) * 1000 + Number(b.lineNumber));
    newBloodWork.healthMarker.forEach((hm, index) => {
      const oldHM = oldData?.healthMarker?.find(item => item.bloodworkDataId === hm.bloodworkDataId);
      if (oldHM) {
        newBloodWork.healthMarker[index].unitId = oldHM.unitId;
        newBloodWork.healthMarker[index].value = oldHM.value;
      }
    });
    // newBloodWork.healthMarker = [];
    return newBloodWork;
  };

  const getBloodworkDetail = async () => {
    try {
      const response = await BackendApi.get(`/pro/health-markers/get-bloodwork-detail/${clientId}/${bloodworkId}`);
      if (response.status >= 200 && response.status <= 399) {
        if (response.data !== undefined) {
          if (response.data.length > 0) {
            setIsLoading(true);
            const mergedBloodWork = mergeBloodWorkData(response.data[0]);
            setBloodworkData({ ...mergedBloodWork });
            setTimeout(() => {
              setIsLoading(false);
            }, 20);
            // const pageIndexes: Array<any> = [];
            // const tmpPages: Array<any> = [];
            // for (const item of response.data[0].healthMarker) {
            //   if (!pageIndexes.includes(item.pageNumber)) {
            //     pageIndexes.push(item.pageNumber);
            //     tmpPages.push({ pageNumber: item.pageNumber, pageId: item.pageId } as any);
            //   }
            // }

            if (pagesData.length === 0) {
              let tmpPagesData: Array<any> = [];
              const promises = pages.map(page => {
                return BackendApi.get(`/pro/health-markers/get-bloodwork-boxed-page/${clientId}/${page.documentPageId}`)
                  .then((result) => {
                    tmpPagesData.push(result.data);
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              });
              await Promise.all(promises);
              tmpPagesData = tmpPagesData.sort((a: any, b: any) => Number(a.pageNumber) - Number(b.pageNumber));
              setPagesData(tmpPagesData);
            }
          } else {
            const emptyBloodwork: Bloodwork = {
              userId: clientId,
              documentId: bloodworkId,
              filename: '',
              measuredDate: new Date(),
              uploadedDate: new Date(),
              healthMarker: [],
              referralAuthority: ''
            };
            setBloodworkData(emptyBloodwork);
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDropdown = (event: SelectChangeEvent, index: number) => {
    const tempData = { ...bloodworkData };
    (tempData as any).healthMarker[index].unitId = (event.target.value as any).unitId;
    setBloodworkData(tempData as any);
  };

  const handleAddMarkerDropdown = (event: SelectChangeEvent) => {
    setSelectedHealthMarker(event.target.value as any);
  };

  const handleAddMarkerUnitDropdown = (event: SelectChangeEvent) => {
    setAddMakerUnit(event.target.value as any);
  };

  const handleInputChange = (event: SelectChangeEvent, index: number) => {
    const tempData = { ...bloodworkData };
    ((tempData as any).healthMarker[index] as any).value = event.target.value;
    setBloodworkData(tempData as any);
  };

  const handleAddMarkerInputChange = (event: SelectChangeEvent) => {
    setAddMakerValue(event.target.value);
  };

  const handleDelete = (item: BiomarkerItem, index: number) => {
    setDeletedIndex(index);
    setShowConfirmPopup(true);
  };

  const handleAddNewMarker = async () => {
    try {
      const unitId = (addMarkerUnit as any)?.unitId;
      const parameters = {
        documentId: bloodworkId,
        healthMarkerId: (selectedHealthMarker as any).healthMarkerId,
        value: Number(addMarkerValue),
        unitId: Number(unitId),
        pageId: pagesData.length > 0 ? pagesData[selectedPageIndex].documentPageId : undefined
      };

      const response = await BackendApi.post(`/pro/health-markers/bloodwork-add-new-marker/${clientId}`, parameters);
      if (response.status >= 200 && response.status <= 399) {
        setSelectedHealthMarker(undefined);
        setAddMakerUnit(undefined);
        setAddMakerValue('');
        getBloodworkDetail();
      } else {
        return { errorMessage: 'Looks like we have a little problem, please try again later' };
      }
    } catch (err) {
      return { errorMessage: 'Looks like we have a little problem, please try again later' };
    }

  };

  const deleteHealthMarker = async () => {
    const bloodworkDataId = bloodworkData?.healthMarker[deletedIndex].bloodworkDataId;
    try {
      const response = await BackendApi.delete(
        `/pro/health-markers/bloodwork-delete-marker-data/${clientId}/${bloodworkDataId}`
      );
      if (response.status === 200) {
        const newBloodworkData = { ...bloodworkData };
        newBloodworkData.healthMarker = newBloodworkData.healthMarker?.filter(
          (item) => item.bloodworkDataId !== bloodworkDataId
        );
        setIsLoading(true);
        setBloodworkData(newBloodworkData as any);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (showAddPopup === false) {
      getBloodworkDetail();
    }
    // eslint-disable-next-line
  }, [showAddPopup]);

  React.useEffect(() => {
    BackendApi.get('/pro/health-markers/health-markers-unit-details')
      .then((result) => {
        setAllHealthMarkers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const updateReferralAuthority = async (measuredDate: Date, referralAuthority: string) => {
    try {
      const parameters = [
        { documentId: bloodworkId, referralAuthority: referralAuthority, measuredDate: measuredDate }
      ];
      const response = await BackendApi.post(
        `/pro/health-markers/bloodwork-update-review-data/${clientId}`,
        parameters
      );
      // TODO: need to fix later because BE timeout
      if (response === undefined) {
        // show error here;
      } else if (response.status >= 200 && response.status <= 399) {
        onUpdateRAClickHandler();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const commitBloodwork = async (): Promise<any> => {
    try {
      const response = await BackendApi.get(
        `/pro/health-markers/bloodwork-process-health-markers/${clientId}/${bloodworkId}`
      );
      // TODO: need to fix later because BE timeout
      if (response === undefined) {
        onUpdateButtonClickHandler('');
        setBloodworkData(undefined);
      } else if (response.status >= 200 && response.status <= 399) {
        if (response.data !== undefined) {
          onUpdateButtonClickHandler(response?.data?.id);
          setBloodworkData(undefined);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateBloodwork = async (): Promise<any> => {
    try {
      const parameters: any[] = [];
      bloodworkData?.healthMarker.forEach((item) => {
        parameters.push({
          bloodworkDataId: item.bloodworkDataId,
          healthMarkerId: item.healthMarkerId,
          value: Number(item.value),
          unitId: item.unitId
        });
      });

      const response = await BackendApi.post(
        `/pro/health-markers/bloodwork-update-review-data/${clientId}`,
        parameters
      );
      if (response.status >= 200 && response.status <= 399) {
        if (response.data !== undefined) {
          await commitBloodwork();
        }
      } else {
        // show error here
      }
    } catch (err) {
      console.error(err);
    }
  };

  let canSubmit = true;
  let canAddNewHM = true;
  const getValueError = (item: any) => {
    if (item.value === null || item.value === undefined || String(item.value).trim().length === 0) {
      canSubmit = false;
      return 'Value is missing';
    }
    if (item.unitId && item.unitId > 0) {
      const unit = item.unit_types.find((i) => i.unitId === item.unitId);
      if (unit) {
        if (item.value < unit.rangeMin || item.value > unit.rangeMax) {
          canSubmit = false;
          return 'Please confirm the value, as it is not within an normal range.';
        }
      }
    } else if (item.unitId === null) {
      canSubmit = false;
      return 'Value is invalid';
    }
    return '';
  };

  const getAddMarkerValueError = () => {
    if (addMarkerValue === '' && selectedHealthMarker === undefined && addMarkerUnit === undefined) {
      canAddNewHM = false;
      return '';
    }

    if (addMarkerValue === null || addMarkerValue === undefined || String(addMarkerValue).trim().length === 0) {
      canAddNewHM = false;
      return 'Value is missing';
    }
    if (addMarkerUnit && (addMarkerUnit as any)?.unitId > 0) {
      const unit = (selectedHealthMarker as any)?.healthMarkerUnitTypes.find((i) => i.unitId === (addMarkerUnit as any)?.unitId);
      if (unit) {
        if (addMarkerValue < unit.rangeMin || addMarkerValue > unit.rangeMax) {
          canAddNewHM = false;
          return 'Please confirm the value, as it is not within an normal range.';
        }
      }
    } else if ((addMarkerUnit as any)?.unitId === undefined) {
      canAddNewHM = false;
      return 'Value is invalid';
    }
    return '';
  };

  const processAllHealthMarkers = () => {
    let array = allHealthMarkers.filter(
      (item) => !bloodworkData?.healthMarker.find((it) => (item as any).healthMarkerId === it.healthMarkerId)
    );
    array = array.sort((a: any, b: any) => String(a.healthMarkerName).localeCompare(b.healthMarkerName));
    return array;
    // [defaultHealthMarker].concat(array);
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setSelectedPageIndex(event.selected);
  };

  // const getUnitError = (item: any) => {
  //   if (item.unit === null || item.unit === undefined || item.unut.trim().length === 0) {
  //     return 'Unit is missing';
  //   }
  //   return '';
  // };
  const prevousLabel = () => {
    return <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '24px' }} > <ArrowBackIosIcon style={{ marginRight: '10px', width: '16px', height: '16px' }} /> Page {selectedPageIndex - 1 >= 0 ? pagesData[selectedPageIndex - 1].pageNumber + startPageNumber : pagesData[0].pageNumber + startPageNumber}</Box>;
  };

  const nextLabel = () => {
    if (selectedPageIndex === pagesData.length - 1) {
      return <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '24px' }} >
        <MUIButton
          buttonColor={'#fff'}
          buttonBackground={DefaulPrimarytColor.primary500green}
          onclickHandler={() => updateBloodwork()}
          buttonText={'Submit'}
          disabled={!canSubmit}
        /></Box>;
    }
    return <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '24px' }} >Page {selectedPageIndex + 2 > pagesData.length ? pagesData[pagesData.length - 1].pageNumber + startPageNumber : pagesData[selectedPageIndex + 1].pageNumber + startPageNumber} <ArrowForwardIosIcon style={{ marginLeft: '10px', width: '16px', height: '16px' }} /> </Box>;
  };

  let deletedHelmarkerName = '';
  if (showConfirmPopup === true && deletedIndex >= 0) {
    deletedHelmarkerName = String(bloodworkData?.healthMarker[deletedIndex]?.healthmarker);
  }

  if (bloodworkData) {
    for (let index = 0; index < bloodworkData?.healthMarker.length; index++) {
      const element = bloodworkData?.healthMarker[index];
      if (getValueError(element) !== '') {
        canSubmit = false;
        break;
      }
    }
  }

  let addMarkerValueRange = '';
  if (addMarkerUnit !== undefined) {
    addMarkerValueRange = `${(addMarkerUnit as any).rangeMin}-${Number((addMarkerUnit as any).rangeMax).toFixed(1)}`;
  }
  const filteredHealthMarkers = processAllHealthMarkers();

  return (
    <Box>
      {(bloodworkData && isLoading === false) && (
        <Box>
          <Grid
            container
            columnSpacing={3}
            columns={12}
            mt={1}
          >
            {bloodworkData && bloodworkData.healthMarker.length > 0 &&
              <Grid item lg={6} md={6} xs={6}>
                <Box style={{
                  alignContent: 'flex-start', padding: '24px', backgroundColor: 'white', borderRadius: '10px'
                }}>
                  {pagesData.length > 0 && <img src={pagesData[selectedPageIndex].fileData} ></img>}
                </Box>
              </Grid>
            }

            <Grid item lg={6} md={6} xs={6}>
              <Box style={{
                alignContent: 'flex-start', padding: '24px', backgroundColor: 'white', borderRadius: '10px'
              }}>
                {isUpdatingReferralAuthority === true ?
                  <Box>
                    <Typography className={classes.updateReferralAuthorityIntro}>To begin with, please confirm the following details:</Typography>
                    <Typography className={classes.testTimeTitle}>When did you take this blood test?</Typography>
                    <CustomDatePicker
                      controlName="measuredDate"
                      defaultValue={bloodworkData.measuredDate != undefined ? bloodworkData.measuredDate : undefined}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      control={control}
                      labelName=""
                      disableFutureDate={true}
                    />
                    <Typography className={classes.testTimeTitle}>Referral authority (practitioner or clinic)</Typography>
                    <InputField
                      hideLabelName={true}
                      labelName=""
                      defaultValue={bloodworkData.referralAuthority}
                      placeholder="Enter clinic name"
                      type="text"
                      controlName={'referralAuthority'}
                      register={register}
                      errors={errors}
                      rules={{ required: true }}
                      sx={{
                        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                          padding: '10px',
                        },
                        '& .MuiInputBase-formControl': {
                          border: '0px solid',
                          borderRadius: '8px',
                          marginRight: '7px',
                        }
                      }}
                    />
                    <Box style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', marginRight: '7px' }}>
                      <HookFormButton
                        className={classes.submitBtn}
                        variant="contained"
                        name="Submit"
                        handleSubmit={handleSubmit((data: any) => {
                          updateReferralAuthority(data.measuredDate, data.referralAuthority);
                        })}
                      />
                    </Box>
                  </Box>
                  :
                  <>
                    {bloodworkData && bloodworkData.healthMarker.length > 0 &&
                      <TableContainer component={Paper} className={classes.mui_tableContainer}>
                        <Table stickyHeader sx={{ minWidth: 350 }} aria-label="client table" className={classes.mui_table}>
                          <TableHead>
                            <TableRow>
                              {/* Marker */}
                              <TableCell
                                style={{
                                  minWidth: 80
                                }}
                                className={`${classes.tableHeadCell} ${classes.markerNameTableHeadCell}`}
                              >
                                <Box className={` ${classes.tableHeadFirstCellBox} ${classes.tableHeadCellBox}`}>
                                  <Typography className={classes.column_header_text}>Marker</Typography>
                                </Box>
                              </TableCell>
                              {/* Value*/}
                              <TableCell align="center" style={{ minWidth: 100 }} className={classes.tableHeadCell}>
                                <Box className={classes.tableHeadCellBox}>
                                  <Typography className={classes.column_header_text}>Value</Typography>
                                </Box>
                              </TableCell>

                              {/* Unit*/}
                              <TableCell align="center" style={{ minWidth: 40 }} className={classes.tableHeadCell}>
                                <Box className={classes.tableHeadCellBox}>
                                  <Typography className={classes.column_header_text}>Unit</Typography>
                                </Box>
                              </TableCell>
                              {/* Delete */}
                              <TableCell align="right" style={{ minWidth: 40 }} className={classes.tableHeadCell}>
                                <Box className={classes.tableHeadCellBox}>
                                  <Typography className={classes.column_header_text_red}>Delete</Typography>
                                </Box>
                              </TableCell>
                              {/* Validation Msg */}
                              {/* <TableCell align="right" style={{ minWidth: 61 }} className={classes.tableHeadCell}>
                              <Box className={classes.tableHeadCellBox}>
                                <Typography className={classes.column_header_text}></Typography>
                              </Box>
                            </TableCell> */}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {bloodworkData && bloodworkData.healthMarker.map((item, index) => {
                              const unit = item.unit_types?.find((it) => it.unitId === item.unitId);
                              const valueRange = unit === undefined ? 'NaN' : `${unit?.rangeMin}-${Number(unit?.rangeMax).toFixed(1)}`;

                              if (pagesData.length > 0 && item.pageNumber !== pagesData[selectedPageIndex].pageNumber || (item.pageNumber === undefined && selectedPageIndex > 0)) {
                                return <></>;
                              }
                              return (
                                <React.Fragment key={index}>
                                  <TableRow className={`${classes.tableBodyRow} ${classes.review_bloodwork_row}`} key={index}>
                                    {/* Marker */}
                                    <TableCell className={classes.tableBodyCell}>
                                      <Typography className={classes.markerName}>{item.healthmarker}</Typography>
                                      {/* <Typography className={classes.validationMsg}>{getValueError(item)}</Typography> */}
                                    </TableCell>
                                    {/* Value */}
                                    <TableCell align="center">
                                      <TextField
                                        id={String(item.healthMarkerId)}
                                        onChange={(event) => handleInputChange(event as any, index)}
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              {valueRange}
                                            </InputAdornment>
                                          )
                                        }}
                                        FormHelperTextProps={{
                                          classes: {
                                            root: classes.helperText
                                          }
                                        }}
                                        value={item.value}
                                        type="number"
                                        size={'small'}
                                        variant="outlined"
                                        fullWidth
                                        className={
                                          getValueError(item) === ''
                                            ? classes.validInputField
                                            : `${classes.invalidInputField} invalid-parentBox`
                                        }
                                      />
                                      <Typography className={classes.validationMsg}>
                                        {/* Please confirm the value, as it is not within an normal range. */}
                                        {getValueError(item)}
                                      </Typography>
                                      {/* </Box> */}
                                    </TableCell>
                                    {/* Unit */}
                                    <TableCell align="center">
                                      <Select
                                        value={unit as any}
                                        defaultValue={'30'}
                                        onChange={(event) => handleDropdown(event, index)}
                                        className={classes.selectField}
                                        size="small"
                                        sx={{
                                          // '& .MuiOutlinedInput-root': {
                                          //   border: 'solid 1px red'
                                          // },
                                          // '.MuiSelect-select': {
                                          //   border: 'solid 0px red !important'
                                          // }
                                        }}
                                      >
                                        {item.unit_types?.map((menu) => {
                                          return (
                                            <MenuItem key={menu.unitId} value={menu as any}>
                                              {menu.unit}
                                            </MenuItem>
                                          );
                                        })}
                                      </Select>
                                    </TableCell>
                                    {/* Delete*/}
                                    <TableCell align="center">
                                      <Button onClick={() => handleDelete(item, index)} className={classes.deleteBtn}>
                                        <RemoveCircleOutlineIcon
                                          style={{ height: 20, width: 30, marginTop: '5px', color: 'red' }}
                                        />
                                      </Button>
                                    </TableCell>
                                    {/* Validation Mag */}
                                    {/* <TableCell align="center">
                                    <Typography className={classes.validationMsg}>{getValueError(item)}</Typography>
                                  </TableCell> */}


                                  </TableRow>

                                </React.Fragment>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    }


                    <Typography className={classes.add_marker_text} style={{ marginTop: bloodworkData && bloodworkData.healthMarker.length > 0 ? '24px' : '0px' }}>Add Marker</Typography>

                    <TableContainer component={Paper} className={classes.mui_tableContainer}>
                      <Table sx={{ minWidth: 350 }} aria-label="client table" className={classes.mui_add_table}>
                        <TableHead>
                          <TableRow >
                            {/* Marker */}
                            <TableCell
                              style={{ minWidth: '60px' }}
                              className={`${classes.tableHeadCell} ${classes.markerNameTableHeadCell}`}
                            >
                              <Box className={` ${classes.tableHeadFirstCellBox} ${classes.tableHeadCellBox}`}>
                                <Typography className={classes.column_header_text}>Marker</Typography>
                              </Box>
                            </TableCell>
                            {/* Value*/}
                            <TableCell align="center" style={{ minWidth: 120 }} className={classes.tableHeadCell}>
                              <Box className={classes.tableHeadCellBox}>
                                <Typography className={classes.column_header_text}>Value</Typography>
                              </Box>
                            </TableCell>

                            {/* Unit*/}
                            <TableCell align="center" style={{ minWidth: 41, width: '60px' }} className={classes.tableHeadCell}>
                              <Box className={classes.tableHeadCellBox}>
                                <Typography className={classes.column_header_text}>Unit</Typography>
                              </Box>
                            </TableCell>

                            {/* Delete */}
                            <TableCell align="right" style={{ minWidth: 40 }} className={classes.tableHeadCell}>
                              <Box className={classes.tableHeadCellBox}>
                                {/* <Typography className={classes.column_header_text_red}>Delete</Typography> */}
                              </Box>
                            </TableCell>
                            {/* Validation Msg */}
                            {/* <TableCell align="right" style={{ minWidth: 61 }} className={classes.tableHeadCell}>
                              <Box className={classes.tableHeadCellBox}>
                                <Typography className={classes.column_header_text}></Typography>
                              </Box>
                            </TableCell> */}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow className={`${classes.tableBodyRow} ${classes.review_bloodwork_row}`} key={'new-row'}>
                            {/* Marker */}
                            <TableCell className={classes.addtableBodyCell}>
                              <Select
                                fullWidth
                                value={selectedHealthMarker !== undefined ? selectedHealthMarker : defaultHealthMarker}
                                //defaultValue={defaultHealthMarker as any}
                                onChange={(event) => handleAddMarkerDropdown(event as any)}
                                className={classes.selectHMField}
                                size="small"
                                sx={{
                                  '& .MuiOutlinedInput-root': {
                                    marginLeft: '-5px',
                                  },
                                  '& .MuiSelect-select': {
                                    color: selectedHealthMarker !== undefined ? '#222B45' : '#8F9BB3',
                                    fontFamily: FontFamily,
                                  }
                                }}
                              >
                                <MenuItem value={defaultHealthMarker as any} disabled>
                                  {defaultHealthMarker.healthMarkerName}
                                </MenuItem>
                                {filteredHealthMarkers?.map((menu) => {
                                  return (
                                    <MenuItem key={(menu as any).healthMarkerId} value={menu as any}>
                                      {(menu as any).healthMarkerName}
                                    </MenuItem>
                                  );
                                })}
                              </Select>

                            </TableCell>
                            {/* Value */}
                            <TableCell align="center">
                              <TextField
                                onChange={(event) => handleAddMarkerInputChange(event as any)}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end" sx={{ fontSize: '10px' }}>
                                      {addMarkerValueRange}
                                    </InputAdornment>
                                  )
                                }}
                                FormHelperTextProps={{
                                  classes: {
                                    root: classes.helperText
                                  }
                                }}
                                sx={{ marginLeft: '-6px' }}
                                value={addMarkerValue}
                                type="number"
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                className={
                                  getAddMarkerValueError() === ''
                                    ? classes.validInputField
                                    : `${classes.invalidInputField} invalid-parentBox`
                                }
                              />
                              <Typography className={classes.validationMsg}>
                                {getAddMarkerValueError()}
                              </Typography>
                            </TableCell>
                            {/* Unit */}
                            <TableCell align="center">
                              <Select
                                value={addMarkerUnit !== undefined ? addMarkerUnit : defaultUnit}
                                defaultValue={defaultUnit}
                                onChange={(event) => handleAddMarkerUnitDropdown(event as any)}
                                className={classes.selectUnitField}
                                size="small"
                                sx={{
                                  '& .MuiSelect-select': {
                                    color: addMarkerUnit !== undefined ? '#222B45' : '#8F9BB3',
                                    fontFamily: FontFamily,
                                  }
                                }}
                              >
                                <MenuItem value={defaultUnit as any} disabled>
                                  {defaultUnit.unit}
                                </MenuItem>
                                {(selectedHealthMarker as any)?.healthMarkerUnitTypes?.map((menu) => {
                                  return (
                                    <MenuItem key={menu.unitId} value={menu as any}>
                                      {menu.unit}
                                    </MenuItem>
                                  );
                                })}
                              </Select>

                            </TableCell>
                            {/* Delete*/}
                            <TableCell align="center">
                              <Button onClick={() => handleAddNewMarker()} disabled={!canAddNewHM} className={classes.deleteBtn}>
                                <AddCircleOutlineIcon
                                  style={{ height: 20, width: 30, marginTop: '5px', color: canAddNewHM ? '#46D7CB' : '#8F9BB3' }}
                                />
                              </Button>
                            </TableCell>

                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>

                    {pagesData.length > 0 &&

                      <ReactPaginate
                        //pageClassName={classes.pageItem}
                        className={'pagination'}
                        //breakLabel="..."
                        nextLabel={nextLabel()}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pagesData.length}
                        forcePage={selectedPageIndex}
                        previousLabel={prevousLabel()}
                        renderOnZeroPageCount={undefined}
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="prerious"
                        previousLinkClassName="page-link"
                        nextClassName="next"
                        pageLabelBuilder={(page) => {
                          return pagesData[page - 1].pageNumber + startPageNumber;
                        }}
                        nextLinkClassName="page-link"
                        activeClassName="active"
                      />
                    }
                  </>

                }
              </Box>
            </Grid>
          </Grid>
          {/* </Box> */}
        </Box>
      )
      }

      <ConfirmDialog
        setShowConfirmPopup={setShowConfirmPopup}
        isOpen={showConfirmPopup}
        caption={`Do you want to delete health marker ${deletedHelmarkerName}?`}
        description=""
        clickYesBtnHandler={() => {
          setShowConfirmPopup(false);
          deleteHealthMarker();
        }}
      />
    </Box >
  );
};

export default ReviewBloodwork;
