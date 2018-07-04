var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
	  res.json([{
      nombre: 'Maria Agustina Garcia',
      edad: "26",
      direccion: 'Mariano Acosta 81, PB "B"',
      email: 'agus.garcia17@gmail.com',
      telefono: '1169509412',
      profesion: 'Frontend Developer',
      website: 'https://github.com/agusgarcia17'
	  }]);
});

module.exports = router;
