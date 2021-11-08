import React from "react";
import "../Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import _ from "lodash";
import ProfileCard from "../profilecomponents/ProfileCard";
import { users } from "../Objects/Users";
import houses from "../Objects/Houses";

let userlist = users;

let user_number = "9053966805";
let user_display_name = "Connor";
let username = "burnsco2";
let image =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

let user = userlist[0];
let user1 = "notadmin";
let currhouse = houses[2];
function outputProfile(user) {
  return (
    <ProfileCard
      image={image}
      number={userlist[user].phone}
      display_name={userlist[user].name}
      username={user}
      house_list={userlist[user].houses}
      admin={user1}
    />
  );
}
// function outputProfileOfHouse(houseID) {
//   let house_user_list = houses[houseID].members;

//   return (
//     <ProfileCard
//       image={image}
//       number={userlist[user].phone}
//       display_name={userlist[user].name}
//       username={user}
//       house_list={userlist[user].houses}
//       admin={user1}
//     />
//   );
// }

function HouseRules() {
  if (user1 === "admin") {
    return (
      <div className="profile-page profile-page--dark">
        <ThemeProvider theme={theme}>
          <NavBar />

          <div className="profile-page__flex-wrapper">
            {Object.keys(userlist).map(outputProfile)}
            {/* <ProfileCard
                    image={image}
                    number={user_number}
                    display_name={user_display_name}
                    username={username}
                  /> */}
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
            {/* <ProfileCard
                    image={image}
                    number={user_number}
                    display_name={user_display_name}
                    username={username}
                  /> */}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default HouseRules;
