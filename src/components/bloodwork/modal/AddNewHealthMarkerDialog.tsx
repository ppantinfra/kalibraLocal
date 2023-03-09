import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useAddNewHealthMarkerDialogStyles } from './AddNewHealthMarkerDialogStyles';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import BackendApi from '../../../api/shared/BackendApi';
import InputAdornment from '@mui/material/InputAdornment';

type Props = {
  isOpen?: boolean;
  caption?: string;
  description?: string;
  setShowAddPopup?: any;
  clickYesBtnHandler?: any;
  allHealthMarkers?: any;
  documentId: string;
  clientId: string;
};

const AddNewHealthMarkerDialog = ({
  caption,
  description,
  setShowAddPopup,
  clickYesBtnHandler,
  allHealthMarkers,
  documentId,
  clientId,
  isOpen
}: Props) => {
  const classes = useAddNewHealthMarkerDialogStyles();
  const [open, setOpen] = React.useState(isOpen);
  const [selectedHMIndex, setSelectedHMIndex] = React.useState(0);
  const [selectedUnit, setSelectedUnit] = React.useState<any>(allHealthMarkers && allHealthMarkers.length > 0 ? allHealthMarkers[0].healthMarkerUnitTypes[0] : undefined);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    setOpen(isOpen as any);
    setSelectedHMIndex(0);
    setSelectedUnit(allHealthMarkers && allHealthMarkers.length > 0 ? allHealthMarkers[0].healthMarkerUnitTypes[0] : undefined);
    setValue('');

  }, [isOpen, allHealthMarkers]);

  const addHealthMarker = async (): Promise<any> => {
    try {
      const selectedHM = selectedHMIndex === -1 ? allHealthMarkers[0] : allHealthMarkers[selectedHMIndex];
      const unitId = selectedUnit?.unitId;
      const parameters = {
        documentId: documentId,
        healthMarkerId: selectedHM.healthMarkerId,
        value: Number(value),
        unitId: Number(unitId)
      };

      const response = await BackendApi.post(`/pro/health-markers/bloodwork-add-new-marker/${clientId}`, parameters);
      if (response.status >= 200 && response.status <= 399) {
        if (response.data !== undefined) {
          return {};
        }
      } else {
        return { errorMessage: 'Looks like we have a little problem, please try again later' };
      }
    } catch (err) {
      return { errorMessage: 'Looks like we have a little problem, please try again later' };
    }
  };

  const handleClickYes = async () => {
    const result = await addHealthMarker();
    if (result.errorMessage === undefined) {
      setOpen(false);
      setShowAddPopup(false);
      clickYesBtnHandler();
    }
  };

  const getValueError = () => {
    if (value === null || value === undefined || String(value).trim().length === 0) {
      return 'Value is missing';
    }

    if (value < selectedUnit?.rangeMin || value > selectedUnit?.rangeMax) {
      return 'Value is invalid';
    }
    return '';
  };

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleHMDropdown = (event: SelectChangeEvent) => {
    const index = allHealthMarkers.findIndex((item) => item.healthMarkerName === event.target.value);
    setSelectedHMIndex(index);
    if (index >= 0) {
      setSelectedUnit(allHealthMarkers[index].healthMarkerUnitTypes[0]);
    }
    setValue('');
  };

  const handleUnitDropdown = (event: SelectChangeEvent) => {
    setSelectedUnit(event.target.value);
  };

  if (allHealthMarkers === undefined || allHealthMarkers.length === 0) {
    return <></>;
  }

  const selectedHM = allHealthMarkers[selectedHMIndex === -1 ? 0 : selectedHMIndex];
  const unitTypes = selectedHM.healthMarkerUnitTypes;
  const healthmarkerName = selectedHM.healthMarkerName;
  const valueRange = selectedUnit === undefined ? 'NaN' : `${selectedUnit?.rangeMin}-${Number(selectedUnit?.rangeMax).toFixed(1)}`;

  return (
    <React.Fragment>
      <Dialog
        open={open as any}
        onClose={() => {
          setShowAddPopup(false);
          setOpen(false);
        }}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialogPopup}
      >
        <DialogContent className={classes.dialogContent}>
          <Box className={classes.dialogText}>
            <Typography className={classes.heading}>{caption}</Typography>
            {description && description?.length > 0 && <Box className={classes.text}>{description}</Box>}
            <Select
              value={healthmarkerName}
              onChange={(event) => handleHMDropdown(event)}
              className={classes.selectHealMarkerField}
              size="small"
              fullWidth
            >
              {allHealthMarkers?.map((menu) => {
                return (
                  <MenuItem key={menu.healthMarkerId} value={menu.healthMarkerName}>
                    {menu.healthMarkerName}
                  </MenuItem>
                );
              })}
            </Select>
            <Box className={classes.valueAndUnit}>
              <TextField
                onChange={(event) => handleInputChange(event)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ fontSize: 10 }}>
                      {valueRange}
                    </InputAdornment>
                  )
                }}
                value={value}
                type='number'
                size={'small'}
                variant="outlined"
                fullWidth
                className={getValueError() === '' ? classes.validInputField : `${classes.invalidInputField} invalid-parentBox`}
              />
              <Select
                value={selectedUnit as any}
                onChange={(event) => handleUnitDropdown(event)}
                className={classes.selectField}
                size="small"
              >
                {unitTypes?.map((menu) => {
                  return (
                    <MenuItem key={menu.unitId} value={menu as any}>
                      {menu.unit}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.buttonBox}>
          <Link className={getValueError() === '' ? classes.yesBtn : classes.yesErrorBtn} onClick={async () => handleClickYes()} >
            {'Add'}
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddNewHealthMarkerDialog;
