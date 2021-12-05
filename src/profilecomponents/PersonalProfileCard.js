import * as React from "react";
import TDivider from "./Divider";
import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";
import CurrUser from "../Objects/CurrUser";
import { users } from "../Objects/Users"; //change to database in Phase 2
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
// looked at https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react for ? usage

//Pair program Nathan

const ProfileCard = (props) => {
  const { currUser } = useContext(GlobalContext);
  const [name, setDisplayName] = useState(users[currUser].name);
  const [number, setPhoneNumber] = useState(users[currUser].phone);

  const [tempname, setTempName] = useState("");
  const [tempnumber, setTempPhoneNumber] = useState("");
  const [show, setShow1] = useState(false);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(false);
  const [tempimage, setTempImage] = useState(props.image);
  const [image, setImage] = useState(props.image);

  function handleOnChange(value) {
    this.setState({
      phone: value,
    });
  }

  function handleclick(show, show2) {
    setDisplayName(tempname);
    setPhoneNumber(tempnumber);
    setImage(tempimage);
    console.log(CurrUser());
    if (show == true) {
      setShow1(false);
      if (show2 == false) {
        setShow2(true);
        setShow3(false);
      }
    }
    if (show == false) {
      setShow1(true);
    }
  }
  function handleclick2(show) {
    if (show == true) {
      setShow1(false);
      // setShow2(false);
      // setShow3(true);
    }
    if (show == false) {
      setShow1(true);
      setShow2(false);
      setShow3(true);
    }
  }
  function handleclick3(show, show2) {
    if (show == true) {
      setShow1(false);
      if (show2 == false) {
        setShow2(true);
        setShow3(false);
      }
    }
    if (show == false) {
      setShow1(true);
    }
  }

  return (
    <div class="profile-page__image-container">
      <img src={image} class="profile-page__image"></img>

      <div class="profile-page__infocontainer">
        <TDivider
          displayname={name}
          username={props.username}
          number={number}
          house_list={props.house_list}
        />
        <div className="profile-page__info-element">
          {show ? (
            <TextField
              label="change name"
              variant="outlined"
              onChange={(event) => setTempName(event.target.value)}
            />
          ) : null}
        </div>
        <div className="profile-page__info-element">
          {show ? (
            <TextField
              label="change number"
              variant="outlined"
              onChange={(event) => setTempPhoneNumber(event.target.value)}
            />
          ) : null}
        </div>
        <div className="profile-page__info-element">
          {show ? (
            <Button
              label="change image"
              containerElement="label"
              onChange={(event) => setTempImage(event.target.value)}
            >
              <Input type="file" defaultValue="" />
            </Button>
          ) : null}
        </div>

        <div className="profile-page__info-element">
          {show ? (
            <Button onClick={() => handleclick(show, show2)}>Submit</Button>
          ) : null}
          {show2 ? (
            <Button onClick={() => handleclick2(show)}>edit</Button>
          ) : null}
          {show3 ? (
            <Button onClick={() => handleclick3(show, show2)}>cancel</Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
