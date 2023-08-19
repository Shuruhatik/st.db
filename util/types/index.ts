

import { FirebaseDriver, CacheDriver, JSONDriver, YAMLDriver, XMLDriver, MongoDriver, PostgresDriver, MySQLDriver, SQLDriver } from "../drivers"
import crypto from "node:crypto";

type ElementValue = string | number | boolean | object | null | (string | object | number | boolean)[];
type ElementKey = string;
type Element = { ID: ElementKey, data: ElementValue }
type Drivers = FirebaseDriver | CacheDriver | JSONDriver | YAMLDriver | XMLDriver | MongoDriver | PostgresDriver | MySQLDriver | SQLDriver
type DatabaseOptions = {
  encryptionOptions: any;
  autoDecrypt?: boolean,
  encryption?: { password: string, digest?: string },
  driver?: Drivers
}

export { DatabaseOptions, Drivers, Element, ElementKey, ElementValue }