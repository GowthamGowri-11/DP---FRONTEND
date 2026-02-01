# Deployment Guide - Direct Property

This guide explains how to deploy the frontend and backend to separate repositories and hosting platforms.

## Project Structure

The project is split into two independent parts:
- **Frontend (Client)**: React application
- **Backend (Server)**: Node.js/Express API with MongoDB Atlas

## Prerequisites

- Two separate Git repositories (one for frontend, one for backend)
- MongoDB Atlas account with a cluster set up
- Hosting platforms (suggestions below)

## Backend Deployment

### Recommended Platforms
- Render (https://render.com) - Free tier available
- Railway (https://railway.app) - Free tier available
- Heroku
- AWS/Azure/Google Cloud

### Steps

1. **Create a new repository for backend**
   ```bash
   cd direct-property/server
   git init
   git add .
   git commit -m "Initial backend commit"
   git remote add origin <your-backend-repo-url>
   git push -u origin main
   ```

2. **Configure environment variables on hosting platform**
   - `PORT`: 5000 (or platform default)
   - `MONGO_URI`: Your MongoDB Atlas connection string

3. **Deploy to hosting platform**
   - Connect your repository
   - Set environment variables
   - Deploy

4. **Note your backend URL** (e.g., `https://your-app.onrender.com`)

## Frontend Deployment

### Recommended Platforms
- Vercel (https://vercel.com) - Free tier, optimized for React
- Netlify (https://netlify.com) - Free tier available
- GitHub Pages
- AWS S3 + CloudFront

### Steps

1. **Create a new repository for frontend**
   ```bash
   cd direct-property/client
   git init
   git add .
   git commit -m "Initial frontend commit"
   git remote add origin <your-frontend-repo-url>
   git push -u origin main
   ```

2. **Update environment variables**
   
   Create a `.env.production` file:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```

3. **Configure hosting platform**
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

4. **Deploy**

## CORS Configuration

Make sure your backend allows requests from your frontend domain. Update `server.js`:

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:3001', 'https://your-frontend-url.com'],
  credentials: true
}));
```

## Testing

1. Test backend API: `https://your-backend-url.com/api/properties`
2. Test frontend: `https://your-frontend-url.com`
3. Verify frontend can communicate with backend

## Environment Variables Summary

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://admin:admin%40123@cluster0.fuhr2yh.mongodb.net/direct-property?retryWrites=true&w=majority&appName=Cluster0
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com
```

## Local Development

Both repos can still run locally:

**Backend:**
```bash
cd server
npm install
npm start
```

**Frontend:**
```bash
cd client
npm install
npm start
```

## Notes

- Keep `.env` files out of version control (already in `.gitignore`)
- Use `.env.example` files to document required variables
- Update CORS settings when deploying to production
- MongoDB Atlas is already cloud-based, no migration needed
