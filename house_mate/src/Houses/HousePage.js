import "./HousePage.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from '@mui/material/Stack';
import HouseCard from "./HouseCard";
import houses from '../Objects/Houses';
import CurrUser from "../Objects/CurrUser";
import { useState } from "react";
import NewHouseFormDialog from "./NewHouseForm";
import JoinHouseFormDialog from "./JoinHouseForm";

/*
  Function for generating the houseCards of the current u
*/
const currUser = CurrUser(); //The current user

function displayUserHouses(username) {
  const houseCardList = [];
  for (let i=0; i < currUser.houses.length; i++){
    const houseInd = currUser.houses[i]
    houseCardList.push(<HouseCard address={houses[houseInd].address} imagelink={houses[houseInd].imagelink}/>)
  }
  return houseCardList;
}

function createHouse(address, imagelink) {
  const id = houses.length;
  const newHouse = {
    id: id,
    address: address,
    imagelink: imagelink,
    members: []
  };
  houses.push(newHouse);
  joinHouse(id); //update the currUser's house list and add currUser to the new house's members
}

function joinHouse(houseID) {
  currUser.houses.push(houseID);
  houses[houseID].members.push(currUser.username);
}

function HousePage() {
  const [houseMember, addMemberToHouse] = useState();
  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="house-list">
            
            <Stack className="house-stack" spacing={2}>
              <JoinHouseFormDialog />
              <NewHouseFormDialog />
              <h2 className="house-title">Your Houses</h2>
              {displayUserHouses(currUser.username)}
            </Stack>

        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default HousePage;