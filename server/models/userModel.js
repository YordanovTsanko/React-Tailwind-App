const bcrypt = require('bcryptjs');
const db = require('../config/db');

const User = {
  createUser: async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
    const values = [username, hashedPassword];
    const res = await db.query(query, values);
    return res.rows[0];
  },

  getUserByUsername: async (username) => {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const res = await db.query(query, values);
    return res.rows[0];
  },
};

module.exports = User;