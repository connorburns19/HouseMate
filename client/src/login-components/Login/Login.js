import React from "react";
import "./Login.css";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../Header/Header";
import UserForm from "../UserForm/UserForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import theme from "../../Themes/theme.js";

function Login() {
  return (
    // <div>
    <div className="landing-page--dark">
      <ThemeProvider theme={theme}>
        {/* Header component*/}
        <Header />
        {/* Userform component*/}
        <UserForm />
        {/* SignUpform component*/}
        <SignUpForm />
      </ThemeProvider>
    </div>
    // </div>
  );
}

export default Login;
