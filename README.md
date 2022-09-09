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
- Supports Style Array or Objects storage (edited)
- Supports [JSON](https://en.wikipedia.org/wiki/JSON) and [YML](https://en.wikipedia.org/wiki/YAML) storage
- Support encryption with password
- Quick to respond, read and write 
- Support Events
  
## Installation
Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):
```sh
npm install st.db@beta
yarn add st.db@beta
pnpm add st.db@beta
```

## Usage
```javascript
// Using Node.js `require()`
const { Database } = require('st.db');

// TypeScript/ES Module support
import { Database } from 'st.db';
```

## Links
-  **[Discord Support Server](https://dsc.gg/shuruhatik)**
-  **[Documentation](https://st-db.netlify.app/)**

## Examples
### Example of constructor
- `new Database(path:  string,  options? :  DatabaseOptions)`
```js
// JSON Database
const json_db = new Database("database.json") //Set by default ".json"

// YAML Database
const yaml_db = new Database("database.yaml") // or ".yml"

//Database in files from outside the work project
const db_outside_project = new Database("C:/Users/pc/Desktop/database.yml",{
	 pathOutsideTheProject:true//If you activate the "pathOutsideTheProject" option, you will be able to type any path from your computer in the "path".
})

// Options
const db_with_options = new Database("database.json",{
	storageStyle: Database.Style.Array,// default = Database.Style.Object
	encryption:{password:"ea6d4h4j"}//If you want to encrypt data with a password
})
```
### Example of methods
- Note: Inside all the methods that accept or accept key or value are both, you can put them as `Partmeter 1 = key` and `Parmeter 2 = value` **or** as `Partmeter 1` object `{key,value}`
```js
db.on("ready", () => console.log("Database Ready!"));
db.on("addElement", (elementInData,value) => console.log(`New "${elementInData.ID}" elementb Value: ${value}`))
db.on("editElement", (elementInData,new_value,old_value) => {
	console.log(`Edit "${elementInData.ID}" element New Value: ${new_value} and Old value: ${old_value}`)
})
//Set element in database
db.set({key:"settings",value:{theme:"dark",fontSize:10}})  return Promise<ElementInData>

//Checking an item from the database if it exists or not
console.log(db.has({key:"settings"})) //or console.log(db.has("settings"))

//To get the value type of a given key element
console.log(db.type({key:"settings"})) //or console.log(db.type("settings"))

//Delete element from database
db.delete({key:"settings"}) //or db.delete("settings")

// Returns everything from the database
console.log(db.all()) //Returns all elements in Database
console.log(db.valuesAll())//Return all values from the database
console.log(db.keysAll())//Return all keys from the database

// Fetches everything and sorts by given target
db.includes({key:"tti"});// It fetches the values ​​containing this value
db.startsWith({key:"setti"});// It fetches values ​​starting with this value
db.endsWith({key:"ings"});// It fetches values ​​ending with this value

// Array Methods
db.push("skills",["html","javascript"]) // To push an element to an array into data
db.unshift("skills","typescript") // To unshift an element to an array into data
db.shift("skills") // Removes the first element of the array
db.pop("skills") // Removes the last element of the array
db.pull("skills","javascript")

// Math Methods
db.math({
  key:"coins",  
  operator:"+",  
  value:100, 
  goToNegative:false
})//or db.math("coins", "+", "100", false)

db.subtract({key:"coins", value:50})// To subtract from value
db.add({key:"coins", value:50})// To add from value
db.multiply({key:"coins", value:2})// To multiply from value
db.double({key:"coins"})//To double from value

// Methods for controlling the database, reloading and deleting items
db.destroy()//Destroy the database
db.deleteAll()//Delete all data
db.clear()//Clear all data
db.reload()//Reload the database
console.log(db.uptime())//Returns database connection uptime 
console.log(db.fileSize())//To get the file size
```
## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord Server](https://dsc.gg/shuruhatik) .

## Did you find it difficult to use?
You can see the [Documentation](https://st-db.netlify.app/) of the st.db package to know all the details

## License 
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)