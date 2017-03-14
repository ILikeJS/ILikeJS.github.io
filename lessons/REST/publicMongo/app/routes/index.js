// этот файл на случай нескольких баз данных 

const appRoutes = require('./app_routes');


module.exports = function(app, db) {
   appRoutes(app, db);
};
