'use strict'

require('babel-register');
require('react-native-mock/mock');
require('./mock-dom')

const chai = require('chai')

global.sinon = require('sinon')
global.expect = chai.expect
global.should = chai.should()
