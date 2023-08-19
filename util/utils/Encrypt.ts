import {ElementValue} from "../types/index"
import { randomBytes, pbkdf2, createCipheriv, createDecipheriv } from 'node:crypto';

export class Encrypt {
    public _deriveKeyOptions: {
      salt:any,
      iterations:any,
      keylen:any,
      digest:any
    }
    static defaultDeriveKeyOpts = {
      salt: 's41t',
      iterations: 10000,
      keylen: 32,
      digest: 'sha512',
    };
  
    constructor(public password:string,options:any = {}) {
      this._deriveKeyOptions = {
        ...Encrypt.defaultDeriveKeyOpts,
        ...options,
      };
    }
  
    deriveKey(password:string) {
      return new Promise((resolve, reject) => {
        pbkdf2(
          password,
          this._deriveKeyOptions.salt,
          this._deriveKeyOptions.iterations,
          this._deriveKeyOptions.keylen,
          this._deriveKeyOptions.digest,
          (err, derivedKey) => {
            if (err) reject(err);
            else resolve(derivedKey);
          }
        );
      });
    }
  
    encrypt(str:string) {
      const derivedKey = this.deriveKey(this.password);
  
      const randomInitVector = randomBytes(16);
  
      const aesGCM = createCipheriv('aes-256-gcm', derivedKey as unknown as Buffer, randomInitVector);
  
      let encrypted = aesGCM.update(str, 'utf8', 'hex');
      encrypted += aesGCM.final('hex');
  
      const initVectorHex = randomInitVector.toString('hex');
  
      return `${initVectorHex}:${encrypted}`;
    }
  
    decrypt(encryptedStr:string) {
      const derivedKey = this.deriveKey(this.password);
  
      const [initVectorHex, encryptedHex] = encryptedStr.split(':');
  
      const randomInitVector = Buffer.from(initVectorHex, 'hex');
  
      const aesGCM = createCipheriv('aes-256-gcm', derivedKey as unknown as Buffer, randomInitVector);
  
      let decrypted = aesGCM.update(encryptedHex, 'hex', 'utf8');
  
      return decrypted + aesGCM.final('utf8');
    }
  
    static isEncryptedString(str:string) {
      // Check if the input string matches the expected format for encrypted strings
      return typeof str === 'string' && /^[0-9a-f]{32}:[0-9a-f]+$/i.test(str);
    }
  }
    