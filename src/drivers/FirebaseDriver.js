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
exports.FirebaseDriver = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
class FirebaseDriver {
    constructor(firebaseConfig, collectionName = "main") {
        this.firebaseConfig = firebaseConfig;
        this.collectionName = collectionName;
        const app = (0, app_1.initializeApp)(firebaseConfig);
        this.db = (0, firestore_1.getFirestore)(app);
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(this.db, this.collectionName));
            const batch = (0, firestore_1.writeBatch)(this.db);
            querySnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            yield batch.commit();
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const querySnapshot = yield (0, firestore_1.getDocs)((0, firestore_1.collection)(this.db, this.collectionName));
            return querySnapshot.docs.map((doc) => ({
                ID: doc.id,
                data: doc.data().data,
            }));
        });
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const documentSnapshot = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(this.db, this.collectionName, key));
            return documentSnapshot.exists();
        });
    }
    get(key) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const documentSnapshot = yield (0, firestore_1.getDoc)((0, firestore_1.doc)(this.db, this.collectionName, key));
            return documentSnapshot.exists() ? (_a = documentSnapshot.data()) === null || _a === void 0 ? void 0 : _a.data : undefined;
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, firestore_1.setDoc)((0, firestore_1.doc)(this.db, this.collectionName, key), { data: value });
            return value;
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, firestore_1.deleteDoc)((0, firestore_1.doc)(this.db, this.collectionName, key));
        });
    }
}
exports.FirebaseDriver = FirebaseDriver;
//# sourceMappingURL=FirebaseDriver.js.map