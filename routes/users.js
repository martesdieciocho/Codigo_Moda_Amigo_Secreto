var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')


router.get('/userList' ,userController.list)

module.exports = router;
