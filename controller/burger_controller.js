var express = require('express');
var router = express.Router();
var burger = require ('../model/burger.js');

router.get ('/', function(req,res){
    burger.all (function(burgerData){
        console.log(burgerData);
        res.render('index',{burger_data: burgerData});
    })  
})

router.put ('/burgers/:id', function(req, res) {
    var id = req.params.id;
    var condition = "id = " +id;
    burger.update ({
        devoured: 1
    },condition, function(data){
        console.log(data);
    })
})


module.exports =router;