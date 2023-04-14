// IMPORTS
const express = require("express");
const cors = require("cors");
const axios = require('axios');
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const path = require("path");
// const {google} = require('googleapis');
const {google} = require('googleapis');
// const {authenticate} = require('@google-cloud/local-auth');
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
// console.log(name)
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
});




// GOOGLE FORMS
// const formID = '1974Y35XVj9ogbqMvVtKNQkkZ9uM8qXVQhJqhDDWmVZA';
// async function runSample(query) {
//   // const auth = new google.auth.GoogleAuth({
//   //   // keyfilePath: path.join(__dirname, 'credentials.json'),

//   //   scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
//   // });
//   const forms = google.forms({
//     version: 'v1',
//     auth: 'AIzaSyB8GpHBB7l12uAN_cTErInULTqhBdfMnb0',
//   });
//   const res = await forms.forms.responses.list({
//     formId: formID,
//   });
//   console.log(res.data);
//   console.log('1')
//   return res.data;
// }

// if (module === require.main) {
//   runSample().catch(console.error);
// }

// app.get('/form-response-count', async (req, res) => {
//   // const formIds = req.query.formIds.split(',');
  
//   return res.status(200).json(await runSample())
  

//   // return res.status(200).json(await runSample())
// });


// async function getFormResponseCount(formId, apiKey) {
//   const url = `https://www.googleapis.com/forms/v1/forms/${formId}?key=${apiKey}`;
//   const response = await axios.get(url);
//   return response.data.responseCount;
// }