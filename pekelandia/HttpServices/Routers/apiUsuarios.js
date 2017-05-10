/**
 * Created by xaipo on 5/2/2017.
 */
var express= require('express');
var router= express.Router();
//var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var url = 'mongodb://localhost:27017/Pekelandia';
//var objectId = require('mongodb').ObjectID;

router.post('/login',function(req,res){


            res.send(result);

});


router.post('/saveUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection =db.collection('usuarios');
        collection.insert(req.body, {

        } );

        res.send('Info ingresada');

        db.close();

    });
});


router.post('/updateUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log(req.body);
        var item = {
            name: req.body.name,
            password: req.body.password,
            tipo: req.body.tipo

        };
        var id = req.body.id;
        db.collection('usuarios').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
            assert.equal(null, err);
            console.log('Item updated');
            res.send(result);
        });

        db.close();
    });
});

router.post('/getByIdUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log(req.body);

        var id = req.body.id;
        db.collection('usuarios').findOne({"_id": objectId(id)}, function(err, result) {
            assert.equal(null, err);
            console.log(result);
            console.log('Item loaded');
            res.send(result);
        });

        db.close();
    });
});


router.get('/getAllUsuario',function(req,res){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        console.log(req.body);
        var collection =db.collection('usuarios');

        collection.find().toArray(function(err, results) {
            console.log(results)
            // send HTML file populated with quotes here
            res.send(results);
        });

        db.close();

    });
});




module.exports=router;