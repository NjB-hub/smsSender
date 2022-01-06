const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const messageCtrl = require('../controllers/message');



router.get('/',auth, messageCtrl.getAllMessages);
router.post('/',auth, messageCtrl.createMessage);
router.get('/:id',auth, messageCtrl.getOneMessage);
router.put('/:id',auth, messageCtrl.modifyMessage);
router.delete('/:id',auth, messageCtrl.deleteMessage);
router.post('/sendsms', auth, messageCtrl.sendSMS);


module.exports = router;