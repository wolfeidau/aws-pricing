# aws-pricing

Small module which uses nodes http module to retrieve AWS pricing and parses it. data
is downloaded from the [AWS Pricing Site](http://aws.amazon.com/ec2/pricing).

## Usage

Get a list the on demand instance pricing.

```javascript
var aws_pricing = require('aws-pricing')

awspricing.requestOnDemandPricing(function (err, data) {
   if (err){
    // badness
   }

    // mess with data
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit
tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Mark Wolfe
Licensed under the MIT license.