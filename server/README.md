# Direct Property - Backend

Node.js/Express backend API for the Direct Property real estate platform.

## Features

- RESTful API for property management
- User authentication
- Admin dashboard APIs
- File upload handling
- MongoDB Atlas integration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Multer for file uploads
- CORS enabled

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/direct-property?retryWrites=true&w=majority
   ```

3. **Seed database (optional)**
   ```bash
   node seed.js
   ```
   
   This creates:
   - Admin account (username: admin, password: admin123)
   - Sample users and properties

4. **Start server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create property (with file upload)
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property
- `GET /api/properties/statistics` - Get property statistics

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/:id` - Get user by ID
- `GET /api/users` - Get all users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/favorite` - Toggle property favorite

### Admin
- `POST /api/admin/login` - Admin login
- `POST /api/admin/create` - Create admin
- `GET /api/admin/users/count` - Get total users count

## Environment Variables

- `PORT`: Server port (default: 5000)
- `MONGO_URI`: MongoDB Atlas connection string (required)

## Deployment

### Render (Recommended)

1. Push code to GitHub
2. Create new Web Service in Render
3. Connect repository
4. Set environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
5. Deploy

### Railway

1. Push code to GitHub
2. Create new project in Railway
3. Connect repository
4. Add environment variables
5. Deploy

## Project Structure

```
server/
├── config/         # Database configuration
├── controllers/    # Route controllers
├── models/         # Mongoose models
├── routes/         # API routes
├── uploads/        # Uploaded files
├── seed.js         # Database seeding script
└── server.js       # Main server file
```

## Database Models

- **Property**: Land listings with details
- **User**: Registered users
- **Admin**: Admin accounts

## File Uploads

Uploaded property images are stored in the `uploads/` directory and served statically at `/uploads`.

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `node seed.js` - Seed database with sample data
- `node clear-data.js` - Clear all data except admin

## License

Private Project
