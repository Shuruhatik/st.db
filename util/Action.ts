import {
    formatErrorMessage
} from "./util.js"
import { Database } from "./Database.js"
import { Collection } from "./Collection.js"

/** 
* @description Action is a class that is a dummy database where you can implement your methods without affecting the main database itself and save it for later whenever you want!
*/
export class Action extends Collection {
    public capture: Collection
    constructor(private database: Database, values?: IterableIterator<any>) {
        if (!(database instanceof Database)) throw Error(formatErrorMessage('Database class must be set correctly', 'Action', 'Parameter', "database"));
        super(values ? values : database.cache.entries());
        this.capture = this.database.cache;
    };
    /**
    * @name undo
    * @description Back to the state of database when th action was initiated!
    * @returns
    */
    undo() {
        this.map = this.capture.map;
        return this;
    };
    /**
    * @name save
    * @description Now it saves the data from cache to the database
    * @returns
    */
    save(database?: Database) {
        if (!(database instanceof Database)) throw Error(formatErrorMessage('Database class must be set correctly', 'Action', 'Method', "save"))
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