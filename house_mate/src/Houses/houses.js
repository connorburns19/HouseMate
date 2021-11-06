import "./houses.css";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import Stack from '@mui/material/Stack';
import HouseCard from "./housecard";

const houses = [{
  address: "15 King's College Circle",
  imagelink: "https://www.utoronto.ca/sites/default/files/UC--by-Laura.jpg",
  id: 0,
  members: ["user", "luthraek", "cernasal"]
},
{
  address: "40 St. George Street",
  imagelink: "https://www.thestar.com/content/dam/thestar/news/gta/2019/09/30/safety-barriers-installed-at-bahen-centre-after-student-death-u-of-t-says/rm_suicide_01.jpg",
  id: 1,
  members: ["user", "degoeyna"]
},
{
  address: "6 Hoskin Ave",
  imagelink: "https://thevarsity.ca/wp-content/uploads/2017/11/COMMENT_Comment_in_Brief-SOFIA_LUDWIGTHE_VARSITY-Trinity_College.jpg",
  id: 2,
  members: ["user", "burnsco2", "degoeyna"]
}]

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

function Houses() {
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

export default Houses;