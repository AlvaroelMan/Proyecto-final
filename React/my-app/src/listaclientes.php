<?php
var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'a19alvsildur_Vue',
    user : 'a19alvsildur_alv',
    password : '123456789',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});
?>