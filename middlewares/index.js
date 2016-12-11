module.exports = (ctx) => ({
    reqParser: require("./reqParser")(ctx),
    reqLogs: require("./reqLogs")(ctx),
    webpack: require("./webpack")(ctx)
})
