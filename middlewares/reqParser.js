var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

module.exports = (ctx) => ([
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser()
]);
