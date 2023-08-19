import { Database } from "./Database";
import { ElementKey, ElementValue } from "../types/index";
export declare class Table extends Database {
    readonly tableName: string;
    private readonly _database;
    constructor(tableName: string, _database: Database);
    get(key: ElementKey): Promise<ElementValue | void>;
    has(key: ElementKey): Promise<boolean>;
    set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)>;
    all(limit?: number): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    getTable(): Promise<any>;
    clear(): Promise<void>;
    delete(key: ElementKey): Promise<(ElementKey | undefined)>;
}
