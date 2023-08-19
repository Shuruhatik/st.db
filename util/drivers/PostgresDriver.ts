import { Client } from 'pg';
import { ElementKey, ElementValue } from '../types/index';

export class PostgresDriver {
  private _client: Client | null = null;

  constructor(private config: any, private tableName = "main") { }

  public async connect() {
    if (!this._client) {
      this._client = new Client(this.config);
      await this._client.connect();
      await this.initializeTable();
    }
  }

  public async disconnect() {
    if (this._client) {
      await this._client.end();
      this._client = null;
    }
  }

  private async initializeTable() {
    await this._client?.query(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        ID VARCHAR(255) PRIMARY KEY,
        data JSON
      );
    `);
  }

  public async clear() {
    await this.connect();
    await this._client?.query(`DELETE FROM ${this.tableName};`);
  }

  public async delete(key: ElementKey): Promise<void> {
    await this.connect();
    await this._client?.query('DELETE FROM ' + this.tableName + ' WHERE ID = $1;', [key]);
  }

  public async all(): Promise<{ ID: ElementKey; data: ElementValue }[]> {
    await this.connect();
    const { rows }: any = await this._client?.query('SELECT ID, data FROM ' + this.tableName + ';');
    return rows.map((row: any) => {
      try {
        return { ID: row.id, data: row.data };
      } catch (error) {
        return { ID: row.id, data: null };
      }
    });
  }

  public async has(key: ElementKey): Promise<boolean> {
    await this.connect();
    const { rows }: any = await this._client?.query('SELECT ID FROM ' + this.tableName + ' WHERE ID = $1;', [key]);
    return rows.length > 0;
  }

  public async get(key: ElementKey): Promise<ElementValue | undefined> {
    await this.connect();
    const { rows }: any = await this._client?.query('SELECT data FROM ' + this.tableName + ' WHERE ID = $1;', [key]);
    const row = rows[0];
    return row && row.data ? row.data : undefined;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    await this.connect();

    const jsonValue = JSON.stringify(value);
  
    await this._client?.query('INSERT INTO ' + this.tableName + ' (ID, data) VALUES ($1, $2) ON CONFLICT (ID) DO UPDATE SET data = EXCLUDED.data;', [
      key,
      jsonValue,
    ]);
    return value;
  }
  
}
