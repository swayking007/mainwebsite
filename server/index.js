const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // <--- 1. ADD THIS IMPORT

dotenv.config();

const memberRoutes = require('./routes/members');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public')); 
app.use(express.json());

// --- 2. ADD THIS ROUTE TO SHOW THE FORM ---
// This tells the server: "If user goes to /register, show them the index.html file"
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
  // NOTE: If your file is named 'admin.html', change 'index.html' to 'admin.html' above
});

// Database Connection Middleware
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.use('/api/members', memberRoutes);

app.get('/', (req, res) => {
  res.send('CodeChef WCE API is running...');
});

// Export for Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
}
module.exports = app;