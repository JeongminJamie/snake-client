const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connObject = connect();
setupInput(connObject);