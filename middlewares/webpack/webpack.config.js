var path = require("path");
var webpack = require('webpack');

module.exports = (baseDir) => {
    if(!baseDir) throw new Error("baseDir is not defined");
    const babelSettings = {
        extends: path.join(__dirname, '/.babelrc')
    };

    return {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            'babel-polyfill',
            path.join(baseDir, "public", "src", "index.js")
        ],
        
        output: {
            path: path.join(baseDir, "public", "dist"),
            filename: "bundle.js",
            publicPath: "/static/"
        },
        
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    include: [
                        path.resolve(baseDir, "public", "src")
                    ],
                    loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelSettings)],
                    plugins: ['transform-runtime']
                },
                {
                    test: /\.css$/,
                    loaders: ["style-loader", "css-loader"]
                }
            ]
        }
        
    }
}
