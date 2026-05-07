const expect = require('chai').expect
const validate = require('../src/validate.ts')
const { testData, badTestData } = require('./test-data.ts')
const outputs = require('./outputs.ts')

// Test the validation functions

describe('Validation functions', () => {
    describe('validateConfig', () => {
      it('should return a valid config when a valid config is provided', () => {
        const result = validate.validateConfig(testData.config)
        expect(result).to.eql(testData.config)
      })
      it('should throw an error when an invalid config is provided', () => {
        expect(() => validate.validateConfig(badTestData.config)).to.throw()
      })
    })

    describe('validateVersionsArray', () => {
      it('should return a valid versions array when a valid versions array is provided', () => {
        const result = validate.validateVersionsArray(testData.versions)
        expect(result).to.eql(testData.versions)
      })
      it('should throw an error when an invalid versions array is provided', () => {
        expect(() => validate.validateVersionsArray(badTestData.versions)).to.throw()
      })
    })

    describe('validateVersionToCreate', () => {
      it('should return a valid version to create when a valid version to create is provided', () => {
        const result = validate.validateVersionToCreate(testData.versionToCreate)
        expect(result).to.eql(testData.versionToCreate)
      })
      it('should throw an error when an invalid version to create is provided', () => {
        expect(() => validate.validateVersionToCreate(badTestData.versionToCreate)).to.throw()
      })
    })
})

// Test the version bumping function?



// Test the version bumping function?