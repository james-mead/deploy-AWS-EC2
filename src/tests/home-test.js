var test = require('tape')
var request = require('supertest')
var cheerio = require('cheerio')

var server = require('../server')

test('/ returns h1', function (t) {
  request(server)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      // assert
      var $ = cheerio.load(res.text) // jquery selector
      t.ok($('h1').text().includes('good'), 'Found home page')
      t.end()
    })
})
