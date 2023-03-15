# Model-View-Controller (MVC): Tech Blog


**Table of Contents**
-
- [Project Description](#project-description)
- [How to Run](#how-to-run)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Schema](#schema)
- [Deployed link & Screenshot](#deployed-link--screenshot)
- [References & Resources](#references--resources)


**Project Description**
-

 Our task was to create a real-world full-stack application that you’ll be able to showcase to potential employers.

Welcome to Melbourne Hotel Reviews, a website that provides a platform for users to review and rate 5-star hotels in Melbourne, Australia.

The website is designed to make it easy for users to share their experiences and opinions about the hotels they've stayed in, and to help other travelers make informed decisions when choosing a place to stay in Melbourne.

Users can browse reviews and ratings from other users to get a sense of the quality and value of each hotel.

Each hotel listing includes detailed information about the property, photos, and location. Users can leave a written review on each hotel.

Overall, Melbourne Hotel Reviews is a valuable resource for anyone who is looking to book a 5-star hotel in Melbourne, and who wants to hear from other travelers about their experiences and recommendations.

**How to Run**
-

#### Prerequisites:
- Node JS
- MYSQL server

#### Steps:

1) Clone this repository to your machine by typing `git@github.com:Anna-Janina/Melbourne-Hotel-Hunter.git` on the terminal.
2) Install all dependencies by typing `npm install`.
3) Initialize SQL server by typing `mysql -u <username> -p<password>`.
4) Go to .\db directory and run schema.sql `source schema.sql`.
5) Change MySQL username and password in Connection.js file or .env file to match your credentials.
6) Create a .env file in home directory and set the value of SESSION_KEY variable there.
6) Seed the database by typing `node seeds\seed.js` in home directory.
7) Run the application by typing `node server.js` in the terminal.



**User Story**
-
- AS a  


**Acceptance Criteria**
-
- GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

**Schema**
- 


**Deployed link & Screenshot**
-
- 






**References & Resources**
-
- https://www.google.com.au/
- https://www.youtube.com/
-

