/**
 * Created by xaipo on 5/2/2017.
 */
// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express = require('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;

// </editor-fold>




// <editor-fold defaultstate="collapsed" desc="Express">
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());// permite angular interactuar
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Routes">

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/api',require('./Routers/apiUsuarios'));



// <editor-fold defaultstate="collapsed" desc="Server Run">
app.listen(3002);
console.log("servidor ejecutando en el puerto 3002");

// </editor-fold>
