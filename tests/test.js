var expect = require('chai').expect;

describe('ip', function () {
  var ip;

  beforeEach(function () {
    ip = require('../');
  });

  it('returns a promise', function () {
    expect(ip).to.be.an.object;
    expect(ip).to.have.property('then');
  });

  it('resolves correctly', function (done) {
    ip.then(function(details){
      expect(details).to.have.property('X-Real-Ip');
      done();
    }, done);
  });

  it('the singleton now contains the ip-adress', function (done) {
    ip.then(function(){
      expect(ip).to.have.property('X-Real-Ip');
      done();
    });
  });

  it('toString returns the ip-adress', function (done) {
    ip.then(function(){
      expect(ip.toString()).to.be.a('string');
      expect(ip.toString().split('.')).to.have.length(4);
      done();
    });
  });

  it('use settimeout to validate ip without any promises', function (done) {
    setTimeout(function(){
      expect(ip.toString()).to.be.a('string');
      expect(ip.toString().split('.')).to.have.length(4);
      done();
    }, 100);
  });

  it('use blocking code to wait until ip is resolved', function () {
    expect(ip.toString()).to.be.a('string');
    expect(ip.toString().split('.')).to.have.length(4);
  });
});
