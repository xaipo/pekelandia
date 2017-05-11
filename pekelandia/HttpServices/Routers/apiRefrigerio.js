/**
 * Created by xaipo on 5/11/2017.
 */

var express= require('express');
var router= express.Router();
var datos= require('./conection');
var mysql= require('mysql');





router.post('/saveRefrigerio',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO Refrigerio (descripcion_refri,precio,estado_refri)VALUES("'+req.body.descripcion_refri+'","'+req.body.precio+'","'+req.body.estado_refri+'")';
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


router.post('/updateRefrigerio',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE Refrigerio SET descripcion_refri="'+req.body.descripcion_refri+'",precio="'+req.body.precio+'" ,estado_refri="'+req.body.estado_refri+'"  where id_refrigerio="'+req.body.id_refrigerio+'"';
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

router.post('/getByIdRefrigerio',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Refrigerio where id_refrigerio="'+req.body.id_refrigerio+'"';
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


router.post('/getAllRefrigerio',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Refrigerio';
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