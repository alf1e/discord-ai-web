import './App.css';
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, Button, Grid } from '@mui/material';
import { ArrowBack, AssignmentInd, Home, Apps } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';

function NavBar() {
  return (
    <Box component="nav">
        <AppBar position="static">
            <Toolbar>
                <IconButton href="/">
                    <Home />
                </IconButton>
                <IconButton href="/dashboard" disabled>
                    <DashboardIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  );
}

export default NavBar;
