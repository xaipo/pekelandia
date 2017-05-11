/**
 * Created by xaipo on 5/11/2017.
 */
/**
 * Created by xaipo on 5/11/2017.
 */
/**
 * Created by xaipo on 5/2/2017.
 */
var express= require('express');
var router= express.Router();
var datos= require('./conection');
var mysql= require('mysql');





router.post('/saveNivel',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO Nivel (descripcion_Nivel,estado_nivel,cantidad)VALUES("'+req.body.descripcion_nivel+'","'+req.body.estado_nivel+'","'+req.body.cantidad+'")';
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


router.post('/updateNivel',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE Nivel SET descripcion_Nivel="'+req.body.descripcion_nivel+'",estado_nivel="'+req.body.estado_nivel+'",cantidad="'+req.body.cantidad+'"  where ID_Nivel='+req.body.id_nivel;
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

router.post('/getByIdNivel',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Nivel where ID_Nivel='+req.body.id_nivel;
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


router.post('/getAllNivel',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Nivel';
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