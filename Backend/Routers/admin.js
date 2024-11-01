const express = require("express");
const router = express.Router();
const { admindb } = require('./databases.js');
const { adminval } = require('./validate.js');
router.use(express.json());

const cors = require('cors');
router.use(cors());

router.post('/login', async (req, res) => {
  const { email, password, secrete, otp } = req.body;

  const verifyEmail = adminval.email.safeParse(email);
  if (!verifyEmail.success) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  const verifyPassword = adminval.password.safeParse(password);
  if (!verifyPassword.success) {
    return res.status(400).json({ message: 'Invalid password'});
  }

  const verifySecrete = adminval.secrete.safeParse(secrete);
  if (!verifySecrete.success) {
    return res.status(400).json({ message: 'Invalid Secrete'});
  }

  const verifyOTP = adminval.otp.safeParse(otp);
  if (!verifyOTP.success) {
    return res.status(400).json({ message: 'Invalid OTP'});
  }
 
  const userFound = await admindb.findOne({ email: email, password: password, secrete : secrete, otp : otp });
  if (!userFound) {
    return res.status(400).json({ message: 'Invalid credentials'});
  }

  res.status(201).json({userFound, message: 'Login successful'});
});


module.exports ={
  router
}
