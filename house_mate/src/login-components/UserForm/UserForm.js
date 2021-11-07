
import React, {useState} from 'react';
import './UserForm.css'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {users} from '../../Objects/Users.js'

function UserForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [user] = useState([]);

  const submitValue = () => {
    const formdetails = {
        'username' : username,
        'password' : password,
    }
   if (username in users){
     if (users[username].password ===password){
       console.log('success')
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