const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JAM");
    conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    // setTimeout(() => { conn.write("Move: up") }, 50);
    // setTimeout(() => { conn.write("Move: down") }, 100);
    // setTimeout(() => { conn.write("Move: left") }, 150);
    // setTimeout(() => { conn.write("Move: right") }, 200);
    // setInterval(() => { conn.write("Move: up") }, 50);
    // setInterval(() => { conn.write("Move: down") }, 100);
    // setInterval(() => { conn.write("Move: left") }, 150);
    // setInterval(() => { conn.write("Move: right") }, 200);
  });
  return conn;
};

console.log("Connecting ...");

module.exports = { connect };
