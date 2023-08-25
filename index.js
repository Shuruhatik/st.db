import { Database } from "./src";
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