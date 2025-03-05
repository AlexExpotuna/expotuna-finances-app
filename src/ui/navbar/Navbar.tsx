import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { DrawerMobile } from './components/DrawerMobile';
import { DrawerDesktop } from './components/DrawerDesktop';
import { Appbar } from './components/Appbar';
import { MyDrawer } from './components/MyDrawer';
import { Outlet } from 'react-router-dom';  
import { MenuOptions } from './MenuOptions';

const drawerWidth = 240;

export function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <DrawerMobile drawerWidth={drawerWidth}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
             handleDrawerClose={handleDrawerClose}
             drawer={MyDrawer({items: MenuOptions.filter(item => !item.hidden)})}/>
        <DrawerDesktop drawerWidth={drawerWidth} drawer={MyDrawer({items: MenuOptions.filter(item => !item.hidden)})}/>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
