var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usersRouter = require('./routers/users-router');
var artistesRouter = require('./routers/artistes-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Users', usersRouter);
app.use('/Artistes', artistesRouter);


app.listen(8888, ()=>{
    console.log('Serveur lancé sur le port 8888');
});