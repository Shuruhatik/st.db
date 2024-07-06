import { ElementKey, ElementValue, Driver } from '../types/index';
export declare class SupabaseDriver implements Driver {
    private config;
    private tableName;
    private supabase;
    constructor(config: {
        supabaseUrl: string;
        supabaseKey: string;
    }, tableName?: string);
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
