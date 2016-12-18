class Auth{
    constructor({ db, log } = {}){
        if (!db) throw new Error("database is not defined");
        if(!log) throw new Error("log is not defined");
        this.db = db;
        this.log = log;
    }

    findByLogin(login){
        this.db.get(login, (err, data) =>{
            if (err) this.log.error("DB::findByLogin", err);
            return data;
        })
    }
}

module.exports = Auth;