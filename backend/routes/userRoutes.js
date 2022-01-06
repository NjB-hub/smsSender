const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup',multer, userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/forgot-password', userCtrl.sendEmailResetPassword);
router.get('/:id', auth, userCtrl.getOneUser);
router.put('/:id',auth, multer, userCtrl.modifyUser);
router.put('/reset/:id', userCtrl.resetPassword);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;