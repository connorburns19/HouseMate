import "./HousePage.css";
import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from "@mui/material/Stack";
import HouseCard from "./HouseCard";
import houses from '../Objects/Houses';
import NewHouseFormDialog from "./NewHouseForm";
import JoinHouseFormDialog from "./JoinHouseForm";
import {users, joinHouse} from '../Objects/Users';

// const currUser = CurrUser(); //The current user

// function displayUserHouses() {
//   const houseCardList = [];
//   for (let i=0; i < users["user"].houses.length; i++){
//     const houseInd = users["user"].houses[i]
//     houseCardList.push(<HouseCard address={houses[houseInd].address} imagelink={houses[houseInd].imagelink}/>)
//   }
//   return houseCardList;
// }

function HousePage({user}) {
  const [houseMember, addMemberToHouse] = React.useState();
  // const [openJoin, setOpenJoin] = React.useState(false);
  // const [openCreate, setOpenCreate] = React.useState(false);
  // const [houseID, setHouse] = React.useState();
  // const [houseAddress, setAddress] = React.useState();
  // const [houseLink, setLink] = React.useState();

  // function createHouse() {
  //   const id = houses.length;
  //   const newHouse = {
  //     id: id,
  //     address: houseAddress,
  //     imagelink: houseLink,
  //     members: [currUser.username]
  //   };
  //   houses.push(newHouse);
  //   currUser.houses.push(id);
  // }

  // function joinHouse() {
  //   currUser.houses.push(houseID);
  //   houses[houseID].members.push(currUser.username);
  // }


  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="house-list">
            
            <Stack className="house-stack" spacing={2}>
              <JoinHouseFormDialog setHouseMember={addMemberToHouse} />
              <NewHouseFormDialog />
              <h2 className="house-title">Your Houses</h2>
              {users["user"].houses.map((element, index) => <HouseCard address={houses[index].address} imagelink={houses[index].imagelink}/>)}
            </Stack>

        </div>
      </ThemeProvider>
    </div>
  );
}

export default HousePage;
