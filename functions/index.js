/* eslint-disable quotes */
const functions = require('firebase-functions');
const config = functions.config();
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
// eslint-disable-next-line object-curly-spacing
const cors = require('cors')({ origin: true });
admin.initializeApp();

// eslint-disable-next-line prefer-const
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// eslint-disable-next-line prefer-const
let mailOptions = {
  to: 'androidgeek54@gmail.com',
  from: 'Arc Development',
  subject: 'Testing nodemailer',
  text: 'Test Successful',
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // eslint-disable-next-line arrow-parens
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent successfully');
      }
    });
  });
});
