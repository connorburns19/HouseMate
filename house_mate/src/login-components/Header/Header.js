import React from "react";

import "./Header.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1> Housemate </h1>
        <h3> login </h3>
      </div>
    );
  }
}

export default Header;