'use strict'

const store = require('.././store')

// confirm sign up succeeded
const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  $('#sign-up-form').trigger('reset')
  $('.sign-up').hide()
}

// confirm sign in succeeded
const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#messages').text('Successfully signed in.')
  $('#main').show()
  $('#intro').hide()
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create').show()
  $('#update').show()
  $('#show').show()
}
// error
const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
