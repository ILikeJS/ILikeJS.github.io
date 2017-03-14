const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// extracts the data out of the request headers like the form data
const bodyParser = require('body-parser');

//  url к базе данных
const db         = require('./config/db');

// our application port нашего приложения
const port = 8008;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('Watch ' + port);
    });
})
