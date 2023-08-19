import { DatabaseOptions, Element, ElementKey, ElementValue } from "../types";
export declare class Database {
    readonly options?: DatabaseOptions | undefined;
    private readonly driver;
    readonly readyInDate: Date;
    readonly autoDecrypt: Boolean;
    private encryption?;
    private encryptionOptions?;
    constructor(options?: DatabaseOptions | undefined);
    /**
    * @description set element in database
    * @example <db>.set({key:`version`,value:"v6"})
    * @param {*} key Type a key for the element
    * @param {*} value Type a value for the element
    * @returns {Promise<ElementInData>}
    */
    set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    /**
    * @description delete element from database
    * @example <db>.delete(`version`})
    * @param {*} key Type a key for the element
    * @returns {Promise<boolean>}
    */
    remove(key: any): Promise<ElementValue | undefined | void>;
    /**
    * @description delete element from database
    * @example <db>.delete(`version`)
    * @param {*} key Type a key for the element
    * @returns Promise<boolean>
    */
    delete(key: any): Promise<ElementValue | undefined | void>;
    /**
    * @description Returns all elements in Database
    * @example <db>.all()
    * @param {*} limit default = 0
    * @returns {Element[]}
    */
    all(limit?: number): Promise<Element[]>;
    /**
    * @description To get the value of a specific key element
    * @example <db>.get(`version`)
    * @param {*} key Type a key for the element
    * @returns Boolean
    */
    get(key: ElementKey): Promise<ElementValue | void>;
    /**
    * @description To fetch the value of a specific key element
    * @example <db>.fetch(`version`)
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    fetch(key: ElementKey): Promise<ElementValue | void>;
    /**
     * @description Removes the first element of the array
     * @example <db>.shift(`hello`)
     * @param key
     * @returns {Promise<ElementInData>}
     */
    shift(key: ElementKey): Promise<ElementValue | undefined>;
    /**
     * @description Removes the last element of the array
     * @example <db>.pop(`hello`)
     * @param key
     * @returns {"any"}
     */
    pop(key: ElementKey): Promise<ElementValue | undefined>;
    /**
    * @description To pull an element from an array into data
    * @example <db>.pull(`version`,"v6")
    * @param {*} key Type a key for the element
    * @returns {Promise<ElementInData>}
    */
    pull(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    /**
    * @description To push an element to an array into data
    * @example <db>.push(`version`,"v6")
    * @param {*} key Type a key for the element
    * @returns {Promise<void>}
    */
    push(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    /**
    * @description To unshift an element to an array into data
    * @example <db>.unshift(`version`,["v6"])
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    unshift(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    /**
     * @description To get the value type of a given key element
     * @example <db>.type(`st.db`)
     * @param {*} key Type a key for the element
     * @returns {"symbol" | "array" | "undefined" | "string" | "number" | "bigint" | "boolean" | "object"}
     */
    type(key: ElementKey): Promise<ElementValue | "array">;
    /**
    * @description Checking an item from the database if it exists or not
    * @example <db>.has(`version`)
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    has(key: ElementKey): Promise<boolean>;
    /**
     * @param {*} value
     * @returns {"string"}
     */
    encryptString(value?: string): string;
    /**
    * @description Returns database connection uptime!
    * @return {"number"}
    * @example console.log(`Database is up for ${db.uptime} ms.`);
    */
    get uptime(): number;
    /**
     * @example <db>.valuesAll()
     * @returns {"any[]"}
     */
    valuesAll(): Promise<ElementValue[]>;
    /**
     * @example <db>.keysAll()
     * @returns {"any[]"}
     */
    keysAll(): Promise<ElementKey[]>;
    /**
     * @param {*} value
     * @returns {"number","string"}
     */
    decryptString(value: string): (string | number | void);
    /**
     * @param {*} value
     * @returns {"boolean"}
     */
    isEncryptString(value: any): boolean | void;
    /**
     * @description Clean all data
     * @example <db>.clear()
     * @returns {Promise<void>}
     */
    clear(): Promise<void>;
    /**
     * @description Delete all data
     * @example <db>.deleteAll()
     * @returns {Promise<void>}
     */
    deleteAll(): Promise<void>;
    /**
    * @description Check if the key starts with the key in the database
    * @example <db>.startsWith({key:`st.db`})
    * @param {*} key
    * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
    */
    startsWith(key: ElementKey): Promise<Element[]>;
    /**
    * @description Check if the key ends with the key in the database
    * @example <db>.endsWith({key:`st.db`})
    * @param {*} key
    * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
    */
    endsWith(key: ElementKey): Promise<Element[]>;
    /**
     * @description Filter the database by the key
     * @example <db>.filter(t => t == "test")
     * @param {ElementKey} key
     * @param {*} callback
     * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
     */
    filter(key: ElementKey, callback: (element: Element, index: Number, elements: Element[]) => Element): Promise<Element[]>;
    /**
    * @description Check if the key includes with the key in the database
    * @example <db>.includes({key:`st.db`})
    * @param {*} key
    * @returns {Promise<any[]>}
    */
    includes(key: ElementKey): Promise<Element[]>;
    /**
    * @description Does a math calculation and stores the value in the database!
    * @param {string} key Data key
    * @param {string} operator One of +, -, %, * or /
    * @param {number} value The value, must be a number
    * @param {boolen} goToNegative Move to negative
    * @example db.math("points","+",150)
    * @return {Promise<void>}
    */
    math(key: ElementKey, operator?: ("-" | "+" | "*" | "/"), new_value?: (string | number)): Promise<ElementValue | undefined | void>;
    /**
     * @example <db>.add(`data`,2)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    add(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void>;
    /**
     * @example <db>.multiply("coins", 2)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    multiply(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void>;
    /**
     * @example <db>.double("coins")
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    double(key: ElementKey): Promise<ElementValue | undefined | void>;
    /**
     * @example <db>.subtract("coins", 50)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    subtract(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void>;
    /**
     * @description Check if the value is numeric
     * @param {*} val
     * @returns {"boolean"}
     */
    static isNumeric(val: string | number): boolean;
}
