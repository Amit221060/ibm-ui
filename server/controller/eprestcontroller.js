const superagent = require('superagent');

exports.doGet = function(req, res) {
  console.log("Query String is ", req.query);
  if(req.query && req.query.methodname === 'getSelectedIBMGroupInfo')
  {
    res.send(authorizeResp);
  } else {
    superagent.get('http://localhost:9080/services/epricer/v2/ibm/api/rest/get')
    .auth('kiranchowdhury@in.ibm.com','********')
    .query(req.query)
    .set('accept','json')
    .end((err, api_res)=> {
      res.send(api_res.body);
    });
  }


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
