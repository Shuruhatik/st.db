"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypt = void 0;
const node_crypto_1 = require("node:crypto");
class Encrypt {
    constructor(password, options = {}) {
        this.password = password;
        this._deriveKeyOptions = Object.assign(Object.assign({}, Encrypt.defaultDeriveKeyOpts), options);
    }
    deriveKey(password) {
        return new Promise((resolve, reject) => {
            (0, node_crypto_1.pbkdf2)(password, this._deriveKeyOptions.salt, this._deriveKeyOptions.iterations, this._deriveKeyOptions.keylen, this._deriveKeyOptions.digest, (err, derivedKey) => {
                if (err)
                    reject(err);
                else
                    resolve(derivedKey);
            });
        });
    }
    encrypt(str) {
        const derivedKey = this.deriveKey(this.password);
        const randomInitVector = (0, node_crypto_1.randomBytes)(16);
        const aesGCM = (0, node_crypto_1.createCipheriv)('aes-256-gcm', derivedKey, randomInitVector);
        let encrypted = aesGCM.update(str, 'utf8', 'hex');
        encrypted += aesGCM.final('hex');
        const initVectorHex = randomInitVector.toString('hex');
        return `${initVectorHex}:${encrypted}`;
    }
    decrypt(encryptedStr) {
        const derivedKey = this.deriveKey(this.password);
        const [initVectorHex, encryptedHex] = encryptedStr.split(':');
        const randomInitVector = Buffer.from(initVectorHex, 'hex');
        const aesGCM = (0, node_crypto_1.createCipheriv)('aes-256-gcm', derivedKey, randomInitVector);
        let decrypted = aesGCM.update(encryptedHex, 'hex', 'utf8');
        return decrypted + aesGCM.final('utf8');
    }
    static isEncryptedString(str) {
        // Check if the input string matches the expected format for encrypted strings
        return typeof str === 'string' && /^[0-9a-f]{32}:[0-9a-f]+$/i.test(str);
    }
}
exports.Encrypt = Encrypt;
Encrypt.defaultDeriveKeyOpts = {
    salt: 's41t',
    iterations: 10000,
    keylen: 32,
    digest: 'sha512',
};
//# sourceMappingURL=Encrypt.js.map