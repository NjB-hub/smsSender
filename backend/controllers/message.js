const Message = require('../models/message');
const axios = require('axios')

exports.createMessage = (req, res, next) => {
    const message = new Message({
      _id: req.params.id,
      content: req.body.content,
      user_id: req.body.user_id,
      number: req.body.number,
      creationDate: req.body.creationDate,
      isSent: req.body.isSent,
      connection_direction: req.body.connection_direction
    });
    message.save().then(
      () => {
        res.status(201).json({
          message: 'Message saved successfully!'
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

  exports.getOneMessage = (req, res, next) => {
    Message.findOne({ 
      _id: req.params.id 
    }).then(
      (message) => {res.status(200).json(message);
      }
    ).catch(
      (error) => {
        res.status(404).json({ 
          error:error  
        });
  });
};

exports.modifyMessage =  (req, res, next) => {
    const message = new Message({
      _id: req.params.id,
      content: req.body.content,
      user_id: req.body.user_id,
      number: req.body.number,
      creationDate: req.body.creationDate,
      isSent: req.body.isSent,
      connection_direction: req.body.connection_direction
    });
    Message.updateOne({ _id: req.params.id }, message).then(
      () => {
        res.status(201).json({
          message: 'Message updated successfully!'
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

  exports.deleteMessage = (req, res, next) => {
    Message.findOne({ _id: req.params.id }).then(
        (message) => {
          if (!message) {
            res.status(404).json({
              error: new Error('No such Message!')
            });
          }
          if (message.userId !== req.auth.userId) {
            res.status(400).json({
              error: new Error('Unauthorized request!')
            });
    }
    Message.deleteOne({ _id: req.params.id }).then(
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

  exports.getAllMessages =  (req, res, next) => {
    Message.find().then(
      (messages) => {res.status(200).json(messages);
      }
    ).catch(
      (error) => {
        res.status(400).json({ 
          error:error  
        });
  });
};

exports.sendSMS = async (req, res) => {
  console.log(req.body)
  const message = req.body.message
  const phoneNo = req.body.phoneNo
 
  const response = await axios.post(
    "http://proxysms.mufoca.com/api/v0/shortMessages",
    {
      phoneNumber: phoneNo,
      message: message,
    },
    {
      headers: {
        Authorization:
          "Basic ZjE2MTg3ZGE3MGI2OmI2OTAxZDQwLWYyMTEtOTMwYS04ZTBjLTFjZGFkN2E2NGY5OQ==",
        "Content-Type": "application/json",
      },
    }
  )
 
  console.log(response)
  return response
}