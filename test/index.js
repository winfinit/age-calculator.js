var should = require('chai').should();

let {AgeFromDateString, AgeFromDate, AgeAtDate, AgeAtDateString} = require('../built/age-calculator');

describe('validate AgeFromDate', function() {

    it('returns correct age', function() {
        let age = new AgeFromDate(new Date(1987, 0, 8)).age;
        age.should.be.a('number');
    });
});

describe('validate AgeFromDateString', function() {

    it('returns correct age', function() {
        let age = new AgeFromDateString('1987-01-08').age;
        age.should.be.a('number');
    });
});

describe('validate AgeAtDate', function() {

  it('returns correct age', function() {
    let age = new AgeAtDate(new Date(1987, 0, 8), new Date(1988, 0, 8)).age;
    age.should.be.a('number');
    age.should.equal(1);
  });
});

describe('validate AgeAtDateString', function() {

  it('returns correct age', function() {
    let age = new AgeAtDateString('1987-01-08', '1988-01-08').age;
    age.should.be.a('number');
    age.should.equal(1);
  });
});
