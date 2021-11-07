import {users} from "./Users";

function CurrUser(username) {
    return users[username];
}

export default CurrUser;