import React from 'react';
import { CardView } from '../../clients/partials';
import { CustomDatePicker, HookFormButton } from '../../common';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import { useIntelligenceCustomiseDashboardStyles } from './IntelligenceCustomiseDashboardStyle';
import {
  MenuItem,
  Autocomplete,
  TextField
} from '@mui/material';



const names = [
  'Humaira Sims',
  'Santiago Solis',
  'Dawid Floyd',
  'Mateo Barlow',
  'Samia Navarro',
  'Kaden Fields',
  'Genevieve Watkins',
  'Mariah Hickman',
  'Rocco Richardson',
  'Harris Glenn'
];

const markers = [
  'Body Fat',
  'Kalibra Score (Total)',
  'Active Calories',
  'Kalibra Score (Nourish)',
  'Weight',
  'Sleep'
];


const IntelligenceCustomiseDashboard = () => {
  const classes = useIntelligenceCustomiseDashboardStyles();
  const [startDate, setStartDate] = React.useState<any>();
  const [endDate, setEndDate] = React.useState<any>();
  const [selectedClient, setSelectedClient] = React.useState<any>(['Humaira Sims', 'Santiago Solis', 'Dawid Floyd']);
  const [selectedMarker, setSelectedMarker] = React.useState<any>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    mode: 'onChange',
    shouldFocusError: false

  });


  const onStartDateChange = (date: any) => {
    reset({ startDate: date, endDate: null });
    setStartDate(date);
    setEndDate(null);
  };
  return (
    <React.Fragment>
      <div className={classes.dashboardCard}>
        <CardView
          caption="Customise Dashboard"
          description={'You have selected ' + selectedClient.length + ' clients. please select date range and type of data to view the dashboard'}
          //height={500}
          width={530}
        >
          <div className={classes.formContent} >
            <Box mb={4}>
              {/* Clients */}
              {/* <Autocomplete
                multiple
                id='tags-standard'
                className={selectedClient.length === 0 ? 'invalid-parentBox ' : ''}
                options={names}
                getOptionLabel={(option) => option}
                onChange={(event: any, newValue: any) => {
                  setSelectedClient(newValue);
                }}
                value={selectedClient}
                disableCloseOnSelect
                renderOption={(props, option, { selected }) => (
                  <MenuItem
                    key={option}
                    value={option}

                    sx={{ justifyContent: 'space-between', backgroundColor: 'transparent !important' }}
                    {...props}
                  >
                    {selected ? <span className={classes.checkBoxActive}></span> : <span className={classes.checkBoxDisable}></span>}
                    {option}

                  </MenuItem>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Clients'
                  // placeholder='Markers'
                  />
                )}
              /> */}

              {/* Client with controller */}

              <Controller
                rules={{ required: true }}
                control={control}
                name={'client'}
                defaultValue={selectedClient}
                render={({
                  field: { value, onChange }
                }) => (
                  <>
                    <Autocomplete

                      multiple
                      id='tags-standard'
                      // className={selectedClient.length === 0 ? 'invalid-parentBox ' : ''}
                      className={errors?.client ? 'invalid-parentBox' : ''}
                      options={names}
                      getOptionLabel={(option) => option}
                      onChange={(event: any, newValue: any) => {
                        onChange(newValue);
                        setSelectedClient(newValue);
                      }}
                      value={value}
                      disableCloseOnSelect
                      renderOption={(props, option, { selected }) => (
                        <MenuItem
                          key={option}
                          value={option}

                          sx={{ justifyContent: 'space-between', backgroundColor: 'transparent !important' }}
                          {...props}
                        >
                          {selected ? <span className={classes.checkBoxActive}></span> : <span className={classes.checkBoxDisable}></span>}
                          {option}

                        </MenuItem>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant='outlined'
                          label='Clients'
                        // placeholder='Markers'
                        />
                      )}
                    />
                  </>
                )}
              />

              {/* Dates */}
              <Box className={classes.dateContainer}>
                <div className='dateContainerSingle'>
                  <CustomDatePicker
                    controlName="startDate"
                    register={register}
                    errors={errors}
                    rules={{ required: true }}
                    control={control}
                    labelName="Start Date"
                    disableFutureDate={true}
                    changeHanlder={(event) =>
                      onStartDateChange(event)
                    }
                  />
                </div>
                <div className='dateContainerSingle'>
                  <CustomDatePicker
                    controlName="endDate"
                    register={register}
                    errors={errors}
                    rules={{ required: true }}
                    control={control}
                    labelName="End Date"
                    disableFutureDate={true}
                    minValue={startDate}
                  />
                </div>
              </Box>

              {/* Markers */}
              {/* <Autocomplete
                multiple
                id='tags-standard'
                className={selectedMarker.length === 0 ? 'invalid-parentBox ' : ''}

                options={markers}
                getOptionLabel={(option) => option}
                onChange={(event: any, newValue: any) => {
                  setSelectedMarker(newValue);
                }}
                value={selectedMarker}
                disableCloseOnSelect
                renderOption={(props, option, { selected }) => (
                  <MenuItem
                    key={option}
                    value={option}

                    sx={{ justifyContent: 'space-between', backgroundColor: 'transparent !important' }}
                    {...props}
                  >
                    {selected ? <span className={classes.checkBoxActive}></span> : <span className={classes.checkBoxDisable}></span>}
                    {option}

                  </MenuItem>
                )}

                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Markers'
                  // placeholder='Markers'
                  />
                )}
              /> */}


              {/* Markers with controller */}

              <Controller
                rules={{ required: true }}
                control={control}
                name={'markers'}
                defaultValue={selectedMarker}
                render={({
                  field: { value, onChange }
                }) => (
                  <>
                    <Autocomplete

                      multiple
                      id='tags-standard'
                      // className={selectedClient.length === 0 ? 'invalid-parentBox ' : ''}
                      className={errors?.markers ? 'invalid-parentBox' : ''}
                      options={markers}
                      getOptionLabel={(option) => option}
                      onChange={(event: any, newValue: any) => {
                        onChange(newValue);
                        setSelectedMarker(newValue);
                      }}
                      value={value}
                      disableCloseOnSelect
                      renderOption={(props, option, { selected }) => (
                        <MenuItem
                          key={option}
                          value={option}

                          sx={{ justifyContent: 'space-between', backgroundColor: 'transparent !important' }}
                          {...props}
                        >
                          {selected ? <span className={classes.checkBoxActive}></span> : <span className={classes.checkBoxDisable}></span>}
                          {option}

                        </MenuItem>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant='outlined'
                          label='Markers'
                        // placeholder='Markers'
                        />
                      )}
                    />
                  </>
                )}
              />


            </Box>
            <Box className={classes.buttonBox}>
              <HookFormButton className={classes.submitBtn} variant="contained" name="Go to Dashboard"
                handleSubmit={handleSubmit((data: any) => { console.debug(data); alert('submit code here'); })}
              />
            </Box>
          </div>
        </CardView>
      </div>
    </React.Fragment >
  );
};

export default IntelligenceCustomiseDashboard;