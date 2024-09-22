const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define schema and model for the project details
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  fundingGoal: Number,
  duration: Number,
});

const Project = mongoose.model('Project', projectSchema, 'Projects');

// POST route to add project details to MongoDB
app.post('/addproject', async (req, res) => {
  const { title, description, category, fundingGoal, duration } = req.body;
  try {
    const newProject = new Project({
      title,
      description,
      category,
      fundingGoal,
      duration,
    });
    await newProject.save();
    res.status(201).json({ message: 'Project added successfully', project: newProject });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
