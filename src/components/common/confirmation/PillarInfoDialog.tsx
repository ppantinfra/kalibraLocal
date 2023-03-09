import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSuccessDialogStyles } from './SuccessDialogStyles';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

type Props = {
  showInfoPopup?: any;
  pillar?: string;
  subCat?: string;
  infoDialogCloseHandler?: any;
};

const PillarInfoDialog = ({
  pillar,
  subCat,
  infoDialogCloseHandler
}: Props) => {
  const classes = useSuccessDialogStyles();
  const [open, setOpen] = React.useState(true);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
    infoDialogCloseHandler();
  };

  const infos = {
    'Grow': [
      { title: 'Values', value: 'Articulating how we want to live, as well as awareness of what norms society is imposing on us. Based on conversations with Kali.' },
      { title: 'Goals', value: 'Setting and achieving our goals, having a coherent vision of what we want to accomplish. Based on conversations with Kali.' },
      { title: 'Motivation', value: 'Our dreams and inspiration, being aware of role models and having tools for facing hardships. Based on conversations with Kali.' },
      { title: 'Stress', value: 'Overall stress levels (menatl physical, phiisological), as reported through Kali conversations or biomarkers such as Cortisol.' }
    ],
    'Reflect': [
      { title: 'Body', value: 'Awareness of our posture, sensations, emotions and breath.' },
      { title: 'Mind', value: 'Awareness of how we listen, concentrate, smile, channel our thoughts and creativity.' },
      { title: 'General', value: 'Our mindfulness practice, quiet time, reflection and gratitude practice.' },
    ],
    'Connect': [
      { title: 'Intimate', value: 'Our love life, connection with our partner and the strength of our intimate relationship. Scored by Kali.' },
      { title: 'Friends', value: 'Our connection with our friends, the support and listening they provide for us. Scored by Kali' },
      { title: 'People', value: 'How we handle people challenges, external opinions, social media validation and how we network. Scored by Kali.' },
      { title: 'Community', value: 'How we engage with our community, how we approach social life and handle potential loneliness.' },
    ],
    'Rest': [
      { title: 'Quality', value: 'Quality of our restfulness, issues with sleepiness and soundness of our sleep.' },
      { title: 'Consistency', value: 'Keeping a consistent sleep schedule and disruptions to our sleep' },
      { title: 'Recovery', value: 'Our mental, emotional and physical recovery.' },
      { title: 'Quantity', value: 'The lenght of our actual sleep (rather than time in bed), ease of falling asleep and wake-ups.' },
    ],
    'Move': [
      { title: 'Cardio', value: 'Our cardiovascular system strength, blood pressure, resting heart rate and cardiovascular capacity.' },
      { title: 'Endurance', value: 'Our ability to sustain effort, and the ability of our joints and muscles to maintain a load through time.' },
      { title: 'Body Composition', value: 'Our lean body mass, our body fat, visceral fat and overall body morphology.' },
      { title: 'Mobility', value: 'The ability for our joints to move across the full range of motion without pain or effort.' },
      { title: 'Strength', value: 'The ability of our muscles to exert power and strength as a system and individually.' },
      { title: 'Performance', value: 'Our energy levels and recovery.' },
    ],
    'Nourish': [
      { title: 'Digestion', value: 'The status of our digestive system and elimination of toxins.' },
      { title: 'Carbohydrates', value: 'Our overall carb intake, our approach to starch and simple sugars.' },
      { title: 'Hydration', value: 'Our overall hydration status, drinking habits and salt intake.' },
      { title: 'Fats', value: 'Our overall fat intake, as well as intake of polyunsaturated, animal and saturated fat, and cholesterol balance.' },
      { title: 'Proteins', value: 'Our overall protein intake from food sources and supplements.' },
      { title: 'Micronutrients', value: 'Our mineral and vitamin balance, as well as phytonutrients.' },
      { title: 'Supplements', value: 'Our supplementation regimen, including Vitmin D, Iodine, B12 and folate, and other supplements.' },
      { title: 'Longevity', value: 'Our healthspan management and fasting protocols.' },
      { title: 'Prevention', value: 'Our approach to preventing cancer, arthritis, alzheimers, metabolic and heart disease.' },
    ],
  };

  const renderContent = () => {
    const data = infos[String(pillar)];
    const item = data.find(element => (element as any).title === subCat);
    return (
      <>
        {item && <Box key={item.title} className={classes.pillarBox}>
          <Typography className={classes.pillarInfo}>{item.value}</Typography>
        </Box>
        }
      </>


    );
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={classes.dialogPopup}
      >
        <DialogContent className={classes.dialogContent}>
          <Box style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', top: '16px', right: '16px' }}>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              style={{ marginLeft: '0px' }}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Box>
          <Typography
            className={classes.pillarName}
            sx={{ textAlign: 'center' }}
          >{subCat}</Typography>
          <Box className={classes.dialogText}>
            <Box className={classes.text}>{renderContent()}</Box>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default PillarInfoDialog;
