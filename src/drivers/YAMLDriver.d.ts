import { CacheDriver } from "./CacheDriver";
import { ElementKey, ElementValue } from "../types/index";
export declare class YAMLDriver extends CacheDriver {
    readonly file_exists: boolean;
    readonly path: string;
    constructor(path?: string, path_resolve?: boolean, fileExtension?: ("yml" | "yaml"));
    writeFile(data?: {}): Promise<void>;
    readFile(): string;
    getCollection(): void;
    set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)>;
    clear(): Promise<void>;
    delete(key: ElementKey): Promise<(ElementValue | undefined)>;
}
