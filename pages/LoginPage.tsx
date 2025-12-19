
import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Alert, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff, FlightTakeoff } from '@mui/icons-material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError('Credenciais inválidas ou erro de conexão.');
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E85A2A 100%)'
    }}>
      <Paper elevation={12} sx={{ p: 5, width: '100%', maxWidth: 400, textAlign: 'center', borderRadius: 4 }}>
        <Box sx={{ mb: 3 }}>
           <Box 
            component="img" 
            src="https://www.voegol.com.br/assets/img/logo-gol.svg" 
            sx={{ height: 40, mb: 1 }} 
          />
          <Typography variant="h5" sx={{ fontWeight: 800 }}>ShiftFlow <span style={{ color: '#FF6B35' }}>System</span></Typography>
          <Typography variant="body2" color="textSecondary">Acesse sua conta corporativa</Typography>
        </Box>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email @gol.com"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <TextField
            fullWidth
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 4, height: 50, fontSize: '1.1rem' }}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <FlightTakeoff />}
          >
            {loading ? 'Validando...' : 'Entrar no Sistema'}
          </Button>
        </form>
        
        <Typography variant="caption" display="block" sx={{ mt: 3, color: '#95A5A6' }}>
          © 2024 GOL Linhas Aéreas - Shift Management v5.0
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
