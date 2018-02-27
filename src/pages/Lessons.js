import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import { Link } from "react-router-dom";

const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ accessToken: 'gkvAmhEckZAAAAAAAAAANkXMvmykkkK9jM91ULBgtQ0QwYVPaZvb8wHYBc97QP88' });

class Lessons extends Component {
  constructor() {
    super();
    this.state = {
      folders: [],
    }
  }
  
  loadFromCloud = () => {
    dbx.filesListFolder({path: this.props.location.pathname})
      .then((response) => {
        console.log(response);
        this.setState({
          folders: response.entries
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.loadFromCloud()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) 
    this.loadFromCloud()
  }


  generateFolderTags = () => {
    return this.state.folders.map(folder => 
      (<div key={folder.path_display}>
        <List>
          <Link to={`${this.props.location.pathname}/${folder.name}`} style={{ textDecoration: 'none' }}>  
            <ListItem button>
              <Avatar>
                <FolderIcon />
              </Avatar>
              <ListItemText primary={folder.name}/>
            </ListItem>
          </Link>
          
        </List>
      </div>)
    )
  }

  render() {
    return (
      <div className="App">
        { this.state.folders.length?  this.generateFolderTags() : 
          ( <CircularProgress style={{ color: purple[500] }} thickness={7} /> )
        }
      </div>
      
         
    );
  }
}
  
export default Lessons;