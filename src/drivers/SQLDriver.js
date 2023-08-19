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
exports.SQLDriver = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const node_fs_1 = require("node:fs");
const utils_1 = require("../utils");
class SQLDriver {
    constructor(path = "data", tableName = "main", path_resolve = true) {
        this.tableName = tableName;
        this.path = (0, utils_1.pathResolve)(path, "sqlite", path_resolve);
        this.file_exists = (0, node_fs_1.existsSync)(this.path);
        if (!(0, node_fs_1.existsSync)(this.path))
            (0, node_fs_1.writeFileSync)(this.path, "");
        this._db = (0, better_sqlite3_1.default)(this.path);
        this.initializeTable();
    }
    initializeTable() {
        this._db.exec(`
      CREATE TABLE IF NOT EXISTS ${this.tableName}  (
        ID TEXT PRIMARY KEY,
        data TEXT
      );
    `);
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this._db.exec('DELETE FROM ' + this.tableName + ';');
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const rows = this._db.prepare('SELECT ID, data FROM ' + this.tableName + ';').all();
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
        return __awaiter(this, void 0, void 0, function* () {
            const row = this._db.prepare('SELECT ID FROM ' + this.tableName + ' WHERE ID = ?;').get(key);
            return !!row;
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const row = this._db.prepare('SELECT data FROM ' + this.tableName + ' WHERE ID = ?;').get(key);
            return row && row.data ? JSON.parse(row.data) : row;
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this._db.transaction(() => {
                this._db.prepare('INSERT OR REPLACE INTO ' + this.tableName + ' (ID, data) VALUES (?, ?);').run(key, JSON.stringify(value));
            })();
            return value;
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this._db.prepare('DELETE FROM ' + this.tableName + ' WHERE ID = ?;').run(key);
        });
    }
}
exports.SQLDriver = SQLDriver;
//# sourceMappingURL=SQLDriver.js.map