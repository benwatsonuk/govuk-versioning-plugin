const expect = require('chai').expect
const testData = require('./test-data.js')
const outputs = require('./outputs.js')

// Test the validation functions

describe('Validation functions', () => {
    describe('validateConfig', () => {
      it('should return a valid config when a valid config is provided', () => {
        const result = validate.validateConfig(testData.config)
        expect(result).to.eql(testData.config)
      })
    })
})

// Test the version bumping function?



// Test the version bumping function?