const net = require("net");

const { host, port, name } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({host, port});
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write(`Name: ${name}`);
    
  });

  return conn;
};

module.exports = {connect};
