import { ElementKey, ElementValue } from "../types/index";
export declare class CacheDriver {
    collection: Map<string, ElementValue>;
    constructor(collection?: Map<string, ElementValue>);
    clear(): Promise<void>;
    all(): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    has(key: ElementKey): Promise<(boolean)>;
    delete(key: ElementKey): Promise<(ElementValue | undefined)>;
    get(key: ElementKey): Promise<(ElementValue | undefined)>;
    getCollection(): void;
    set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)>;
}
