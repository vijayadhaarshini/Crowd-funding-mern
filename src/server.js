const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // CORS should handle cross-origin requests, ensure frontend and backend origins are allowed.
app.use(bodyParser.json()); // Body parsing middleware to handle JSON requests

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
    console.log('MongoDB connection state:', mongoose.connection.readyState); // Check connection state (should be 1)
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define schema and model for the project details
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  fundingGoal: { type: Number, required: true },
  duration: { type: Number, required: true },
});

const Project = mongoose.model('Project', projectSchema, 'Projects');

// POST route to add project details to MongoDB
app.post('/addproject', async (req, res) => {
  const { title, description, category, fundingGoal, duration } = req.body;
  
  // Validate form data (ensure all fields are provided and valid)
  if (!title || !description || !category || !fundingGoal || !duration) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Create a new project document
    const newProject = new Project({
      title,
      description,
      category,
      fundingGoal,
      duration,
    });
    
    // Save the project to MongoDB
    const savedProject = await newProject.save();
    
    // Send success response
    res.status(201).json({ message: 'Project added successfully', project: savedProject });
  } catch (err) {
    console.error('Error saving project:', err);  // Log detailed error
    res.status(500).json({ error: 'Server error, unable to save project' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
