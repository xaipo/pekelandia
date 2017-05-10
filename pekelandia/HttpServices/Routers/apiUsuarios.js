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
        if (error) {
            res.send(error);
        }
        res.send(results);
    });

    connection.end();



});


router.post('/saveUsuario',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO usuarios (USER,CONTRASENIA)VALUES("'+req.body.user+'", "'+req.body.password+'")';
    console.log(str);
    try{
    connection.query(str, function (error, results, fields) {
        if (error) {
            res.send(error);
        }
        res.send(results);

    });

    connection.end();

}catch(err){


}


});


router.post('/updateUsuario',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE usuarios SET USER="'+req.body.user+'",CONTRASENIA="'+req.body.password+'" where CODIGO='+req.body.codigo;
    console.log(str);
    try{
        connection.query(str, function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);

        });

        connection.end();

    }catch(err){


    }

});

router.post('/getByIdUsuario',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM USUARIOS where CODIGO='+req.body.codigo;
    console.log(str);
    try{
        connection.query(str, function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);

        });

        connection.end();

    }catch(err){


    }
});


router.post('/getAllUsuario',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM USUARIOS';
    console.log(str);
    try{
        connection.query(str, function (error, results, fields) {
            if (error) {
                res.send(error);
            }
            res.send(results);

        });

        connection.end();

    }catch(err){


    }
});




module.exports=router;