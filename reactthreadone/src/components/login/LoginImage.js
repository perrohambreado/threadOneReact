import React from 'react';
import GranadaLogin from '../../images/GranadaLogin.jpg';
import { Box } from '@mui/material';

function LoginImage() {
    return (
        <Box sx={{ width: '300px', height: '400px', overflow: 'hidden' }}>
            <img
                src={GranadaLogin}
                alt="Login"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', boxShadow: '20px 20px 70px rgba(0, 0, 0, 0.6)' }}
            />
        </Box>
    );
}

export default LoginImage;
