'use strict'

const config = require('.././config')
const store = require('.././store')

// send sign up post request
const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

// send sign in get request
const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}
