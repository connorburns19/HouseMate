import React from "react";
import "../Profile.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";

import _ from "lodash";

import ProfileCard from "../profilecomponents/ProfileCard";

import { useState } from "react";

let user_number = "9053966805";
let user_display_name = "Connor";
let username = "burnsco2";
let image =
  "https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg";

function HouseRules() {
  return (
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className="profile-page__flex-wrapper">
          <ProfileCard
            image={image}
            number={user_number}
            display_name={user_display_name}
            username={username}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default HouseRules;
