import "./HousePage.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from '@mui/material/Stack';
import HouseCard from "./HouseCard";
import houses from '../Objects/Houses';
import CurrUser from "../Objects/CurrUser";
import { useState } from "react";

/*
  Function for generating the houseCards of the current u
*/
function displayUserHouses(username) {
  //The implementation of this function will change to 
  //knowing which houses to display from the currUsers house array
  const houseCardList = [];
  for (let i=0; i < houses.length; i++) {
    if (houses[i].members.includes(username)) {
      houseCardList.push(<HouseCard address={houses[i].address} imagelink={houses[i].imagelink}/>);
    }
  }
  return houseCardList;
}

function createHouse() {

}

function joinHouse(username, houseID) {
  return houses[houseID].members.push(username)
}

function HousePage() {
  const [houseMember, addMemberToHouse] = useState()
  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="house-list">
            
            <Stack spacing={2}>
              <Button onClick={() => addMemberToHouse(joinHouse("luthraek", 2))}>Join house</Button>
              <Button>Create new house</Button>
              <h2 className="house-title">Your Houses</h2>
              
              {displayUserHouses("luthraek")}
            </Stack>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default HousePage;