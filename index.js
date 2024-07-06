const { Database, SupabaseDriver } = require("./src");
const tableName = "test";


const options = {
  driver: new SupabaseDriver({
    supabaseUrl: 'https://fdoizboiykbiaaffwzvq.supabase.co',
    supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkb2l6Ym9peWtiaWFhZmZ3enZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NTE2MzQ1MSwiZXhwIjoxOTgwNzM5NDUxfQ.qzJrvq73Tycvyb1H6u4D1xoabEwzjVEYiISreufm5Qw"
  }, tableName), 
};

const db = new Database(options);

db.set("he",true).then(console.log)