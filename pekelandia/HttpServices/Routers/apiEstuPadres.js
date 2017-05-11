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



router.post('/saveEstuPadres',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO Estu_Padres (cedula,ci_padre)VALUES("'+req.body.cedula+'","'+req.body.ci_padre+'")';
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


router.post('/updateEstuPadres',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE Estu_Padres SET cedula="'+req.body.cedula+'",cedula="'+req.body.ci_padre+'" where cedula="'+req.body.cedula+'" and ci_padre="'+req.body.ci_padre+'"';
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

router.post('/getParentsBySon',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Estu_Padres where cedula='+req.body.cedula;
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

router.post('/getSonByParents',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Estu_Padres where ci_padre='+req.body.ci_padre;
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
router.post('/getAllEstuPadres',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Estu_Padres';
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