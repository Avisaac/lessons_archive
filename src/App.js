import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from './pages/Home';
import Lessons from './pages/Lessons';
import Upload from './pages/Upload';

import AppHeaderMenu from './components/appHeader';
require('isomorphic-fetch');


var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'gkvAmhEckZAAAAAAAAAANkXMvmykkkK9jM91ULBgtQ0QwYVPaZvb8wHYBc97QP88' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
dbx.usersGetCurrentAccount()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });


const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

class App extends Component {
  render() {
    return (
      
      <MuiThemeProvider theme={theme}>
        <div dir="rtl">
          <Router>
          <div>
            <AppHeaderMenu></AppHeaderMenu>
            <div>
              <Route exact path="/" component={ Home } />
              <Route path="/lessons" component={ Lessons } />
              <Route path="/upload" component={ Upload } />
            </div>
          </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
