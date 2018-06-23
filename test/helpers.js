const chai = require('chai');
const webdriver = require('selenium-webdriver');

global.By = webdriver.By;
global.expect = chai.expect;
global.webdriver = webdriver;

global.driver = null;