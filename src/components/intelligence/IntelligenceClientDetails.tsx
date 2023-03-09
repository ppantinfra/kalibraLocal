import React, { useContext } from 'react';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import { useIntelligenceDetailsScreenStyles } from './intelligenceClientDetailsStyles';
import { screenTitle } from '../../core/constants';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ClientSearch from '../client-search/ClientSearch';
import { CommonContext, CommonContextType } from '../../core/context';
import Back from '../common/Back';
import IntelligenceIndividualTrendList from './IntelligenceIndividualTrendList';
import IntelligenceActivityDashboard from './IntelligenceActivityDashboard';
const moveTrends = [
    {
        trendId: 1,
        pillarSubCategory: 'Steps (no.)',
        daily: { value: '9,316', status: 'good' },
        score1WAvg: { value: '2,412', status: 'poor' },
        score1MAvg: { value: '10,136', status: 'great' },
        score3MAvg: { value: '11,674', status: 'great' },
        score12MAvg: { value: '3,212', status: 'poor' },
        chartColor: '#FF3D71',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 2,
        pillarSubCategory: 'Total Calories (kCal)',
        daily: { value: '2,403', status: 'great' },
        score1WAvg: { value: '3,538', status: 'poor' },
        score1MAvg: { value: '3,729', status: 'poor' },
        score3MAvg: { value: '2,947', status: 'great' },
        score12MAvg: { value: '3,667', status: 'poor' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 3,
        pillarSubCategory: 'Active Calories (kCal)',
        daily: { value: '561', status: 'great' },
        score1WAvg: { value: '206', status: 'poor' },
        score1MAvg: { value: '630', status: 'great' },
        score3MAvg: { value: '385', status: 'good' },
        score12MAvg: { value: '227', status: 'poor' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 4,
        pillarSubCategory: 'Run (km)',
        daily: { value: '1.80', status: 'good' },
        score1WAvg: { value: '4.23', status: 'great' },
        score1MAvg: { value: '0.75', status: 'poor' },
        score3MAvg: { value: '1.26', status: 'poor' },
        score12MAvg: { value: '3.76', status: 'great' },
        chartColor: '#FF3D71',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 5,
        pillarSubCategory: 'Cycle (km)',
        daily: { value: '17.29', status: 'poor' },
        score1WAvg: { value: '76.54', status: 'great' },
        score1MAvg: { value: '78.25', status: 'great' },
        score3MAvg: { value: '80.77', status: 'great' },
        score12MAvg: { value: '78.46', status: 'great' },
        chartColor: '#FF3D71',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 6,
        pillarSubCategory: 'Swim (km)',
        daily: { value: '6.71', status: 'great' },
        score1WAvg: { value: '1.99', status: 'poor' },
        score1MAvg: { value: '1.83', status: 'poor' },
        score3MAvg: { value: '3.15', status: 'good' },
        score12MAvg: { value: '1.83', status: 'poor' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 7,
        pillarSubCategory: 'Strength Sessions (no.)',
        daily: { value: 1, status: 'poor' },
        score1WAvg: { value: 5, status: 'great' },
        score1MAvg: { value: 2, status: 'poor' },
        score3MAvg: { value: 6, status: 'great' },
        score12MAvg: { value: 3, status: 'good' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    }
];
const nourishTrends = [
    {
        trendId: 1,
        pillarSubCategory: 'Weight (kg)',
        daily: { value: 67, status: 'great' },
        score1WAvg: { value: 68, status: 'great' },
        score1MAvg: { value: 72, status: 'poor' },
        score3MAvg: { value: 74, status: 'poor' },
        score12MAvg: { value: 69, status: 'good' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 2,
        pillarSubCategory: 'Waist Circumference (cm)',
        daily: { value: 59, status: 'great' },
        score1WAvg: { value: 68, status: 'good' },
        score1MAvg: { value: 72, status: 'poor' },
        score3MAvg: { value: 60, status: 'great' },
        score12MAvg: { value: 62, status: 'great' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 3,
        pillarSubCategory: 'Carbs (g)',
        daily: { value: 37, status: 'great' },
        score1WAvg: { value: 49, status: 'good' },
        score1MAvg: { value: 28, status: 'great' },
        score3MAvg: { value: 62, status: 'poor' },
        score12MAvg: { value: 65, status: 'poor' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 4,
        pillarSubCategory: 'Protein (g)',
        daily: { value: 45, status: 'poor' },
        score1WAvg: { value: 63, status: 'great' },
        score1MAvg: { value: 51, status: 'good' },
        score3MAvg: { value: 48, status: 'good' },
        score12MAvg: { value: 37, status: 'poor' },
        chartColor: '#FF3D71',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 5,
        pillarSubCategory: 'Fats (g)',
        daily: { value: 103, status: 'poor' },
        score1WAvg: { value: 86, status: 'great' },
        score1MAvg: { value: 62, status: 'great' },
        score3MAvg: { value: 76, status: 'great' },
        score12MAvg: { value: 92, status: 'poor' },
        chartColor: '#FF3D71',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    },
    {
        trendId: 6,
        pillarSubCategory: 'Hydration (l)',
        daily: { value: 4.2, status: 'great' },
        score1WAvg: { value: 3.1, status: 'poor' },
        score1MAvg: { value: 3.4, status: 'good' },
        score3MAvg: { value: 2.6, status: 'poor' },
        score12MAvg: { value: 4.1, status: 'great' },
        chartColor: '#00D68F',
        trend: [3.1, 2.8, 3, 2.9, 3.2]
    }
];

const individualTrendList = [
    {
        id: 1,
        pillarCategory: 'Nourish',
        trends: nourishTrends
    },
    {
        id: 2,
        pillarCategory: 'Move',
        trends: moveTrends
    },
    {
        id: 3,
        pillarCategory: 'Connect',
        trends: nourishTrends
    },
    {
        id: 4,
        pillarCategory: 'Grow',
        trends: moveTrends
    },
    {
        id: 5,
        pillarCategory: 'Reflect',
        trends: nourishTrends
    },
    {
        id: 6,
        pillarCategory: 'Rest',
        trends: moveTrends
    }
];

const IntelligenceClientDetails = () => {
    const classes = useIntelligenceDetailsScreenStyles();
    const [activityTabValue, setActivityTabValue] = React.useState('All Activites');
    const { userId } = useContext(CommonContext) as CommonContextType;

    const onUserSelect = () => {
        // api need to call here
        console.debug('hii');
    };

    const handleTabsChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setActivityTabValue(newTabValue);
    };
    return (
        <React.Fragment>
            <Box className={classes.page_Content}>
                {/* <Typography className={classes.screenTitle}>{screenTitle.IntelligencePage}</Typography> */}
                {/* <Typography className={classes.invidualTrendHeading}>Individual Trend</Typography> */}
                <Back componentTitle={screenTitle.IntelligencePage} />
                <TabContext value={activityTabValue}>
                    <Box className={classes.IfilterAndLinkSection}>
                        <Box className={classes.ifals_left}>
                            <Box className={classes.ifalsl_fieldBox}>
                                {/* <ChevronLeftIcon
                                    className={`${classes.chevronLeftIcon} animatedIcon`}
                                    onClick={() => {
                                        setActivityTabValue('IndividualTrendSummary');
                                        if (activityTabValue === 'IndividualTrendSummary') {
                                            navigate(-1);
                                        }
                                    }}
                                /> */}
                                <ClientSearch selectedUserId={userId} userSelectHandler={onUserSelect} />
                            </Box>
                        </Box>
                        <Box className={classes.ifals_right}>
                            {/* <Typography>All Activities</Typography> */}
                            <TabList
                                onChange={handleTabsChange}
                                textColor="secondary"
                                TabIndicatorProps={{
                                    style: { background: 'transparent', transition: 'none' }
                                }}
                                aria-label="secondary tabs example"
                                className={`${classes.mui_tablist} mui_tablist_top mui_sub_tablist`}
                                // className={`${classes.mui_tablist} mui_sub_tablist`}
                                scrollButtons="auto"
                                variant="scrollable"
                            >

                                <Tab
                                    value="All Activites"
                                    label="All Activites"
                                    // icon={<DirectionsBikeIcon style={{ marginRight: '8px' }} />}
                                    className={`${classes.mui_tabButton}`}
                                    sx={{ flexDirection: 'row' }}
                                />

                                <Tab
                                    value="Cycling"
                                    label="Cycling"
                                    icon={<DirectionsBikeIcon style={{ marginRight: '8px' }} />}
                                    className={`${classes.mui_tabButton}`}
                                    sx={{ flexDirection: 'row' }}
                                />
                                <Tab
                                    value="Swimming"
                                    label="Swimming"
                                    icon={<PoolIcon style={{ marginRight: '8px' }} />}
                                    className={`${classes.mui_tabButton}`}
                                    sx={{ flexDirection: 'row' }}
                                />
                                <Tab
                                    value="Running"
                                    label="Running"
                                    icon={<DirectionsRunIcon style={{ marginRight: '8px' }} />}
                                    className={`${classes.mui_tabButton}`}
                                    sx={{ flexDirection: 'row' }}
                                />
                            </TabList>


                        </Box>
                    </Box>
                    <TabPanel value="Cycling">
                        <IntelligenceActivityDashboard
                            activity={activityTabValue}
                            activityIcon={<DirectionsBikeIcon sx={{ color: '#46D7CB' }} />}
                        />
                    </TabPanel>
                    <TabPanel value="Swimming">
                        
                        <IntelligenceActivityDashboard
                            activity={activityTabValue}
                            activityIcon={<PoolIcon sx={{ color: '#46D7CB' }} />}
                        />
                    </TabPanel>
                    <TabPanel value="Running">
                       
                        <IntelligenceActivityDashboard
                            activity={activityTabValue}
                            activityIcon={<DirectionsRunIcon sx={{ color: '#46D7CB' }} />}
                        />
                    </TabPanel>
                    <TabPanel value="All Activites">
                        <IntelligenceIndividualTrendList individualTrendList={individualTrendList} />
                    </TabPanel>
                </TabContext>
            </Box>
        </React.Fragment>
    );
};

export default IntelligenceClientDetails;