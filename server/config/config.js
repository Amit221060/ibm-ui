var path = require("path");
var rootPath = path.normalize(__dirname+'/../../');
module.exports = {
    development : {
        rootPath: rootPath,
        apiUrl:'https://wwwalpha-2.toronto.ca.ibm.com/services/partners/epricer/v2',
        port:process.env.PORT || 3030,
        host:process.env.IP || 'localhost'
    },
    production : {
        rootPath: rootPath,
        apiUrl:'https://wwwalpha-2.toronto.ca.ibm.com/services/partners/epricer/v2',
        port:process.env.PORT || 80,
        host:process.env.IP
    }
};
