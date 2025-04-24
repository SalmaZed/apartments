# Apartment Management Web App

This web app allows users to manage and view apartment listings. It is built using **Next.js** for the frontend and **Node.js** for the backend. The application supports basic functionalities like viewing a list of apartments, viewing detailed apartment information, and managing apartment data.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Features

- **Apartment Listings**: A list of available apartments with basic details such as the apartment name, rent price, square footage, and location.
- **Apartment Details**: Clicking on an apartment from the listing redirects to a detailed page with more information.
- **Responsive Design**: The web app is designed to be mobile-friendly and adjusts seamlessly across different screen sizes.
- **Backend API**: The backend allows for CRUD operations to manage apartment data (Create, Read, Update, Delete).
  
## Technologies Used

- **Frontend**: 
  - Next.js (React Framework)
  - Tailwind CSS (for styling)
  - TypeScript (for type safety)
- **Backend**:
  - Node.js (for the server)
  - Express.js (for routing)
  - Prisma ORM (for database interaction)
  - SQLite (or PostgreSQL/MySQL for production)
- **Deployment**: 
  - Docker (for containerization)
  - Docker Compose (for managing the full app stack)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/install/) (for managing multi-container applications)

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies using npm:
   ```bash
   npm install

3. Run the server: 
    ```bash
    npm run dev

    The app should now be accessible at http://localhost:3000.

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies using npm:
   ```bash
   npm install

3. Setup the database by running:
   ```bash
   npx prisma migrate dev

3. Run the backend server: 
    ```bash
    npm run build
    npm run start
    
### Running the Application
You can also run the entire application with Docker Compose for convenience:

From the root of the project, build and start the app:

`docker-compose up --build`

This will start both the frontend and backend in separate containers. The app should be available at http://localhost:3000/apartments.

## API Endpoints
### Apartment Endpoints
- GET /api/apartments: Fetch a list of all apartments.

- GET /api/apartments/:id: Fetch details for a single apartment by ID.

- POST /api/apartments: Create a new apartment.