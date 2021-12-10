import React, { useState } from "react";
import "./SignUpForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { users } from "../../Objects/Users.js"; //change to database in Phase 2
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setSessionCookie, getSessionCookie } from "../../session";

function SignUpForm() {
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const submitValue = () => {
    const formdetails = {
      name: name,
      username: username,
      password: password,
      phoneNumber: phonenum,
    };
    createUser(formdetails);
  };

  const createUser = async (formdetails) => {
    if (
      formdetails.name.length > 0 &&
      formdetails.username.length > 0 &&
      formdetails.password.length > 0 &&
      formdetails.phoneNumber.length > 4
    ) {
      axios({
        method: "post",
        url: "https://secret-cliffs-62941.herokuapp.com/users",
        data: formdetails,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }).then(function (response) {
        setUser(response.data._id);
        setSessionCookie({ uid: response.data._id, hid: null });
        //add error check

        navigate("/houses");
      });
    } else {
      console.log("wrong schema");
    }
  };
  return (
    <form>
      <TextField
        label="Name"
        variant="filled"
        required
        onChange={(event) => setName(event.target.value)}
      />{" "}
      <br></br>
      <TextField
        label="Phone Number"
        variant="filled"
        required
        onChange={(event) => setPhonenum(event.target.value)}
      />{" "}
      <br></br>
      <TextField
        label="Username"
        variant="filled"
        required
        onChange={(event) => setUsername(event.target.value)}
      />{" "}
      <br></br>
      <TextField
        label="Password"
        variant="filled"
        required
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />{" "}
      <br></br>
      <div>
        <Button variant="contained" onClick={submitValue}>
          SignUp
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
