const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '6.tcp.ngrok.io',// IP address here,
    port: 11872// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write("Name: JTL");
    setTimeout(() => {
      conn.write("Move: up");
    }, 2000);
  });

  return conn;
};

module.exports = {connect};
