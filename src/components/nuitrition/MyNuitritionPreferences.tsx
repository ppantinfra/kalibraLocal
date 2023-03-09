import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { NuitritionScreenStyles } from '../../pages/interactionSystems/nutritionPlan/NuitritionScreenStyles';

import FormGroup from '@mui/material/FormGroup';

const MyNuitritionPreferences = () => {
  const classes = NuitritionScreenStyles();
  const [userValues, setUserValues] = useState<any>({
    doYouEatBreakfast: '',
    dietaryPreference: '',
    dietaryRequirements: '',
    fruits: '',
    otherFruitstoExclude: '',
    carbohydrates: '',
    Fats: '',
    otherFatstoExclude: '',
    vegetables: '',
    otherVegetablestoExclude: '',
    protein: '',
    otherProteinstoExclude: ''
  });

  const [dietaryRequirementsState, setDietaryRequirementsState] = React.useState({
    alcoholFree: true,
    immuneSupportive: false,
    celeryFree: false,
    crustaceanFree: false,
    dairyFree: false,
    dash: false,
    mustardFree: false,
    fishFree: false,
    fodmapFree: false,
    glutenFree: false,
    ketoFriendly: false,
    kidneyFriendly: true,
    kosher: false,
    lowPotassium: false,
    lupineFree: false,
    eggFree: false,
    Mediterranean: false,
    lowFatAbs: false,
    NoOilAdded: false,
    lowSugar: false,
    paleo: false,
    peanutsFree: false,
    pescatarian: false,
    porkFree: false,
    redMeatFree: false,
    sesameFree: false,
    shellfishFree: false,
    soyFree: false,
    sugarConscious: false,
    treeNutFree: false,
    vegan: false,
    vegetarian: false,
    wheatFree: false
  });

  const [fruitsState, setFruitsState] = React.useState({
    Apple: false,
    Banana: false,
    Blueberries: false,
    CherryTomatoes: true,
    DragonFruit: false,
    GreenGrapes: false,
    Kiwi: false,
    Mandarin: false,
    Mango: false,
    Nectarine: false,
    Plum: false,
    Orange: false,
    Strawberries: false,
    Watermelon: false
  });

  const [carbohydratesState, setCarbohydratesState] = React.useState({
    WhiteBread: false,
    WholeWheatBread: false,
    BrownRice: false,
    WhiteRice: false,
    Oats: false,
    Quinoa: false,
    RiceNoodles: false,
    EggNoodles: false,
    Pasta: false,
    SweetPotato: true,
    Potato: false
  });

  const [fatsState, setFatsState] = React.useState({
    AlmondNutButter: false,
    PeanutButter: false,
    Avocado: false,
    Almonds: false,
    Cashews: true,
    Feta: false,
    Halloumi: false,
    DarkChocolate: true,
    Butter: false,
    CoconutOil: false,
    OliveOil: false
  });

  const [vegetablesState, setVegetablesState] = React.useState({
    Asparagus: false,
    Broccoli: false,
    Cabbage: false,
    Carrots: false,
    Cauliflower: true,
    Celery: false,
    Cucumber: false,
    Kale: false,
    Lettuce: false,
    Onions: false,
    Peppers: false,
    Rocket: false,
    Spinach: false,
    Watercress: false,
    Zucchini: false,
    ChoiSum: false,
    GaiLan: false,
    PakChoi: false
  });

  const [proteinState, setProteinState] = React.useState({
    ChickenBreast: false,
    Lamb: false,
    MinceMeat: false,
    Pork: false,
    Sirloin: true,
    TurkeyBreast: false,
    Cod: false,
    Haddock: false,
    KingPrawns: false,
    Mackerel: false,
    Salmon: false,
    SeaBass: false,
    Tuna: false,
    Eggs: false,
    GreekYoghurt: true,
    ProteinPowder: false,
    Chickpeas: false,
    Lentils: false,
    Tempeh: false,
    Tofu: false
  });

  const handleUserValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserValues({
      ...userValues,
      [name]: value
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDietaryRequirementsState({
      ...dietaryRequirementsState,
      [event.target.name]: event.target.checked
    });
    // console.log('dietaryRequirementsState', dietaryRequirementsState);
  };
  const handleFruitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFruitsState({
      ...fruitsState,
      [event.target.name]: event.target.checked
    });
    //console.log('fruitsState', fruitsState);
  };
  const handleCarbohydratesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarbohydratesState({
      ...carbohydratesState,
      [event.target.name]: event.target.checked
    });
    // console.log('carbohydratesState', carbohydratesState);
  };
  const handleFatsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFatsState({
      ...fatsState,
      [event.target.name]: event.target.checked
    });
    // console.log('carbohydratesState', carbohydratesState);
  };
  const handleVegetablesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVegetablesState({
      ...vegetablesState,
      [event.target.name]: event.target.checked
    });
    // console.log('vegetablesState', vegetablesState);
  };
  const handleProteinsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProteinState({
      ...proteinState,
      [event.target.name]: event.target.checked
    });
    //console.log('proteinState', proteinState);
  };

  const dietaryRequirementsCheckBoxData = [
    {
      checked: dietaryRequirementsState.alcoholFree,
      name: 'alcoholFree',
      label: 'alcohol-free'
    },
    {
      checked: dietaryRequirementsState.immuneSupportive,
      name: 'immuneSupportive',
      label: 'immune-supportive'
    },
    {
      checked: dietaryRequirementsState.celeryFree,
      name: 'celeryFree',
      label: 'celery-free'
    },
    {
      checked: dietaryRequirementsState.crustaceanFree,
      name: 'crustaceanFree',
      label: 'crustacean-free'
    },
    {
      checked: dietaryRequirementsState.dairyFree,
      name: 'dairyFree',
      label: 'dairy-free'
    },
    {
      checked: dietaryRequirementsState.dash,
      name: 'dash',
      label: 'DASH'
    },
    {
      checked: dietaryRequirementsState.mustardFree,
      name: 'mustardFree',
      label: 'mustard-free'
    },
    {
      checked: dietaryRequirementsState.fishFree,
      name: 'fishFree',
      label: 'fish-free'
    },
    {
      checked: dietaryRequirementsState.fodmapFree,
      name: 'fodmapFree',
      label: 'fodmap-free'
    },
    {
      checked: dietaryRequirementsState.glutenFree,
      name: 'glutenFree',
      label: 'gluten-free'
    },
    {
      checked: dietaryRequirementsState.ketoFriendly,
      name: 'ketoFriendly',
      label: 'keto-friendly'
    },
    {
      checked: dietaryRequirementsState.kidneyFriendly,
      name: 'kidneyFriendly',
      label: 'kidney-friendly'
    },
    {
      checked: dietaryRequirementsState.kosher,
      name: 'kosher',
      label: 'kosher'
    },
    {
      checked: dietaryRequirementsState.lowPotassium,
      name: 'lowPotassium',
      label: 'low-potassium'
    },
    {
      checked: dietaryRequirementsState.lupineFree,
      name: 'lupineFree',
      label: 'lupine-free'
    },
    {
      checked: dietaryRequirementsState.Mediterranean,
      name: 'Mediterranean',
      label: 'Mediterranean'
    },
    {
      checked: dietaryRequirementsState.eggFree,
      name: 'eggFree',
      label: 'egg free'
    },
    {
      checked: dietaryRequirementsState.lowFatAbs,
      name: 'lowFatAbs',
      label: 'low-fat-abs'
    },
    {
      checked: dietaryRequirementsState.NoOilAdded,
      name: 'NoOilAdded',
      label: 'No-oil-added'
    },
    {
      checked: dietaryRequirementsState.lowSugar,
      name: 'lowSugar',
      label: 'low-sugar'
    },
    {
      checked: dietaryRequirementsState.paleo,
      name: 'paleo',
      label: 'paleo'
    },
    {
      checked: dietaryRequirementsState.peanutsFree,
      name: 'peanutsFree',
      label: 'peanuts-free'
    },
    {
      checked: dietaryRequirementsState.pescatarian,
      name: 'pescatarian',
      label: 'pescatarian'
    },
    {
      checked: dietaryRequirementsState.porkFree,
      name: 'porkFree',
      label: 'pork-free'
    },
    {
      checked: dietaryRequirementsState.redMeatFree,
      name: 'redMeatFree',
      label: 'red-meat-free'
    },
    {
      checked: dietaryRequirementsState.sesameFree,
      name: 'sesameFree',
      label: 'sesame-free'
    },
    {
      checked: dietaryRequirementsState.shellfishFree,
      name: 'shellfishFree',
      label: 'shellfish-free'
    },
    {
      checked: dietaryRequirementsState.soyFree,
      name: 'soyFree',
      label: 'soy-free'
    },
    {
      checked: dietaryRequirementsState.sugarConscious,
      name: 'sugarConscious',
      label: 'sugar-conscious'
    },
    {
      checked: dietaryRequirementsState.treeNutFree,
      name: 'treeNutFree',
      label: 'tree-nut-free'
    },
    {
      checked: dietaryRequirementsState.vegan,
      name: 'vegan',
      label: 'vegan'
    },
    {
      checked: dietaryRequirementsState.vegetarian,
      name: 'vegetarian',
      label: 'vegetarian'
    },
    {
      checked: dietaryRequirementsState.wheatFree,
      name: 'wheatFree',
      label: 'wheat-free'
    }
  ];
  const fruitsCheckBoxData = [
    {
      checked: fruitsState.Apple,
      name: 'Apple',
      label: 'Apple'
    },
    {
      checked: fruitsState.Banana,
      name: 'Banana',
      label: 'Banana'
    },
    {
      checked: fruitsState.GreenGrapes,
      name: 'GreenGrapes',
      label: 'Green Grapes'
    },
    {
      checked: fruitsState.Blueberries,
      name: 'Blueberries',
      label: 'Blueberries'
    },
    {
      checked: fruitsState.CherryTomatoes,
      name: 'CherryTomatoes',
      label: 'Cherry Tomatoes'
    },
    {
      checked: fruitsState.Kiwi,
      name: 'Kiwi',
      label: 'Kiwi'
    },
    {
      checked: fruitsState.Mandarin,
      name: 'Mandarin',
      label: 'Mandarin'
    },
    {
      checked: fruitsState.Mango,
      name: 'Mango',
      label: 'Mango'
    },
    {
      checked: fruitsState.Nectarine,
      name: 'Nectarine',
      label: 'Nectarine'
    },
    {
      checked: fruitsState.Plum,
      name: 'Plum',
      label: 'Plum'
    },
    {
      checked: fruitsState.Orange,
      name: 'Orange',
      label: 'Orange'
    },
    {
      checked: fruitsState.Strawberries,
      name: 'Strawberries',
      label: 'Strawberries'
    },
    {
      checked: fruitsState.Watermelon,
      name: 'Watermelon',
      label: 'Watermelon'
    },
    {
      checked: fruitsState.DragonFruit,
      name: 'DragonFruit',
      label: 'DragonFruit'
    }
  ];
  const carbohydratesCheckBoxData = [
    {
      checked: carbohydratesState.WhiteBread,
      name: 'WhiteBread',
      label: 'White Bread'
    },
    {
      checked: carbohydratesState.WholeWheatBread,
      name: 'WholeWheatBread',
      label: 'Whole Wheat Bread'
    },
    {
      checked: carbohydratesState.WhiteRice,
      name: 'WhiteRice',
      label: 'White Rice'
    },
    {
      checked: carbohydratesState.BrownRice,
      name: 'BrownRice',
      label: 'Brown Rice'
    },
    {
      checked: carbohydratesState.Oats,
      name: 'Oats',
      label: 'Oats'
    },
    {
      checked: carbohydratesState.Quinoa,
      name: 'Quinoa',
      label: 'Quinoa'
    },
    {
      checked: carbohydratesState.RiceNoodles,
      name: 'RiceNoodles',
      label: 'RiceNoodles'
    },
    {
      checked: carbohydratesState.EggNoodles,
      name: 'EggNoodles',
      label: 'EggNoodles'
    },
    {
      checked: carbohydratesState.Pasta,
      name: 'Pasta',
      label: 'Pasta'
    },
    {
      checked: carbohydratesState.SweetPotato,
      name: 'SweetPotato',
      label: 'SweetPotato'
    },
    {
      checked: carbohydratesState.Potato,
      name: 'Potato',
      label: 'Potato'
    }
  ];
  const fatsCheckBoxData = [
    {
      checked: fatsState.AlmondNutButter,
      name: 'AlmondNutButter',
      label: 'Almond Nut Butter'
    },
    {
      checked: fatsState.PeanutButter,
      name: 'PeanutButter',
      label: 'Peanut Butter'
    },
    {
      checked: fatsState.Avocado,
      name: 'Avocado',
      label: 'Avocado'
    },
    {
      checked: fatsState.Almonds,
      name: 'Almonds',
      label: 'Almonds'
    },
    {
      checked: fatsState.Cashews,
      name: 'Cashews',
      label: 'Cashews'
    },
    {
      checked: fatsState.Feta,
      name: 'Feta',
      label: 'Feta'
    },
    {
      checked: fatsState.Halloumi,
      name: 'Halloumi',
      label: 'Halloumi'
    },
    {
      checked: fatsState.DarkChocolate,
      name: 'DarkChocolate',
      label: 'DarkChocolate'
    },
    {
      checked: fatsState.Butter,
      name: 'Butter',
      label: 'Butter'
    },
    {
      checked: fatsState.CoconutOil,
      name: 'CoconutOil',
      label: 'CoconutOil'
    },
    {
      checked: fatsState.OliveOil,
      name: 'OliveOil',
      label: 'OliveOil'
    }
  ];
  const vegetablesCheckBoxData = [
    {
      checked: vegetablesState.Asparagus,
      name: 'Asparagus',
      label: 'Asparagus'
    },
    {
      checked: vegetablesState.Broccoli,
      name: 'Broccoli',
      label: 'Broccoli'
    },
    {
      checked: vegetablesState.Cabbage,
      name: 'Cabbage',
      label: 'Cabbage'
    },
    {
      checked: vegetablesState.Carrots,
      name: 'Carrots',
      label: 'Carrots'
    },
    {
      checked: vegetablesState.Cauliflower,
      name: 'Cauliflower',
      label: 'Cauliflower'
    },
    {
      checked: vegetablesState.Celery,
      name: 'Celery',
      label: 'Celery'
    },
    {
      checked: vegetablesState.Cucumber,
      name: 'Cucumber',
      label: 'Cucumber'
    },
    {
      checked: vegetablesState.Kale,
      name: 'Kale',
      label: 'Kale'
    },
    {
      checked: vegetablesState.Lettuce,
      name: 'Lettuce',
      label: 'Lettuce'
    },
    {
      checked: vegetablesState.Onions,
      name: 'Onions',
      label: 'Onions'
    },
    {
      checked: vegetablesState.Rocket,
      name: 'Rocket',
      label: 'Rocket'
    },
    {
      checked: vegetablesState.Peppers,
      name: 'Peppers',
      label: 'Peppers'
    },
    {
      checked: vegetablesState.Spinach,
      name: 'Spinach',
      label: 'Spinach'
    },
    {
      checked: vegetablesState.Watercress,
      name: 'Watercress',
      label: 'Watercress'
    },
    {
      checked: vegetablesState.Zucchini,
      name: 'Zucchini',
      label: 'Zucchini'
    },
    {
      checked: vegetablesState.ChoiSum,
      name: 'ChoiSum',
      label: 'ChoiSum'
    },
    {
      checked: vegetablesState.PakChoi,
      name: 'PakChoi',
      label: 'PakChoi'
    },
    {
      checked: vegetablesState.GaiLan,
      name: 'GaiLan',
      label: 'GaiLan'
    }
  ];
  const proteinsCheckBoxData = [
    {
      checked: proteinState.ChickenBreast,
      name: 'ChickenBreast',
      label: 'Chicken Breast'
    },
    {
      checked: proteinState.Lamb,
      name: 'Lamb',
      label: 'Lamb'
    },
    {
      checked: proteinState.MinceMeat,
      name: 'MinceMeat',
      label: 'Mince Meat'
    },
    {
      checked: proteinState.Pork,
      name: 'Pork',
      label: 'Pork'
    },
    {
      checked: proteinState.Sirloin,
      name: 'Sirloin',
      label: 'Sirloin'
    },
    {
      checked: proteinState.TurkeyBreast,
      name: 'TurkeyBreast',
      label: 'Turkey Breast'
    },
    {
      checked: proteinState.Cod,
      name: 'Cod',
      label: 'Cod'
    },
    {
      checked: proteinState.Haddock,
      name: 'Haddock',
      label: 'Haddock'
    },
    {
      checked: proteinState.KingPrawns,
      name: 'KingPrawns',
      label: 'King Prawns'
    },
    {
      checked: proteinState.Mackerel,
      name: 'Mackerel',
      label: 'Mackerel'
    },
    {
      checked: proteinState.Salmon,
      name: 'Salmon',
      label: 'Salmon'
    },
    {
      checked: proteinState.SeaBass,
      name: 'SeaBass',
      label: 'Sea Bass'
    },
    {
      checked: proteinState.Tuna,
      name: 'Tuna',
      label: 'Tuna'
    },
    {
      checked: proteinState.Eggs,
      name: 'Eggs',
      label: 'Eggs'
    },
    {
      checked: proteinState.GreekYoghurt,
      name: 'GreekYoghurt',
      label: 'Greek Yoghurt'
    },
    {
      checked: proteinState.ProteinPowder,
      name: 'ProteinPowder',
      label: 'Protein Powder'
    },
    {
      checked: proteinState.Chickpeas,
      name: 'Chickpeas',
      label: 'Chickpeas'
    },
    {
      checked: proteinState.Lentils,
      name: 'Lentils',
      label: 'Lentils'
    },
    {
      checked: proteinState.Tempeh,
      name: 'Tempeh',
      label: 'Tempeh'
    },
    {
      checked: proteinState.Tofu,
      name: 'Tofu',
      label: 'Tofu'
    }
  ];

  const save = async (e: any) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.nutritionPanelContent}>
      <Box>
        <Typography paragraph className={classes.formHeading}>
          My nutritional preferences
        </Typography>
        <Typography className={classes.formSubHeading} sx={{ marginBottom: 0 }}>
          Your nutritional preferences that determine our recommendations
        </Typography>
      </Box>
      <Box className={classes.formBox}>
        <form className={classes.formContent} method="post">
          <Box className={classes.formGroup}>
            <Box sx={{ display: 'block' }} className={classes.formGroupField}>
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Do you eat Breakfast?</strong>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  // style={{ flexWrap: "nowrap" }}
                  onChange={handleUserValuesChange}
                  className="form-control"
                  value={userValues.doYouEatBreakfast}
                  name="doYouEatBreakfast"
                  id={'doYouEatBreakfast'}
                >
                  <FormControlLabel value="iEatBreakfast" control={<Radio />} label="I eat Breakfast" />
                  <FormControlLabel value="iDoNotEatBreakfast" control={<Radio />} label="I do not eat Breakfast" />
                </RadioGroup>
              </Box>
              {/* <span style={{ color: "#d32f2f", fontSize: "0.75rem" }}>
                {activityLevelTextError ? activityLevelTextError : null}
              </span> */}
            </Box>

            <Box sx={{ display: 'block' }} className={classes.formGroupField}>
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong> Dietary preference</strong>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  // style={{ flexWrap: "nowrap" }}
                  onChange={handleUserValuesChange}
                  className="form-control"
                  value={userValues.dietaryPreference}
                  name="dietaryPreference"
                  id={'dietaryPreference'}
                >
                  <FormControlLabel
                    value="balance"
                    control={<Radio />}
                    label={
                      <>
                        <strong>Balanced </strong> - Protein/Fat/Carb values in 15/35/50 ratio
                      </>
                    }
                  />
                  <FormControlLabel
                    value="highFibre"
                    control={<Radio />}
                    label={
                      <>
                        <strong>High Fibre </strong> - More than 5g fiber per serving
                      </>
                    }
                  />
                  <FormControlLabel
                    value="highProtein"
                    control={<Radio />}
                    label={
                      <>
                        <strong>High Protein</strong> - More than 50% of total calories from proteins
                      </>
                    }
                  />
                  <FormControlLabel
                    value="lowCarb"
                    control={<Radio />}
                    label={
                      <>
                        <strong>Low Carb</strong> - Less than 20% of total calories from carbs
                      </>
                    }
                  />
                  <FormControlLabel
                    value="lowFat"
                    control={<Radio />}
                    label={
                      <>
                        <strong>Low Fat</strong> - Less than 15% of total calories from fat
                      </>
                    }
                  />
                  <FormControlLabel
                    value="lowSodium"
                    control={<Radio />}
                    label={
                      <>
                        <strong>Low Sodium</strong> - Less than 140mg Na per serving
                      </>
                    }
                  />
                </RadioGroup>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                borderBottom: '1px solid rgba(0,0,0,.2)',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Dietary requirements </strong> - Select none, one or many - Hover over to see a description
                </FormLabel>

                <FormGroup style={{ display: 'block' }}>
                  {dietaryRequirementsCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox checked={item.checked} onChange={handleChange} name={item.name} size="small" />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <Typography>
                  {
                    "<strong>Foods to avoid -</strong> We'll exclude any of these foods from our suggestions if you'd prefer not to eat them"
                  }
                </Typography>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Fruits</strong>
                </FormLabel>
                <FormGroup style={{ display: 'block' }}>
                  {fruitsCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox checked={item.checked} onChange={handleFruitsChange} name={item.name} size="small" />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box className={classes.formGroupField} sx={{ display: 'block', flex: '1 1 100% !important' }}>
              <TextField
                id="otherFruitstoExclude"
                label="Other fruits to exclude:"
                type="text"
                fullWidth
                variant="outlined"
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="otherFruitstoExclude"
                value={userValues.otherFruitstoExclude}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Carbohydrates </strong>
                </FormLabel>

                <FormGroup style={{ display: 'block' }}>
                  {carbohydratesCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.checked}
                          onChange={handleCarbohydratesChange}
                          name={item.name}
                          size="small"
                        />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box className={classes.formGroupField} sx={{ display: 'block', flex: '1 1 100% !important' }}>
              <TextField
                id="otherCarbstoExclude"
                label="Other carbs to exclude:"
                type="text"
                fullWidth
                variant="outlined"
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="otherCarbstoExclude"
                value={userValues.otherCarbstoExclude}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Vegetables</strong>
                </FormLabel>

                <FormGroup style={{ display: 'block' }}>
                  {vegetablesCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.checked}
                          onChange={handleVegetablesChange}
                          name={item.name}
                          size="small"
                        />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box className={classes.formGroupField} sx={{ display: 'block', flex: '1 1 100% !important' }}>
              <TextField
                id="otherVegetablestoExclude"
                label="Other vegetables to exclude:"
                type="text"
                fullWidth
                variant="outlined"
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="otherVegetablestoExclude"
                value={userValues.otherVegetablestoExclude}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Fats</strong>
                </FormLabel>

                <FormGroup style={{ display: 'block' }}>
                  {fatsCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox checked={item.checked} onChange={handleFatsChange} name={item.name} size="small" />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box className={classes.formGroupField} sx={{ display: 'block', flex: '1 1 100% !important' }}>
              <TextField
                id="otherFatstoExclude"
                label="Other fats to exclude:"
                type="text"
                fullWidth
                variant="outlined"
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="otherFatstoExclude"
                value={userValues.otherFatstoExclude}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box
              sx={{
                display: 'block',
                flex: '1 1 100% !important',
                mt: 2,
                mb: 2
              }}
              className={classes.formGroupField}
            >
              <Box>
                <FormLabel id="demo-radio-buttons-group-label" style={{ display: 'flex', alignItems: 'center' }}>
                  <strong>Protein</strong>
                </FormLabel>

                <FormGroup style={{ display: 'block' }}>
                  {proteinsCheckBoxData.map((item: any, i: any) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={item.checked}
                          onChange={handleProteinsChange}
                          name={item.name}
                          size="small"
                        />
                      }
                      label={item.label}
                      key={i}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Box>

            <Box className={classes.formGroupField} sx={{ display: 'block', flex: '1 1 100% !important' }}>
              <TextField
                id="otherProteinstoExclude"
                label="Other proteins to exclude:"
                type="text"
                fullWidth
                variant="outlined"
                InputProps={{
                  autoComplete: 'off',
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
                className="form-control"
                name="otherProteinstoExclude"
                value={userValues.otherProteinstoExclude}
                onChange={handleUserValuesChange}
              />
            </Box>

            <Box className={classes.formGroupField}></Box>
          </Box>

          <Box sx={{ mt: 1 }} className={classes.buttonsBox}>
            <Button className={classes.saveBtn} onClick={save}>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default MyNuitritionPreferences;
