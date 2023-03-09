import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { UserService } from '../../core';
import DateFormatterHelper from '../../core/helper/DateFormatterHelper';
import { Typography } from '@mui/material';
import rightIcon from '../../assets/images/arrowRightIcon.svg';
import leftIcon from '../../assets/images/arrowLeftIcon.svg';
type IProps = {
  clientId: any;
  selectedTab: string;
};
const MeasurementList = ({ clientId, selectedTab }: IProps) => {
  const classes = useBodyCompositionScreenStyles();
  const [showPrevIcon, setShowPrevIcon] = useState<boolean>(true);
  const [showNextIcon, setShowNextIcon] = useState<boolean>(false);
  const noOfRecordsToShow = 5; //used for showing no of records at a time
  const [dates, setDates] = useState<any[]>([]); //stroing all dates data
  const [measurementValues, setMeasurementValues] = useState<any[]>([]); //storing all measurement values
  const [skipNumber, setSkipNumber] = useState<number>(0); //used for showing selected date range


  const getCompareMeasurements = async (_clientId: any, selectedTabName: string, currentPage: number) => {
    const skipValue = noOfRecordsToShow * currentPage;
    // const assessmentName = 'BodyCompAssessment';
    const assessmentName = selectedTabName === 'dimensions' ? 'StykuAssessment' : 'BodyCompAssessment';

    await UserService.getCompareMeasurements(_clientId, noOfRecordsToShow, skipValue, assessmentName).then((res: any) => {
      const datesArray: any = [];
      const BodyFatCalipers: any = [];
      const BodyFatBodyScan: any = [];
      const Bmi: any = [];
      const weight: any = [];
      const chin: any = [];
      const cheek: any = [];
      const pec: any = [];
      const midax: any = [];
      const supra: any = [];
      const umbill: any = [];
      const biceps: any = [];
      const triceps: any = [];
      const subScap: any = [];
      const upperThigh: any = [];
      const knee: any = [];
      const calf: any = [];
      const quad: any = [];
      const ham: any = [];
      const neck: any = [];
      const naturalWaist: any = [];
      const navel: any = [];
      const hips: any = [];

      //bodyFat 
      const dexaBodyFat: any = [];
      const biaFatMass: any = [];
      const optimalBodyFat: any = [];
      const chest: any = [];
      const stomachWidth: any = [];
      const stomachWidth2: any = [];
      const bicepLeft: any = [];
      const lowBicepLeft: any = [];
      const bicepRight: any = [];
      const lowBicepRight: any = [];
      const forearmLeft: any = [];
      const forearmRight: any = [];
      const calfLeft: any = [];
      const calfRight: any = [];
      const midThighLeft: any = [];
      const midThighRight: any = [];
      const lowerThighLeft: any = [];
      const lowerThighRight: any = [];
      const thighLeft: any = [];
      const thighRight: any = [];
      // const midNeck: any = [];
      // const naturalWaistBodyFat: any = [];
      const highHip: any = [];
      const lowHip: any = [];



      const allMeasurementData = res.data;
      if (allMeasurementData.length > 0) {
        for (const measurement of allMeasurementData) {
          datesArray.push(DateFormatterHelper.formatDate(measurement?.createdOn));
          for (const groups of measurement.groups) {
            for (const groupData of groups.data) {
              switch (groupData.key) {
                case 'Bodyweight':
                  weight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFat':
                  BodyFatCalipers.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'EstimatedBodyFat':
                  BodyFatBodyScan.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'BodyMassIndex':
                  Bmi.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatCheek':
                  cheek.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatChin':
                  chin.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatPec':
                  pec.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatMidax':
                  midax.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatUmbil':
                  umbill.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatSupra':
                  supra.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatBiceps':
                  biceps.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatTriceps':
                  triceps.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatSubscap':
                  subScap.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatUpperThigh':
                  upperThigh.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatKnee':
                  knee.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatCalf':
                  calf.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatQuad':
                  quad.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MeasuredBodyFatHam':
                  ham.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MidNeck':
                  neck.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'NaturalWaist':
                  naturalWaist.push({ value: groupData.value, unit: groupData.unit });
                  break;


                // body fat

                case 'Chest':
                  chest.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'HighHip':
                  highHip.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'LowHip':
                  lowHip.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'StomachWidth':
                  stomachWidth.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'StomachWidth2':
                  stomachWidth2.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'DexaBodyFatPercent':
                  dexaBodyFat.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'BiaFatMassPercent':
                  biaFatMass.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'OpticalBodyFat':
                  optimalBodyFat.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'BicepLeft':
                  bicepLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'LowBicepLeft':
                  lowBicepLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'BicepRight':
                  bicepRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'LowBicepRight':
                  lowBicepRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'CalfLeft':
                  calfLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'CalfRight':
                  calfRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'ForearmLeft':
                  forearmLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'ForearmRight':
                  forearmRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MidThighLeft':
                  midThighLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'MidThighRight':
                  midThighRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'LowerThighLeft':
                  lowerThighLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'ThighLeft':
                  thighLeft.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'ThighRight':
                  thighRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
                case 'LowerThighRight':
                  lowerThighRight.push({ value: groupData.value, unit: groupData.unit });
                  break;
              }
            }
          }
        }
        setDates(datesArray);
        // setSelectedDateRange(datesArray[0] + ' - ' + datesArray[datesArray.length - 1]);


        const bodyFatData = [
          //key stats
          {
            name: 'KEY STATS', measurement_category: [
              {
                category_name: 'Body fat % Calipers',
                category_value: BodyFatCalipers
              },
              {
                category_name: 'Body fat % Bodyscan',
                category_value: BodyFatBodyScan
              },
              {
                category_name: 'BMI',
                category_value: Bmi
              },
              {
                category_name: 'Weight',
                category_value: weight
              },
            ]
          },
          //Face
          {
            name: 'FACE', measurement_category: [
              {
                category_name: 'Chin',
                category_value: chin
              },
              {
                category_name: 'Cheek',
                category_value: cheek
              }
            ]
          },
          //Core
          {
            name: 'Core', measurement_category: [
              {
                category_name: 'Pec',
                category_value: pec
              },
              {
                category_name: 'Midax',
                category_value: midax
              },
              {
                category_name: 'Supra',
                category_value: supra
              },
              {
                category_name: 'Umbill',
                category_value: umbill
              },
            ]
          },
          //Arms
          {
            name: 'Arms', measurement_category: [
              {
                category_name: 'Biceps',
                category_value: biceps
              },
              {
                category_name: 'Triceps',
                category_value: triceps
              },
              {
                category_name: 'Subscap',
                category_value: subScap
              },
            ]
          },
          //LEGS
          {
            name: 'LEGS', measurement_category: [
              {
                category_name: 'Upper thigh',
                category_value: upperThigh
              },
              {
                category_name: 'Knee',
                category_value: knee
              },
              {
                category_name: 'Calf',
                category_value: calf
              },
              {
                category_name: 'Quad',
                category_value: quad
              },
              {
                category_name: 'Ham',
                category_value: ham
              },
            ]
          },

          //Girth

          {
            name: 'GIRTH', measurement_category: [
              {
                category_name: 'Neck',
                category_value: neck
              },
              {
                category_name: 'Natural Waist',
                category_value: naturalWaist
              },
              {
                category_name: 'Navel',
                category_value: navel
              },
              {
                category_name: 'Hips',
                category_value: hips
              }
            ]
          },
        ];

        const dimensionData = [
          //key stats
          {
            name: 'KEY STATS', measurement_category: [
              {
                category_name: 'Dexa Body Fat % cm',
                category_value: dexaBodyFat
              },
              {
                category_name: 'Bia Fat Mass % cm',
                category_value: biaFatMass
              },
              {
                category_name: 'Optical Body Fat %',
                category_value: optimalBodyFat
              },
            ]
          },
          //Core
          {
            name: 'CORE', measurement_category: [
              {
                category_name: 'Chest cm',
                category_value: chest
              },
              {
                category_name: 'Stomach Width cm',
                category_value: stomachWidth
              },
              {
                category_name: 'Stomach Width 2 cm',
                category_value: stomachWidth2
              },
            ]
          },
          //Arms
          {
            name: 'ARMS', measurement_category: [
              {
                category_name: 'Bicep Left cm',
                category_value: bicepLeft
              },
              {
                category_name: 'Low Bicep Left cm',
                category_value: lowBicepLeft
              },
              {
                category_name: 'Bicep Right cm',
                category_value: bicepRight
              },
              {
                category_name: 'Low Bicep Right cm',
                category_value: lowBicepRight
              },
              {
                category_name: 'Forearm Left cm',
                category_value: forearmLeft
              },
              {
                category_name: 'Forearm Right cm',
                category_value: forearmRight
              },
            ]
          },
          //Legs
          {
            name: 'LEGS', measurement_category: [
              {
                category_name: 'Calf Left cm',
                category_value: calfLeft
              },
              {
                category_name: 'Calf Right cm',
                category_value: calfRight
              },
              {
                category_name: 'Mid Thigh Left cm',
                category_value: midThighLeft
              },
              {
                category_name: 'Mid Thigh Right cm',
                category_value: midThighRight
              },
              {
                category_name: 'Lower Thigh Left cm',
                category_value: lowerThighLeft
              },
              {
                category_name: 'Lower Thigh Right cm',
                category_value: lowerThighRight
              },
              {
                category_name: 'Thigh Left cm',
                category_value: thighLeft
              },
              {
                category_name: 'Thigh Right cm',
                category_value: thighRight
              },


            ]
          },

          //Girth
          {
            name: 'GIRTH', measurement_category: [
              {
                category_name: 'Mid Neck cm',
                category_value: neck
              },
              {
                category_name: 'Natural Waist cm',
                category_value: naturalWaist
              },
              {
                category_name: 'High Hip cm',
                category_value: highHip
              },
              {
                category_name: 'Low Hip cm',
                category_value: lowHip
              },
            ]
          },

        ];
        setMeasurementValues(selectedTabName === 'dimensions' ? dimensionData : bodyFatData);
      } else {
        // setSelectedDateRange('');
        setMeasurementValues([]);
        setDates([]);
        setShowPrevIcon(false);
      }


    });
  };

  // useEffect(() => {
  //   getCompareMeasurements(clientId, selectedTab);
  //   /* eslint-disable */
  // }, [currentPage]);

  useEffect(() => {
    setShowPrevIcon(true);
    setShowNextIcon(false);
    setSkipNumber(0);
    getCompareMeasurements(clientId, selectedTab, 0);
  }, [clientId, selectedTab]);

  const onArrowClick = (type: string) => {
    if (type === 'previous') {
      setShowNextIcon(true);
      getCompareMeasurements(clientId, selectedTab, skipNumber + 1);
      setSkipNumber((prevPage) => prevPage + 1);
    } else {
      if (skipNumber > 0) {
        if (skipNumber === 1) {
          setShowNextIcon(false);
        }
        setShowPrevIcon(true);
        getCompareMeasurements(clientId, selectedTab, skipNumber - 1);
        setSkipNumber((prevPage) => prevPage - 1);

      }
    }
  };

  return (
    <>

      {/* <Box className={classes.rangeDateBox}>
        <Link className={showPrevIcon ? classes.link : 'disabledLink'} onClick={() => onArrowClick('previous')} >Previous</Link>
        {selectedDateRange}
        <Link className={showNextIcon ? classes.link : 'disabledLink'} onClick={() => onArrowClick('next')} >Next</Link>
      </Box> */}

      {measurementValues.length > 0 ? (<>
        <TableContainer
          component={Paper}
          className={classes.tableContainer_measurement}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="caption table"
            className={classes.tcm_table}
          >
            {/* className="ct_tableHead" */}
            <TableHead >
              <TableRow >
                <TableCell align="left" style={{ minWidth: 90 }}></TableCell>

                {dates.map((dateItem: any, index: number) => (
                  <React.Fragment key={'dates' + index}>
                    <TableCell
                      align="right"
                      style={{ minWidth: 20 }}
                      key={dateItem}
                    >
                      {index === 0 && <img src={leftIcon} alt="" className={showPrevIcon ? classes.enableLink : classes.disableLink} onClick={() => onArrowClick('previous')} style={{ marginRight: '10px' }} />}

                      {dateItem}

                      {index === dates.length - 1 && <img src={rightIcon} alt="" className={showNextIcon ? classes.enableLink : classes.disableLink} onClick={() => onArrowClick('next')} style={{ marginLeft: '10px' }} />}
                    </TableCell>

                  </React.Fragment>
                ))}
              </TableRow>
            </TableHead>
            {measurementValues.map((measurement: any, index: number) => (
              // className="ct_tableBody"
              <TableBody key={'measurement' + index}>
                <React.Fragment>
                  <TableRow >
                    <TableCell align="left" sx={{ fontWeight: 600, background: '#F8F9FC' }} colSpan={dates.length + 1} className={classes.keyName} >
                      {measurement.name}
                    </TableCell>
                  </TableRow>
                  {measurement.measurement_category.map((category: any) => (
                    <TableRow key={category.category_name}>
                      <TableCell align="left" style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>{category.category_name}</TableCell>
                      {dates.map((date, indexValue) => (
                        <React.Fragment key={category.category_name + indexValue} >
                          <TableCell align="right">{category.category_value[indexValue] ? Number(category.category_value[indexValue].value).toFixed(0) + ' ' + category.category_value[indexValue].unit : '-'}</TableCell>
                        </React.Fragment>
                      ))}
                    </TableRow>
                  ))}
                </React.Fragment>
              </TableBody>
            ))}
          </Table>
        </TableContainer>

      </>) :
        (<>
          <Box className={classes.noMeasurementBox}>
            <Typography>There are no more records.</Typography>
          </Box>

        </>)
      }
    </>
  );
};

export default MeasurementList;



