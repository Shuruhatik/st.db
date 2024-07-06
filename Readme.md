

<div align="center">
	<br />
	<p>
		<a href="https://st-db.netlify.app/"><img src="https://i.imgur.com/N0odZBu.png" alt="st.db" /></a></br>
		<a href="https://www.npmjs.com/package/st.db"><img src="https://img.shields.io/npm/dt/st.db?color=4B68F6&style=for-the-badge" alt="NPM Downloads" /></a>
		<a href="https://www.npmjs.com/package/st.db"><img src="https://img.shields.io/npm/v/st.db?color=04DCC6&style=for-the-badge" alt="npm Version" /></a>
		<a href="https://buymeacoff.ee/shuruhatik"><img src="https://i.imgur.com/GFGXdv0.png" alt="buymeacoff.ee/shuruhatik" /></a>
	</p>
    <p>
		<img src="https://i.imgur.com/0Vm4FRF.png" width="212" height="44" alt="Powered by Shuruhatik"/>
	</p>
</div>

## About
**ST.db** is a powerful npm package that provides an easy-to-use key-value interface for managing various types of databases, both local and cloud-based. This package simplifies the process of reading, writing, and seamlessly switching between different database engines. Whether you're working with local databases or cloud-based solutions, **st.db** offers a straightforward and efficient way to interact with your data.

## Features ✨
-   **Multiple Database Support**: **st.db** supports a variety of database types, including Firebase, Cache, JSON, YAML, XML, MongoDB, PostgreSQL, MySQL, and SQL. This versatility allows you to choose the most suitable database for your project's requirements.
    
-   **Simplified Interface**: With **st.db**, you can access and manipulate your databases using a simple key-value interface. This means you can easily store and retrieve data using intuitive methods.
    
-   **Seamless Switching**: One of the standout features of **st.db** is its ability to seamlessly switch between different database drivers. This means you can transition from a local JSON database to a cloud-based Firebase database without extensive code changes.
    
-   **Efficient Caching**: The CacheDriver provided by **st.db** enables efficient caching of frequently accessed data, optimizing the speed of your data retrieval operations.
    
-   **Cross-Platform Compatibility**: **st.db** is designed to work seamlessly across various platforms and environments. Whether you're developing a web application, mobile app, or desktop software, you can rely on **st.db** to handle your database needs.
    
-   **Encryption and Security**: Protect your sensitive data with built-in encryption options. **st.db** offers encryption features to ensure that your data remains secure, both at rest and during transmission.
    
-   **Customizable Configurations**: Each database driver in **st.db** comes with a range of customizable configurations. Tailor the settings to match your project's performance and scalability requirements.
        
-   **Comprehensive Documentation**: Our package comes with comprehensive and easy-to-understand documentation. Whether you're a beginner or an experienced developer, you'll find the information you need to get started and make the most of **st.db**.

## Installation
To install the **st.db** package and its associated database drivers, follow these steps:

1. Install the main **st.db** package:

```bash
npm install st.db
```

2. Depending on the specific database drivers you intend to use, you will need to install the corresponding packages. Here are the drivers and their associated packages:
	- **JSON and Cache**: 
	The JSONDriver, YAMLDriver, XMLDriver and CacheDriver does not require any additional package installation.

   - **SQL**:
     ```bash
     npm install @st.db/sql
     ```

   - **MongoDB**:
     ```bash
     npm install @st.db/mongodb
     ```

   - **PostgreSQL**:
     ```bash
     npm install @st.db/postgres
     ```

   - **Firebase**:
     ```bash
     npm install @st.db/firebase
     ```

   - **MySQL**:
     ```bash
     npm install @st.db/mysql
     ```

   Note: These packages are marked as optional, meaning you only need to install the ones that correspond to the specific database drivers you plan to use. If you're not using a particular driver, you can skip installing its associated package.

3. Once you have installed the main **st.db** package and the necessary database driver packages, you're ready to start using **st.db** in your project!

## Getting Started

To begin using **st.db** in your project, you can import the necessary database drivers and start interacting with your databases using the key-value interface. For detailed usage instructions and examples, refer to the documentation or examples provided for each individual driver.


## Usage
### Using Node.js `require()`
```javascript
const { Database } = require('st.db');
```

