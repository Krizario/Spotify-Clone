var express = require('express');
var router = express.Router();
var user = require('../models/user');
var mongoose = require('mongoose');


router.get('/',function (req, res){
    user.find({},{_id: true, userName:true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


router.get('/:idUser/playlists/:idPlaylist',function (req, res){
    user.find(
        {
            _id: req.params.idUser,
            "playlists._id" : mongoose.Types.ObjectId(req.params.idPlaylist)
        },
        {"playlists.$":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


router.get('/:idUser/playlists',function (req, res){
    user.find(
        {
            _id: req.params.idUser
        },
        {"playlists":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

router.get('/:idUser/favoris',function (req, res){

    user.aggregate([ 
        { $match: { _id: new mongoose.Types.ObjectId(req.params.idUser)  } },
    

        { $project: {
            'playlists': { 
                $filter: {
                    input: "$playlists",
                    as: "s",
                    "cond": { $eq: [ "$$s.favori",true ] }
                }           
                }        
             }  
        } 
    ])

     
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

router.put('/:idUser/playlists/:idPlaylist/favourite', function (req, res){
    user.update(
        {
            "playlists.albumID":(req.params.idPlaylist)
        },  {
            $set: { "playlists.$.favori": true }
        }
        
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});



router.post('/:idUser/playlists', function (req, res){
    user.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUser) 
        },
        {
            $push:{
                playlists:{
                    _id: mongoose.Types.ObjectId(),
                    albumTitle: req.body.albumTitle,
                    albumImage: req.body.albumImage,
                    albumArtist: req.body.albumArtist,
                    albumTitles: req.body.albumTitles,
                    albumReleaseDate: req.body.albumReleaseDate,
                    albumID: req.body.albumID,
                    
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
    
});




router.delete('/:idUser/playlists/:album', function (req, res){
  
  


user.update(
    {
        _id: mongoose.Types.ObjectId(req.params.idUser),
        
    },
    {
        $pull:{
            playlists:{
                _id: mongoose.Types.ObjectId(req.params.album)
            }
        }
    }
).then(result=>{
    res.send(result);
    res.end();
}).catch(error=>{
    res.send(error);
    res.end();
});

});



module.exports = router;
