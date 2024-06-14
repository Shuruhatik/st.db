"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const drivers_1 = require("../drivers");
const Encrypt_1 = require("./Encrypt");
const index_1 = require("./index");
class Database {
    constructor(options) {
        this.options = options;
        if (!(options === null || options === void 0 ? void 0 : options.driver))
            this.driver = new drivers_1.JSONDriver();
        else
            this.driver = options.driver;
        this.readyInDate = new Date();
        if ((options === null || options === void 0 ? void 0 : options.encryption) && (options === null || options === void 0 ? void 0 : options.encryption.password))
            this.encryption = new Encrypt_1.Encrypt(options === null || options === void 0 ? void 0 : options.encryption.password, options === null || options === void 0 ? void 0 : options.encryptionOptions);
        if ((options === null || options === void 0 ? void 0 : options.autoDecrypt) === true || !(options === null || options === void 0 ? void 0 : options.autoDecrypt) && this.encryption)
            this.autoDecrypt = true;
        else
            this.autoDecrypt = false;
    }
    /**
    * @description set element in database
    * @example <db>.set({key:`version`,value:"v6"})
    * @param {*} key Type a key for the element
    * @param {*} value Type a value for the element
    * @returns {Promise<ElementInData>}
    */
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "set"));
            return yield this.driver.set(key, this.encryption ? this.encryptString(JSON.stringify(value)) : value);
        });
    }
    /**
    * @description delete element from database
    * @example <db>.delete(`version`})
    * @param {*} key Type a key for the element
    * @returns {Promise<boolean>}
    */
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(key);
        });
    }
    /**
    * @description delete element from database
    * @example <db>.delete(`version`)
    * @param {*} key Type a key for the element
    * @returns Promise<boolean>
    */
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.delete(key);
        });
    }
    /**
    * @description Returns all elements in Database
    * @example <db>.all()
    * @param {*} limit default = 0
    * @returns {Element[]}
    */
    all(limit = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let all_data = yield this.driver.all();
            return limit > 0 ? all_data.splice(0, limit) : all_data;
        });
    }
    /**
    * @description To get the value of a specific key element
    * @example <db>.get(`version`)
    * @param {*} key Type a key for the element
    * @returns Boolean
    */
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "get"));
            let element_value = yield this.driver.get(key);
            return element_value && this.autoDecrypt ? this.decryptString(`${element_value}`) : element_value;
        });
    }
    /**
    * @description To fetch the value of a specific key element
    * @example <db>.fetch(`version`)
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    fetch(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(key);
        });
    }
    /**
     * @description Removes the first element of the array
     * @example <db>.shift(`hello`)
     * @param key
     * @returns {Promise<ElementInData>}
     */
    shift(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "shift"));
            if ((yield this.has(key)) == false)
                return this.set(key, []);
            else {
                let value = this.get(key);
                if (Array.isArray(value)) {
                    value.shift();
                    return yield this.set(key, value);
                }
                else
                    return yield this.set(key, []);
            }
        });
    }
    /**
     * @description Removes the last element of the array
     * @example <db>.pop(`hello`)
     * @param key
     * @returns {"any"}
     */
    pop(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "shift"));
            if ((yield this.has(key)) == false)
                return this.set(key, []);
            else {
                let value = this.get(key);
                if (Array.isArray(value)) {
                    value.pop();
                    return yield this.set(key, value);
                }
                else
                    return yield this.set(key, []);
            }
        });
    }
    /**
    * @description To pull an element from an array into data
    * @example <db>.pull(`version`,"v6")
    * @param {*} key Type a key for the element
    * @returns {Promise<ElementInData>}
    */
    pull(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "pull"));
            if ((yield this.has(key)) == false)
                throw Error((0, index_1.formatErrorMessage)("There is no data to execute on it", 'Database', 'Method', "pull"));
            let element_value = yield this.get(key);
            return yield this.set(key, element_value === null || element_value === void 0 ? void 0 : element_value.filter((v) => v !== value));
        });
    }
    /**
    * @description To push an element to an array into data
    * @example <db>.push(`version`,"v6")
    * @param {*} key Type a key for the element
    * @returns {Promise<void>}
    */
    push(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "push"));
            let element_value = yield this.get(key);
            let new_values = element_value && Array.isArray(element_value) ? element_value : [];
            if (Array.isArray(value))
                value.forEach((v) => new_values.push(v));
            else
                new_values.push(value);
            return yield this.set(key, new_values);
        });
    }
    /**
    * @description To unshift an element to an array into data
    * @example <db>.unshift(`version`,["v6"])
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    unshift(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "push"));
            let element_value = yield this.get(key);
            let new_values = element_value && Array.isArray(element_value) ? element_value : [];
            if (Array.isArray(value))
                value.forEach((v) => new_values.unshift(v));
            else
                new_values.unshift(value);
            return yield this.set(key, new_values);
        });
    }
    /**
     * @description To get the value type of a given key element
     * @example <db>.type(`st.db`)
     * @param {*} key Type a key for the element
     * @returns {"symbol" | "array" | "undefined" | "string" | "number" | "bigint" | "boolean" | "object"}
     */
    type(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "type"));
            let element_value = yield this.get(key);
            return Array.isArray(element_value) || element_value instanceof Array ? "array" : typeof element_value;
        });
    }
    /**
    * @description Checking an item from the database if it exists or not
    * @example <db>.has(`version`)
    * @param {*} key Type a key for the element
    * @returns {"boolean"}
    */
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "has"));
            return yield this.driver.has(key);
        });
    }
    /**
     * @param {*} value
     * @returns {"string"}
     */
    encryptString(value = "hi") {
        if (!this.encryption)
            return "";
        return this.encryption.encrypt(JSON.stringify(value));
    }
    /**
    * @description Returns database connection uptime!
    * @return {"number"}
    * @example console.log(`Database is up for ${db.uptime} ms.`);
    */
    get uptime() {
        if (!this.readyInDate)
            return 0;
        else
            return Date.now() - this.readyInDate.getTime();
    }
    /**
     * @example <db>.valuesAll()
     * @returns {"any[]"}
     */
    valuesAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.map((element) => element.data);
        });
    }
    /**
     * @example <db>.keysAll()
     * @returns {"any[]"}
     */
    keysAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.map((element) => element.ID);
        });
    }
    /**
     * @param {*} value
     * @returns {"number","string"}
     */
    decryptString(value) {
        if (!this.encryption)
            return;
        try {
            const resolve = JSON.parse(this.encryption.decrypt(value));
            return Database.isNumeric(resolve) == true ? +resolve : resolve;
        }
        catch (e) {
            console.error(e);
            return value;
        }
    }
    /**
     * @param {*} value
     * @returns {"boolean"}
     */
    isEncryptString(value) {
        return Encrypt_1.Encrypt.isEncryptedString(value);
    }
    /**
     * @description Clean all data
     * @example <db>.clear()
     * @returns {Promise<void>}
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.clear();
        });
    }
    /**
     * @description Delete all data
     * @example <db>.deleteAll()
     * @returns {Promise<void>}
     */
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clear();
        });
    }
    /**
    * @description Check if the key starts with the key in the database
    * @example <db>.startsWith({key:`st.db`})
    * @param {*} key
    * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
    */
    startsWith(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.filter((element) => element.ID.startsWith(key));
        });
    }
    /**
    * @description Check if the key ends with the key in the database
    * @example <db>.endsWith({key:`st.db`})
    * @param {*} key
    * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
    */
    endsWith(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.filter((element) => element.ID.endsWith(key));
        });
    }
    /**
     * @description Filter the database by the key
     * @example <db>.filter(t => t == "test")
     * @param {ElementKey} key
     * @param {*} callback
     * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
     */
    filter(key, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.filter(callback);
        });
    }
    /**
    * @description Check if the key includes with the key in the database
    * @example <db>.includes({key:`st.db`})
    * @param {*} key
    * @returns {Promise<any[]>}
    */
    includes(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let all_elements = yield this.all();
            return all_elements.filter((element) => element.ID.includes(key));
        });
    }
    /**
    * @description Does a math calculation and stores the value in the database!
    * @param {string} key Data key
    * @param {string} operator One of +, -, %, * or /
    * @param {number} value The value, must be a number
    * @param {boolen} goToNegative Move to negative
    * @example db.math("points","+",150)
    * @return {Promise<void>}
    */
    math(key, operator, new_value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "math"));
            if (!new_value && new_value != 0 || !key || !operator)
                throw Error((0, index_1.formatErrorMessage)("No key or value or operator found", 'Database', 'Method', "math"));
            let element_value = yield this.get(key);
            console.log(element_value);
            let old_value = element_value && Database.isNumeric(element_value.toString()) ? +element_value : 0;
            console.log(old_value, eval(`${old_value} ${operator} ${+new_value}`));
            return yield this.set(key, eval(`${old_value} ${operator} ${+new_value}`));
        });
    }
    /**
     * @example <db>.add(`data`,2)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    add(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "add"));
            yield this.math(key, "+", `${value}`);
        });
    }
    /**
     * @example <db>.multiply("coins", 2)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    multiply(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "add"));
            yield this.math(key, "*", `${value}`);
        });
    }
    /**
     * @example <db>.double("coins")
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    double(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "add"));
            yield this.math(key, "+", 2);
        });
    }
    /**
     * @example <db>.subtract("coins", 50)
     * @param {string} key Data key
     * @param {number} value The value, must be a number
     * @returns {Promise<void>}
     */
    subtract(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value && value != 0 || !key)
                throw Error((0, index_1.formatErrorMessage)("No key or value found", 'Database', 'Method', "add"));
            yield this.math(key, "-", `${value}`);
        });
    }
    /**
     * @description Check if the value is numeric
     * @param {*} val
     * @returns {"boolean"}
     */
    static isNumeric(val) {
        return /^-?\d+$/.test(`${val}`);
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map
