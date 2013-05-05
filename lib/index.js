/*
 * aws-pricing
 * https://github.com/markw/aws-pricing
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var http = require('http')
  , host = 'http://aws.amazon.com/ec2/pricing'

var _buildUrl = function (path) {
  return [host, path].join('/')
}

exports.requestOnDemandPricing = function (callback) {

  var body = ''

  http.get(_buildUrl('pricing-on-demand-instances.json'),function (res) {

    res.setEncoding('utf8')

    // this is a very simplistic body builder however it works
    res.on('data', function (chunk) {
      body = body + chunk
    })
    res.on('end', function () {
      if (res.statusCode === 200) {
        callback(null, JSON.parse(body))
      } else {
        callback(new Error('Unexpected HTTP response code: ' + res.statusCode))
      }
    })
  }).on('error', function (e) {
      callback(e)
    })

}