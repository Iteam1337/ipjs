var Promise = require("promise").Promise;
var request = require('request');

module.exports = new Promise(function(accept, reject){
  request({method:'GET', json: true, url: 'http://ip.iteam.se'}, function(err, data){
    if (err) return reject(err);
    accept(data);

    // set the results to be the libs singleton object - TODO: add refresh method
    return module.exports = data;
  });
});