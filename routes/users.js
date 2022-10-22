var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')


router.get('/listUser' ,userController.list)
router.get('/createUser')

module.exports = router;
