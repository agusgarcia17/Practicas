const self ={}

self.index = function(req, res, next) {
    res.render('libros', { title: 'Libros de Harry Potter', librosArray: librosImg });
  };

  module.exports = self;