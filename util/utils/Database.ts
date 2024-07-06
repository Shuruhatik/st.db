import { JSONDriver } from "../drivers/JSONDriver"
import { Encrypt } from "./Encrypt";
import { DatabaseOptions, Driver, Element, ElementKey, ElementValue } from "../types/"
import { formatErrorMessage } from "./index";

export class Database {
  private readonly driver: Driver
  readonly readyInDate: Date;
  readonly autoDecrypt: Boolean;
  private encryption?: Encrypt;
  private encryptionOptions?: object
  constructor(readonly options?: DatabaseOptions) {
    if (!options?.driver) this.driver = new JSONDriver();
    else this.driver = options.driver
    this.readyInDate = new Date();
    if (options?.encryption && options?.encryption.password) this.encryption = new Encrypt(options?.encryption.password, options?.encryptionOptions)
    if (options?.autoDecrypt === true || !options?.autoDecrypt && this.encryption) this.autoDecrypt = true;
    else this.autoDecrypt = false;
  }

  /**
  * @description set element in database
  * @example <db>.set({key:`version`,value:"v6"})
  * @param {*} key Type a key for the element
  * @param {*} value Type a value for the element
  * @returns {Promise<ElementInData>}
  */
  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "set"))

    return await this.driver.set(key, this.encryption ? this.encryptString(JSON.stringify(value)) : value);
  }
  /**
  * @description delete element from database
  * @example <db>.delete(`version`})
  * @param {*} key Type a key for the element
  * @returns {Promise<boolean>}
  */
  async remove(key: any): Promise<ElementValue | undefined | void> {
    return await this.delete(key);
  }
  /**
  * @description delete element from database
  * @example <db>.delete(`version`)
  * @param {*} key Type a key for the element
  * @returns Promise<boolean>
  */
  async delete(key: any): Promise<ElementValue | undefined | void> {
    return await this.driver.delete(key);
  }
  /**
  * @description Returns all elements in Database
  * @example <db>.all()
  * @param {*} limit default = 0
  * @returns {Element[]}
  */
  async all(limit: number = 0): Promise<Element[]> {
    let all_data = await this.driver.all();
    return limit > 0 ? all_data.splice(0, limit) : all_data
  }
  /**
  * @description To get the value of a specific key element
  * @example <db>.get(`version`)
  * @param {*} key Type a key for the element
  * @returns Boolean
  */
  async get(key: ElementKey): Promise<ElementValue | void> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "get"))
    let element_value = await this.driver.get(key)
    return element_value && this.autoDecrypt ? this.decryptString(`${element_value}`) : element_value
  }
  /**
  * @description To fetch the value of a specific key element
  * @example <db>.fetch(`version`)
  * @param {*} key Type a key for the element
  * @returns {"boolean"}
  */
  async fetch(key: ElementKey): Promise<ElementValue | void> {
    return await this.get(key)
  }
  /**
   * @description Removes the first element of the array
   * @example <db>.shift(`hello`)
   * @param key
   * @returns {Promise<ElementInData>}
   */
  async shift(key: ElementKey): Promise<ElementValue | undefined> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "shift"))
    if (await this.has(key) == false) return this.set(key, []);
    else {
      let value = this.get(key)
      if (Array.isArray(value)) { value.shift(); return await this.set(key, value) }
      else return await this.set(key, []);
    }
  }
  /**
   * @description Removes the last element of the array
   * @example <db>.pop(`hello`)
   * @param key
   * @returns {"any"}
   */
  async pop(key: ElementKey): Promise<ElementValue | undefined> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "shift"))
    if (await this.has(key) == false) return this.set(key, []);
    else {
      let value = this.get(key)
      if (Array.isArray(value)) { value.pop(); return await this.set(key, value) }
      else return await this.set(key, []);
    }
  }
  /**
  * @description To pull an element from an array into data
  * @example <db>.pull(`version`,"v6")
  * @param {*} key Type a key for the element
  * @returns {Promise<ElementInData>}
  */
  async pull(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "pull"))
    if (await this.has(key) == false) throw Error(formatErrorMessage("There is no data to execute on it", 'Database', 'Method', "pull"))
    let element_value: any = await this.get(key);
    return await this.set(key, element_value?.filter((v: ElementValue) => v !== value))
  }
  /**
  * @description To push an element to an array into data
  * @example <db>.push(`version`,"v6")
  * @param {*} key Type a key for the element
  * @returns {Promise<void>}
  */
  async push(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "push"))
    let element_value = await this.get(key)
    let new_values = element_value && Array.isArray(element_value) ? element_value : []
    if (Array.isArray(value)) value.forEach((v) => new_values.push(v))
    else new_values.push(value)

    return await this.set(key, new_values)
  }
  /**
  * @description To unshift an element to an array into data
  * @example <db>.unshift(`version`,["v6"])
  * @param {*} key Type a key for the element
  * @returns {"boolean"}
  */
  async unshift(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "push"))
    let element_value = await this.get(key)
    let new_values = element_value && Array.isArray(element_value) ? element_value : []
    if (Array.isArray(value)) value.forEach((v) => new_values.unshift(v))
    else new_values.unshift(value)

    return await this.set(key, new_values)
  }
  /**
   * @description To get the value type of a given key element
   * @example <db>.type(`st.db`)
   * @param {*} key Type a key for the element
   * @returns {"symbol" | "array" | "undefined" | "string" | "number" | "bigint" | "boolean" | "object"}
   */
  async type(key: ElementKey): Promise<ElementValue | "array"> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "type"))
    let element_value = await this.get(key)
    return Array.isArray(element_value) || element_value instanceof Array ? "array" : typeof element_value
  }
  /**
  * @description Checking an item from the database if it exists or not
  * @example <db>.has(`version`)
  * @param {*} key Type a key for the element
  * @returns {"boolean"}
  */
  async has(key: ElementKey): Promise<boolean> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "has"))
    return await this.driver.has(key);
  }
  /**
   * @param {*} value 
   * @returns {"string"}
   */
  encryptString(value: string = "data"): string {
    if (!this.encryption) return "";
    return this.encryption.encrypt(JSON.stringify(value));
  }
  /**
  * @description Returns database connection uptime!
  * @return {"number"}
  * @example console.log(`Database is up for ${db.uptime} ms.`);
  */
  get uptime(): number {
    if (!this.readyInDate) return 0
    else return Date.now() - this.readyInDate.getTime();
  }
  /**
   * @example <db>.valuesAll()
   * @returns {"any[]"}
   */
  async valuesAll(): Promise<ElementValue[]> {
    let all_elements = await this.all()
    return all_elements.map((element) => element.data);
  }
  /**
   * @example <db>.keysAll()
   * @returns {"any[]"}
   */
  async keysAll(): Promise<ElementKey[]> {
    let all_elements = await this.all()
    return all_elements.map((element) => element.ID);
  }
  /**
   * @param {*} value 
   * @returns {"number","string"}
   */
  decryptString(value: string): (string | number | void) {
    if (!this.encryption) return;
    try {
      const resolve = JSON.parse(this.encryption.decrypt(value))
      return Database.isNumeric(resolve) == true ? +resolve : resolve
    } catch (e) { console.error(e); return value }
  }
  /**
   * @param {*} value 
   * @returns {"boolean"}
   */
  isEncryptString(value: any): boolean | void {
    return Encrypt.isEncryptedString(value)
  }
  /**
   * @description Clean all data
   * @example <db>.clear()
   * @returns {Promise<void>}
   */
  async clear(): Promise<void> {
    return await this.driver.clear();
  }
  /**
   * @description Delete all data
   * @example <db>.deleteAll()
   * @returns {Promise<void>}
   */
  async deleteAll(): Promise<void> {
    return await this.clear();
  }
  /**
  * @description Check if the key starts with the key in the database
  * @example <db>.startsWith({key:`st.db`})
  * @param {*} key
  * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
  */
  async startsWith(key: ElementKey): Promise<Element[]> {
    let all_elements = await this.all();
    return all_elements.filter((element: Element) => element.ID.startsWith(key));
  }
  /**
  * @description Check if the key ends with the key in the database
  * @example <db>.endsWith({key:`st.db`})
  * @param {*} key
  * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
  */
  async endsWith(key: ElementKey): Promise<Element[]> {
    let all_elements = await this.all();
    return all_elements.filter((element: Element) => element.ID.endsWith(key));
  }
  /**
   * @description Filter the database by the key
   * @example <db>.filter(t => t == "test")
   * @param {ElementKey} key
   * @param {*} callback
   * @returns {Promise<{ ID: any, typeof: { ID: string, data: string }, data: any }[]>}
   */
  async filter(key: ElementKey, callback: (element: Element, index: Number, elements: Element[]) => Element): Promise<Element[]> {
    let all_elements = await this.all();
    return all_elements.filter(callback);
  }
  /**
  * @description Check if the key includes with the key in the database
  * @example <db>.includes({key:`st.db`})
  * @param {*} key
  * @returns {Promise<any[]>}
  */
  async includes(key: ElementKey): Promise<Element[]> {
    let all_elements = await this.all();
    return all_elements.filter((element: Element) => element.ID.includes(key));
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
  async math(key: ElementKey, operator?: ("-" | "+" | "*" | "/"), new_value?: (string | number)): Promise<ElementValue | undefined | void> {
    if (!key) throw Error(formatErrorMessage("No key found", 'Database', 'Method', "math"))
    if (!new_value && new_value != 0 || !key || !operator) throw Error(formatErrorMessage("No key or value or operator found", 'Database', 'Method', "math"))
    let element_value = await this.get(key)
    let old_value = element_value && Database.isNumeric(element_value.toString()) ? +element_value : 0
    return await this.set(key, eval(`${old_value} ${operator} ${+new_value}`))
  }
  /**
   * @example <db>.add(`data`,2)
   * @param {string} key Data key
   * @param {number} value The value, must be a number
   * @returns {Promise<void>}
   */
  async add(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "add"))
    await this.math(key, "+", `${value}`);
  }
  /**
   * @example <db>.multiply("coins", 2)
   * @param {string} key Data key
   * @param {number} value The value, must be a number
   * @returns {Promise<void>}
   */
  async multiply(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "multiply"))
    await this.math(key, "*", `${value}`);
  }
  /**
   * @example <db>.double("coins")
   * @param {string} key Data key
   * @param {number} value The value, must be a number
   * @returns {Promise<void>}
   */
  async double(key: ElementKey): Promise<ElementValue | undefined | void> {
    if (!key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "double"))
    await this.math(key, "*", 2);
  }
  /**
   * @example <db>.subtract("coins", 50)
   * @param {string} key Data key
   * @param {number} value The value, must be a number
   * @returns {Promise<void>}
   */
  async subtract(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined | void> {
    if (!value && value != 0 || !key) throw Error(formatErrorMessage("No key or value found", 'Database', 'Method', "subtract"))
    await this.math(key, "-", `${value}`);
  }
  /**
   * @description Check if the value is numeric
   * @param {*} val 
   * @returns {"boolean"}
   */
  static isNumeric(val: string | number): boolean {
    return /^-?\d+$/.test(`${val}`);
  }

}