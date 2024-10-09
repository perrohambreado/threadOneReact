import React from 'react';
import { Typography, Box } from '@mui/material';

function LoginText() {
    return (
        <Box 
            component="section" 
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', margin: '1em' }}
        >
            <Typography variant="h1" component="h1" sx={{ fontFamily: 'Cormorant, serif', marginRight: '20px', color: "black", position: 'relative', marginBottom: '50px'}}>
                Inicia sesión
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Cormorant, serif', marginBottom: '20px', fontSize:"21.5px", color:"grey" }}>
                Bienvenido de nuevo, sigamos creando juntos
            </Typography>
        </Box>
    );
}

export default LoginText;
