
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { Dashboard, EventNote, People, Settings, BarChart } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Escalas', icon: <EventNote />, path: '/scales' },
    { text: 'Tripulação', icon: <People />, path: '/crew' },
    { text: 'Relatórios', icon: <BarChart />, path: '/reports' },
    { text: 'Configurações', icon: <Settings />, path: '/settings' },
  ];

  const content = (
    <Box sx={{ overflow: 'auto', mt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => { navigate(item.path); onClose(); }}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                px: 2.5,
                mx: 1,
                borderRadius: 2,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'rgba(255, 107, 53, 0.08)',
                  color: '#FF6B35',
                  '& .MuiListItemIcon-root': { color: '#FF6B35' },
                  '&:hover': { bgcolor: 'rgba(255, 107, 53, 0.12)' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: '1px solid #E0E0E0' },
        }}
      >
        <Toolbar />
        {content}
      </Drawer>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {content}
      </Drawer>
    </>
  );
};

export default Sidebar;
