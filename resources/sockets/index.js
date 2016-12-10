var Socket = require("./Socket");

module.exports = (ctx) => {
  const socket = new Socket(ctx.http);
}
