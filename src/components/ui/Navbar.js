import * as React from 'react';
import { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

//Router
import { useNavigate } from 'react-router-dom';

// Icons for change theme
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Importo contexto 
import { ThemeContext } from '../../context/ThemeContext';

const pages = [
    { name: 'Pokedex', route: '/pokedex' },
];
const settings = [
    { name: 'Profile', route: '/' },
    { name: 'Account', route: '/pokedex' },
    { name: 'Dashboard', route: '/' },
    { name: 'Logout', route: '/' }
];

export const Navbar = () => {

    const navigate = useNavigate();

    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('isDarkTheme', !isDarkTheme);
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar id="navbar" position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                }}
                >
                LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map(({name, route}) => (
                            <MenuItem key={name} onClick={ () => {
                                handleCloseNavMenu();
                                navigate(route);
                            }}>
                                <Typography textAlign="center">{name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map(({name, route}) => (
                        <Button
                            key={name}
                            onClick={() => navigate(route)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {name}
                        </Button>
                    ))}
                </Box>
                
                {/* Icono para cambiar de tema */}
                <IconButton sx={{ ml: 1 }} onClick={ changeTheme } color="inherit">
                    { isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon /> }
                </IconButton>

                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
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
                    onClose={handleCloseUserMenu}
                >
                    {settings.map(({name, route}) => (
                        <MenuItem key={name} onClick={ () => {
                                handleCloseUserMenu();
                                navigate(route);
                            }
                        }>
                            <Typography textAlign="center">{name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;