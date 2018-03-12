import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import AudioIcon from 'material-ui-icons/Audiotrack';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';
import { Link } from "react-router-dom";
import Cloud from '../services/cloud';

class Lessons extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selectedFolder: undefined
    }
  }
  
  getCurrentFiles = () => {
    Cloud.getCurrentFiles(this.state.selectedFolder.folderid, (files) => {

      this.setState({
        items: files.contents
      });
    })    
  }

  loadFromCloud = () => {
    if (!this.state.selectedFolder) 
      Cloud.getFolderByPath(this.props.location.pathname,(folder) => {
        this.setState({selectedFolder: folder}, this.getCurrentFiles);
      })
    else 
      this.getCurrentFiles();
  }

  componentWillMount() {
    this.loadFromCloud()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) 
    this.loadFromCloud()
  }


  generateFolderTags = () => {
    return this.state.items.map(item => 
      (<div key={item.id}>
        <List>
          <Link to={`${this.props.location.pathname}/${item.name}`} style={{ textDecoration: 'none' }}
                onClick={() => this.setState({selectedFolder: item})}>  
            <ListItem button>
              <Avatar>
                {item.isFolder ? <FolderIcon />: <AudioIcon />}
              </Avatar>
              <ListItemText primary={item.name}/>
            </ListItem>
          </Link>
        </List>
      </div>)
    )
  }

  render() {
    return (
      <div className="App">
        { this.state.items.length?  this.generateFolderTags() : 
          ( <CircularProgress style={{ color: purple[500] }} thickness={7} /> )
        }
      </div>
    );
  }
}
  
export default Lessons;