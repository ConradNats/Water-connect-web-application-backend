# Water Connect Backend

The backend service for connecting watermen to rural households to enable availability of clean and safe water.

## Project Overview

Water Connect is a platform that bridges the gap between water service providers (watermen) and rural households, ensuring reliable access to clean and safe water. This repository contains the backend API that powers the application.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL database

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ConradNats/Water-connect-web-application-backend.git
cd Water-connect-web-application-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Run the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
Water-connect-web-application-backend/
├── config/              # Configuration files
│   ├── db.js           # Database connection
│   └── constants.js    # App constants
├── controllers/         # Request handlers
├── models/             # Database models and schemas
├── routes/             # API routes
├── middleware/         # Custom middleware
├── utils/              # Utility functions
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── index.js            # Entry point
├── package.json        # Dependencies
└── README.md           # This file
```

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=water_connect

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account

### Water Services
- `GET /api/services` - Get all water services
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

## Technologies Used

- **Express.js** - Web framework
- **MySQL2** - Database driver
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **nodemon** - Development server

## Available Scripts

```bash
# Start server
npm start

# Start server with auto-reload (development)
npm run dev

# Run tests
npm test
```

## Testing

Tests are coming soon. Run tests with:
```bash
npm test
```

## Error Handling

The API returns errors in the following format:
```json
{
  "success": false,
  "message": "Error message",
  "error": "error_code"
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on GitHub.

## Author

ConradNats
