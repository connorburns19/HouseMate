import React from 'react';

import Header from "../Header";
import UserForm from "../UserForm";



class Login extends React.Component{

    // Nathan we'll probs have to add some like event tracking, it can't do anything rn but just log "success" or something lol

    render() {
        return(
            <div className = "login-page">
                {/* Header component*/}
                <Header/>

                {/* Userform component*/}
                <UserForm/>
    
            </div>
        );
    }

}

export default Login;