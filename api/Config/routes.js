const DataController = require('../Controllers/DataController');

/**
 * Function to set route parameters into our application
 * @param {*} app Variable containing the express() functionality.
 */

function routes(app) {
    app.get('/futureapi', DataController.processData);
}

module.exports = routes;
