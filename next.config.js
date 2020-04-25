

const withSass = require('@zeit/next-sass')
const withcSS = require('@zeit/next-css')

module.exports = withcSS(withSass())

