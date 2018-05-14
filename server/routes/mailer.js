const nodemailer = require('nodemailer');
const creds = require('../config');
const funcs = require('../queries/mailer')

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: creds.email,
        pass: creds.ULTRASECRETPASS
    }
});



module.exports = app => {
  app.post('/exports', function(req, res, next) {
    var mailOps = funcs.createMail()
    Promise.resolve(transporter.sendMail(mailOps, function (err, info) {
           if(err)
             console.log(err)
           else
             console.log(info);
        }))
        .then(function() {
          res.status(200).json({message:"sent"});
        })
          .catch(function(error) {
            next(error);
          });
  })
}
