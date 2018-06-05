var express = require('express');
var router = express.Router();

personas = [{ dni: "25402102",nombre : "Jaime Suarez", edad: 25, gs: A+,alergias: "No posee"},{...}];


router.get('/:dni', function(req, res, next) {
	let dni = req.params.dni;
	switch (dni) {
		case '25402102':{ 
            nombre= "Jaime Suarez", 
            edad= 25, 
            gs= A+, 
            alergias= "No posee"
        }

			break;

		default:
			"no es dni valido"
			break;
	}

	res.render('nombres', {nombres: nombres, color: color});
})