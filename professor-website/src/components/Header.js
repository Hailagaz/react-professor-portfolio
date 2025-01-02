// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Hidden } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Professor Portfolio
				</Typography>
				<Hidden smDown>
					<div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
						<MenuItem onClick={handleClose}>Home</MenuItem>
						<MenuItem onClick={handleClose}>About</MenuItem>
						<MenuItem onClick={handleClose}>Contact</MenuItem>
					</div>
				</Hidden>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleMenu}
					color="inherit"
				>
					<AccountCircle />
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
			</Toolbar>
		</AppBar>
	);
};

export default Header;