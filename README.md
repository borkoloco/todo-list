# To-Do List Application

This project is a To-Do List web application built with the **MERN** stack (MongoDB, Express, React, Node.js). The application allows users to manage their tasks, including adding, updating, and deleting tasks. It also integrates with **Auth0** for authentication and **Redux** for state management.

## Features

- **Authentication**: Secure login and session management via Auth0.
- **Task Management**: Add, update, and delete tasks with real-time updates.
- **State Management**: Uses Redux to manage the state of tasks in the application.
- **API Integration**: Connects to a backend API using Fetch for managing tasks.
- **Validation**: Uses Zod for backend validation of task data.
- **Swagger Documentation**: Automatically generates API documentation with Swagger for easy reference.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **MongoDB Atlas**: Set up a MongoDB cluster for the backend database. You can follow the instructions [here](https://www.mongodb.com/cloud/atlas).
- **Auth0 Account**: Create an Auth0 account for authentication. Sign up [here](https://auth0.com/).

## Installation

### Backend (Node.js & Express)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list/todo-back
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   AUTH0_DOMAIN=your_auth0_domain
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_CLIENT_SECRET=your_auth0_client_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend (React & Next.js)

1. Navigate to the `frontend` directory:

   ```bash
   cd todo-list/todo-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the `frontend` folder and add the following:

   ```env
   NEXT_PUBLIC_AUTH0_CLIENT_ID=your_auth0_client_id
   NEXT_PUBLIC_AUTH0_DOMAIN=your_auth0_domain
   NEXT_PUBLIC_AUTH0_AUDIENCE=your_auth0_audience
   ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:3000` and the backend on `http://localhost:5001`.

## Usage

1. **Login**: Use the "Login" button on the Navbar to authenticate via Auth0.
2. **Manage Tasks**: Once logged in, you can add, update, and delete tasks.
3. **Swagger Docs**: The backend Swagger API documentation can be accessed at `http://localhost:5001/api-docs`.

## Technologies Used

- **Backend**:

  - Node.js
  - Express
  - MongoDB (via Mongoose)
  - Swagger for API documentation
  - Zod for backend validation
  - Auth0 for authentication

- **Frontend**:
  - React
  - Next.js
  - Redux Toolkit for state management
  - Styled-components for styling
  - Jest for unit testing

## Testing

1. **Backend Testing**: To run tests for the backend, navigate to the `backend` folder and run:

   ```bash
   npm test
   ```

2. **Frontend Testing**: To run tests for the frontend, navigate to the `frontend` folder and run:
   ```bash
   npm test
   ```

## Contributing

Feel free to open issues or pull requests to contribute to this project. Any contributions are welcome!

## License

This project is licensed under the MIT License.

---

**Note**: Replace placeholders like `your_mongodb_connection_string`, `your_auth0_client_id`, etc., with your actual values.
