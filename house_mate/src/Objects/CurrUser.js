import users from "./Users";

function CurrUser() {
    for (let i=0; i<users.length; i++) {
        if (users[i].currUser) {
            return users[i];
        }
    }
}

export default CurrUser;