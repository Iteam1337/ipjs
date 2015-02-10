var Promise = require("promise");
var request = require('request');
var util = require('util');

var ip = module.exports = new Promise(function(accept, reject){
  request({method:'GET', json: true, url: 'http://ip.iteam.se/all.json'}, function(err, response, body){
    if (err) return reject(err);
    
    // set the results to be the libs singleton object - TODO: add refresh method
    for(var key in body) ip[key] = body[key];
    ip.toString = function(){ 
      return body['X-Real-Ip'][0];
    };
    ip.resolved = true;

    return accept(body);;
  });
});