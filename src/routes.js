// Load the AWS SDK for Node.js
var AWS = require('aws-sdk')

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'})

function home (req, res) {
  res.render('home')
}

function instances (req, res) {
  // Set parameters
  var params = {
    DryRun: false
  }
  // call EC2 to retrieve policy for selected bucket
  ec2.describeInstances(params, function (err, data) {
    if (err) {
      console.error('Error' + err.stack)
      return
    } else {
      res.render('instances', data)
    }
  })
}

function deploy (req, res) {
  var qty = req.body.qty
  // Set parameters
  var params = {
    ImageId: 'ami-162c2575',
    InstanceType: 't2.micro',
    MinCount: qty,
    MaxCount: qty
  }
  // Create new instance
  ec2.runInstances(params, function (err, data) {
    if (err) {
      console.error('Could not create instance', err)
      res.send('Something went wrong, please try again')
    }
    for (var i in data.Instances) {
      var instanceId = data.Instances[i].InstanceId
      console.log('Created instance', instanceId)
      // Add tags to the instance
      params = {
        Resources: [instanceId],
        Tags: [
          {
            Key: 'Name',
            Value: req.body.name
          }
        ]
      }
      ec2.createTags(params, function (err) {
        console.log('Tagging instance', err
          ? 'failure'
          : 'success')
      })
    }
    res.redirect('instances')
  })
}

function deleteInstance (req, res) {
  var instanceId = req.body.instanceid
  // Delete instance
  ec2.terminateInstances({InstanceIds: [instanceId]}, function (err, data) {
    if (err) {
      console.error(err.toString())
    } else {
      for (var i in data.TerminatingInstances) {
        var instance = data.TerminatingInstances[i]
        console.log('Deleting Instance: ' + instance.InstanceId)
      }
      res.redirect('instances')
    }
  })
}

module.exports = {
  home: home,
  deploy: deploy,
  deleteInstance: deleteInstance,
  instances: instances
}
