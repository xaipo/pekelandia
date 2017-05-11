/**
 * Created by xaipo on 5/11/2017.
 */
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





router.post('/savePadres',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO Padres (ci_padre,id_tipo,lugar_trabajo,direccion_trabajo,tel_padre,email,direccion_domicilio,tipo_vivienda,tel_aux)VALUES("'+req.body.ci_padre+'","'+req.body.id_tipo+'","'+req.body.lugar_trabajo+'","'+req.body.direccion_trabajo+'","'+req.body.tel_padre+'","'+req.body.email+'","'+req.body.direccion_domicilio+'","'+req.body.tipo_vivienda+'","'+req.body.tel_aux+'")';
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


router.post('/updatePadres',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE Padres SET id_tipo="'+req.body.id_tipo+'",lugar_trabajo="'+req.body.lugar_trabajo+'" ,direccion_trabajo="'+req.body.direccion_trabajo+'" ,tel_padre="'+req.body.tel_padre+'" ,email="'+req.body.email+'" ,direccion_domicilio="'+req.body.direccion_domicilio+'" ,tipo_vivienda="'+req.body.tipo_vivienda+'",tel_aux="'+req.body.tel_aux+'" where ci_padre="'+req.body.ci_padre+'"';
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

router.post('/getByIdPadres',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Padres where ci_padre="'+req.body.ci_padre+'"';
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


router.post('/getAllPadres',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Padres';
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