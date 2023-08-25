
import { ElementKey, ElementValue, Driver } from "../types/index"

export class CacheDriver implements Driver {
  constructor(public collection = new Map<ElementKey, ElementValue>()) { }
  public async clear() {
    this.collection.clear();
  }

  public async all(): Promise<{ ID: ElementKey, data: ElementValue }[]> {
    this.getCollection();
    return Array.from(this.collection).map((value) => ({ ID: value[0], data: value[1] }))
  }

  public async has(key: ElementKey): Promise<(boolean)> {
    this.getCollection();
    return this.collection.has(key);
  }
  public async delete(key: ElementKey): Promise<(ElementValue | undefined)> {
    this.getCollection();
    return this.collection.delete(key);
  }
  public async get(key: ElementKey): Promise<(ElementValue | undefined)> {
    this.getCollection();
    return this.collection.get(key);
  }

  public getCollection(): void {
    this.collection = this.collection;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)> {
    this.getCollection();
    this.collection.set(key, value);
    return this.collection.get(key);
  }
}