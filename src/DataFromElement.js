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
exports.DataFromElement = void 0;
const Database_js_1 = require("./Database.js");
const util_js_1 = require("./util.js");
const Collection_js_1 = require("./Collection.js");
class DataFromElement extends Database_js_1.Database {
    constructor(key, database) {
        if (!(database instanceof Database_js_1.Database))
            throw Error((0, util_js_1.formatErrorMessage)('Database class must be set correctly', 'DataFromElement', 'Parameter', "database"));
        super(database.inputPath, database.options);
        this.database = database;
        this.ID = key;
        this.typeof = { ID: typeof this.ID, data: database.type(this.ID) };
        if (this.typeof.data != "object" && this.typeof.data != "array")
            throw Error((0, util_js_1.formatErrorMessage)('The value of the element must be object', 'DataFromElement', 'Parameter', "key"));
    }
    /**
     * @description to get the value of the element
     */
    get cache() {
        if (this.database.type(this.ID) != "object" && this.database.type(this.ID) != "array")
            throw Error((0, util_js_1.formatErrorMessage)('The value of the element must be object', 'DataFromElement', 'Parameter', "key"));
        let readFileData = this.database.get(this.ID);
        return readFileData.length <= 1 ? new Collection_js_1.Collection() : new Collection_js_1.Collection(this.database.storageStyle.reading_format(readFileData));
    }
    /**
     * @description Write the data in the file
     * @example <db>.writeFileSync()
     * @param {*} data
     * @returns {Promise<void>}
    */
    writeFileSync(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.set(this.ID, this.database.storageStyle.writing_format(collection.map));
        });
    }
}
exports.DataFromElement = DataFromElement;
//# sourceMappingURL=DataFromElement.js.map