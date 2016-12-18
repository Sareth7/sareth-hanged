var path = require("path");
var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

module.exports = (ctx) => {
    if(!ctx.baseDIR) throw new Error("baseDir is not defined");
    const config = require("./webpack.config")(ctx.baseDIR);
    const compiler = webpack(config);

    return [
        webpackMiddleware(compiler, {
            noInfo: true,
            stats: {colors: true},
            publicPath: config.output.publicPath,
            watchOptions: {
                aggregateTimeout: 300,
                poll: true
            }
        }),
        webpackHotMiddleware(compiler)
    ]
}
