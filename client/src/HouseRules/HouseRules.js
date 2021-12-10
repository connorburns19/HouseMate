import "../Profile.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme.js";
import NavBar from "../NavBar/NavBar";
import AdminNavBar from "../NavBar/AdminNavBar";
import _ from "lodash";
import ProfileCard from "../profilecomponents/ProfileCard";
import { users } from "../Objects/Users"; //change to database in Phase 2
import { houses } from "../Objects/Houses";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import axios from "axios";
import { getSessionCookie } from "../session";

function HouseRules() {
  const { currUser, currHouse } = useContext(GlobalContext);
  let userlist = users;

  const session = getSessionCookie();
  const { switchHouse } = useContext(GlobalContext);
  if (session.hid != null && currHouse !== session.hid) {
    switchHouse(session.hid);
  }
  let image =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  // const currhouse = houses[currHouse];

  const getHouseInfo = async (houseId) => {
    try {
      const res = await axios({
        method: "get",
        url: `https://secret-cliffs-62941.herokuapp.com/houses/info/${houseId}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      });
      return res.data.members;
    } catch (error) {
      console.log(error);
    }
  };

  let memberIds = [];

  const [names, setNames] = React.useState([]);
  const [usernames, setUsernames] = React.useState([]);
  const [phoneNumbers, setPhoneNumbers] = React.useState([]);
  const [houses, setHouses] = React.useState([]);

  const getUserInfo = async (userId) => {
    try {
      const res = await axios({
        method: "get",
        url: `https://secret-cliffs-62941.herokuapp.com/users/${userId}`,
        headers: {
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      });

      names.push(res.data.name);
      usernames.push(res.data.username);
      phoneNumbers.push(res.data.phoneNumber);
      houses.push(res.data.houses);
      return res.data.username;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(async () => {
    memberIds = await getHouseInfo(session.hid);
    console.log("result of gethouseInfo: ", memberIds);
    for (var i = 0; i < memberIds.length; i++) {
      let member = await getUserInfo(memberIds[i]);
      console.log("house member: ", member);
    }
  }, [names]);

  let arr = [0, 1];

  function outputProfile(i) {
    console.log(phoneNumbers);
    console.log(names);
    console.log(usernames);
    console.log(houses);
    return (
      <ProfileCard
        image={image}
        number={phoneNumbers[i]}
        display_name={names[i]}
        username={usernames[i]}
        house_list={houses}
        admin={session.uid}
      />
    );
  }
  let usersnoadmin = Object.keys(userlist);
  const final = usersnoadmin.filter((user) => user != "admin");

  if (currUser === "admin") {
    return (
      <div className="profile-page profile-page--dark">
        <ThemeProvider theme={theme}>
          <AdminNavBar />

          <div className="profile-page__flex-wrapper">
            {arr.map((i) => {
              return (
                <ProfileCard
                  image={image}
                  number={phoneNumbers[i]}
                  display_name={names[i]}
                  username={usernames[i]}
                  house_list={houses}
                  admin={session.uid}
                />
              );
            })}
          </div>
        </ThemeProvider>
      </div>
    );
  } else {
    // let house_user_list = currHouse.members;
    return (
      <div className="profile-page profile-page--dark">
        <ThemeProvider theme={theme}>
          <NavBar />

          <div className="profile-page__flex-wrapper">
            {arr.map((i) => {
              return (
                <ProfileCard
                  image={image}
                  number={phoneNumbers[i]}
                  display_name={names[i]}
                  username={usernames[i]}
                  house_list={houses}
                  admin={session.uid}
                />
              );
            })}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default HouseRules;