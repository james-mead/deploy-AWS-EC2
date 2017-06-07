# Deploy AWS EC2 instances

## Getting started

* Clone this repo and `cd` into the directory
* Install dependencies with `npm install`
* Create the appropriate environment variables and store them in an **.env** file in the root of your application
  * ```AWS_ACCESS_KEY_ID=<your AWS access id>
  AWS_SECRET_ACCESS_KEY=<your AWS secret access key>
  AWS_REGION=<your AWS region>```
* To start the server: `npm start` and browse to [http://localhost:3000](http://localhost:3000)
* To run the tests: `npm test`

## Helpful notes
For more information on how to configure authentication with Amazon Web Services' SDK, please [click here](http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html)
