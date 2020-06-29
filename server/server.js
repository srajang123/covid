const express = require('express');
const path = require('path');
const nodemailer=require('nodemailer');
const app = express();var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'srajan.1721cs1138@kiet.edu',
    to: 'srajan.oel@gmail.com',
    subject: 'Visitor to Your Site',
    text: 'There is a visitor to your site'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
app.use(express.static(path.join(__dirname, '..','build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..','build','index.html'));
});
app.listen(9000);