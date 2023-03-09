import React from 'react';
import Typography from '@mui/material/Typography';
import { useHealthQuoteStyles } from './HealthQuoteStyles';
import quotes from '../../core/constants/HealthQuotes.json';

const HealthQuote = () => {
  const classes = useHealthQuoteStyles();
  const [quoteIndex, setQuoteIndex] = React.useState(0);

  React.useEffect(() => {
    const index = Math.floor(Math.random() * (quotes.length - 1));
    setQuoteIndex(index);
  }, []);

  return (
    <React.Fragment>
      <Typography paragraph className={classes.description}>
        {/* <i>  */}
          {'" ' + quotes[quoteIndex].quote + ' "'}
        {/* </i> */}
        <strong> ~ {quotes[quoteIndex].name} </strong>
      </Typography>
    </React.Fragment>
  );
};

export default HealthQuote;
