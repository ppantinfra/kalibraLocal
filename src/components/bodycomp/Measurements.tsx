import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import BodyCompNavigatedHeader from './BodyCompNavigatedHeader';
import { CommonContext, CommonContextType } from '../../core/context';
import { SmallSquareTilesItem } from '../tiles';
import DrawerActionSidebar from '../layouts/drawer/DrawerActionSidebar';
import ScoreDetail from '../pillars/scoreDetail/ScoreDetail';
// import { SlickSlider } from '../common';
import { Grid } from '@mui/material';

type IProps = {
  handleAdd?: () => void;
  handleCompare?: () => void;
  headerLabel?: string;
  dateText?: any;
  gridColumn1?: number;
  gridColumn2?: number;
  handleAddMeasurements?: () => void;
  handleCompareMeasurements?: () => void;
  iconClass?: string;
  allTilesData?: Array<any>;
  clientId?: string;
};

const Measurements = ({
  handleAdd,
  handleCompare,
  headerLabel,
  dateText,
  gridColumn1,
  gridColumn2,
  iconClass,
  allTilesData,
  clientId
}: IProps) => {
  const classes = useBodyCompositionScreenStyles();
  const { demoMode } = useContext(CommonContext) as CommonContextType;

  const [scoreDetailData, setScoreDetailData] = useState<any>();
  const [open, setOpen] = React.useState<any>(false);
  const [sidebarHeader, setSidebarHeader] = useState<string>('');
  const [externalKey, setExternalKey] = useState<any>();

  const tileHandleShare = () => {
    // console.log('share');
  };

  const handleDrawerOpen = (key: string, name: string, data: any) => {
    setOpen(true);
    setScoreDetailData(data);
    setExternalKey(key);
    setSidebarHeader(name);
  };

  const renderTiles = (externalKeys: Record<string, string>) => {
    return Object.keys(externalKeys).map((key) => {
      let healthMarker = allTilesData?.find((hm) => hm.externalKey === key);
      let data = {};
      if (healthMarker === undefined) {
        healthMarker = { name: externalKeys[key] };
      } else {
        healthMarker.name = externalKeys[key];
        data = {
          lastUpdatedDate: new Date(healthMarker.latestHealthMarkerValues[0].lastUpdated),
          maxValue: Number(healthMarker.rangeMax),
          minValue: Number(healthMarker.rangeMin),
          category: healthMarker.category,
          infoWhat: healthMarker?.infoWhat,
          infoWhy: healthMarker?.infoWhy,
          infoHow: healthMarker?.infoHow
        };
      }
      return (
        <Grid item xs={12} md={4} lg={3} key={healthMarker.name}>
          <React.Fragment key={key}>
            <SmallSquareTilesItem
              handleDrawerOpen={() => handleDrawerOpen(key, externalKeys[key], data)}
              tileHandleShare={tileHandleShare}
              data={healthMarker}
            />
          </React.Fragment>
        </Grid>
      );
    });
  };

  const renderSection = (name: string, externalKeys: Record<string, string>) => {
    return (
      <Box
        sx={{
          mt: name === 'KEY STATS' ? 1 : 4
        }}
        // className={classes.bclmb_tiles_group}
        key={String(name)}
      >
        <Box className={classes.bclmbtg_headingBox}>
          <Typography className={classes.bclmbtghb_headingText}>{name}</Typography>
        </Box>
        {/* className={'gridBetween768to899'} */}
        <Grid container spacing={3} rowSpacing={3} >

          {renderTiles(externalKeys)}

        </Grid>
        {/* <SlickSlider>{renderTiles(externalKeys)}</SlickSlider> */}
      </Box >
    );
  };

  return (
    <React.Fragment>
      <Box className={classes.bclmb_contents}>
        <BodyCompNavigatedHeader
          handleAdd={handleAdd}
          handleCompare={handleCompare}
          headerLabel={headerLabel}
          dateText={dateText}
          gridColumn1={gridColumn1}
          gridColumn2={gridColumn2}
          iconClass={iconClass}
        />

        {renderSection('KEY STATS', {
          BodyFat: 'Body Fat',
          BodyMassIndex: 'BMI',
          Bodyweight: 'Weight'
        })}
        {renderSection('FACE', {
          MeasuredBodyFatChin: 'Chin',
          MeasuredBodyFatCheek: 'Check'
        })}
        {renderSection('CORE', {
          MeasuredBodyFatPec: 'Pec',
          MeasuredBodyFatMidax: 'Midax',
          MeasuredBodyFatSupra: 'Supra',
          MeasuredBodyFatUmbil: 'Umbil'
        })}
        {renderSection('ARMS', {
          MeasuredBodyFatBiceps: 'Biceps',
          MeasuredBodyFatTriceps: 'Triceps',
          MeasuredBodyFatSubscap: 'Subscap'
        })}
        {renderSection('LEGS', {
          MeasuredBodyFatUpperThigh: 'Upper Thigh',
          MeasuredBodyFatKnee: 'Knee',
          MeasuredBodyFatSubscap: 'Subscap',
          MeasuredBodyFatQuad: 'Quad',
          MeasuredBodyFatHam: 'Ham'
        })}
        {demoMode === true &&
          renderSection('GIRTH', {
            MidNeck: 'Neck',
            NaturalWaist: 'Natural Waist',
            Navel: 'Navel',
            HipsCircumference: 'Hips'
          })}
      </Box>
      <DrawerActionSidebar
        clientUsername={''}
        open={open}
        toggleDrawer={(openFlag) => {
          setOpen(openFlag);
        }}
        component={<ScoreDetail userId={String(clientId)} externalKey={externalKey} data={scoreDetailData} />}
        drawerType={sidebarHeader}
        infoData={scoreDetailData}
        anchor="right"
        width={500}
      />
    </React.Fragment>
  );
};

export default Measurements;
