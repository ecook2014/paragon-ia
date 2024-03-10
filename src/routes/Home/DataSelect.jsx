import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";

import TickerAutocomplete from '../../components/TickerAutocomplete';

function DataSelect({ handleBackToHome }) {
    const [selectData, setSelectData] = useState(false);

    const handleSelectData = () => {
        setSelectData(true);
    }

    return (
        <Box
            sx={{
                backgroundColor: 'white', 
                borderRadius: '10px',
                minHeight: '50vh',
                textAlign: 'center',
                padding: '20px',
                position: 'relative',
                height: 'auto',
            }}
        >
            <IconButton
                sx={{ 
                    position: 'absolute', 
                    top: '10px', 
                    left: '10px', 
                    backgroundColor: '#66C8DE',
                    '&:hover': {
                        backgroundColor: 'gray',
                    }, }}
                onClick={handleBackToHome}
                aria-label="back"
            >
                <ArrowBackIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography variant='h3' sx={{ color: 'black', paddingBottom: '60px' }}>
                Build Your Portfolio
            </Typography>
            {selectData ? (
            <TickerAutocomplete />
            ):(
            <>
            <Typography variant='h4' sx={{ color: 'black', paddingBottom: '60px' }}>
                Would you like to select your stocks from our available data or import your own data?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
            <Button
                    sx={{ 
                        backgroundColor: '#66C8DE', 
                        color: 'black', 
                        fontSize: '15px', 
                        textTransform: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                     }}
                     onClick={handleSelectData}
                >
                    Select Data
                </Button>
                <Button
                    sx={{ 
                        backgroundColor: '#66C8DE', 
                        color: 'black', 
                        fontSize: '15px', 
                        textTransform: 'none',
                        '&:hover': {
                            color: 'white'
                        }
                     }}
                >
                    Import Your Own Data
                </Button>
            </Box>
            </>
            )}
        </Box>
    );
}

export default DataSelect;
