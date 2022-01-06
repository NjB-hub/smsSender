const express = require('express');

const router = express.Router();

const contactCtrl = require('../controllers/contact');

const auth = require('../middleware/auth');

router.get('/', auth, contactCtrl.getAllContacts);
router.post('/',auth, contactCtrl.createContact);
router.get('/:id',auth, contactCtrl.getOneContact);
router.put('/:id',auth, contactCtrl.modifyContact);
router.delete('/:id',auth, contactCtrl.deleteContact);  
router.get('/getcontacts/:id',auth, contactCtrl.getUserContacts);

module.exports = router;