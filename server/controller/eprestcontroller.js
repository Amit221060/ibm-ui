const superagent = require('superagent');
const config = require('../config/config');
var https = require('https');
var path = require('path');
var fs = require('fs');
var rootPath = path.normalize(__dirname+'/../../');
/* test https */
exports.doGttps = function(req, res) {
  console.log('root path is ###########', rootPath);
  var cert = fs.readFileSync(rootPath+'/1109.crt');
  superagent.get('https://inmbz1109.in.dst.ibm.com/services/epricer/v2/ibm/api/rest/get')
  .auth('kiranchowdhury@in.ibm.com','kir@n!@m_79')
  .query(req.query)
  .set('accept','json')
  .cert(cert)
  .end((err, api_res)=> {
    if(err) {
      console.log('API Error', err)
    } else {
      res.send(api_res.body);
    }

  });
};

exports.login = function(req, res) {
  var payload = req.body;
  var backendServer = payload.env;
  var email = payload.username;
  var pwd = payload.password;
  var apiUrl = config[backendServer].apiUrl;
  var certPath = config[backendServer].certPath;
  console.log('Cert path', certPath);
  var cert = fs.readFileSync(certPath);
  superagent.get(apiUrl+'/api/rest/get?apiid=getAuthGroup&methodname=getIBMAuthorizedGroup')
  .auth(email, pwd)
  .cert(cert)
  .end((error, api_resp) => {
    if(error) {
      res.send({status: "0", message: 'ET_000', items: [{isAuthenticated: false}]});
    } else if(api_resp.status === 200){
      res.send({status: "1", message: 'SUCCESS', items: [{isAuthenticated: true, email: email}]});
    } else if(api_resp.status === 401) {
      res.send({status: "0", message: 'HTTP_RESPONSE_CODE_UNAUTHORIZED', items: [{isAuthenticated: false}]});
    } else if(api_resp.status === 400) {
      res.send({status: "0", message: 'HTTP_RESPONSE_CODE_NOT_FOUND', items: [{isAuthenticated: false}]});
    } else if(api_resp.status === 500) {
      res.send({status: "0", message: 'HTTP_RESPONSE_CODE_INTERNAL_SERVER_ERROR', items: [{isAuthenticated: false}]});
    }
  });
};

exports.doGet = function(req, res) {
  var queryString = req.query;
  var backendServer = queryString.backendServer && queryString.backendServer.length > 0 ?
                      queryString.backendServer : 'cdtdevbc';

  var apiUrl = config[backendServer].apiUrl;
  console.log('API URL', apiUrl);
  var certPath = config[backendServer].certPath;
  console.log('Cert path', certPath);
  var cert = fs.readFileSync(certPath);
  var id = config[backendServer].id;
  var pwd = config[backendServer].pwd;
  console.log("Query String is ", req.query);

    superagent.get(apiUrl+'/api/rest/get')
    .auth(id,pwd)
    .cert(cert)
    .query(req.query)
    .set('Accept', queryString.accept)
    .set('X-Force-Content-Type', queryString.forceContentType)
    .set('X-Context-geo', queryString.contextGeo)
    .set('X-Context-Group', queryString.contectGroup)
    .set('X-Context-Id', queryString.contextId)
    .end((err, api_res)=> {
      if(err) {
        console.log("Error from API", api_res.status);
        res.send({status: "0", message: 'ET_000', items: []});
      } else {
        console.log("HTTP STATUS CODE = "+api_res.status);
        res.send(api_res.body);
      }
    });


   //res.send(loginResp);

};

exports.doPost = function(req, res) {
  // superagent.post('http://localhost:9080/services/epricer/v2/ibm/api/rest/post')
  // .auth('kiranchowdhury@in.ibm.com','********')
  // .send(req.body)
  // .set('accept','json')
  // .end((err, apiresp)=>{
  //   console.log("Raw Response", apiresp.body);
  //   //console.log("Response from ePricer", JSON.stringify(apiresp.body));
  //   res.send(apiresp.body);
  // });

};

const authorizeResp = {
  "responsetime": "5132",
  "message": "OK",
  "status": "1",
  "items": [
    {
      "geo": "AP",
      "selectedgroupgeocode": "AP",
      "selectedgroup": "APAPITRDH",
      "selectedgroupname": "TRDHAPI-AP Deal Hub Users (AP IOT)",
      "authtolandtopricing": "false",
      "bpquotevisibility": "N",
      "auth_functions": [
        {
          "id": "0"
        },
        {
          "id": "1"
        },
        {
          "id": "3"
        },
        {
          "id": "4"
        },
        {
          "id": "5"
        },
        {
          "id": "6"
        },
        {
          "id": "9"
        },
        {
          "id": "14"
        },
        {
          "id": "22"
        },
        {
          "id": "23"
        },
        {
          "id": "24"
        },
        {
          "id": "25"
        },
        {
          "id": "27"
        },
        {
          "id": "29"
        },
        {
          "id": "35"
        },
        {
          "id": "45"
        },
        {
          "id": "55"
        },
        {
          "id": "62"
        },
        {
          "id": "90"
        },
        {
          "id": "112"
        }
      ],
      "permissions": [
        {
          "showcreatequote": "true"
        },
        {
          "viewentitledpriceanddiscount": "false"
        },
        {
          "isendusernameeditable": "false"
        },
        {
          "cansubmitquotetoibm": "false"
        },
        {
          "showdisablechecksum": "true"
        },
        {
          "showworkonothercountrycfr": "true"
        },
        {
          "authorizedforidentitypotentialduplicatebid": "false"
        },
        {
          "canworkonbpquotes": "false"
        }
      ]
    }
  ]
}
