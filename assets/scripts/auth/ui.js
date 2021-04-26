'use strict'

const store = require('.././store')

// confirm sign up succeeded
const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  $('#sign-up-form').trigger('reset')
  $('.sign-up').hide()
  $('.nav-container').show()
}

// confirm sign in succeeded and transition to view2
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
  $('#index').show()
  $('#delete').show()
  $('.nav-container').show()
}

// confirm change password succeeded
const onChangePasswordSuccess = function () {
  $('#messages').text('Changed password successfully')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}

// confirm sign out succeeded and return page to view1
const onSignOutSuccess = function () {
  $('#messages').text('Signed out successfully')
  store.user = null
  $('#intro').show()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#create').hide()
  $('#update').hide()
  $('#show').hide()
  $('#intro').show()
  $('#main').hide()
}

// error
const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
