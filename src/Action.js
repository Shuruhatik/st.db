"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
const util_js_1 = require("./util.js");
const Database_js_1 = require("./Database.js");
const Collection_js_1 = require("./Collection.js");
/**
* @description Action is a class that is a dummy database where you can implement your methods without affecting the main database itself and save it for later whenever you want!
*/
class Action extends Collection_js_1.Collection {
    constructor(database, values) {
        if (!(database instanceof Database_js_1.Database))
            throw Error((0, util_js_1.formatErrorMessage)('Database class must be set correctly', 'Action', 'Parameter', "database"));
        super(values ? values : database.cache.entries());
        this.database = database;
        this.capture = this.database.cache;
    }
    ;
    /**
    * @name undo
    * @description Back to the state of database when th action was initiated!
    * @returns
    */
    undo() {
        this.map = this.capture.map;
        return this;
    }
    ;
    /**
    * @name save
    * @description Now it saves the data from cache to the database
    * @returns
    */
    save(database) {
        if (!(database instanceof Database_js_1.Database))
            throw Error((0, util_js_1.formatErrorMessage)('Database class must be set correctly', 'Action', 'Method', "save"));
        let db = database ? database : this.database;
        return db.writeFileSync(this);
    }
    /**
    * @name reload
    * @returns
    */
    reload() {
        this.map = this.database.cache.map;
        return this;
    }
}
exports.Action = Action;
//# sourceMappingURL=Action.js.map