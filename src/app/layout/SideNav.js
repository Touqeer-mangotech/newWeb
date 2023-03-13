import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Badge, Tooltip, Menu, Avatar, Typography, Toolbar, ListItemText, ListItemButton, ListItem, List } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import colors from './../styles/colors';
import { styled } from '@mui/material/styles';
import Images from './../assets/Images';

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  margin: '10px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function SideNav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotify, setAnchorElNotify] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <DrawerHeader>
        <Link to='/home'>
          <img src={Images.logo} alt="Scriptio" style={{ width: "100px", marginRight: "10px" }} />
        </Link>
      </DrawerHeader>
      <Divider />
      <List>
        {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                // justifyContent: open ? 'initial' : 'center',
                m: 1,
                borderRadius: "8px",
                "&.Mui-selected": {
                  bgcolor: colors.secondary,
                  color: colors.white,
                  ":hover": {
                    backgroundColor: colors.secondary,
                    color: colors.white,
                  }
                },
                ":hover": {
                  backgroundColor: colors.secondary,
                  color: colors.white,
                },
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          "background-image": "linear-gradient(to left, #00cccf,#53B1BF, #00b6b8,#2c649d, #008ec3, )",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
            <Box>
            </Box>
            <Box display="flex">

              {/* Notification Bell */}
              <Tooltip title="Open Notification" >
                <IconButton
                  // onClick={(e) => { setAnchorElNotify(e.currentTarget); }} 
                  sx={{ px: 2 }}>
                  <Badge color="error">
                    <NotificationsNoneOutlinedIcon sx={{ color: colors.white }} />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: 5.5, }}
                id="notify-appBar"
                anchorEl={anchorElNotify}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                // open={Boolean(anchorElNotify)}
                // onClose={() => setAnchorElNotify(null)}
                PaperProps={{
                  style: {
                    width: '350px',
                    maxHeight: '280px',
                    borderRadius: '10px',
                  },
                }}
              >

              </Menu>

              {/* User AVATAR */}
              {/* <Box sx={{ m: 1 }}>
                <Typography color={colors.secondary} fontWeight="bold" >{"userName"}</Typography>
                {role === "manager" ?
                  <Typography color={colors.secondary} fontSize="10px" textAlign="right">Manager</Typography> :
                  <Typography color={colors.secondary} fontSize="10px" textAlign="right">Admin</Typography>
                }
              </Box> */}
              <Tooltip title="User" >
                <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0, m: 0.5 }}>
                  <Badge badgeContent={""}>
                    <Avatar src={""} alt="RemySharp"></Avatar>
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appBar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;