import { MongoClient, Collection, MongoClientOptions } from 'mongodb';
import { ElementKey, ElementValue } from '../types/index';

export class MongoDriver {
  private _client: MongoClient | null = null;
  private _collection: Collection<any> | null = null;

  constructor(private mongo_url: string, private databaseName: string="Database", private collectionName: string="collection", private connectionOptions?: MongoClientOptions) { }

  public async connect() {
    if (!this._client) {
      this._client = await MongoClient.connect(this.mongo_url, this.connectionOptions);
      const db = this._client.db(this.databaseName);
      this._collection = db.collection(this.collectionName);
    }
  }

  public async disconnect() {
    if (this._client) {
      await this._client.close();
      this._client = null;
      this._collection = null;
    }
  }

  public async clear() {
    await this.connect();
    await this._collection?.deleteMany({});
  }

  public async all(): Promise<{ ID: ElementKey; data: ElementValue }[]> {
    await this.connect();
    const documents = await this._collection?.find().toArray();
    return documents?.map((doc: any) => {
      try {
        return { ID: doc._id, data: JSON.parse(doc.data) };
      } catch (error) {
        return { ID: doc._id, data: null };
      }
    }) || [];
  }

  public async has(key: ElementKey): Promise<boolean> {
    await this.connect();
    const count = await this._collection?.countDocuments({ _id: key });
    return count !== undefined && count > 0;
  }

  public async get(key: ElementKey): Promise<ElementValue | undefined> {
    await this.connect();
    const document = await this._collection?.findOne({ _id: key });
    return document && document.data ? JSON.parse(document.data) : undefined;
  }

  public async set(key: ElementKey, value: ElementValue): Promise<ElementValue | undefined> {
    await this.connect();
    const doc = { _id: key, data: JSON.stringify(value) };
    await this._collection?.updateOne({ _id: key }, { $set: doc }, { upsert: true });
    return value;
  } 
  
  public async delete(key: ElementKey): Promise<void> {
    await this.connect();
    await this._collection?.deleteOne({ _id: key });
  }
}
