import React from 'react';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';

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