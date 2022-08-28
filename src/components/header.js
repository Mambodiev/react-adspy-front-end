
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
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

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar : {
    background: '#303030',
    shadows: ["none"],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#303030',
    '&:hover': {
      backgroundColor: '#000c00',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    // border: '1px solid',
  },
  loginHeader : {
    borderRadius : '0',
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
    color: "#303030"
  },
}));

export default function PrimarySearchAppBar() {
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
            <AccountCircleOutlinedIcon />
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
            <AccountCircleOutlinedIcon />
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
            <AccountCircleOutlinedIcon />
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
            <AccountCircleOutlinedIcon />
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
            <AccountCircleOutlinedIcon />
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
  // const [LanguageMoreanchorEl, setLanguageMoresetAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setLanguageMoresetAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setLanguageMoresetAnchorEl(null);
  // };

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
                  color="textPrimary"
                  variant="h5"
                >
                  SNOOPERSPY
              </Link>
            </Typography>
           
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
  
                className={classes.loginHeader}
              >
                <AccountCircleOutlinedIcon />
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
  
              >
                <MoreIcon />
              </IconButton>
            </div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
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
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
