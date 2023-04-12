// IMPORTS
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const mongoose = require('mongoose')
require('dotenv').config();


//PORT AND MIDDLEWARE
const PORT = 6000;
const app = express();
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });


//nodemailer initialize
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  //SENDING ENQUIRY MAIL
  app.post("/send/remark", function (req, res) {
    let name = req.body.name 
    let email = req.body.email 
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Enquiry from ${name}, ${email}`,
      text: req.body.text,
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
      }
    });
   });
   

   
   

