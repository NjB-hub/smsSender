const Contact = require('../models/contact');

exports.createContact = (req, res, next) => {
    console.log(req.body)
    const contact = new Contact({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
      phoneOperator: req.body.phoneOperator,
      user_id: req.body.user_id,
      creationDate: Date.now()
    });
    contact.save().then(
      () => {
        res.status(201).json({
          message: 'Contact saved successfully!'
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

  exports.getOneContact = (req, res, next) => {
    Contact.findOne({ 
      _id: req.params.id 
    }).then(
      (contact) => {res.status(200).json(contact);
      }
    ).catch(
      (error) => {
        res.status(404).json({ 
          error:error  
        });
  });
};

exports.modifyContact =  (req, res, next) => {
    const contact = new Contact({
      _id: req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
      phoneOperator: req.body.phoneOperator,
      user_id: req.body.user_id,
      creationDate: req.body.creationDate,
    });
    Contact.updateOne({ _id: req.params.id }, contact).then(
      () => {
        res.status(201).json({
          message: 'Contact updated successfully!'
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

  exports.deleteContact = (req, res, next) => {
    Contact.findOne({ _id: req.params.id }).then(
        (contact) => {
          if (!contact) {
            res.status(404).json({
              error: new Error('No such Contact!')
            });
          }
          if (contact.userId !== req.auth.userId) {
            res.status(400).json({
              error: new Error('Unauthorized request!')
            });
    }
    Contact.deleteOne({ _id: req.params.id }).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
    })
  };

  exports.getAllContacts =  (req, res, next) => {
    Contact.find().then(
      (contacts) => {res.status(200).json(contacts);
      }
    ).catch(
      (error) => {
        res.status(400).json({ 
          error:error  
        });
  });
};

exports.getUserContacts =  (req, res, next) => {
  console.log(req.params)
  Contact.find({'user_id._id': req.params.id}).then(
    (contacts) => {res.status(200).json(contacts);}
  ).catch(
    (error) => {
      res.status(400).json({ 
        error:error  
      })
    });
};