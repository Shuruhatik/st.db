import { Database } from "./Database.js";
import { Collection } from "./Collection.js";
export declare class Table extends Database {
    private database;
    ID: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object";
    private typeof;
    constructor(key: any, database: Database);
    /**
     * @description to get the value of the element
     */
    get cache(): Collection;
    /**
     * @description Write the data in the file
     * @example <db>.writeFileSync()
     * @param {*} data
     * @returns {Promise<void>}
    */
    writeFileSync(collection: Collection): Promise<void>;
}