### TypeScript/ES Module support
```js
import { Database } from 'st.db';
```
### [Deno](https://deno.land) support
```js
import { Database } from 'npm:st.db';
```
## Configuring Database Behavior Using `DatabaseOptions`

The `DatabaseOptions` object allows you to customize the behavior of the database when initializing it. Here's a detailed explanation of the available options:

- `encryptionOptions`: This property accepts an object that defines additional options for encryption. These options can be used to fine-tune encryption behavior based on your security requirements.

- `autoDecrypt` (optional): When set to `true`, this property enables automatic decryption of encrypted data as it's retrieved from the database.

- `encryption`: This property accepts an object that provides information for data encryption. It includes the following properties:
  - `password`: The password used for encryption and decryption.
  - `digest` (optional): A cryptographic digest algorithm used to derive the encryption key from the provided password. If not specified, the default is SHA-256.

- `driver`: By setting this property, you can specify the desired database driver from the `Drivers` type mentioned earlier. Choose the appropriate driver that matches your intended database technology.

## Example Configuration
Here's an example of how you might configure the **st.db** package using the `DatabaseOptions` object:

### Using JSONDriver
The `JSONDriver` allows you to store data in a local JSON file. Here's how you can use it:
```javascript
import { Database, JSONDriver } from "st.db";

const options = {
  driver: new JSONDriver("data.json"), // Specify the JSONDriver and the JSON file name
};

const db = new Database(options);
```
### Using YAMLDriver
The `JSONDriver` allows you to store data in a local YAML file. Here's how you can use it:
```javascript
import { Database, YAMLDriver } from "st.db";

const options = {
  driver: new YAMLDriver("data.yaml"), // Specify the YAMLDriver and the JSON file name
};

const db = new Database(options);
```
### Using XMLDriver
The `XMLDriver` allows you to store data in a local XML file. Here's how you can use it:
```javascript
import { Database, XMLDriver } from "st.db";

const options = {
  driver: new XMLDriver("data.xml"), // Specify the XMLDriver and the JSON file name
};

const db = new Database(options);
```
### Using MySQLDriver
The `MySQLDriver` connects to MySQL databases and provides data management features. Here's how to set it up:
```javascript
import { Database } from "st.db";
import { MySQLDriver  } from "@st.db/mysql";

const tableName = "my_table"; // Optional: specify the table name

const mysqlConfig = {
  host: "localhost",
  user: "username",
  password: "password",
  database: "my_database",
};

const options = {
  driver: new MySQLDriver(mysqlConfig,tableName), // Specify the MySQLDriver and the configuration
};

const db = new Database(options);
```

### Using MongoDriver
The `MongoDriver` enables interaction with MongoDB databases. Here's how to use it:
```javascript
import { Database } from "st.db";
import { MongoDriver } from "@st.db/mongodb";
const mongoUrl = "mongodb://localhost:27017";
const dbName = "my_database";
const collectionName = "my_collection";

const options = {
  driver: new MongoDriver(mongoUrl, dbName, collectionName), // Specify the MongoDriver and the connection details
};

const db = new Database(options);
```

### Using FirebaseDriver 
The `FirebaseDriver` enables interaction with Firestore databases. Here's how to use it:
```javascript
import { Database } from "st.db";
import { FirebaseDriver } from "@st.db/firebase";

// Replace these values with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const collectionName = "my_collection"; // Optional: specify the collection name

const options = {
  driver: new FirebaseDriver(firebaseConfig, collectionName), // Specify the FirebaseDriver and the configuration
};

const db = new Database(options);

```
## Using CacheDriver
The `CacheDriver` provides an in-memory caching mechanism. Here's how to utilize it:
```javascript
import { Database, CacheDriver } from "st.db";

const options = {
  driver: new CacheDriver(), // Specify the CacheDriver
};

const db = new Database(options);
```

### Using PostgresDriver
The `PostgresDriver` enables interaction with PostgreSQL databases. Here's how to use it:
```javascript
import { Database } from "st.db";
import { PostgresDriver  } from "@st.db/postgres";

const tableName = "my_table"; // Optional: specify the table name
const postgresConfig = {
  user: "username",
  password: "password",
  host: "localhost",
  database: "my_database",
};

const options = {
  driver: new PostgresDriver(postgresConfig, tableName), // Specify the PostgresDriver and the configuration
};

const db = new Database(options);
```

