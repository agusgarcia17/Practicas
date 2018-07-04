var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersControllers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', userController.addUser);

router.get('/form', function(req, res, next) {
	res.render('form')
});

router.get('/list', userController.getUserList)

module.exports = router;
