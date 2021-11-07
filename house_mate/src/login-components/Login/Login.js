import React from 'react';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import SignUpForm from '../SignUpForm/SignUpForm';

function Login() {
        return(
            // <div>
            <div style={{color: "grey"}}>
                {/* Header component*/}
                <Header/>
                {/* Userform component*/}
                <UserForm/>
                {/* SignUpform component*/}
                <SignUpForm/>
            </div>
            // </div>
        );
    }

export default Login;