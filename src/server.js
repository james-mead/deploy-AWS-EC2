var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var path = require('path')

var routes = require('./routes')
var helpers = require('./views/helpers/helpers.js').helpers

var app = express()

// Middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: helpers
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.get('/', routes.home)
app.get('/instances', routes.instances)
app.post('/deploy', routes.deploy)
app.post('/delete', routes.deleteInstance)

module.exports = app
