import React from "react";
import { useState } from "react";

//Followed https://www.youtube.com/watch?v=ygV99J2Ehjs



export default function ChangeProfile(){

    const [displayName, setDisplayName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    


    return(
        <div>
            <input onChange={event=> setDisplayName(event.target.value)}/>
            <input onChange={event => setPhoneNumber(event.target.value)}/>
            <input type="submit" onClick={setDisplayName}/>
        </div>
    )
}

