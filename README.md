# Book Bazaar

Book Bazaar is a full-stack web application designed for book enthusiasts to explore, buy, and manage books. It offers an engaging platform for users to browse a vast collection of books, view detailed information, and perform actions such as adding books to their cart or wishlist.

## Deployed Links

- **Frontend**: [Book Bazaar Frontend](https://book-bazaar-client.vercel.app/)
- **Backend**: Deployed on Vercel.

## Features

- User Authentication: Secure sign-up and login.
- Browse and Search: Explore a wide variety of books with search functionality.
- Detailed Book Information: View detailed descriptions, reviews, and more.
- Cart Management: Add books to the cart and proceed to checkout.
- Wishlist: Save favorite books for later.
- Responsive Design: Optimized for both desktop and mobile users.

## Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: Context API / Redux (optional)
- **API Integration**: Axios

### Backend
- **Framework**: Node.js
- **Library**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Deployment**: Vercel

## Installation and Setup

### Prerequisites
- Node.js installed
- MongoDB instance set up locally or remotely

### Steps to Run Locally

#### Clone the repository
```bash
git clone https://github.com/dhruv0050/Book-Bazaar.git
cd Book-Bazaar
```

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will be accessible at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## API Endpoints

### Authentication
- **POST** `/api/auth/signup`: Create a new user.
- **POST** `/api/auth/login`: Authenticate user and return a token.

### Books
- **GET** `/api/books`: Fetch all books.
- **GET** `/api/books/:id`: Fetch a single book by ID.

### Cart
- **GET** `/api/cart`: Fetch user cart items.
- **POST** `/api/cart`: Add a book to the cart.


## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


## Acknowledgements

- Thanks to [Vercel](https://vercel.com/) for seamless deployment.
- Special thanks to the open-source community for libraries and resources.

## Contact

For inquiries or support, reach out to dhruvsh5467@gmail.com.


