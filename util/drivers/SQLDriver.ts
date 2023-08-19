import sqlDatabase from 'better-sqlite3';
import { ElementKey, ElementValue } from '../types/index';
import { existsSync, writeFileSync } from "node:fs";
import { pathResolve } from "../utils"

export class SQLDriver {
  private readonly _db: sqlDatabase.Database;
  readonly file_exists: boolean;
  readonly path: string;

  constructor(path: string = "data", private tableName = "main", path_resolve: boolean = true) {
    this.path = pathResolve(path, "sqlite", path_resolve);
    this.file_exists = existsSync(this.path)
    if (!existsSync(this.path)) writeFileSync(this.path, "");

    this._db = sqlDatabase(this.path);
    this.initializeTable();
  }

  private initializeTable() {
    this._db.exec(`
      CREATE TABLE IF NOT EXISTS ${this.tableName}  (
        ID TEXT PRIMARY KEY,
        data TEXT
      );
    `);
  }

  public async clear() {
    this._db.exec('DELETE FROM ' + this.tableName + ';');
  }

  public async all(): Promise<{ ID: ElementKey; data: ElementValue }[]> {
    const rows = this._db.prepare('SELECT ID, data FROM ' + this.tableName + ';').all();
    return rows.map((row: any) => {
      try {
        return { ID: row.ID, data: JSON.parse(row.data) };
      } catch (error) {
        return { ID: row.ID, data: null };
      }
    });
  }


  public async has(key: ElementKey): Promise<boolean> {
    const row = this._db.prepare('SELECT ID FROM ' + this.tableName + ' WHERE ID = ?;').get(key);
    return !!row;
  }

  public async get(key: ElementKey): Promise<ElementValue | undefined> {
    const row: { data: ElementValue | undefined } | any = this._db.prepare('SELECT data FROM ' + this.tableName + ' WHERE ID = ?;').get(key);
    return row && row.data ? JSON.parse(row.data) : row;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    this._db.transaction(() => {
      this._db.prepare('INSERT OR REPLACE INTO ' + this.tableName + ' (ID, data) VALUES (?, ?);').run(key, JSON.stringify(value));
    })();
    return value;
  }

  public async delete(key: ElementKey): Promise<void> {
    this._db.prepare('DELETE FROM ' + this.tableName + ' WHERE ID = ?;').run(key);
  }
}
