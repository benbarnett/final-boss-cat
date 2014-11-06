require("6to5");
require("6to5/register")
require("6to5/polyfill");

var cat = require('../Cat');
var expect = require('chai').expect;

describe('sanity test', function() {
  it('should be sane', function() {
    expect(true).to.equal(true);
  });
});

describe('other tests', function() {
  it('should exist', function() {
    expect(cat).to.exist;
  });
});
