const self ={}

self.index = function(req, res, next) {
    res.render('users', {title: 'Users'});
  };

  self.newUser = function (req,res) {
    console.log(req.body, req.params, req.query)
    res.status(500).send('todo ok')
  }

  module.exports = self;


 