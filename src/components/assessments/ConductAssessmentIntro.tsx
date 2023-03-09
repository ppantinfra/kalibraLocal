import React from 'react';
import Box from '@mui/material/Box';
import { useAssessmentDetailsAccordionStyles } from './AssessmentDetailsAccordionStyles';
import vitalIcon from '../../assets/images/navigations/big-vital-green.svg';
import goalIcon from '../../assets/images/navigations/big-goal-green.svg';
import bodyCompIcon from '../../assets/images/navigations/big-bodycomp-green.svg';
import bloodworkIcon from '../../assets/images/navigations/big-bloodwork-green.svg';
import strengthIcon from '../../assets/images/navigations/big-strength-green.svg';
import { MenuItem, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import { MUIButton } from '../common';

const ConductAssessmentIntro = ({ assessmentTypes, handleStartAssessment }) => {

    const [types, setTypes] = React.useState<any>();
    const [selectedType, setSelectedType] = React.useState('one');
    const [assessmentTypeData, setAssessmentTypeData] = React.useState<any>();

    const actionClick = (key: string) => {
        const result = assessmentTypes.find(item => item.key === key);
        handleStartAssessment({ assessmentTypeKey: key, assessmentTypeName: result.name });
    };
    const actions = [
        {
            title: 'Vitals',
            description: 'Key markers such as blood pressure, weight and resting heart rate',
            assessmentType: '',
            icon: <img src={vitalIcon} alt="" style={{ width: '44px', height: '44px' }} />,
            key: 'VitalsAssessment'
        },
        {
            title: 'Goals',
            description: 'Set and track goals for marker such as weight, body fat, calories, protein, water intake',
            assessmentType: '',
            icon: <img src={goalIcon} alt="" style={{ width: '44px', height: '44px' }} />,
            key: 'GoalsAssessment'
        },
        {
            title: 'Body Composition',
            description: 'Measure and record body fat, BMI and body dimensions',
            assessmentType: '',
            icon: <img src={bodyCompIcon} alt="" style={{ width: '44px', height: '44px' }} />,
            key: 'BodyCompAssessment'
        },
        {
            title: 'Bloodwork',
            description: 'Upload, analyse and interpret lab tests, and visualise key trends',
            assessmentType: '',
            icon: <img src={bloodworkIcon} alt="" style={{ width: '44px', height: '44px' }} />,
            key: 'FunctionalBiomarkersAssessment'
        },
        {
            title: 'Strength',
            description: 'Measure, record and benchmark overall strength, as well as key muscles',
            assessmentType: '',
            icon: <img src={strengthIcon} alt="" style={{ width: '44px', height: '44px' }} />,
            key: 'StrengthAssessment'
        },
    ];
    let newList = [];
    if (assessmentTypes && assessmentTypes.length > 0) {
        newList = assessmentTypes.filter(item => !actions.find(action => action.key === item.key));
    }

    const handleSelectChange = (event: any) => {

        const tempAssType: any = event.target.value;
        setSelectedType(event.target.value);
        if (tempAssType !== 'one') {
            const parseAssType: any = JSON.parse(tempAssType);
            setAssessmentTypeData(parseAssType);
            setTypes(parseAssType.assessmentTypeKey);
        } else {
            setAssessmentTypeData('');
            setTypes('');
        }
    };

    const classes = useAssessmentDetailsAccordionStyles();
    return (
        <React.Fragment>
            <Box>
                <Box className={classes.clientActions}>
                    {actions.map((field, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Box className={classes.clientActionsRow}
                                    onClick={() => actionClick(field.key)}
                                    key={index}
                                >
                                    {field.icon}
                                    <Box sx={{ marginLeft: '8px' }}>
                                        <Typography className={classes.title}>{field.title}</Typography>
                                        <Typography className={classes.description}>{field.description}</Typography>
                                        <Box sx={{ height: '8px' }} ></Box>
                                    </Box>

                                </Box>
                            </React.Fragment>
                        );
                    })}
                </Box>

                <Typography className={classes.smText}>Other Assessments</Typography>
                <Select
                    onChange={handleSelectChange}
                    value={selectedType || ''}
                    displayEmpty
                    fullWidth
                    sx={{
                        '& .MuiSelect-select': {
                            fontSize: '14px'
                        }
                    }}
                    className={`${classes.typeselect} typeSelect`}
                    inputProps={{
                        'aria-label': 'Without label',
                        classes: {
                            icon: classes.selectIcon,
                            root: classes.selectRoot
                        },
                        name: 'selectedType'
                    }}
                    size={'small'}
                >
                    <MenuItem value="one" selected style={{ color: '' }}>
                        Select Assessment Type
                                    </MenuItem>
                    {newList &&
                        newList.map((item: any, index: number) => (
                            <MenuItem
                                // value={item.name}
                                key={index}
                                data-name={item.name}
                                value={JSON.stringify({
                                    assessmentTypeKey: item.key,
                                    assessmentTypeName: item.name
                                })}
                            >
                                {item.name}
                            </MenuItem>
                        ))}
                </Select>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <MUIButton
                        buttonColor={'#fff'}
                        onclickHandler={() => { handleStartAssessment(assessmentTypeData); }}
                        buttonText={<>Start</>}
                        disabled={!types ? true : false}
                        width={'50px'}
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
};


export default ConductAssessmentIntro;