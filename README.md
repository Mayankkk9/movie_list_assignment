Movie App
This is a responsive React application that allows users to browse a list of movies, mark their favorites, and view their favorite movies.

Setup Instructions
Prerequisites
Before running this application, make sure you have the following installed:

Node.js
npm (Node Package Manager)

Installation

Clone the repository to your local machine:

git clone <repository_url>
Navigate to the project directory:

cd movie-app
Install dependencies using npm:

npm install
npm install redux react-redux @reduxjs/toolkit
npm install tailwindcss
npx tailwindcss init

Create a .env file in the root directory of the project and add the following line:

REACT_APP_MOVIES_API=https://dummyapi.online/api/movies

Running the Application
To start the development server, run:

npm start

This will run the app in development mode and automatically open it in your default web browser at http://localhost:3000.

Building for Production
To build the application for production, run:

npm run build
This will create an optimized production build in the build folder.

Testing
To run tests, use:

npm test
This will launch the test runner in the interactive watch mode.

Additional Information
This application uses React for the user interface.
Redux is used for state management.
Tailwind CSS is used for styling and ensuring responsiveness.

Credits
This project was created by MAYANK SINGH

