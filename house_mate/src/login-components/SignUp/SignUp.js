import React from 'react';
import Header from '../Header/Header';
import SignUpForm from '../SignUpForm/SignUpForm';

function SignUp() {
        return(
            <div className = "login-page">
                {/* Header component*/}
                <Header/>

                {/* Userform component*/}
                <SignUpForm/>
    
            </div>
        );
    }

export default SignUp;