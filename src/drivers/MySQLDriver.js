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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLDriver = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
class MySQLDriver {
    constructor(config, tableName = "main") {
        this.config = config;
        this.tableName = tableName;
        this._connection = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._connection) {
                this._connection = yield promise_1.default.createConnection(this.config);
                yield this.initializeTable();
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connection) {
                yield this._connection.end();
                this._connection = null;
            }
        });
    }
    initializeTable() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        ID VARCHAR(255) PRIMARY KEY,
        data TEXT
      );
    `));
        });
    }
    clear() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute(`DELETE FROM ${this.tableName} ;`));
        });
    }
    delete(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute('DELETE FROM ' + this.tableName + '  WHERE ID = ?;', [key]));
        });
    }
    all() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const [rows] = yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute('SELECT ID, data FROM ' + this.tableName + ';'));
            return rows.map((row) => {
                try {
                    return { ID: row.ID, data: JSON.parse(row.data) };
                }
                catch (error) {
                    return { ID: row.ID, data: null };
                }
            });
        });
    }
    has(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const [rows] = yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute('SELECT ID FROM ' + this.tableName + ' WHERE ID = ?;', [key]));
            return rows.length > 0;
        });
    }
    get(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const [rows] = yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute('SELECT data FROM ' + this.tableName + ' WHERE ID = ?;', [key]));
            const row = rows[0];
            return row && row.data ? JSON.parse(row.data) : undefined;
        });
    }
    set(key, value) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.execute('INSERT INTO ' + this.tableName + ' (ID, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data);', [
                key,
                JSON.stringify(value),
            ]));
            return value;
        });
    }
}
exports.MySQLDriver = MySQLDriver;
//# sourceMappingURL=MySQLDriver.js.map