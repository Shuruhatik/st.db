
<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://i.imgur.com/e0gD6qv.png" width="546" alt="discord.js" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/st.db"><img src="https://img.shields.io/npm/dt/st.db?color=%2300D3A4&style=for-the-badge" alt="NPM Downloads" /></a>
		<a href="https://www.npmjs.com/package/st.db"><img src="https://img.shields.io/npm/v/st.db?color=%2302AC30&style=for-the-badge" alt="npm Version" /></a>
		<a href="https://www.npmjs.com/package/st.db"><img src="https://img.shields.io/npm/types/st.db?style=for-the-badge" alt="Types" /></a>
	</p>
	<p>
		<img src="https://i.imgur.com/e4PtZV6.png" width="212" height="44" alt="Powered by Enormous" />
	</p>
</div>

## About
A high-resolution local database that uses precise algorithms to easily record data in local files within a project with persistent [JSON](https://en.wikipedia.org/wiki/JSON) and [YML](https://en.wikipedia.org/wiki/YAML) support designed to be easy to set up and use
- Beginner friendly     
- Easy to use    
- Key-Value like interface    
- Database files inside and outside the project
- Supports Style Array or Objects storage
- Tables to organize storage in a more organized way
- Supports [JSON](https://en.wikipedia.org/wiki/JSON) and [YML](https://en.wikipedia.org/wiki/YAML) storage
- Support encryption with password
- Quick to respond, read and write 
- Support Events
  
## Installation
Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):
```sh
npm install st.db
yarn add st.db
pnpm add st.db
```

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

## Links
-  **[Discord Support Server](https://dsc.gg/shuruhatik)**
-  **[Documentation](https://st-db.netlify.app/)**

## Examples
### Example of constructor
- `new Database(path:  string,  options? :  DatabaseOptions)`
```js
// JSON Database
const json_db = new Database("database.json"); //Set by default ".json"

// YAML Database
const yaml_db = new Database("database.yaml"); // or ".yml"

//Database in files from outside the work project
const db_outside_project = new Database("C:/Users/pc/Desktop/database.yml",{
	 pathOutsideTheProject:true//If you activate the "pathOutsideTheProject" option, you will be able to type any path from your computer in the "path".
});

// Options
const db_with_options = new Database("database.json",{
	storageStyle: Database.Style.Array,// default = Database.Style.Object
	encryption:{password:"ea6d4h4j"}//If you want to encrypt data with a password
});
```
### Example of methods
- Note: Inside all the methods that accept or accept key or value are both, you can put them as `Partmeter 1 = key` and `Parmeter 2 = value` **or** as `Partmeter 1` object `{key,value}`
```js
// Events

db.on("ready", () => console.log("Database Ready!"));//Emitted when the database becomes ready to start working.
db.on("debug", (msg) => console.log(msg));// Emitted for general debugging information.
db.on("addElement", (elementInData,value) => console.log(`New "${elementInData.ID}" elementb Value: ${value}`));
db.on("editElement", (elementInData,new_value,old_value) => {
	console.log(`Edit "${elementInData.ID}" element New Value: ${new_value} and Old value: ${old_value}`)
});
//Set element in database
db.set({key:"settings",value:{theme:"dark",fontSize:10}})  //return Promise<ElementInData>

// To get the value of a specific key element
console.log(db.get({key:"settings"})); //or console.log(db.get("settings"))

//Get all the elements in the database of value
console.log(db.getByValue("v6"));
console.log(db.get({value:"v6"}));//return ElementInData[]

//Checking an item from the database if it exists or not
console.log(db.has({key:"settings"})); //or console.log(db.has("settings"))

//To get the value type of a given key element
console.log(db.type({key:"settings"})); //or console.log(db.type("settings"))

//Delete element from database
db.delete({key:"settings"}); //or db.delete("settings")

// Returns everything from the database
console.log(db.all()); //Returns all elements in Database
console.log(db.valuesAll());//Return all values from the database
console.log(db.keysAll());//Return all keys from the database

// Fetches everything and sorts by given target
db.includes({key:"tti"});// It fetches the values ​​containing this value
db.startsWith({key:"setti"});// It fetches values ​​starting with this value
db.endsWith({key:"ings"});// It fetches values ​​ending with this value

// Array Methods
db.push("skills",["html","javascript"]) // To push an element to an array into data
db.unshift("skills","typescript") // To unshift an element to an array into data
db.shift("skills") // Removes the first element of the array
db.pop("skills"); // Removes the last element of the array
db.pull("skills","javascript");

// Math Methods
db.math({
  key:"coins",  
  operator:"+",  
  value:100, 
  goToNegative:false
});//or db.math("coins", "+", "100", false)

db.subtract({key:"coins", value:50});// To subtract from value
db.add({key:"coins", value:50});// To add from value
db.multiply({key:"coins", value:2});// To multiply from value
db.double({key:"coins"});//To double from value

// Methods for controlling the database, reloading and deleting items
db.destroy();//Destroy the database
db.deleteAll();//Delete all data
db.clear();//Clear all data
db.reload();//Reload the database

console.log(db.raw); // Return the raw data
console.log(db.cache); // Returns the cache collection
console.log(db.length);//Returns the number of items in the database
console.log(db.uptime);//Returns database connection uptime 
console.log(db.fileSize);//To get the file size
```
### Database actions
- Action is a class which is a fake database where you can execute your methods without affecting the main database itself and save it later whenever you want!
-  `new Action(database)`
```js
import { Database, Action } from  "st.db";
const db = new Database("bio.json") 
const action = new Action(db);// or db.action();
action.set("name","mohamed"); 
action.set("age",17;
console.log(db.get('name')); //Prints "undefind" as still in cache
console.log(action.get('name')); //Prints "mohamed"

action.save(); //Saves data from action cache to database

console.log(db.get('name')); // Prints "mohamed"!

action.undo(); //Return to the state of the database when the procedure started!
console.log(action.get('name')); //Prints "undefind"
console.log(db.get('name')); //Prints "undefind"
```

### Tables example
- This system helps you to manage data in an organized manner, as it gives you a completely separate database experience, but it is not separate, but rather it is an element in the basic database.
- `new Table(key, database)`
```js
import { Database, Table } from  "st.db";
const db = new Database("bio.yaml");

// Create new Table 
const table_1 = new Table("profile", db);
table_1.set("name","Mohamed Abdelkarim");
table_1.set("age", 17);

const table_2 = new Table("skills", table_1);

table_2.set("programming_languages", ["JS","TS","C++"]);
```
- If the file is a YML file and the format is Object, then the tables will look like this
```yml
profile:
  age: 16
  skills:
    programming_languages:
    - JS
    - TS
    - C++
```

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord Server](https://dsc.gg/shuruhatik) .

## Did you find it difficult to use?
You can see the [Documentation](https://st-db.netlify.app/) of the st.db package to know all the details

## License 
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)