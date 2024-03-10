import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";

import TickerAutocomplete from '../../components/TickerAutocomplete';

function UploadData({ handleBackToHome }) {
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
                Upload Your Own Data
            </Typography>
            <Typography variant='h4' sx={{ color: 'black', paddingBottom: '60px' }}>
                Feature Coming Soon!
            </Typography>
        </Box>
    );
}

export default UploadData;
