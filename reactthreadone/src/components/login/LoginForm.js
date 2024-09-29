import React, { useState } from 'react';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        console.log('Login attempt', { email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '400px', margin: '1em auto' }}
        >
            <TextField
                label="Correo"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
                slotProps={{
                    inputLabel: {
                        sx: {
                            '&.Mui-focused': {
                                color: '#790b0b',
                            },
                        },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#790b0b',
                        },
                    },
                }}
            />
            <TextField
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                slotProps={{
                    inputLabel: {
                        sx: {
                            '&.Mui-focused': {
                                color: '#790b0b',
                            },
                        },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#790b0b',
                        },
                    },
                }}
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                sx={{ marginTop: '20px', backgroundColor: '#790b0b', '&:hover': { backgroundColor: 'black' }, fontFamily: 'Cormorant, serif' }}
            >
                Iniciar sesión
            </Button>
        </Box>
    );
}

export default LoginForm;
