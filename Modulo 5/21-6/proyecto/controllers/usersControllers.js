const userService = require('../services/usersService');
const self = {};

self.addUser = function(req, res, next) {
	userService.addUser(req.body);
	res.redirect('/users/list');
}

self.getUserList = function(req, res, next) {
	res.render('users', {title: 'Users', users: userService.getUserList()});
}

module.exports = self;