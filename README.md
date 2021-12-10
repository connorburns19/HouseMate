# Welcome to HouseMate!

HouseMate is a platform that simplifies cost splitting among roommates! 

# How to run it locally 

First, clone the repository to your machine by running  `git clone https://github.com/csc309-fall-2021/team27.git` in your command line. 
Then, navigate to the `team27` folder and run `npm install`. 
Then, still in the `team27` folder, `mkdir mongo-data` and `mongod --dbpath=mongo-data`. 
From there, navigate to the `client` folder and run `npm install`. Then, run `npm run build` still in the client folder. 
In the `client` folder, run `npm start`. Then `cd..` and run `npm start`. 

You should be able to use the application now!

# How to use the website

You can use the website rather than run the program locally by going to https://secret-cliffs-62941.herokuapp.com/

## Using the application (+ a small walkthrough)

First off, you'll want to sign up, which you can do on the righthand side of the landing page. your password must be >5 characters and your username must be unique

Once you sign up, you should be able to join a house by creating one, or by joining one with a houseId (which your roommate can provide you, if they make a house). 

From here, you must 'Go to a house'. This simply means that you'll be viewing expenses, adding expenses, and viewing users for that given house. Once you've joined a house, you can view expenses that are owed to you and that you owe, you can add a new expense, you can join more houses, view and edit your profile details, view the other members of that house, and log out.

When you add an expense, you can tag the people splitting that expense with you (and can even exclude yourself from the expense if that purchase wasn't for you), add a description for that expense, and enter the amount of money for that expense.

When you want to view expenses that have been charged to you, you can view those in the View Expenses page. You can also pay off your expenses on this page by clicking "Pay off" next to whichever expense you would like to pay off.

When you want to change your display name and phone number, you can change those in the profile page. 

If you want to view your fellow roommates, you can do so in the People page.

### Here's a bit of a walkthrough for you, using mock data 
On the landing page, sign in as by entering "user" for the username with the password "user". Then, you'll be able to see 3 houses (we would recommend joining **6 Hoskin Avenue**, as user2 - who you can also sign in as as well with the username "user2" and password "user2" is a member of that house). Feel free to click "go to house" for any of these houses. You can then see the expenses charged to you on the View Expenses page. You can also pay these expenses off. You can also charge your roommates with expenses by going to the Add Expense page and adding an expense and tagging the roommates that you're splitting the charge with. You can also exclude yourself from the expense if you bought something for someone else. The cost will automatically even be split among the roommates you've selected.

If you would like to experiment as other users, here are some other users we have:
username: luthraek, password: 1234
username: degoeyna, password: 1234
username: burnsco2, password: 1234
