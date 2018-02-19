import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { NavListItems } from './menuListItems';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

class AppHeaderMenu extends Component {
  constructor() {
    super();

    this.state = {
      navOpen: false
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({
      navOpen: open,
    });
  };

  render(){
  
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer(true)}/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              שיעורון
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer 
          anchor="left" 
          open={this.state.navOpen} 
          onClose={this.toggleDrawer(false)}
          variant='temporary'
          >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>{NavListItems}</List>
          </div>
        </Drawer>
      </div>
    );
  }
}

AppHeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeaderMenu);
