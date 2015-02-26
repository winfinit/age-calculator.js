var should = require('chai').should(),
 	expect = require('chai').expect,
    ageCalculator = require('../index');

    var today = new Date();
    var age = new Date(today.getFullYear() - 35,0,1);
    var ageString = (age.getMonth() + 1) + "-" + age.getDate() + "-" + age.getFullYear();


describe('getAge', function() {
    it('via date object should return age', function(){
	var date = ageCalculator.getAge(age);
    	expect(date).to.equal(35);
    });
    it('via string should return age', function(){
	var date = ageCalculator.getAge(ageString);
    	expect(date).to.equal(35);
    });
});

describe('getAgeDate', function() {
    it('via string should return date object', function(){
	var date = ageCalculator.getAgeDate(ageString);
    	expect(date).to.be.an.instanceof(Date);
    });

    it('via Date object should return date object', function(){
	var date = ageCalculator.getAgeDate(age);
    	expect(date).to.be.an.instanceof(Date);
    });
});
