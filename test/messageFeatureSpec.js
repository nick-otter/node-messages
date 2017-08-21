const Browser = require('zombie');
var app = require('../app');
var assert = require('assert');

Browser.localhost('localhost', 2005);

  describe('User visits the message page', function() {
    const browser = new Browser();

    before(function() {
      return browser.visit('/messages');
    })

    describe('sees the message page', function() {

      it('should be successful', function() {
        browser.assert.success();
      })

      it('should see the index page', function() {
        browser.assert.text('h1', 'Messages')
      });
    });

  })
