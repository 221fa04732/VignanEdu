const express = require("express");
const router = express.Router();
const { studentdb } = require('./databases.js');
const { studentval } = require('./validate.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const verifyEmail = studentval.email.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = studentval.password.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

 
  const userFound = await studentdb.findOne({ email: email, password: password });
  if (!userFound) {
    return res.status(400).json({ message: 'Invalid credentials'});
  }

  res.status(201).json({userFound, message: 'Login successful'});
});


router.post('/signin', async (req, res) => {
  const { name, email, password} = req.body;

  const verifyUsername = studentval.name.safeParse(name);
  if (!verifyUsername.success) {
    return res.status(400).json({ message: 'Invalid username'});
  }

  const verifyEmail = studentval.email.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = studentval.password.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  const emailFound = await studentdb.findOne({ email: email});
  if (emailFound) {
    return res.status(400).json({ message: 'Email already taken'});
  }

  await studentdb.create({
    name: name,
    email: email,
    password: password
  });

  res.status(201).json({ message: 'Signup successful'});
});

module.exports ={
  router
}
