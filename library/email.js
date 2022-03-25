const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  },
  debug: true,
  logger : true
});

const sendEmail = ({fName, lName, tel, email, address, comments}) => new Promise((res, rej) => {
  {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'New Customer Request!!',
      text: `Customer Infomation:
        Name: ${fName} ${lName}
        email: ${email}
        phone: ${tel}
        address: ${address}
        comments: ${comments}
      `
    }
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        rej(error);
      } else {
        console.log('Email sent: ' + info.response);
        res();
      }
    });
  }
});

export {
  sendEmail
}
