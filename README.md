# Blog Server

A RESTful API server built with Express.js and TypeScript for managing blog articles, categories, and users.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Zod (for validation)
- ESLint & Prettier (for code formatting)

## Features

- User management (create, login, get users, update roles)
- Article management (CRUD operations, featured articles)
- Category management
- Error handling middleware
- Request validation
- Query builder for advanced filtering, sorting, and pagination

## Project Structure

The project follows a modular architecture:

```
src/
├── app/
│   ├── builder/         # Query building utilities
│   ├── config/          # Configuration files
│   ├── error/           # Error handling utilities
│   ├── interface/        # Common interfaces
│   ├── middleware/      # Express middlewares
│   ├── routes/          # API routes
│   └── utils/           # Utility functions
├── modules/
│   ├── article/         # Article module
│   ├── category/        # Category module
│   └── user/            # User module
├── app.ts               # Express app configuration
└── server.ts            # Server entry point
```

## API Endpoints

### User Routes

- `POST /api/v1/users/create-user` - Create a new user
- `POST /api/v1/users/login` - User login
- `GET /api/v1/users/all-users` - Get all users
- `GET /api/v1/users/:email` - Get user by email
- `PATCH /api/v1/users/update-role/:userId` - Update user role

### Article Routes

- `POST /api/v1/articles/create-article` - Create a new article
- `GET /api/v1/articles/all-articles` - Get all articles (with query options)
- `GET /api/v1/articles/single-article/:id` - Get article by ID
- `PUT /api/v1/articles/update-article/:id` - Update an article
- `DELETE /api/v1/articles/:id` - Delete an article
- `GET /api/v1/articles/featured-article` - Get featured article

### Category Routes

- `POST /api/v1/categories/create-category` - Create a new category
- `GET /api/v1/categories` - Get all categories
- `DELETE /api/v1/categories/:id` - Delete a category

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
DB_URL=your_mongodb_connection_string
```

### Running the Application

#### Development Mode

```bash
npm run start:dev
```

#### Production Mode

```bash
npm run build
npm run start:prod
```

### Available Scripts

- `npm run start:dev`: Run the application in development mode
- `npm run start:prod`: Run the application in production mode
- `npm run build`: Build the TypeScript code
- `npm run lint`: Check for linting errors
- `npm run lint:fix`: Fix linting errors
- `npm run prettier`: Format code with Prettier

## Error Handling

The application includes a global error handler that catches and processes errors throughout the application. It handles:

- Validation errors (Zod)
- Application-specific errors
- Generic errors

## Query Features

The API supports advanced query options:

- **Search**: `/api/v1/articles/all-articles?searchTerm=keyword`
- **Filtering**: `/api/v1/articles/all-articles?category=technology`
- **Sorting**: `/api/v1/articles/all-articles?sort=createdAt`
- **Pagination**: `/api/v1/articles/all-articles?page=1&limit=10`
- **Field selection**: `/api/v1/articles/all-articles?fields=title,category`
