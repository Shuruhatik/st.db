export declare class Collection {
    map: Map<any, any>;
    constructor(values?: IterableIterator<any>);
    /**
    * @description It will return to you the size of the map
    * @returns {"number"}
    */
    size(): number;
    /**
    * @description Get all values
    * @returns {IterableIterator<any>}
    */
    values(): IterableIterator<any>;
    /**
    * @description Get all entries
    * @returns {IterableIterator<any>}
    */
    entries(): IterableIterator<any>;
    /**
    * @description Get all keys
    * @returns {IterableIterator<any>}
    */
    keys(): IterableIterator<any>;
    /**
    * @description make clear elements of the map
    * @returns {IterableIterator<any>}
    */
    clear(): void;
    /**
    * @description Add an element with an arithmetic operation to the map
    * @returns {void}
    */
    math(key: string, operator: "-" | "+" | "*" | "/", value: string | number, goToNegative?: boolean): void;
    /**
    * @returns {any[]}
    */
    toArray(): any[];
    /**
    * @returns {any[]}
    */
    toObject(): any[];
    /**
    * @returns {any[]}
    */
    isEmpty(): boolean;
    /**
    * @returns number
    */
    findIndex(key: any): number;
    /**
    * @returns {any}
    */
    findByIndex(index: number): any;
    /**
    * @returns {any}
    */
    findByValue(value: any): any;
    /**
    * @returns {Map<any, any>}
    */
    reverse(): Map<any, any>;
    /**
    * @returns {"string"}
    */
    toJSON(): string;
    /**
    * @returns {"void"}
    */
    deleteEach(...keys: any): void;
    /**
    * @returns {"void"}
    */
    delete(key: any): void;
    /**
    * @returns {"any"}
    */
    set(key: any, value: any): any;
    /**
    * @returns {"any"}
    */
    get(key: any): any;
    /**
    * @returns {"boolean"}
    */
    has(key: any): boolean;
}
