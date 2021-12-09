import "./HousePage.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import Stack from "@mui/material/Stack";
import HouseCard from "./HouseCard";
import NewHouseFormDialog from "./NewHouseForm";
import JoinHouseFormDialog from "./JoinHouseForm";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

function HousePage({ user }) {
  const { currUser } = React.useContext(GlobalContext);
  const { currHouse } = React.useContext(GlobalContext);

  const [houseMember, addMemberToHouse] = React.useState();
  const [houseCreate, createHouse] = React.useState();
  const [houseList, setHouseList] = React.useState([]);
  const displayUserHouses = async (userid) => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:5000/houses/${userid}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      });

      setHouseList(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(async () => {
    await displayUserHouses(currUser);
  }, [houseList]);

  if (currHouse == null && currUser != "admin") {
    return (
      <div className="house-page house-page--dark">
        <ThemeProvider theme={theme}>
          <div className="house-list">
            <Stack className="house-stack" spacing={2}>
              <JoinHouseFormDialog setHouseMember={addMemberToHouse} />
              <NewHouseFormDialog setHouseMember={createHouse} />
              <h2 className="house-title">Your Houses</h2>
              {houseList.length > 0 &&
                houseList.map((item, index) => {
                  return (
                    <HouseCard
                      address={item.address}
                      imagelink={item.imageLink}
                      id={item._id}
                      key={index}
                    />
                  );
                })}
            </Stack>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default HousePage;