### Using SQLDriver
The `SQLDriver` provides an interface for general SQL databases. Here's how you can use it:
```javascript
import { Database } from "st.db";
import { SQLDriver  } from "@st.db/sql";
const tableName = "my_table"; // Optional: specify the table name
const options = {
  driver: new SQLDriver("data.sqlite", tableName), // Specify the SQLDriver and the SQLite database file name
};

const db = new Database(options);
```

## Example of methods
- Database
```js
// Set a key-value pair
db.set("version", "v7");

// Get the value of a specific key
const version = await db.get("version");

// Check if a key exists in the database
const exists = await db.has("version");

// Remove a key-value pair from the database
await db.remove("version");

// Retrieve all elements from the database
const allElements = await db.all();

// Perform a math operation and store the result in the database
await db.math("points", "+", 150);

// Clear all data from the database
await db.clear();

// Delete all data from the database
await db.deleteAll();

// Check if a key starts with a specific value
const startsWithElements = await db.startsWith("st.");

// Check if a key ends with a specific value
const endsWithElements = await db.endsWith(".db");

// Filter the database by a specific condition
const filteredElements = await db.filter("key", (element) => element.data === "test");

// Check if a key includes a specific value
const includesElements = await db.includes("st.db");

// Get the type of a specific key's value
const valueType = await db.type("version");

// Get all values in the database
const allValues = await db.valuesAll();

// Get all keys in the database
const allKeys = await db.keysAll();

// Encrypt a string value
const encryptedValue = db.encryptString("secret");

// Get the uptime of the database connection
const uptime = db.uptime;

// Decrypt an encrypted string value
const decryptedValue = db.decryptString(encryptedValue);

// Check if a value is encrypted
const isEncrypted = db.isEncryptString(encryptedValue);

// Push an element into an array in the database
await db.push("myArray", "newElement");

// Remove the last element from an array in the database
const poppedValue = await db.pop("myArray");

// Remove the first element from an array in the database
const shiftedValue = await db.shift("myArray");

// Pull an element from an array in the database
await db.pull("myArray", "elementToRemove");

// Unshift an element into an array in the database
await db.unshift("myArray", "newElement");

// Add a numeric value to an existing value
await db.add("count", 5);

// Multiply an existing value by a numeric factor
await db.multiply("total", 2);

// Double the value of an existing numeric value
await db.double("amount");

// Subtract a numeric value from an existing value
await db.subtract("balance", 50);
```
- Table
- ## Table Class

The `Table` class extends the functionality of the `Database` class to provide additional features for managing data in a specific table.

```javascript
import { Table } from "st.db";

// Create a new table instance
const table = new Table("users", db);

// Set data in the table
await table.set("user1", { name: "Alice", age: 30 });

// Get data from the table
const userData = await table.get("user1");
console.log("User data:", userData);

// Check if a key exists in the table
const userExists = await table.has("user1");
console.log("User exists:", userExists);

// Retrieve all data from the table
const allData = await table.all();
console.log("All data:", allData);

// Clear all data from the table
await table.clear();

/* All methods of the Database class are available to the Table class */
```

## Supported Drivers
-   **FirebaseDriver**: Connect to Firebase Realtime Database.
-   **CacheDriver**: Utilize an efficient caching mechanism.
-   **JSONDriver**: Store data in a local JSON file.
-   **YAMLDriver**: Manage data using YAML files.
-   **XMLDriver**: Store and retrieve data in XML format.
-   **MongoDriver**: Connect to MongoDB databases.
-   **PostgresDriver**: Interact with PostgreSQL databases.
-   **MySQLDriver**: Manage MySQL database operations.
-   **SQLDriver**: Interface for SQL databases.




## Links
-  **[Discord Support Server](https://dsc.gg/shuruhatik)**
-  **[Documentation](https://st-db.netlify.app/)**

## Sponsors 
- Love what I do? Send me some [coffee](https://buymeacoff.ee/shuruhatik)!? ☕

- Can't send coffees?  😥  Nominate me for a  **[st.db: Reviews | Openbase](https://openbase.com/js/st.db/reviews)**  instead! Your support will help me to continue working on open-source projects like this.  🙏😇
## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord Server](https://dsc.gg/shuruhatik) .

## Did you find it difficult to use?
You can see the [Documentation](https://db.shuruhatik.db/) of the st.db package to know all the details

## License 
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)