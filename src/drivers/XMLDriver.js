"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLDriver = void 0;
const node_fs_1 = require("node:fs");
const utils_1 = require("../utils");
const CacheDriver_1 = require("./CacheDriver");
class XMLDriver extends CacheDriver_1.CacheDriver {
    constructor(path = "data", path_resolve = true) {
        super();
        this.path = (0, utils_1.pathResolve)(path, "xml", path_resolve);
        this.file_exists = (0, node_fs_1.existsSync)(this.path);
        if (!(0, node_fs_1.existsSync)(this.path))
            this.writeFile({});
    }
    ;
    writeFile(data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, node_fs_1.writeFileSync)(this.path, utils_1.XML.stringify(data));
        });
    }
    readFile() {
        if (!(0, node_fs_1.existsSync)(this.path))
            return `{}`;
        let readFileData = (0, node_fs_1.readFileSync)(this.path, "utf-8");
        return utils_1.XML.parse(readFileData);
    }
    ;
    getCollection() {
        let readFileData = this.readFile();
        this.collection = new Map(Object.entries(readFileData));
    }
    ;
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            this.collection.set(key, value);
            this.writeFile(Object.fromEntries(Array.from(this.collection)));
            return this.collection.get(key);
        });
    }
    ;
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            this.collection.clear();
            this.writeFile(Object.fromEntries(Array.from(this.collection)));
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            this.collection.delete(key);
            this.writeFile(Object.fromEntries(Array.from(this.collection)));
            return this.collection.get(key);
        });
    }
    ;
}
exports.XMLDriver = XMLDriver;
//# sourceMappingURL=XMLDriver.js.map