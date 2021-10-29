
import React from 'react';
import './UserForm.css'
// import { makeStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


function UserForm(){
  return (
      <form>
        <TextField label="First Name" variant="filled" required /> <br></br>
        <TextField label="Last Name" variant="filled" required /> <br></br>
        <TextField label="Email" variant="filled" type="email" required /> <br></br>
        <TextField label="Password" variant="filled" type="password" required />  <br></br>

        <div>
          <Button variant="contained">
          SignUp
          </Button>
        </div>

      </form>
  );

} 

export default UserForm;