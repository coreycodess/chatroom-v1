import connection from "./connection";

const users = `CREATE TABLE IF NOT EXISTS users
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
)
;`;

const tables = [users];

function runTables() {
  for (const table of tables) {
    connection.query(table);
    console.log("done");
  }

  process.exit();
}

runTables();
