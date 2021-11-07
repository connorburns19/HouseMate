import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TDivider from './Divider';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import CurrUser from '../Objects/CurrUser';


//Pair program Nathan


const ProfileCard = props => {
    

    const [name, setDisplayName] = useState(CurrUser().name)
    const [number, setPhoneNumber] = useState(CurrUser().phone)
    
    const [tempname, setTempName] = useState('')
    const [tempnumber, setTempPhoneNumber] = useState('')

    function handleOnChange(value) {
      this.setState({
         phone: value
      });
   }

    function handleclick(){
      setDisplayName(tempname)
      setPhoneNumber(tempnumber)
      console.log(CurrUser())

    }


  return (
          <div class="profile-page__image-container">
              <img
                src={props.image}
                class="profile-page__image"
                ></img>
            
            <div class="profile-page__infocontainer">
            <TDivider displayname={name} username={props.username} number={number}/>
            <div className='profile-page__info-element'>
            <TextField label="change name" variant="outlined" onChange={event => setTempName(event.target.value)} />
            </div>
            <div className='profile-page__info-element'>
            <TextField label="change number" variant="outlined" onChange={event => setTempPhoneNumber(event.target.value)} />
            
            </div>
            <div className='profile-page__info-element'>
            <Button onClick={() => handleclick()}>
              Submit
            </Button>
            </div>
            {/* <Button onClick={() => setDisplayName(user_display_name='Yeee')}>change name</Button> */}
            </div>
          </div>  
        
      
    
  );
}
export default ProfileCard;