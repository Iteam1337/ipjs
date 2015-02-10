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
});
