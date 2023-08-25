import mysql from 'mysql2/promise';
import { ElementKey, ElementValue, Driver } from '../types/index';
export declare class MySQLDriver implements Driver {
    private config;
    private tableName;
    private _connection;
    constructor(config: mysql.ConnectionOptions, tableName?: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    private initializeTable;
    clear(): Promise<void>;
    delete(key: ElementKey): Promise<void>;
    all(): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    has(key: ElementKey): Promise<boolean>;
    get(key: ElementKey): Promise<ElementValue | undefined>;
    set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
}
