# NibbleShare

## Description

A blog site for techies.

## Installation

This app is currently hosted [on Heroku](https://rocky-inlet-01788.herokuapp.com/), but feel free to install it locally for testing or modifications.

1. Download or clone the repository.
2. In the top-level directory of the downloaded code, open an terminal window and execute `npm install` to install dependencies.
3. In that same terminal window, execute `npm start` (or `nodemon` if installed) to run the application.
4. In a browser window, navigate to http://localhost:3001/

## Usage

The user interface of this application should be relatively intuitive. The follow sections describe the different views a user would see.

![the homepage](/assets/images/homepage.PNG)

### Logging in / Signing up

If you attempt to view content that is restricted to only logged in users, you'll be prompted to log in or sign up. Provide the required information to begin.

![login / signup page](/assets/images/login-signup.PNG)

### Creating Posts

Once you are logged in, you'll be redirected to the Dashboard where you'll be able to write a new post using the `New Post` button.

![writing a new post](/assets/images/new-post.PNG)

### Editing and Deleting Posts

Viewing a post that you own, you'll have buttons to edit or delete the post. Clicking on the `Edit` button will redirect you to a screen where you can make changes to current posts.

![editing a post](/assets/images/edit-post.PNG)

### Viewing Posts

Click on a post title to navigate to the post's page with its content in entirety.

If you are the post author, you'll have buttons to edit or delete the post.

![a single post's page](/assets/images/post.PNG)
