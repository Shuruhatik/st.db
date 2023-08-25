

import crypto from "node:crypto";

type ElementValue = string | number | boolean | object | null | (string | object | number | boolean)[];
type ElementKey = string;
type Element = { ID: ElementKey, data: ElementValue }


interface Driver {
  connect?(): Promise<void>;
  getCollection?(): void;
  disconnect?(): Promise<void>;
  writeFile?(data?: {}): Promise<void>;
  readFile?(): string;
  clear(): Promise<void>;
  delete(key: ElementKey): Promise<ElementValue | undefined|void>;
  all(): Promise<{
    ID: ElementKey;
    data: ElementValue;
  }[]>;
  has(key: ElementKey): Promise<boolean>;
  get(key: ElementKey): Promise<ElementValue | undefined>;
  set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
}
type DatabaseOptions = {
  encryptionOptions: any;
  autoDecrypt?: boolean,
  encryption?: { password: string, digest?: string },
  driver?: Driver
}

export { DatabaseOptions, Driver, Element, ElementKey, ElementValue }