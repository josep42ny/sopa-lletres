# Word Search Game
This project implements a mockup word search game with both a frontend and backend.  The frontend provides a user interface for playing the game and managing user accounts, while the backend handles data persistence and game logic.

*Important*
RESTful API implementation is a security flaw the size of the observable universe, this project is for learning pusposes and should not be taken as an example of anithing near production ready code. 

## Features
* **Frontend:**
    * User-friendly interface for playing word search puzzles.
    * Responsive design for various screen sizes.
    * Sidebar navigation for easy access to different sections.
    * User authentication (login and registration).
    * User profile management (configuration and viewing top players).
    * Contact form for user inquiries.
    * Display of game scores and rankings.
    * Interactive map showing locations where the game has been played (placeholder currently).
    * Help section with instructions and a tutorial.
* **Backend:**
    * RESTful API built with Express.js for communication with the frontend.
    * Database integration with MySQL for user data and game puzzles.
    * Secure authentication mechanisms (using database password hashing implicitly).

## Usage
The frontend is served by an Apache HTTP server, while the backend is a Node.js Express.js API.  Both can be run locally using Docker Compose. To play the game, simply navigate to the appropriate URLs. The admin interface requires separate credentials which aren't provided here for security.

## Technologies Used
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MariaDB
* **Server:** Apache HTTP Server
* **Containerization:** Docker Compose
* **CORS:** CORS middleware to handle cross-origin requests between the frontend and backend.

*README.md was made with [Etchr](https://etchr.dev)*