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

})