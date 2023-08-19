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
exports.MongoDriver = void 0;
const mongodb_1 = require("mongodb");
class MongoDriver {
    constructor(mongo_url, databaseName = "Database", collectionName = "collection", connectionOptions) {
        this.mongo_url = mongo_url;
        this.databaseName = databaseName;
        this.collectionName = collectionName;
        this.connectionOptions = connectionOptions;
        this._client = null;
        this._collection = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._client) {
                this._client = yield mongodb_1.MongoClient.connect(this.mongo_url, this.connectionOptions);
                const db = this._client.db(this.databaseName);
                this._collection = db.collection(this.collectionName);
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client) {
                yield this._client.close();
                this._client = null;
                this._collection = null;
            }
        });
    }
    clear() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.deleteMany({}));
        });
    }
    all() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const documents = yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.find().toArray());
            return (documents === null || documents === void 0 ? void 0 : documents.map((doc) => {
                try {
                    return { ID: doc._id, data: JSON.parse(doc.data) };
                }
                catch (error) {
                    return { ID: doc._id, data: null };
                }
            })) || [];
        });
    }
    has(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const count = yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.countDocuments({ _id: key }));
            return count !== undefined && count > 0;
        });
    }
    get(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const document = yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.findOne({ _id: key }));
            return document && document.data ? JSON.parse(document.data) : undefined;
        });
    }
    set(key, value) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const doc = { _id: key, data: JSON.stringify(value) };
            yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.updateOne({ _id: key }, { $set: doc }, { upsert: true }));
            return value;
        });
    }
    delete(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            yield ((_a = this._collection) === null || _a === void 0 ? void 0 : _a.deleteOne({ _id: key }));
        });
    }
}
exports.MongoDriver = MongoDriver;
//# sourceMappingURL=MongoDriver.js.map