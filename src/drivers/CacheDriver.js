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
exports.CacheDriver = void 0;
class CacheDriver {
    constructor(collection = new Map()) {
        this.collection = collection;
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection.clear();
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            return Array.from(this.collection).map((value) => ({ ID: value[0], data: value[1] }));
        });
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            return this.collection.has(key);
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            return this.collection.delete(key);
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            return this.collection.get(key);
        });
    }
    getCollection() {
        this.collection = this.collection;
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getCollection();
            this.collection.set(key, value);
            return this.collection.get(key);
        });
    }
}
exports.CacheDriver = CacheDriver;
//# sourceMappingURL=CacheDriver.js.map