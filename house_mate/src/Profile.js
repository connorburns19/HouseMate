import React from "react";
import "./Profile.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import _ from 'lodash'
import { Grid } from "@mui/material";
import { Card, CardContent, Container } from '@mui/material';
import Divider from "./profilecomponents/Divider";
import ProfileCard from "./profilecomponents/ProfileCard";
import ChangeProfile from "./profilecomponents/ChangeProfile";
import { useState } from "react";

let user_number = 9053966805
let user_display_name = 'Connor Burns'
let username = 'connorburns19'
let image = 'https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg'




function Profile() {
    const [displayName, setDisplayName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()



  return (
    


    
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        
        <div className="profile-page__flex-wrapper">
            <ProfileCard image={image} number={user_number} display_name={user_display_name} username={username}/>    
            <ProfileCard image={image} number={user_number} display_name={user_display_name} username={username}/> 
            <Button onClick={() => setDisplayName(user_display_name='Yeee')}>change name</Button> 
            

        </div>
        

      </ThemeProvider>
    </div>
  );
}

export default Profile;
