import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NuitritionScreenStyles } from '../../pages/interactionSystems/nutritionPlan/NuitritionScreenStyles';
// import LoadingButton from "@mui/lab/LoadingButton";

const MyNuitritionRecipies = () => {
  const classes = NuitritionScreenStyles();

  const generateRecipies = (e: any) => {
    e.preventDefault();
    // document.getElementById("generateRecipes")?.setAttribute("disabled", true);
    // document.getElementById("generateRecipes")?.innerHTML = 'Generating <div class="spinner-border spinner-border-sm text-white mr-2" role="status"></div>';
  };

  return (
    <Box className={classes.nutritionPanelContent}>
      <Box>
        <Typography paragraph className={classes.formHeading}>
          Todays Recipies
        </Typography>
        <Typography className={classes.formSubHeading}>
          Your personalised recipies based on your biodata and nutritional
          preferences
        </Typography>

        <Box className={classes.formBox}>
          <form className={classes.formContent} method="post">
            <Box sx={{ mt: 1 }} className={classes.buttonsBox}>
              <Button
                className={classes.saveBtn}
                onClick={generateRecipies}
                id="generateRecipes"
              >
                Generate Recipies
              </Button>
              {/* <LoadingButton
                loading
                loadingPosition="start"
                className={classes.saveBtn}
                variant="outlined"
              >
                Save
              </LoadingButton> */}
            </Box>
          </form>
        </Box>
        <Box id="recipes"></Box>
      </Box>
    </Box>
  );
};

export default MyNuitritionRecipies;
