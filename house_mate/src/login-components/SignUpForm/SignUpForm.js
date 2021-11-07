import React, {useState} from 'react';
import './SignUpForm.css'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {users} from '../../Objects/Users.js'

function SignUpForm(){

  const [name, setName] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const submitValue = () => {
    const formdetails = {
        password : password,
        name     : name,
        phone    : phonenum,
        houses   : [],
        expenses : [],
        type     : "User",
    }
    console.log(formdetails);
    users[username] = formdetails;
    console.log(users)
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