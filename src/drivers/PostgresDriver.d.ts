import { ElementKey, ElementValue, Driver } from '../types/index';
export declare class PostgresDriver implements Driver {
    private config;
    private tableName;
    private _client;
    constructor(config: any, tableName?: string);
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
