# Reel Play Movie Recommender Website

Reel Play is a movie recommender website developed as a MERN (MongoDB, Express.js, React.js, Node.js) project. It utilizes the TMDB (The Movie Database) API to fetch movie data and provides personalized movie recommendations based on user preferences.

# Project Overview
Reel Play is divided into two main parts: the server and the client.

# Server
The server is built using Node.js and Express.js and handles the backend functionalities, including fetching movie data from the TMDB API, user authentication, and recommendation generation.

# Client
The client side of the application is developed using React.js. It provides a user-friendly interface where users can create accounts, log in, rate and review movies, and receive personalized movie recommendations based on their previous interactions.

# How to Run the Project
To run the Reel Play movie recommender website on your local machine, follow the steps below:

Clone the repository:

git clone https://github.com/your-username/reel-play.git
Navigate to the project directory:

cd reel-play
Install dependencies for both the server and the client:

cd server
npm install

cd ../client
npm install

Set up the environment variables:

Create a .env file in the server directory and add the following variables:
PORT=3001
TMDB_API_KEY=your_tmdb_api_key
MONGODB_URI=your_mongodb_uri

Start the server and client concurrently:

npm start
Open your web browser and navigate to http://localhost:3000 to access the Reel Play movie recommender website.

Note: Before running the project, ensure you have obtained an API key from TMDB (https://www.themoviedb.org/documentation/api) and replaced your_tmdb_api_key with your actual API key in the .env file.

Also, ensure you have MongoDB installed and set up your MONGODB_URI in the .env file to connect to your MongoDB database.

Feedback and Contributions
Your feedback and contributions to the Reel Play project are highly appreciated. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on GitHub.

Enjoy using Reel Play and discovering exciting movies tailored to your preferences!

Note: This README template assumes that you have set up the project structure accordingly. Please modify the instructions as needed based on the actual directory structure and any other specific configurations you may have in your project.
