// chai
global.chai = require("chai");

// should style
global.should = require("chai").should();

// expect style
// global.expect = require("chai").expect;

// assert style
// global.assert = require('chai').assert;
 
// chai-supertest
var chaiSupertest = require('chai-supertest');
var request = chaiSupertest.request;
chai.use(chaiSupertest.httpAsserts);
 
// sinon
// global.sinon = require("sinon");
// var sinonChai = require("sinon-chai");
// chai.use(sinonChai);

// use zombie.js as headless browser
global.Browser = require('zombie');

// get the phantom
global.phantom = require('phantom')
 
// force the test environment to 'test'
process.env.NODE_ENV = 'test';

// test coverage
require('blanket');

// get the application server module
global.app = require('./../app');

// get the super-agent
global.user = request(app).agent();
