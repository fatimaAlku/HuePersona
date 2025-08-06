# 🎨 HuePersona

HuePersona is a full-stack web application that blends personality psychology with color theory. Users can take a curated test to discover a color palette that reflects their personality traits — calm, bold, or balanced — and build a personalized collection of favorite colors.


## HuePersona Demo
![HuePersona Demo](./HuePersona.png)

## Project Overview

**HuePersona** combines interactive design, cultural psychology, and intuitive UX into one engaging platform. Users can register, log in securely, take a color personality test, receive a custom palette, and manage their own color collection — all within a sleek, responsive interface built using the MVC architecture.

---

## Technologies Used

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **MVC Architecture (Model–View–Controller)**
- **Server-side Rendering (JSX via express-react-views)**
- **CSS with Custom Styling**


---


## Features

-  **Authentication**: Sign up, Login, and secure user sessions via JWT.
-  **Personality Test**: Answer 10 curated questions to discover your matching color palette.
-  **Dynamic Color Index**: View all your saved and suggested colors in a visually appealing grid.
-  **Add, Edit, Delete Colors**: Manage your personal collection.
-  **Results Stored**: Personality test results and colors are saved for future insight.
-  **RESTful Routing**: Full MVC routing with data and view controllers.
-  **Validation & Error Handling**: Mongoose validation, form error messages, and clean UX.

---

## Installation Instructions
### 1. Clone the repo
git clone https://github.com/yourusername/huepersona.git 

cd huepersona

### 2. Install dependencies
npm install

### 3. Set environment variables
Create a .env file:

JWT_SECRET=your_jwt_secret

MONGO_URI=mongodb://localhost:27017/HuePersona

### 4. Run the app
npm run dev

---

 ## API Documentation
 ### Authentication

| Method          | Route         | Description                       | 
| --------------- | --------------| ----------------------------------| 
| GET             | `/auth`       | Show sign-up form                 | 
| POST            | `/auth`       | Handle sign-up form & create user | 
| GET             | `/auth/login` | Show login form                   | 
| POST            | `/auth/login` | Login existing user               | 


### Colors

| Method | Route              | Description                      |
| ------ | -------------------| ---------------------------------|
| GET    | `/colors`          | View user's colors               |
| GET    | `/colors/new`      | Show form to create new color    |
| POST   | `/colors`          | Create a new color               |
| GET    | `/colors/:id`      | Show a single color              |
| GET    | `/colors/:id/edit` | Show form to edit a color        | 
| PUT    | `/colors/:id`      | Update a color                   |
| DELETE | `/colors/:id`      | Delete a color                   |


### Personality Test

| Method | Route             | Description                               |
| ------ | ------------------| ------------------------------------------|
| GET    | `/colors/test`    | Take the test                             |
| POST   | `/colors/results` | Submit test answers and generate palette  |


### Result 
(Handled inside controller, no public GET/POST)

---


## Bonus Feature

* **RESTful API** for front-end/client interaction.

---

## Future Improvements

* Add user-selected themes
* Add search and filtering for color collections
* Deploy to Railway

---

## Inspiration

HuePersona is inspired by Korean color analysis tests that connect personality traits to color preferences — a playful blend of psychology and visual identity. Built with a full-stack MVC architecture, it showcases how structure can fuel creativity: Mongoose models handle rich user and color data, React-based views bring the experience to life, and controllers orchestrate the flow. By combining cultural insight with modern web development patterns, HuePersona turns personal expression into an interactive, self-discovery journey.
