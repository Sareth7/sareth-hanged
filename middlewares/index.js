module.exports = () => ({
    reqParser: require("./reqParser")(...arguments),
    reqLogs: require("./reqLogs")(...arguments)
})
