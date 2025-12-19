
import React from 'react';
import { Grid, Paper, Typography, Box, LinearProgress } from '@mui/material';
import { Flight, Group, AccessTime, CheckCircle } from '@mui/icons-material';

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode, color: string }> = ({ title, value, icon, color }) => (
  <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3, borderRadius: 3 }}>
    <Box sx={{ bgcolor: `${color}15`, p: 2, borderRadius: '50%', color: color }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="caption" color="textSecondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Typography>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>{value}</Typography>
    </Box>
  </Paper>
);

const DashboardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 4 }}>Dashboard Operacional</Typography>
      
      <Grid container spacing={3}>
        {/* Updated Grid components: removed deprecated 'item' prop and moved breakpoints to 'size' prop for MUI v6 compatibility */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Voos Ativos" value="124" icon={<Flight />} color="#FF6B35" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Tripulantes" value="842" icon={<Group />} color="#3498DB" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Horas Totais" value="4.2k" icon={<AccessTime />} color="#9B59B6" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <StatCard title="Conformidade" value="98%" icon={<CheckCircle />} color="#2ECC71" />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 4, borderRadius: 3, minHeight: 400 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Status das Bases (SLA)</Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">POAMX (Porto Alegre)</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>92%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={92} sx={{ height: 8, borderRadius: 5 }} />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">GRU (Guarulhos)</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>85%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={85} color="warning" sx={{ height: 8, borderRadius: 5 }} />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">GIG (Rio de Janeiro)</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>98%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={98} color="success" sx={{ height: 8, borderRadius: 5 }} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        <Grid size={{ xs: 12, md: 4 }}>
           <Paper sx={{ p: 4, borderRadius: 3, bgcolor: '#3A3A3A', color: '#FFF' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Informativo GOL</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Atenção: Novas regras de descanso da ANAC em vigor a partir de amanhã.
            </Typography>
            <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <Typography variant="caption" sx={{ fontWeight: 'bold' }}>SISTEMA ESTÁVEL</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
