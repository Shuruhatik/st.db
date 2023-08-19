import { FirebaseDriver, CacheDriver, JSONDriver, YAMLDriver, XMLDriver, MongoDriver, PostgresDriver, MySQLDriver, SQLDriver } from "../drivers";
declare type ElementValue = string | number | boolean | object | null | (string | object | number | boolean)[];
declare type ElementKey = string;
declare type Element = {
    ID: ElementKey;
    data: ElementValue;
};
declare type Drivers = FirebaseDriver | CacheDriver | JSONDriver | YAMLDriver | XMLDriver | MongoDriver | PostgresDriver | MySQLDriver | SQLDriver;
declare type DatabaseOptions = {
    encryptionOptions: any;
    autoDecrypt?: boolean;
    encryption?: {
        password: string;
        digest?: string;
    };
    driver?: Drivers;
};
export { DatabaseOptions, Drivers, Element, ElementKey, ElementValue };
