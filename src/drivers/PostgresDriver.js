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
exports.PostgresDriver = void 0;
const pg_1 = require("pg");
class PostgresDriver {
    constructor(config, tableName = "main") {
        this.config = config;
        this.tableName = tableName;
        this._client = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._client) {
                this._client = new pg_1.Client(this.config);
                yield this._client.connect();
                yield this.initializeTable();
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client) {
                yield this._client.end();
                this._client = null;
            }
        });
    }
    initializeTable() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        ID VARCHAR(255) PRIMARY KEY,
        data JSON
      );
    `));
        });
    }
    clear() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query(`DELETE FROM ${this.tableName};`));
        });
    }
    delete(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query('DELETE FROM ' + this.tableName + ' WHERE ID = $1;', [key]));
        });
    }
    all() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const { rows } = yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query('SELECT ID, data FROM ' + this.tableName + ';'));
            return rows.map((row) => {
                try {
                    return { ID: row.id, data: row.data };
                }
                catch (error) {
                    return { ID: row.id, data: null };
                }
            });
        });
    }
    has(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const { rows } = yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query('SELECT ID FROM ' + this.tableName + ' WHERE ID = $1;', [key]));
            return rows.length > 0;
        });
    }
    get(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const { rows } = yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query('SELECT data FROM ' + this.tableName + ' WHERE ID = $1;', [key]));
            const row = rows[0];
            return row && row.data ? row.data : undefined;
        });
    }
    set(key, value) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const jsonValue = JSON.stringify(value);
            yield ((_a = this._client) === null || _a === void 0 ? void 0 : _a.query('INSERT INTO ' + this.tableName + ' (ID, data) VALUES ($1, $2) ON CONFLICT (ID) DO UPDATE SET data = EXCLUDED.data;', [
                key,
                jsonValue,
            ]));
            return value;
        });
    }
}
exports.PostgresDriver = PostgresDriver;
//# sourceMappingURL=PostgresDriver.js.map