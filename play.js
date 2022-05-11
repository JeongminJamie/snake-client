const { connect } = require("./client");

connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    process.exit();

  };
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();