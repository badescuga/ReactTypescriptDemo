import * as DB from "documentdb-typescript";

// Example: open a connection and find all databases
async function main(url, masterKey) {
    var client = new DB.Client(url, masterKey);
    client.enableConsoleLog = true;

    // dump the account information
    console.log(await client.getAccountInfoAsync());

    // open the connection and print a list of IDs
    await client.openAsync();
    var dbs = await client.listDatabasesAsync();
    console.log(dbs.map(db => db.id));

    // unnecessary unless you expect new clients
    // to reopen the connection:
    client.close();
}