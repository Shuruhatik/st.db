import { MongoClientOptions } from 'mongodb';
import { ElementKey, ElementValue, Driver } from '../types/index';
export declare class MongoDriver implements Driver {
    private mongo_url;
    private databaseName;
    private collectionName;
    private connectionOptions?;
    private _client;
    private _collection;
    constructor(mongo_url: string, databaseName?: string, collectionName?: string, connectionOptions?: MongoClientOptions | undefined);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    clear(): Promise<void>;
    all(): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    has(key: ElementKey): Promise<boolean>;
    get(key: ElementKey): Promise<ElementValue | undefined>;
    set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    delete(key: ElementKey): Promise<void>;
}
