var express = require('express');
var router = express.Router();
var lartiste = require('../models/artiste');
var mongoose = require('mongoose');


router.get('/',function (req, res){
    lartiste.find({},{_id:true, artiste:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



router.get('/:idArtiste/albumes', function (req, res){
    lartiste.find({_id: mongoose.Types.ObjectId(req.params.idArtiste)},{albumes:true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;
