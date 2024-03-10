import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField, Box, Button, List, ListItem, Typography, IconButton, Divider } from '@mui/material';
import { Close } from '@mui/icons-material';

import mockTickers from '../MockData/tickers.json';

const TickerAutocomplete = () => {
  const [tickers, setTickers] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState([]);
  const [selectedTickers, setSelectedTickers] = useState([]);

  useEffect(() => {
    const fetchTickers = async () => {
      try {
        // const response = await fetch('https://api.polygon.io/v3/reference/tickers?apiKey=UdxkZ64UpzBjPGXNui3wX510B6JlBmp8');
        // const data = await response.json();
        // if (response.ok) {
        //   setTickers(data.results);
        // } else {
        //   console.error('Failed to fetch ticker symbols:', data.error);
        // }
        setTickers(mockTickers.results);
      } catch (error) {
        console.error('Error fetching ticker symbols:', error);
      }
    };

    fetchTickers();
  }, []);

  const isTickerSelected = (ticker) => {
    return selectedTickers.some((selected) => selected.ticker === ticker.ticker);
  };

  const handleAddToPortfolio = () => {
    if (selectedTicker && !isTickerSelected(selectedTicker)) {
      console.log(selectedTicker);
      setSelectedTickers([...selectedTickers, selectedTicker]);
      setSelectedTicker([]);
    }
    else{
      setSelectedTicker([]);
    }
  };

  const handleRemoveTicker = (index) => {
    const newTickers = [...selectedTickers];
    newTickers.splice(index, 1);
    setSelectedTickers(newTickers);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
        <Autocomplete
          multiple
          disablePortal
          id="ticker-combo-box"
          options={tickers}
          getOptionLabel={(option) => `${option.ticker} - ${option.name}`}
          value={selectedTicker}
          onChange={(event, newValue) => setSelectedTicker(newValue)}
          sx={{ backgroundColor: 'gray', borderRadius: '5px', width: '75%' }}
          renderInput={(params) => <TextField {...params} label="Add a Stock" />}
        />
        <Button
          onClick={handleAddToPortfolio}
          sx={{
            backgroundColor: '#66C8DE',
            color: 'black',
            fontSize: '13px',
            textTransform: 'none',
            '&:hover': {
              color: 'white'
            }
          }}
        >
          Add to Portfolio
        </Button>
      </Box>
      <Typography variant="h4" sx={{ color: 'black', textAlign: 'left' }}>Your Portfolio:</Typography>
      <List>
        {selectedTickers.map((ticker, index) => (
          <>
            <ListItem key={index} sx={{ color: 'black', display: 'flex', justifyContent: 'space-between' }}>
              <Typography>{ticker.ticker} - {ticker.name}</Typography>
              <IconButton onClick={() => handleRemoveTicker(index)}><Close sx={{ color: 'red' }} /></IconButton>
            </ListItem>
            <Divider sx={{ borderColor: 'black' }} />
          </>
        ))}
      </List>
    </Box>
  );
};

export default TickerAutocomplete;
