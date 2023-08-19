import { existsSync, writeFileSync, readFileSync, statSync } from "node:fs";
import { pathResolve } from "../utils"
import { CacheDriver } from "./CacheDriver";
import { ElementKey, ElementValue } from "../types/index"
import YAML from "yaml";

export class YAMLDriver extends CacheDriver {
  readonly file_exists: boolean;
  readonly path: string;

  constructor(path: string="data", path_resolve: boolean = true, fileExtension: ("yml" | "yaml") = "yaml") {
    super()
    this.path = pathResolve(path, fileExtension, path_resolve);
    this.file_exists = existsSync(this.path)
    if (!existsSync(this.path)) this.writeFile({});
  };

  public async writeFile(data = {}) {
    return await writeFileSync(this.path, YAML.stringify(data))
  }

  public readFile(): string {
    if (!existsSync(this.path)) return `{}`;
    let readFileData = readFileSync(this.path, "utf-8");
    let yaml_parse = YAML.parse(readFileData);
    return !yaml_parse || yaml_parse && yaml_parse.length <= 2 ? {} : yaml_parse
  };

  public getCollection(): void {
    let readFileData = this.readFile();
    this.collection = new Map(Object.entries(readFileData));
  };

  public async set(key: ElementKey, value: ElementValue): Promise<(ElementValue | undefined)> {
    this.getCollection();
    this.collection.set(key, value);
    this.writeFile(Object.fromEntries(Array.from(this.collection)))
    return this.collection.get(key);
  };
  public async clear() {
    this.getCollection();
    this.collection.clear();
    this.writeFile(Object.fromEntries(Array.from(this.collection)))
  }

  public async delete(key: ElementKey): Promise<(ElementValue | undefined)> {
    this.getCollection();
    this.collection.delete(key);
    this.writeFile(Object.fromEntries(Array.from(this.collection)))
    return this.collection.get(key);
  };
}