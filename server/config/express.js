const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//const api = require('../config/routes');
var restcontroller = require('../controller/eprestcontroller');

module.exports = function(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../dist')));

  //set up api routes
  //app.use('/api', api);
  app.get('/api/get', restcontroller.doGet);
  app.post('/api/post', restcontroller.doPost);

	// Catch all other routes and return the index file
	app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
	/**
	 * Get port from environment and store in Express.
	 */
	const port = config.port;
  app.set('port', port);
	/**
	 * Create HTTP server.
	 */
  const server = http.createServer(app);
	/**
	 * Listen on provided port, on all network interfaces.
	 */
	server.listen(port, () => console.log(`API running on localhost:${port}`));
};
