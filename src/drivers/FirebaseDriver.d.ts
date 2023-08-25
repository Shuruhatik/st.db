import { ElementKey, ElementValue, Driver } from '../types/index';
interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}
export declare class FirebaseDriver implements Driver {
    private firebaseConfig;
    private collectionName;
    private db;
    constructor(firebaseConfig: FirebaseConfig, collectionName?: string);
    clear(): Promise<void>;
    all(): Promise<{
        ID: ElementKey;
        data: ElementValue;
    }[]>;
    has(key: ElementKey): Promise<boolean>;
    get(key: ElementKey): Promise<ElementValue | undefined>;
    set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined>;
    delete(key: ElementKey): Promise<void>;
}
export {};
