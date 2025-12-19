
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, Badge } from '@mui/material';
import { Menu as MenuIcon, Notifications, Logout } from '@mui/icons-material';
import { useStore } from '../../store/useStore';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const user = useStore((state) => state.user);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#FFFFFF', color: '#3A3A3A', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onMenuClick} sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box 
            component="img" 
            src="https://www.voegol.com.br/assets/img/logo-gol.svg" 
            sx={{ height: 30, mr: 2, filter: 'grayscale(0)' }} 
          />
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', letterSpacing: -0.5 }}>
            ShiftFlow <span style={{ color: '#FF6B35' }}>System</span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <Notifications />
            </Badge>
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>{user?.displayName}</Typography>
              <Typography variant="caption" color="textSecondary">{user?.base}</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#FF6B35', width: 35, height: 35 }}>{user?.displayName?.charAt(0)}</Avatar>
            <IconButton onClick={handleLogout} color="error" size="small">
              <Logout fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
