
/**
 * Created by xaipo on 5/2/2017.
 */
var express= require('express');
var router= express.Router();
var datos= require('./conection');
var mysql= require('mysql');





router.post('/saveMatricula',function(req,res){

    var connection = mysql.createConnection(datos);
    var str='INSERT INTO Matricula (cedula,id_nivel,fecha,estado_mat)VALUES("'+req.body.cedula+'","'+req.body.id_nivel+'","'+req.body.fecha+'","'+req.body.estado_mat+'")';
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


router.post('/updateMatricula',function(req,res){



    var connection = mysql.createConnection(datos);
    var str='UPDATE Matricula SET cedula="'+req.body.cedula+'",id_nivel="'+req.body.id_nivel+'" ,fecha="'+req.body.fecha+'" ,estado_mat="'+req.body.estado_mat+'"  where id_matricula="'+req.body.id_matricula+'"';
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

router.post('/getByIdMatricula',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Matricula where id_matricula="'+req.body.id_matricula+'"';
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

router.post('/getByStateMatricula',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Matricula where estado_mat="'+req.body.estado_mat+'"';
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

router.post('/getByStateAndDateMatricula',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Matricula where estado_mat="'+req.body.estado_mat+'"and fecha="'+req.body.fecha+'"';
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

router.post('/getAllMatricula',function(req,res){


    var connection = mysql.createConnection(datos);
    var str='SELECT * FROM Matricula';
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