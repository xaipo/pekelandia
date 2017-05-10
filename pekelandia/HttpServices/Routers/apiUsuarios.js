/**
 * Created by xaipo on 5/2/2017.
 */
var express= require('express');
var router= express.Router();
var datos= require('./conection');
var mysql= require('mysql');


router.post('/login',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='SELECT * from usuarios where user="'+req.body.user+'"and contrasenia="'+req.body.password+'"';

    connection.query(str, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();



});


router.post('/saveUsuario',function(req,res){


});


router.post('/updateUsuario',function(req,res){


});

router.post('/getByIdUsuario',function(req,res){


});


router.get('/getAllUsuario',function(req,res){


});




module.exports=router;