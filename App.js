var express = require("express");
var path = require("path");
var bunyan = require("bunyan");
var level = require("level");

var getMiddlewares = require("./middlewares");
var getRoutes = require("./routes");

class App{
    constructor(params = {}){
        Object.assign(this, params);
        if(!this.log) this.log = this.getLogger();
        if(!this.mainHTML) this.mainHTML = this.getPATHMainHTML();
        this.init();
    }

    getLogger(params){
        return bunyan.createLogger(Object.assign({
            name: "app",
            src: this.config.get("__DEV__"),
            level: "trace"
        }, params))
    }

    getPATHMainHTML({ dir, name } = { dir: "public", name: "index.html" }){
        return path.join(__dirname, dir, name)
    }

    getMiddlewares(){
        return getMiddlewares(this);
    }

    getRoutes(){
        return getRoutes(this);
    }

    init(){
        //инициализация
        this.app = express();
        this.db = level(this.config.get("db:name"), this.config.get("db:options"));
        this.middlewares = this.getMiddlewares();
        this.log.trace("middlewares", Object.keys(this.middlewares));
        this.routes = this.getRoutes();
        this.log.trace("routes", Object.keys(this.routes));
        
        //активация
        this.useMiddlewares();
        this.useDefaultRoute();
    }

    useMiddlewares(){
        this.app.use(this.middlewares.reqLogs);
        this.app.use(this.middlewares.reqParser);
    }

    useDefaultRoute(){
        this.app.get("*", this.routes.default);
    }

    run(){
        const port = process.env.PORT || this.config.get("port");
        this.app.listen(port, () => {
            console.log(`server listen port ${port}`);
        })
    }
}

module.exports = App;