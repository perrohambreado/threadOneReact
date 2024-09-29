import React from 'react';
import { Typography, Box } from '@mui/material';

function NotFound() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                paddingTop: '150px',
            }}
        >
            <Typography 
                variant="h1" 
                sx={{ color: 'black', fontSize: '50px', paddingTop: '400px'}}
            >
                404: Page not found
            </Typography>
        </Box>
    );
}

export default NotFound;