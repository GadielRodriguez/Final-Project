# Product Store App

A modern web application built with **React** and **Chakra UI** to create, manage, and display products. This app allows users to create their own products with details such as name, price, and image. The app leverages **MongoDB** for storing data and **Postman** for testing APIs.

---

## Features

- Create new products with a name, price, and image.
- Manage product data stored in MongoDB.
- User-friendly UI built with Chakra UI.
- State management handled with Zustand.
- API testing with Postman for CRUD operations.
- Modern development setup using Vite.

---

## Technologies Used

### Frontend
- **React**: Library for building user interfaces.
- **Chakra UI**: Component library for fast and responsive design.
- **Zustand**: Lightweight state management.
- **Vite**: Fast development build tool.

### Backend
- **Express.js**: Framework for creating APIs.
- **MongoDB**: Database for storing product data.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd product-store-app
   ```

2. **Install Dependencies**:
   - Navigate to the frontend folder and install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Navigate to the backend folder and install dependencies:
     ```bash
     cd ../backend
     npm install
     ```

3. **Setup Environment Variables**:
   Create a `.env` file in the backend folder with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```

4. **Run the App**:
   
     npm run dev
     ```

5. **Open in Browser**:
   Visit `http://localhost:5173` to view the app.

---

## API Endpoints

### Base URL
```
http://localhost:5000/api/products
```

### Endpoints
1. **Get All Products**:
   - **GET** `/`

2. **Create a Product**:
   - **POST** `/`
   - **Body**:
     ```json
     {
       "name": "Product Name",
       "price": 100,
       "image": "Image URL"
     }
     ```

3. **Update a Product**:
   - **PUT** `/:id`
   - **Body**:
     ```json
     {
       "name": "Updated Name",
       "price": 150,
       "image": "Updated Image URL"
     }
     ```

4. **Delete a Product**:
   - **DELETE** `/:id`

---

## Project Structure
```
product-store-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
├── README.md
└── package.json
```

---

## Tools

- **Postman**: For testing APIs.
- **MongoDB Atlas**: Cloud-based MongoDB for storing product data.

---

## Future Enhancements

- Add user authentication.
- Implement product categories.
- Add image upload functionality.

---



