const service = {};

var users = [];

service.addUser = function(user) {
	users.push(user);
	console.log("added user ", users)
}

service.getUserList = function() {
	return users;
}


module.exports = service;