var server = require('./server')

var PORT = 3000

server.listen(PORT, function () {
  console.log('Server is listening on PORT', PORT)
  console.log('Your AWS ACCESS KEY: ' + process.env.AWS_ACCESS_KEY_ID)
  console.log('Your AWS SECRET: ' + process.env.AWS_SECRET_ACCESS_KEY)
  console.log('Your AWS REGION: ' + process.env.AWS_REGION + '\n\n')
})
