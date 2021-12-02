/*
    The files in the Objects folder are to represent instances of 
    the objects that will eventually be stored in the database during
    the final submission of the project.
*/
/*
SCHEMA:
{
    id: the unique id of the house (primary key),
    address: the address of the house,
    imagelink: a link to the profile image of the house,
    members: a list of usernames of the users who belong to this house
}
*/
import {joinHouse} from '../Objects/Users';

export const houses = {
  0: {
    address: "15 King's College Circle",
    imagelink: "https://www.utoronto.ca/sites/default/files/UC--by-Laura.jpg",
    members: ["user", "luthraek", "cernasal"],
  },
  1: {
    address: "40 St. George Street",
    imagelink:
      "https://www.thestar.com/content/dam/thestar/news/gta/2019/09/30/safety-barriers-installed-at-bahen-centre-after-student-death-u-of-t-says/rm_suicide_01.jpg",
    members: ["user", "degoeyna"],
  },
  2: {
    address: "6 Hoskin Ave",
    imagelink: "https://thevarsity.ca/wp-content/uploads/2017/11/COMMENT_Comment_in_Brief-SOFIA_LUDWIGTHE_VARSITY-Trinity_College.jpg",
    members: ["burnsco2", "degoeyna"]
  }
}

export function createHouse(addr, link) {

  const houseID = Object.keys(houses).length
  houses[houseID] = {
    address: addr,
    imagelink: link
  };
  
  return houseID

}
