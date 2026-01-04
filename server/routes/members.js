const router = require('express').Router();
const Member = require('../models/Member');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'codechef-wce-team',
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
});

const upload = multer({ storage: storage });

// --- Middleware to Catch Upload Errors ---
const uploadMiddleware = (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      console.error("❌ Multer/Cloudinary Error:", err);
      return res.status(500).json({ error: "Image upload failed", details: err.message });
    }
    next();
  });
};

// GET All Members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find().sort({ yearOfPassing: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST New Member (Handles /add and /register logic)
router.post('/add', uploadMiddleware, async (req, res) => {
  try {
    const { name, yearOfPassing, board, post, linkedin, github, codechef } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    const imageUrl = req.file.path;

    const newMember = new Member({
      name,
      yearOfPassing,
      board,
      post,
      imageUrl,
      linkedin,
      github,
      codechef
    });

    await newMember.save();
    res.status(201).json(newMember);

  } catch (err) {
    console.error("❌ Save Error:", err);
    res.status(400).json({ error: 'Error adding member', details: err.message });
  }
});

module.exports = router;