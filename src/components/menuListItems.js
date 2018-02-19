import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import UploadIcon from 'material-ui-icons/FileUpload';
import VoiceIcon from 'material-ui-icons/KeyboardVoice';
import { Link } from "react-router-dom";

export const NavListItems = (
  <div>
    <Link to="/lessons" style={{ textDecoration: 'none' }}>  
      <ListItem button>
        <ListItemIcon>
          <VoiceIcon />
        </ListItemIcon>
        <ListItemText primary="האזנה לשיעורים" />
      </ListItem>
    </Link>
    <Link to="/upload" style={{ textDecoration: 'none' }}>  
      <ListItem button>
        <ListItemIcon>
          <UploadIcon />
        </ListItemIcon>
        <ListItemText primary="העלאת שיעור" />
      </ListItem>
    </Link>
  </div>
);
