/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var chai = require('chai')

var expect = chai.expect

var awspricing = require('../../lib')

describe('AWS', function () {

  it('should return a JSON object when asked for aws on demand pricing.', function (done) {

    awspricing.requestOnDemandPricing(function (err, data) {
      expect(err).to.not.exist
      expect(data.vers).to.exist
      done()
    })
  })

  it('should return a JSON object when asked for aws data transfer pricing.', function (done) {

    awspricing.requestDataTransferPricing(function(err, data){
      expect(err).to.not.exist
      expect(data.vers).to.exist
      done()
    })

  })

  it('should return a JSON object when asked for aws elastic ips pricing.', function (done) {

    awspricing.requestElasticIpsPricing(function(err, data){
      expect(err).to.not.exist
      expect(data.vers).to.exist
      done()
    })

  })

  it('should return a JSON object when asked for aws elastic load balancer pricing.', function (done) {

    awspricing.requestElasticLoadBalancerPricing(function(err, data){
      expect(err).to.not.exist
      expect(data.vers).to.exist
      done()
    })

  })

})