import React from 'react';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';


// Nathan we'll probs have to add some like event tracking, it can't do anything rn but just log "success" or something lol

function Login() {
        return(
            <div className = "login-page">
                {/* Header component*/}
                <Header/>

                {/* Userform component*/}
                <UserForm/>
    
            </div>
        );
    }

export default Login;