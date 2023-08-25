import mysql from 'mysql2/promise';
import { ElementKey, ElementValue, Driver } from '../types/index';

export class MySQLDriver implements Driver {
  private _connection: mysql.Connection | null = null;

  constructor(private config: mysql.ConnectionOptions, private tableName = "main") { }

  public async connect() {
    if (!this._connection) {
      this._connection = await mysql.createConnection(this.config);
      await this.initializeTable();
    }
  }

  public async disconnect() {
    if (this._connection) {
      await this._connection.end();
      this._connection = null;
    }
  }

  private async initializeTable() {
    await this._connection?.execute(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        ID VARCHAR(255) PRIMARY KEY,
        data TEXT
      );
    `);
  }

  public async clear() {
    await this.connect();
    await this._connection?.execute(`DELETE FROM ${this.tableName} ;`);
  }

  public async delete(key: ElementKey): Promise<void> {
    await this.connect();
    await this._connection?.execute('DELETE FROM ' + this.tableName + '  WHERE ID = ?;', [key]);
  }

  public async all(): Promise<{ ID: ElementKey; data: ElementValue }[]> {
    await this.connect();
    const [rows]: any = await this._connection?.execute('SELECT ID, data FROM ' + this.tableName + ';');
    return rows.map((row: any) => {
      try {
        return { ID: row.ID, data: JSON.parse(row.data) };
      } catch (error) {
        return { ID: row.ID, data: null };
      }
    });
  }

  public async has(key: ElementKey): Promise<boolean> {
    await this.connect();
    const [rows]: any = await this._connection?.execute('SELECT ID FROM ' + this.tableName + ' WHERE ID = ?;', [key]);
    return rows.length > 0;
  }

  public async get(key: ElementKey): Promise<ElementValue | undefined> {
    await this.connect();
    const [rows]: any = await this._connection?.execute('SELECT data FROM ' + this.tableName + ' WHERE ID = ?;', [key]);
    const row = rows[0];
    return row && row.data ? JSON.parse(row.data) : undefined;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    await this.connect();

    await this._connection?.execute('INSERT INTO ' + this.tableName + ' (ID, data) VALUES (?, ?) ON DUPLICATE KEY UPDATE data = VALUES(data);', [
      key,
      JSON.stringify(value),
    ]);
    return value;
  }
}
