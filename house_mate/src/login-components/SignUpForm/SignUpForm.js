import React, {useState} from 'react';
import './SignUpForm.css'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {users} from '../../Objects/Users.js'
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function SignUpForm(){

  const [name, setName] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();


  const submitValue = () => {
    const formdetails = {
        password : password,
        name     : name,
        phone    : phonenum,
        houses   : [],
        expenses : [],
        type     : "User",
        currUser : false,
    }
    users[username] = formdetails;
    setUser(username);
    navigate("/houses");
  }

  return (
      <form>
        <TextField label="Name" variant="filled" required onChange={event =>setName(event.target.value)} /> <br></br>
        <TextField label="Phone Number" variant="filled"  required onChange={event =>setPhonenum(event.target.value)}  /> <br></br>
        <TextField label="Username" variant="filled" required onChange={event =>setUsername(event.target.value)} /> <br></br>
        <TextField label="Password" variant="filled" required type='password' onChange={event =>setPassword(event.target.value)} />  <br></br>

        <div>
          <Button variant="contained" onClick = {submitValue}>
          SignUp
          </Button>
        </div>

      </form>
  );

} 

export default SignUpForm;