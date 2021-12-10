/*
    This file was pair-programmed with Connor Burns and Nathan DeGoey (committer)
*/
import "./HousePage.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import * as React from "react";
import { getSessionCookie, setSessionCookie } from "../session";
const session = getSessionCookie();
const uid = session.uid;

const HouseCard = (props) => {
  const { switchHouse } = useContext(GlobalContext);

  return (
    <div className="house-element">
      <ThemeProvider theme={theme}>
        <img className="house-img" src={props.imagelink} alt="house_picture" />
        <h4>{props.address}</h4>
        <Button
          className="house-page__button"
          variant="outlined"
          color="ternary"
          onClick={() => {
            switchHouse(props.id);
            const session = getSessionCookie();
            const uid = session.uid;

            setSessionCookie({ uid: uid, hid: props.id });
          }}
        >
          Go to house
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default HouseCard;
