To-Do Application
This is a full-stack To-Do application built using Next.js, React, Redux, Auth0 for authentication, and MongoDB for data storage. The app allows users to create, update, delete, and view their tasks. It also implements API validation using Zod and provides interactive API documentation using Swagger.

Features
User Authentication: Auth0 integration for secure user login/logout.
CRUD Operations: Users can create, update, and delete to-do tasks.
Zod Validation: Validation of API request data using Zod to ensure data integrity.
Swagger API Documentation: Automatically generated API documentation using Swagger for easy exploration of available endpoints.
Tech Stack
Frontend: React, Next.js, Redux, Styled-components
Backend: Node.js, Express, MongoDB
Authentication: Auth0
API Validation: Zod
API Documentation: Swagger
Setup Instructions

1. Clone the repository
   bash
   Copiar código
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
2. Install dependencies
   bash
   Copiar código
   npm install
3. Configure environment variables
   Create a .env file in the root of the project and add the following variables:

bash
Copiar código
NEXT_PUBLIC_AUTH0_CLIENT_ID=your-client-id
NEXT_PUBLIC_AUTH0_DOMAIN=your-domain
NEXT_PUBLIC_AUTH0_SECRET=your-secret
NEXT_PUBLIC_AUTH0_AUDIENCE=your-audience
MONGO_URI=your-mongo-uri
PORT=5001 4. Run the app
bash
Copiar código
npm run dev
This will start the Next.js development server at http://localhost:3000.

API Endpoints
The app includes the following API endpoints for managing to-do tasks:

GET /api/todos
Fetch all to-do tasks.

Example Request
bash
Copiar código
GET http://localhost:5001/api/todos
Example Response
json
Copiar código
[
{
"_id": "12345",
"title": "New Task",
"status": false
}
]
POST /api/todos
Create a new to-do task. The request body must contain a title.

Example Request
bash
Copiar código
POST http://localhost:5001/api/todos
Content-Type: application/json
Authorization: Bearer <token>

{
"title": "New Task"
}
Example Response
json
Copiar código
{
"\_id": "12345",
"title": "New Task",
"status": false
}
Zod Validation
The request body is validated using Zod on the server-side to ensure that only valid data is accepted. If validation fails, a 400 status code is returned with an error message detailing which fields are invalid.

typescript
Copiar código
const todoSchema = z.object({
title: z.string().min(1, "Title is required"),
});

const validateTodo = (data: any) => {
try {
todoSchema.parse(data); // Throws error if invalid
} catch (error) {
throw new Error("Validation failed");
}
};
PUT /api/todos/:id
Update an existing to-do task by its id.

Example Request
bash
Copiar código
PUT http://localhost:5001/api/todos/12345
Content-Type: application/json
Authorization: Bearer <token>

{
"title": "Updated Task"
}
Example Response
json
Copiar código
{
"\_id": "12345",
"title": "Updated Task",
"status": false
}
DELETE /api/todos/:id
Delete a to-do task by its id.

Example Request
bash
Copiar código
DELETE http://localhost:5001/api/todos/12345
Authorization: Bearer <token>
Example Response
json
Copiar código
{
"message": "Todo deleted successfully"
}
API Documentation (Swagger)
You can access the interactive API documentation for this project by visiting:

http://localhost:5001/api-docs

Swagger will list all available API endpoints, their request methods, and response formats. It also allows you to make test requests directly from the documentation.

Testing
Frontend
The frontend is tested using Jest and React Testing Library. To run the tests:

bash
Copiar código
npm test
Backend
The backend is also tested using Jest and mocks are used for database interactions to isolate functionality. You can run tests for the backend as follows:

bash
Copiar código
npm run test-backend
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License.
