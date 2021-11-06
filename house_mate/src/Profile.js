import React from "react";
import "./Profile.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar";
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'

function Profile() {
  return (
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className="profile-page__flex-wrapper">
          <div class="profile-page__image-container">
              <img
                src="https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg"
                class="profile-page__image"
                ></img>
            
            {/* <div class="profile-page__comment">
              I like pizza and programming. I also like pizza and programming. I
              also like pizza and programming. I also like pizza and
              programming. I also like pizza and programming. I also like pizza
              and programming. I also like pizza and programming.
            </div> */}
            <div class="profile-page__infocontainer">
            <div class="profile-page__displayname">
              Connor Burns{" "}
            </div>
            connorburns191{" "}
            <br></br>
            905-396-6805{" "} 
            <Button variant="contained">change name/number</Button>

          </div>
          
          </div>

          
        </div>

      </ThemeProvider>
    </div>
  );
}

export default Profile;
