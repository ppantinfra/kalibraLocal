import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import addImgIcon from '../../assets/images/bodyComp/addIcon.svg';
import compareImgIcon from '../../assets/images/bodyComp/compareIcon.svg';
import Grid from '@mui/material/Grid';
import { CommonContext, CommonContextType } from '../../core/context';
type IProps = {
  handleAdd?: () => void;
  handleCompare?: () => void;
  headerLabel?: string;
  dateText?: any;
  gridColumn1?: number;
  gridColumn2?: number;
  iconClass?: string;
  isPicturesHeader?: boolean;
};

const BodyCompNavigatedHeader = ({
  handleAdd,
  handleCompare,
  headerLabel,
  // dateText,
  gridColumn1,
  gridColumn2,
  iconClass,
  isPicturesHeader
}: IProps) => {
  const classes = useBodyCompositionScreenStyles();
  const { demoMode } = useContext(CommonContext) as CommonContextType;


  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        className={`${classes.bc_navigatedHeaderBox} grid640_BodyCompNavHeader_responsive_mob`}
      >
        <Grid item xs={6} md={gridColumn1}>
          <Box className={classes.bcnhbhb_headerText}>
            <Typography className={classes.bcnhbhb_text}>
              {headerLabel}
            </Typography>
            {/* <Typography className={classes.bcnhbhb_subText}>
              {dateText}
            </Typography> */}
          </Box>
        </Grid>
        {(demoMode === true || isPicturesHeader === undefined) && (
          <Grid item xs={6} md={gridColumn2}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                className={`${classes.bcnhbhb_navigatedLinks} bcnhbhb_navigatedLinks_right`}
              >
                <Grid item xs={6}>
                  <Box className={classes.bcnhbhbnl_addIcon}>
                    <Link component="button" onClick={handleAdd}>
                      <img src={addImgIcon} alt="add" className={iconClass} />
                      Add
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.bcnhbhbnl_compareIcon}>
                    <Link component="button" onClick={handleCompare}>
                      <img
                        src={compareImgIcon}
                        alt="compare"
                        className={iconClass}
                      />
                      Compare
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default BodyCompNavigatedHeader;
