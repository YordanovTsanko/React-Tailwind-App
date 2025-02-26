const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const client = require('../config/db');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "1242ADSAIODA21323121SDWAPODSKPOA";

// Register a new user
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.createUser(username, password);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Wrong password' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get user
const getUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const result = await client.query('SELECT * FROM users WHERE id = $1', [decoded.userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result.rows[0]; 
    res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { registerUser, loginUser, getUser };
