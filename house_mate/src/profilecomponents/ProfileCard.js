import * as React from "react";
import TDivider from "./Divider";
import { useState } from "react";

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
