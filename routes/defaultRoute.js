module.exports = function(ctx){
    return (req, res) => {
        ctx.db.put("foo", {data: "bar"});
        ctx.db.get('foo', function (err, result) {
            console.log(result);
        });
        res.sendFile(ctx.mainHTML);
    }
};


