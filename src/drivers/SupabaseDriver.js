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
exports.SupabaseDriver = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
class SupabaseDriver {
    constructor(config, tableName = 'main') {
        this.config = config;
        this.tableName = tableName;
        this.supabase = (0, supabase_js_1.createClient)(config.supabaseUrl, config.supabaseKey);
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.supabase.from(this.tableName).delete();
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.supabase.from(this.tableName).delete().eq('ID', key);
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.supabase.from(this.tableName).select('*');
            if (error) {
                throw error;
            }
            return data.map((row) => ({
                ID: row.ID,
                data: row.data,
            }));
        });
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.supabase
                .from(this.tableName)
                .select('ID')
                .eq('ID', key);
            return data.length > 0;
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.supabase
                .from(this.tableName)
                .select('data')
                .eq('ID', key);
            return data.length > 0 ? data[0].data : undefined;
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.supabase
                .from(this.tableName)
                .upsert([
                {
                    ID: key,
                    data: value,
                },
            ]);
            if (error) {
                throw error;
            }
            return data[0].data;
        });
    }
}
exports.SupabaseDriver = SupabaseDriver;
//# sourceMappingURL=SupabaseDriver.js.map