var express = require('express');
var router = express.Router();

//variables para crear chicos
var nenas = ['Isabel','Eduviges','Solange','Fernanda'];
var nenes = ['Bartolomeo','Segismundo','Oliverio','Aurelio'];
var chicos = nenas.concat(nenes).sort(function(){
    return 0.5 - Math.random();
})

router.get('/', function(req, res) {
    res.render( 'nombres', {
         title: 'Elige un nombre',
         nombres: chicos,
        })
    });

router.get('/nenas', function(req, res, next){
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let nombres = shuffle(nenas);
    res.render('nombres', {title: 'Elige un nombre', nombres: nenas, color: 'rosa'})
})

router.get('/nenes', function(req, res, next){
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let nombres = shuffle(nenes);
    res.render('nombres', {title: 'Elige un nombre', nombres: nenes, color: 'celeste'})
})


module.exports = router;


