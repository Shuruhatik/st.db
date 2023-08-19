import { ElementKey, ElementValue } from '../types/index';
export declare class SQLDriver {
    private tableName;
    private readonly _db;
    readonly file_exists: boolean;
    readonly path: string;
    constructor(path?: string, tableName?: string, path_resolve?: boolean);
    private initializeTable;
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
