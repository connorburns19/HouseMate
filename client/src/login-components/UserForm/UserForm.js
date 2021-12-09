// Followed "https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples"
import React, { useState } from "react";
import "./UserForm.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { users } from "../../Objects/Users.js"; //change to database in Phase 2
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const submitValue = () => {
    attemptLogin();
  };
  const attemptLogin = async () => {
    axios({
      method: "post",
      url: "http://localhost:5000/users/login",
      data: { username: username, password: password },
      headers: {
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }).then(function (response) {
      setUser(response.data);
      //add error check
      console.log(response.data);
      navigate("/houses");
    });
  };

  return (
    <form>
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
        type="password"
        required
        onChange={(event) => setPassword(event.target.value)}
      />{" "}
      <br></br>
      <div>
        <Button variant="contained" onClick={submitValue}>
          Login
        </Button>
      </div>
    </form>
  );
}

export default UserForm;
