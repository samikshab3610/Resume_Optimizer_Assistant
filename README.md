# Resume Optimizer Assistant

Resume Optimizer Assistant is a full-stack web application that analyzes resumes against job descriptions and provides ATS-focused feedback, keyword matching, score breakdowns, and improvement suggestions.

## Features

- User signup and login with JWT authentication
- Protected dashboard, upload, and result pages
- Resume analysis using Google Gemini
- Resume upload support for PDF, DOCX, TXT, JPG, JPEG, and PNG files
- OCR support for resume images
- ATS score, missing keywords, matched keywords, suggestions, and score breakdown
- Resume analysis history stored in MongoDB
- Contact form on the homepage
- Frontend deployed on Vercel
- Backend deployed on Render

## Tech Stack

**Frontend**

- React
- Vite
- React Router
- Axios
- CSS

**Backend**

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- Bcrypt
- Multer
- Google Gemini API
- pdf-parse
- mammoth
- tesseract.js

## Project Structure

```txt
Resume_Optimizer_Assistant/
├── ROA/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/              # Express backend
│   ├── src/
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/samikshab3610/Resume_Optimizer_Assistant.git
cd Resume_Optimizer_Assistant
```

Install frontend dependencies:

```bash
cd ROA
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

## Environment Variables

Create `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash-lite
FRONTEND_URL=http://localhost:5173
```

Create `ROA/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Do not commit `.env` files.

## Run Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend:

```bash
cd ROA
npm run dev
```

Open:

```txt
http://localhost:5173
```

Backend health check:

```txt
http://localhost:5000/api/health
```

## Build Frontend

```bash
cd ROA
npm run build
```

## Deployment

### Backend on Render

Use these settings:

```txt
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Render environment variables:

```env
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash-lite
FRONTEND_URL=https://resume-optimizer-assistant.vercel.app
```

### Frontend on Vercel

Use these settings:

```txt
Root Directory: ROA
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Vercel environment variable:

```env
VITE_API_BASE_URL=https://resume-optimizer-backend-jc4i.onrender.com/api
```

After changing environment variables, redeploy the related service.

## Important Notes

- `ROA/index.html` is required by Vite and should not be deleted.
- Old static root HTML files are not needed after converting the frontend to React.
- Rotate secrets before final deployment if they were shared or exposed.
- MongoDB Atlas Network Access must allow the deployed backend to connect.

## API Routes

```txt
GET    /api/health
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/auth/me
POST   /api/resumes/analyze
GET    /api/resumes/history
DELETE /api/resumes/history
POST   /api/contact
```

## Author

SAMIKSHA BHORE
