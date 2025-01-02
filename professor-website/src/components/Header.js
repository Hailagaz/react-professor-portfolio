// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static" sx={{ height: 64 }}>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1, width: '200px' }}>
					Professor Portfolio
				</Typography>
				<Hidden mdDown>
					<div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
						<MenuItem onClick={handleClose}>Home</MenuItem>
						<MenuItem onClick={handleClose}>About</MenuItem>
						<MenuItem onClick={handleClose}>Contact</MenuItem>
					</div>
				</Hidden>
				<Hidden mdUp>
					<IconButton
						size="large"
						aria-label="open menu"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Home</MenuItem>
						<MenuItem onClick={handleClose}>About</MenuItem>
						<MenuItem onClick={handleClose}>Contact</MenuItem>
					</Menu>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Header;