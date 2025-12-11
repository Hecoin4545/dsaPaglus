const express = require('express');
const router = express.Router();
const {handleUserSignup , handleUserSignin} = require('../controllers/user.js')

router.post('/signup' , handleUserSignup)
router.post('/signin' , handleUserSignin)


module.exports = router;