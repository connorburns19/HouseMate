import "./HousePage.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from '@mui/material/Stack';
import HouseCard from "./HouseCard";
import houses from '../Objects/Houses';

/*
  Function for generating the houseCards of the current u
*/
function displayUserHouses(username) {
  const houseCardList = []
  for (let i=0; i < houses.length; i++) {
    if (houses[i].members.includes(username)) {
      houseCardList.push(<HouseCard address={houses[i].address} imagelink={houses[i].imagelink}/>)
    }
  }
  return houseCardList
}

function HousePage() {
  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="house-list">
            <h2 className="house-title">Your Houses</h2>
            <Stack spacing={2}>
              {displayUserHouses("user")}
                <Button>Add House by house code</Button>
            </Stack>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default HousePage;