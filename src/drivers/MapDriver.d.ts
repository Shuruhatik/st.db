declare type ElementValue = string | number | boolean | object | (string | object | number | boolean)[];
declare type ElementKey = string;
export declare class MapDriver {
    collection: Map<string, ElementValue>;
    clear(): Promise<void>;
    all(): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    has(key: ElementKey): Promise<(ElementValue | undefined)>;
    get(key: ElementKey): Promise<(ElementValue | undefined)>;
    set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)>;
}
export {};
