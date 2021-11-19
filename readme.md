# LanGeek



## Description

Connect with a language learning and exchange community through our social media application. 



## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault. - "This page does not exist or you don't have permission to access it."
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault. "Our bad, something went wrong."
- **homepage (not logged in)** - As a user I want to be able to access the about us page, log in, sign up and see community posts.
- **homepage ( logged in)** - As a user I want to be able to access private pages, such as other people's profiles, create posts, search-bar and my own profile. 
- **about us** - As a user I want to know how the app works and what it is about.
- **sign up** - As a user I want to sign up on the web page so that I can learn my favorite languages and post about my learning journey.
- **login** - As a user I want to be able to log in on the web page so that I can access profiles and create posts. 
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account.
- **create a post** - As a user I want to see the create a post form that contains a title, picture, description and a language tag. 
- **delete a post** - As a user I want to be able to delete my posts on my profile.
- **edit user** - As a user I want to be able to edit my profile.
- **search** - As a user I want to search languages and see posts about them.
- **connect** - As a user I want to be able to connect with other users through their profile and learn from them.



## Server Routes (Back-end):

| **Method** | **Route**            | **Description**                                              | Request - Body                                               |
| ---------- | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                  | Main page route. Renders home `index` view.                  |                                                              |
| `GET`      | `/login`             | Renders `login` form view.                                   |                                                              |
| `POST`     | `/login`             | Sends Login form data to the server.                         | { username, password  }                                      |
| `GET`      | `/signup`            | Renders `signup` form view.                                  |                                                              |
| `POST`     | `/signup`            | Sends Sign Up info to the server and creates user in the DB. | { email, password, languagesISpeak, languagesIWantToLearn, socialMediaLink, profilePicture } |
| `GET`      | `/:userId`           | Private route. Renders `user` profile view.                  |                                                              |
| `GET`      | `/:userId/edit-user` | Private route. Renders `edit-user` form view.                |                                                              |
| `POST`     | `/:userId/edit-user` | Private route. Sends edit-user info to server and updates user in DB. Or logout. | { email, languagesISpeak, languagesIWantToLearn, socialMediaLink, profilePicture } |
| `GET`      | `/create-post`       | Private route. Render the `create-post` view.                |                                                              |
| `POST`     | `/create-post`       | Private route. Creates the post with form from `create-post`body. | { title, imageURL, description, languageTag }                |
| `GET`      | `/edit-post`         | Private route. Render the `edit-post` view with the values from the created post. |                                                              |
| `POST`     | `/edit-post`         | Private route. Updates new values from the post to the DB.   | { title, imageURL, description, languageTag }                |
| `POST`     | `/edit-post/delete`  | Private route. Deletes the existing post from the current user' post's array. |                                                              |
| `GET`      | `/search=?`          | Render the `search-results` view with matching language posts. | req.query                                                    |





## Models

User model :

```
{
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  languagesISpeak: { type: [String], required: true },
  languagesIWantToLearn: {type: [String], required: true }, 
  socialMediaLink: {type: String, required: true}, 
  profilePictureURL: {type: String, required: true},
  userPosts: {type: [ {type: Schema.Types.ObjectId, ref: 'Post'} ]}
}
```

Posts model : 

```
{
	title: {type: String, required: true}, 
	postPicture: {type: String, required: true}, 
	description: {type: String, required: true}, 
	languageTag: {type: String, required: true}, 
}
```



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/diogofpmonteiro/langeek)

[Deploy Link](----)



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)



### Contributors

- Telma Rosário [GitHubUsername](https://github.com/telmarosario) - [LinkedinLink](https://www.linkedin.com/in/telmarosario99) 
-  Diogo Monteiro [GitHubUsername](https://github.com/diogofpmonteiro) - [LinkedinLink](https://www.linkedin.com/in/diogopratasmonteiro)