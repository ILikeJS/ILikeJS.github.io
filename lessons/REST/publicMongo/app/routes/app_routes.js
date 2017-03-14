/*
  Routes in Express - is a function (express, database)
  module.exports = function(app, db) {};
*/

// for id in MongoDB
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    //POST
    app.post('/family', (req, res) => {
        //structure BD
        const note = {
            surname: req.body.surname,
            name: req.body.name,
            age: req.body.age
        };
        db.collection('family').insert(note, (err, result) => {
            if (err) {
                res.send({
                    'error': 'Error of sendig'
                });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //GET
    app.get('/family/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('family').findOne(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'Error of sendig'
                });
            } else {
                res.send(item);
            }
        });
    });

    //PUT
    app.put('/family/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        const note = {
          surname: req.body.surname,
          name: req.body.name,
          age: req.body.age
        };
        db.collection('family').update(details, note, (err, result) => {
            if (err) {
                res.send({
                    'error': 'Error of sendig'
                });
            } else {
                res.send(note);
            }
        });
    });

    //DELETE
    app.delete('/family/:id', (req, res) => {
        const id = req.params.id;
        const details = {
            '_id': new ObjectID(id)
        };
        db.collection('family').remove(details, (err, item) => {
            if (err) {
                res.send({
                    'error': 'Error of sendig'
                });
            } else {
                res.send('Person ' + id + ' deleted!');
            }
        });
    });

};
