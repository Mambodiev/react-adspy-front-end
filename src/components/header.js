
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from 'material-ui-search-bar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar : {
    background: '#fff',
    shadows: ["none"],
    color:"inherit"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:"inherit",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    backgroundColor: '#fbfaf8',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  },
  
  loginHeader : {
    borderRadius : '0',
    color:"inherit",
  },
  moreIcon: {
    color:"inherit",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding:'0 25px 0 25px'
    },
  },
  sectionMobile: {
    display: 'flex',
    color:'inherit',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  MuiToolbarGutters: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  colorPrimary: {
    color: "#fff"
  },
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl); 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link
        component={NavLink}
        to="/register"
        underline="none"
        color="textPrimary"
      >
        <MenuItem>
          <IconButton
            >
            <AccountCircleIcon />
          </IconButton>
          <p>Profile</p>
        </MenuItem>        
      </Link>
      <Link
        component={NavLink}
        to="/logout"
        underline="none"
        color="textPrimary"
      >
        <MenuItem>
          <IconButton
            >
            <ExitToAppIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Link>
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="textPrimary"
      >
        <MenuItem>
          <IconButton
            >
            <AccountCircleIcon />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      </Link>
      <Link
        component={NavLink}
        to="/register"
        underline="none"
        color="textPrimary"
      >
        <MenuItem>
          <IconButton
            >
            <AccountCircleIcon />
          </IconButton>
          <p>Sign Up</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="textPrimary"
      >
        <MenuItem >
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <AccountCircleIcon />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>
      <Link
        component={NavLink}
        to="/logout"
        underline="none"
        color="textPrimary"
      >
        <MenuItem >
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <ExitToAppIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Link>
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="textPrimary"
      >
        <MenuItem >
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <AccountCircleIcon />
          </IconButton>
          <p>Login</p>
        </MenuItem>     
      </Link>
      <Link
        component={NavLink}
        to="/login"
        underline="none"
        color="textPrimary"
      >
        <MenuItem >
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
          >
            <LockOpenIcon />
          </IconButton>
          <p>Sign Up</p>
        </MenuItem>      
      </Link>
    </Menu>
  );
 

	let history = useHistory();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
            pathname: '/search/',
            search: '?search=' + data.search,
      });
		window.location.reload();
	};
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.AppBar}  elevation={0}  pb={3}>
        <Container maxWidth="lg"  px={0}>
          <Toolbar className={classes.MuiToolbarGutters}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link
                  component={NavLink}
                  to="/"
                  underline="none"
                  variant="h5"
                  color='inherit'
                >
                  SNOOPERSPY
              </Link>
            </Typography>
           
            <div className={classes.grow} />
            <SearchBar
              style={{ boxShadow: 'none' }}
              className={classes.search} 
              value={data.search}
              onChange={(newValue) => setData({ search: newValue })}
              onRequestSearch={() => goSearch(data.search)}
            />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
  
                className={classes.loginHeader}
              >
                <AccountCircleIcon />
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
              {/* <ToggleTheme /> */}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} color='inherit'>
                  <MenuIcon fontSize="large" />
                </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu} 
    </div>
  );
}

