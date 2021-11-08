import React from "react";
import "./Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import _ from "lodash";
import PersonalProfileCard from "./profilecomponents/PersonalProfileCard";
import { users } from "./Objects/Users";
import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";

let image =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Profile() {
  const { currUser } = useContext(GlobalContext);
  return (
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className="profile-page__flex-wrapper">
          <PersonalProfileCard
            image={image}
            number={users[currUser].phone}
            display_name={users[currUser].name}
            username={currUser}
            house_list={users[currUser].houses}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
