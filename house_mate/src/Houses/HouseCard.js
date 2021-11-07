/*
    This file was pair-programmed with Connor Burns and Nathan DeGoey (committer)
*/
import "./HousePage.css";
import Button from "@mui/material/Button";

const HouseCard = props => {
  return (
    <div className="house-element">
        <img className="house-img" src={props.imagelink} alt="house_picture"/>
        <h4>{props.address}</h4>
        <Button className="house-page__button">Go to house</Button>
    </div> 
  );
}

export default HouseCard;