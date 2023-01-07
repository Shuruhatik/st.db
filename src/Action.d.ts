import { Database } from "./Database.js";
import { Collection } from "./Collection.js";
/**
* @description Action is a class that is a dummy database where you can implement your methods without affecting the main database itself and save it for later whenever you want!
*/
export declare class Action extends Collection {
    private database;
    capture: Collection;
    constructor(database: Database, values?: IterableIterator<any>);
    /**
    * @name undo
    * @description Back to the state of database when th action was initiated!
    * @returns
    */
    undo(): this;
    /**
    * @name save
    * @description Now it saves the data from cache to the database
    * @returns
    */
    save(database?: Database): Promise<void>;
    /**
    * @name reload
    * @returns
    */
    reload(): this;
}
