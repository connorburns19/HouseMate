import "./HousePage.css";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import Stack from "@mui/material/Stack";
import HouseCard from "./HouseCard";
import NewHouseFormDialog from "./NewHouseForm";
import JoinHouseFormDialog from "./JoinHouseForm";
import { GlobalContext } from "../context/GlobalState";
import { getSessionCookie } from "../session";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import AdminNavBar from "../NavBar/AdminNavBar";
console.log(getSessionCookie());

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
    if (currUser !== null) {
      await displayUserHouses(currUser);
    } else {
      await displayUserHouses(session.uid);
    }
  }, [houseList, currHouse]);
  const session = getSessionCookie();
  if (session.uid === "admin") {
    console.log("yes");
    return (
      <div className="house-page house-page--dark">
        <ThemeProvider theme={theme}>
          <AdminNavBar />
          <div>
            <img
              className="welcome"
              src="https://jamvie.net/images/UTCTFscreenshot2.png"
            />
          </div>
          {/* <div className="house-list">
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
          </div> */}
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div className="house-page house-page--dark">
      <ThemeProvider theme={theme}>
        {currHouse === null ? <></> : <NavBar />}
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

export default HousePage;
