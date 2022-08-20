import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  }

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#fff',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>

      <Button 
      onClick={handleClick}
      >
        PROFILE
        <ExpandMoreIcon /> 
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          component={NavLink}
          to="/register"
          underline="none"
          color="textPrimary"
        >
          <StyledMenuItem>
            <ListItemIcon>
              <VpnKeyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </StyledMenuItem>
        </Link>
        <Link
          component={NavLink}
          to="/login"
          underline="none"
          color="textPrimary"
        >
          <StyledMenuItem>
            <ListItemIcon>
              <LockOpenIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </StyledMenuItem>
        </Link>
        <Link
          component={NavLink}
          to="/logout"
          underline="none"
          color="textPrimary"
        >
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
