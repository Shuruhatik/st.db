import { Database } from "./Database";
import { formatErrorMessage } from "./index"
import { ElementKey, ElementValue } from "../types/index"

export class Table extends Database {

  constructor(readonly tableName: string, private readonly _database: Database) {
    if (!(_database instanceof Database)) throw Error(formatErrorMessage('Database class must be set correctly', 'Table', 'Parameter', "database"))
    if ((_database.options?.encryption)) throw Error(formatErrorMessage('It is not supported to enable encryption when using Tables', 'Table', 'Parameter', "database"))

    super(_database.options);
  }

  async get(key: ElementKey): Promise<ElementValue | void> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "get"))
    let table: any = await this.getTable();
    return table[key] && this.autoDecrypt ? this.decryptString(`${table[key]}`) : table[key]
  }

  async has(key: ElementKey): Promise<boolean> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "get"))
    let table: any = await this.getTable();
    return table[key] ? true : false
  }

  public async set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)> {
    let table: any = await this.getTable();
    table[key] = value;
    this._database.set(this.tableName, JSON.stringify(table, null, 4))
    return value;

  };

  async all(limit: number = 0): Promise<{ ID: ElementKey, data: ElementValue }[]> {
    let table: any = await this.getTable();
    return limit > 0 ? Object.entries(table).map((el: any) => ({ ID: el[0], data: el[1] })).splice(0, limit) : Object.entries(table).map((el: any) => ({ ID: el[0], data: el[1] }))
  }

  public async getTable(): Promise<any> {
    if (!await this._database.has(this.tableName)) {
      await this._database.set(this.tableName, JSON.stringify({}, null, 4));
      return {};
    } else {
      let element_value: any = await this._database.get(this.tableName)
      try {
        return JSON.parse(element_value);
      } catch (e) {
        await this._database.set(this.tableName, JSON.stringify({}, null, 4));
        return {}
      }
    }

  }
  public async clear() {
    this._database.set(this.tableName, JSON.stringify({}, null, 4))
  }

  public async delete(key: ElementKey): Promise<(ElementKey | undefined)> {
    let table: any = await this.getTable();
    delete table[key];
    this._database.set(this.tableName, JSON.stringify(table, null, 4))
    return key
  };
}