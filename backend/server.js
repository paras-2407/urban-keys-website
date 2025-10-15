// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // To use environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 or one from environment

// --- Middleware ---
app.use(cors()); // Allow requests from other origins (your React app)
app.use(express.json()); // Allow the server to parse JSON in request bodies

// --- Routes ---
app.post('/send-email', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or your SMTP provider
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from .env file
      pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env file
    },
  });

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender address (shows the user's name and email)
    to: process.env.EMAIL_USER,    // Your email address to receive the form submissions
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Interested In:</strong> ${service}</p>
      <hr>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Something went wrong. Please try again.');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully!');
  });
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});