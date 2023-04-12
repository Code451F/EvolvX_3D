// IMPORTS
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//PORT AND MIDDLEWARE
const PORT = 3000;
const app = express();
app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "..", "dist")));

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

//serve vite on root url
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

//nodemailer initialize
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//SENDING ENQUIRY MAIL
app.post("/send/remark", function (req, res) {
  let name = req.body.name
  let email = req.body.email
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Enquiry from ${name}, ${email}`,
    text: req.body.message,
  };
console.log(name)
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
});
