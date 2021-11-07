import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TDivider from './Divider';
import { Button } from '@mui/material';
import { useState } from 'react';

//Pair program Nathan

const ProfileCard = props => {
    let user_number = 9053966805
    let user_display_name = 'Connor Burns'
    let username = 'connorburns19'
    let image = 'https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg'

    const [displayName, setDisplayName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()


  return (
          <div class="profile-page__image-container">
              <img
                src={props.image}
                class="profile-page__image"
                ></img>
            
            <div class="profile-page__infocontainer">
            <TDivider displayname={props.display_name} username={props.username} number={props.number}/>
            
            <Button onClick={() => setDisplayName(user_display_name='Yeee')}>change name</Button>
            </div>
          </div>  
        
      
    
  );
}
export default ProfileCard;