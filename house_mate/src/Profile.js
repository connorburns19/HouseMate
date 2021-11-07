import React from "react";
import "./Profile.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar";
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
import { Grid } from "@mui/material";
import { Card, CardContent, Container } from '@mui/material';
import Divider from "./profilecomponents/Divider";
import ProfileCard from "./profilecomponents/ProfileCard";

const user_number = 9053966805
const user_display_name = 'Connor Burns'
const username = 'connorburns19'
const image = 'https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg'




function Profile() {
  return (
    
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        
        <div className="profile-page__flex-wrapper">
            <ProfileCard image={image} number={user_number} display_name={user_display_name} username={username}/>    
            <ProfileCard image={image} number={user_number} display_name={user_display_name} username={username}/>    
            

        </div>
        

      </ThemeProvider>
    </div>
  );
}

export default Profile;
