import React from "react";
import "../Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import AdminNavBar from "../NavBar/AdminNavBar";
import _ from "lodash";
import ProfileCard from "../profilecomponents/ProfileCard";
import { users } from "../Objects/Users"; //change to database in Phase 2
import {houses} from "../Objects/Houses";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function HouseRules() {
  const { currUser, currHouse } = useContext(GlobalContext);
  let userlist = users;

  //image will be able to be customised by the user, and will be stored in the database
  let image =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const currhouse = houses[currHouse];

  function outputProfile(user) {
    return (
      <ProfileCard
        image={image}
        number={userlist[user].phone}
        display_name={userlist[user].name}
        username={user}
        house_list={userlist[user].houses}
        admin={currUser}
      />
    );
  }
  let usersnoadmin = Object.keys(userlist);
  const final = usersnoadmin.filter((user) => user != "admin");

  if (currUser === "admin") {
    return (
      <div className="profile-page profile-page--dark">
        <ThemeProvider theme={theme}>
          <AdminNavBar />

          <div className="profile-page__flex-wrapper">
            {final.map(outputProfile)}
          </div>
        </ThemeProvider>
      </div>
    );
  } else {
    let house_user_list = currhouse.members;
    console.log(house_user_list);
    return (
      <div className="profile-page profile-page--dark">
        <ThemeProvider theme={theme}>
          <NavBar />

          <div className="profile-page__flex-wrapper">
            {house_user_list.map(outputProfile)}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default HouseRules;
