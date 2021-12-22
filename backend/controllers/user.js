const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const User = require('../models/user');


exports.signup = (req, res, next) => {
    const userObject = JSON.parse(req.body.user);
    delete userObject._id;
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phoneNumber: req.body.phoneNumber,
          country: req.body.country,
          password: hash,
          photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
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
    