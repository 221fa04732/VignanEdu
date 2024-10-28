const express = require("express");
const app = express();
const port = 3000;
const { userdata } = require('./db.js');
const { Uname,Uemail,Upassword } = require('./validate.js');
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const verifyEmail = Uemail.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = Upassword.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

 
  const userFound = await userdata.findOne({ email: email, password: password });
  if (!userFound) {
    return res.status(400).json({ message: 'Invalid credentials'});
  }

  res.status(201).json({userFound, message: 'Login successful'});
});


app.post('/signin', async (req, res) => {
  const { name, email, password} = req.body;

  const verifyUsername = Uname.safeParse(name);
  if (!verifyUsername.success) {
    return res.status(400).json({ message: 'Invalid username'});
  }

  const verifyEmail = Uemail.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = Upassword.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  const emailFound = await userdata.findOne({ email: email});
  if (emailFound) {
    return res.status(400).json({ message: 'Email already taken'});
  }

  await userdata.create({
    name: name,
    email: email,
    password: password
  });

  res.status(201).json({ message: 'Signup successful'});
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
