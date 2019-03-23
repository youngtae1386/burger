//var express
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    console.log(res);
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.all(function(burger_data) {
        res.render('index', { burger_data });
        console.log(burger_data);
    });
});

router.put('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result) {    
        
        res.redirect('/');
        console.log(result);
    });
});

router.post('/burgers/create', function(req, res) {
    if (req.body.burger_name == '') {
        console.log('"null" name burger');
        res.redirect('/');
    } else {
        burger.create(req.body.burger_name, function(result) {
           
            res.redirect('/');
            console.log(result);
        });
    }
});


module.exports = router;