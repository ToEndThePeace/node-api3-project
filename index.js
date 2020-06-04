// code away!
const server = require("./server");
const cors = require("cors");

server.use(cors());

const port = 8000;
server.listen(port, () =>
  console.log(`Server running at http://localhost${port}`)
);
