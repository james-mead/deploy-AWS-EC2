var request = require('supertest')
var test = require('tape')
var cheerio = require('cheerio')

var server = require('../server')

test('GET /', function (t) {
  request(server)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      // assert
      var $ = cheerio.load(res.text) // jquery selector
      t.ok($('h3').text().includes('Deployment Form'), 'Found home page')
      t.end()
    })
})
