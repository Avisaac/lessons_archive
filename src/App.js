import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from './pages/Home';
import Lessons from './pages/Lessons';
import Upload from './pages/Upload';

import AppHeaderMenu from './components/appHeader';
require('isomorphic-fetch');



const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  direction: 'rtl', // Both here and <body dir="rtl">
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div dir="rtl" style={{background: '#F5F5F5', position: 'absolute', height: '100%', width: '100%'}}>
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
