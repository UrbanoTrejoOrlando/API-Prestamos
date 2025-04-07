const Server = require("./server/server");
const PORT = process.env.PORT || 4004;

const server = new Server(PORT);
server.start();