/*
    This file was pair-programmed with Connor Burns and Nathan DeGoey (committer)
*/
import "./HousePage.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";

const HouseCard = props => {
  return (
    <div className="house-element">
        <ThemeProvider theme={theme}>
        <img className="house-img" src={props.imagelink} alt="house_picture"/>
        <h4>{props.address}</h4>
        <Button className="house-page__button" variant="outlined" color="ternary">Go to house</Button>
        </ThemeProvider>
    </div> 
  );
}

export default HouseCard;