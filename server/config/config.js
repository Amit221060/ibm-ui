var path = require("path");
var rootPath = path.normalize(__dirname+'/../../');
module.exports = {
    il4174 : {
        rootPath: rootPath,
        apiUrl:'https://inmbzp4174.in.dst.ibm.com/services/epricer/v2/ibm',
        certPath: rootPath+'certs/IL4174.crt',
        id: '<enter your intranet id>',
        pwd: '<enter your intranet pwd>'
    },
    il1109 : {
      rootPath: rootPath,
      apiUrl:'https://inmbz1109.in.dst.ibm.com/services/epricer/v2/ibm',
      certPath: rootPath+'certs/IL1109.crt',
      id: '<enter your intranet id>',
      pwd: '<enter your intranet pwd>'
  },
  il4113 : {
    rootPath: rootPath,
    apiUrl:'https://inmbzp4113.in.dst.ibm.com/services/epricer/v2/ibm',
    certPath: rootPath+'certs/IL4113.crt',
    id: '<enter your intranet id>',
    pwd: '<enter your intranet pwd>'
  },
  cdtdevbc : {
    rootPath: rootPath,
    apiUrl:'https://w3alpha-2.toronto.ca.ibm.com/services/epricer/v2/ibm',
    certPath: rootPath+'certs/cdtdevbc.crt',
    id: '<enter your intranet id>',
    pwd: '<enter your intranet pwd>'
  },
  cdtdevdir : {
    rootPath: rootPath,
    apiUrl:'https://mkmpgzcl2124.toronto.ca.ibm.com/services/epricer/v2/ibm',
    certPath: rootPath+'certs/cdtdevdir.crt',
    id: '<enter your intranet id>',
    pwd: '<enter your intranet pwd>'
  },
  cdtmaint : {
    rootPath: rootPath,
    apiUrl:'https://w3beta-2.toronto.ca.ibm.com/services/epricer/v2/ibm/',
    certPath: rootPath+'certs/cdtmain.crt',
    id: '<enter your intranet id>',
    pwd: '<enter your intranet pwd>'
  }
  // production : {
  //       rootPath: rootPath,
  //       apiUrl:'https://wwwalpha-2.toronto.ca.ibm.com/services/partners/epricer/v2',
  //       port:process.env.PORT || 80,
  //       host:process.env.IP
  //   }
};
