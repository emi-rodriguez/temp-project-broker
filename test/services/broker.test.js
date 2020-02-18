const assert = require('assert')
const app = require('../../src/app')
const { describe, it } = require('mocha')

describe('\'broker\' service', () => {
  it('registered the service', () => {
    const service = app.service('broker')

    assert.ok(service, 'Registered the service')
  })
})
