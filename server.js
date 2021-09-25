
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dbConfig = require('./config/db_connection.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url,{useNewUrlParser:true}).then(() => {
    console.log("Sucessfully connected");
}).catch(err => {
    console.log("Error connecting");
    process.exit();
});



app.get('/', (req, res) => { res.send("hello world!"); });

require('./app/routes/item.routes.js')(app);

app.listen(3000,()=>{console.log("server is listen")});