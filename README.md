# UserFlow Management

## Overview
The **UserFlow Management** is a web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on user data. It is built using **Node.js**, **Express**, and **EJS** templating engine for server-side rendering.

---

## Features

1. **User Management**:
   - Create new user profiles.
   - Read and display a list of all users.
   - Update existing user information.
   - Delete user profiles.

2. **User-Friendly Interface**:
   - Designed with EJS templates for dynamic rendering.
   - Organized routes for efficient user data management.

3. **Database Integration**:
   - Utilizes MongoDB for persistent data storage.

---

## Prerequisites

Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/)

---

## Screenshots
![Screenshot](https://github.com/jagrat-phugat/UserFlow-Management/blob/main/screenshots/Screenshot%202025-04-06%20123945.png)
![Screenshot](https://github.com/jagrat-phugat/UserFlow-Management/blob/main/screenshots/Screenshot%202025-04-06%20123014.png)
![Screenshot](https://github.com/jagrat-phugat/UserFlow-Management/blob/main/screenshots/Screenshot%202025-04-06%20123027.png)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Database**:
   - Set up a MongoDB instance.
   - Update the database connection string in the `models/models.js` file.

4. **Run the Application**:
   ```bash
   node main.js
   ```

5. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## Folder Structure
```
project-root
|-- models
|   |-- models.js        # Database schema and models
|-- public
|   |-- styles.css       # Static files (e.g., CSS, JS)
|-- views
|   |-- index.ejs        # Homepage
|   |-- users.ejs        # User list page
|   |-- edit.ejs         # Edit user page
|-- main.js              # Application entry point
|-- package.json         # Dependency management
```

---

## API Endpoints

### Routes

1. **GET /**
   - Renders the homepage.

2. **GET /read**
   - Fetches and displays all users.

3. **POST /create**
   - Creates a new user.

4. **GET /edit/:id**
   - Fetches details of a specific user for editing.

5. **POST /update/:id**
   - Updates an existing user.

6. **GET /delete/:id**
   - Deletes a user by ID.

---

## Dependencies

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **body-parser**: Middleware to parse request bodies.
- **ejs**: Templating engine for server-side rendering.

---

## Future Enhancements

- Add authentication and authorization.
- Improve UI/UX with modern front-end frameworks.
- Implement API endpoints for RESTful services.

---


