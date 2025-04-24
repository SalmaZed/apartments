# Apartments Management Web App

This web app allows users to manage and view apartment listings. It is built using **Next.js** for the frontend and **Node.js** for the backend. The application supports basic functionalities like viewing a list of apartments, viewing detailed apartment information, and managing apartment data.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [API Documentation with Swagger](#api-documentation-with-swagger)

## Features

- **Apartment Listings**: A list of available apartments with basic details such as the unit name, number and project name.
- **Apartment Details**: Clicking on an apartment from the listing redirects to a detailed page with more information.
- **Responsive Design**: The web app is designed to be mobile-friendly and adjusts seamlessly across different screen sizes.
- **Backend API**: The backend allows for some CRUD operations to manage apartment data (Create & Read).
  
## Technologies Used

- **Frontend**: 
  - Next.js 
  - Tailwind CSS
  - TypeScript
- **Backend**:
  - Node.js
  - Express.js
  - Prisma ORM
- **Deployment**: 
  - Docker
  - Docker Compose

## Getting Started

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```bash
   npm install

3. Run the server: 
    `npm run dev`

    The app should now be accessible at http://localhost:3000.

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```bash
   npm install

3. Setup the database by running:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init

3. Run the backend server: 
    ```bash
    npm run build
    npm run start
    
### Running the Application
You can also run the entire application with Docker Compose for convenience:

From the root of the project, build and start the app:

`docker-compose up`

This will start the frontend, backend & db in separate containers. The app should be available at http://localhost:3000/apartments.

## API Documentation with Swagger

This application provides an interactive API documentation using [Swagger](https://swagger.io/), which allows you to easily test and explore the API endpoints.

### How to Access Swagger Documentation

Once the backend server is running, you can access the Swagger UI by navigating to: http://localhost:3001/api-docs

### API Endpoints in Swagger

- **GET /api/apartments**: Fetch all apartments
- **GET /api/apartments/{id}**: Fetch an apartment by its ID
- **POST /api/apartments**: Create a new apartment
