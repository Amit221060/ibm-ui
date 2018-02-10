const superagent = require('superagent');

exports.doGet = function(req, res) {
  console.log("Query String is ", req.query);
  superagent.get('http://localhost:9080/services/epricer/v2/ibm/api/rest/get')
            .auth('kiranchowdhury@in.ibm.com','********')
            .query(req.query)
            .set('accept','json')
            .end((err, api_res)=> {
              res.send(api_res.body);
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
