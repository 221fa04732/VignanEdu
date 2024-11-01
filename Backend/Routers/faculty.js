const express = require("express");
const router = express.Router();
const { facultydb } = require('./databases.js');
const { facultyval } = require('./validate.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.post('/login', async (req, res) => {
  const { email, password, empid } = req.body;

  const verifyEmail = facultyval.email.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = facultyval.password.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  const verifyempid = facultyval.empid.safeParse(empid);
  if (!verifyempid.success) {
    return res.status(400).json({ message: 'Invalid Employee Id'});
  }
 
  const userFound = await facultydb.findOne({ email: email, password: password, empid : empid });
  if (!userFound) {
    return res.status(400).json({ message: 'Invalid credentials'});
  }

  res.status(201).json({userFound, message: 'Login successful'});
});


router.post('/signin', async (req, res) => {
  const { name, email, password} = req.body;

  const verifyUsername = facultyval.empid.safeParse(name);
  if (!verifyUsername.success) {
    return res.status(400).json({ message: 'Invalid username'});
  }

  const verifyEmail = facultyval.email.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = facultyval.password.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  const emailFound = await facultydb.findOne({ email: email});
  if (emailFound) {
    return res.status(400).json({ message: 'Email already taken'});
  }

  const empidFound = await facultydb.findOne({ empid: name});
  if (empidFound) {
    return res.status(400).json({ message: 'Employee Id already taken'});
  }

  await facultydb.create({
    empid: name,
    email: email,
    password: password
  });

  res.status(201).json({ message: 'Signup successful'});
});


module.exports ={
  router
}
