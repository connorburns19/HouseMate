import React, {useState} from 'react';
import './UserForm.css'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {users} from '../../Objects/Users.js'; //change to database in Phase 2
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function UserForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const submitValue = () => {
   if (username in users){
     if (users[username].password === password){
      setUser(username);
      navigate("/houses");
     }
   }
  }
  return (
      <form>
        <TextField label="Username" variant="filled" required onChange={event =>setUsername(event.target.value)} /> <br></br>
        <TextField label="Password" variant="filled" type='password' required onChange={event =>setPassword(event.target.value)} />  <br></br>

        <div>
          <Button variant="contained" onClick = {submitValue}>
          Login
          </Button>
        </div>

      </form>
  );

} 

export default UserForm;