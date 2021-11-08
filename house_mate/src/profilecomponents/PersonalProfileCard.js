import * as React from "react";
import TDivider from "./Divider";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import CurrUser from "../Objects/CurrUser";
import { users } from "../Objects/Users"; //change to database in Phase 2
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

//Pair program Nathan

const ProfileCard = (props) => {
  const { currUser } = useContext(GlobalContext);
  const [name, setDisplayName] = useState(users[currUser].name);
  const [number, setPhoneNumber] = useState(users[currUser].phone);

  const [tempname, setTempName] = useState("");
  const [tempnumber, setTempPhoneNumber] = useState("");

  function handleOnChange(value) {
    this.setState({
      phone: value,
    });
  }

  function handleclick() {
    setDisplayName(tempname);
    setPhoneNumber(tempnumber);
    console.log(CurrUser());
  }

  return (
    <div class="profile-page__image-container">
      <img src={props.image} class="profile-page__image"></img>

      <div class="profile-page__infocontainer">
        <TDivider
          displayname={name}
          username={props.username}
          number={number}
          house_list={props.house_list}
        />
        <div className="profile-page__info-element">
          <TextField
            label="change name"
            variant="outlined"
            onChange={(event) => setTempName(event.target.value)}
          />
        </div>
        <div className="profile-page__info-element">
          <TextField
            label="change number"
            variant="outlined"
            onChange={(event) => setTempPhoneNumber(event.target.value)}
          />
        </div>
        <div className="profile-page__info-element">
          <Button onClick={() => handleclick()}>Submit</Button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
