# Quick Guide: Splitting into Separate Repositories

## What Was Changed

✅ All hardcoded `localhost:5000` URLs now use environment variables
✅ Frontend reads backend URL from `REACT_APP_API_URL`
✅ Both repos have their own `.gitignore` files
✅ Both repos have their own `README.md` files
✅ Environment variable examples created (`.env.example`)

## How to Split

### Step 1: Create Backend Repository

```bash
# Navigate to server folder
cd direct-property/server

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial backend commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/direct-property-backend.git

# Push
git push -u origin main
```

### Step 2: Create Frontend Repository

```bash
# Navigate to client folder
cd direct-property/client

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial frontend commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/direct-property-frontend.git

# Push
git push -u origin main
```

## Deployment Steps

### Backend (Render/Railway)

1. **Create account** on Render.com or Railway.app
2. **Create new Web Service**
3. **Connect your backend repository**
4. **Add environment variable:**
   - Key: `MONGO_URI`
   - Value: `mongodb+srv://admin:admin%40123@cluster0.fuhr2yh.mongodb.net/direct-property?retryWrites=true&w=majority&appName=Cluster0`
5. **Deploy** - You'll get a URL like: `https://your-app.onrender.com`

### Frontend (Vercel/Netlify)

1. **Create account** on Vercel.com or Netlify.com
2. **Import your frontend repository**
3. **Add environment variable:**
   - Key: `REACT_APP_API_URL`
   - Value: `https://your-backend-url.onrender.com` (from step above)
4. **Deploy** - You'll get a URL like: `https://your-app.vercel.app`

## Important Notes

### Backend URL
After deploying backend, copy the URL and use it in frontend's `REACT_APP_API_URL`

### MongoDB Atlas
- Already configured and working
- No changes needed
- Connection string is in backend `.env`

### CORS
- Already configured to accept all origins
- For production, you may want to restrict to your frontend domain only

### File Uploads
- Backend stores uploads in `uploads/` folder
- Make sure your hosting platform supports persistent storage
- Consider using cloud storage (AWS S3, Cloudinary) for production

## Testing After Deployment

1. **Test backend API:**
   ```
   https://your-backend-url.com/api/properties
   ```

2. **Test frontend:**
   ```
   https://your-frontend-url.com
   ```

3. **Verify connection:**
   - Open frontend in browser
   - Check if properties load
   - Try logging in as admin

## Admin Credentials

- Username: `admin`
- Password: `admin123`

## Local Development Still Works!

You can still run both locally:

**Terminal 1 (Backend):**
```bash
cd server
npm start
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
```

## Need Help?

- Backend not connecting? Check `MONGO_URI` environment variable
- Frontend not loading data? Check `REACT_APP_API_URL` points to correct backend
- CORS errors? Make sure backend is deployed and accessible

## Recommended Free Hosting

- **Backend**: Render.com (free tier, 750 hours/month)
- **Frontend**: Vercel.com (unlimited free deployments)
- **Database**: MongoDB Atlas (already set up, 512MB free)

Total cost: **$0/month** 🎉
