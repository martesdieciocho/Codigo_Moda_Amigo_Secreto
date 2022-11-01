var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')


router.get('/listUser' ,userController.list)
router.get('/createUser', userController.create)
router.post('/addUser', userController.add)
//router.post('/login', userController.login)

module.exports = router;
