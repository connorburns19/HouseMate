import React from "react";
import "./Profile.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
import { Grid } from "@mui/material";
import { Card, CardContent, Container } from '@mui/material';
import Divider from "./profilecomponents/Divider";
import PersonalProfileCard from "./profilecomponents/PersonalProfileCard";
import ChangeProfile from "./profilecomponents/ChangeProfile";
import { useState } from "react";
import CurrUser from './Objects/CurrUser';
import users from "./Objects/Users";

// let user_number = CurrUser.phone
// let user_display_name = CurrUser.name
// let username = CurrUser.username
let image = 'https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg'



function Profile() {
    
    


    console.log(CurrUser().username)
    console.log(CurrUser().name)
    console.log(CurrUser().phone)
    console.log(CurrUser())
  return (
    


    
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        
        <div className="profile-page__flex-wrapper">   
            <PersonalProfileCard image={image} number={CurrUser().phone} display_name={CurrUser().name} username={CurrUser().username}/> 
            
            

        </div>
        

      </ThemeProvider>
    </div>
  );
}

export default Profile;
