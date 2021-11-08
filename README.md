# HouseMate - Team 27's CSC309 Project

HouseMate is a web application that simplifies the splitting of costs, made with with [Create React App](https://github.com/facebook/create-react-app). 

# How to run the program/walkthrough
To run the program, clone the repository and navigate to `team27/house_mate`. Then run `npm install`, then run the program with `npm start`, which will open [http://localhost:3000](http://localhost:3000)

The user will be greeted with a login page. For the sake of the demo, login with username 'user' and password 'user'. To log in as an admin, use 'admin' as both the username and password. 
Upon signing in, the user can see the 'Houses' page, where they can click a house to view expenses or add expenses to. 
Upon clicking a house, the user will see a page that allows them to click a button that redirects them to the "View Expenses" page and a button that redirects them to the "Add Expenses" page. 

On the Add Expenses page, the user can add an expense and select which of their housemates will be splitting that cost with them. On the View Expenses page, the user can view how much they owe their housemates. They can also click on the individual housemates' names to see details regarding that housemate's expenditure. The user can also go back to the Houses page to change which house's details they are viewing by clicking on the navigation icon in the top left corner and clicking "Houses". In the navigation tab, the user can also change profile settings by clicking "Profile". Admin users will have more functionality than regular users in the Profile page, such as being able to delete houses and users, and being able to see all existing houses and users. Users can also view information about the given house they are in by clcking "House Rules" in the navigation tab.
