var morgan = require('morgan');

module.exports = (ctx) => ([
    morgan('[:method :status] :url :response-time')
])