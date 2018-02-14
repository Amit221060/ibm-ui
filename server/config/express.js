const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
var superagent = require('superagent');
var conf = require('../config/config');
var rootPath = path.normalize(__dirname+'/../../');
var fs = require('fs');


//const api = require('../config/routes');
var restcontroller = require('../controller/eprestcontroller');


module.exports = function(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../dist')));
  // app.post('/api/login', restcontroller.login);
  app.post('/api/login', function(req, res) {
    var payload = req.body;
    var backendServer = payload.env;
    var email = payload.username;
    var pwd = payload.password;
    var apiUrl = conf[backendServer].apiUrl;
    var certPath = conf[backendServer].certPath;
    console.log('Cert path', certPath);
    var cert = fs.readFileSync(certPath);
    superagent.get(apiUrl+'/api/rest/get?apiid=getAuthGroup&methodname=getIBMAuthorizedGroup')
    .auth(email, pwd)
    .cert(cert)
    .end((error, api_resp) => {
      // console.log('LOGIN STATUS ', api_res.status);
      if(error) {
        res.send({status: "0", message: 'Login Error - Invalid Credential', items: [{isAuthenticated: false}]});
      } else if(api_resp.status === 200){
        // user is valid - lets create the web token
        var tokenPayload = {
          user: email
        }
        var token = jwt.sign(tokenPayload, conf[backendServer].secret, {
          expiresIn: 86400 // expires in 24 hours - session valid until 24 hours
        });
        res.send({status: "1", message: 'SUCCESS', token: token, items: [{isAuthenticated: true, email: email}]});
      } else if(api_resp.status === 401) {
        res.send({status: "0", message: 'HTTP_RESPONSE_CODE_UNAUTHORIZED', items: [{isAuthenticated: false}]});
      } else if(api_resp.status === 400) {
        res.send({status: "0", message: 'HTTP_RESPONSE_CODE_NOT_FOUND', items: [{isAuthenticated: false}]});
      } else if(api_resp.status === 500) {
        res.send({status: "0", message: 'HTTP_RESPONSE_CODE_INTERNAL_SERVER_ERROR', items: [{isAuthenticated: false}]});
      }
    });
  });

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
	const port = 3030;
  app.set('port', port);
	/**
	 * Create HTTP server.
	 */
  const server = http.createServer(app);
	/**
	 * Listen on provided port, on all network interfaces.
	 */

	server.listen(port, 'localhost' ,() => console.log(`API running on localhost:${port}`));
};
