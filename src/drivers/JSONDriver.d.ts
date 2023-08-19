import { CacheDriver } from "./CacheDriver";
import { ElementKey, ElementValue } from "../types/index";
export declare class JSONDriver extends CacheDriver {
    readonly file_exists: boolean;
    readonly path: string;
    constructor(path?: string, path_resolve?: boolean);
    writeFile(data?: {}): Promise<void>;
    readFile(): string;
    getCollection(): void;
    set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)>;
    clear(): Promise<void>;
    delete(key: ElementKey): Promise<(ElementValue | undefined)>;
}
