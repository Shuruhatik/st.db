import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc, deleteDoc, Firestore, writeBatch } from 'firebase/firestore';
import { ElementKey, ElementValue } from '../types/index';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export class FirebaseDriver {
  private db: Firestore;

  constructor(private firebaseConfig: FirebaseConfig, private collectionName: string="main") {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  public async clear() {
    const querySnapshot = await getDocs(collection(this.db, this.collectionName));
    const batch = writeBatch(this.db);

    querySnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();
  }

  public async all(): Promise<{ ID: ElementKey; data: ElementValue }[]> {
    const querySnapshot = await getDocs(collection(this.db, this.collectionName));
    return querySnapshot.docs.map((doc) => ({
      ID: doc.id,
      data: doc.data().data,
    }));
  }

  public async has(key: ElementKey): Promise<boolean> {
    const documentSnapshot = await getDoc(doc(this.db, this.collectionName, key));
    return documentSnapshot.exists();
  }

  public async get(key: ElementKey): Promise<ElementValue | undefined> {
    const documentSnapshot = await getDoc(doc(this.db, this.collectionName, key));
    return documentSnapshot.exists() ? documentSnapshot.data()?.data : undefined;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    await setDoc(doc(this.db, this.collectionName, key), { data: value });
    return value;
  }

  public async delete(key: ElementKey): Promise<void> {
    await deleteDoc(doc(this.db, this.collectionName, key));
  }
}
