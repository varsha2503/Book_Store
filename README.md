# Book Store Application

This is a simple Book Store application built with React on the frontend and Node.js with Express and MongoDB on the backend. The application allows users to view a list of books, add new books, update existing books, and view detailed information about each book.

## Deployed Website
The Book Store application is deployed and accessible at the following link: 
https://bookstorebyvarsha.netlify.app/

## Features
- View a list of available books
- Add a new book with details such as title, author, ISBN, description, price, and image
- Update existing book information
- View detailed information about a specific book
- Search functionality to find books by title

## Technologies Used
- **Frontend**:
  - React: Frontend JavaScript library for building user interfaces
  - React Router: For managing application routes
  - Axios: For making HTTP requests to the backend
  - Bootstrap: CSS framework for styling

- **Backend**:
  - Node.js: JavaScript runtime for server-side logic
  - Express.js: Web framework for building RESTful APIs
  - MongoDB: NoSQL database for storing book information
  - Mongoose: MongoDB object modeling tool for Node.js

## Getting Started
To run this application locally, follow these steps:

### Prerequisites
- Node.js installed on your machine
- MongoDB installed locally or MongoDB Atlas account (for remote database)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-store.git

2. Navigate to the project directory
   ```bash
   cd book-store

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install

### Running the Application
1. Start the backend server: This will start the backend server at http://localhost:1000.
   ```bash
   cd backend
   npm start

2. Start the frontend: This will start the frontend server at http://localhost:3000.
   ```bash
   cd frontend
   npm start

3. Access the application in your browser: Open http://localhost:3000 to view the Book Store application.

## Usage
- Home: The landing page of the application with a brief introduction to the Book Store.
- Books: View a list of available books with their titles, authors, prices, and images.
- Add Book: Add a new book to the store by providing details such as title, author, ISBN, description, price, and image URL.
- View Book: Click on a book from the list to view detailed information including the full description and ISBN.
- Update Book: Update existing book details such as title, author, ISBN, description, price, and image URL.

## Folder Structure
- frontend: Contains the React frontend code.
- backend: Contains the Node.js backend code.

## Contributing

Contributions are welcome! Please create a new issue for any bug fixes, feature requests, or suggestions. If you would like to contribute code, please fork the repository and submit a pull request.

## Acknowledgements

This project was created as a learning exercise for building full-stack applications.
