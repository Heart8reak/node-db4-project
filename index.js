const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`The SeRvEr is up and Running on PORT: ${PORT}`);
});
