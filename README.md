# 🍲 Recipes API (CRUD Application)

## 📌 Project Description

This is a RESTful API built using Node.js, Express.js, and MongoDB (Mongoose) that allows users to perform CRUD (Create, Read, Update, Delete) operations on recipes.

The application follows the MVC (Model-View-Controller) architecture and is tested using Postman.

---

## 🚀 Features

* Create a new recipe
* Retrieve all recipes
* Retrieve a single recipe by ID
* Update a recipe
* Delete a recipe

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Postman

---

## 📂 Folder Structure

```
recipes-app/
│
├── config/
│   └── db.js
├── controllers/
│   └── recipeController.js
├── models/
│   └── recipeModel.js
├── routes/
│   └── recipeRoutes.js
├── .env
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/yourusername/recipes-api.git
cd recipes-api
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the server

```
npx nodemon server.js
```

---

## 📮 API Endpoints

### ➤ Create Recipe

* **POST** `/api/recipes`

**Request Body:**

```
{
  "title": "Biryani",
  "ingredients": "Rice, Chicken",
  "instructions": "Cook properly"
}
```

---

### ➤ Get All Recipes

* **GET** `/api/recipes`

---

### ➤ Get Recipe by ID

* **GET** `/api/recipes/:id`

---

### ➤ Update Recipe

* **PUT** `/api/recipes/:id`

**Request Body:**

```
{
  "title": "Updated Biryani"
}
```

---

### ➤ Delete Recipe

* **DELETE** `/api/recipes/:id`

---

## 📸 Postman Documentation

* All API endpoints are tested using Postman
* Collection includes request and saved responses

---

## 🌐 Deployment

* Backend deployed on Render
