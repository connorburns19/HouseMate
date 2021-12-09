import React from "react";
import "./Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/theme.js";
import NavBar from "./NavBar/NavBar";
import AdminNavBar from "./NavBar/AdminNavBar";
import _ from "lodash";
import PersonalProfileCard from "./profilecomponents/PersonalProfileCard";
import ProfileCard from "./profilecomponents/ProfileCard";
import { users } from "./Objects/Users"; //change to database in Phase 2
import { GlobalContext } from "./context/GlobalState";
import { useContext } from "react";
import axios from "axios";
import { getSessionCookie, setSessionCookie } from "./session";
const session = getSessionCookie();

//change to database in Phase 2
let image =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Profile() {
  const { currUser } = useContext(GlobalContext);
  const { currHouse } = useContext(GlobalContext);
  const { switchHouse } = useContext(GlobalContext);

  if (session.hid != null && currHouse !== session.hid) {
    switchHouse(session.hid);
  }

  const [name, setName] = React.useState();
  const [username, setUsername] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [houses, setHouses] = React.useState([]);

  const getUserInfo = async (userId) => {
    try {
      const res = await axios({
        method: "get",
        url: `http://localhost:5000/users/${userId}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      });
      console.log(res.data.name);
      setName(res.data.name);
      setUsername(res.data.username);
      console.log(res.data.phoneNumber);
      setPhoneNumber(res.data.phoneNumber);
      setHouses(res.data.houses);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(async () => {
    await getUserInfo(currUser);
  }, []);

  return (
    <div className="profile-page profile-page--dark">
      <ThemeProvider theme={theme}>
        {currUser === "admin" ? <AdminNavBar /> : <NavBar />}

        <div className="profile-page__flex-wrapper">
          {currUser === "admin" ? (
            <ProfileCard
              image={image}
              number={phoneNumber}
              display_name={name}
              username={username}
              house_list={houses}
            />
          ) : (
            <PersonalProfileCard
              image={image}
              number={phoneNumber}
              display_name={name}
              username={username}
              house_list={houses}
            />
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
