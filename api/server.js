//PACOTES
const compression = require('compression');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

// START

const app = express();

// VARIAVEIS AMBIENTE

const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

//ARQUIVOS ESTATICOS

app.use("/public", express.static(_dirname + "/public"));
app.use("/public/img", express.static(_dirname + "/public/img"));

// MONGODB

const dbs = require("./src/config/database");
const dbURI = isProduction ? dbs.dbProduction : dbs.dbTest;
mongoose.connect(dbURI,{useNewUrlParser: true});

//SETUP EJS

app.set("view engine", "ejs");

//CONFIG

if(!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable('x-powered-by');
app.use(compression());

//SETUP BODY PARSER

app.use(bodyParser.urlencoded({extended: false, limit: 1.5*1024*1024 }));
app.use(bodyParser.json({limit:1.5*1024*1024 }));

//MODELS

require('./src/models');

//ROUTES

app.use('/', require('./src/routes'));

// ROUTES - 404

app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// ROUTES - 500 ...

app.use((err, req, res, next)=>{
   res.status(err.status || 500);
   if(err.status !== 404) console.warn("Error: ", err.message, new Date());
   res.json({errors: {message: err.message, status: err.status} });

});

// PORTA APLICAÇAO

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`Rodando na //localhost:${PORT}`);

})


