// import ReactDOM from "react-dom";
// import react from "react";
// import './index.css';

const express = require('express');
const { Db } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// DB_URL='mangodb://localhost:27017/Octa';
// mangoos.connect(DB_URL)
const mongoose = require('mongoose');

const overlaySchema = new mongoose.Schema({
  positionX: Number,
  positionY: Number,
  size: String,
  content: String
});

const Overlay = mongoose.model('Overlay', overlaySchema);

module.exports = Overlay;

const express = require('express');
const router = express.Router();
const Overlay = require('./models/overlay');

// Create overlay
router.post('/overlay', async (req, res) => {
  try {
    const overlay = new Overlay(req.body);
    await overlay.save();
    res.status(201).send(overlay);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read overlay settings
router.get('/overlay', async (req, res) => {
  try {
    const overlays = await Overlay.find();
    res.send(overlays);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update overlay settings by ID
router.put('/overlay/:id', async (req, res) => {
  // Implementation for updating overlay settings
});

// Delete overlay settings by ID
router.delete('/overlay/:id', async (req, res) => {
  // Implementation for deleting overlay settings
});

module.exports = router;


