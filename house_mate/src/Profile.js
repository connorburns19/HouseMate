import React from "react";
import "./Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import _ from "lodash";
import PersonalProfileCard from "./profilecomponents/PersonalProfileCard";
import CurrUser from "./Objects/CurrUser";
import { users } from "./Objects/Users";
import { houses } from "./Objects/Houses";

// let user_number = CurrUser.phone
// let user_display_name = CurrUser.name
// let username = CurrUser.username
let image =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Profile() {
  return (
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className="profile-page__flex-wrapper">
          <PersonalProfileCard
            image={image}
            number={users["burnsco2"].phone}
            display_name={users["burnsco2"].name}
            username={"burnsco2"}
            house_list={users["burnsco2"].houses}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
