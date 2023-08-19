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
exports.Table = void 0;
const Database_1 = require("./Database");
const index_1 = require("./index");
class Table extends Database_1.Database {
    constructor(tableName, _database) {
        var _a;
        if (!(_database instanceof Database_1.Database))
            throw Error((0, index_1.formatErrorMessage)('Database class must be set correctly', 'Table', 'Parameter', "database"));
        if (((_a = _database.options) === null || _a === void 0 ? void 0 : _a.encryption))
            throw Error((0, index_1.formatErrorMessage)('It is not supported to enable encryption when using Tables', 'Table', 'Parameter', "database"));
        super(_database.options);
        this.tableName = tableName;
        this._database = _database;
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "get"));
            let table = yield this.getTable();
            return table[key] && this.autoDecrypt ? this.decryptString(`${table[key]}`) : table[key];
        });
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key)
                throw Error((0, index_1.formatErrorMessage)("No key found", 'Database', 'Method', "get"));
            let table = yield this.getTable();
            return table[key] ? true : false;
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let table = yield this.getTable();
            table[key] = value;
            this._database.set(this.tableName, JSON.stringify(table, null, 4));
            return value;
        });
    }
    ;
    all(limit = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let table = yield this.getTable();
            return limit > 0 ? Object.entries(table).map((el) => ({ ID: el[0], data: el[1] })).splice(0, limit) : Object.entries(table).map((el) => ({ ID: el[0], data: el[1] }));
        });
    }
    getTable() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this._database.has(this.tableName))) {
                yield this._database.set(this.tableName, JSON.stringify({}, null, 4));
                return {};
            }
            else {
                let element_value = yield this._database.get(this.tableName);
                try {
                    return JSON.parse(element_value);
                }
                catch (e) {
                    yield this._database.set(this.tableName, JSON.stringify({}, null, 4));
                    return {};
                }
            }
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this._database.set(this.tableName, JSON.stringify({}, null, 4));
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let table = yield this.getTable();
            delete table[key];
            this._database.set(this.tableName, JSON.stringify(table, null, 4));
            return key;
        });
    }
    ;
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map