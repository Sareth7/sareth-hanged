var router = require("express").Router();

module.exports = function(ctx){
    router.get("*", (req, res) => {
        res.sendFile(ctx.mainHTML);
    })

    return router;
};
