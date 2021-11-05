import React from 'react';
import './Profile.css';
import Button from '@mui/material/Button';





function Profile() {
    return(
        <div className="profile-page profilepage--dark">
            <header className = "NavBar">
                <div className= "Address">My Profile</div>
            </header>
            <div class='ImageCommentContainer'>
            <div> 
                <img src='https://heightzone.com/wp-content/uploads/2020/08/e4c130396c1c9886e8a6d9962c3a9d.jpg' class='Image'></img>
            </div>
            <div class='Comment'>
                I like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming. I also like pizza and programming.
                            <Button variant="contained" size ="small">change</Button>
            </div>
            </div>
            
            <div class='InfoContainer'>
            <div class ='DisplayName'> 
                Connor Burns <Button variant="contained" size ="small">change</Button>
                </div>
            connor.burns@mail.utoronto.ca <Button variant="contained" size ="small">change</Button><br></br>
            905-396-6805 <Button variant="contained" size ="small">change</Button>
            </div>
        
        </div>
        

        
    );
}

export default Profile;