import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TDivider from "./Divider";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import users from "../Objects/Users";

//Pair program Nathan

const ProfileCard = (props) => {
  const [displayName, setDisplayName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div class="profile-page__image-container">
      <img src={props.image} class="profile-page__image"></img>

      <div class="profile-page__infocontainer">
        <TDivider
          displayname={props.display_name}
          username={props.username}
          number={props.number}
        />

        {/* <Button onClick={() => setDisplayName(user_display_name='Yeee')}>change name</Button> */}
      </div>
    </div>
  );
};
export default ProfileCard;
