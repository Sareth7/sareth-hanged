var Auth = require("./Auth");

module.exports = (ctx) => {
    if(!ctx.db) throw new Error("database is not defined");
    if(!ctx.log) throw new Error("log is not defined");
    return new Auth(ctx);
}
