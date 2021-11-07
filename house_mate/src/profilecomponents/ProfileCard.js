import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TDivider from './Divider';
//Pair program Nathan

const ProfileCard = props => {
  return (
          <div class="profile-page__image-container">
              <img
                src={props.image}
                class="profile-page__image"
                ></img>
            
            <div class="profile-page__infocontainer">
            <TDivider displayname={props.display_name} username={props.username} number={props.number}/>
            
            click row to edit
            </div>
          </div>  
        
      
    
  );
}
export default ProfileCard;