import * as React from "react";
import TDivider from "./Divider";
import { useState } from "react";
import { Button } from "@mui/material";
import { users } from "../Objects/Users"; //change to database in Phase 2

//Pair program Nathan

const ProfileCard = (props) => {
  function deleteUser() {
    setDisplayName("User Deleted");
    setPhoneNumber("User Deleted");
    setUName("User Deleted");
    setHouseList("User Deleted");
    setImage(
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Deleted_photo.png"
    );
  }

  const [name, setDisplayName] = useState(users[props.username].name);
  const [number, setPhoneNumber] = useState(users[props.username].phone);
  const [username, setUName] = useState(props.username);
  const [houses, setHouseList] = useState(users[props.username].houses);
  const [img, setImage] = useState(props.image);
  if (props.admin === "admin") {
    return (
      <div class="profile-page__image-container">
        <img src={img} class="profile-page__image"></img>

        <div class="profile-page__infocontainer">
          <TDivider
            displayname={name}
            username={username}
            number={number}
            house_list={houses}
          />

          <Button onClick={() => deleteUser()}>delete user</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div class="profile-page__image-container">
        <img src={props.image} class="profile-page__image"></img>

        <div class="profile-page__infocontainer">
          <TDivider
            displayname={props.display_name}
            username={props.username}
            number={props.number}
            house_list={props.house_list}
          />
        </div>
      </div>
    );
  }
};
export default ProfileCard;
