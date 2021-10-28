import React from 'react';
import './acess.css';

function Prof() {
    return(
        <body>
        <header className = "NavBar">
            <div className= "Address">My Profile</div>
        </header>
        <div class='ImageCommentContainer'>
        <div> 
            <img src='https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg' class='Image'></img>
        </div>
        <div class='Comment'>
            I like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming.
        </div>
        </div>
        
        <div class='InfoContainer'>
        <div class ='DisplayName'> 
            Connor Burns
            </div>
        connor.burns@mail.utoronto.ca <br></br>
        905-396-6805
        </div>
        
        
        

        </body>
    );
}

export default Profile;