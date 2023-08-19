export declare class Encrypt {
    password: string;
    _deriveKeyOptions: {
        salt: any;
        iterations: any;
        keylen: any;
        digest: any;
    };
    static defaultDeriveKeyOpts: {
        salt: string;
        iterations: number;
        keylen: number;
        digest: string;
    };
    constructor(password: string, options?: any);
    deriveKey(password: string): Promise<unknown>;
    encrypt(str: string): string;
    decrypt(encryptedStr: string): string;
    static isEncryptedString(str: string): boolean;
}
