var request = require('supertest')
var test = require('tape')
var cheerio = require('cheerio')

var server = require('../server')

test('GET /instances', function (t) {
  request(server)
    .get('/instances')
    .expect(200)
    .end(function (err, res) {
      // assert
      var $ = cheerio.load(res.text) // jquery selector
      t.ok($('h3').text().includes('AWS Instances'), 'Found instances page')
      t.end()
    })
})
