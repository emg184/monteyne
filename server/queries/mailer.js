const creds = require('../config');

function createMail() {
  const mailOptions = {
    from: creds.email, // sender address
    to: 'gardner.ethan10@gmail.com', // list of receivers
    subject: 'New Order', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };

  return mailOptions;
}

module.exports = {
  createMail: createMail
}
