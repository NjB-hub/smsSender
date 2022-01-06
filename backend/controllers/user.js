const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const nodemailer = require("nodemailer");
const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phoneNumber: req.body.phoneNumber,
          country: req.body.country,
          password: hash,
          photo: ``,
        });
        user.save()
          .then(() => res.status(201).json({ message: 'User created !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


  
  exports.login = (req, res, next) => {
    User.findOne({ phoneNumber: req.body.phoneNumber })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'User not found !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Incorrect password !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


  exports.getOneUser = (req, res, next) => {
    User.findOne({ 
      _id: req.params.id 
    }).then(
      (user) => {res.status(200).json(user);
      }
    ).catch(
      (error) => {
        res.status(404).json({ 
          error:error  
        });
  });
};


  exports.modifyUser =  (req, res, next) => {
      const userObject = req.file ?
      {
          ...JSON.parse(req.body.user),
          photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    User.updateOne({ _id: req.params.id }, { ...userObject, _id: req.params.id }).then(
      () =>res.status(201).json({
          message: 'User updated successfully!'
        })).catch(error => res.status(400).json({
          error
        }));
  };

  exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id }).then(
        (user) => {
            const filename = user.photo.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                User.deleteOne({ _id: req.params.id }).then(
                    () => res.status(200).json({
                        message: 'Deleted!'
                      })).catch(error => res.status(400).json({
                        error }));
                    });
                  })
                  .catch(error => res.status(500).json({ error }));
                
          
    };

    exports.sendEmailResetPassword = async(req, res, next) => {
      const phoneNumber = req.body.phoneNumber
      const email = req.body.email
      const id = (await User.findOne({phoneNumber})) 

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "enspygi2023@gmail.com", 
          pass: "promogi_2023", 
        },
      });

          // send mail with defined transport object

    var mailInfo = {
        from: "enspygi2023@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Hello dear user. You can reset your password here", // Subject line
        text: "Did you forgot your password?", // plain text body
        html: ` <p>Click this link to reset your password: </p> <a href = 'http://localhost:4200/reset-password/${id._id}'>Reset my password</a>`, // html body
    }
     
    transporter.sendMail(mailInfo, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
    
    
  };

 /* exports.resetPassword =  (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.params.id }, {password: bcrypt.hash(req.body.password, 10)}).then(
      () => {
        res.status(201).json({
          message: 'Password updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );

  };

  exports.resetPassword = async (req, res, next) => {
    try{
      await User.findByIdAndUpdate({ _id: req.params.id }, {password: bcrypt.hash(req.body.password, 10)})
    } catch (error) {
      console.log(error)
    }
  } */
    
    
  exports.resetPassword =  (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          _id: req.params.id,
          password: hash,
          //password: bcrypt.hash(req.body.password, 10),
        });
    User.updateOne({ _id: req.params.id }, user).then(
      () => {
        res.status(201).json({
          message: 'Password updated successfully!'
        });
      }
    )}).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );

  };

