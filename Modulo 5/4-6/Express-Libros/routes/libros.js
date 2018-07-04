var express = require('express');
var router = express.Router();
var librosController = require('../controllers/librosController')


/* GET libros page. */
router.get('/', librosController.index)  

router.get('/:isbn', librosController.isbn)

router.get('/delete/:isbn', librosController.deleteISBN)

//post es para agregar el put es para editar
router.post('/agregar', librosController.agregar)

function search (isbn){
  let i;
  for (i=0;i<librosImg.lenght;i++){
  if(librosImg[i].codigo==isbn){
  return librosImg[i];}
  }
  return null
  }

module.exports = router;