'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:'"https://easy-mock.com/mock/5b21d96f6b88957fa8a502e9/example"'
})
