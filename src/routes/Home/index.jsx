import { useState } from 'react';
import { Typography, Box, Button } from "@mui/material";

import DataSelect from './DataSelect';
import UploadData from './UploadData';

function Home() {
    const [showDataSelect, setShowDataSelect] = useState(false);

    const handleGetStartedClick = () => {
        setShowDataSelect(true);
    };

    const handleBackToHome = () => {
        setShowDataSelect(false);
    };

    return (
        <Box sx={{ padding: '100px' }}>
            {showDataSelect ? (
                <DataSelect handleBackToHome={handleBackToHome} />
            ) : (
                <Box
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    minHeight: '50vh', 
                    height: 'auto',
                    textAlign: 'center',
                    padding: '20px',
                }}
                >
                    <Typography variant='h4' sx={{ color: 'black', paddingBottom: '60px' }}>
                        Welcome to Paragon Investment Analytics!
                        <br /> <br />
                        Unlock the power of data-driven decision-making with our revolutionary no-code tool designed
                        to test your stock market investment strategies effortlessly. Whether you're a seasoned investor
                        or just starting out, Paragon empowers you to analyze, optimize, and refine your investment strategies
                        with ease.
                        <br /> <br />
                        With intuitive tools and comprehensive analytics at your fingertips, explore endless possibilities,
                        fine-tune your approach, and stay ahead of the curve in the dynamic world of stock market investing.
                        <br /> <br />
                        New to Paragon? Click the button below to create your first strategy. Otherwise, you can navigate directly to
                        the Strategy Tester!
                    </Typography>
                    <Button
                        sx={{ 
                            backgroundColor: '#66C8DE', 
                            color: 'black', 
                            fontSize: '20px',
                            textTransform: 'none',
                            '&:hover': {
                                color: 'white'
                            }
                         }}
                        onClick={handleGetStartedClick}
                    >
                        Get Started
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default Home;
