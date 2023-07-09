const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users')

const register = async(req,res) =>{
    try{

    const {username,password,email,role} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    // Create a new user
    const user = new User({ username, password: hashedPassword, email, role });
    await user.save();

    res.json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
};

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id, role: user.role }, 'your_secret_key');
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  };
  
  module.exports = { register, login };
