const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "_data/db.json"));
const middlewares = jsonServer.defaults();

server.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:3001"],
		credentials: true,
	})
);
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 4000;

server.listen(PORT, () => {
	console.log(`JSON Server is running on http://localhost:${PORT}`);
});
